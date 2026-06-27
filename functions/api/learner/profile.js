export async function onRequestGet({ env, data }) {
  const userId = data.user.id;

  const [sessionsResult, vocabResult, skillsResult, recentResult] = await Promise.all([
    env.DB.prepare(
      'SELECT COUNT(*) as total, SUM(CASE WHEN ended_at IS NOT NULL THEN 1 ELSE 0 END) as completed, AVG(overall_accuracy) as avg_accuracy FROM sessions WHERE user_id = ?'
    ).bind(userId).first(),

    env.DB.prepare(
      'SELECT COUNT(*) as seen, SUM(CASE WHEN correct_count >= 3 THEN 1 ELSE 0 END) as mastered FROM vocabulary_items WHERE user_id = ?'
    ).bind(userId).first(),

    env.DB.prepare(
      'SELECT skill, accuracy, cefr_level, session_count FROM skill_profiles WHERE user_id = ?'
    ).bind(userId).all(),

    env.DB.prepare(
      'SELECT id, started_at, ended_at, items_reviewed, correct_count, overall_accuracy FROM sessions WHERE user_id = ? AND ended_at IS NOT NULL ORDER BY started_at DESC LIMIT 5'
    ).bind(userId).all()
  ]);

  const skills = {};
  for (const row of skillsResult.results) {
    skills[row.skill] = { accuracy: row.accuracy, level: row.cefr_level, sessions: row.session_count };
  }

  // Determine overall CEFR: minimum across tracked skills
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const skillLevels = Object.values(skills).map(s => levels.indexOf(s.level));
  const overallLevel = skillLevels.length > 0
    ? levels[Math.min(...skillLevels)]
    : 'A1';

  return Response.json({
    sessions: {
      total: sessionsResult?.total ?? 0,
      completed: sessionsResult?.completed ?? 0,
      avgAccuracy: sessionsResult?.avg_accuracy ?? 0
    },
    vocabulary: {
      seen: vocabResult?.seen ?? 0,
      mastered: vocabResult?.mastered ?? 0
    },
    cefr: overallLevel,
    skills,
    recentSessions: recentResult.results
  });
}
