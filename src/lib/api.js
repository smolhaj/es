const BASE = '/api';

function authHeader(token) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function req(path, options = {}, token) {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(token),
      ...(options.headers ?? {})
    }
  });
  const data = await res.json();
  if (!res.ok) {
    // Only an *authenticated* request going 401 means the token itself is
    // invalid/expired — a public endpoint like login rejecting bad
    // credentials is a normal 401 the caller already handles locally, not
    // a session-expiry case. See ES.md punch-list item 7.
    if (res.status === 401 && token) {
      window.dispatchEvent(new Event('capi:unauthorized'));
    }
    throw new Error(data.error ?? `HTTP ${res.status}`);
  }
  return data;
}

export const api = {
  auth: {
    register: (email, password) =>
      req('/auth/register', { method: 'POST', body: JSON.stringify({ email, password }) }),

    login: (email, password) =>
      req('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),

    deleteAccount: (token, password) =>
      req('/auth/account', { method: 'DELETE', body: JSON.stringify({ password }) }, token),
  },

  sessions: {
    start: (token, focusConcept = null) =>
      req('/sessions/start', {
        method: 'POST',
        body: JSON.stringify({ focusConcept }),
      }, token),

    // selfGrade is only for a writing_prompt's confirm phase (see
    // Session.jsx) — omitted entirely (not even `undefined`) for every
    // other call, matching turn.js's `selfGrade === undefined` check for
    // the reveal-phase branch.
    turn: (token, sessionId, learnerAnswer, selfGrade) =>
      req('/sessions/turn', {
        method: 'POST',
        body: JSON.stringify({ sessionId, learnerAnswer, ...(selfGrade !== undefined ? { selfGrade } : {}) })
      }, token),

    end: (token, sessionId, abandoned = false) =>
      req('/sessions/end', {
        method: 'POST',
        body: JSON.stringify({ sessionId, abandoned })
      }, token)
  },

  learner: {
    profile: (token) => req('/learner/profile', {}, token),

    history: (token) => req('/learner/history', {}, token),

    writing: (token) => req('/learner/writing', {}, token),

    reportReadingResult: (token, passageId, correctCount, totalQuestions) =>
      req('/learner/reading-result', {
        method: 'POST',
        body: JSON.stringify({ passageId, correctCount, totalQuestions })
      }, token),

    concepts: (token) => req('/learner/concepts', {}, token),

    context: (token) => req('/learner/context', {}, token),

    saveContext: (token, key, value) =>
      req('/learner/context', {
        method: 'POST',
        body: JSON.stringify({ key, value })
      }, token),

    deleteContext: (token, key) =>
      req('/learner/context', {
        method: 'DELETE',
        body: JSON.stringify({ key })
      }, token),

    export: (token) => req('/learner/export', {}, token),
  },

  curriculum: {
    progress: (token) => req('/curriculum/progress', {}, token),

    markComplete: (token, moduleId) =>
      req('/curriculum/progress', {
        method: 'POST',
        body: JSON.stringify({ moduleId })
      }, token),
  },

  vocabulary: {
    due: (token) => req('/vocabulary/due', {}, token),

    status: (token) => req('/vocabulary/status', {}, token),

    review: (token, wordId, grade) =>
      req('/vocabulary/review', {
        method: 'POST',
        body: JSON.stringify({ wordId, grade })
      }, token),

    seed: (token) =>
      req('/vocabulary/seed', { method: 'POST' }, token),

    add: (token, word, translation, domain = 'custom') =>
      req('/vocabulary/add', {
        method: 'POST',
        body: JSON.stringify({ word, translation, domain }),
      }, token),
  },

  flashcards: {
    progress: (token) => req('/flashcards/progress', {}, token),

    review: (token, cardId, grade) =>
      req('/flashcards/review', {
        method: 'POST',
        body: JSON.stringify({ cardId, grade })
      }, token),

    undo: (token, cardId) =>
      req('/flashcards/undo', {
        method: 'POST',
        body: JSON.stringify({ cardId })
      }, token),

    suspend: (token, cardId, suspended) =>
      req('/flashcards/suspend', {
        method: 'POST',
        body: JSON.stringify({ cardId, suspended })
      }, token),

    stats: (token) => req('/flashcards/stats', {}, token),
  }
};
