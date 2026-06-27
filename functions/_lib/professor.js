import { CONCEPTS, getNextExplanationStyle } from './concepts.js';

// Compile a structured professor briefing from DB state (~800-1200 tokens)
export async function compileBriefing(db, userId) {
  const now = new Date().toISOString();

  const [skills, topErrors, fossilized, dueVocab, lastSession, personalCtx] = await Promise.all([
    db.prepare('SELECT skill, cefr_level, accuracy, session_count FROM skill_profiles WHERE user_id = ?')
      .bind(userId).all(),

    db.prepare(`
      SELECT cm.concept_id, cm.mastery_score, cm.error_count, cm.session_error_count,
             cm.sessions_seen, cm.explanation_styles_tried, cm.fossilization_flagged
      FROM concept_mastery cm
      WHERE cm.user_id = ?
      ORDER BY cm.error_count DESC LIMIT 8
    `).bind(userId).all(),

    db.prepare(`
      SELECT concept_id FROM concept_mastery
      WHERE user_id = ? AND fossilization_flagged = 1
    `).bind(userId).all(),

    db.prepare(`
      SELECT COUNT(*) as due_count FROM vocabulary_items
      WHERE user_id = ? AND due_at IS NOT NULL AND due_at <= ?
    `).bind(userId, now).first(),

    db.prepare(`
      SELECT frustration_score, fatigue_signal, items_reviewed, correct_count, overall_accuracy
      FROM sessions WHERE user_id = ? AND ended_at IS NOT NULL
      ORDER BY started_at DESC LIMIT 1
    `).bind(userId).first(),

    db.prepare('SELECT key, value FROM personal_context WHERE user_id = ? LIMIT 20')
      .bind(userId).all(),
  ]);

  const skillMap = {};
  for (const s of skills.results) skillMap[s.skill] = s;

  const masteryMap = {};
  for (const e of topErrors.results) {
    let styles = [];
    try { styles = JSON.parse(e.explanation_styles_tried); } catch {}
    masteryMap[e.concept_id] = { ...e, explanation_styles_tried: styles };
  }

  const lines = ['=== PROFESSOR BRIEFING ==='];

  // Skill levels
  const skillStr = Object.entries(skillMap)
    .map(([k, v]) => `${k}: ${v.cefr_level} (acc ${Math.round((v.accuracy ?? 0) * 100)}%, ${v.session_count} sessions)`)
    .join(' | ');
  lines.push(`SKILLS: ${skillStr || 'No data yet — treat as fresh A1 learner.'}`);

  // FSRS vocab due
  const dueCount = dueVocab?.due_count ?? 0;
  if (dueCount > 0) {
    lines.push(`VOCAB DUE: ${dueCount} item(s) scheduled for SRS review today.`);
  }

  // Top error concepts
  if (topErrors.results.length > 0) {
    lines.push('WEAK SPOTS (by error count):');
    for (const e of topErrors.results) {
      const concept = CONCEPTS[e.concept_id];
      if (!concept) continue;
      let styles = [];
      try { styles = JSON.parse(e.explanation_styles_tried); } catch {}
      const nextStyle = getNextExplanationStyle(e.concept_id, styles);
      lines.push(
        `  - ${concept.label} [${concept.cefr}]: ${e.error_count} errors total, ` +
        `${e.session_error_count} this session, mastery ${Math.round((e.mastery_score ?? 0) * 100)}%. ` +
        `Try: ${nextStyle} explanation style.`
      );
    }
  }

  // Fossilization warnings
  if (fossilized.results.length > 0) {
    const labels = fossilized.results
      .map(f => CONCEPTS[f.concept_id]?.label ?? f.concept_id)
      .join(', ');
    lines.push(`FOSSILIZATION RISK: ${labels}. Errors persist across 3+ sessions — try a different approach.`);
  }

  // Last session signals
  if (lastSession) {
    const frustration = lastSession.frustration_score ?? 0;
    const fatigue = lastSession.fatigue_signal ?? 0;
    if (frustration > 0.5 || fatigue) {
      lines.push(
        `LAST SESSION SIGNALS: frustration=${(frustration * 100).toFixed(0)}%` +
        (fatigue ? ', fatigue detected' : '') +
        `. Consider starting with easier material.`
      );
    }
    const acc = lastSession.overall_accuracy;
    if (acc != null) {
      lines.push(`LAST SESSION: ${lastSession.items_reviewed} items, ${Math.round(acc * 100)}% accuracy.`);
    }
  }

  // Personal context
  if (personalCtx.results.length > 0) {
    lines.push('PERSONAL CONTEXT:');
    for (const ctx of personalCtx.results) {
      lines.push(`  ${ctx.key}: ${ctx.value}`);
    }
  }

  lines.push('=== END BRIEFING ===');

  return lines.join('\n');
}
