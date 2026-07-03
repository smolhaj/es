import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import SpeakButton from '../components/SpeakButton.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import Feedback from '../components/Feedback.jsx';
import { getUnit } from '../content/curriculum/index.js';
import styles from './Lesson.module.css';

function normalizeAnswer(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?¡¿]+$/g, '');
}

// phase: 'reading' | 'practice' | 'checking' | 'feedback' | 'complete'

export default function Lesson() {
  const { unitId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const unit = useMemo(() => getUnit(unitId), [unitId]);

  const [phase, setPhase] = useState('reading');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [marking, setMarking] = useState(false);

  // Seed lesson vocab into the FSRS-scheduled review queue (best-effort;
  // ignore "already exists" conflicts for words the learner has already met).
  useEffect(() => {
    if (!unit || unit.comingSoon || !token) return;
    unit.vocab.forEach(v => {
      api.vocabulary.add(token, v.es, v.en, unit.id).catch(() => {});
    });
  }, [unit, token]);

  const startPractice = useCallback(() => {
    setExerciseIndex(0);
    setCorrectCount(0);
    setFeedback(null);
    setPhase('practice');
  }, []);

  const handleAnswer = useCallback((learnerAnswer) => {
    setPhase('checking');
    const exercise = unit.practice[exerciseIndex];
    const correct = normalizeAnswer(learnerAnswer) === normalizeAnswer(exercise.answer);
    if (correct) setCorrectCount(c => c + 1);
    setFeedback({ correct, correctAnswer: correct ? null : exercise.answer });
    setPhase('feedback');
  }, [unit, exerciseIndex]);

  const handleNext = useCallback(async () => {
    const nextIndex = exerciseIndex + 1;
    if (nextIndex >= unit.practice.length) {
      setMarking(true);
      try {
        await api.curriculum.markComplete(token, unit.id);
      } catch { /* progress tracking is best-effort, don't block completion UI */ }
      setMarking(false);
      setPhase('complete');
      return;
    }
    setExerciseIndex(nextIndex);
    setFeedback(null);
    setPhase('practice');
  }, [exerciseIndex, unit, token]);

  if (!unit) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <div className={styles.inner}>
            <p>Lesson not found.</p>
            <Link to="/get-started" className="btn btn-secondary">← Back to Get started</Link>
          </div>
        </main>
      </div>
    );
  }

  if (unit.comingSoon) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <div className={styles.inner}>
            <h1 className={styles.title}>{unit.title}</h1>
            <p className={styles.comingSoonText}>This lesson is being written and isn't ready yet.</p>
            <Link to="/get-started" className="btn btn-secondary">← Back to Get started</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <Link to="/get-started" className={styles.backLink}>← Get started</Link>

          {phase === 'reading' && (
            <>
              <header className={styles.header}>
                <span className={styles.levelTag}>{unit.level}</span>
                <h1 className={styles.title}>{unit.title}</h1>
                <p className={styles.summary}>{unit.summary}</p>
              </header>

              {unit.sections.map((section, i) => (
                <section key={i} className={styles.section}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className={styles.paragraph}>{p}</p>
                  ))}
                  {section.examples?.length > 0 && (
                    <ul className={styles.examples}>
                      {section.examples.map((ex, k) => (
                        <li key={k} className={styles.example}>
                          <SpeakButton text={ex.es} />
                          <div>
                            <span className={styles.exampleEs}>{ex.es}</span>
                            <span className={styles.exampleEn}>{ex.en}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.commonMistakes?.map((m, k) => (
                    <div key={k} className={styles.mistake}>
                      <span className={styles.mistakeLabel}>Common mistake</span>
                      <p className={styles.mistakeText}>{m}</p>
                    </div>
                  ))}
                </section>
              ))}

              {unit.vocab.length > 0 && (
                <section className={styles.section}>
                  <h2 className={styles.sectionHeading}>Key vocabulary</h2>
                  <ul className={styles.vocabList}>
                    {unit.vocab.map((v, i) => (
                      <li key={i} className={styles.vocabItem}>
                        <SpeakButton text={v.es} />
                        <div className={styles.vocabWords}>
                          <span className={styles.vocabEs}>{v.es}</span>
                          <span className={styles.vocabEn}>{v.en}</span>
                        </div>
                        {v.example && (
                          <p className={styles.vocabExample}>{v.example} <em>— {v.exampleEn}</em></p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <button className={`btn btn-primary ${styles.startBtn}`} onClick={startPractice}>
                Practice this lesson →
              </button>
            </>
          )}

          {(phase === 'practice' || phase === 'checking' || phase === 'feedback') && (
            <div className={styles.practiceArea}>
              <div className={styles.progressWrap}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${(exerciseIndex / unit.practice.length) * 100}%` }}
                  />
                </div>
                <span className={styles.progressText}>{exerciseIndex + 1}/{unit.practice.length}</span>
              </div>

              <ExerciseCard
                exercise={unit.practice[exerciseIndex]}
                onSubmit={handleAnswer}
                disabled={phase === 'checking' || phase === 'feedback'}
              />

              {(phase === 'checking' || phase === 'feedback') && (
                <Feedback
                  correct={feedback?.correct}
                  correctAnswer={feedback?.correctAnswer}
                  onNext={handleNext}
                  loading={phase === 'checking' || marking}
                />
              )}
            </div>
          )}

          {phase === 'complete' && (
            <div className={styles.complete}>
              <h1 className={styles.title}>Lesson complete.</h1>
              <p className={styles.summary}>
                {correctCount} of {unit.practice.length} correct on the first try.
              </p>
              <div className={styles.completeActions}>
                <Link to="/get-started" className="btn btn-primary">More lessons →</Link>
                <Link to="/session" className="btn btn-secondary">Adaptive practice →</Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
