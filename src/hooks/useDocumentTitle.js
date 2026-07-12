import { useEffect } from 'react';

// Sets the browser tab title for the page it's called from, restoring the
// default on unmount so navigating away (e.g. back to a page that doesn't
// call this hook) doesn't leave a stale title behind.
export function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} — Capi` : 'Capi — Learn Spanish';
    return () => {
      document.title = previous;
    };
  }, [title]);
}
