-- Phase 6 migration — additive only, safe to run on existing Phase 5 DB

-- Tracks completion of structured curriculum modules (the "Get Started"
-- guided path), separate from the adaptive Gemini session loop.
CREATE TABLE IF NOT EXISTS module_progress (
  user_id TEXT NOT NULL REFERENCES users(id),
  module_id TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  PRIMARY KEY (user_id, module_id)
);

CREATE INDEX IF NOT EXISTS idx_module_progress_user ON module_progress(user_id);
