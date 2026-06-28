export async function onRequestGet({ env, data }) {
  const now = new Date().toISOString();

  const { results } = await env.DB.prepare(`
    SELECT id, word, translation, stability, difficulty, retrievability, due_at,
           review_count, correct_count, last_reviewed_at
    FROM vocabulary_items
    WHERE user_id = ? AND due_at IS NOT NULL AND due_at <= ?
    ORDER BY due_at ASC
    LIMIT 30
  `).bind(data.user.sub, now).all();

  return Response.json({ items: results, count: results.length });
}
