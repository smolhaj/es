import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import styles from './History.module.css';

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

export default function History() {
  const { token } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.learner.history(token)
      .then(d => setSessions(d.sessions ?? []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Session history</h1>
            <p className={styles.subtitle}>All completed sessions with error breakdowns.</p>
          </header>

          {loading && <p className={styles.empty}>Loading…</p>}
          {error && <p className={styles.empty} style={{ color: 'var(--incorrect)' }}>{error}</p>}

          {!loading && !error && sessions.length === 0 && (
            <p className={styles.empty}>No completed sessions yet. <Link to="/session">Start your first session →</Link></p>
          )}

          {sessions.length > 0 && (
            <div className={styles.sessionList}>
              {sessions.map(s => <SessionCard key={s.id} session={s} />)}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SessionCard({ session }) {
  const [open, setOpen] = useState(false);

  const date = new Date(session.started_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
  const time = new Date(session.started_at).toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit'
  });
  const accuracy = session.overall_accuracy != null
    ? `${Math.round(session.overall_accuracy * 100)}%`
    : '—';

  return (
    <div className={`${styles.card} ${open ? styles.cardExpanded : ''}`}>
      <div
        className={styles.cardHeader}
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <span className={styles.date}>{date} · {time}</span>
        <span className={styles.exercises}>{session.items_reviewed} exercises</span>
        <span className={styles.accuracy}>{accuracy}</span>
        {session.durationMinutes != null && (
          <span className={styles.duration}>{session.durationMinutes} min</span>
        )}
        <div className={styles.signals}>
          {session.abandoned ? <span className={`${styles.signal} ${styles.signalAbandoned}`}>quit</span> : null}
          {session.fatigue_signal ? <span className={`${styles.signal} ${styles.signalFatigue}`}>fatigue</span> : null}
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </div>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <div>
            <div className={styles.bodyLabel}>Errors this session</div>
            {session.errors.length === 0 ? (
              <p className={styles.noErrors}>No errors recorded — perfect session!</p>
            ) : (
              <div className={styles.errorList}>
                {session.errors
                  .sort((a, b) => b.count - a.count)
                  .map((e, i) => (
                    <div key={i} className={styles.errorRow}>
                      <span className={styles.errorConcept}>
                        {e.concept_id
                          ? (CONCEPT_LABELS[e.concept_id] ?? e.concept_id)
                          : (e.grammatical_category ?? e.exercise_type ?? 'Unknown')}
                      </span>
                      <span className={styles.errorCount}>{e.count}×</span>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {session.session_notes && (
            <div>
              <div className={styles.bodyLabel}>Professor's notes</div>
              <p className={styles.notes}>{session.session_notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
