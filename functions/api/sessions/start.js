import { callGemini } from './_gemini.js';
import { compileBriefing } from '../../_lib/professor.js';

export async function onRequestPost({ request, env, data }) {
  let body = {};
  try { body = await request.json(); } catch {}

  const focusConcept = typeof body.focusConcept === 'string' ? body.focusConcept : null;

  const sessionId = crypto.randomUUID();
  const now = new Date().toISOString();

  await env.DB.prepare(
    'INSERT INTO sessions (id, user_id, started_at) VALUES (?, ?, ?)'
  ).bind(sessionId, data.user.sub, now).run();

  // Reset per-session error counter so the professor briefing reflects this session only
  await env.DB.prepare(
    'UPDATE concept_mastery SET session_error_count = 0 WHERE user_id = ?'
  ).bind(data.user.sub).run().catch(() => {});

  const [sessionsResult, briefing] = await Promise.all([
    env.DB.prepare(
      'SELECT COUNT(*) as cnt FROM sessions WHERE user_id = ? AND ended_at IS NOT NULL'
    ).bind(data.user.sub).first(),

    compileBriefing(env.DB, data.user.sub).catch(() => null),
  ]);

  const sessionCount = sessionsResult?.cnt ?? 0;
  let userMessage;
  if (focusConcept) {
    userMessage = `Focus this entire session on drilling the concept: "${focusConcept}". ` +
      `Use varied exercise types (multiple_choice, fill_blank, translation) all targeting that concept. ` +
      (sessionCount === 0 ? 'Start with an easy exercise.' : `I've done ${sessionCount} session(s) overall.`);
  } else {
    userMessage = sessionCount === 0
      ? 'This is my very first Spanish session. Start me with the absolute basics.'
      : `I've completed ${sessionCount} session(s). Give me a personalized first exercise based on my profile.`;
  }

  const { exercise, greeting } = await callGemini(env, userMessage, null, null, true, briefing);

  return Response.json({ sessionId, exercise, greeting });
}
