-- Phase 11 migration — additive only, safe to run on existing Phase 10 DB

-- Per-passage reading comprehension results. ReadingPassage.jsx already
-- computes real correct/total counts client-side but previously discarded
-- them (only a binary localStorage "completed" flag persisted). This gives
-- skill_profiles' 'reading' row a genuine rolling-window signal, the same
-- shape sessions gives 'grammar'.
CREATE TABLE IF NOT EXISTS reading_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  passage_id TEXT NOT NULL,
  correct_count INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  completed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_reading_attempts_user ON reading_attempts(user_id, completed_at);

-- turn.js already knows whether a captured writing sample's translation was
-- correct at insert time but previously discarded it, storing a fake
-- estimated_cefr (the exercise's difficulty number relabeled as a CEFR
-- level, not an actual assessment) instead. This lets skill_profiles'
-- 'writing' row use the real correct/incorrect history.
ALTER TABLE writing_samples ADD COLUMN correct INTEGER;
