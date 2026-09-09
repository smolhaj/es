// GENERATED FILE — do not edit by hand.
// Run `npm run schema:manifest` (or `npm run build`) to regenerate.
// Source: migrations/*.sql, via scripts/build-schema-manifest.mjs.
//
// What the deployed code expects the D1 schema to look like. /api/health
// compares this against the live database and reports anything missing —
// the check that would have caught the schema-v7 and schema-v8 outages
// (ES.md punch-list item 10) at deploy time instead of at a learner's
// next click.

export const EXPECTED_SCHEMA = {
  cefr_history: ["id","user_id","skill","from_level","to_level","transitioned_at","session_id"],
  concept_mastery: ["user_id","concept_id","mastery_score","error_count","session_error_count","sessions_seen","explanation_styles_tried","last_seen","first_seen","fossilization_flagged","last_session_id"],
  error_events: ["id","user_id","session_id","occurred_at","exercise_type","grammatical_category","item_text","correct_text","word","concept_id","error_type","content_domain","session_minute","response_time_ms"],
  flashcard_progress: ["user_id","card_id","stability","difficulty","due_at","review_count","correct_count","last_reviewed_at","state","step","lapses","is_leech","suspended","undo_snapshot"],
  flashcard_review_log: ["id","user_id","card_id","grade","state","reviewed_at"],
  module_progress: ["user_id","module_id","completed_at"],
  personal_context: ["user_id","key","value","source_session_id","created_at","last_referenced_at"],
  reading_attempts: ["id","user_id","passage_id","correct_count","total_questions","completed_at"],
  sessions: ["id","user_id","started_at","ended_at","items_reviewed","correct_count","overall_accuracy","frustration_score","fatigue_signal","abandoned","session_notes","briefing_text","focus_concept","pending_exercise"],
  skill_profiles: ["user_id","skill","accuracy","cefr_level","session_count","updated_at"],
  users: ["id","email","password_hash","created_at","preferences"],
  vocabulary_items: ["id","user_id","word","translation","domain","review_count","correct_count","created_at","last_reviewed_at","stability","difficulty","retrievability","due_at","frequency_rank"],
  writing_samples: ["id","user_id","session_id","created_at","prompt","content","word_count","estimated_cefr","error_annotations","professor_notes","correct"],
};

export const MIGRATION_COUNT = 11;
