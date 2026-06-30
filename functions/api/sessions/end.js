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
  irregular_present: 'Irregular present', negation: 'Negation', prepositions_basic: 'Basic prepositions', near_future: 'Near future (ir a)', adverbs_formation: 'Adverbs (-mente)',
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
  relative_pronouns_advanced: 'Relative pronouns (adv.)', subjunctive_noun_clauses: 'Subjunctive (noun clauses)',
  subjunctive_adjective_clauses: 'Subjunctive (adj. clauses)', gerund_advanced: 'Gerund (advanced)',
  ser_passive: 'Ser passive', estilo_indirecto: 'Indirect speech', nominalisation: 'Nominalisation',
  subjunctive_temporal: 'Subjunctive (temporal)', cuantificadores: 'Quantifiers',
  futuro_probabilidad: 'Future probability', condicional_probabilidad: 'Conditional inference',
  perifraseis_avanzadas: 'Advanced periphrases',
};

function buildSessionNotes({ itemsReviewed, accuracy, abandoned, errors, cefrChanged }) {
  if (itemsReviewed < 3) return null;
  const pct = Math.round(accuracy * 100);
  const parts = [];

  if (abandoned) {
    parts.push(`Session ended early after ${itemsReviewed} exercise${itemsReviewed !== 1 ? 's' : ''} (${pct}% correct).`);
  } else {
    const verdict = pct >= 90 ? 'Excellent' : pct >= 75 ? 'Good' : pct >= 60 ? 'OK' : 'Tough';
    parts.push(`${verdict} session — ${itemsReviewed} exercises, ${pct}% correct.`);
  }

  const topErrors = errors.filter(e => e.concept_id).slice(0, 3);
  if (topErrors.length > 0) {
    const names = topErrors.map(e => CONCEPT_LABELS[e.concept_id] ?? e.concept_id).join(', ');
    parts.push(`Errors in: ${names}.`);
  }

  if (cefrChanged) {
    parts.push(`Level advanced: ${cefrChanged.from} → ${cefrChanged.to}! 🎉`);
  }

  return parts.join(' ');
}

function computeCefrLevel(accuracy, sessionCount, current) {
  const order = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const thresholds = {
    A1: { acc: 0.70, sessions: 3 },
    A2: { acc: 0.75, sessions: 5 },
    B1: { acc: 0.80, sessions: 8 },
    B2: { acc: 0.82, sessions: 10 },
  };
  const idx = order.indexOf(current);
  if (idx === -1 || idx === order.length - 1) return current;
  const t = thresholds[current];
  if (t && accuracy >= t.acc && sessionCount >= t.sessions) {
    return order[idx + 1];
  }
  // Downgrade if consistently weak (only after enough data)
  if (idx > 0 && sessionCount >= 4 && accuracy < 0.45) {
    return order[idx - 1];
  }
  return current;
}

export async function onRequestPost({ request, env, data }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { sessionId, abandoned } = body;
  if (!sessionId) return Response.json({ error: 'sessionId required' }, { status: 400 });

  const session = await env.DB.prepare(
    'SELECT * FROM sessions WHERE id = ? AND user_id = ? AND ended_at IS NULL'
  ).bind(sessionId, data.user.sub).first();

  if (!session) {
    return Response.json({ error: 'Session not found' }, { status: 404 });
  }

  const accuracy = session.items_reviewed > 0
    ? session.correct_count / session.items_reviewed
    : 0;

  const now = new Date().toISOString();

  // Frustration: error rate above 30% triggers it; scales 0→1 as accuracy 50%→0%
  const frustrationScore = Math.max(0, Math.min(1, (0.5 - accuracy) * 2));

  // Fatigue: completed a full session (≥8 items) but accuracy was poor
  const fatigueSignal = (session.items_reviewed >= 8 && accuracy < 0.55) ? 1 : 0;

  await env.DB.prepare(`
    UPDATE sessions
    SET ended_at = ?, overall_accuracy = ?, frustration_score = ?, fatigue_signal = ?, abandoned = ?
    WHERE id = ?
  `).bind(now, accuracy, frustrationScore, fatigueSignal, abandoned ? 1 : 0, sessionId).run();

  // Update skill profiles and track CEFR level progression
  // Skip accuracy update for short abandoned sessions to avoid skewing the rolling average
  const skipCefrUpdate = abandoned && session.items_reviewed < 5;

  const prevSkill = await env.DB.prepare(
    'SELECT cefr_level, accuracy, session_count FROM skill_profiles WHERE user_id = ? AND skill = ?'
  ).bind(data.user.sub, 'grammar').first();

  const prevCefr = prevSkill?.cefr_level ?? 'A1';
  let newCefr = prevCefr;

  if (!skipCefrUpdate) {
    const newSessionCount = (prevSkill?.session_count ?? 0) + 1;
    const prevAcc = prevSkill?.accuracy ?? 0;
    const newAcc = prevSkill
      ? (prevAcc * prevSkill.session_count + accuracy) / newSessionCount
      : accuracy;
    newCefr = computeCefrLevel(newAcc, newSessionCount, prevCefr);

    await env.DB.prepare(`
      INSERT INTO skill_profiles (user_id, skill, accuracy, cefr_level, session_count, updated_at)
      VALUES (?, 'grammar', ?, ?, 1, ?)
      ON CONFLICT(user_id, skill) DO UPDATE SET
        accuracy = ?,
        cefr_level = ?,
        session_count = session_count + 1,
        updated_at = excluded.updated_at
    `).bind(data.user.sub, newAcc, newCefr, now, newAcc, newCefr).run();

    if (prevCefr !== newCefr) {
      await env.DB.prepare(`
        INSERT INTO cefr_history (id, user_id, skill, from_level, to_level, transitioned_at, session_id)
        VALUES (?, ?, 'grammar', ?, ?, ?, ?)
      `).bind(crypto.randomUUID(), data.user.sub, prevCefr, newCefr, now, sessionId).run();
    }
  }

  // Concept-level error breakdown for summary
  const [errorsResult, wordsResult] = await Promise.all([
    env.DB.prepare(`
      SELECT concept_id, exercise_type, COUNT(*) as count
      FROM error_events
      WHERE session_id = ?
      GROUP BY concept_id, exercise_type
      ORDER BY count DESC
    `).bind(sessionId).all(),

    env.DB.prepare(`
      SELECT DISTINCT word, translation
      FROM vocabulary_items
      WHERE user_id = ? AND last_reviewed_at >= ?
      ORDER BY word
      LIMIT 20
    `).bind(data.user.sub, session.started_at).all(),
  ]);

  // Build a short session notes string from structured data (no extra AI call)
  const notes = buildSessionNotes({
    itemsReviewed: session.items_reviewed,
    accuracy,
    abandoned: !!abandoned,
    errors: errorsResult.results ?? [],
    cefrChanged: prevCefr !== newCefr ? { from: prevCefr, to: newCefr } : null,
  });
  if (notes) {
    await env.DB.prepare('UPDATE sessions SET session_notes = ? WHERE id = ?')
      .bind(notes, sessionId).run().catch(() => {});
  }

  return Response.json({
    accuracy,
    itemsReviewed: session.items_reviewed,
    correctCount: session.correct_count,
    errors: errorsResult.results ?? [],
    wordsReviewed: wordsResult.results ?? [],
    cefrLevel: newCefr,
    cefrChanged: prevCefr !== newCefr ? { from: prevCefr, to: newCefr } : null,
  });
}
