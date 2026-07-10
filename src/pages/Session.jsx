import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import ConversationCard from '../components/ConversationCard.jsx';
import Feedback from '../components/Feedback.jsx';
import styles from './Session.module.css';
import { CONCEPT_LABELS } from '../content/conceptLabels.js';


const SESSION_LENGTH = 10;

// phase: 'starting' | 'exercise' | 'conversation' | 'checking' | 'reveal' | 'feedback' | 'ending' | 'summary' | 'error'
// 'conversation' is the in-progress multi-turn role-play phase (chat bubbles, not ExerciseCard).
// 'reveal' is shared by writing_prompt and conversation: model answer/line shown, awaiting self-assessment.

export default function Session() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const focusConcept = searchParams.get('focus') ?? null;

  const [phase, setPhase] = useState('starting');
  const [sessionId, setSessionId] = useState(null);
  const [greeting, setGreeting] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [nextExercise, setNextExercise] = useState(null);
  const [feedback, setFeedback] = useState(null);   // { correct, text, correctAnswer, conceptNote }
  const [stats, setStats] = useState({ count: 0, correct: 0 });
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');
  const [source, setSource] = useState(null);           // 'gemini' | 'fallback' | null
  const [fallbackReason, setFallbackReason] = useState(null);
  const [writingReveal, setWritingReveal] = useState(null); // { modelAnswer, learnerAnswer } | null
  const [chatHistory, setChatHistory] = useState([]);   // conversation exercise transcript
  const [convTurn, setConvTurn] = useState(null);
  const [convSending, setConvSending] = useState(false);

  // Start session on mount, and restart whenever focusConcept changes.
  // /session and /session?focus=X are the same route, so React Router does
  // not remount this component when a "Drill ->" link only changes the
  // query string — without focusConcept in the dependency array, clicking
  // that link left the previous session's summary on screen forever.
  useEffect(() => {
    setPhase('starting');
    setSessionId(null);
    setGreeting(null);
    setExercise(null);
    setNextExercise(null);
    setFeedback(null);
    setStats({ count: 0, correct: 0 });
    setSummary(null);
    setError('');
    setSource(null);
    setFallbackReason(null);
    setWritingReveal(null);
    setChatHistory([]);
    setConvTurn(null);
    setConvSending(false);

    api.sessions.start(token, focusConcept)
      .then(({ sessionId: sid, exercise: ex, greeting: gr, source: src, fallbackReason: fr }) => {
        setSessionId(sid);
        setExercise(ex);
        setGreeting(gr);
        setSource(src ?? null);
        setFallbackReason(fr ?? null);
        if (ex.type === 'conversation') {
          setChatHistory([{ speaker: 'npc', text: ex.prompt }]);
          setConvTurn(ex.turn ?? 1);
          setPhase('conversation');
        } else {
          setPhase('exercise');
        }
      })
      .catch(err => {
        setError(err.message);
        setPhase('error');
      });
  }, [token, focusConcept]);

  const handleAnswer = useCallback(async (learnerAnswer) => {
    // conversation is a multi-turn role-play — each reply either continues
    // the exchange (another Gemini-voiced NPC line) or, on the final turn,
    // moves to the same self-assessment reveal writing_prompt uses. Phase
    // stays 'conversation' throughout so the chat thread never unmounts;
    // convSending drives the typing indicator instead.
    if (exercise.type === 'conversation') {
      setChatHistory(prev => [...prev, { speaker: 'learner', text: learnerAnswer }]);
      setConvSending(true);
      try {
        const result = await api.sessions.turn(token, sessionId, learnerAnswer);
        setSource(result.source ?? null);
        setFallbackReason(result.fallbackReason ?? null);

        if (result.phase === 'conversation') {
          setChatHistory(prev => [...prev, { speaker: 'npc', text: result.npcReply }]);
          setConvTurn(result.turn);
          setConvSending(false);
          return;
        }
        if (result.phase === 'reveal') {
          setWritingReveal({ modelAnswer: result.modelAnswer, learnerAnswer });
          setConvSending(false);
          setPhase('reveal');
          return;
        }
        // 'abandoned' — Gemini became unavailable mid-conversation; swap in
        // a normal fallback exercise rather than leaving the learner stuck.
        setChatHistory([]);
        setConvTurn(null);
        setConvSending(false);
        setExercise(result.exercise);
        setPhase('exercise');
      } catch (err) {
        setConvSending(false);
        setError(err.message);
        setPhase('error');
      }
      return;
    }

    setPhase('checking');
    try {
      // writing_prompt is open-ended — nothing to auto-grade. The first
      // call just reveals the model answer (no stats/exercise advance yet);
      // handleSelfAssess below makes the second call once the learner has
      // compared their own writing to it.
      if (exercise.type === 'writing_prompt') {
        const result = await api.sessions.turn(token, sessionId, learnerAnswer);
        setWritingReveal({ modelAnswer: result.modelAnswer, learnerAnswer });
        setPhase('reveal');
        return;
      }

      const result = await api.sessions.turn(token, sessionId, learnerAnswer);
      setFeedback({
        correct: result.correct,
        text: result.feedback,
        correctAnswer: result.correct ? null : exercise.answer,
        conceptNote: result.conceptNote ?? null,
      });
      setNextExercise(result.exercise);
      setSource(result.source ?? null);
      setFallbackReason(result.fallbackReason ?? null);

      setStats(prev => ({
        count: prev.count + 1,
        correct: prev.correct + (result.correct ? 1 : 0)
      }));

      setPhase('feedback');
    } catch (err) {
      setError(err.message);
      setPhase('error');
    }
  }, [token, sessionId, exercise]);

  const handleSelfAssess = useCallback(async (correct) => {
    setPhase('checking');
    try {
      const result = await api.sessions.turn(token, sessionId, writingReveal.learnerAnswer, correct);
      setFeedback({
        correct: result.correct,
        text: result.feedback,
        correctAnswer: null, // already compared against the model answer during reveal
        conceptNote: result.conceptNote ?? null,
      });
      setNextExercise(result.exercise);
      setSource(result.source ?? null);
      setFallbackReason(result.fallbackReason ?? null);
      setWritingReveal(null);

      setStats(prev => ({
        count: prev.count + 1,
        correct: prev.correct + (result.correct ? 1 : 0)
      }));

      setPhase('feedback');
    } catch (err) {
      setError(err.message);
      setPhase('error');
    }
  }, [token, sessionId, writingReveal]);

  const handleNext = useCallback(async () => {
    const newCount = stats.count; // already incremented

    if (newCount >= SESSION_LENGTH) {
      setPhase('ending');
      try {
        const result = await api.sessions.end(token, sessionId);
        setSummary(result);
        setPhase('summary');
      } catch (err) {
        setError(err.message);
        setPhase('error');
      }
      return;
    }

    setExercise(nextExercise);
    setNextExercise(null);
    setFeedback(null);
    if (nextExercise?.type === 'conversation') {
      setChatHistory([{ speaker: 'npc', text: nextExercise.prompt }]);
      setConvTurn(nextExercise.turn ?? 1);
      setPhase('conversation');
    } else {
      setChatHistory([]);
      setConvTurn(null);
      setPhase('exercise');
    }
  }, [stats.count, nextExercise, token, sessionId]);

  async function handleEndEarly() {
    if (!sessionId) { navigate('/dashboard'); return; }
    try {
      await api.sessions.end(token, sessionId, true);
    } catch {}
    navigate('/dashboard');
  }

  // Best-effort close-out for a session the learner leaves without clicking
  // "End session" or finishing it — a closed tab, a refresh, or clicking
  // away to another page in the app. Without this, that session's ended_at
  // stays NULL forever even though turn.js already wrote real
  // concept_mastery/error_events data for it, which starves every future
  // session of both its LAST SESSION SIGNALS and (via start.js's history
  // check) its "personalized, not brand-new" framing. See ES.md punch
  // list, BUG-2. `pagehide`/`beforeunload` cover the tab-close/refresh
  // case; the effect cleanup covers in-app navigation to another route,
  // which never fires either browser event. `fetch(..., {keepalive:true})`
  // (not the api.js helper, which awaits a JSON response we'll never read)
  // is the standard way to let a request outlive the page.
  const stateRef = useRef({ sessionId: null, active: false });
  useEffect(() => {
    stateRef.current = {
      sessionId,
      active: sessionId != null && !['starting', 'summary', 'ending'].includes(phase),
    };
  }, [sessionId, phase]);

  useEffect(() => {
    function endOnLeave() {
      const { sessionId: sid, active } = stateRef.current;
      if (!active || !sid || !token) return;
      stateRef.current = { sessionId: sid, active: false };
      fetch('/api/sessions/end', {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ sessionId: sid, abandoned: true })
      }).catch(() => {});
    }
    window.addEventListener('pagehide', endOnLeave);
    window.addEventListener('beforeunload', endOnLeave);
    return () => {
      window.removeEventListener('pagehide', endOnLeave);
      window.removeEventListener('beforeunload', endOnLeave);
      endOnLeave();
    };
  }, [token]);

  const progress = stats.count / SESSION_LENGTH;

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>

          {/* Progress bar */}
          {(phase === 'exercise' || phase === 'conversation' || phase === 'checking' || phase === 'reveal' || phase === 'feedback') && (
            <div className={styles.progressWrap} aria-label={`Exercise ${stats.count + 1} of ${SESSION_LENGTH}`}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <span className={styles.progressText}>
                {stats.count}/{SESSION_LENGTH}
              </span>
              {source && (
                <span
                  className={styles.geminiStatus}
                  title={source === 'gemini'
                    ? 'Live Gemini session — exercises are generated and graded by the model.'
                    : `Gemini unavailable — using local fallback exercises.${fallbackReason ? ` (${fallbackReason})` : ''}`}
                >
                  <span
                    className={`${styles.geminiDot} ${source === 'gemini' ? styles.geminiDotOn : styles.geminiDotOff}`}
                    aria-hidden="true"
                  />
                  {source === 'gemini' ? 'Gemini' : 'Offline'}
                </span>
              )}
            </div>
          )}

          {/* Focus mode banner */}
          {focusConcept && (phase === 'exercise' || phase === 'conversation' || phase === 'checking' || phase === 'reveal' || phase === 'feedback') && (
            <p className={styles.focusBanner}>
              Drilling: <strong>{CONCEPT_LABELS[focusConcept] ?? focusConcept}</strong>
            </p>
          )}

          {/* Greeting */}
          {greeting && (phase === 'exercise' || phase === 'conversation') && stats.count === 0 && !focusConcept && (
            <p className={styles.greeting}>{greeting}</p>
          )}

          {/* Starting */}
          {phase === 'starting' && (
            <div className={styles.center}>
              <div className={styles.spinner} aria-label="Starting session…" />
              <p className={styles.hint}>Starting your session…</p>
            </div>
          )}

          {/* Exercise + Feedback */}
          {(phase === 'exercise' || phase === 'conversation' || phase === 'checking' || phase === 'reveal' || phase === 'feedback') && exercise && (
            <div className={styles.exerciseArea}>
              {exercise.type === 'conversation' ? (
                <ConversationCard
                  scenario={exercise.scenario}
                  history={chatHistory}
                  turn={convTurn}
                  maxTurns={exercise.maxTurns}
                  onSend={handleAnswer}
                  disabled={phase !== 'conversation' || convSending}
                  sending={convSending}
                />
              ) : (
                <ExerciseCard
                  exercise={exercise}
                  onSubmit={handleAnswer}
                  disabled={phase !== 'exercise'}
                />
              )}

              {phase === 'reveal' && writingReveal && (
                <div className={styles.writingReveal}>
                  <p className={styles.writingRevealLabel}>
                    {exercise.type === 'conversation' ? 'One way to reply:' : 'One way to write this:'}
                  </p>
                  <p className={styles.writingRevealText}>{writingReveal.modelAnswer}</p>
                  <p className={styles.writingRevealHint}>
                    {exercise.type === 'conversation'
                      ? "Compare it to what you said — there's no single correct answer here."
                      : "Compare it to what you wrote — there's no single correct answer here."}
                  </p>
                  <div className={styles.writingRevealActions}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleSelfAssess(false)}
                    >
                      Needs work
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleSelfAssess(true)}
                      autoFocus
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}

              {(phase === 'checking' || phase === 'feedback') && (
                <Feedback
                  correct={feedback?.correct}
                  text={feedback?.text}
                  correctAnswer={feedback?.correctAnswer}
                  conceptNote={feedback?.conceptNote}
                  onNext={handleNext}
                  loading={phase === 'checking'}
                />
              )}
            </div>
          )}

          {/* Ending */}
          {phase === 'ending' && (
            <div className={styles.center}>
              <div className={styles.spinner} aria-label="Saving session…" />
              <p className={styles.hint}>Saving your results…</p>
            </div>
          )}

          {/* Summary */}
          {phase === 'summary' && summary && (
            <div className={styles.summary}>
              <h1 className={styles.summaryTitle}>Session complete.</h1>

              {summary.cefrChanged && (
                <div className={styles.levelUp}>
                  <span className={styles.levelUpIcon}>↑</span>
                  <span>
                    You advanced from <strong>{summary.cefrChanged.from}</strong> to{' '}
                    <strong>{summary.cefrChanged.to}</strong>
                  </span>
                </div>
              )}

              <div className={styles.summaryStats}>
                <div className={styles.summaryStat}>
                  <span className={styles.summaryValue}>
                    {Math.round((summary.accuracy ?? 0) * 100)}%
                  </span>
                  <span className={styles.summaryLabel}>Accuracy</span>
                </div>
                <div className={styles.summaryStat}>
                  <span className={styles.summaryValue}>{summary.itemsReviewed}</span>
                  <span className={styles.summaryLabel}>Exercises</span>
                </div>
                <div className={styles.summaryStat}>
                  <span className={styles.summaryValue}>{summary.correctCount}</span>
                  <span className={styles.summaryLabel}>Correct</span>
                </div>
              </div>

              {summary.errors?.length > 0 && (
                <div className={styles.weakSpots}>
                  <h2 className={styles.weakTitle}>Errors this session</h2>
                  <ul className={styles.weakList}>
                    {summary.errors.map((e, i) => (
                      <li key={i} className={styles.weakItem}>
                        <span className={styles.weakType}>
                          {e.concept_id
                            ? (CONCEPT_LABELS[e.concept_id] ?? e.concept_id)
                            : formatType(e.exercise_type)}
                        </span>
                        <span className={styles.weakRight}>
                          <span className={styles.weakCount}>{e.count}×</span>
                          {e.concept_id && (
                            <Link to={`/session?focus=${e.concept_id}`} className={styles.drillLink}>
                              Drill →
                            </Link>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {summary.wordsReviewed?.length > 0 && (
                <div className={styles.weakSpots}>
                  <h2 className={styles.weakTitle}>Words practiced</h2>
                  <div className={styles.wordChips}>
                    {summary.wordsReviewed.map(w => (
                      <span key={w.word} className={styles.wordChip} title={w.translation}>
                        {w.word}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.summaryActions}>
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Another session
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate('/dashboard')}
                >
                  Back to dashboard
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {phase === 'error' && (
            <div className={styles.errorState}>
              <h2 className={styles.errorTitle}>Something went wrong.</h2>
              <p className={styles.errorMsg}>{error}</p>
              <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
                Back to dashboard
              </button>
            </div>
          )}

          {/* End early button */}
          {(phase === 'exercise' || phase === 'conversation' || phase === 'reveal' || phase === 'feedback') && (
            <button
              className={`btn btn-ghost ${styles.endBtn}`}
              onClick={handleEndEarly}
            >
              End session
            </button>
          )}

        </div>
      </main>
    </div>
  );
}

function formatType(type) {
  switch (type) {
    case 'multiple_choice':        return 'Multiple choice';
    case 'fill_blank':             return 'Fill in the blank';
    case 'translation_to_spanish': return 'Translation (→ ES)';
    case 'translation_to_english': return 'Translation (→ EN)';
    case 'error_correction':       return 'Error correction';
    case 'register_identify':      return 'Identify the register';
    default: return type;
  }
}
