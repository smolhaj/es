import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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
  obligation_infinitive: 'Obligation (tener que)',
  time_expressions: 'Time expressions', present_progressive: 'Present progressive',
  irregular_present: 'Irregular present', negation: 'Negation', prepositions_basic: 'Basic prepositions', near_future: 'Near future (ir a)', adverbs_formation: 'Adverbs (-mente)',
  acabar_de: 'Recent past (acabar de)',
  llevar_gerund: 'Duration (llevar + gerund)', preterite_irregular: 'Preterite (irregular)',
  imperfect: 'Imperfect', preterite_vs_imperfect: 'Pret. vs. imperfect',
  future_simple: 'Simple future', conditional: 'Conditional', present_subjunctive: 'Subjunctive',
  imperative: 'Imperative', por_vs_para: 'Por vs. para', relative_clauses: 'Relative clauses',
  object_pronoun_order: 'Double object pronouns', se_impersonal: 'Impersonal se',
  infinitive_vs_subjunctive: 'Inf. vs. subjunctive', exclamativas: 'Exclamatory sentences',
  present_perfect: 'Present perfect', pluperfect: 'Pluperfect', future_perfect: 'Future perfect',
  conditional_perfect: 'Conditional perfect', passive_voice: 'Passive voice', passive_se: 'Passive se',
  imperfect_subjunctive: 'Imperfect subjunctive', si_clauses: 'Si-clauses',
  subjunctive_adverbial: 'Subjunctive (adverbial)', comparatives: 'Comparatives',
  ser_estar_participle: 'Ser/estar + participio', diminutives_augmentatives: 'Diminutives',
  relative_pronouns_advanced: 'Relative pronouns (adv.)', adjectives_ser_estar: 'Ser/estar adj. meanings',
  subjunctive_noun_clauses: 'Subjunctive (noun clauses)', subjunctive_adjective_clauses: 'Subjunctive (adj. clauses)',
  gerund_advanced: 'Gerund (advanced)', ser_passive: 'Ser passive', estilo_indirecto: 'Indirect speech',
  nominalisation: 'Nominalisation', subjunctive_temporal: 'Subjunctive (temporal)',
  cuantificadores: 'Quantifiers',
  futuro_probabilidad: 'Future probability', condicional_probabilidad: 'Conditional inference',
  perifraseis_avanzadas: 'Advanced periphrases',
};

const SESSION_LENGTH = 10;

// phase: 'starting' | 'exercise' | 'checking' | 'feedback' | 'ending' | 'summary' | 'error'

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

  // Start session on mount
  useEffect(() => {
    api.sessions.start(token, focusConcept)
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
      await api.sessions.end(token, sessionId, true);
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

          {/* Focus mode banner */}
          {focusConcept && (phase === 'exercise' || phase === 'checking' || phase === 'feedback') && (
            <p className={styles.focusBanner}>
              Drilling: <strong>{CONCEPT_LABELS[focusConcept] ?? focusConcept}</strong>
            </p>
          )}

          {/* Greeting */}
          {greeting && phase === 'exercise' && stats.count === 0 && !focusConcept && (
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
    case 'error_correction':       return 'Error correction';
    default: return type;
  }
}
