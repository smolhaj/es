-- Phase 5 migration — additive only, safe to run on existing Phase 4 DB

-- Track which session last touched each concept so sessions_seen increments
-- only once per session, not once per exercise turn.
ALTER TABLE concept_mastery ADD COLUMN last_session_id TEXT;
