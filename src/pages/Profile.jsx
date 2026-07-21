import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Profile.module.css';

const SKILL_ORDER = ['grammar', 'reading', 'writing', 'listening'];

const SUGGESTIONS = [
  { key: 'native_language', label: 'Native language', placeholder: 'e.g. English' },
  { key: 'learning_goal', label: 'Learning goal', placeholder: 'e.g. Travel to Mexico' },
  { key: 'occupation', label: 'Occupation', placeholder: 'e.g. Software engineer' },
  { key: 'interests', label: 'Interests', placeholder: 'e.g. Football, cooking' },
  { key: 'weak_area', label: 'Known weak area', placeholder: 'e.g. Ser vs estar' },
  { key: 'target_dialect', label: 'Target dialect', placeholder: 'e.g. Mexican Spanish' },
];

export default function Profile() {
  useDocumentTitle('Profile');
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();
  const [context, setContext] = useState([]);
  const [cefrHistory, setCefrHistory] = useState([]);
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [valuePlaceholder, setValuePlaceholder] = useState('Value');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const [exportStatus, setExportStatus] = useState('');
  const [exportError, setExportError] = useState('');
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    Promise.all([
      api.learner.context(token),
      api.learner.profile(token),
    ]).then(([ctx, prof]) => {
      setContext(ctx.context ?? []);
      setCefrHistory(prof.cefrHistory ?? []);
      setSkills(prof.skills ?? {});
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

  async function handleExport() {
    setExportStatus('');
    setExportError('');
    try {
      const data = await api.learner.export(token);
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `capi-data-export-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setExportStatus('Downloaded.');
      setTimeout(() => setExportStatus(''), 2500);
    } catch (err) {
      setExportError(err.message);
    }
  }

  async function handleDeleteAccount(e) {
    e.preventDefault();
    setDeleteError('');
    if (deleteConfirmText.trim().toUpperCase() !== 'DELETE') {
      setDeleteError('Type DELETE to confirm.');
      return;
    }
    if (!deletePassword) {
      setDeleteError('Enter your password to confirm.');
      return;
    }
    setDeleting(true);
    try {
      await api.auth.deleteAccount(token, deletePassword);
      logout();
      navigate('/');
    } catch (err) {
      setDeleteError(err.message);
      setDeleting(false);
    }
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

          {/* Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.contextList}>
              {SKILL_ORDER.map(skill => {
                const s = skills[skill];
                const assessed = (s?.sessions ?? 0) > 0;
                return (
                  <div key={skill} className={styles.contextItem}>
                    <span className={styles.contextKey}>{skill}</span>
                    <span className={styles.contextValue}>
                      {assessed
                        ? `${s.level} · ${Math.round((s.accuracy ?? 0) * 100)}% accuracy · ${s.sessions} session${s.sessions !== 1 ? 's' : ''}`
                        : <span className={styles.skillUnassessed}>Not yet assessed</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CEFR history */}
          {cefrHistory.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Level progression</h2>
              <div className={styles.cefrTimeline}>
                {cefrHistory.map((h, i) => (
                  <div key={i} className={styles.cefrEvent}>
                    <span className={styles.cefrArrow}>
                      {h.skill && <span className={styles.cefrSkill}>{h.skill}</span>}
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

          {/* Your data */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your data</h2>
            <p className={styles.hint}>
              Download everything Capi has stored about your account and learning history as a
              single JSON file.
            </p>
            <div className={styles.formRow}>
              <button type="button" className="btn btn-secondary" onClick={handleExport}>
                Download my data
              </button>
            </div>
            {exportStatus && <p className={styles.statusMsg}>{exportStatus}</p>}
            {exportError && <p className={styles.errorMsg}>{exportError}</p>}
          </section>

          {/* Danger zone */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Danger zone</h2>
            <div className={styles.dangerZone}>
              {!showDeleteForm ? (
                <>
                  <p className={styles.hint}>
                    Permanently delete your account and everything associated with it — sessions,
                    vocabulary progress, flashcards, writing samples, and reading history. This
                    can't be undone.
                  </p>
                  <button
                    type="button"
                    className={styles.dangerBtn}
                    onClick={() => setShowDeleteForm(true)}
                  >
                    Delete my account
                  </button>
                </>
              ) : (
                <form className={styles.addForm} onSubmit={handleDeleteAccount}>
                  <p className={styles.hint}>
                    This permanently deletes your account and all data. Enter your password and
                    type DELETE to confirm.
                  </p>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="Your password"
                    value={deletePassword}
                    onChange={e => setDeletePassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Type DELETE to confirm"
                    value={deleteConfirmText}
                    onChange={e => setDeleteConfirmText(e.target.value)}
                  />
                  <div className={styles.formRow}>
                    <button type="submit" className={styles.dangerBtn} disabled={deleting}>
                      {deleting ? 'Deleting…' : 'Permanently delete my account'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => { setShowDeleteForm(false); setDeleteError(''); setDeletePassword(''); setDeleteConfirmText(''); }}
                      disabled={deleting}
                    >
                      Cancel
                    </button>
                  </div>
                  {deleteError && <p className={styles.errorMsg}>{deleteError}</p>}
                </form>
              )}
            </div>
          </section>

          <footer className={styles.footerLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/terms">Terms of Service</Link>
          </footer>
        </div>
      </main>
    </div>
  );
}
