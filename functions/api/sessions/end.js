export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { sessionId } = body;
  if (!sessionId) return Response.json({ error: 'sessionId required' }, { status: 400 });

  const session = await env.DB.prepare(
    'SELECT * FROM sessions WHERE id = ? AND user_id = ? AND ended_at IS NULL'
  ).bind(sessionId, data.user.sub).first();

  if (!session) {
    return Response.json({ error: 'Session not found' }, { status: 404 });
  }

  const accuracy = session.items_reviewed > 0
    ? session.correct_count / session.items_reviewed
    : 0;

  const now = new Date().toISOString();

  await env.DB.prepare(`
    UPDATE sessions
    SET ended_at = ?, overall_accuracy = ?
    WHERE id = ?
  `).bind(now, accuracy, sessionId).run();

  // Update skill profiles
  await env.DB.prepare(`
    INSERT INTO skill_profiles (user_id, skill, accuracy, cefr_level, session_count, updated_at)
    VALUES (?, 'grammar', ?, 'A1', 1, ?)
    ON CONFLICT(user_id, skill) DO UPDATE SET
      accuracy = (accuracy * session_count + excluded.accuracy) / (session_count + 1),
      session_count = session_count + 1,
      updated_at = excluded.updated_at
  `).bind(data.user.sub, accuracy, now).run();

  // Concept-level error breakdown for summary
  const [errorsResult, wordsResult] = await Promise.all([
    env.DB.prepare(`
      SELECT concept_id, exercise_type, COUNT(*) as count
      FROM error_events
      WHERE session_id = ?
      GROUP BY concept_id, exercise_type
      ORDER BY count DESC
    `).bind(sessionId).all(),

    env.DB.prepare(`
      SELECT DISTINCT word, translation
      FROM vocabulary_items
      WHERE user_id = ? AND last_reviewed_at >= ?
      ORDER BY word
      LIMIT 20
    `).bind(data.user.sub, session.started_at).all(),
  ]);

  return Response.json({
    accuracy,
    itemsReviewed: session.items_reviewed,
    correctCount: session.correct_count,
    errors: errorsResult.results ?? [],
    wordsReviewed: wordsResult.results ?? [],
  });
}
