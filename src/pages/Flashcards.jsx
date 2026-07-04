import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import SpeakButton from '../components/SpeakButton.jsx';
import styles from './Flashcards.module.css';

const SESSION_SIZE = 20;
const NEW_PER_SESSION = 10;

const GRADES = [
  { grade: 1, label: 'Again', className: 'again' },
  { grade: 2, label: 'Hard', className: 'hard' },
  { grade: 3, label: 'Good', className: 'good' },
  { grade: 4, label: 'Easy', className: 'easy' },
];

function buildQueue(allCards, progress) {
  const now = Date.now();
  const due = [];
  const fresh = [];
  for (const card of allCards) {
    const p = progress[card.id];
    if (!p) { fresh.push(card); continue; }
    if (p.dueAt && new Date(p.dueAt).getTime() <= now) due.push({ card, dueAt: p.dueAt });
  }
  due.sort((a, b) => new Date(a.dueAt) - new Date(b.dueAt));
  const queue = due.slice(0, SESSION_SIZE).map(d => d.card);
  const remaining = SESSION_SIZE - queue.length;
  if (remaining > 0) queue.push(...fresh.slice(0, Math.min(remaining, NEW_PER_SESSION)));
  return queue;
}

export default function Flashcards() {
  const { token } = useAuth();
  const [phase, setPhase] = useState('loading'); // loading | session | empty | complete
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [grading, setGrading] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [deckSize, setDeckSize] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [{ default: allCards }, { progress }] = await Promise.all([
        import('../content/flashcards/frequency-5000.js'),
        api.flashcards.progress(token).catch(() => ({ progress: {} })),
      ]);
      if (cancelled) return;
      setDeckSize(allCards.length);
      const built = buildQueue(allCards, progress);
      setQueue(built);
      setPhase(built.length === 0 ? 'empty' : 'session');
    })();
    return () => { cancelled = true; };
  }, [token]);

  const current = queue[index];

  const handleFlip = useCallback(() => setFlipped(true), []);

  const handleGrade = useCallback(async (grade) => {
    if (!current || grading) return;
    setGrading(true);
    try {
      await api.flashcards.review(token, current.id, grade);
    } catch { /* review scheduling is best-effort; don't block the session on a network blip */ }
    setGrading(false);
    setReviewedCount(c => c + 1);
    const next = index + 1;
    if (next >= queue.length) {
      setPhase('complete');
    } else {
      setIndex(next);
      setFlipped(false);
    }
  }, [current, grading, index, queue.length, token]);

  const progressPct = useMemo(
    () => queue.length ? Math.round((index / queue.length) * 100) : 0,
    [index, queue.length]
  );

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>

          {phase === 'loading' && <p className={styles.loading}>Loading your deck…</p>}

          {phase === 'empty' && (
            <div className={styles.empty}>
              <h1 className={styles.title}>All caught up.</h1>
              <p className={styles.emptyText}>
                No cards are due right now, and you've already introduced today's new
                cards. Come back later — spaced repetition works best with a little patience.
              </p>
              <Link to="/dashboard" className="btn btn-primary">← Dashboard</Link>
            </div>
          )}

          {phase === 'session' && current && (
            <>
              <header className={styles.header}>
                <h1 className={styles.title}>Flashcards</h1>
                <span className={styles.deckNote}>{deckSize.toLocaleString()}-word deck</span>
              </header>

              <div className={styles.progressWrap}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
                </div>
                <span className={styles.progressText}>{index + 1}/{queue.length}</span>
              </div>

              <div className={styles.card} onClick={!flipped ? handleFlip : undefined}>
                <div className={styles.cardFront}>
                  <span className={styles.pos}>{current.pos}</span>
                  <div className={styles.wordRow}>
                    <SpeakButton text={current.es} />
                    <span className={styles.word}>{current.es}</span>
                  </div>
                </div>

                {flipped && (
                  <div className={styles.cardBack}>
                    <p className={styles.translation}>{current.en}</p>
                    {current.example && (
                      <div className={styles.example}>
                        <SpeakButton text={current.example} />
                        <div>
                          <p className={styles.exampleEs}>{current.example}</p>
                          <p className={styles.exampleEn}>{current.exampleEn}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!flipped ? (
                <button className={`btn btn-primary ${styles.showBtn}`} onClick={handleFlip}>
                  Show answer
                </button>
              ) : (
                <div className={styles.gradeRow}>
                  {GRADES.map(g => (
                    <button
                      key={g.grade}
                      className={`${styles.gradeBtn} ${styles[g.className]}`}
                      onClick={() => handleGrade(g.grade)}
                      disabled={grading}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {phase === 'complete' && (
            <div className={styles.complete}>
              <h1 className={styles.title}>Session complete.</h1>
              <p className={styles.summary}>{reviewedCount} cards reviewed.</p>
              <div className={styles.completeActions}>
                <Link to="/dashboard" className="btn btn-primary">← Dashboard</Link>
                <button className="btn btn-secondary" onClick={() => window.location.reload()}>
                  Study more →
                </button>
              </div>
            </div>
          )}

          <p className={styles.attribution}>
            Word frequency data and translations derived from{' '}
            <a href="https://github.com/hermitdave/FrequencyWords" target="_blank" rel="noreferrer">OpenSubtitles frequency lists</a>
            {' '}and Wiktionary (CC BY-SA). Example sentences from{' '}
            <a href="https://tatoeba.org" target="_blank" rel="noreferrer">Tatoeba.org</a> (CC BY 2.0 FR).
          </p>
        </div>
      </main>
    </div>
  );
}
