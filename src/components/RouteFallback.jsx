import { useEffect, useState } from 'react';
import styles from './RouteFallback.module.css';

// Shown while a lazily-loaded route chunk is in flight. Chunks are small and
// usually arrive in well under 100ms on a warm connection, so this stays
// invisible for a beat first — a spinner that flashes for 40ms reads as a
// glitch, not as feedback.
export default function RouteFallback() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 180);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      {visible && <span className={styles.label}>Loading…</span>}
    </div>
  );
}
