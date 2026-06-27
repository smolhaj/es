import styles from './Feedback.module.css';

export default function Feedback({ correct, text, correctAnswer, onNext, loading }) {
  if (loading) {
    return (
      <div className={styles.loading} aria-live="polite" aria-label="Checking answer">
        <span className={styles.spinner} />
      </div>
    );
  }

  if (correct === null || correct === undefined) return null;

  return (
    <div
      className={`${styles.feedback} ${correct ? styles.correct : styles.incorrect}`}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.indicator}>
        {correct ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.15" />
            <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="currentColor" opacity="0.15" />
            <path d="M6 6l6 6M12 6l-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        )}
        <span className={styles.label}>{correct ? 'Correct' : 'Incorrect'}</span>
      </div>

      {!correct && correctAnswer && (
        <p className={styles.correctAnswer}>
          <span className={styles.correctLabel}>Correct answer:</span> {correctAnswer}
        </p>
      )}

      {text && <p className={styles.text}>{text}</p>}

      <button
        className={`btn btn-secondary ${styles.nextBtn}`}
        onClick={onNext}
        autoFocus
      >
        Next exercise →
      </button>
    </div>
  );
}
