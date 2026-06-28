// Seeds vocabulary_items for a user from the static vocabulary content.
// Safe to call multiple times — only inserts rows that don't yet exist.

import { VOCABULARY } from '../../../src/content/vocabulary.js';

export async function onRequestPost({ env, data }) {
  const userId = data.user.sub;
  const now = new Date().toISOString();

  const { results: existing } = await env.DB.prepare(
    'SELECT word FROM vocabulary_items WHERE user_id = ?'
  ).bind(userId).all();

  const existingWords = new Set((existing ?? []).map(r => r.word));

  const toInsert = VOCABULARY.filter(v => !existingWords.has(v.es));

  if (toInsert.length === 0) {
    return Response.json({ seeded: 0, message: 'All vocabulary already seeded.' });
  }

  const BATCH = 50;
  let seeded = 0;
  for (let i = 0; i < toInsert.length; i += BATCH) {
    const chunk = toInsert.slice(i, i + BATCH);
    const stmts = chunk.map(v =>
      env.DB.prepare(
        `INSERT OR IGNORE INTO vocabulary_items
           (id, user_id, word, translation, domain, review_count, correct_count, created_at)
         VALUES (?, ?, ?, ?, ?, 0, 0, ?)`
      ).bind(
        crypto.randomUUID(),
        userId,
        v.es,
        v.en,
        v.domain ?? 'general',
        now
      )
    );
    await env.DB.batch(stmts);
    seeded += chunk.length;
  }

  return Response.json({ seeded, message: `Seeded ${seeded} words into your vocabulary queue.` });
}
