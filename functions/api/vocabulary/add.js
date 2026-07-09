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

  const now = new Date().toISOString();
  const id = crypto.randomUUID();

  // due_at = now (not a future FSRS-computed date) so a brand-new,
  // never-reviewed word shows up immediately in /vocab-review — matching
  // vocabulary/seed.js's "all words due immediately" behavior. This used
  // to call scheduleReview({}, 3), which scheduled new words ~3.13 days
  // out (grade-3 stability) while still recording review_count: 0 — an
  // internally inconsistent state (due_at implied "already reviewed once",
  // review_count said "never reviewed") that made every word added here
  // (including the automatic per-lesson vocab seeding in Lesson.jsx)
  // invisible in the review queue for days after being added, since
  // /api/vocabulary/due only returns rows with due_at <= now and has no
  // separate "new word" bucket. stability/difficulty/retrievability are
  // left at the schema's neutral defaults (1.0/5.0/1.0), same as seed.js.
  await env.DB.prepare(`
    INSERT INTO vocabulary_items
      (id, user_id, word, translation, domain, review_count, correct_count,
       created_at, last_reviewed_at, due_at)
    VALUES (?, ?, ?, ?, ?, 0, 0, ?, NULL, ?)
  `).bind(
    id, data.user.sub, word, translation, domain, now, now
  ).run();

  return Response.json({ id, word, translation, domain });
}
