import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { PASSAGES, formatWrittenDate } from '../content/readings.js';
import { isPassageComplete, togglePassageComplete } from '../lib/readingProgress.js';
import styles from './Readings.module.css';

const FORMAT_LABELS = { standalone: 'Standalone scene', story: 'Story' };
const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Deliberately slower than average native reading speed (~200-250 wpm) —
// a learner is stopping to click glossed words and re-read lines, not
// reading at native fluency.
const WORDS_PER_MINUTE = 130;

function estimateReadMinutes(passage) {
  const wordCount = passage.paragraphs.reduce((n, p) => n + p.es.trim().split(/\s+/).length, 0);
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export default function Readings() {
  const [completed, setCompleted] = useState({});
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('level'); // 'level' | 'newest'
  const [hideCompleted, setHideCompleted] = useState(false);

  useEffect(() => {
    setCompleted(Object.fromEntries(PASSAGES.map(p => [p.id, isPassageComplete(p.id)])));
  }, []);

  function handleToggleComplete(e, id) {
    // Nested inside a <Link> (see the card below) — stop the click from
    // also triggering navigation to the passage page.
    e.preventDefault();
    e.stopPropagation();
    togglePassageComplete(id);
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  }

  const doneCount = Object.values(completed).filter(Boolean).length;

  const visible = useMemo(() => {
    const q = search.toLowerCase();
    const list = PASSAGES.filter(p => {
      if (hideCompleted && completed[p.id]) return false;
      if (q && !p.title.toLowerCase().includes(q) && !p.summary.toLowerCase().includes(q)) return false;
      return true;
    });
    if (sortBy === 'level') {
      list.sort((a, b) => CEFR_ORDER.indexOf(a.level) - CEFR_ORDER.indexOf(b.level));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.written ?? '').localeCompare(a.written ?? ''));
    }
    return list;
  }, [search, sortBy, hideCompleted, completed]);

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Readings</h1>
            <p className={styles.subtitle}>
              Short original passages to read for comprehension — click any underlined word for a definition.
            </p>
            {doneCount > 0 && (
              <p className={styles.progressLine}>
                {doneCount} of {PASSAGES.length} complete
              </p>
            )}
          </header>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search titles…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {[{ key: 'level', label: 'Sort by level' }, { key: 'newest', label: 'Newest first' }].map(opt => (
                <button
                  key={opt.key}
                  className={`${styles.filterBtn} ${sortBy === opt.key ? styles.filterActive : ''}`}
                  onClick={() => setSortBy(opt.key)}
                >
                  {opt.label}
                </button>
              ))}
              <button
                className={`${styles.filterBtn} ${hideCompleted ? styles.filterActive : ''}`}
                onClick={() => setHideCompleted(v => !v)}
              >
                Hide completed
              </button>
            </div>
          </div>

          {visible.length === 0 && (
            <p className={styles.empty}>
              {hideCompleted && doneCount === PASSAGES.length && PASSAGES.length > 0
                ? 'All caught up — every reading is marked complete.'
                : 'No readings match.'}
            </p>
          )}

          <div className={styles.list}>
            {visible.map(p => (
              <Link
                key={p.id}
                to={`/readings/${p.id}`}
                className={`${styles.card} ${completed[p.id] ? styles.cardDone : ''}`}
              >
                <div className={styles.cardTop}>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <div className={styles.tags}>
                    <span
                      role="button"
                      tabIndex={0}
                      className={`${styles.doneToggle} ${completed[p.id] ? styles.doneToggleActive : ''}`}
                      onClick={e => handleToggleComplete(e, p.id)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggleComplete(e, p.id); }
                      }}
                      aria-label={completed[p.id] ? 'Mark as unread' : 'Mark as read'}
                      title={completed[p.id] ? 'Mark as unread' : 'Mark as read'}
                    >
                      ✓
                    </span>
                    <span className={`${styles.level} ${styles['level' + p.level]}`}>{p.level}</span>
                    <span className={styles.format}>{FORMAT_LABELS[p.format] ?? p.format}</span>
                  </div>
                </div>
                <p className={styles.cardSummary}>{p.summary}</p>
                <div className={styles.cardMeta}>
                  {p.format === 'story' && <span className={styles.chapterNote}>Chapter {p.chapter}</span>}
                  <span className={styles.readTime}>~{estimateReadMinutes(p)} min read</span>
                  {p.written && <span className={styles.writtenDate}>{formatWrittenDate(p.written)}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
