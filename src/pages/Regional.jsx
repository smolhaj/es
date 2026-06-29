import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { REGIONAL_SECTIONS, CATEGORIES } from '../content/regional.js';
import styles from './Regional.module.css';

export default function Regional() {
  const [filterCategory, setFilterCategory] = useState('');

  const filtered = filterCategory
    ? REGIONAL_SECTIONS.filter(s => s.category === filterCategory)
    : REGIONAL_SECTIONS;

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Regional Spanish</h1>
            <p className={styles.subtitle}>
              Spain vs. Latin America — pronunciation, grammar, and vocabulary differences.
            </p>
          </header>

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
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <div className={styles.headerMeta}>
          <span className={styles.category}>{section.category}</span>
          <span className={styles.cardTitle}>{section.title}</span>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </div>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <p className={styles.summary}>{section.summary}</p>

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
                  <td className={styles.tdSpain}>{c.spain}</td>
                  <td className={styles.tdLatam}>{c.latam}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {section.tip && (
            <div className={styles.tip}>
              <span className={styles.tipLabel}>Tip</span>
              {section.tip}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
