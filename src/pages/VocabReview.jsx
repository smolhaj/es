import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import styles from './VocabReview.module.css';

const GRADE_LABELS = [
  { grade: 1, label: 'Again', sub: '<1 day', className: 'again' },
  { grade: 2, label: 'Hard', sub: 'few days', className: 'hard' },
  { grade: 3, label: 'Good', sub: 'on schedule', className: 'good' },
  { grade: 4, label: 'Easy', sub: 'longer', className: 'easy' },
];

export default function VocabReview() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [grading, setGrading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [reviewed, setReviewed] = useState(0);

  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState('');

  useEffect(() => {
    api.vocabulary.due(token)
      .then(data => {
        setItems(data.items ?? []);
        if ((data.items ?? []).length === 0) setDone(true);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  async function handleSeed() {
    setSeeding(true);
    try {
      const result = await api.vocabulary.seed(token);
      setSeedMsg(result.message ?? 'Done!');
      if (result.seeded > 0) {
        const data = await api.vocabulary.due(token);
        const newItems = data.items ?? [];
        if (newItems.length > 0) {
          setItems(newItems);
          setDone(false);
        }
      }
    } catch (err) {
      setSeedMsg(err.message);
    } finally {
      setSeeding(false);
    }
  }

  // Keyboard shortcuts: Space/Enter reveal; 1-4 grade
  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === 'BUTTON' && e.key !== ' ') return;
      if ((e.key === ' ' || e.key === 'Enter') && !revealed && current && !grading) {
        e.preventDefault();
        setRevealed(true);
      }
      if (revealed && !grading && current) {
        const map = { '1': 1, '2': 2, '3': 3, '4': 4 };
        if (map[e.key] && !e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          handleGrade(map[e.key]);
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [revealed, current, grading, handleGrade]);

  const current = items[idx] ?? null;

  const handleGrade = useCallback(async (grade) => {
    if (!current || grading) return;
    setGrading(true);
    try {
      await api.vocabulary.review(token, current.id, grade);
      setReviewed(r => r + 1);
      if (idx + 1 >= items.length) {
        setDone(true);
      } else {
        setIdx(i => i + 1);
        setRevealed(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setGrading(false);
    }
  }, [current, grading, idx, items.length, token]);

  if (loading) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.center}>
          <div className={styles.spinner} aria-label="Loading…" />
          <p className={styles.hint}>Loading your review queue…</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.center}>
          <p className={styles.errorMsg}>{error}</p>
          <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>Back</button>
        </main>
      </div>
    );
  }

  if (done) {
    const neverSeeded = reviewed === 0 && items.length === 0;
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.center}>
          <div className={styles.doneBox}>
            <h1 className={styles.doneTitle}>
              {neverSeeded ? 'No words queued yet.' : 'All caught up.'}
            </h1>
            <p className={styles.doneSub}>
              {reviewed > 0
                ? `You reviewed ${reviewed} word${reviewed !== 1 ? 's' : ''}.`
                : neverSeeded
                  ? 'Import the full vocabulary list to start spaced repetition.'
                  : 'No words are due for review right now.'}
            </p>
            {neverSeeded && (
              <button
                className="btn btn-primary"
                onClick={handleSeed}
                disabled={seeding}
                style={{ marginBottom: 'var(--sp-3)' }}
              >
                {seeding ? 'Importing…' : 'Import vocabulary for my level →'}
              </button>
            )}
            {seedMsg && <p className={styles.doneSub}>{seedMsg}</p>}
            <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
              Back to dashboard
            </button>
          </div>
        </main>
      </div>
    );
  }

  const progress = idx / items.length;

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          {/* Header */}
          <div className={styles.topRow}>
            <button className={`btn btn-ghost ${styles.back}`} onClick={() => navigate('/dashboard')}>
              ← Dashboard
            </button>
            <span className={styles.queueCount}>{idx + 1} / {items.length}</span>
          </div>

          {/* Progress bar */}
          <div className={styles.progressWrap} aria-label={`Word ${idx + 1} of ${items.length}`}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progress * 100}%` }} />
            </div>
          </div>

          {/* Card */}
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <span className={styles.wordLabel}>Spanish</span>
              <p className={styles.word}>{current.word}</p>

              {!revealed ? (
                <button
                  className={`btn btn-secondary ${styles.revealBtn}`}
                  onClick={() => setRevealed(true)}
                  autoFocus
                >
                  Show translation
                </button>
              ) : (
                <div className={styles.revealed}>
                  <span className={styles.transLabel}>English</span>
                  <p className={styles.translation}>{current.translation}</p>

                  <div className={styles.fsrsInfo}>
                    <span>Review #{(current.review_count ?? 0) + 1}</span>
                    {current.domain && current.domain !== 'custom' && (
                      <span className={styles.fsrsDomain}>{current.domain}</span>
                    )}
                  </div>

                  <div className={styles.grades}>
                    {GRADE_LABELS.map(({ grade, label, sub, className }) => (
                      <button
                        key={grade}
                        className={`${styles.gradeBtn} ${styles[className]}`}
                        onClick={() => handleGrade(grade)}
                        disabled={grading}
                      >
                        <span className={styles.gradeKey}>{grade}</span>
                        <span className={styles.gradeLabel}>{label}</span>
                        <span className={styles.gradeSub}>{sub}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
