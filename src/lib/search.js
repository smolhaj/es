// Site-wide search over everything the app already knows: vocabulary, verbs,
// grammar rules, idioms, false friends, reading passages, curriculum units,
// pronunciation and regional notes, cognate patterns, and free resources.
//
// The index is built at build time (see
// scripts/vite-plugin-derived-content.js) and imported dynamically, so the
// ~125kB it compresses to is only ever downloaded by someone who actually
// searches — importing the eleven content files whole would be ~1.5MB.

// Where a result of each type lives. Every page listed here has its own
// search box, seeded from ?q=, so a result lands on the row it came from
// rather than just the right page; the two types with real per-item routes
// (readings, lessons) carry an explicit `u` in the index instead.
const PAGE_FOR_TYPE = {
  word: '/vocab',
  verb: '/verbs',
  grammar: '/grammar',
  idiom: '/idioms',
  'false friend': '/false-friends',
  cognate: '/cognates',
  resource: '/resources',
  pronunciation: '/pronunciation',
  regional: '/regional',
};

export function resultHref(entry) {
  if (entry.u) return entry.u;
  const page = PAGE_FOR_TYPE[entry.t];
  if (!page) return '/dashboard';
  return `${page}?q=${encodeURIComponent(entry.a)}`;
}

export function normalize(s) {
  return String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

// Nudges ties toward what a learner is most likely to have meant by a bare
// word — never large enough to outrank a better textual match.
const TYPE_BONUS = {
  word: 6, verb: 5, grammar: 4, idiom: 3, 'false friend': 3,
  lesson: 2, reading: 2, cognate: 1, pronunciation: 1, regional: 1, resource: 0,
};

function fieldScore(haystack, needle, weights) {
  if (!haystack) return 0;
  if (haystack === needle) return weights.exact;
  if (haystack.startsWith(needle)) return weights.prefix;
  // Word-start match: "hab" should find "de habla hispana", but "abl"
  // shouldn't rank it as highly as a real prefix would.
  if (haystack.includes(` ${needle}`)) return weights.wordStart;
  if (haystack.includes(needle)) return weights.substring;
  return 0;
}

const PRIMARY = { exact: 1000, prefix: 700, wordStart: 520, substring: 320 };
const SECONDARY = { exact: 880, prefix: 620, wordStart: 470, substring: 270 };
const DETAIL = { exact: 140, prefix: 130, wordStart: 120, substring: 110 };

function scoreOne(e, needle) {
  const best = Math.max(
    fieldScore(e._a, needle, PRIMARY),
    fieldScore(e._b, needle, SECONDARY),
    fieldScore(e._c, needle, DETAIL),
  );
  if (!best) return 0;
  // Shorter primaries win ties: searching "ser" should surface the verb
  // "ser" above "conocer a alguien", both of which contain it.
  return best + (TYPE_BONUS[e.t] ?? 0) + Math.max(0, 40 - e._a.length);
}

export function search(entries, rawQuery, limit = 60) {
  const needle = normalize(rawQuery);
  if (needle.length < 2) return [];

  const scored = [];
  for (const e of entries) {
    const score = scoreOne(e, needle);
    if (score > 0) scored.push({ entry: e, score });
  }

  // Multi-word queries that match nothing as a phrase fall back to
  // "every word appears somewhere" — "past subjunctive" finds the rule
  // titled "Imperfect Subjunctive" that no phrase match would.
  const terms = needle.split(/\s+/).filter(t => t.length > 1);
  if (scored.length === 0 && terms.length > 1) {
    for (const e of entries) {
      let total = 0;
      for (const term of terms) {
        const s = scoreOne(e, term);
        if (!s) { total = 0; break; }
        total += s;
      }
      if (total > 0) scored.push({ entry: e, score: Math.round(total / terms.length) });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.entry.a.localeCompare(b.entry.a));
  return scored.slice(0, limit).map(s => s.entry);
}

// Every string in a record, keys excluded, flattened — for the reference
// pages that filter their own list by a free-text box. Walking the value
// rather than naming fields means a filter can't quietly stop matching
// half a record because the content file nests something differently than
// the page's author assumed (which is exactly how the cognate `watchOut`
// bug got in).
export function textOf(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return value.map(textOf).join(' ');
  if (typeof value === 'object') return Object.values(value).map(textOf).join(' ');
  return '';
}

let cached = null;

export async function loadSearchIndex() {
  if (cached) return cached;
  const { SEARCH_INDEX } = await import('virtual:search-index');
  // Normalized copies are computed once here rather than per keystroke —
  // 3,000 entries × three fields is a one-off, and doing it in the index
  // itself would roughly double what's sent over the wire.
  cached = SEARCH_INDEX.map(e => ({
    ...e,
    _a: normalize(e.a),
    _b: e.b ? normalize(e.b) : '',
    _c: e.c ? normalize(e.c) : '',
  }));
  return cached;
}
