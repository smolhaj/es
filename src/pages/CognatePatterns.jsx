import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import SpeakButton from '../components/SpeakButton.jsx';
import { COGNATE_PATTERNS } from '../content/cognate-patterns.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './CognatePatterns.module.css';

const RELIABILITY_LABELS = { high: 'Reliable', medium: 'Usually works' };

function asList(watchOut) {
  if (!watchOut) return [];
  return Array.isArray(watchOut) ? watchOut : [watchOut];
}

function PatternCard({ item }) {
  const [open, setOpen] = useState(false);
  const watchOuts = asList(item.watchOut);

  return (
    <article
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(o => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); } }}
    >
      <div className={styles.cardTop}>
        <span className={styles.patternName}>{item.pattern}</span>
        <span className={`${styles.reliabilityBadge} ${styles['reliability' + item.reliability]}`}>
          {RELIABILITY_LABELS[item.reliability]}
        </span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <p className={styles.explanation}>{item.explanation}</p>

          <div className={styles.examples}>
            {item.examples.map(ex => (
              <div key={ex.es} className={styles.exampleRow}>
                <SpeakButton text={ex.es} />
                <span className={styles.exampleEs}>{ex.es}</span>
                <span className={styles.exampleArrow}>→</span>
                <span className={styles.exampleEn}>{ex.en}</span>
                <span className={`${styles.cefr} ${styles['cefr' + ex.cefr]}`}>{ex.cefr}</span>
              </div>
            ))}
          </div>

          {watchOuts.length > 0 && (
            <div className={styles.watchOutBox}>
              <span className={styles.watchOutLabel}>Watch out</span>
              {watchOuts.map(w => (
                <p key={w.spanish} className={styles.watchOutText}>
                  <strong>{w.spanish}</strong> doesn't mean "{w.looksLike}" — it means {w.actualMeaning}.
                </p>
              ))}
              <Link to="/false-friends" className={styles.watchOutLink}>See all false friends →</Link>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function CognatePatterns() {
  useDocumentTitle('Cognates');
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return COGNATE_PATTERNS.filter(p => {
      if (filter && p.reliability !== filter) return false;
      if (q) {
        const inPattern = p.pattern.toLowerCase().includes(q);
        const inExamples = p.examples.some(ex => ex.es.toLowerCase().includes(q) || ex.en.toLowerCase().includes(q));
        if (!inPattern && !inExamples) return false;
      }
      return true;
    });
  }, [filter, search]);

  const totalExamples = useMemo(() => COGNATE_PATTERNS.reduce((n, p) => n + p.examples.length, 0), []);

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Cognates</h1>
            <p className={styles.subtitle}>
              {COGNATE_PATTERNS.length} patterns, {totalExamples} example words — Spanish and English share
              thousands of words through a handful of reliable suffix swaps. Learn the pattern once, recognize
              hundreds of words for free.
            </p>
          </header>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search patterns or words…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {['high', 'medium'].map(level => (
                <button
                  key={level}
                  className={`${styles.filterBtn} ${filter === level ? styles.filterActive : ''}`}
                  onClick={() => setFilter(f => f === level ? '' : level)}
                >
                  {RELIABILITY_LABELS[level]}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No matches.</p>
          )}

          <div className={styles.list}>
            {filtered.map(item => (
              <PatternCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
