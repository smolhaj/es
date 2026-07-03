export async function onRequestGet({ env, data }) {
  const { results } = await env.DB.prepare(
    'SELECT module_id, completed_at FROM module_progress WHERE user_id = ?'
  ).bind(data.user.sub).all();

  const completed = {};
  for (const row of results ?? []) {
    completed[row.module_id] = row.completed_at;
  }

  return Response.json({ completed });
}

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const moduleId = body.moduleId;
  if (!moduleId || typeof moduleId !== 'string') {
    return Response.json({ error: 'moduleId required' }, { status: 400 });
  }

  const now = new Date().toISOString();
  await env.DB.prepare(`
    INSERT INTO module_progress (user_id, module_id, completed_at)
    VALUES (?, ?, ?)
    ON CONFLICT(user_id, module_id) DO UPDATE SET completed_at = ?
  `).bind(data.user.sub, moduleId, now, now).run();

  return Response.json({ moduleId, completedAt: now });
}
