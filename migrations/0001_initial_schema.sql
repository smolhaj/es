-- Phase 1 schema — subset of full learner model
-- Expand in Phase 2 with concept_mastery, writing_samples, cefr_history, etc.

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  preferences TEXT NOT NULL DEFAULT '{}'
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  started_at TEXT NOT NULL,
  ended_at TEXT,
  items_reviewed INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  overall_accuracy REAL NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS vocabulary_items (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  word TEXT NOT NULL,
  translation TEXT NOT NULL,
  domain TEXT NOT NULL DEFAULT 'general',
  review_count INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  last_reviewed_at TEXT,
  UNIQUE(user_id, word)
);

CREATE TABLE IF NOT EXISTS skill_profiles (
  user_id TEXT NOT NULL REFERENCES users(id),
  skill TEXT NOT NULL,
  accuracy REAL NOT NULL DEFAULT 0,
  cefr_level TEXT NOT NULL DEFAULT 'A1',
  session_count INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (user_id, skill)
);

CREATE TABLE IF NOT EXISTS error_events (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  session_id TEXT NOT NULL REFERENCES sessions(id),
  occurred_at TEXT NOT NULL,
  exercise_type TEXT,
  grammatical_category TEXT,
  item_text TEXT,
  correct_text TEXT,
  word TEXT
);

CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_vocab_user ON vocabulary_items(user_id);
CREATE INDEX IF NOT EXISTS idx_errors_user ON error_events(user_id);
CREATE INDEX IF NOT EXISTS idx_errors_session ON error_events(session_id);
