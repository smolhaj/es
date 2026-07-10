import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { PASSAGES } from '../content/readings.js';
import { isPassageComplete } from '../lib/readingProgress.js';
import styles from './Readings.module.css';

const FORMAT_LABELS = { standalone: 'Standalone scene', story: 'Story' };

export default function Readings() {
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    setCompleted(Object.fromEntries(PASSAGES.map(p => [p.id, isPassageComplete(p.id)])));
  }, []);

  const doneCount = Object.values(completed).filter(Boolean).length;

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Readings</h1>
            <p className={styles.subtitle}>
              Short original passages to read for comprehension — click any underlined word for a definition.
            </p>
            {doneCount > 0 && (
              <p className={styles.progressLine}>
                {doneCount} of {PASSAGES.length} complete
              </p>
            )}
          </header>

          <div className={styles.list}>
            {PASSAGES.map(p => (
              <Link
                key={p.id}
                to={`/readings/${p.id}`}
                className={`${styles.card} ${completed[p.id] ? styles.cardDone : ''}`}
              >
                <div className={styles.cardTop}>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <div className={styles.tags}>
                    {completed[p.id] && <span className={styles.doneCheck} aria-label="Completed">✓</span>}
                    <span className={styles.level}>{p.level}</span>
                    <span className={styles.format}>{FORMAT_LABELS[p.format] ?? p.format}</span>
                  </div>
                </div>
                <p className={styles.cardSummary}>{p.summary}</p>
                {p.format === 'story' && (
                  <p className={styles.chapterNote}>Chapter {p.chapter}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
