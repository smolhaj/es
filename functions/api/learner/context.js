export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;
  const { results } = await env.DB.prepare(
    'SELECT key, value, created_at, last_referenced_at FROM personal_context WHERE user_id = ? ORDER BY created_at DESC'
  ).bind(userId).all();
  return Response.json({ context: results ?? [] });
}

export async function onRequestPost({ request, env, data }) {
  const userId = data.user.sub;
  const body = await request.json();
  const { key, value } = body ?? {};
  if (!key || typeof key !== 'string' || key.length > 80) {
    return Response.json({ error: 'Invalid key' }, { status: 400 });
  }
  if (value == null || typeof value !== 'string' || value.length > 500) {
    return Response.json({ error: 'Invalid value' }, { status: 400 });
  }
  const now = new Date().toISOString();
  await env.DB.prepare(
    `INSERT INTO personal_context (user_id, key, value, created_at, last_referenced_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT (user_id, key) DO UPDATE SET value = excluded.value, last_referenced_at = excluded.last_referenced_at`
  ).bind(userId, key.trim(), value.trim(), now, now).run();
  return Response.json({ ok: true });
}

export async function onRequestDelete({ request, env, data }) {
  const userId = data.user.sub;
  const { key } = await request.json();
  if (!key) return Response.json({ error: 'Missing key' }, { status: 400 });
  await env.DB.prepare('DELETE FROM personal_context WHERE user_id = ? AND key = ?').bind(userId, key).run();
  return Response.json({ ok: true });
}
