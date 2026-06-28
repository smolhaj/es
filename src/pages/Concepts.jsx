import { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import styles from './Concepts.module.css';

const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];

const CATEGORY_LABELS = {
  verb: 'Verbs',
  pronouns: 'Pronouns',
  morphology: 'Morphology',
  syntax: 'Syntax',
  vocabulary: 'Vocabulary',
  prepositions: 'Prepositions',
};

function masteryClass(score) {
  if (score === null) return styles.unseen;
  if (score >= 0.7) return styles.mastered;
  if (score >= 0.4) return styles.partial;
  return styles.weak;
}

function masteryLabel(score) {
  if (score === null) return 'Not started';
  if (score >= 0.7) return 'Strong';
  if (score >= 0.4) return 'Learning';
  return 'Weak';
}

function ConceptRow({ concept }) {
  const pct = concept.masteryScore !== null ? Math.round(concept.masteryScore * 100) : null;

  return (
    <div className={`${styles.row} ${masteryClass(concept.masteryScore)}`}>
      <div className={styles.rowMain}>
        <span className={styles.rowLabel}>{concept.label}</span>
        {concept.fossilizationFlagged && (
          <span className={styles.fossilTag}>persistent error</span>
        )}
        <span className={styles.rowCategory}>
          {CATEGORY_LABELS[concept.category] ?? concept.category}
        </span>
      </div>

      <div className={styles.rowRight}>
        {pct !== null ? (
          <>
            <div className={styles.bar}>
              <div
                className={`${styles.barFill} ${masteryClass(concept.masteryScore)}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className={styles.pct}>{pct}%</span>
          </>
        ) : (
          <span className={styles.unstarted}>—</span>
        )}
      </div>
    </div>
  );
}

function LevelSection({ level, concepts }) {
  const seen = concepts.filter(c => c.seen).length;
  const mastered = concepts.filter(c => c.masteryScore !== null && c.masteryScore >= 0.7).length;

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.levelBadge}>{level}</span>
        <span className={styles.sectionMeta}>
          {mastered}/{concepts.length} strong
          {seen < concepts.length ? ` · ${concepts.length - seen} not started` : ''}
        </span>
      </div>
      <div className={styles.rows}>
        {concepts.map(c => <ConceptRow key={c.id} concept={c} />)}
      </div>
    </section>
  );
}

export default function Concepts() {
  const { token } = useAuth();
  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    api.learner.concepts(token)
      .then(d => setConcepts(d.concepts ?? []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  const grouped = useMemo(() => {
    const filtered = filter === 'all' ? concepts
      : filter === 'seen' ? concepts.filter(c => c.seen)
      : filter === 'weak' ? concepts.filter(c => c.seen && c.masteryScore < 0.7)
      : concepts;

    const byLevel = {};
    for (const level of CEFR_ORDER) byLevel[level] = [];
    for (const c of filtered) {
      if (byLevel[c.cefr]) byLevel[c.cefr].push(c);
    }
    return byLevel;
  }, [concepts, filter]);

  const totalSeen = concepts.filter(c => c.seen).length;
  const totalMastered = concepts.filter(c => c.masteryScore >= 0.7).length;

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1 className={styles.title}>Concept mastery</h1>
            <p className={styles.sub}>
              {totalSeen} concepts encountered · {totalMastered} strong ({concepts.length} total)
            </p>
          </header>

          <div className={styles.legend}>
            <span className={`${styles.dot} ${styles.mastered}`} />
            <span className={styles.legendLabel}>Strong (≥70%)</span>
            <span className={`${styles.dot} ${styles.partial}`} />
            <span className={styles.legendLabel}>Learning (40–69%)</span>
            <span className={`${styles.dot} ${styles.weak}`} />
            <span className={styles.legendLabel}>Weak (&lt;40%)</span>
            <span className={`${styles.dot} ${styles.unseen}`} />
            <span className={styles.legendLabel}>Not started</span>
          </div>

          <div className={styles.filters}>
            {[['all', 'All'], ['seen', 'Seen'], ['weak', 'Needs work']].map(([val, lbl]) => (
              <button
                key={val}
                className={`${styles.filter} ${filter === val ? styles.filterActive : ''}`}
                onClick={() => setFilter(val)}
              >
                {lbl}
              </button>
            ))}
          </div>

          {loading && <p className={styles.loading}>Loading…</p>}
          {error && <p className={styles.error}>{error}</p>}

          {!loading && !error && CEFR_ORDER.map(level => (
            grouped[level]?.length > 0 && (
              <LevelSection key={level} level={level} concepts={grouped[level]} />
            )
          ))}
        </div>
      </main>
    </div>
  );
}
