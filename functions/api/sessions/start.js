import { SYSTEM_PROMPT, FALLBACK_EXERCISES, callGemini } from './_gemini.js';

export async function onRequestPost({ env, data }) {
  const sessionId = crypto.randomUUID();
  const now = new Date().toISOString();

  await env.DB.prepare(
    'INSERT INTO sessions (id, user_id, started_at) VALUES (?, ?, ?)'
  ).bind(sessionId, data.user.id, now).run();

  // Get session count for personalised opening
  const { results: recentSessions } = await env.DB.prepare(
    'SELECT id FROM sessions WHERE user_id = ? AND ended_at IS NOT NULL ORDER BY started_at DESC LIMIT 3'
  ).bind(data.user.id).all();

  const sessionCount = recentSessions.length;
  const userMessage = sessionCount === 0
    ? 'This is my very first Spanish session. Start me with the absolute basics.'
    : `I\'ve completed ${sessionCount} session(s) before. Give me the first exercise for today.`;

  const { exercise, greeting } = await callGemini(env, userMessage, null, null, true);

  return Response.json({ sessionId, exercise, greeting });
}
