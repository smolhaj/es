// Reads a URL query parameter at first render, for a page whose filter state
// is plain useState rather than router-driven. Site search deep-links into
// the reference pages with ?q=<term> so a result lands on the row it came
// from; each page seeds its own search box from this and then owns the value
// as usual — the URL isn't kept in sync afterwards, deliberately, since
// typing in the box shouldn't rewrite history.
export function initialQueryParam(name) {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(name) ?? '';
}
