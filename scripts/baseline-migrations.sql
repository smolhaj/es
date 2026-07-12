-- One-time baseline for the production D1 database.
--
-- Production already has every table/column from schema.sql through
-- schema-v11.sql applied by hand over time (see ES.md's migrations note).
-- This script does NOT re-run any of that DDL — it only creates wrangler's
-- own bookkeeping table and marks migrations 0001-0011 as already applied,
-- so `wrangler d1 migrations apply DB --remote` recognizes them as done and
-- only runs genuinely new migrations from here on.
--
-- Run this exactly once against production, before the first
-- `wrangler d1 migrations apply DB --remote`:
--
--   wrangler d1 execute DB --remote --file=scripts/baseline-migrations.sql
--
-- Do NOT run this against a fresh/local database — use
-- `wrangler d1 migrations apply DB --local` there instead, which applies
-- the real migration files from scratch.

CREATE TABLE IF NOT EXISTS d1_migrations(
		id         INTEGER PRIMARY KEY AUTOINCREMENT,
		name       TEXT UNIQUE,
		applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT OR IGNORE INTO d1_migrations (name) VALUES
  ('0001_initial_schema.sql'),
  ('0002_fsrs_concept_mastery_personal_context.sql'),
  ('0003_noop_session_count_already_exists.sql'),
  ('0004_session_briefing_text.sql'),
  ('0005_concept_mastery_last_session_id.sql'),
  ('0006_module_progress.sql'),
  ('0007_flashcard_progress.sql'),
  ('0008_session_focus_concept.sql'),
  ('0009_flashcard_scheduling_state_and_review_log.sql'),
  ('0010_session_pending_exercise.sql'),
  ('0011_reading_attempts_and_writing_correct.sql');
