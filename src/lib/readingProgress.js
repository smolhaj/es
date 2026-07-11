// Tracks which reading passages a learner has completed — either by
// finishing the comprehension questions, or by manually marking a passage
// read/unread (unmarkPassageComplete/togglePassageComplete below). Client-
// side only (localStorage), no backend/schema changes — matches this
// feature's existing no-backend-persistence design (see ES.md's Readings
// architecture note). Quiz-driven "complete" means the learner reached the
// end of the question set, same bar as curriculum units in Learn
// (completion isn't gated on a perfect score there either); a manual mark
// is indistinguishable from that once set.
const STORAGE_KEY = 'capi_readings_completed';

function readCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

export function isPassageComplete(id) {
  return !!readCompleted()[id];
}

export function markPassageComplete(id) {
  const completed = readCompleted();
  if (completed[id]) return;
  completed[id] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

// Manual override (a "mark as read" / "mark as unread" toggle, independent
// of finishing the comprehension questions) — same storage key/shape as
// markPassageComplete, so a manually-marked passage is indistinguishable
// from a quiz-completed one and behaves identically everywhere (hide-
// completed filter, the list's ✓ badge, etc).
export function unmarkPassageComplete(id) {
  const completed = readCompleted();
  if (!completed[id]) return;
  delete completed[id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

export function togglePassageComplete(id) {
  if (isPassageComplete(id)) unmarkPassageComplete(id);
  else markPassageComplete(id);
}
