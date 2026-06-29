import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import styles from './Profile.module.css';

const SUGGESTIONS = [
  { key: 'native_language', label: 'Native language', placeholder: 'e.g. English' },
  { key: 'learning_goal', label: 'Learning goal', placeholder: 'e.g. Travel to Mexico' },
  { key: 'occupation', label: 'Occupation', placeholder: 'e.g. Software engineer' },
  { key: 'interests', label: 'Interests', placeholder: 'e.g. Football, cooking' },
  { key: 'weak_area', label: 'Known weak area', placeholder: 'e.g. Ser vs estar' },
  { key: 'target_dialect', label: 'Target dialect', placeholder: 'e.g. Mexican Spanish' },
];

export default function Profile() {
  const { token, user } = useAuth();
  const [context, setContext] = useState([]);
  const [cefrHistory, setCefrHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [valuePlaceholder, setValuePlaceholder] = useState('Value');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      api.learner.context(token),
      api.learner.profile(token),
    ]).then(([ctx, prof]) => {
      setContext(ctx.context ?? []);
      setCefrHistory(prof.cefrHistory ?? []);
    }).catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  async function handleAdd(e) {
    e.preventDefault();
    if (!key.trim() || !value.trim()) return;
    setStatus('');
    setError('');
    try {
      await api.learner.saveContext(token, key.trim(), value.trim());
      const existing = context.findIndex(c => c.key === key.trim());
      if (existing >= 0) {
        setContext(prev => prev.map((c, i) => i === existing ? { ...c, value: value.trim() } : c));
      } else {
        setContext(prev => [{ key: key.trim(), value: value.trim(), created_at: new Date().toISOString() }, ...prev]);
      }
      setKey('');
      setValue('');
      setValuePlaceholder('Value');
      setStatus('Saved.');
      setTimeout(() => setStatus(''), 2000);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(k) {
    try {
      await api.learner.deleteContext(token, k);
      setContext(prev => prev.filter(c => c.key !== k));
    } catch (err) {
      setError(err.message);
    }
  }

  function fillSuggestion(sug) {
    setKey(sug.key);
    setValue('');
    setValuePlaceholder(sug.placeholder || 'Value');
  }

  const existingKeys = new Set(context.map(c => c.key));

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Your profile</h1>
            <p className={styles.subtitle}>
              Context you add here is shared with the professor to personalise your sessions.
            </p>
          </header>

          {/* Add / edit form */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Add context</h2>

            <form className={styles.addForm} onSubmit={handleAdd}>
              <div className={styles.formRow}>
                <input
                  className={styles.input}
                  placeholder="Key (e.g. native_language)"
                  value={key}
                  onChange={e => setKey(e.target.value)}
                />
                <input
                  className={`${styles.input} ${styles.inputLarge}`}
                  placeholder={valuePlaceholder}
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
                <button type="submit" className={`btn btn-primary ${styles.addBtn}`}>
                  Save
                </button>
              </div>
              <p className={styles.hint}>
                Keys are short identifiers (no spaces). Values are plain text, max 500 chars.
              </p>
              {status && <p className={styles.statusMsg}>{status}</p>}
              {error && <p className={styles.errorMsg}>{error}</p>}
            </form>

            {/* Suggestions */}
            <div className={styles.suggestions}>
              <span className={styles.suggestLabel}>Quick fill</span>
              <div className={styles.chipRow}>
                {SUGGESTIONS.filter(s => !existingKeys.has(s.key)).map(s => (
                  <button
                    key={s.key}
                    className={styles.chip}
                    onClick={() => fillSuggestion(s)}
                    type="button"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Current context */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Saved context</h2>
            {loading && <p className={styles.empty}>Loading…</p>}
            {!loading && context.length === 0 && (
              <p className={styles.empty}>No context saved yet. Add some above to personalise your sessions.</p>
            )}
            {context.length > 0 && (
              <div className={styles.contextList}>
                {context.map(c => (
                  <div key={c.key} className={styles.contextItem}>
                    <span className={styles.contextKey}>{c.key.replace(/_/g, ' ')}</span>
                    <span className={styles.contextValue}>{c.value}</span>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(c.key)}
                      aria-label={`Delete ${c.key}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* CEFR history */}
          {cefrHistory.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Level progression</h2>
              <div className={styles.cefrTimeline}>
                {cefrHistory.map((h, i) => (
                  <div key={i} className={styles.cefrEvent}>
                    <span className={styles.cefrArrow}>
                      <span className={styles.cefrFrom}>{h.from_level}</span>
                      {' → '}
                      <span className={styles.cefrTo}>{h.to_level}</span>
                    </span>
                    <span className={styles.cefrDate}>
                      {new Date(h.transitioned_at).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Account info */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Account</h2>
            <div className={styles.contextItem}>
              <span className={styles.contextKey}>email</span>
              <span className={styles.contextValue}>{user?.email}</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
