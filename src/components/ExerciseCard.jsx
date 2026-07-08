import { useState, useEffect, useRef } from 'react';
import SpeakButton from './SpeakButton.jsx';
import styles from './ExerciseCard.module.css';

export default function ExerciseCard({ exercise, onSubmit, disabled }) {
  const [answer, setAnswer] = useState('');
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);

  const isMultipleType = t => t === 'multiple_choice' || t === 'register_identify';

  // Reset state when exercise changes
  useEffect(() => {
    setAnswer('');
    setSelected(null);
    if (!isMultipleType(exercise?.type) && inputRef.current) {
      inputRef.current.focus();
    }
  }, [exercise?.prompt]);

  if (!exercise) return null;

  function handleSubmit(e) {
    e?.preventDefault();
    const value = isMultipleType(exercise.type) ? selected : answer.trim();
    if (!value) return;
    onSubmit(value);
  }

  function handleOptionSelect(option) {
    if (disabled) return;
    setSelected(option);
  }

  // Keyboard shortcuts: 1–4 select + immediately submit MC/register option
  useEffect(() => {
    if (!isMultipleType(exercise?.type) || disabled) return;
    const opts = exercise.options ?? [];
    function onKey(e) {
      const idx = parseInt(e.key, 10) - 1;
      if (idx >= 0 && idx < opts.length && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        onSubmit(opts[idx]);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [exercise?.type, exercise?.options, disabled, onSubmit]);

  const isMultiple = isMultipleType(exercise.type);
  const canSubmit = isMultiple ? !!selected : answer.trim().length > 0;

  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.typeLabel}>{typeLabel(exercise.type)}</span>
        {exercise.word && <span className={styles.word}>{exercise.word}</span>}
      </div>

      {exercise.passage && (
        <div className={styles.passage}>
          <div className={styles.passageRow}>
            <SpeakButton text={exercise.passage} />
            <p className={styles.passageEs}>{exercise.passage}</p>
          </div>
          {exercise.passageEn && <p className={styles.passageEn}>{exercise.passageEn}</p>}
        </div>
      )}

      {exercise.type === 'register_identify' && exercise.sentence && (
        <div className={styles.passage}>
          <div className={styles.passageRow}>
            <SpeakButton text={exercise.sentence} />
            <p className={styles.passageEs}>{exercise.sentence}</p>
          </div>
          {exercise.sentenceEn && <p className={styles.passageEn}>{exercise.sentenceEn}</p>}
        </div>
      )}

      <p className={styles.prompt}>{exercise.prompt}</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        {isMultiple ? (
          <ul className={styles.options} role="listbox" aria-label="Answer options">
            {(exercise.options ?? []).map((opt, i) => (
              <li key={opt}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected === opt}
                  className={`${styles.option} ${selected === opt ? styles.optionSelected : ''}`}
                  onClick={() => { handleOptionSelect(opt); onSubmit(opt); }}
                  disabled={disabled}
                >
                  <span className={styles.optionKey}>{i + 1}</span>
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.inputWrap}>
            <label className={styles.inputLabel} htmlFor="answer-input">
              Your answer
            </label>
            <input
              id="answer-input"
              ref={inputRef}
              type="text"
              className={styles.input}
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              placeholder={inputPlaceholder(exercise.type)}
              disabled={disabled}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        )}

        {!isMultiple && (
          <button
            type="submit"
            className={`btn btn-primary ${styles.submitBtn}`}
            disabled={!canSubmit || disabled}
          >
            Check answer
          </button>
        )}
      </form>
    </div>
  );
}

function typeLabel(type) {
  switch (type) {
    case 'multiple_choice':        return 'Multiple choice';
    case 'fill_blank':             return 'Fill in the blank';
    case 'translation_to_spanish': return 'Translate to Spanish';
    case 'translation_to_english': return 'Translate to English';
    case 'error_correction':       return 'Error correction';
    case 'register_identify':      return 'Identify the register';
    default: return 'Exercise';
  }
}

function inputPlaceholder(type) {
  switch (type) {
    case 'fill_blank':             return 'Type the missing word…';
    case 'translation_to_spanish': return 'Type in Spanish…';
    case 'translation_to_english': return 'Type in English…';
    case 'error_correction':       return 'Type the corrected sentence…';
    default: return 'Your answer…';
  }
}
