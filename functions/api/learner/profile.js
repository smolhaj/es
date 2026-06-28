export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;
  const now = new Date().toISOString();

  const [sessionsResult, vocabResult, skillsResult, recentResult, dueVocab, weakConcepts, streakDates, cefrHistory] = await Promise.all([
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
    ).bind(userId).all(),

    env.DB.prepare(
      'SELECT COUNT(*) as due_count FROM vocabulary_items WHERE user_id = ? AND due_at IS NOT NULL AND due_at <= ?'
    ).bind(userId, now).first(),

    env.DB.prepare(
      `SELECT concept_id, mastery_score, error_count, fossilization_flagged
       FROM concept_mastery
       WHERE user_id = ? AND sessions_seen >= 2
       ORDER BY mastery_score ASC, error_count DESC
       LIMIT 5`
    ).bind(userId).all(),

    env.DB.prepare(
      `SELECT DISTINCT date(started_at) as day FROM sessions
       WHERE user_id = ? AND ended_at IS NOT NULL
       ORDER BY day DESC LIMIT 60`
    ).bind(userId).all(),

    env.DB.prepare(
      `SELECT skill, from_level, to_level, transitioned_at
       FROM cefr_history WHERE user_id = ?
       ORDER BY transitioned_at ASC`
    ).bind(userId).all(),
  ]);

  const skills = {};
  for (const row of skillsResult.results) {
    skills[row.skill] = { accuracy: row.accuracy, level: row.cefr_level, sessions: row.session_count };
  }

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const skillLevels = Object.values(skills).map(s => levels.indexOf(s.level));
  const overallLevel = skillLevels.length > 0
    ? levels[Math.min(...skillLevels)]
    : 'A1';

  const streak = computeStreak(streakDates?.results ?? []);

  return Response.json({
    sessions: {
      total: sessionsResult?.total ?? 0,
      completed: sessionsResult?.completed ?? 0,
      avgAccuracy: sessionsResult?.avg_accuracy ?? 0,
    },
    vocabulary: {
      seen: vocabResult?.seen ?? 0,
      mastered: vocabResult?.mastered ?? 0,
      dueForReview: dueVocab?.due_count ?? 0,
    },
    cefr: overallLevel,
    skills,
    recentSessions: recentResult.results,
    weakConcepts: weakConcepts.results,
    streak,
    cefrHistory: cefrHistory.results ?? [],
  });
}

function computeStreak(rows) {
  if (!rows.length) return 0;
  const days = rows.map(r => r.day).sort().reverse();
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (days[0] !== today && days[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const prev = new Date(days[i - 1]);
    const curr = new Date(days[i]);
    const diff = (prev - curr) / 86400000;
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}
