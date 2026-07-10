import { useState, useEffect, useRef } from 'react';
import SpeakButton from './SpeakButton.jsx';
import styles from './ConversationCard.module.css';

export default function ConversationCard({ scenario, history, turn, maxTurns, onSend, disabled, sending }) {
  const [answer, setAnswer] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [history, sending]);

  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  function handleSubmit(e) {
    e?.preventDefault();
    const value = answer.trim();
    if (!value || disabled) return;
    setAnswer('');
    onSend(value);
  }

  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.typeLabel}>Role-play</span>
        {turn && maxTurns && (
          <span className={styles.turnCount}>Turn {Math.min(turn, maxTurns)}/{maxTurns}</span>
        )}
      </div>

      {scenario && <p className={styles.scenario}>{scenario}</p>}

      <div className={styles.thread}>
        {(history ?? []).map((msg, i) => (
          <div
            key={i}
            className={`${styles.bubbleRow} ${msg.speaker === 'learner' ? styles.bubbleRowLearner : styles.bubbleRowNpc}`}
          >
            {msg.speaker === 'npc' && <SpeakButton text={msg.text} />}
            <div className={`${styles.bubble} ${msg.speaker === 'learner' ? styles.bubbleLearner : styles.bubbleNpc}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {sending && (
          <div className={`${styles.bubbleRow} ${styles.bubbleRowNpc}`}>
            <div className={`${styles.bubble} ${styles.bubbleNpc} ${styles.bubbleTyping}`} aria-label="Waiting for reply">
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.inputLabel} htmlFor="conversation-input">
          Your reply
        </label>
        <div className={styles.inputRow}>
          <input
            id="conversation-input"
            ref={inputRef}
            type="text"
            className={styles.input}
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder="Respond in Spanish…"
            disabled={disabled}
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className={`btn btn-primary ${styles.sendBtn}`}
            disabled={disabled || !answer.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
