import { scheduleReview } from '../../_lib/fsrs.js';

const MAX_ATTEMPTS = 3;

export async function onRequestPost({ request, env, data }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { wordId, grade } = body;
  if (!wordId || !Number.isInteger(grade) || grade < 1 || grade > 4) {
    return Response.json({ error: 'wordId and grade (1-4) required' }, { status: 400 });
  }

  // Read-compute-write with an optimistic-concurrency guard: the UPDATE only
  // applies if last_reviewed_at still matches what we just read. If another
  // concurrent review already changed it (same word reviewed twice at once,
  // e.g. two tabs), meta.changes comes back 0 and we retry against the now-
  // current state instead of silently overwriting it with stale FSRS math.
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const item = await env.DB.prepare(
      'SELECT id, stability, difficulty, retrievability, review_count, correct_count, last_reviewed_at FROM vocabulary_items WHERE id = ? AND user_id = ?'
    ).bind(wordId, data.user.sub).first();

    if (!item) return Response.json({ error: 'Item not found' }, { status: 404 });

    const fsrs = scheduleReview(item, grade);
    const now = new Date().toISOString();

    const result = await env.DB.prepare(`
      UPDATE vocabulary_items SET
        stability = ?, difficulty = ?, retrievability = ?, due_at = ?,
        review_count = ?, correct_count = ?, last_reviewed_at = ?
      WHERE id = ? AND user_id = ? AND last_reviewed_at IS ?
    `).bind(
      fsrs.stability, fsrs.difficulty, fsrs.retrievability, fsrs.due_at,
      fsrs.review_count, fsrs.correct_count, now,
      wordId, data.user.sub, item.last_reviewed_at
    ).run();

    if (result.meta.changes > 0) {
      return Response.json({
        stability: fsrs.stability,
        difficulty: fsrs.difficulty,
        due_at: fsrs.due_at,
        review_count: fsrs.review_count,
      });
    }
  }

  return Response.json({ error: 'Review conflicted with a concurrent update, try again' }, { status: 409 });
}
