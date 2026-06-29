import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { GRAMMAR_CARDS, CATEGORIES, CEFR_LEVELS } from '../content/grammar.js';
import styles from './GrammarRef.module.css';

function GrammarCard({ card, expanded, onToggle }) {
  return (
    <article
      className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}
      onClick={onToggle}
    >
      <header className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <span className={`${styles.cefrPill} ${styles['cefr' + card.cefr.replace('.', '')]}`}>
            {card.cefr}
          </span>
          <span className={styles.category}>{card.category}</span>
        </div>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <svg
          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}
          width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </header>

      {expanded && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <p className={styles.rule}>{card.rule}</p>

          <div className={styles.examples}>
            <h4 className={styles.subhead}>Examples</h4>
            <ul className={styles.exampleList}>
              {card.examples.map((ex, i) => (
                <li key={i} className={styles.exampleItem}>
                  <span className={styles.exES}>{ex.es}</span>
                  <span className={styles.exEN}>{ex.en}</span>
                </li>
              ))}
            </ul>
          </div>

          {card.exceptions?.length > 0 && (
            <div className={styles.exceptions}>
              <h4 className={styles.subhead}>Watch out</h4>
              <ul className={styles.exceptionList}>
                {card.exceptions.map((ex, i) => (
                  <li key={i} className={styles.exceptionItem}>{ex}</li>
                ))}
              </ul>
            </div>
          )}

          {card.related?.length > 0 && (
            <div className={styles.related}>
              <span className={styles.relatedLabel}>Related: </span>
              {card.related.map((r, i) => (
                <span key={r}>
                  <button
                    className={styles.relatedLink}
                    onClick={() => {
                      const el = document.getElementById(`card-${r}`);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {r.replace(/_/g, ' ')}
                  </button>
                  {i < card.related.length - 1 && ', '}
                </span>
              ))}
            </div>
          )}

          <div className={styles.cardActions}>
            <Link
              to={`/session?focus=${card.id}`}
              className={`btn btn-secondary ${styles.drillBtn}`}
            >
              Drill this concept →
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}

export default function GrammarRef() {
  const [search, setSearch] = useState('');
  const [filterCefr, setFilterCefr] = useState('');
  const [filterCat, setFilterCat] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return GRAMMAR_CARDS.filter(c => {
      if (filterCefr && c.cefr !== filterCefr) return false;
      if (filterCat && c.category !== filterCat) return false;
      if (q && !c.title.toLowerCase().includes(q) && !c.rule.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCefr, filterCat]);

  function toggle(id) {
    setExpandedId(prev => prev === id ? null : id);
  }

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <div>
              <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
              <h1 className={styles.title}>Grammar Reference</h1>
              <p className={styles.subtitle}>{GRAMMAR_CARDS.length} cards · A1 through C1</p>
            </div>
          </header>

          {/* Filters */}
          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search rules…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {CEFR_LEVELS.map(l => (
                <button
                  key={l}
                  className={`${styles.filterBtn} ${filterCefr === l ? styles.filterActive : ''}`}
                  onClick={() => setFilterCefr(prev => prev === l ? '' : l)}
                >
                  {l}
                </button>
              ))}
              <span className={styles.filterDivider} />
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`${styles.filterBtn} ${filterCat === c ? styles.filterActive : ''}`}
                  onClick={() => setFilterCat(prev => prev === c ? '' : c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No cards match your filters.</p>
          )}

          <div className={styles.cardList}>
            {filtered.map(card => (
              <div id={`card-${card.id}`} key={card.id}>
                <GrammarCard
                  card={card}
                  expanded={expandedId === card.id}
                  onToggle={() => toggle(card.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
