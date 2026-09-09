// `newToday` is the count of cards whose first-ever review happened today —
// what the client's daily new-card cap has to be measured against. It can't
// be derived from flashcard_progress alone (nothing there records when a
// card was first introduced, only when it was last seen), so it comes from
// the append-only review log: a card reviewed today with no earlier log row
// is a card introduced today.
//
// Day boundary is UTC midnight, matching flashcards/stats.js's "reviews
// today" so the cap and the stats page never disagree about what day it is.
export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;
  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  const since = todayStart.toISOString();

  const [{ results }, newToday] = await Promise.all([
    env.DB.prepare(`
      SELECT card_id, stability, difficulty, due_at, review_count, correct_count,
             last_reviewed_at, state, step, lapses, is_leech, suspended
      FROM flashcard_progress
      WHERE user_id = ?
    `).bind(userId).all(),

    env.DB.prepare(`
      SELECT COUNT(DISTINCT l.card_id) AS count
      FROM flashcard_review_log l
      WHERE l.user_id = ? AND l.reviewed_at >= ?
        AND NOT EXISTS (
          SELECT 1 FROM flashcard_review_log e
          WHERE e.user_id = l.user_id AND e.card_id = l.card_id AND e.reviewed_at < ?
        )
    `).bind(userId, since, since).first(),
  ]);

  const progress = {};
  for (const row of results ?? []) {
    progress[row.card_id] = {
      stability: row.stability,
      difficulty: row.difficulty,
      dueAt: row.due_at,
      reviewCount: row.review_count,
      correctCount: row.correct_count,
      lastReviewedAt: row.last_reviewed_at,
      state: row.state,
      step: row.step,
      lapses: row.lapses,
      isLeech: !!row.is_leech,
      suspended: !!row.suspended,
    };
  }

  return Response.json({ progress, newToday: newToday?.count ?? 0 });
}
