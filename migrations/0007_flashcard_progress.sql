-- Phase 7 migration — additive only, safe to run on existing Phase 6 DB

-- Anki-style Flashcards deck: per-user FSRS scheduling state for the static
-- top-5000-frequency-word deck (src/content/flashcards/frequency-5000.js).
-- Deliberately a separate deck/table from vocabulary_items (the curated
-- lesson/session vocabulary) rather than merged into the same queue — see
-- ES.md's Flashcards section for why. Card content itself (word,
-- translation, example) is static and lives in the frontend bundle, not in
-- the DB — this table only tracks review/scheduling state, identical in
-- shape to vocabulary_items' FSRS columns.
CREATE TABLE IF NOT EXISTS flashcard_progress (
  user_id TEXT NOT NULL REFERENCES users(id),
  card_id TEXT NOT NULL,
  stability REAL NOT NULL DEFAULT 1.0,
  difficulty REAL NOT NULL DEFAULT 5.0,
  due_at TEXT,
  review_count INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  last_reviewed_at TEXT,
  PRIMARY KEY (user_id, card_id)
);

CREATE INDEX IF NOT EXISTS idx_flashcard_progress_due ON flashcard_progress(user_id, due_at);
