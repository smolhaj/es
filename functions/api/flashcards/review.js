import { scheduleFlashcard } from '../../_lib/flashcardScheduler.js';

const MAX_ATTEMPTS = 3;

export async function onRequestPost({ request, env, data }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { cardId, grade } = body;
  if (!cardId || typeof cardId !== 'string' || !Number.isInteger(grade) || grade < 1 || grade > 4) {
    return Response.json({ error: 'cardId and grade (1-4) required' }, { status: 400 });
  }

  // Read-compute-write with an optimistic-concurrency guard: the ON CONFLICT
  // DO UPDATE only applies if last_reviewed_at still matches what we just
  // read (NULL for a card with no prior row). If a concurrent review of the
  // same card already changed it, the guarded clause is a no-op (0 rows
  // affected) instead of silently overwriting it with stale FSRS math — we
  // retry against the now-current state instead.
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const existing = await env.DB.prepare(
      `SELECT state, step, stability, difficulty, due_at, lapses, review_count, correct_count,
              last_reviewed_at, is_leech, suspended
       FROM flashcard_progress WHERE user_id = ? AND card_id = ?`
    ).bind(data.user.sub, cardId).first();

    // Snapshot the pre-grade state for undo. A brand-new card has no prior
    // row at all, so its "undo" is a sentinel meaning "delete the row" rather
    // than a snapshot to restore.
    const undoSnapshot = existing ? JSON.stringify(existing) : 'NEW';
    const previousLastReviewedAt = existing?.last_reviewed_at ?? null;

    const next = scheduleFlashcard(existing, grade);
    const now = new Date().toISOString();

    const result = await env.DB.prepare(`
      INSERT INTO flashcard_progress
        (user_id, card_id, stability, difficulty, due_at, review_count, correct_count,
         last_reviewed_at, state, step, lapses, is_leech, suspended, undo_snapshot)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)
      ON CONFLICT(user_id, card_id) DO UPDATE SET
        stability = ?, difficulty = ?, due_at = ?, review_count = ?, correct_count = ?,
        last_reviewed_at = ?, state = ?, step = ?, lapses = ?, is_leech = ?, undo_snapshot = ?
      WHERE flashcard_progress.last_reviewed_at IS ?
    `).bind(
      data.user.sub, cardId, next.stability, next.difficulty, next.due_at,
      next.review_count, next.correct_count, now, next.state, next.step,
      next.lapses, next.isLeech ? 1 : 0, undoSnapshot,
      next.stability, next.difficulty, next.due_at, next.review_count, next.correct_count,
      now, next.state, next.step, next.lapses, next.isLeech ? 1 : 0, undoSnapshot,
      previousLastReviewedAt
    ).run();

    if (result.meta.changes > 0) {
      await env.DB.prepare(`
        INSERT INTO flashcard_review_log (id, user_id, card_id, grade, state, reviewed_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `).bind(crypto.randomUUID(), data.user.sub, cardId, grade, next.state, now).run();

      return Response.json({
        cardId,
        stability: next.stability,
        difficulty: next.difficulty,
        dueAt: next.due_at,
        reviewCount: next.review_count,
        state: next.state,
        step: next.step,
        lapses: next.lapses,
        isLeech: next.isLeech,
      });
    }
  }

  return Response.json({ error: 'Review conflicted with a concurrent update, try again' }, { status: 409 });
}
