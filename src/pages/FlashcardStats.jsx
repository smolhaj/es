import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './FlashcardStats.module.css';

const DAY_LABELS = ['Today', 'Tomorrow', '+2d', '+3d', '+4d', '+5d', '+6d'];

export default function FlashcardStats() {
  useDocumentTitle('Flashcard Stats');
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stats, setStats] = useState(null);
  const [deckSize, setDeckSize] = useState(0);
  const [cardLookup, setCardLookup] = useState({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [{ default: allCards }, statsResult] = await Promise.all([
          import('../content/flashcards/frequency-5000.js'),
          api.flashcards.stats(token),
        ]);
        if (cancelled) return;
        setDeckSize(allCards.length);
        const lookup = {};
        for (const c of allCards) lookup[c.id] = c;
        setCardLookup(lookup);
        setStats(statsResult);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [token]);

  const newCount = useMemo(() => {
    if (!stats) return 0;
    const tracked = stats.states.learning + stats.states.review + stats.states.relearning + stats.states.suspended;
    return Math.max(0, deckSize - tracked);
  }, [stats, deckSize]);

  const maxForecast = useMemo(
    () => stats ? Math.max(1, ...stats.forecast) : 1,
    [stats]
  );

  const retentionPct = (r) => r.total > 0 ? Math.round((r.correct / r.total) * 100) : null;

  return (
    <div className={styles.page}>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <Link to="/flashcards" className={styles.backLink}>← Flashcards</Link>
          <h1 className={styles.title}>Deck stats.</h1>

          {loading && <p className={styles.loading}>Loading…</p>}
          {error && <p className={styles.error}>Couldn't load stats — try again shortly.</p>}

          {stats && (
            <>
              <section className={styles.tileGrid}>
                <Tile label="New" value={newCount} />
                <Tile label="Learning" value={stats.states.learning + stats.states.relearning} />
                <Tile label="Review" value={stats.states.review} />
                <Tile label="Suspended" value={stats.states.suspended} />
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Retention</h2>
                <div className={styles.retentionRow}>
                  <RetentionStat label="Today" r={stats.retention.today} pct={retentionPct(stats.retention.today)} />
                  <RetentionStat label="Last 7 days" r={stats.retention.week} pct={retentionPct(stats.retention.week)} />
                </div>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Due forecast</h2>
                <div className={styles.forecastChart}>
                  {stats.forecast.map((count, i) => (
                    <div key={i} className={styles.forecastBar}>
                      <div className={styles.forecastBarInner}>
                        <div
                          className={styles.forecastFill}
                          style={{ height: `${Math.max(4, (count / maxForecast) * 100)}%` }}
                        />
                      </div>
                      <span className={styles.forecastCount}>{count}</span>
                      <span className={styles.forecastLabel}>{DAY_LABELS[i]}</span>
                    </div>
                  ))}
                </div>
              </section>

              {stats.leeches.length > 0 && (
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    Stuck words <span className={styles.sectionNote}>({stats.leeches.length})</span>
                  </h2>
                  <p className={styles.leechIntro}>
                    Words you keep answering "Again" on. Still in normal rotation — this is
                    just a heads-up that they need extra attention.
                  </p>
                  <ul className={styles.leechList}>
                    {stats.leeches.map(l => {
                      const card = cardLookup[l.cardId];
                      return (
                        <li key={l.cardId} className={styles.leechItem}>
                          <span className={styles.leechWord}>{card?.es ?? l.cardId}</span>
                          <span className={styles.leechEn}>{card?.en ?? ''}</span>
                          <span className={styles.leechLapses}>{l.lapses} lapses</span>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function Tile({ label, value }) {
  return (
    <div className={styles.tile}>
      <span className={styles.tileValue}>{value.toLocaleString()}</span>
      <span className={styles.tileLabel}>{label}</span>
    </div>
  );
}

function RetentionStat({ label, r, pct }) {
  return (
    <div className={styles.retentionStat}>
      <span className={styles.retentionPct}>{pct === null ? '—' : `${pct}%`}</span>
      <span className={styles.retentionLabel}>{label}</span>
      <span className={styles.retentionCount}>{r.total} review{r.total !== 1 ? 's' : ''}</span>
    </div>
  );
}
