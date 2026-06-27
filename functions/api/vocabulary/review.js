import { scheduleReview } from '../../_lib/fsrs.js';

export async function onRequestPost({ request, env, data }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { wordId, grade } = body;
  if (!wordId || !grade || grade < 1 || grade > 4) {
    return Response.json({ error: 'wordId and grade (1-4) required' }, { status: 400 });
  }

  const item = await env.DB.prepare(
    'SELECT id, stability, difficulty, retrievability, review_count, correct_count, last_reviewed_at FROM vocabulary_items WHERE id = ? AND user_id = ?'
  ).bind(wordId, data.user.id).first();

  if (!item) return Response.json({ error: 'Item not found' }, { status: 404 });

  const fsrs = scheduleReview(item, grade);
  const now = new Date().toISOString();

  await env.DB.prepare(`
    UPDATE vocabulary_items SET
      stability = ?, difficulty = ?, retrievability = ?, due_at = ?,
      review_count = ?, correct_count = ?, last_reviewed_at = ?
    WHERE id = ? AND user_id = ?
  `).bind(
    fsrs.stability, fsrs.difficulty, fsrs.retrievability, fsrs.due_at,
    fsrs.review_count, fsrs.correct_count, now,
    wordId, data.user.id
  ).run();

  return Response.json({
    stability: fsrs.stability,
    difficulty: fsrs.difficulty,
    due_at: fsrs.due_at,
    review_count: fsrs.review_count,
  });
}
