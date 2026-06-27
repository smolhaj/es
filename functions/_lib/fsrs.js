// FSRS-4.5 spaced repetition algorithm
// grade: 1=Again, 2=Hard, 3=Good, 4=Easy

const W = [
  0.4072, 1.1829, 3.1262, 15.4722,
  7.2102, 0.5316, 1.0651, 0.0589,
  1.5330, 0.1544, 1.0045,
  1.9813, 0.0953, 0.2975, 2.2042,
  0.2407, 2.9466,
  0.5034, 0.6567,
];

const DECAY = -0.5;
const FACTOR = 19 / 81;

function retrievability(elapsedDays, stability) {
  if (stability <= 0) return 0;
  return Math.pow(1 + FACTOR * elapsedDays / stability, DECAY);
}

function initialDifficulty(grade) {
  return Math.min(10, Math.max(1, W[4] - Math.exp(W[5] * (grade - 1)) + 1));
}

function nextStabilityRecall(D, S, R, grade) {
  const hardPenalty = grade === 2 ? W[15] : 1;
  const easyBonus = grade === 4 ? W[16] : 1;
  return S * (
    Math.exp(W[8]) * (11 - D) * Math.pow(S, -W[9]) * (Math.exp(W[10] * (1 - R)) - 1) + 1
  ) * hardPenalty * easyBonus;
}

function nextStabilityForget(D, S, R) {
  return W[11] * Math.pow(D, -W[12]) * (Math.pow(S + 1, W[13]) - 1) * Math.exp(W[14] * (1 - R));
}

function nextDifficulty(D, grade) {
  const d = D + W[6] * (3 - grade);
  return Math.min(10, Math.max(1, d + W[7] * (W[4] - d)));
}

export function scheduleReview(item, grade) {
  const reviewCount = (item.review_count ?? 0) + 1;
  const correctCount = (item.correct_count ?? 0) + (grade >= 2 ? 1 : 0);

  let stability, difficulty;

  if (!item.review_count || item.review_count === 0) {
    stability = W[grade - 1];
    difficulty = initialDifficulty(grade);
  } else {
    const elapsedMs = item.last_reviewed_at
      ? Date.now() - new Date(item.last_reviewed_at).getTime()
      : 86400000;
    const elapsedDays = elapsedMs / 86400000;
    const R = retrievability(elapsedDays, item.stability ?? 1);
    const D = item.difficulty ?? 5;
    const S = item.stability ?? 1;

    difficulty = nextDifficulty(D, grade);
    stability = grade === 1
      ? nextStabilityForget(D, S, R)
      : nextStabilityRecall(D, S, R, grade);
    stability = Math.max(0.01, stability);
  }

  // Schedule for 90% retention: due in `stability` days
  const dueAt = new Date(Date.now() + Math.round(stability) * 86400000).toISOString();

  return {
    stability,
    difficulty,
    retrievability: 1.0,
    due_at: dueAt,
    review_count: reviewCount,
    correct_count: correctCount,
  };
}

export function computeRetrievability(item) {
  if (!item.last_reviewed_at || !item.stability) return 0;
  const elapsedDays = (Date.now() - new Date(item.last_reviewed_at).getTime()) / 86400000;
  return retrievability(elapsedDays, item.stability);
}
