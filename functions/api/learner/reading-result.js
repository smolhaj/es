import { computeCefrLevel } from '../../_lib/cefr.js';

const RECENT_WINDOW = 10;

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { passageId, correctCount, totalQuestions } = body;
  if (typeof passageId !== 'string' || !passageId) {
    return Response.json({ error: 'passageId required' }, { status: 400 });
  }
  if (!Number.isInteger(correctCount) || !Number.isInteger(totalQuestions) ||
      totalQuestions <= 0 || correctCount < 0 || correctCount > totalQuestions) {
    return Response.json({ error: 'Invalid correctCount/totalQuestions' }, { status: 400 });
  }

  const userId = data.user.sub;
  const now = new Date().toISOString();

  await env.DB.prepare(`
    INSERT INTO reading_attempts (id, user_id, passage_id, correct_count, total_questions, completed_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(crypto.randomUUID(), userId, passageId, correctCount, totalQuestions, now).run();

  const prevSkill = await env.DB.prepare(
    'SELECT cefr_level, session_count FROM skill_profiles WHERE user_id = ? AND skill = ?'
  ).bind(userId, 'reading').first();
  const prevCefr = prevSkill?.cefr_level ?? 'A1';
  const newSessionCount = (prevSkill?.session_count ?? 0) + 1;

  // Weighted accuracy over the most recent attempts (this one included) —
  // sum of correct over sum of total, not an average of per-passage rates,
  // so a 9/10 passage counts for more than a 1/1 one. Same rolling-window
  // approach sessions/end.js uses for 'grammar', just keyed to attempts
  // instead of sessions.
  const recent = await env.DB.prepare(`
    SELECT correct_count, total_questions FROM reading_attempts
    WHERE user_id = ? ORDER BY completed_at DESC LIMIT ?
  `).bind(userId, RECENT_WINDOW).all();
  const rows = recent.results ?? [];
  const sumCorrect = rows.reduce((s, r) => s + r.correct_count, 0);
  const sumTotal = rows.reduce((s, r) => s + r.total_questions, 0);
  const accuracy = sumTotal > 0 ? sumCorrect / sumTotal : 0;

  const newCefr = computeCefrLevel(accuracy, newSessionCount, prevCefr);

  await env.DB.prepare(`
    INSERT INTO skill_profiles (user_id, skill, accuracy, cefr_level, session_count, updated_at)
    VALUES (?, 'reading', ?, ?, 1, ?)
    ON CONFLICT(user_id, skill) DO UPDATE SET
      accuracy = ?,
      cefr_level = ?,
      session_count = session_count + 1,
      updated_at = excluded.updated_at
  `).bind(userId, accuracy, newCefr, now, accuracy, newCefr).run();

  if (prevCefr !== newCefr) {
    await env.DB.prepare(`
      INSERT INTO cefr_history (id, user_id, skill, from_level, to_level, transitioned_at, session_id)
      VALUES (?, ?, 'reading', ?, ?, ?, NULL)
    `).bind(crypto.randomUUID(), userId, prevCefr, newCefr, now).run();
  }

  return Response.json({
    accuracy,
    cefrLevel: newCefr,
    cefrChanged: prevCefr !== newCefr ? { from: prevCefr, to: newCefr } : null,
  });
}
