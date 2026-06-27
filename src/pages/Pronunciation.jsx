import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { PRONUNCIATION_RULES, CATEGORIES } from '../content/pronunciation.js';
import styles from './Pronunciation.module.css';

function RuleCard({ rule, expanded, onToggle }) {
  return (
    <article
      className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}
      onClick={onToggle}
    >
      <header className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <span className={styles.category}>{rule.category}</span>
        </div>
        <h3 className={styles.cardTitle}>{rule.title}</h3>
        <svg
          className={`${styles.chevron} ${expanded ? styles.chevronOpen : ''}`}
          width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </header>

      {expanded && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          {rule.rule && <p className={styles.ruleText}>{rule.rule}</p>}

          {rule.sounds?.length > 0 && (
            <div className={styles.sounds}>
              <h4 className={styles.subhead}>Sounds</h4>
              <div className={styles.soundGrid}>
                {rule.sounds.map((s, i) => (
                  <div key={i} className={styles.soundRow}>
                    <span className={styles.soundLetter}>{s.letter}</span>
                    <span className={styles.soundIpa}>{s.ipa}</span>
                    <span className={styles.soundLike}>{s.like}</span>
                    <span className={styles.soundExample}>{s.example}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {rule.tips?.length > 0 && (
            <div className={styles.tips}>
              <h4 className={styles.subhead}>Tips</h4>
              <ul className={styles.tipList}>
                {rule.tips.map((t, i) => (
                  <li key={i} className={styles.tipItem}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {rule.examples?.length > 0 && (
            <div className={styles.examples}>
              <h4 className={styles.subhead}>Examples</h4>
              <ul className={styles.exampleList}>
                {rule.examples.map((ex, i) => (
                  <li key={i} className={styles.exampleItem}>
                    <span className={styles.exWord}>{ex.word}</span>
                    <span className={styles.exNote}>{ex.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function Pronunciation() {
  const [filterCat, setFilterCat] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = filterCat
    ? PRONUNCIATION_RULES.filter(r => r.category === filterCat)
    : PRONUNCIATION_RULES;

  function toggle(id) {
    setExpandedId(prev => prev === id ? null : id);
  }

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Pronunciation</h1>
            <p className={styles.subtitle}>
              {PRONUNCIATION_RULES.length} rules — Spanish sound system explained.
            </p>
          </header>

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

          <div className={styles.cardList}>
            {filtered.map(rule => (
              <RuleCard
                key={rule.id}
                rule={rule}
                expanded={expandedId === rule.id}
                onToggle={() => toggle(rule.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
