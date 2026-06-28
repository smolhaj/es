import { CONCEPTS } from '../../_lib/concepts.js';

export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;

  const { results: rows } = await env.DB.prepare(
    `SELECT concept_id, mastery_score, error_count, session_error_count,
            sessions_seen, last_seen, first_seen, fossilization_flagged
     FROM concept_mastery
     WHERE user_id = ?`
  ).bind(userId).all();

  const masteryById = {};
  for (const row of rows ?? []) {
    masteryById[row.concept_id] = row;
  }

  const concepts = Object.values(CONCEPTS).map(c => {
    const m = masteryById[c.id];
    return {
      id: c.id,
      label: c.label,
      cefr: c.cefr,
      category: c.category,
      prereqs: c.prereqs,
      masteryScore: m?.mastery_score ?? null,
      errorCount: m?.error_count ?? 0,
      sessionsSeen: m?.sessions_seen ?? 0,
      lastSeen: m?.last_seen ?? null,
      firstSeen: m?.first_seen ?? null,
      fossilizationFlagged: !!(m?.fossilization_flagged),
      seen: !!m,
    };
  });

  return Response.json({ concepts });
}
