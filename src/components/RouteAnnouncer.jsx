import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// A single-page app changes the whole page without a page load, so a screen
// reader gets no notification that anything happened — the user activates a
// link and hears nothing. That got worse once routes became lazily loaded:
// there's now a real gap between the click and the new content existing.
//
// This announces the new page by its document title once the route has
// settled. Pages set that title through useDocumentTitle, so the
// announcement always matches what the tab says.
export default function RouteAnnouncer() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Wait a beat: the lazy chunk has to resolve and the page has to run its
    // useDocumentTitle effect before document.title is the new page's.
    // Announcing sooner reads out the *previous* page's name.
    const timer = setTimeout(() => setMessage(document.title), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  );
}
