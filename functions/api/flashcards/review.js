import { scheduleReview } from '../../_lib/fsrs.js';

export async function onRequestPost({ request, env, data }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { cardId, grade } = body;
  if (!cardId || typeof cardId !== 'string' || !grade || grade < 1 || grade > 4) {
    return Response.json({ error: 'cardId and grade (1-4) required' }, { status: 400 });
  }

  const item = await env.DB.prepare(
    'SELECT stability, difficulty, review_count, correct_count, last_reviewed_at FROM flashcard_progress WHERE user_id = ? AND card_id = ?'
  ).bind(data.user.sub, cardId).first();

  const fsrs = scheduleReview(item ?? {}, grade);
  const now = new Date().toISOString();

  await env.DB.prepare(`
    INSERT INTO flashcard_progress
      (user_id, card_id, stability, difficulty, due_at, review_count, correct_count, last_reviewed_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id, card_id) DO UPDATE SET
      stability = ?, difficulty = ?, due_at = ?, review_count = ?, correct_count = ?, last_reviewed_at = ?
  `).bind(
    data.user.sub, cardId, fsrs.stability, fsrs.difficulty, fsrs.due_at, fsrs.review_count, fsrs.correct_count, now,
    fsrs.stability, fsrs.difficulty, fsrs.due_at, fsrs.review_count, fsrs.correct_count, now
  ).run();

  return Response.json({
    cardId,
    stability: fsrs.stability,
    difficulty: fsrs.difficulty,
    dueAt: fsrs.due_at,
    reviewCount: fsrs.review_count,
  });
}
