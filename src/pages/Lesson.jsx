import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import SpeakButton from '../components/SpeakButton.jsx';
import ClickableSpanish from '../components/ClickableSpanish.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import Feedback from '../components/Feedback.jsx';
import { getUnit } from '../content/curriculum/index.js';
import { buildCheckpointPractice } from '../lib/checkpoints.js';
import styles from './Lesson.module.css';

// English contractions and their expansions — a learner shouldn't be marked
// wrong for writing "I'm" when the stored answer spells out "I am" or vice
// versa, so both sides are canonicalized to the expanded form before matching.
const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are',
  "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not',
  "can't": 'cannot', "won't": 'will not', "wouldn't": 'would not',
  "shouldn't": 'should not', "couldn't": 'could not', "mustn't": 'must not',
  "hasn't": 'has not', "haven't": 'have not', "hadn't": 'had not',
  "it's": 'it is', "that's": 'that is', "there's": 'there is',
  "what's": 'what is', "who's": 'who is', "let's": 'let us',
  "i'd": 'i would', "you'd": 'you would', "he'd": 'he would', "she'd": 'she would',
  "we'd": 'we would', "they'd": 'they would',
  "i'll": 'i will', "you'll": 'you will', "he'll": 'he will', "she'll": 'she will',
  "we'll": 'we will', "they'll": 'they will',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
};

function expandContractions(s) {
  let out = String(s).replace(/[’‘`´]/g, "'");
  for (const [contraction, expanded] of Object.entries(CONTRACTIONS)) {
    out = out.replace(new RegExp(`\\b${contraction}\\b`, 'gi'), expanded);
  }
  return out;
}

function normalizeAnswer(s) {
  return expandContractions(s).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?¡¿]+$/g, '').replace(/^[¡¿]+/, '');
}

// Some answers carry a parenthetical aside or an em-dash clarification
// ("one hundred (100)", "you all — used only in Spain") that a learner
// isn't expected to reproduce verbatim; strip it to get the core phrase.
function coreAnswer(s) {
  return String(s).replace(/\s*\([^)]*\)/g, '').replace(/\s+—.*$/, '').trim();
}

// Spanish is pro-drop: a subject pronoun spelled out in the stored answer
// ("Ellas son de Bolivia.") can always be omitted ("Son de Bolivia.") without
// changing correctness, so accept that variant too.
const SPANISH_SUBJECT_PRONOUNS = ['yo', 'tú', 'tu', 'él', 'el', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes'];

function proDropVariant(text) {
  const words = String(text).trim().split(/\s+/);
  if (words.length < 2) return null;
  const first = words[0].toLowerCase().replace(/^[¡¿]+/, '');
  if (!SPANISH_SUBJECT_PRONOUNS.includes(first)) return null;
  const rest = words.slice(1);
  rest[0] = rest[0].charAt(0).toUpperCase() + rest[0].slice(1);
  return rest.join(' ');
}

// Build the set of strings that should count as correct for an exercise:
// the canonical answer, its "core" (parenthetical/aside stripped) form, its
// pro-drop form, the short `english` gloss some exercises carry, any
// explicit `altAnswers`, and "/"-separated alternative phrasings within any
// of those.
function acceptableAnswers(exercise) {
  const sources = [exercise.answer, exercise.english, ...(exercise.altAnswers || [])].filter(Boolean);
  const variants = new Set();
  sources.forEach(text => {
    text.split('/').forEach(part => {
      part = part.trim();
      variants.add(normalizeAnswer(part));
      variants.add(normalizeAnswer(coreAnswer(part)));
      const dropped = proDropVariant(part);
      if (dropped) variants.add(normalizeAnswer(dropped));
    });
  });
  return variants;
}

function isAnswerCorrect(exercise, learnerAnswer) {
  return acceptableAnswers(exercise).has(normalizeAnswer(learnerAnswer));
}

// phase: 'reading' | 'practice' | 'checking' | 'feedback' | 'complete'

// Checkpoint units have no static content — this builds their {sections,
// vocab, practice} at lesson-load time instead, so it reflects the
// learner's CURRENT weak spots every time they open it (checkpoints are
// redoable, deliberately not frozen at first-completion state).
function buildCheckpointContent(unit, weakConcepts) {
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
    practice: buildCheckpointPractice(unit.checkpointUpTo, weakConcepts),
  };
}

export default function Lesson() {
  const { unitId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const baseUnit = useMemo(() => getUnit(unitId), [unitId]);

  const [checkpointContent, setCheckpointContent] = useState(null);
  const [phase, setPhase] = useState('reading');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [marking, setMarking] = useState(false);

  // Checkpoints: fetch the learner's current weak spots and assemble a
  // fresh, personalized practice set every time this lesson mounts.
  useEffect(() => {
    setCheckpointContent(null);
    if (!baseUnit?.isCheckpoint || !token) return;
    let cancelled = false;
    api.learner.profile(token)
      .then(res => {
        if (cancelled) return;
        setCheckpointContent(buildCheckpointContent(baseUnit, res.weakConcepts ?? []));
      })
      .catch(() => {
        if (cancelled) return;
        setCheckpointContent(buildCheckpointContent(baseUnit, []));
      });
    return () => { cancelled = true; };
  }, [baseUnit, token]);

  const unit = baseUnit?.isCheckpoint
    ? (checkpointContent ? { ...baseUnit, ...checkpointContent } : null)
    : baseUnit;

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
    const correct = isAnswerCorrect(exercise, learnerAnswer);
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

  if (!baseUnit) {
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
