import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { VERBS, CEFR_LEVELS, TYPES, TENSES, TENSE_LABELS, FORMS, FORM_KEYS } from '../content/verbs.js';
import styles from './VerbsRef.module.css';

export default function VerbsRef() {
  const [search, setSearch] = useState('');
  const [filterCefr, setFilterCefr] = useState('');
  const [filterType, setFilterType] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return VERBS.filter(v => {
      if (filterCefr && v.cefr !== filterCefr) return false;
      if (filterType && v.type !== filterType) return false;
      if (q && !v.infinitive.includes(q) && !v.meaning.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCefr, filterType]);

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Verb conjugations</h1>
            <p className={styles.subtitle}>{VERBS.length} key verbs (regular, stem-changing, irregular) · A1 through C1</p>
          </header>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search verbs…"
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
              {TYPES.map(t => (
                <button
                  key={t}
                  className={`${styles.filterBtn} ${filterType === t ? styles.filterActive : ''}`}
                  onClick={() => setFilterType(v => v === t ? '' : t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.count}>{filtered.length} verb{filtered.length !== 1 ? 's' : ''}</p>

          <div className={styles.verbList}>
            {filtered.map(v => <VerbCard key={v.infinitive} verb={v} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

function VerbCard({ verb }) {
  const [open, setOpen] = useState(false);
  const [activeTense, setActiveTense] = useState('present');

  const typeClass = verb.type === 'stem-changing' ? styles.typeStemChanging
    : verb.type === 'irregular' ? styles.typeIrregular : '';
  const cefrClass = styles[`cefr${verb.cefr.replace('.', '')}`] ?? '';

  return (
    <div className={`${styles.card} ${open ? styles.cardExpanded : ''}`}>
      <div
        className={styles.cardHeader}
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <div className={styles.headerLeft}>
          <span className={styles.infinitive}>{verb.infinitive}</span>
          <span className={styles.meaning}>{verb.meaning}</span>
        </div>
        <div className={styles.headerRight}>
          <span className={`${styles.typeBadge} ${typeClass}`}>{verb.type}</span>
          <span className={`${styles.cefrBadge} ${cefrClass}`}>{verb.cefr}</span>
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
        </div>
      </div>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          {verb.note && <p className={styles.note}>{verb.note}</p>}

          <div className={styles.tenseTabs}>
            <button
              className={`${styles.tenseTab} ${activeTense === 'all' ? styles.tenseTabActive : ''}`}
              onClick={() => setActiveTense('all')}
            >
              All tenses
            </button>
            {TENSES.map(t => (
              <button
                key={t}
                className={`${styles.tenseTab} ${activeTense === t ? styles.tenseTabActive : ''}`}
                onClick={() => setActiveTense(t)}
              >
                {TENSE_LABELS[t]}
              </button>
            ))}
          </div>

          {activeTense === 'all' ? (
            <div className={styles.allTenses}>
              {TENSES.map(t => (
                <div key={t} className={styles.tenseBlock}>
                  <div className={styles.tenseLabel}>{TENSE_LABELS[t]}</div>
                  <div className={styles.miniConj}>
                    {FORM_KEYS.map((k, i) => (
                      <div key={k} className={styles.miniRow}>
                        <span className={styles.miniPronoun}>{FORMS[i]}</span>
                        <span className={styles.miniForm}>{verb[t][k]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.conjTable}>
              {FORM_KEYS.map((k, i) => (
                <div key={k} className={styles.conjRow}>
                  <span className={styles.pronoun}>{FORMS[i]}</span>
                  <span className={styles.form}>{verb[activeTense][k]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
