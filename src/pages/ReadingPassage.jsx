import { useState, useEffect, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import ClickableSpanish from '../components/ClickableSpanish.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import Feedback from '../components/Feedback.jsx';
import { isAnswerCorrect } from '../lib/answerMatching.js';
import { markPassageComplete, isPassageComplete, togglePassageComplete } from '../lib/readingProgress.js';
import { getPassage, getAdjacentChapter, formatWrittenDate } from '../content/readings.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './ReadingPassage.module.css';

export default function ReadingPassage() {
  const { passageId } = useParams();
  const { token } = useAuth();
  const passage = getPassage(passageId);
  useDocumentTitle(passage?.title ?? 'Readings');
  const [showTranslation, setShowTranslation] = useState(false);
  const [started, setStarted] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const reported = useRef(false);

  useEffect(() => {
    setIsComplete(passage ? isPassageComplete(passage.id) : false);
  }, [passage]);

  if (!passage) return <Navigate to="/readings" replace />;

  const prevChapter = getAdjacentChapter(passage, 'prev');
  const nextChapter = getAdjacentChapter(passage, 'next');
  const questions = passage.questions ?? [];
  const currentQuestion = questions[qIndex];
  const finished = started && !currentQuestion;

  useEffect(() => {
    if (!finished) return;
    markPassageComplete(passage.id);
    setIsComplete(true);
    if (reported.current) return;
    reported.current = true;
    api.learner.reportReadingResult(token, passage.id, correctCount, questions.length).catch(() => {});
  }, [finished, passage.id, token, correctCount, questions.length]);

  function handleToggleComplete() {
    togglePassageComplete(passage.id);
    setIsComplete(c => !c);
  }

  function handleStart() {
    setStarted(true);
    setQIndex(0);
    setCorrectCount(0);
    setFeedback(null);
  }

  function handleAnswer(value) {
    const correct = isAnswerCorrect(currentQuestion, value);
    if (correct) setCorrectCount(c => c + 1);
    setFeedback({ correct });
  }

  function handleNext() {
    setFeedback(null);
    setQIndex(i => i + 1);
  }

  return (
    <div className={styles.page}>
      <NavBar />

      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <Link to="/readings" className={styles.backLink}>← Readings</Link>

          <header className={styles.header}>
            <h1 className={styles.title}>{passage.title}</h1>
            <span className={styles.level}>{passage.level}</span>
            {passage.written && (
              <span className={styles.written}>Written {formatWrittenDate(passage.written)}</span>
            )}
          </header>

          <button
            type="button"
            className={`${styles.toggle} ${isComplete ? styles.toggleActive : ''}`}
            onClick={handleToggleComplete}
          >
            {isComplete ? '✓ Marked as read' : 'Mark as read'}
          </button>

          <div className={styles.body}>
            {passage.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                <ClickableSpanish text={p.es} minWords={1} vocabOnly />
              </p>
            ))}
          </div>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowTranslation(v => !v)}
            aria-expanded={showTranslation}
          >
            {showTranslation ? 'Ocultar traducción' : 'Ver traducción'}
          </button>

          {showTranslation && (
            <div className={styles.translation}>
              {passage.paragraphs.map((p, i) => (
                <p key={i} className={styles.translationParagraph}>{p.en}</p>
              ))}
            </div>
          )}

          {(prevChapter || nextChapter) && (
            <div className={styles.chapterNav}>
              <div>
                {prevChapter && (
                  <Link to={`/readings/${prevChapter.id}`} className={styles.chapterNavLink}>
                    ← Capítulo {prevChapter.chapter}
                  </Link>
                )}
              </div>
              <div>
                {nextChapter && (
                  <Link to={`/readings/${nextChapter.id}`} className={styles.chapterNavLink}>
                    Capítulo {nextChapter.chapter} →
                  </Link>
                )}
              </div>
            </div>
          )}

          {questions.length > 0 && (
            <div className={styles.comprehension}>
              {!started && (
                <button type="button" className={styles.toggle} onClick={handleStart}>
                  Practicar comprensión →
                </button>
              )}

              {started && currentQuestion && (
                <div className={styles.questionBlock}>
                  <p className={styles.questionProgress}>
                    Question {qIndex + 1} of {questions.length}
                  </p>
                  <ExerciseCard exercise={currentQuestion} onSubmit={handleAnswer} disabled={!!feedback} />
                  <Feedback
                    correct={feedback?.correct}
                    correctAnswer={feedback && !feedback.correct ? currentQuestion.answer : null}
                    onNext={handleNext}
                  />
                </div>
              )}

              {finished && (
                <div className={styles.summary}>
                  <p className={styles.summaryText}>
                    You got {correctCount} of {questions.length} correct.
                  </p>
                  <button type="button" className={styles.toggle} onClick={handleStart}>
                    Volver a intentar
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
