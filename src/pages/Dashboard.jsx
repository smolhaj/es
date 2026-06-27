import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import CefrBadge from '../components/CefrBadge.jsx';
import styles from './Dashboard.module.css';

function StatCard({ label, value, sub }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
      {sub && <span className={styles.statSub}>{sub}</span>}
    </div>
  );
}

function SessionRow({ session }) {
  const date = new Date(session.started_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short'
  });
  const accuracy = session.overall_accuracy != null
    ? `${Math.round(session.overall_accuracy * 100)}%`
    : '—';
  return (
    <li className={styles.sessionRow}>
      <span className={styles.sessionDate}>{date}</span>
      <span className={styles.sessionItems}>{session.items_reviewed} exercises</span>
      <span className={styles.sessionAcc}>{accuracy}</span>
    </li>
  );
}

export default function Dashboard() {
  const { token, user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.learner.profile(token)
      .then(setProfile)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  const cefr = profile?.cefr ?? 'A1';
  const totalSessions = profile?.sessions?.completed ?? 0;
  const accuracy = profile?.sessions?.avgAccuracy != null
    ? `${Math.round((profile.sessions.avgAccuracy ?? 0) * 100)}%`
    : '—';
  const wordsMastered = profile?.vocabulary?.mastered ?? 0;
  const wordsSeen = profile?.vocabulary?.seen ?? 0;

  return (
    <div className={styles.page}>
      <NavBar cefrLevel={cefr} />

      <main className={styles.main}>
        <div className={styles.inner}>
          {/* Header */}
          <header className={styles.header}>
            <div>
              <h1 className={styles.greeting}>
                {greeting(user?.email)}
              </h1>
              <p className={styles.subGreeting}>
                {totalSessions === 0
                  ? 'Your first session is ready.'
                  : `${totalSessions} session${totalSessions !== 1 ? 's' : ''} completed.`}
              </p>
            </div>
            <CefrBadge level={cefr} />
          </header>

          {/* Start session */}
          <section className={styles.startSection}>
            <Link to="/session" className={`btn btn-primary ${styles.startBtn}`}>
              Start session →
            </Link>
            <p className={styles.startNote}>
              Sessions are 10 exercises. Quit any time.
            </p>
          </section>

          {/* Stats */}
          {!loading && !error && (
            <section className={styles.statsSection}>
              <h2 className={styles.sectionTitle}>Your progress</h2>
              <div className={styles.statsGrid}>
                <StatCard
                  label="Sessions"
                  value={totalSessions}
                />
                <StatCard
                  label="Accuracy"
                  value={accuracy}
                  sub="all time"
                />
                <StatCard
                  label="Words seen"
                  value={wordsSeen}
                  sub={`${wordsMastered} mastered`}
                />
                <StatCard
                  label="Level"
                  value={cefr}
                  sub="CEFR"
                />
              </div>
            </section>
          )}

          {loading && <p className={styles.loading}>Loading your profile…</p>}
          {error && <p className={styles.error}>{error}</p>}

          {/* Recent sessions */}
          {profile?.recentSessions?.length > 0 && (
            <section className={styles.recentSection}>
              <h2 className={styles.sectionTitle}>Recent sessions</h2>
              <ul className={styles.sessionList}>
                <li className={styles.sessionHeader}>
                  <span>Date</span>
                  <span>Exercises</span>
                  <span>Accuracy</span>
                </li>
                {profile.recentSessions.map(s => (
                  <SessionRow key={s.id} session={s} />
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

function greeting(email) {
  const hour = new Date().getHours();
  const salutation = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';
  return salutation + (email ? ', ' + email.split('@')[0] + '.' : '.');
}
