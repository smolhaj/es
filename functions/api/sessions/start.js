import { callGemini } from './_gemini.js';
import { compileBriefing } from '../../_lib/professor.js';

export async function onRequestPost({ env, data }) {
  const sessionId = crypto.randomUUID();
  const now = new Date().toISOString();

  await env.DB.prepare(
    'INSERT INTO sessions (id, user_id, started_at) VALUES (?, ?, ?)'
  ).bind(sessionId, data.user.sub, now).run();

  const [sessionsResult, briefing] = await Promise.all([
    env.DB.prepare(
      'SELECT COUNT(*) as cnt FROM sessions WHERE user_id = ? AND ended_at IS NOT NULL'
    ).bind(data.user.sub).first(),

    compileBriefing(env.DB, data.user.sub).catch(() => null),
  ]);

  const sessionCount = sessionsResult?.cnt ?? 0;
  const userMessage = sessionCount === 0
    ? 'This is my very first Spanish session. Start me with the absolute basics.'
    : `I\'ve completed ${sessionCount} session(s). Give me a personalized first exercise based on my profile.`;

  const { exercise, greeting } = await callGemini(env, userMessage, null, null, true, briefing);

  return Response.json({ sessionId, exercise, greeting });
}
