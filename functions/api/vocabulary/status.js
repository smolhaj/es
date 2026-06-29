export async function onRequestGet({ env, data }) {
  const { results } = await env.DB.prepare(`
    SELECT word, review_count, correct_count, due_at
    FROM vocabulary_items
    WHERE user_id = ?
  `).bind(data.user.sub).all();

  // Return as a map: word -> { review_count, correct_count, due_at }
  const map = {};
  for (const row of results ?? []) {
    map[row.word] = {
      reviewCount: row.review_count ?? 0,
      correctCount: row.correct_count ?? 0,
      dueAt: row.due_at,
    };
  }

  return Response.json({ words: map });
}
