import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import { PASSAGES } from '../content/reading.js';
import styles from './Reading.module.css';

const FORMAT_LABELS = { standalone: 'Standalone scene', story: 'Story' };

export default function Reading() {
  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Reading</h1>
            <p className={styles.subtitle}>
              Short original passages to read for comprehension — click any underlined word for a definition.
            </p>
          </header>

          <div className={styles.list}>
            {PASSAGES.map(p => (
              <Link key={p.id} to={`/reading/${p.id}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <div className={styles.tags}>
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
