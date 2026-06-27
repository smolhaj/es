import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { VOCABULARY, DOMAINS, CEFR_LEVELS } from '../content/vocabulary.js';
import styles from './VocabBrowser.module.css';

const DOMAIN_LABELS = {
  greetings: 'Greetings', numbers: 'Numbers', time: 'Time', colors: 'Colors',
  family: 'Family', food: 'Food', places: 'Places', verbs: 'Verbs',
  adjectives: 'Adjectives', connectors: 'Connectors', adverbs: 'Adverbs',
  nouns: 'Nouns',
};

export default function VocabBrowser() {
  const [search, setSearch] = useState('');
  const [filterCefr, setFilterCefr] = useState('');
  const [filterDomain, setFilterDomain] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return VOCABULARY.filter(v => {
      if (filterCefr && v.cefr !== filterCefr) return false;
      if (filterDomain && v.domain !== filterDomain) return false;
      if (q && !v.es.toLowerCase().includes(q) && !v.en.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCefr, filterDomain]);

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Vocabulary</h1>
            <p className={styles.subtitle}>{VOCABULARY.length} words · A1 through B1</p>
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
              {DOMAINS.map(d => (
                <button
                  key={d}
                  className={`${styles.filterBtn} ${styles.filterSmall} ${filterDomain === d ? styles.filterActive : ''}`}
                  onClick={() => setFilterDomain(v => v === d ? '' : d)}
                >
                  {DOMAIN_LABELS[d] ?? d}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.count}>{filtered.length} word{filtered.length !== 1 ? 's' : ''}</p>

          <div className={styles.grid}>
            {filtered.map((v, i) => (
              <WordCard key={`${v.es}-${i}`} item={v} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function WordCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(o => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
    >
      <div className={styles.cardMain}>
        <span className={styles.es}>{item.es}</span>
        <span className={styles.en}>{item.en}</span>
        <span className={`${styles.cefr} ${styles['cefr' + item.cefr.replace('.', '')]}`}>
          {item.cefr}
        </span>
      </div>
      {open && item.example && (
        <div className={styles.cardDetail} onClick={e => e.stopPropagation()}>
          <p className={styles.exampleES}>{item.example}</p>
          <p className={styles.exampleEN}>{item.exampleEn}</p>
        </div>
      )}
    </div>
  );
}
