import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { RESOURCES, CATEGORIES } from '../content/resources.js';
import styles from './Resources.module.css';

function ResourceCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(o => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); } }}
    >
      <div className={styles.cardTop}>
        <div className={styles.nameWrap}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.levelBadge}>{item.level}</span>
        </div>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <p className={styles.description}>{item.description}</p>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <div className={styles.why}>
            <span className={styles.whyLabel}>Why it's here</span>
            <p>{item.why}</p>
          </div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitLink}
            >
              Visit →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Resources() {
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return RESOURCES.filter(r => {
      if (filterCat && r.category !== filterCat) return false;
      if (q && !r.name.toLowerCase().includes(q) && !r.description.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCat]);

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Free resources</h1>
            <p className={styles.subtitle}>
              Real Spanish, at no cost, once the basics here stop being the hard part —
              curated for comprehensible input, not just "authentic content" for its own sake.
            </p>
          </header>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search resources…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`${styles.filterBtn} ${filterCat === c ? styles.filterActive : ''}`}
                  onClick={() => setFilterCat(v => v === c ? '' : c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No resources match your search.</p>
          )}

          <div className={styles.list}>
            {filtered.map(item => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
