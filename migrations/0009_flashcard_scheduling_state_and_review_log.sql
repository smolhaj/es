-- Phase 9 migration — additive only, safe to run on existing Phase 8 DB

-- Anki-style scheduling state for flashcard_progress: learning/relearning
-- steps before a card graduates to FSRS-scale intervals, leech flagging,
-- manual suspend, and a single-level undo buffer. Existing rows default to
-- state='review' (they're already past initial learning under the old
-- pure-FSRS flow and keep their real stability); brand-new rows are
-- explicitly inserted with state='learning' by flashcards/review.js.
ALTER TABLE flashcard_progress ADD COLUMN state TEXT NOT NULL DEFAULT 'review';
ALTER TABLE flashcard_progress ADD COLUMN step INTEGER NOT NULL DEFAULT 0;
ALTER TABLE flashcard_progress ADD COLUMN lapses INTEGER NOT NULL DEFAULT 0;
ALTER TABLE flashcard_progress ADD COLUMN is_leech INTEGER NOT NULL DEFAULT 0;
ALTER TABLE flashcard_progress ADD COLUMN suspended INTEGER NOT NULL DEFAULT 0;
ALTER TABLE flashcard_progress ADD COLUMN undo_snapshot TEXT;

-- Append-only review log (mirrors Anki's revlog) so the stats/forecast page
-- can compute exact "reviews today/this week" and retention rate without
-- overloading flashcard_progress's per-card counters, which only track
-- FSRS-consequential reviews (not every learning-step answer).
CREATE TABLE IF NOT EXISTS flashcard_review_log (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  card_id TEXT NOT NULL,
  grade INTEGER NOT NULL,
  state TEXT NOT NULL,
  reviewed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_flashcard_log_user_time ON flashcard_review_log(user_id, reviewed_at);
