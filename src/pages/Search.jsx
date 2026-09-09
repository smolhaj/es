import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { loadSearchIndex, search as runSearch, resultHref } from '../lib/search.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Search.module.css';

// Order results are grouped into, and the order the type filters appear in.
const TYPES = [
  'word', 'verb', 'grammar', 'idiom', 'false friend',
  'lesson', 'reading', 'pronunciation', 'regional', 'cognate', 'resource',
];

// How deep the ranking goes before the list is trimmed for display.
const RANK_DEPTH = 400;
const SHOWN = 60;

const TYPE_LABEL = {
  word: 'Vocabulary', verb: 'Verb', grammar: 'Grammar', idiom: 'Idiom',
  'false friend': 'False friend', lesson: 'Lesson', reading: 'Reading',
  pronunciation: 'Pronunciation', regional: 'Regional', cognate: 'Cognate',
  resource: 'Resource',
};

export default function Search() {
  useDocumentTitle('Search');
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(() => params.get('q') ?? '');
  const [index, setIndex] = useState(null);
  const [indexFailed, setIndexFailed] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadSearchIndex()
      .then(entries => { if (!cancelled) setIndex(entries); })
      .catch(() => { if (!cancelled) setIndexFailed(true); });
    return () => { cancelled = true; };
  }, []);

  // Keep ?q= in step with the box so a search is linkable and survives a
  // reload — replace, not push, so Back leaves the page instead of walking
  // back through every keystroke.
  useEffect(() => {
    const timer = setTimeout(() => {
      setParams(query ? { q: query } : {}, { replace: true });
    }, 250);
    return () => clearTimeout(timer);
  }, [query, setParams]);

  // Ranked deep enough that a type filter has real depth to draw from —
  // filtering a 60-row list to "Verb" would show whichever handful happened
  // to place in the top 60, not the best verb matches.
  const ranked = useMemo(
    () => (index ? runSearch(index, query, RANK_DEPTH) : []),
    [index, query]
  );

  // Which types the current query actually found anything in — a filter
  // button for a type with no matches would just be dead.
  const availableTypes = useMemo(
    () => TYPES.filter(t => ranked.some(r => r.t === t)),
    [ranked]
  );

  const results = useMemo(() => {
    const filtered = typeFilter ? ranked.filter(r => r.t === typeFilter) : ranked;
    return filtered.slice(0, SHOWN);
  }, [ranked, typeFilter]);

  useEffect(() => { setCursor(0); }, [query, typeFilter]);

  useEffect(() => {
    if (typeFilter && !availableTypes.includes(typeFilter)) setTypeFilter('');
  }, [availableTypes, typeFilter]);

  const onKeyDown = useCallback((e) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor(c => Math.min(c + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor(c => Math.max(c - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      navigate(resultHref(results[cursor]));
    }
  }, [results, cursor, navigate]);

  // Keep the keyboard-selected row in view without stealing focus from the
  // input — the learner is still typing.
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-row="${cursor}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  const showEmpty = query.trim().length >= 2 && index && results.length === 0;

  return (
    <div className={styles.page}>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Search</h1>
            <p className={styles.subtitle}>
              Every word, verb, rule, idiom, lesson and passage on the site, in one box.
            </p>
          </header>

          <input
            ref={inputRef}
            autoFocus
            type="search"
            className={styles.searchInput}
            placeholder="hablar, subjunctive, to remember, echar de menos…"
            aria-label="Search all content"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />

          {availableTypes.length > 1 && (
            <div className={styles.filterRow}>
              <button
                className={`${styles.filterBtn} ${!typeFilter ? styles.filterActive : ''}`}
                onClick={() => setTypeFilter('')}
              >
                All
              </button>
              {availableTypes.map(t => (
                <button
                  key={t}
                  className={`${styles.filterBtn} ${typeFilter === t ? styles.filterActive : ''}`}
                  onClick={() => setTypeFilter(v => (v === t ? '' : t))}
                >
                  {TYPE_LABEL[t]}
                </button>
              ))}
            </div>
          )}

          {indexFailed && (
            <p className={styles.note}>
              Search didn't load. Check your connection and reload the page.
            </p>
          )}

          {!index && !indexFailed && query.trim().length >= 2 && (
            <p className={styles.note}>Loading the index…</p>
          )}

          {query.trim().length < 2 && !indexFailed && (
            <p className={styles.note}>Type at least two letters. ↑↓ to move, Enter to open.</p>
          )}

          {showEmpty && (
            <p className={styles.note}>
              Nothing matches “{query.trim()}”. Try the English meaning, or a shorter stem.
            </p>
          )}

          {results.length > 0 && (
            <>
              <p className={styles.count}>
                {results.length}{results.length === SHOWN ? '+' : ''} result{results.length === 1 ? '' : 's'}
              </p>
              <ul className={styles.results} ref={listRef}>
                {results.map((r, i) => (
                  <li key={`${r.t}-${r.a}-${i}`} data-row={i}>
                    <Link
                      to={resultHref(r)}
                      className={`${styles.result} ${i === cursor ? styles.resultActive : ''}`}
                      onMouseEnter={() => setCursor(i)}
                    >
                      <span className={styles.resultHead}>
                        <span className={styles.resultPrimary}>{r.a}</span>
                        <span className={styles.resultMeta}>
                          {r.l && <span className={styles.level}>{r.l}</span>}
                          <span className={styles.type}>{TYPE_LABEL[r.t]}</span>
                        </span>
                      </span>
                      {r.b && <span className={styles.resultSecondary}>{r.b}</span>}
                      {r.c && <span className={styles.resultDetail}>{r.c}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
