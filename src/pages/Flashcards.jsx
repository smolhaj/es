import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import SpeakButton from '../components/SpeakButton.jsx';
import { scheduleFlashcard, formatInterval } from '../../functions/_lib/flashcardScheduler.js';
import { detectCognate } from '../lib/cognates.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Flashcards.module.css';

const SESSION_SIZE = 20;
// New cards are capped per calendar day, not per visit — the whole point of
// a daily introduction limit is that tomorrow's reviews stay manageable, and
// a per-visit cap just means reloading the page hands out ten more. The
// count of cards already introduced today comes from the server (see
// functions/api/flashcards/progress.js) so it survives reloads and follows
// the learner across devices.
const NEW_PER_DAY = 10;
// How many cards ahead a just-missed (still learning/relearning) card gets
// re-inserted, so it reappears within the same sitting instead of only on
// a future visit -- matching Anki's same-session requeue behavior.
const REQUEUE_GAP = 3;

const GRADES = [
  { grade: 1, label: 'Again', key: '1', className: 'again' },
  { grade: 2, label: 'Hard', key: '2', className: 'hard' },
  { grade: 3, label: 'Good', key: '3', className: 'good' },
  { grade: 4, label: 'Easy', key: '4', className: 'easy' },
];

function buildQueue(allCards, progress, newToday) {
  const now = Date.now();
  const due = [];
  const fresh = [];
  for (const card of allCards) {
    const p = progress[card.id];
    if (!p) { fresh.push(card); continue; }
    if (p.suspended) continue;
    if (p.dueAt && new Date(p.dueAt).getTime() <= now) due.push({ card, dueAt: p.dueAt });
  }
  due.sort((a, b) => new Date(a.dueAt) - new Date(b.dueAt));
  const queue = due.slice(0, SESSION_SIZE).map(d => d.card);
  const remaining = SESSION_SIZE - queue.length;
  const newAllowance = Math.max(0, NEW_PER_DAY - newToday);
  if (remaining > 0) queue.push(...fresh.slice(0, Math.min(remaining, newAllowance)));
  return queue;
}

// Shape a /flashcards/progress entry into what scheduleFlashcard expects.
function toSchedulerItem(p) {
  if (!p) return null;
  return {
    state: p.state, step: p.step, stability: p.stability, difficulty: p.difficulty,
    lapses: p.lapses, review_count: p.reviewCount, correct_count: p.correctCount,
    last_reviewed_at: p.lastReviewedAt,
  };
}

export default function Flashcards() {
  useDocumentTitle('Flashcards');
  const { token } = useAuth();
  const [phase, setPhase] = useState('loading'); // loading | session | empty | complete
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [grading, setGrading] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [deckSize, setDeckSize] = useState(0);
  const [saveFailed, setSaveFailed] = useState(false);
  const [progressLoadFailed, setProgressLoadFailed] = useState(false);
  const [progress, setProgress] = useState({});
  const [undoState, setUndoState] = useState(null);
  const [suspending, setSuspending] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [{ default: allCards }, progressResult] = await Promise.all([
        import('../content/flashcards/frequency-5000.js'),
        api.flashcards.progress(token).catch(() => null),
      ]);
      if (cancelled) return;
      if (!progressResult) setProgressLoadFailed(true);
      setDeckSize(allCards.length);
      const p = progressResult?.progress ?? {};
      setProgress(p);
      const built = buildQueue(allCards, p, progressResult?.newToday ?? 0);
      setQueue(built);
      setPhase(built.length === 0 ? 'empty' : 'session');
    })();
    return () => { cancelled = true; };
  }, [token]);

  const current = queue[index];
  const cognatePattern = useMemo(
    () => current ? detectCognate(current.es, current.en) : null,
    [current]
  );

  const handleFlip = useCallback(() => setFlipped(true), []);

  const intervalPreviews = useMemo(() => {
    if (!current || !flipped) return null;
    const item = toSchedulerItem(progress[current.id]);
    const out = {};
    for (const g of GRADES) {
      try { out[g.grade] = formatInterval(scheduleFlashcard(item, g.grade).due_at); }
      catch { out[g.grade] = ''; }
    }
    return out;
  }, [current, flipped, progress]);

  const handleGrade = useCallback(async (grade) => {
    if (!current || grading) return;
    setGrading(true);

    const preGrade = {
      queue: [...queue], index, reviewedCount,
      cardId: current.id, progressEntry: progress[current.id],
    };

    let result = null;
    try {
      result = await api.flashcards.review(token, current.id, grade);
    } catch {
      // Scheduling is best-effort so a network blip doesn't block the
      // session -- but silently swallowing every failure meant a run of
      // failed saves looked identical to a successful session (queue still
      // advances locally), so the *next* session would serve the exact same
      // cards again with zero signal anything was wrong. Surface it instead.
      setSaveFailed(true);
    }

    let nextQueue = queue;
    if (result) {
      setProgress(prev => ({
        ...prev,
        [current.id]: {
          ...prev[current.id],
          stability: result.stability, difficulty: result.difficulty, dueAt: result.dueAt,
          reviewCount: result.reviewCount, state: result.state, step: result.step,
          lapses: result.lapses, isLeech: result.isLeech, suspended: false,
        },
      }));
      // Still mid-steps (not yet graduated to full FSRS review scheduling)?
      // Requeue it a few cards ahead so it reappears this session.
      if (result.state === 'learning' || result.state === 'relearning') {
        nextQueue = [...queue];
        const insertAt = Math.min(nextQueue.length, index + 1 + REQUEUE_GAP);
        nextQueue.splice(insertAt, 0, current);
        setQueue(nextQueue);
      }
      setUndoState(preGrade);
    }

    setGrading(false);
    setReviewedCount(c => c + 1);
    const next = index + 1;
    if (next >= nextQueue.length) {
      setPhase('complete');
    } else {
      setIndex(next);
      setFlipped(false);
    }
  }, [current, grading, index, queue, reviewedCount, progress, token]);

  const handleUndo = useCallback(async () => {
    if (!undoState) return;
    try { await api.flashcards.undo(token, undoState.cardId); } catch { /* best-effort */ }
    setQueue(undoState.queue);
    setIndex(undoState.index);
    setReviewedCount(undoState.reviewedCount);
    setProgress(prev => {
      const next = { ...prev };
      if (undoState.progressEntry) next[undoState.cardId] = undoState.progressEntry;
      else delete next[undoState.cardId];
      return next;
    });
    setFlipped(true);
    setPhase('session');
    setUndoState(null);
  }, [undoState, token]);

  const handleSuspend = useCallback(async () => {
    if (!current || suspending) return;
    setSuspending(true);
    try { await api.flashcards.suspend(token, current.id, true); } catch { /* best-effort */ }
    setProgress(prev => ({ ...prev, [current.id]: { ...prev[current.id], suspended: true } }));
    setSuspending(false);
    // Remove every occurrence of this card (including any same-session
    // requeue copy) — removing the one at `index` shifts the next card
    // into that same slot, so `index` itself doesn't need to advance.
    const remaining = queue.filter(c => c.id !== current.id);
    setQueue(remaining);
    if (index >= remaining.length) {
      setPhase('complete');
    } else {
      setFlipped(false);
    }
  }, [current, suspending, queue, index, token]);

  // Keyboard shortcuts: Space/Enter to flip, 1-4 to grade once flipped.
  useEffect(() => {
    function onKeyDown(e) {
      if (phase !== 'session' || !current || grading) return;
      if (!flipped) {
        if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); handleFlip(); }
        return;
      }
      const g = GRADES.find(g => g.key === e.key);
      if (g) { e.preventDefault(); handleGrade(g.grade); }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase, current, flipped, grading, handleFlip, handleGrade]);

  const progressPct = useMemo(
    () => queue.length ? Math.round((index / queue.length) * 100) : 0,
    [index, queue.length]
  );

  const currentIsLeech = current && progress[current.id]?.isLeech;

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
              <div className={styles.completeActions}>
                <Link to="/dashboard" className="btn btn-primary">← Dashboard</Link>
                <Link to="/flashcards/stats" className="btn btn-secondary">Deck stats →</Link>
              </div>
            </div>
          )}

          {phase === 'session' && current && (
            <>
              <header className={styles.header}>
                <h1 className={styles.title}>Flashcards</h1>
                <span className={styles.deckNote}>{deckSize.toLocaleString()}-word deck</span>
              </header>

              {progressLoadFailed && (
                <p className={styles.saveWarning}>
                  Couldn't load your saved progress — this session may show cards you've already learned.
                </p>
              )}
              {saveFailed && (
                <p className={styles.saveWarning}>
                  Some reviews didn't save — check your connection. Progress for those cards may not be recorded.
                </p>
              )}

              <div className={styles.progressWrap}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
                </div>
                <span className={styles.progressText}>{index + 1}/{queue.length}</span>
              </div>

              {currentIsLeech && (
                <span className={styles.leechBadge} title={`Failed repeatedly (${progress[current.id].lapses} lapses)`}>
                  ⚑ Stuck word
                </span>
              )}

              <div className={styles.card} onClick={!flipped ? handleFlip : undefined}>
                <div className={styles.cardFront}>
                  <div className={styles.posRow}>
                    <span className={styles.pos}>{current.pos}</span>
                    {cognatePattern && (
                      <span className={styles.cognateBadge} title={`Cognate pattern: ${cognatePattern}`}>
                        🔗 cognate
                      </span>
                    )}
                  </div>
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
                <>
                  <button className={`btn btn-primary ${styles.showBtn}`} onClick={handleFlip}>
                    Show answer
                  </button>
                  <p className={styles.kbdHint}>Space to flip</p>
                </>
              ) : (
                <>
                  <div className={styles.gradeRow}>
                    {GRADES.map(g => (
                      <button
                        key={g.grade}
                        className={`${styles.gradeBtn} ${styles[g.className]}`}
                        onClick={() => handleGrade(g.grade)}
                        disabled={grading}
                      >
                        <span>{g.label}</span>
                        {intervalPreviews && <span className={styles.gradeInterval}>{intervalPreviews[g.grade]}</span>}
                      </button>
                    ))}
                  </div>
                  <p className={styles.kbdHint}>1-4 to grade</p>
                </>
              )}

              <div className={styles.utilityRow}>
                <button className={styles.suspendLink} onClick={handleSuspend} disabled={suspending}>
                  I already know this — stop showing it
                </button>
                {undoState && (
                  <button className={styles.undoLink} onClick={handleUndo}>
                    ↺ Undo last review
                  </button>
                )}
              </div>
            </>
          )}

          {phase === 'complete' && (
            <div className={styles.complete}>
              <h1 className={styles.title}>Session complete.</h1>
              <p className={styles.summary}>{reviewedCount} cards reviewed.</p>
              {saveFailed && (
                <p className={styles.saveWarning}>
                  Some reviews didn't save — those cards may show up again next session.
                </p>
              )}
              {undoState && (
                <button className={styles.undoLink} onClick={handleUndo}>
                  ↺ Undo last review
                </button>
              )}
              <div className={styles.completeActions}>
                <Link to="/dashboard" className="btn btn-primary">← Dashboard</Link>
                <Link to="/flashcards/stats" className="btn btn-secondary">Deck stats →</Link>
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
