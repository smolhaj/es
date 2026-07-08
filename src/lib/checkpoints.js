import { getPracticePoolUpTo } from '../content/curriculum/index.js';

const CHECKPOINT_SIZE = 20;
const MAX_PER_CONCEPT = 2;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Builds a fresh, personalized practice set for a checkpoint unit every
// time it's opened — checkpoints are redoable and deliberately not frozen
// at first-completion state, since weak spots shift over time and the
// whole point is ongoing reinforcement of a moving target, not a one-shot
// test. Weakest concepts (per concept_mastery, worst mastery first) get
// priority slots; concepts with no mastery signal yet (never attempted, or
// fewer than 2 sessions — see functions/api/learner/profile.js's
// weakConcepts query) fall back to even sampling across whatever's left in
// the pool, so a checkpoint never breaks or feels empty for a learner who
// jumped ahead without full data.
export function buildCheckpointPractice(checkpointUpTo, weakConcepts) {
  const pool = getPracticePoolUpTo(checkpointUpTo);
  const allConceptIds = Object.keys(pool);
  if (allConceptIds.length === 0) return [];

  const weakIds = (weakConcepts ?? [])
    .map(w => w.concept_id)
    .filter(id => pool[id]);
  const coldIds = shuffle(allConceptIds.filter(id => !weakIds.includes(id)));

  const practice = [];
  for (const conceptId of [...weakIds, ...coldIds]) {
    if (practice.length >= CHECKPOINT_SIZE) break;
    practice.push(...shuffle(pool[conceptId]).slice(0, MAX_PER_CONCEPT));
  }
  return shuffle(practice.slice(0, CHECKPOINT_SIZE));
}
