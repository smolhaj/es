import { callGemini } from './_gemini.js';
import { scheduleReview } from '../../_lib/fsrs.js';
import { getNextExplanationStyle } from '../../_lib/concepts.js';
import { computeCefrLevel } from '../../_lib/cefr.js';

const WRITING_RECENT_WINDOW = 10;

const MAX_UPSERT_ATTEMPTS = 3;

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { sessionId, learnerAnswer, selfGrade } = body;
  if (!sessionId) return Response.json({ error: 'sessionId required' }, { status: 400 });
  if (typeof learnerAnswer === 'string' && learnerAnswer.length > 2000) {
    return Response.json({ error: 'Answer too long' }, { status: 400 });
  }
  if (selfGrade !== undefined && typeof selfGrade !== 'boolean') {
    return Response.json({ error: 'selfGrade must be a boolean' }, { status: 400 });
  }

  const session = await env.DB.prepare(
    'SELECT id, briefing_text, focus_concept, pending_exercise FROM sessions WHERE id = ? AND user_id = ? AND ended_at IS NULL'
  ).bind(sessionId, data.user.sub).first();

  if (!session) return Response.json({ error: 'Session not found' }, { status: 404 });

  // Grade against the exercise this server actually issued (start.js/the
  // previous turn), never the client's echoed copy — the client only
  // supplies what the learner typed. See ES.md punch-list item 1: a client
  // could otherwise alter `exercise.answer` to match its own submission and
  // fabricate a correct grade.
  let exercise = null;
  try { exercise = session.pending_exercise ? JSON.parse(session.pending_exercise) : null; } catch {}
  if (!exercise) return Response.json({ error: 'No exercise pending for this session' }, { status: 400 });

  // writing_prompt is open-ended — Gemini isn't asked to exact-match-grade
  // free text (see ES.md item 21). The client makes two calls to this same
  // endpoint instead: this "reveal" phase just hands back the model answer
  // already cached in pending_exercise (no Gemini call, no DB writes, no
  // exercise advance), so the learner can compare it to what they wrote.
  // The "confirm" phase below (selfGrade present) is what actually records
  // a result and asks Gemini for the next exercise.
  if (exercise.type === 'writing_prompt' && selfGrade === undefined) {
    if (typeof learnerAnswer !== 'string' || !learnerAnswer.trim()) {
      return Response.json({ error: 'learnerAnswer required' }, { status: 400 });
    }
    return Response.json({ phase: 'reveal', modelAnswer: exercise.answer });
  }

  const { correct, feedback, exercise: nextExercise, conceptNote, source, fallbackReason } = await callGemini(
    env, '', exercise, learnerAnswer ?? '', false, session.briefing_text ?? null, session.focus_concept ?? null, data.user.sub,
    exercise.type === 'writing_prompt' ? selfGrade : null
  );

  const now = new Date().toISOString();

  // Log error event
  if (!correct) {
    await env.DB.prepare(`
      INSERT INTO error_events
        (id, user_id, session_id, occurred_at, exercise_type, item_text, correct_text, word, concept_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(), data.user.sub, sessionId, now,
      exercise.type, learnerAnswer, exercise.answer, exercise.word ?? null,
      exercise.concept_id ?? null
    ).run();
  }

  // Upsert vocabulary + FSRS scheduling. Guarded on last_reviewed_at so a
  // concurrent review of the same word (e.g. this word also came up in
  // another open session) can't silently clobber this one's FSRS update
  // with math computed from a stale read — see ES.md punch-list item 4.
  if (exercise.word && exercise.english) {
    for (let attempt = 0; attempt < MAX_UPSERT_ATTEMPTS; attempt++) {
      const existingVocab = await env.DB.prepare(
        'SELECT stability, difficulty, retrievability, review_count, correct_count, last_reviewed_at FROM vocabulary_items WHERE user_id = ? AND word = ?'
      ).bind(data.user.sub, exercise.word).first();

      const grade = correct ? 3 : 1; // Good(3) if correct, Again(1) if wrong
      const fsrs = scheduleReview(existingVocab ?? {}, grade);
      const previousLastReviewedAt = existingVocab?.last_reviewed_at ?? null;

      const result = await env.DB.prepare(`
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
        WHERE vocabulary_items.last_reviewed_at IS ?
      `).bind(
        crypto.randomUUID(), data.user.sub, exercise.word, exercise.english,
        fsrs.review_count, fsrs.correct_count, now, now,
        fsrs.stability, fsrs.difficulty, fsrs.retrievability, fsrs.due_at,
        // ON CONFLICT updates
        fsrs.review_count, fsrs.correct_count, now,
        fsrs.stability, fsrs.difficulty, fsrs.retrievability, fsrs.due_at,
        previousLastReviewedAt
      ).run();

      if (result.meta.changes > 0) break;
    }
  }

  // Update concept mastery. Same optimistic-concurrency guard, keyed on
  // last_seen (updated on every touch, playing the same role
  // last_reviewed_at plays for vocabulary_items above).
  if (exercise.concept_id) {
    for (let attempt = 0; attempt < MAX_UPSERT_ATTEMPTS; attempt++) {
      const existing = await env.DB.prepare(
        'SELECT mastery_score, error_count, session_error_count, sessions_seen, explanation_styles_tried, fossilization_flagged, last_session_id, last_seen FROM concept_mastery WHERE user_id = ? AND concept_id = ?'
      ).bind(data.user.sub, exercise.concept_id).first();

      const errorDelta = correct ? 0 : 1;
      const prevMastery = existing?.mastery_score ?? 0;
      const newMastery = Math.min(1, Math.max(0, prevMastery + (correct ? 0.1 : -0.15)));
      const newErrorCount = (existing?.error_count ?? 0) + errorDelta;
      const newSessionErrors = (existing?.session_error_count ?? 0) + errorDelta;

      // sessions_seen as of THIS turn (not the pre-update DB value) so a 3rd-session
      // error is actually counted as "seen in 3 sessions" instead of requiring a 4th.
      const sessionsSeenDelta = existing && existing.last_session_id !== sessionId ? 1 : 0;
      const sessionsSeen = existing ? existing.sessions_seen + sessionsSeenDelta : 1;

      // Fossilization: error in 3+ distinct sessions. Clears once mastery recovers
      // (>=0.6, the same "ready" bar used elsewhere) instead of staying stuck forever,
      // so a concept can't sit permanently flagged "at risk" while also showing as
      // mastered in the professor briefing.
      const fossilized = newErrorCount >= 3 && sessionsSeen >= 3 && newMastery < 0.4
        ? 1
        : (newMastery >= 0.6 ? 0 : (existing?.fossilization_flagged ?? 0));

      if (!existing) {
        const firstStyle = getNextExplanationStyle(exercise.concept_id, []);
        const result = await env.DB.prepare(`
          INSERT INTO concept_mastery
            (user_id, concept_id, mastery_score, error_count, session_error_count, sessions_seen,
             explanation_styles_tried, last_seen, first_seen, fossilization_flagged, last_session_id)
          VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?)
          ON CONFLICT(user_id, concept_id) DO NOTHING
        `).bind(
          data.user.sub, exercise.concept_id, newMastery, newErrorCount, newSessionErrors,
          JSON.stringify([firstStyle]), now, now, fossilized, sessionId
        ).run();
        if (result.meta.changes > 0) break;
        // else: a concurrent request just created this row first — loop and
        // re-read, which will now find `existing` and take the update branch.
      } else {
        // Record the explanation style used this session so the professor rotates next time
        let triedStylesJson = existing.explanation_styles_tried ?? '[]';
        if (sessionsSeenDelta === 1) {
          let tried = [];
          try { tried = JSON.parse(triedStylesJson); } catch {}
          tried.push(getNextExplanationStyle(exercise.concept_id, tried));
          triedStylesJson = JSON.stringify(tried);
        }

        const result = await env.DB.prepare(`
          UPDATE concept_mastery SET
            mastery_score = ?, error_count = ?, session_error_count = ?,
            sessions_seen = sessions_seen + ?,
            last_seen = ?, fossilization_flagged = ?, last_session_id = ?,
            explanation_styles_tried = ?
          WHERE user_id = ? AND concept_id = ? AND last_seen IS ?
        `).bind(newMastery, newErrorCount, newSessionErrors, sessionsSeenDelta, now, fossilized, sessionId, triedStylesJson, data.user.sub, exercise.concept_id, existing.last_seen).run();
        if (result.meta.changes > 0) break;
      }
    }
  }

  // Update session stats and record the next issued exercise as the new
  // trusted copy for the following turn.
  await env.DB.prepare(`
    UPDATE sessions
    SET items_reviewed = items_reviewed + 1,
        correct_count = correct_count + ?,
        pending_exercise = ?
    WHERE id = ?
  `).bind(correct ? 1 : 0, JSON.stringify(nextExercise), sessionId).run();

  // Capture writing samples for translation-to-spanish and writing_prompt
  // exercises (the latter self-assessed above, not exact-match graded), and
  // use them to keep skill_profiles' 'writing' row real. `estimated_cefr`
  // used to be the exercise's difficulty number relabeled as a CEFR level
  // (1/2/3 -> A1/B1/B2) regardless of whether the translation was any good
  // — an actively wrong signal, not just a missing one. Left NULL until a
  // real per-sample assessment exists; `correct` (which this handler
  // already knows, self-reported for writing_prompt) is what actually
  // drives leveling now, the same way grammar's right/wrong exercise
  // history drives its level in sessions/end.js.
  if ((exercise.type === 'translation_to_spanish' || exercise.type === 'writing_prompt') && learnerAnswer?.trim().length > 3) {
    await env.DB.prepare(`
      INSERT INTO writing_samples
        (id, user_id, session_id, created_at, prompt, content, word_count, correct, professor_notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(), data.user.sub, sessionId, now,
      exercise.prompt ?? null,
      learnerAnswer.trim(),
      learnerAnswer.trim().split(/\s+/).filter(Boolean).length,
      correct ? 1 : 0,
      correct ? null : (feedback ?? null)
    ).run().catch(() => {});

    const prevSkill = await env.DB.prepare(
      'SELECT cefr_level, session_count FROM skill_profiles WHERE user_id = ? AND skill = ?'
    ).bind(data.user.sub, 'writing').first();
    const prevCefr = prevSkill?.cefr_level ?? 'A1';
    const newSessionCount = (prevSkill?.session_count ?? 0) + 1;

    const recent = await env.DB.prepare(`
      SELECT correct FROM writing_samples
      WHERE user_id = ? AND correct IS NOT NULL
      ORDER BY created_at DESC LIMIT ?
    `).bind(data.user.sub, WRITING_RECENT_WINDOW).all();
    const recentRows = recent.results ?? [];
    const writingAccuracy = recentRows.length > 0
      ? recentRows.reduce((s, r) => s + r.correct, 0) / recentRows.length
      : (correct ? 1 : 0);

    const newCefr = computeCefrLevel(writingAccuracy, newSessionCount, prevCefr);

    await env.DB.prepare(`
      INSERT INTO skill_profiles (user_id, skill, accuracy, cefr_level, session_count, updated_at)
      VALUES (?, 'writing', ?, ?, 1, ?)
      ON CONFLICT(user_id, skill) DO UPDATE SET
        accuracy = ?,
        cefr_level = ?,
        session_count = session_count + 1,
        updated_at = excluded.updated_at
    `).bind(data.user.sub, writingAccuracy, newCefr, now, writingAccuracy, newCefr).run().catch(() => {});

    if (prevCefr !== newCefr) {
      await env.DB.prepare(`
        INSERT INTO cefr_history (id, user_id, skill, from_level, to_level, transitioned_at, session_id)
        VALUES (?, ?, 'writing', ?, ?, ?, ?)
      `).bind(crypto.randomUUID(), data.user.sub, prevCefr, newCefr, now, sessionId).run().catch(() => {});
    }
  }

  return Response.json({ correct, feedback, exercise: nextExercise, conceptNote, source, fallbackReason });
}
