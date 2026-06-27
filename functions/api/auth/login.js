import { verifyPassword, signJWT } from '../../_lib/jwt.js';

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const password = body.password ?? '';

  if (!email || !password) {
    return Response.json({ error: 'Email and password required' }, { status: 400 });
  }

  const user = await env.DB.prepare(
    'SELECT id, email, password_hash FROM users WHERE email = ?'
  ).bind(email).first();

  if (!user) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = await signJWT({ sub: user.id, email: user.email }, env.JWT_SECRET);
  return Response.json({ token, user: { id: user.id, email: user.email } });
}
