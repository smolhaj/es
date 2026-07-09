// Reverts the most recent grade on a card using the single-level undo
// snapshot written by review.js. A card graded for the very first time has
// no prior row to restore, so its snapshot is the sentinel string 'NEW' —
// undoing that just deletes the row (back to "fresh, never reviewed").
export async function onRequestPost({ request, env, data }) {
  let body;
  try { body = await request.json(); } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { cardId } = body;
  if (!cardId || typeof cardId !== 'string') {
    return Response.json({ error: 'cardId required' }, { status: 400 });
  }

  const row = await env.DB.prepare(
    'SELECT undo_snapshot FROM flashcard_progress WHERE user_id = ? AND card_id = ?'
  ).bind(data.user.sub, cardId).first();

  if (!row || !row.undo_snapshot) {
    return Response.json({ error: 'Nothing to undo for this card' }, { status: 409 });
  }

  // Delete the card's most recent log entry regardless of which branch
  // below runs, so "reviews today" stats stay accurate after an undo.
  const lastLog = await env.DB.prepare(
    'SELECT id FROM flashcard_review_log WHERE user_id = ? AND card_id = ? ORDER BY reviewed_at DESC LIMIT 1'
  ).bind(data.user.sub, cardId).first();
  if (lastLog) {
    await env.DB.prepare('DELETE FROM flashcard_review_log WHERE id = ?').bind(lastLog.id).run();
  }

  if (row.undo_snapshot === 'NEW') {
    await env.DB.prepare(
      'DELETE FROM flashcard_progress WHERE user_id = ? AND card_id = ?'
    ).bind(data.user.sub, cardId).run();
    return Response.json({ cardId, restored: 'new' });
  }

  let prev;
  try { prev = JSON.parse(row.undo_snapshot); } catch {
    return Response.json({ error: 'Corrupt undo snapshot' }, { status: 500 });
  }

  await env.DB.prepare(`
    UPDATE flashcard_progress SET
      state = ?, step = ?, stability = ?, difficulty = ?, due_at = ?, lapses = ?,
      review_count = ?, correct_count = ?, last_reviewed_at = ?, is_leech = ?, undo_snapshot = NULL
    WHERE user_id = ? AND card_id = ?
  `).bind(
    prev.state, prev.step, prev.stability, prev.difficulty, prev.due_at, prev.lapses,
    prev.review_count, prev.correct_count, prev.last_reviewed_at, prev.is_leech,
    data.user.sub, cardId
  ).run();

  return Response.json({ cardId, restored: 'previous' });
}
