-- Phase 2 migration — additive only, safe to run on existing Phase 1 DB

-- FSRS fields on vocabulary_items
ALTER TABLE vocabulary_items ADD COLUMN stability REAL NOT NULL DEFAULT 1.0;
ALTER TABLE vocabulary_items ADD COLUMN difficulty REAL NOT NULL DEFAULT 5.0;
ALTER TABLE vocabulary_items ADD COLUMN retrievability REAL NOT NULL DEFAULT 1.0;
ALTER TABLE vocabulary_items ADD COLUMN due_at TEXT;
ALTER TABLE vocabulary_items ADD COLUMN frequency_rank INTEGER;
ALTER TABLE vocabulary_items ADD COLUMN domain TEXT NOT NULL DEFAULT 'general';

-- Add concept linkage and timing to error_events
ALTER TABLE error_events ADD COLUMN concept_id TEXT;
ALTER TABLE error_events ADD COLUMN error_type TEXT;
ALTER TABLE error_events ADD COLUMN content_domain TEXT;
ALTER TABLE error_events ADD COLUMN session_minute INTEGER;
ALTER TABLE error_events ADD COLUMN response_time_ms INTEGER;

-- Grammar concept mastery
CREATE TABLE IF NOT EXISTS concept_mastery (
  user_id TEXT NOT NULL REFERENCES users(id),
  concept_id TEXT NOT NULL,
  mastery_score REAL NOT NULL DEFAULT 0,
  error_count INTEGER NOT NULL DEFAULT 0,
  session_error_count INTEGER NOT NULL DEFAULT 0,
  sessions_seen INTEGER NOT NULL DEFAULT 0,
  explanation_styles_tried TEXT NOT NULL DEFAULT '[]',
  last_seen TEXT,
  first_seen TEXT NOT NULL,
  fossilization_flagged INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, concept_id)
);

-- Personal context memory
CREATE TABLE IF NOT EXISTS personal_context (
  user_id TEXT NOT NULL REFERENCES users(id),
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  source_session_id TEXT,
  created_at TEXT NOT NULL,
  last_referenced_at TEXT,
  PRIMARY KEY (user_id, key)
);

-- CEFR level history
CREATE TABLE IF NOT EXISTS cefr_history (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  skill TEXT NOT NULL,
  from_level TEXT NOT NULL,
  to_level TEXT NOT NULL,
  transitioned_at TEXT NOT NULL,
  session_id TEXT
);

-- Writing portfolio
CREATE TABLE IF NOT EXISTS writing_samples (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  session_id TEXT,
  created_at TEXT NOT NULL,
  prompt TEXT,
  content TEXT NOT NULL,
  word_count INTEGER NOT NULL DEFAULT 0,
  estimated_cefr TEXT,
  error_annotations TEXT,
  professor_notes TEXT
);

-- Session behavioral signals (extend sessions table)
ALTER TABLE sessions ADD COLUMN frustration_score REAL NOT NULL DEFAULT 0;
ALTER TABLE sessions ADD COLUMN fatigue_signal INTEGER NOT NULL DEFAULT 0;
ALTER TABLE sessions ADD COLUMN abandoned INTEGER NOT NULL DEFAULT 0;
ALTER TABLE sessions ADD COLUMN session_notes TEXT;

-- Indexes for Phase 2 queries
CREATE INDEX IF NOT EXISTS idx_concept_mastery_user ON concept_mastery(user_id);
CREATE INDEX IF NOT EXISTS idx_vocab_due ON vocabulary_items(user_id, due_at);
CREATE INDEX IF NOT EXISTS idx_errors_concept ON error_events(user_id, concept_id);
CREATE INDEX IF NOT EXISTS idx_writing_user ON writing_samples(user_id);
