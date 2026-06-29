-- Phase 3 migration — additive only, safe to run on existing Phase 2 DB

-- session_count was used in end.js but not added to schema until now
ALTER TABLE skill_profiles ADD COLUMN session_count INTEGER NOT NULL DEFAULT 0;
