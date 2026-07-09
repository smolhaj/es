// Anki-style learning/relearning steps layered on top of FSRS-4.5
// (fsrs.js). Pure functions, no DB/env dependency, so this same module
// drives both the server-side grading endpoint and a client-side interval
// preview (see src/pages/Flashcards.jsx) without duplicating the logic.
//
// State machine: new -> learning -> review -> (lapse) -> relearning -> review
// - 'learning'/'relearning' steps are short, minute-scale gates a card must
//   pass before its FSRS-computed stability actually governs the schedule —
//   this is what makes a freshly-missed card reappear within the same
//   session instead of vanishing for hours, matching real Anki.
// - FSRS stability/difficulty are only (re)computed on a genuine recall
//   event: first-ever exposure, or any grade while already in 'review'
//   (including the lapse that starts relearning). Steps within
//   learning/relearning don't get their own FSRS run — they're a "did you
//   actually retain it" gate on top of the stability already computed.
import { scheduleReview } from './fsrs.js';

export const LEARNING_STEPS_MIN = [1, 10];
export const RELEARNING_STEPS_MIN = [10];
export const LEECH_THRESHOLD = 8;

function minutesFromNow(min) {
  return new Date(Date.now() + min * 60000).toISOString();
}

function daysFromNow(days) {
  return new Date(Date.now() + days * 86400000).toISOString();
}

// Advance through learning/relearning steps. `item` already carries the
// FSRS stability/difficulty it should graduate to — this function only
// decides step/state/due_at.
function advanceSteps(item, grade, step, phase) {
  const steps = phase === 'learning' ? LEARNING_STEPS_MIN : RELEARNING_STEPS_MIN;

  if (grade === 1) {
    return { ...item, state: phase, step: 0, due_at: minutesFromNow(steps[0]) };
  }
  if (grade === 2) {
    return { ...item, state: phase, step, due_at: minutesFromNow(steps[step] * 1.5) };
  }
  // grade 3 (Good) advances one step; grade 4 (Easy) always graduates immediately
  const nextStep = grade === 4 ? steps.length : step + 1;
  if (nextStep >= steps.length) {
    return { ...item, state: 'review', step: 0, due_at: daysFromNow(item.stability) };
  }
  return { ...item, state: phase, step: nextStep, due_at: minutesFromNow(steps[nextStep]) };
}

// item: { state, step, stability, difficulty, lapses, review_count, correct_count, last_reviewed_at }
// Returns the full next state: { state, step, stability, difficulty, lapses, isLeech, due_at, review_count, correct_count }
export function scheduleFlashcard(item, grade) {
  const state = item?.state ?? 'new';
  const step = item?.step ?? 0;
  const lapses = item?.lapses ?? 0;

  if (state === 'new') {
    const fsrs = scheduleReview({}, grade);
    return advanceSteps({ ...fsrs, lapses, isLeech: false }, grade, 0, 'learning');
  }

  if (state === 'learning') {
    return advanceSteps({ ...item, lapses, isLeech: lapses >= LEECH_THRESHOLD }, grade, step, 'learning');
  }

  if (state === 'review') {
    const fsrs = scheduleReview(item, grade);
    if (grade === 1) {
      const newLapses = lapses + 1;
      return {
        ...fsrs, lapses: newLapses, isLeech: newLapses >= LEECH_THRESHOLD,
        state: 'relearning', step: 0, due_at: minutesFromNow(RELEARNING_STEPS_MIN[0]),
      };
    }
    return { ...fsrs, lapses, isLeech: lapses >= LEECH_THRESHOLD, state: 'review', step: 0 };
  }

  // state === 'relearning'
  return advanceSteps({ ...item, lapses, isLeech: lapses >= LEECH_THRESHOLD }, grade, step, 'relearning');
}

// Human-readable interval label for a grade preview button, e.g. "<1m", "10m", "3d".
export function formatInterval(fromNowIso) {
  const ms = new Date(fromNowIso).getTime() - Date.now();
  const minutes = ms / 60000;
  if (minutes < 1) return '<1m';
  if (minutes < 60) return `${Math.round(minutes)}m`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.round(hours)}h`;
  const days = hours / 24;
  if (days < 30) return `${Math.round(days * 10) / 10}d`;
  return `${Math.round(days / 30 * 10) / 10}mo`;
}
