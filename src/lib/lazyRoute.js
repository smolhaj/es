import { lazy } from 'react';

const RELOAD_KEY = 'capi_chunk_reload';

function readFlag() {
  try {
    return sessionStorage.getItem(RELOAD_KEY) === '1';
  } catch {
    return true; // storage blocked — never auto-reload, we can't guard the loop
  }
}

function writeFlag(value) {
  try {
    if (value) sessionStorage.setItem(RELOAD_KEY, '1');
    else sessionStorage.removeItem(RELOAD_KEY);
  } catch {
    /* storage blocked — the readFlag guard above already handles this */
  }
}

// Wraps React.lazy with one recovery attempt for the stale-deploy case: a tab
// left open across a deploy still points at the previous build's hashed chunk
// filenames, which Cloudflare Pages no longer serves, so the dynamic import
// 404s through to the error boundary on an otherwise healthy app. Reload once
// to pick up the new index.html; the sessionStorage guard means a genuinely
// broken chunk surfaces the real error instead of looping.
export function lazyRoute(loader) {
  return lazy(() =>
    loader().then(
      (mod) => {
        writeFlag(false);
        return mod;
      },
      (err) => {
        if (readFlag()) throw err;
        writeFlag(true);
        window.location.reload();
        return new Promise(() => {}); // never settles; the reload takes over
      }
    )
  );
}
