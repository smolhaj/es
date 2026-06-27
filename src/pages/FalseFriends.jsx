import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { FALSE_FRIENDS } from '../content/false-friends.js';
import styles from './FalseFriends.module.css';

const DANGER_COLORS = { high: 'dangerHigh', medium: 'dangerMed', low: 'dangerLow' };
const DANGER_LABELS = { high: 'High risk', medium: 'Medium', low: 'Low' };

function FriendCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(o => !o)}
    >
      <div className={styles.cardTop}>
        <div className={styles.words}>
          <span className={styles.spanish}>{item.spanish}</span>
          <span className={styles.arrow}>≠</span>
          <span className={styles.english}>{item.looksLike}</span>
        </div>
        <span className={`${styles.dangerBadge} ${styles[DANGER_COLORS[item.dangerLevel]]}`}>
          {DANGER_LABELS[item.dangerLevel]}
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
          <div className={styles.row}>
            <span className={styles.rowLabel}>Actually means</span>
            <span className={styles.rowValue}>{item.actualMeaning}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Example</span>
            <span className={`${styles.rowValue} ${styles.italic}`}>{item.example}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>How to say it</span>
            <span className={styles.rowValue}>{item.correctUsage}</span>
          </div>
        </div>
      )}
    </article>
  );
}

export default function FalseFriends() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return FALSE_FRIENDS.filter(f => {
      if (filter && f.dangerLevel !== filter) return false;
      if (q && !f.spanish.toLowerCase().includes(q) && !f.looksLike.toLowerCase().includes(q) && !f.actualMeaning.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, search]);

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>False Friends</h1>
            <p className={styles.subtitle}>
              {FALSE_FRIENDS.length} words that look like English but aren't.
            </p>
          </header>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search words…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {['high', 'medium', 'low'].map(level => (
                <button
                  key={level}
                  className={`${styles.filterBtn} ${filter === level ? styles.filterActive : ''}`}
                  onClick={() => setFilter(f => f === level ? '' : level)}
                >
                  {DANGER_LABELS[level]}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No matches.</p>
          )}

          <div className={styles.list}>
            {filtered.map(item => (
              <FriendCard key={item.spanish} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
