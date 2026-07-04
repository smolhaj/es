export async function onRequestGet({ env, data }) {
  const { results } = await env.DB.prepare(`
    SELECT card_id, stability, difficulty, due_at, review_count, correct_count, last_reviewed_at
    FROM flashcard_progress
    WHERE user_id = ?
  `).bind(data.user.sub).all();

  const progress = {};
  for (const row of results ?? []) {
    progress[row.card_id] = {
      stability: row.stability,
      difficulty: row.difficulty,
      dueAt: row.due_at,
      reviewCount: row.review_count,
      correctCount: row.correct_count,
      lastReviewedAt: row.last_reviewed_at,
    };
  }

  return Response.json({ progress });
}
