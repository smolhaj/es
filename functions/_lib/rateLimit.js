// Simple KV-backed rate limiting. Not atomic (KV get+put has a race under
// concurrent requests), which is an accepted tradeoff for this app's scale —
// see ES.md punch list item 3.

// Generic fixed-window counter: returns true and records the attempt if
// under the cap, false if the cap is already reached (does not record).
export async function allowAndRecord(kv, key, maxCount, windowSeconds) {
  const raw = await kv.get(key);
  const count = raw ? parseInt(raw, 10) : 0;
  if (count >= maxCount) return false;
  await kv.put(key, String(count + 1), { expirationTtl: windowSeconds });
  return true;
}

// Login lockout tracks FAILURES only (not every attempt), so normal
// successful logins never count toward the cap. Each failure refreshes the
// window, so a locked-out attacker who keeps failing stays locked out.
const LOGIN_MAX_FAILURES = 5;
const LOGIN_LOCK_SECONDS = 15 * 60;

function loginFailKey(email) {
  return `login_fail:${email}`;
}

export async function isLoginLocked(kv, email) {
  const raw = await kv.get(loginFailKey(email));
  const count = raw ? parseInt(raw, 10) : 0;
  return count >= LOGIN_MAX_FAILURES;
}

export async function recordLoginFailure(kv, email) {
  const raw = await kv.get(loginFailKey(email));
  const count = (raw ? parseInt(raw, 10) : 0) + 1;
  await kv.put(loginFailKey(email), String(count), { expirationTtl: LOGIN_LOCK_SECONDS });
}

export async function clearLoginFailures(kv, email) {
  await kv.delete(loginFailKey(email));
}
