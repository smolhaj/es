import { verifyPassword } from '../../_lib/jwt.js';

// Tables carrying user_id, deleted before the users row itself.
// error_events references sessions(id), so it's dropped first even though
// D1 doesn't enforce FK constraints by default — keeps the delete order
// correct if that ever changes.
const USER_SCOPED_TABLES = [
  'error_events',
  'sessions',
  'vocabulary_items',
  'skill_profiles',
  'concept_mastery',
  'personal_context',
  'cefr_history',
  'writing_samples',
  'module_progress',
  'flashcard_progress',
  'flashcard_review_log',
  'reading_attempts',
];

export async function onRequestDelete({ request, env, data }) {
  const userId = data.user.sub;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const password = body.password ?? '';
  if (!password) {
    return Response.json({ error: 'Password required to delete your account' }, { status: 400 });
  }

  const user = await env.DB.prepare('SELECT password_hash FROM users WHERE id = ?').bind(userId).first();
  if (!user) {
    return Response.json({ error: 'Account not found' }, { status: 404 });
  }

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) {
    // 403, not 401: the token itself is valid (data.user.sub resolved fine) —
    // this is a wrong-password rejection, not an auth failure. api.js's
    // global 401 handler treats any authenticated-request 401 as an
    // expired/invalid token and force-logs the user out, which would fire
    // here on every mistyped password otherwise.
    return Response.json({ error: 'Incorrect password' }, { status: 403 });
  }

  const stmts = USER_SCOPED_TABLES.map(table =>
    env.DB.prepare(`DELETE FROM ${table} WHERE user_id = ?`).bind(userId)
  );
  stmts.push(env.DB.prepare('DELETE FROM users WHERE id = ?').bind(userId));

  await env.DB.batch(stmts);

  return Response.json({ ok: true });
}
