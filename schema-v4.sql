-- Phase 4 migration — additive only, safe to run on existing Phase 3 DB

-- Store the professor briefing compiled at session start so every turn
-- can use it (Gemini has no cross-request memory).
ALTER TABLE sessions ADD COLUMN briefing_text TEXT;
