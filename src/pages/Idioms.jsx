import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ClickableSpanish from '../components/ClickableSpanish.jsx';
import { IDIOMS, CATEGORIES, CEFR_LEVELS } from '../content/idioms.js';
import styles from './Idioms.module.css';

const categoryCounts = IDIOMS.reduce((acc, i) => {
  acc[i.category] = (acc[i.category] || 0) + 1;
  return acc;
}, {});
const MAIN_CATEGORIES = CATEGORIES.filter(c => categoryCounts[c] >= 3);

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
          <span className={`${styles.cefr} ${styles['cefr' + item.cefr.replace('.', '')]}`}>
            {item.cefr}
          </span>
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
            <p className={styles.exES}><ClickableSpanish text={item.example} /></p>
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
  const [filterCefr, setFilterCefr] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return IDIOMS.filter(i => {
      if (filterCefr && i.cefr !== filterCefr) return false;
      if (filterCat && i.category !== filterCat) return false;
      if (filterReg && i.register !== filterReg) return false;
      if (q && !i.idiom.toLowerCase().includes(q) && !i.meaning.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCat, filterReg, filterCefr]);

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
              {CEFR_LEVELS.map(l => (
                <button
                  key={l}
                  className={`${styles.filterBtn} ${filterCefr === l ? styles.filterActive : ''}`}
                  onClick={() => setFilterCefr(v => v === l ? '' : l)}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className={styles.filterRow}>
              {['colloquial', 'informal', 'neutral', 'formal'].map(r => (
                <button
                  key={r}
                  className={`${styles.filterBtn} ${filterReg === r ? styles.filterActive : ''}`}
                  onClick={() => setFilterReg(v => v === r ? '' : r)}
                >
                  {r}
                </button>
              ))}
            </div>
            {MAIN_CATEGORIES.length > 0 && (
              <div className={styles.filterRow}>
                {MAIN_CATEGORIES.map(c => (
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
