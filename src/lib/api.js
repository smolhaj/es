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
  if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);
  return data;
}

export const api = {
  auth: {
    register: (email, password) =>
      req('/auth/register', { method: 'POST', body: JSON.stringify({ email, password }) }),

    login: (email, password) =>
      req('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
  },

  sessions: {
    start: (token) =>
      req('/sessions/start', { method: 'POST' }, token),

    turn: (token, sessionId, exercise, learnerAnswer) =>
      req('/sessions/turn', {
        method: 'POST',
        body: JSON.stringify({ sessionId, exercise, learnerAnswer })
      }, token),

    end: (token, sessionId) =>
      req('/sessions/end', {
        method: 'POST',
        body: JSON.stringify({ sessionId })
      }, token)
  },

  learner: {
    profile: (token) => req('/learner/profile', {}, token),

    history: (token) => req('/learner/history', {}, token),

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
  },

  vocabulary: {
    due: (token) => req('/vocabulary/due', {}, token),

    review: (token, wordId, grade) =>
      req('/vocabulary/review', {
        method: 'POST',
        body: JSON.stringify({ wordId, grade })
      }, token),

    seed: (token) =>
      req('/vocabulary/seed', { method: 'POST' }, token),
  }
};
