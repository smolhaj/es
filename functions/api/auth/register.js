import { hashPassword, signJWT } from '../../_lib/jwt.js';

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const password = body.password ?? '';

  if (!email || !email.includes('@')) {
    return Response.json({ error: 'Valid email required' }, { status: 400 });
  }
  if (password.length < 8) {
    return Response.json({ error: 'Password must be at least 8 characters' }, { status: 400 });
  }

  const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (existing) {
    return Response.json({ error: 'Email already in use' }, { status: 409 });
  }

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);
  const now = new Date().toISOString();

  await env.DB.prepare(
    'INSERT INTO users (id, email, password_hash, created_at) VALUES (?, ?, ?, ?)'
  ).bind(id, email, passwordHash, now).run();

  // Seed skill profile
  const skills = ['reading', 'listening', 'writing', 'grammar'];
  await Promise.all(skills.map(skill =>
    env.DB.prepare(
      'INSERT INTO skill_profiles (user_id, skill, accuracy, cefr_level, session_count, updated_at) VALUES (?, ?, 0, "A1", 0, ?)'
    ).bind(id, skill, now).run()
  ));

  const token = await signJWT({ sub: id, email }, env.JWT_SECRET);
  return Response.json({ token, user: { id, email } }, { status: 201 });
}
