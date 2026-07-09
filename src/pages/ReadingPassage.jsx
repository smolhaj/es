import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ClickableSpanish from '../components/ClickableSpanish.jsx';
import { getPassage } from '../content/reading.js';
import styles from './ReadingPassage.module.css';

export default function ReadingPassage() {
  const { passageId } = useParams();
  const [showTranslation, setShowTranslation] = useState(false);
  const passage = getPassage(passageId);

  if (!passage) return <Navigate to="/reading" replace />;

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <Link to="/reading" className={styles.backLink}>← Reading</Link>

          <header className={styles.header}>
            <h1 className={styles.title}>{passage.title}</h1>
            <span className={styles.level}>{passage.level}</span>
          </header>

          <div className={styles.body}>
            {passage.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                <ClickableSpanish text={p.es} minWords={1} vocabOnly />
              </p>
            ))}
          </div>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowTranslation(v => !v)}
            aria-expanded={showTranslation}
          >
            {showTranslation ? 'Ocultar traducción' : 'Ver traducción'}
          </button>

          {showTranslation && (
            <div className={styles.translation}>
              {passage.paragraphs.map((p, i) => (
                <p key={i} className={styles.translationParagraph}>{p.en}</p>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
