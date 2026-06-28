import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import Feedback from '../components/Feedback.jsx';
import styles from './Session.module.css';

const CONCEPT_LABELS = {
  greeting_basics: 'Greetings', numbers_1_20: 'Numbers 1–20', subject_pronouns: 'Subject pronouns',
  noun_gender: 'Noun gender', definite_articles: 'Articles (el/la)', indefinite_articles: 'Articles (un/una)',
  ser_basics: 'Ser', estar_basics: 'Estar', present_ar: 'Present -ar', present_er_ir: 'Present -er/-ir',
  adjective_agreement: 'Adjective agreement', question_words: 'Question words', hay: 'Hay',
  numbers_21_100: 'Numbers 21–100', ser_vs_estar: 'Ser vs. estar', reflexive_verbs: 'Reflexive verbs',
  gustar_type: 'Gustar-type', direct_object_pronouns: 'Direct obj. pronouns',
  indirect_object_pronouns: 'Indirect obj. pronouns', demonstratives: 'Demonstratives',
  possessives: 'Possessives', preterite_regular: 'Preterite (regular)', modal_verbs: 'Modal verbs',
  time_expressions: 'Time expressions', preterite_irregular: 'Preterite (irregular)',
  imperfect: 'Imperfect', preterite_vs_imperfect: 'Pret. vs. imperfect',
  future_simple: 'Simple future', conditional: 'Conditional', present_subjunctive: 'Subjunctive',
  imperative: 'Imperative', por_vs_para: 'Por vs. para', relative_clauses: 'Relative clauses',
};

const SESSION_LENGTH = 10;

// phase: 'starting' | 'exercise' | 'checking' | 'feedback' | 'ending' | 'summary' | 'error'

export default function Session() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [phase, setPhase] = useState('starting');
  const [sessionId, setSessionId] = useState(null);
  const [greeting, setGreeting] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [nextExercise, setNextExercise] = useState(null);
  const [feedback, setFeedback] = useState(null);   // { correct, text, correctAnswer, conceptNote }
  const [stats, setStats] = useState({ count: 0, correct: 0 });
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');

  // Start session on mount
  useEffect(() => {
    api.sessions.start(token)
      .then(({ sessionId: sid, exercise: ex, greeting: gr }) => {
        setSessionId(sid);
        setExercise(ex);
        setGreeting(gr);
        setPhase('exercise');
      })
      .catch(err => {
        setError(err.message);
        setPhase('error');
      });
  }, [token]);

  const handleAnswer = useCallback(async (learnerAnswer) => {
    setPhase('checking');
    try {
      const result = await api.sessions.turn(token, sessionId, exercise, learnerAnswer);
      setFeedback({
        correct: result.correct,
        text: result.feedback,
        correctAnswer: result.correct ? null : exercise.answer,
        conceptNote: result.conceptNote ?? null,
      });
      setNextExercise(result.exercise);

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
    setPhase('exercise');
  }, [stats.count, nextExercise, token, sessionId]);

  async function handleEndEarly() {
    if (!sessionId) { navigate('/dashboard'); return; }
    try {
      await api.sessions.end(token, sessionId);
    } catch {}
    navigate('/dashboard');
  }

  const progress = stats.count / SESSION_LENGTH;

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>

          {/* Progress bar */}
          {(phase === 'exercise' || phase === 'checking' || phase === 'feedback') && (
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
            </div>
          )}

          {/* Greeting */}
          {greeting && phase === 'exercise' && stats.count === 0 && (
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
          {(phase === 'exercise' || phase === 'checking' || phase === 'feedback') && exercise && (
            <div className={styles.exerciseArea}>
              <ExerciseCard
                exercise={exercise}
                onSubmit={handleAnswer}
                disabled={phase === 'checking' || phase === 'feedback'}
              />

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
                        <span className={styles.weakCount}>{e.count}×</span>
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
          {(phase === 'exercise' || phase === 'feedback') && (
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
    default: return type;
  }
}
