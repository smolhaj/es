// Returns every row this account owns, across every user-scoped table, as a
// single JSON document — a personal-data export the user can download from
// Profile. password_hash is deliberately excluded even though it's a hash,
// not a secret worth re-exposing back to the browser.
export async function onRequestGet({ env, data }) {
  const userId = data.user.sub;

  const [
    account,
    sessions,
    vocabularyItems,
    skillProfiles,
    errorEvents,
    conceptMastery,
    personalContext,
    cefrHistory,
    writingSamples,
    moduleProgress,
    flashcardProgress,
    flashcardReviewLog,
    readingAttempts,
  ] = await Promise.all([
    env.DB.prepare('SELECT id, email, created_at, preferences FROM users WHERE id = ?').bind(userId).first(),
    env.DB.prepare('SELECT * FROM sessions WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM vocabulary_items WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM skill_profiles WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM error_events WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM concept_mastery WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM personal_context WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM cefr_history WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM writing_samples WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM module_progress WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM flashcard_progress WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM flashcard_review_log WHERE user_id = ?').bind(userId).all(),
    env.DB.prepare('SELECT * FROM reading_attempts WHERE user_id = ?').bind(userId).all(),
  ]);

  if (!account) {
    return Response.json({ error: 'Account not found' }, { status: 404 });
  }

  return Response.json({
    exportedAt: new Date().toISOString(),
    account,
    sessions: sessions.results ?? [],
    vocabularyItems: vocabularyItems.results ?? [],
    skillProfiles: skillProfiles.results ?? [],
    errorEvents: errorEvents.results ?? [],
    conceptMastery: conceptMastery.results ?? [],
    personalContext: personalContext.results ?? [],
    cefrHistory: cefrHistory.results ?? [],
    writingSamples: writingSamples.results ?? [],
    moduleProgress: moduleProgress.results ?? [],
    flashcardProgress: flashcardProgress.results ?? [],
    flashcardReviewLog: flashcardReviewLog.results ?? [],
    readingAttempts: readingAttempts.results ?? [],
  });
}
