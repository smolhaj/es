// Shared CEFR-leveling logic — originally lived only in sessions/end.js as a
// private, grammar-only function. Pulled out so reading/writing (and any
// future skill) can level up/down using the same thresholds instead of each
// re-implementing its own.
export const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const THRESHOLDS = {
  A1: { acc: 0.70, sessions: 3 },
  A2: { acc: 0.75, sessions: 5 },
  B1: { acc: 0.80, sessions: 8 },
  B2: { acc: 0.82, sessions: 10 },
  C1: { acc: 0.85, sessions: 12 },
};

export function computeCefrLevel(accuracy, sessionCount, current) {
  const idx = CEFR_ORDER.indexOf(current);
  if (idx === -1) return current;
  // No threshold exists for C2 (nothing above it to advance to), so this is
  // naturally a no-op there — but the downgrade check below must still run at
  // C2, otherwise a learner who reaches the top level can never be brought
  // back down even if their performance craters afterward.
  const t = THRESHOLDS[current];
  if (t && accuracy >= t.acc && sessionCount >= t.sessions) {
    return CEFR_ORDER[idx + 1];
  }
  // Downgrade if consistently weak (only after enough data)
  if (idx > 0 && sessionCount >= 4 && accuracy < 0.45) {
    return CEFR_ORDER[idx - 1];
  }
  return current;
}
