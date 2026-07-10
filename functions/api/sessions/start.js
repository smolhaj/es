import { callGemini } from './_gemini.js';
import { compileBriefing } from '../../_lib/professor.js';
import { CONCEPTS } from '../../_lib/concepts.js';

export async function onRequestPost({ request, env, data }) {
  let body = {};
  try { body = await request.json(); } catch {}

  const rawFocus = typeof body.focusConcept === 'string' ? body.focusConcept.trim() : null;
  const focusConcept = (rawFocus && CONCEPTS[rawFocus]) ? rawFocus : null;

  const sessionId = crypto.randomUUID();
  const now = new Date().toISOString();

  await env.DB.prepare(
    'INSERT INTO sessions (id, user_id, started_at, focus_concept) VALUES (?, ?, ?, ?)'
  ).bind(sessionId, data.user.sub, now, focusConcept).run();

  // Reset per-session error counter so the professor briefing reflects this session only
  await env.DB.prepare(
    'UPDATE concept_mastery SET session_error_count = 0 WHERE user_id = ?'
  ).bind(data.user.sub).run().catch(() => {});

  const [sessionsResult, masteryResult, briefing] = await Promise.all([
    env.DB.prepare(
      'SELECT COUNT(*) as cnt FROM sessions WHERE user_id = ? AND ended_at IS NOT NULL'
    ).bind(data.user.sub).first(),

    // A session a learner closed the tab on (no "End session" click, no
    // beforeunload — see Session.jsx) never gets ended_at set, but turn.js
    // still wrote real concept_mastery data for it. Without this check, a
    // learner in that state gets treated as brand-new forever, and the
    // "very first session" framing below overrides the actual weak-spot
    // data compileBriefing() already computed for them. See ES.md punch
    // list, BUG-2.
    env.DB.prepare(
      'SELECT COUNT(*) as cnt FROM concept_mastery WHERE user_id = ?'
    ).bind(data.user.sub).first(),

    compileBriefing(env.DB, data.user.sub).catch(() => null),
  ]);

  const sessionCount = sessionsResult?.cnt ?? 0;
  const hasHistory = sessionCount > 0 || (masteryResult?.cnt ?? 0) > 0;
  let userMessage;
  if (focusConcept) {
    const conceptLabel = CONCEPTS[focusConcept]?.label ?? focusConcept;
    userMessage = `Focus this entire session on drilling the concept: "${conceptLabel}" (concept_id: ${focusConcept}). ` +
      `Use varied exercise types (multiple_choice, fill_blank, translation) all targeting that concept. ` +
      (hasHistory ? `I've done ${sessionCount} session(s) overall.` : 'Start with an easy exercise.');
  } else {
    userMessage = hasHistory
      ? `I've completed ${sessionCount} session(s). Give me a personalized first exercise based on my profile.`
      : 'This is my very first Spanish session. Start me with the absolute basics.';
  }

  // Store briefing so subsequent turns can use it (Gemini has no cross-request memory)
  if (briefing) {
    await env.DB.prepare(
      'UPDATE sessions SET briefing_text = ? WHERE id = ?'
    ).bind(briefing, sessionId).run().catch(() => {});
  }

  const { exercise, greeting, source, fallbackReason } = await callGemini(env, userMessage, null, null, true, briefing, focusConcept, data.user.sub);

  // Persist the exercise actually issued so turn.js can grade against this
  // trusted server-side copy instead of whatever the client echoes back.
  await env.DB.prepare(
    'UPDATE sessions SET pending_exercise = ? WHERE id = ?'
  ).bind(JSON.stringify(exercise), sessionId).run();

  return Response.json({ sessionId, exercise, greeting, source, fallbackReason });
}
