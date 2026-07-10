import { verifyPassword, signJWT } from '../../_lib/jwt.js';
import { isLoginLocked, recordLoginFailure, clearLoginFailures } from '../../_lib/rateLimit.js';

export async function onRequestPost({ request, env }) {
  if (!env.JWT_SECRET) {
    return Response.json({ error: 'Server misconfigured: JWT_SECRET secret is not set in Cloudflare' }, { status: 500 });
  }

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

  if (env.KV && await isLoginLocked(env.KV, email)) {
    return Response.json({ error: 'Too many failed attempts. Try again in 15 minutes.' }, { status: 429 });
  }

  const user = await env.DB.prepare(
    'SELECT id, email, password_hash FROM users WHERE email = ?'
  ).bind(email).first();

  if (!user) {
    if (env.KV) await recordLoginFailure(env.KV, email);
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) {
    if (env.KV) await recordLoginFailure(env.KV, email);
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  if (env.KV) await clearLoginFailures(env.KV, email);

  const token = await signJWT({ sub: user.id, email: user.email }, env.JWT_SECRET);
  return Response.json({ token, user: { id: user.id, email: user.email } });
}
