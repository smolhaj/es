import { callGemini } from './_gemini.js';
import { scheduleReview } from '../../_lib/fsrs.js';

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { sessionId, exercise, learnerAnswer } = body;
  if (!sessionId) return Response.json({ error: 'sessionId required' }, { status: 400 });

  const session = await env.DB.prepare(
    'SELECT id FROM sessions WHERE id = ? AND user_id = ? AND ended_at IS NULL'
  ).bind(sessionId, data.user.id).first();

  if (!session) return Response.json({ error: 'Session not found' }, { status: 404 });

  const { correct, feedback, exercise: nextExercise, conceptNote } = await callGemini(
    env, '', exercise, learnerAnswer ?? ''
  );

  const now = new Date().toISOString();

  if (exercise) {
    // Log error event
    if (!correct) {
      await env.DB.prepare(`
        INSERT INTO error_events
          (id, user_id, session_id, occurred_at, exercise_type, item_text, correct_text, word, concept_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        crypto.randomUUID(), data.user.id, sessionId, now,
        exercise.type, learnerAnswer, exercise.answer, exercise.word ?? null,
        exercise.concept_id ?? null
      ).run();
    }

    // Upsert vocabulary + FSRS scheduling
    if (exercise.word && exercise.english) {
      const existingVocab = await env.DB.prepare(
        'SELECT stability, difficulty, retrievability, review_count, correct_count, last_reviewed_at FROM vocabulary_items WHERE user_id = ? AND word = ?'
      ).bind(data.user.id, exercise.word).first();

      const grade = correct ? 3 : 1; // Good(3) if correct, Again(1) if wrong
      const fsrs = scheduleReview(existingVocab ?? {}, grade);

      await env.DB.prepare(`
        INSERT INTO vocabulary_items
          (id, user_id, word, translation, review_count, correct_count, created_at, last_reviewed_at,
           stability, difficulty, retrievability, due_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id, word) DO UPDATE SET
          review_count = ?,
          correct_count = ?,
          last_reviewed_at = ?,
          stability = ?,
          difficulty = ?,
          retrievability = ?,
          due_at = ?
      `).bind(
        crypto.randomUUID(), data.user.id, exercise.word, exercise.english,
        fsrs.review_count, fsrs.correct_count, now, now,
        fsrs.stability, fsrs.difficulty, fsrs.retrievability, fsrs.due_at,
        // ON CONFLICT updates
        fsrs.review_count, fsrs.correct_count, now,
        fsrs.stability, fsrs.difficulty, fsrs.retrievability, fsrs.due_at
      ).run();
    }

    // Update concept mastery
    if (exercise.concept_id) {
      const existing = await env.DB.prepare(
        'SELECT mastery_score, error_count, session_error_count, sessions_seen, explanation_styles_tried, fossilization_flagged FROM concept_mastery WHERE user_id = ? AND concept_id = ?'
      ).bind(data.user.id, exercise.concept_id).first();

      const errorDelta = correct ? 0 : 1;
      // Mastery: exponential moving average toward 1 on correct, toward 0 on error
      const prevMastery = existing?.mastery_score ?? 0;
      const newMastery = Math.min(1, Math.max(0, prevMastery + (correct ? 0.1 : -0.15)));
      const newErrorCount = (existing?.error_count ?? 0) + errorDelta;
      const newSessionErrors = (existing?.session_error_count ?? 0) + errorDelta;
      const sessionsSeen = existing?.sessions_seen ?? 1;

      // Fossilization: error in 3+ sessions (track via error_count relative to sessions_seen)
      const fossilized = newErrorCount >= 3 && sessionsSeen >= 3 && newMastery < 0.4 ? 1 : (existing?.fossilization_flagged ?? 0);

      if (!existing) {
        await env.DB.prepare(`
          INSERT INTO concept_mastery
            (user_id, concept_id, mastery_score, error_count, session_error_count, sessions_seen,
             explanation_styles_tried, last_seen, first_seen, fossilization_flagged)
          VALUES (?, ?, ?, ?, ?, 1, '[]', ?, ?, ?)
        `).bind(
          data.user.id, exercise.concept_id, newMastery, newErrorCount, newSessionErrors,
          now, now, fossilized
        ).run();
      } else {
        await env.DB.prepare(`
          UPDATE concept_mastery SET
            mastery_score = ?, error_count = ?, session_error_count = ?,
            last_seen = ?, fossilization_flagged = ?
          WHERE user_id = ? AND concept_id = ?
        `).bind(newMastery, newErrorCount, newSessionErrors, now, fossilized, data.user.id, exercise.concept_id).run();
      }
    }

    // Update session stats
    await env.DB.prepare(`
      UPDATE sessions
      SET items_reviewed = items_reviewed + 1,
          correct_count = correct_count + ?
      WHERE id = ?
    `).bind(correct ? 1 : 0, sessionId).run();
  }

  return Response.json({ correct, feedback, exercise: nextExercise, conceptNote });
}
