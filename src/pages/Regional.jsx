import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ClickableSpanish from '../components/ClickableSpanish.jsx';
import { REGIONAL_SECTIONS, CATEGORIES } from '../content/regional.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { initialQueryParam } from '../lib/queryParam.js';
import { textOf } from '../lib/search.js';
import styles from './Regional.module.css';

export default function Regional() {
  useDocumentTitle('Regional Spanish');
  const [search, setSearch] = useState(() => initialQueryParam('q'));
  const [filterCategory, setFilterCategory] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return REGIONAL_SECTIONS.filter(section => {
      if (filterCategory && section.category !== filterCategory) return false;
      if (!q) return true;
      return textOf(section).toLowerCase().includes(q);
    });
  }, [search, filterCategory]);

  return (
    <div className={styles.page}>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Regional Spanish</h1>
            <p className={styles.subtitle}>
              Spain vs. Latin America — pronunciation, grammar, and vocabulary differences.
            </p>
          </header>

          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search regional differences…"
            aria-label="Search regional differences"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className={styles.filterRow}>
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`${styles.filterBtn} ${filterCategory === c ? styles.filterActive : ''}`}
                onClick={() => setFilterCategory(v => v === c ? '' : c)}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.noResults}>Nothing matches that search.</p>
          )}

          <div className={styles.cardList}>
            {filtered.map(section => (
              <RegionalCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function RegionalCard({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.card} ${open ? styles.cardExpanded : ''}`}>
      <div
        className={styles.cardHeader}
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); } }}
      >
        <div className={styles.headerMeta}>
          <span className={styles.category}>{section.category}</span>
          <span className={styles.cardTitle}>{section.title}</span>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </div>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <p className={styles.summary}><ClickableSpanish text={section.summary} minWords={2} /></p>

          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>Context</th>
                <th className={styles.thSpain}>Spain</th>
                <th className={styles.thLatam}>Latin America</th>
              </tr>
            </thead>
            <tbody>
              {section.comparisons.map((c, i) => (
                <tr key={i} className={styles.tableRow}>
                  <td className={styles.tdContext}>{c.context}</td>
                  <td className={styles.tdSpain}><ClickableSpanish text={c.spain} minWords={2} /></td>
                  <td className={styles.tdLatam}><ClickableSpanish text={c.latam} minWords={2} /></td>
                </tr>
              ))}
            </tbody>
          </table>

          {section.tip && (
            <div className={styles.tip}>
              <span className={styles.tipLabel}>Tip</span>
              <ClickableSpanish text={section.tip} minWords={2} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
