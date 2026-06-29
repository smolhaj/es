export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;

  const { results: sessions } = await env.DB.prepare(
    `SELECT id, started_at, ended_at, items_reviewed, overall_accuracy,
            frustration_score, fatigue_signal, abandoned, session_notes
     FROM sessions
     WHERE user_id = ? AND ended_at IS NOT NULL
     ORDER BY started_at DESC
     LIMIT 50`
  ).bind(userId).all();

  if (!sessions?.length) return Response.json({ sessions: [] });

  const placeholders = sessions.map(() => '?').join(',');
  const sessionIdValues = sessions.map(s => s.id);

  const { results: errors } = await env.DB.prepare(
    `SELECT session_id, concept_id, grammatical_category, exercise_type, COUNT(*) as count
     FROM error_events
     WHERE session_id IN (${placeholders})
     GROUP BY session_id, concept_id, grammatical_category`
  ).bind(...sessionIdValues).all();

  const errorsBySession = {};
  for (const e of errors ?? []) {
    if (!errorsBySession[e.session_id]) errorsBySession[e.session_id] = [];
    errorsBySession[e.session_id].push(e);
  }

  const enriched = sessions.map(s => ({
    ...s,
    durationMinutes: s.ended_at
      ? Math.round((new Date(s.ended_at) - new Date(s.started_at)) / 60000)
      : null,
    errors: errorsBySession[s.id] ?? [],
  }));

  return Response.json({ sessions: enriched });
}
