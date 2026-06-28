import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { IDIOMS, CATEGORIES } from '../content/idioms.js';
import styles from './Idioms.module.css';

const REGISTER_COLORS = {
  colloquial: 'regColloquial',
  informal: 'regInformal',
  neutral: 'regNeutral',
  formal: 'regFormal',
};

function IdiomCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(o => !o)}
    >
      <div className={styles.cardTop}>
        <div className={styles.idiomWrap}>
          <span className={styles.idiom}>{item.idiom}</span>
          <span className={`${styles.regBadge} ${styles[REGISTER_COLORS[item.register]]}`}>
            {item.register}
          </span>
        </div>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p className={styles.meaning}>{item.meaning}</p>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <div className={styles.literal}>
            <span className={styles.literalLabel}>Literal: </span>
            <span className={styles.literalText}>"{item.literal}"</span>
          </div>
          <div className={styles.example}>
            <p className={styles.exES}>{item.example}</p>
            <p className={styles.exEN}>{item.exampleEn}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Idioms() {
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('');
  const [filterReg, setFilterReg] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return IDIOMS.filter(i => {
      if (filterCat && i.category !== filterCat) return false;
      if (filterReg && i.register !== filterReg) return false;
      if (q && !i.idiom.toLowerCase().includes(q) && !i.meaning.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCat, filterReg]);

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Idioms</h1>
            <p className={styles.subtitle}>{IDIOMS.length} expressions you won't find in a textbook.</p>
          </header>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search idioms…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {['colloquial', 'informal', 'neutral'].map(r => (
                <button
                  key={r}
                  className={`${styles.filterBtn} ${filterReg === r ? styles.filterActive : ''}`}
                  onClick={() => setFilterReg(v => v === r ? '' : r)}
                >
                  {r}
                </button>
              ))}
            </div>
            {CATEGORIES.length > 0 && (
              <div className={styles.filterRow}>
                {CATEGORIES.map(c => (
                  <button
                    key={c}
                    className={`${styles.filterBtn} ${styles.filterSmall} ${filterCat === c ? styles.filterActive : ''}`}
                    onClick={() => setFilterCat(v => v === c ? '' : c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No idioms match your search.</p>
          )}

          <div className={styles.list}>
            {filtered.map(item => (
              <IdiomCard key={item.idiom} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
