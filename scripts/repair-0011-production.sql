-- REPAIR SCRIPT — not a migration. Run once, by hand, against the D1
-- database whose /api/health reports schema: 'behind' for reading_attempts
-- and writing_samples.correct. Delete this file once production is fixed.
--
-- What happened (found 09-09-2026, by /api/health's first run against a
-- real deployment): production D1's `d1_migrations` table lists all 11
-- migrations as applied, including
-- 0011_reading_attempts_and_writing_correct.sql — but neither the
-- `reading_attempts` table nor `writing_samples.correct` actually exists
-- there. The migration was recorded without its body ever running.
--
-- That means `wrangler d1 migrations apply DB --remote` will NOT fix it:
-- it skips 0011 as already applied. The contents have to be replayed by
-- hand, which is what this file is.
--
-- Four endpoints are broken in production until it is:
--   POST /api/learner/reading-result  — inserts into reading_attempts, so
--     every completed reading passage fails and skill_profiles' 'reading'
--     row never gets its signal (punch-list item 23's reading half).
--   POST /api/sessions/turn           — inserts writing_samples.correct, so
--     every translation / writing_prompt / conversation sample capture fails.
--   GET  /api/learner/export          — selects from reading_attempts, so
--     the personal-data export fails outright (punch-list item 16).
--   DELETE /api/auth/account          — deletes from reading_attempts, so
--     account deletion fails outright (punch-list item 16).
--
-- Run it in the Cloudflare dashboard's D1 console, or:
--   npx wrangler d1 execute DB --remote --file=scripts/repair-0011-production.sql
--
-- Then confirm with:  npm run health
--
-- Both statements are additive and safe to re-run EXCEPT the ALTER: SQLite
-- has no `ADD COLUMN IF NOT EXISTS`, so re-running it on a database that
-- already has the column throws `duplicate column name: correct`. That
-- error is harmless — it means that half was already fine — but it will
-- abort the rest of a multi-statement run, so run the statements
-- individually if you're unsure which half is missing. `npm run health`
-- with a JWT tells you exactly which.

CREATE TABLE IF NOT EXISTS reading_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  passage_id TEXT NOT NULL,
  correct_count INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  completed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_reading_attempts_user ON reading_attempts(user_id, completed_at);

ALTER TABLE writing_samples ADD COLUMN correct INTEGER;
