import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import SpeakButton from '../components/SpeakButton.jsx';
import ClickableSpanish from '../components/ClickableSpanish.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import Feedback from '../components/Feedback.jsx';
import { getUnitMeta, loadUnit } from '../content/curriculum/index.js';
import { buildCheckpointPractice } from '../lib/checkpoints.js';
import { isAnswerCorrect } from '../lib/answerMatching.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Lesson.module.css';

// phase: 'reading' | 'practice' | 'checking' | 'reveal' | 'feedback' | 'complete'
// 'reveal' is writing_prompt-only: the unit's pre-written model answer is
// shown and the learner self-assesses against it — entirely client-side
// (no backend call), since a curriculum lesson's practice item already
// carries its own model answer statically. Mirrors Session.jsx's
// writingReveal pattern from the adaptive session, without the Gemini
// round-trip that pattern needs there.

// Checkpoint units have no static content — this builds their {sections,
// vocab, practice} at lesson-load time instead, so it reflects the
// learner's CURRENT weak spots every time they open it (checkpoints are
// redoable, deliberately not frozen at first-completion state).
async function buildCheckpointContent(unit, weakConcepts) {
  return {
    sections: [{
      heading: 'Review Checkpoint',
      paragraphs: [
        `This checkpoint reviews ${unit.coversUnits} — weighted toward the concepts you've found trickiest so far. No new grammar here, just practice.`,
      ],
      examples: [],
      commonMistakes: [],
    }],
    vocab: [],
    practice: await buildCheckpointPractice(unit.checkpointUpTo, weakConcepts),
  };
}

export default function Lesson() {
  const { unitId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  // Metadata is synchronous; the unit's written content is a separate chunk
  // fetched on demand (see curriculum/index.js), so the page can render its
  // title and "not found" state without waiting on the download.
  const meta = useMemo(() => getUnitMeta(unitId), [unitId]);
  const [baseUnit, setBaseUnit] = useState(null);
  const [loadError, setLoadError] = useState(false);

  const [checkpointContent, setCheckpointContent] = useState(null);
  const [phase, setPhase] = useState('reading');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [marking, setMarking] = useState(false);
  const [writingReveal, setWritingReveal] = useState(null); // { modelAnswer, learnerAnswer } | null

  useEffect(() => {
    let cancelled = false;
    setBaseUnit(null);
    setLoadError(false);
    if (!meta) return;
    loadUnit(meta.id)
      .then(u => { if (!cancelled) setBaseUnit(u); })
      .catch(() => { if (!cancelled) setLoadError(true); });
    return () => { cancelled = true; };
  }, [meta]);

  // Checkpoints: fetch the learner's current weak spots and assemble a
  // fresh, personalized practice set every time this lesson mounts.
  useEffect(() => {
    setCheckpointContent(null);
    if (!baseUnit?.isCheckpoint || !token) return;
    let cancelled = false;
    const weakSpots = api.learner.profile(token)
      .then(res => res.weakConcepts ?? [])
      .catch(() => []); // no profile signal yet — even sampling still works
    weakSpots
      .then(weak => buildCheckpointContent(baseUnit, weak))
      .then(content => { if (!cancelled) setCheckpointContent(content); })
      .catch(() => { if (!cancelled) setLoadError(true); });
    return () => { cancelled = true; };
  }, [baseUnit, token]);

  const unit = baseUnit?.isCheckpoint
    ? (checkpointContent ? { ...baseUnit, ...checkpointContent } : null)
    : baseUnit;

  useDocumentTitle(meta?.title ?? 'Lesson');

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
    setWritingReveal(null);
    setPhase('practice');
  }, []);

  const handleAnswer = useCallback((learnerAnswer) => {
    const exercise = unit.practice[exerciseIndex];
    // writing_prompt is open-ended — nothing to string-match. Reveal the
    // unit's model answer and let the learner self-assess against it,
    // the same reason the adaptive session never exact-grades free text.
    if (exercise.type === 'writing_prompt') {
      setWritingReveal({ modelAnswer: exercise.answer, learnerAnswer });
      setPhase('reveal');
      return;
    }
    setPhase('checking');
    const correct = isAnswerCorrect(exercise, learnerAnswer);
    if (correct) setCorrectCount(c => c + 1);
    setFeedback({ correct, correctAnswer: correct ? null : exercise.answer });
    setPhase('feedback');
  }, [unit, exerciseIndex]);

  const handleSelfAssess = useCallback((correct) => {
    if (correct) setCorrectCount(c => c + 1);
    setFeedback({ correct, correctAnswer: null });
    setWritingReveal(null);
    setPhase('feedback');
  }, []);

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
    setWritingReveal(null);
    setPhase('practice');
  }, [exerciseIndex, unit, token]);

  if (!meta) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <div className={styles.inner}>
            <p>Lesson not found.</p>
            <Link to="/learn" className="btn btn-secondary">← Back to Learn</Link>
          </div>
        </main>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <div className={styles.inner}>
            <h1 className={styles.title}>{meta.title}</h1>
            <p className={styles.summary}>This lesson didn't load. Check your connection and try again.</p>
            <div className={styles.errorActions}>
              <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
                Try again
              </button>
              <Link to="/learn" className="btn btn-secondary">← Back to Learn</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!baseUnit) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <div className={styles.inner}>
            <h1 className={styles.title}>{meta.title}</h1>
            <p className={styles.summary}>Loading the lesson…</p>
          </div>
        </main>
      </div>
    );
  }

  if (baseUnit.isCheckpoint && !unit) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <div className={styles.inner}>
            <h1 className={styles.title}>{baseUnit.title}</h1>
            <p className={styles.summary}>Building your personalized review…</p>
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
            <Link to="/learn" className="btn btn-secondary">← Back to Learn</Link>
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
          <Link to="/learn" className={styles.backLink}>← Learn</Link>

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
                    <p key={j} className={styles.paragraph}><ClickableSpanish text={p} minWords={2} /></p>
                  ))}
                  {section.examples?.length > 0 && (
                    <ul className={styles.examples}>
                      {section.examples.map((ex, k) => (
                        <li key={k} className={styles.example}>
                          <SpeakButton text={ex.es} />
                          <div>
                            <span className={styles.exampleEs}><ClickableSpanish text={ex.es} /></span>
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
                          <p className={styles.vocabExample}><ClickableSpanish text={v.example} /> <em>— {v.exampleEn}</em></p>
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

          {(phase === 'practice' || phase === 'checking' || phase === 'reveal' || phase === 'feedback') && (
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
                disabled={phase !== 'practice'}
              />

              {phase === 'reveal' && writingReveal && (
                <div className={styles.writingReveal}>
                  <p className={styles.writingRevealLabel}>One way to write this:</p>
                  <p className={styles.writingRevealText}>{writingReveal.modelAnswer}</p>
                  <p className={styles.writingRevealHint}>
                    Compare it to what you wrote — there's no single correct answer here.
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
                <Link to="/learn" className="btn btn-primary">More lessons →</Link>
                <Link to="/session" className="btn btn-secondary">Adaptive practice →</Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
