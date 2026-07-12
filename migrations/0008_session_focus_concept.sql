-- Phase 8 migration — additive only, safe to run on existing Phase 7 DB

-- Persist the concept a "Drill →" session is focused on so every turn (not
-- just the first exercise) can keep reminding Gemini to stay on it, and so
-- the fallback exercise bank can be filtered to that concept instead of
-- picking a fully random exercise from any CEFR level.
ALTER TABLE sessions ADD COLUMN focus_concept TEXT;
