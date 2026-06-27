import { callGemini } from './_gemini.js';

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { sessionId, exercise, learnerAnswer } = body;

  if (!sessionId) {
    return Response.json({ error: 'sessionId required' }, { status: 400 });
  }

  const session = await env.DB.prepare(
    'SELECT id FROM sessions WHERE id = ? AND user_id = ? AND ended_at IS NULL'
  ).bind(sessionId, data.user.id).first();

  if (!session) {
    return Response.json({ error: 'Session not found' }, { status: 404 });
  }

  const { correct, feedback, exercise: nextExercise } = await callGemini(
    env, '', exercise, learnerAnswer ?? ''
  );

  // Persist results
  const now = new Date().toISOString();

  if (exercise) {
    // Log error event when wrong
    if (!correct) {
      await env.DB.prepare(`
        INSERT INTO error_events (id, user_id, session_id, occurred_at, exercise_type, item_text, correct_text, word)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        crypto.randomUUID(), data.user.id, sessionId, now,
        exercise.type, learnerAnswer, exercise.answer, exercise.word ?? null
      ).run();
    }

    // Upsert vocabulary item
    if (exercise.word && exercise.english) {
      await env.DB.prepare(`
        INSERT INTO vocabulary_items (id, user_id, word, translation, review_count, correct_count, created_at, last_reviewed_at)
        VALUES (?, ?, ?, ?, 1, ?, ?, ?)
        ON CONFLICT(user_id, word) DO UPDATE SET
          review_count = review_count + 1,
          correct_count = correct_count + excluded.correct_count,
          last_reviewed_at = excluded.last_reviewed_at
      `).bind(
        crypto.randomUUID(), data.user.id, exercise.word, exercise.english,
        correct ? 1 : 0, now, now
      ).run();
    }

    // Update session stats
    await env.DB.prepare(`
      UPDATE sessions
      SET items_reviewed = items_reviewed + 1,
          correct_count = correct_count + ?
      WHERE id = ?
    `).bind(correct ? 1 : 0, sessionId).run();
  }

  return Response.json({ correct, feedback, exercise: nextExercise });
}
