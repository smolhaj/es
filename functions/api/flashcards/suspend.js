// Manually excludes/re-includes a card from scheduling ("I already know
// this word, stop showing it") without touching its FSRS progress. A card
// with no prior review yet still needs a row to carry the suspended flag,
// so this upserts a bare 'new'-state row when necessary.
export async function onRequestPost({ request, env, data }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { cardId, suspended } = body;
  if (!cardId || typeof cardId !== 'string' || typeof suspended !== 'boolean') {
    return Response.json({ error: 'cardId and suspended (boolean) required' }, { status: 400 });
  }

  // state = 'new' on first insert (not the column's 'review' default, which
  // is only correct for rows migrated from the pre-Anki-steps flow) so an
  // unsuspended, never-graded card still goes through learning steps on its
  // first real review.
  await env.DB.prepare(`
    INSERT INTO flashcard_progress (user_id, card_id, suspended, state)
    VALUES (?, ?, ?, 'new')
    ON CONFLICT(user_id, card_id) DO UPDATE SET suspended = ?
  `).bind(data.user.sub, cardId, suspended ? 1 : 0, suspended ? 1 : 0).run();

  return Response.json({ cardId, suspended });
}
