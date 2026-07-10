// Tracks which reading passages a learner has finished the comprehension
// questions for. Client-side only (localStorage), no backend/schema
// changes — matches this feature's existing no-backend-persistence design
// (see ES.md's Readings architecture note). "Complete" means the learner
// reached the end of the question set, same bar as curriculum units in
// Learn (completion isn't gated on a perfect score there either).
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
