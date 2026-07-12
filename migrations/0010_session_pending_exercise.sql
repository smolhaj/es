-- Phase 10 migration — additive only, safe to run on existing Phase 9 DB

-- Server-side record of the exercise most recently issued to the client for
-- this session, so turn.js can grade against a trusted copy instead of the
-- exercise object the client echoes back in the request body (which a
-- malicious or buggy client could alter — e.g. changing `answer` to match
-- whatever it just submitted, silently inflating mastery/FSRS state with
-- fabricated correct answers). NULL until the first exercise is issued.
ALTER TABLE sessions ADD COLUMN pending_exercise TEXT;
