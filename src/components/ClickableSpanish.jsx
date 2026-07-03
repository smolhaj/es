import { useState, useRef, useEffect } from 'react';
import { segmentSpanish } from '../lib/dictionary.js';
import { speak } from '../hooks/useSpeech.jsx';
import styles from './ClickableSpanish.module.css';

export default function ClickableSpanish({ text, minWords = 1 }) {
  const segments = segmentSpanish(text, minWords);
  const [openIndex, setOpenIndex] = useState(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (openIndex === null) return;
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpenIndex(null);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openIndex]);

  return (
    <span ref={wrapRef} className={styles.wrap}>
      {segments.map((seg, i) => {
        if (!seg.match) return <span key={i}>{seg.text}</span>;
        return (
          <span key={i} className={styles.termWrap}>
            <button
              type="button"
              className={styles.term}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              {seg.text}
            </button>
            {openIndex === i && (
              <span className={styles.popover} role="dialog">
                <span className={styles.popoverHead}>
                  <strong className={styles.popoverEs}>{seg.match.es}</strong>
                  <button
                    type="button"
                    className={styles.popoverSpeak}
                    onClick={() => speak(seg.match.es)}
                    aria-label={`Play pronunciation: ${seg.match.es}`}
                  >
                    🔊
                  </button>
                </span>
                <span className={styles.popoverEn}>{seg.match.en}</span>
                {seg.match.cefr && <span className={styles.popoverCefr}>{seg.match.cefr}</span>}
                {seg.match.example && (
                  <span className={styles.popoverExample}>
                    {seg.match.example}
                    {seg.match.exampleEn && <em> — {seg.match.exampleEn}</em>}
                  </span>
                )}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
