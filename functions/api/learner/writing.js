export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;
  const { results } = await env.DB.prepare(
    `SELECT id, session_id, created_at, prompt, content, word_count, estimated_cefr, professor_notes
     FROM writing_samples
     WHERE user_id = ?
     ORDER BY created_at DESC
     LIMIT 100`
  ).bind(userId).all();
  return Response.json({ samples: results ?? [] });
}
