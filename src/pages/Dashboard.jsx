import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import CefrBadge from '../components/CefrBadge.jsx';
import styles from './Dashboard.module.css';

const CONCEPT_LABELS = {
  greeting_basics: 'Greetings', numbers_1_20: 'Numbers 1–20', subject_pronouns: 'Subject pronouns',
  noun_gender: 'Noun gender', definite_articles: 'Articles (el/la)', indefinite_articles: 'Articles (un/una)',
  ser_basics: 'Ser', estar_basics: 'Estar', present_ar: 'Present -ar', present_er_ir: 'Present -er/-ir',
  adjective_agreement: 'Adjective agreement', question_words: 'Question words', hay: 'Hay',
  numbers_21_100: 'Numbers 21–100', ser_vs_estar: 'Ser vs. estar', reflexive_verbs: 'Reflexive verbs',
  gustar_type: 'Gustar-type', direct_object_pronouns: 'Direct obj. pronouns',
  indirect_object_pronouns: 'Indirect obj. pronouns', demonstratives: 'Demonstratives',
  possessives: 'Possessives', preterite_regular: 'Preterite (regular)', modal_verbs: 'Modal verbs',
  obligation_infinitive: 'Obligation (tener que)',
  time_expressions: 'Time expressions', present_progressive: 'Present progressive',
  irregular_present: 'Irregular present', negation: 'Negation', prepositions_basic: 'Basic prepositions',
  acabar_de: 'Recent past (acabar de)',
  llevar_gerund: 'Duration (llevar + gerund)', preterite_irregular: 'Preterite (irregular)',
  imperfect: 'Imperfect', preterite_vs_imperfect: 'Pret. vs. imperfect',
  future_simple: 'Simple future', conditional: 'Conditional', present_subjunctive: 'Subjunctive',
  imperative: 'Imperative', por_vs_para: 'Por vs. para', relative_clauses: 'Relative clauses',
  present_perfect: 'Present perfect', pluperfect: 'Pluperfect', future_perfect: 'Future perfect',
  conditional_perfect: 'Conditional perfect', passive_voice: 'Passive voice', passive_se: 'Passive se',
  imperfect_subjunctive: 'Imperfect subjunctive', si_clauses: 'Si-clauses',
  subjunctive_adverbial: 'Subjunctive (adverbial)', comparatives: 'Comparatives',
  ser_estar_participle: 'Ser/estar + participio', diminutives_augmentatives: 'Diminutives',
  relative_pronouns_advanced: 'Relative pronouns (adv.)',
  subjunctive_noun_clauses: 'Subjunctive (noun clauses)', subjunctive_adjective_clauses: 'Subjunctive (adj. clauses)',
  gerund_advanced: 'Gerund (advanced)', ser_passive: 'Ser passive', estilo_indirecto: 'Indirect speech',
  nominalisation: 'Nominalisation', subjunctive_temporal: 'Subjunctive (temporal)',
  cuantificadores: 'Quantifiers',
};

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
      <span className={styles.sessionItems}>{session.items_reviewed} ex.</span>
      <span className={styles.sessionAcc}>{accuracy}</span>
      {session.durationMinutes != null && (
        <span className={styles.sessionDuration}>{session.durationMinutes}m</span>
      )}
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
  const dueForReview = profile?.vocabulary?.dueForReview ?? 0;
  const weakConcepts = profile?.weakConcepts ?? [];
  const streak = profile?.streak ?? 0;
  // Show seed prompt when user has done sessions but hasn't imported the bulk vocab list.
  // Session exercises auto-add words, so we use a low threshold (< 30) rather than === 0.
  const showSeedPrompt = !loading && !error && totalSessions >= 2 && wordsSeen < 30;

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
            {dueForReview > 0 && (
              <Link to="/vocab-review" className={`btn btn-secondary ${styles.reviewBtn}`}>
                Review {dueForReview} word{dueForReview !== 1 ? 's' : ''} due
              </Link>
            )}
            <p className={styles.startNote}>Sessions are 10 exercises. Quit any time.</p>
          </section>

          {/* Stats */}
          {!loading && !error && (
            <section className={styles.statsSection}>
              <h2 className={styles.sectionTitle}>Your progress</h2>
              <div className={styles.statsGrid}>
                <StatCard label="Sessions" value={totalSessions} />
                <StatCard label="Accuracy" value={accuracy} sub="all time" />
                <StatCard label="Words seen" value={wordsSeen} sub={`${wordsMastered} mastered`} />
                <StatCard label="Streak" value={streak} sub={streak === 1 ? 'day' : 'days'} />
                <StatCard label="Level" value={cefr} sub="CEFR" />
              </div>
            </section>
          )}

          {loading && <p className={styles.loading}>Loading your profile…</p>}
          {error && <p className={styles.error}>{error}</p>}

          {/* Vocab seed prompt (shown after first session if vocab not seeded) */}
          {showSeedPrompt && (
            <section className={styles.seedCard}>
              <p className={styles.seedText}>
                Import vocabulary at your level into the spaced repetition queue. New words unlock as your grammar level advances.
              </p>
              <Link to="/vocab-review" className={`btn btn-secondary ${styles.seedBtn}`}>
                Set up vocabulary →
              </Link>
            </section>
          )}

          {/* Weak concepts */}
          {weakConcepts.length > 0 && (
            <section className={styles.weakSection}>
              <h2 className={styles.sectionTitle}>Needs work</h2>
              <ul className={styles.weakList}>
                {weakConcepts.map(c => (
                  <li key={c.concept_id} className={styles.weakItem}>
                    <span className={styles.weakName}>
                      {CONCEPT_LABELS[c.concept_id] ?? c.concept_id}
                      {c.fossilization_flagged ? <span className={styles.fossilTag}>persistent</span> : null}
                    </span>
                    <span className={styles.weakRight}>
                      <span className={styles.weakMastery}>
                        {Math.round((c.mastery_score ?? 0) * 100)}%
                      </span>
                      <Link
                        to={`/session?focus=${c.concept_id}`}
                        className={styles.weakDrill}
                      >
                        Drill →
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Recent sessions */}
          {profile?.recentSessions?.length > 0 && (
            <section className={styles.recentSection}>
              <h2 className={styles.sectionTitle}>Recent sessions</h2>
              <ul className={styles.sessionList}>
                <li className={styles.sessionHeader}>
                  <span>Date</span>
                  <span>Ex.</span>
                  <span>Accuracy</span>
                  <span>Time</span>
                </li>
                {profile.recentSessions.map(s => (
                  <SessionRow key={s.id} session={s} />
                ))}
              </ul>
            </section>
          )}

          {/* Reference links */}
          <section className={styles.refSection}>
            <Link to="/concepts" className={styles.refLink}>Concepts →</Link>
            <Link to="/grammar" className={styles.refLink}>Grammar →</Link>
            <Link to="/verbs" className={styles.refLink}>Verbs →</Link>
            <Link to="/vocab" className={styles.refLink}>Vocabulary →</Link>
            <Link to="/idioms" className={styles.refLink}>Idioms →</Link>
            <Link to="/false-friends" className={styles.refLink}>False friends →</Link>
            <Link to="/pronunciation" className={styles.refLink}>Pronunciation →</Link>
            <Link to="/regional" className={styles.refLink}>Regional →</Link>
            <Link to="/writing" className={styles.refLink}>Writing →</Link>
            <Link to="/history" className={styles.refLink}>History →</Link>
            <Link to="/profile" className={styles.refLink}>Profile →</Link>
          </section>
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
