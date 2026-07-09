// Deck-health snapshot for the Flashcards stats/forecast page. Doesn't know
// the total deck size (the static word list lives in the frontend bundle,
// not the DB) — the client combines this with its own card count to derive
// "new" (never-reviewed) cards as deckSize minus rows returned here.
export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;
  const now = new Date();
  const todayStart = new Date(now); todayStart.setUTCHours(0, 0, 0, 0);
  const weekStart = new Date(todayStart.getTime() - 6 * 86400000);

  const [stateBreakdown, leeches, logToday, logWeek, forecast] = await Promise.all([
    env.DB.prepare(`
      SELECT state, suspended, COUNT(*) as count
      FROM flashcard_progress WHERE user_id = ?
      GROUP BY state, suspended
    `).bind(userId).all(),

    env.DB.prepare(`
      SELECT card_id, lapses, stability FROM flashcard_progress
      WHERE user_id = ? AND is_leech = 1
      ORDER BY lapses DESC LIMIT 50
    `).bind(userId).all(),

    env.DB.prepare(`
      SELECT COUNT(*) as total, SUM(CASE WHEN grade >= 2 THEN 1 ELSE 0 END) as correct
      FROM flashcard_review_log WHERE user_id = ? AND reviewed_at >= ?
    `).bind(userId, todayStart.toISOString()).first(),

    env.DB.prepare(`
      SELECT COUNT(*) as total, SUM(CASE WHEN grade >= 2 THEN 1 ELSE 0 END) as correct
      FROM flashcard_review_log WHERE user_id = ? AND reviewed_at >= ?
    `).bind(userId, weekStart.toISOString()).first(),

    env.DB.prepare(`
      SELECT due_at FROM flashcard_progress
      WHERE user_id = ? AND suspended = 0 AND due_at IS NOT NULL
        AND due_at <= ?
    `).bind(userId, new Date(todayStart.getTime() + 7 * 86400000).toISOString()).all(),
  ]);

  const states = { learning: 0, review: 0, relearning: 0, suspended: 0 };
  for (const row of stateBreakdown.results ?? []) {
    if (row.suspended) { states.suspended += row.count; continue; }
    if (row.state === 'learning') states.learning += row.count;
    else if (row.state === 'relearning') states.relearning += row.count;
    else states.review += row.count;
  }

  // Bucket the 7-day forecast by calendar day (UTC) relative to today.
  const dayBuckets = Array(7).fill(0);
  for (const row of forecast.results ?? []) {
    const diffDays = Math.floor((new Date(row.due_at).getTime() - todayStart.getTime()) / 86400000);
    if (diffDays >= 0 && diffDays < 7) dayBuckets[diffDays] += 1;
  }

  return Response.json({
    states,
    leeches: (leeches.results ?? []).map(l => ({ cardId: l.card_id, lapses: l.lapses, stability: l.stability })),
    retention: {
      today: { total: logToday?.total ?? 0, correct: logToday?.correct ?? 0 },
      week: { total: logWeek?.total ?? 0, correct: logWeek?.correct ?? 0 },
    },
    forecast: dayBuckets,
  });
}
