import { scheduleReview } from '../../../_lib/fsrs.js';

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const word = typeof body.word === 'string' ? body.word.trim() : '';
  const translation = typeof body.translation === 'string' ? body.translation.trim() : '';
  const domain = typeof body.domain === 'string' ? body.domain.slice(0, 40) : 'custom';

  if (!word || word.length > 100) return Response.json({ error: 'word required (max 100 chars)' }, { status: 400 });
  if (!translation || translation.length > 200) return Response.json({ error: 'translation required (max 200 chars)' }, { status: 400 });

  const existing = await env.DB.prepare(
    'SELECT id FROM vocabulary_items WHERE user_id = ? AND word = ?'
  ).bind(data.user.sub, word).first();

  if (existing) {
    return Response.json({ error: 'Word already exists', id: existing.id }, { status: 409 });
  }

  const fsrs = scheduleReview({}, 3);
  const now = new Date().toISOString();
  const id = crypto.randomUUID();

  await env.DB.prepare(`
    INSERT INTO vocabulary_items
      (id, user_id, word, translation, domain, review_count, correct_count,
       created_at, last_reviewed_at, stability, difficulty, retrievability, due_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?, ?)
  `).bind(
    id, data.user.sub, word, translation, domain,
    0, 0, now,
    fsrs.stability, fsrs.difficulty, fsrs.retrievability,
    now
  ).run();

  return Response.json({ id, word, translation, domain });
}
