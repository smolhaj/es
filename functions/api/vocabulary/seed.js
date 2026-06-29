// Seeds vocabulary_items for a user from the static vocabulary content.
// Seeds words at or below the user's CEFR level (plus one preview level).
// Safe to call multiple times — only inserts rows that don't yet exist.

import { VOCABULARY } from '../../../src/content/vocabulary.js';

const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export async function onRequestPost({ env, data }) {
  const userId = data.user.sub;
  const now = new Date().toISOString();

  // Get user's current CEFR level
  const skill = await env.DB.prepare(
    'SELECT cefr_level FROM skill_profiles WHERE user_id = ? AND skill = ?'
  ).bind(userId, 'grammar').first();

  const userCefr = skill?.cefr_level ?? 'A1';
  const userCefrIdx = CEFR_ORDER.indexOf(userCefr);

  // Seed words up to one level above current (preview upcoming vocabulary)
  const maxIdx = Math.min(userCefrIdx + 1, CEFR_ORDER.length - 1);
  const eligibleLevels = new Set(CEFR_ORDER.slice(0, maxIdx + 1));

  const { results: existing } = await env.DB.prepare(
    'SELECT word FROM vocabulary_items WHERE user_id = ?'
  ).bind(userId).all();

  const existingWords = new Set((existing ?? []).map(r => r.word));

  const toInsert = VOCABULARY.filter(v =>
    !existingWords.has(v.es) && eligibleLevels.has(v.cefr)
  );

  if (toInsert.length === 0) {
    return Response.json({
      seeded: 0,
      message: existingWords.size > 0
        ? 'All eligible vocabulary already in your queue.'
        : 'No eligible words found.',
    });
  }

  const BATCH = 50;
  let seeded = 0;
  for (let i = 0; i < toInsert.length; i += BATCH) {
    const chunk = toInsert.slice(i, i + BATCH);
    const stmts = chunk.map(v =>
      env.DB.prepare(
        `INSERT OR IGNORE INTO vocabulary_items
           (id, user_id, word, translation, domain, review_count, correct_count, created_at, due_at)
         VALUES (?, ?, ?, ?, ?, 0, 0, ?, ?)`
      ).bind(
        crypto.randomUUID(),
        userId,
        v.es,
        v.en,
        v.domain ?? 'general',
        now,
        now   // all words due immediately; the due queue is capped at 30
      )
    );
    await env.DB.batch(stmts);
    seeded += chunk.length;
  }

  const maxLevel = CEFR_ORDER[maxIdx];
  const levelLabel = userCefr === maxLevel ? userCefr : `${userCefr}–${maxLevel}`;
  return Response.json({
    seeded,
    message: `Seeded ${seeded} ${levelLabel} words into your review queue.`,
  });
}
