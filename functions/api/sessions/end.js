function computeCefrLevel(accuracy, sessionCount, current) {
  const order = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const thresholds = {
    A1: { acc: 0.70, sessions: 3 },
    A2: { acc: 0.75, sessions: 5 },
    B1: { acc: 0.80, sessions: 8 },
    B2: { acc: 0.82, sessions: 10 },
  };
  const idx = order.indexOf(current);
  if (idx === -1 || idx === order.length - 1) return current;
  const t = thresholds[current];
  if (t && accuracy >= t.acc && sessionCount >= t.sessions) {
    return order[idx + 1];
  }
  // Downgrade if consistently weak (only after enough data)
  if (idx > 0 && sessionCount >= 4 && accuracy < 0.45) {
    return order[idx - 1];
  }
  return current;
}

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

  // Update skill profiles and track CEFR level progression
  const prevSkill = await env.DB.prepare(
    'SELECT cefr_level, accuracy, session_count FROM skill_profiles WHERE user_id = ? AND skill = ?'
  ).bind(data.user.sub, 'grammar').first();

  // Compute new CEFR level based on rolling accuracy and session count
  const newSessionCount = (prevSkill?.session_count ?? 0) + 1;
  const prevAcc = prevSkill?.accuracy ?? 0;
  const newAcc = prevSkill
    ? (prevAcc * prevSkill.session_count + accuracy) / newSessionCount
    : accuracy;
  const prevCefr = prevSkill?.cefr_level ?? 'A1';
  const newCefr = computeCefrLevel(newAcc, newSessionCount, prevCefr);

  await env.DB.prepare(`
    INSERT INTO skill_profiles (user_id, skill, accuracy, cefr_level, session_count, updated_at)
    VALUES (?, 'grammar', ?, ?, 1, ?)
    ON CONFLICT(user_id, skill) DO UPDATE SET
      accuracy = ?,
      cefr_level = ?,
      session_count = session_count + 1,
      updated_at = excluded.updated_at
  `).bind(data.user.sub, newAcc, newCefr, now, newAcc, newCefr).run();

  // Record CEFR level change
  if (prevCefr !== newCefr) {
    await env.DB.prepare(`
      INSERT INTO cefr_history (id, user_id, skill, from_level, to_level, transitioned_at, session_id)
      VALUES (?, ?, 'grammar', ?, ?, ?, ?)
    `).bind(crypto.randomUUID(), data.user.sub, prevCefr, newCefr, now, sessionId).run();
  }

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
