import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import { UNITS } from '../content/curriculum/index.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './GetStarted.module.css';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const LEVEL_LABEL = {
  A1: 'Absolute Basics', A2: 'Building Fluency', B1: 'Expressing Yourself', B2: 'Advanced Structures',
  C1: 'Near-Native Precision', C2: 'Native-Level Mastery',
};
// One honest "what you'll be able to do" line per level — grounded in what
// this level's units actually teach (see UNIT_METADATA), not generic
// marketing copy.
const LEVEL_BLURB = {
  A1: 'Greet people, describe yourself and your surroundings, and handle simple daily needs — all in the present tense.',
  A2: 'Talk about your routine, your past, and your plans, and get through everyday situations like shopping, requests, and comparisons.',
  B1: 'Express opinions and hypotheticals, tell a clear story in the past, and use the subjunctive for the first time.',
  B2: 'Argue a point, write formal correspondence, and handle passive and compound tenses natively rather than translating them in your head.',
  C1: 'Report what someone said, switch register on purpose, and structure a multi-part argument the way a fluent adult actually does.',
  C2: "Catch what's implied but not said, read formal and literary Spanish natively, and use the subjunctive's rarest, most native-sounding forms.",
};

export default function GetStarted() {
  useDocumentTitle('Learn');
  const { token } = useAuth();
  const [completed, setCompleted] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.curriculum.progress(token)
      .then(res => setCompleted(res.completed ?? {}))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token]);

  const doneCount = Object.keys(completed).length;
  const availableCount = UNITS.filter(u => !u.comingSoon).length;

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1 className={styles.title}>Learn.</h1>
            <p className={styles.subtitle}>
              A guided path from your first word to real fluency. Work through units in
              any order, at any pace — no streaks, no locks.
            </p>
            {!loading && (
              <p className={styles.progressLine}>
                {doneCount} of {availableCount} available unit{availableCount !== 1 ? 's' : ''} complete
              </p>
            )}
          </header>

          {LEVELS.map(level => {
            const units = UNITS.filter(u => u.level === level);
            if (units.length === 0) return null;
            return (
              <section key={level} className={styles.levelSection}>
                <h2 className={styles.levelTitle}>
                  <span className={styles.levelBadge}>{level}</span>
                  {LEVEL_LABEL[level]}
                </h2>
                <p className={styles.levelBlurb}>{LEVEL_BLURB[level]}</p>
                <div className={styles.unitGrid}>
                  {units.map(unit => (
                    <UnitCard key={unit.id} unit={unit} done={!!completed[unit.id]} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function UnitCard({ unit, done }) {
  const content = (
    <>
      <div className={styles.unitHeader}>
        {unit.isCheckpoint
          ? <span className={styles.checkpointBadge}>Review</span>
          : <span className={styles.unitOrder}>{unit.order}</span>}
        {done && <span className={styles.doneCheck} aria-label="Completed">✓</span>}
        {unit.comingSoon && <span className={styles.comingSoon}>Coming soon</span>}
      </div>
      <h3 className={styles.unitTitle}>{unit.title}</h3>
      <p className={styles.unitSummary}>{unit.summary}</p>
    </>
  );

  if (unit.comingSoon) {
    return <div className={`${styles.unitCard} ${styles.unitCardDisabled}`}>{content}</div>;
  }

  return (
    <Link
      to={`/lessons/${unit.id}`}
      className={`${styles.unitCard} ${unit.isCheckpoint ? styles.unitCardCheckpoint : ''} ${done ? styles.unitCardDone : ''}`}
    >
      {content}
    </Link>
  );
}
