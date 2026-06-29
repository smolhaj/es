// Grammar concept dependency graph — A1 through B1
// Each node: { id, label, cefr, category, prereqs[], explanationStyles[] }

export const CONCEPTS = {
  // ── A1 ──────────────────────────────────────────────────────────────────
  greeting_basics: {
    id: 'greeting_basics', label: 'Greetings & farewells', cefr: 'A1',
    category: 'vocabulary', prereqs: [],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  numbers_1_20: {
    id: 'numbers_1_20', label: 'Numbers 1–20', cefr: 'A1',
    category: 'vocabulary', prereqs: [],
    explanationStyles: ['example_first', 'rule_first'],
  },
  subject_pronouns: {
    id: 'subject_pronouns', label: 'Subject pronouns', cefr: 'A1',
    category: 'pronouns', prereqs: [],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  noun_gender: {
    id: 'noun_gender', label: 'Noun gender (m/f)', cefr: 'A1',
    category: 'morphology', prereqs: [],
    explanationStyles: ['rule_first', 'pattern', 'contrastive'],
  },
  definite_articles: {
    id: 'definite_articles', label: 'Definite articles (el/la/los/las)', cefr: 'A1',
    category: 'morphology', prereqs: ['noun_gender'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  indefinite_articles: {
    id: 'indefinite_articles', label: 'Indefinite articles (un/una)', cefr: 'A1',
    category: 'morphology', prereqs: ['noun_gender'],
    explanationStyles: ['rule_first', 'example_first'],
  },
  ser_basics: {
    id: 'ser_basics', label: 'Ser (identity, origin, profession)', cefr: 'A1',
    category: 'verb', prereqs: ['subject_pronouns'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first', 'story'],
  },
  estar_basics: {
    id: 'estar_basics', label: 'Estar (location, temporary state)', cefr: 'A1',
    category: 'verb', prereqs: ['subject_pronouns'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first', 'story'],
  },
  present_ar: {
    id: 'present_ar', label: 'Present tense -ar verbs', cefr: 'A1',
    category: 'verb', prereqs: ['subject_pronouns'],
    explanationStyles: ['table', 'rule_first', 'example_first'],
  },
  present_er_ir: {
    id: 'present_er_ir', label: 'Present tense -er/-ir verbs', cefr: 'A1',
    category: 'verb', prereqs: ['present_ar'],
    explanationStyles: ['table', 'rule_first', 'contrastive'],
  },
  adjective_agreement: {
    id: 'adjective_agreement', label: 'Adjective gender/number agreement', cefr: 'A1',
    category: 'morphology', prereqs: ['noun_gender', 'definite_articles'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  question_words: {
    id: 'question_words', label: 'Question words (qué, cómo, dónde…)', cefr: 'A1',
    category: 'syntax', prereqs: ['ser_basics'],
    explanationStyles: ['example_first', 'rule_first'],
  },
  hay: {
    id: 'hay', label: 'Hay (there is/are)', cefr: 'A1',
    category: 'verb', prereqs: ['indefinite_articles'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  numbers_21_100: {
    id: 'numbers_21_100', label: 'Numbers 21–100', cefr: 'A1',
    category: 'vocabulary', prereqs: ['numbers_1_20'],
    explanationStyles: ['pattern', 'example_first'],
  },

  // ── A2 ──────────────────────────────────────────────────────────────────
  ser_vs_estar: {
    id: 'ser_vs_estar', label: 'Ser vs. estar contrast', cefr: 'A2',
    category: 'verb', prereqs: ['ser_basics', 'estar_basics'],
    explanationStyles: ['contrastive', 'rule_first', 'story', 'example_first'],
  },
  reflexive_verbs: {
    id: 'reflexive_verbs', label: 'Reflexive verbs (llamarse, levantarse)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'subject_pronouns'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  gustar_type: {
    id: 'gustar_type', label: 'Gustar-type verbs', cefr: 'A2',
    category: 'verb', prereqs: ['indirect_object_pronouns'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  direct_object_pronouns: {
    id: 'direct_object_pronouns', label: 'Direct object pronouns (lo/la)', cefr: 'A2',
    category: 'pronouns', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  indirect_object_pronouns: {
    id: 'indirect_object_pronouns', label: 'Indirect object pronouns (le/les)', cefr: 'A2',
    category: 'pronouns', prereqs: ['direct_object_pronouns'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  demonstratives: {
    id: 'demonstratives', label: 'Demonstratives (este/ese/aquel)', cefr: 'A2',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  possessives: {
    id: 'possessives', label: 'Possessives (mi/tu/su/nuestro)', cefr: 'A2',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['table', 'rule_first', 'example_first'],
  },
  preterite_regular: {
    id: 'preterite_regular', label: 'Preterite tense (regular)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['table', 'rule_first', 'contrastive', 'example_first'],
  },
  modal_verbs: {
    id: 'modal_verbs', label: 'Modal verbs (poder, querer, deber)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['example_first', 'rule_first', 'table'],
  },
  obligation_infinitive: {
    id: 'obligation_infinitive', label: 'Obligation (tener que / hay que)', cefr: 'A2',
    category: 'verb', prereqs: ['modal_verbs', 'hay'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  time_expressions: {
    id: 'time_expressions', label: 'Time expressions (ayer, hace…)', cefr: 'A2',
    category: 'vocabulary', prereqs: ['preterite_regular'],
    explanationStyles: ['example_first', 'rule_first'],
  },
  present_progressive: {
    id: 'present_progressive', label: 'Present progressive (estar + gerund)', cefr: 'A2',
    category: 'verb', prereqs: ['estar_basics', 'present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  irregular_present: {
    id: 'irregular_present', label: 'Irregular present tense (ir, tener, venir…)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['table', 'pattern', 'example_first'],
  },
  negation: {
    id: 'negation', label: 'Negation & negative words (nada, nadie, nunca)', cefr: 'A2',
    category: 'syntax', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  prepositions_basic: {
    id: 'prepositions_basic', label: 'Basic prepositions (a, de, en, con, sin…)', cefr: 'A2',
    category: 'syntax', prereqs: ['definite_articles', 'present_ar'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },

  // ── B1 ──────────────────────────────────────────────────────────────────
  acabar_de: {
    id: 'acabar_de', label: 'Recent past (acabar de + infinitive)', cefr: 'B1',
    category: 'verb', prereqs: ['preterite_regular', 'modal_verbs'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  llevar_gerund: {
    id: 'llevar_gerund', label: 'Duration (llevar + gerund)', cefr: 'B1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  preterite_irregular: {
    id: 'preterite_irregular', label: 'Preterite irregular (ir/ser/tener)', cefr: 'B1',
    category: 'verb', prereqs: ['preterite_regular'],
    explanationStyles: ['table', 'rule_first', 'pattern', 'story'],
  },
  imperfect: {
    id: 'imperfect', label: 'Imperfect tense (-aba/-ía)', cefr: 'B1',
    category: 'verb', prereqs: ['preterite_regular'],
    explanationStyles: ['rule_first', 'contrastive', 'table', 'story'],
  },
  preterite_vs_imperfect: {
    id: 'preterite_vs_imperfect', label: 'Preterite vs. imperfect', cefr: 'B1',
    category: 'verb', prereqs: ['preterite_irregular', 'imperfect'],
    explanationStyles: ['contrastive', 'story', 'rule_first', 'example_first'],
  },
  future_simple: {
    id: 'future_simple', label: 'Simple future (-é/-ás/-á)', cefr: 'B1',
    category: 'verb', prereqs: ['modal_verbs'],
    explanationStyles: ['table', 'rule_first', 'example_first'],
  },
  conditional: {
    id: 'conditional', label: 'Conditional (-ía)', cefr: 'B1',
    category: 'verb', prereqs: ['future_simple'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  present_subjunctive: {
    id: 'present_subjunctive', label: 'Present subjunctive', cefr: 'B1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'question_words'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive', 'story'],
  },
  imperative: {
    id: 'imperative', label: 'Imperative (commands)', cefr: 'B1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'reflexive_verbs'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  por_vs_para: {
    id: 'por_vs_para', label: 'Por vs. para', cefr: 'B1',
    category: 'prepositions', prereqs: ['preterite_regular'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first', 'story'],
  },
  relative_clauses: {
    id: 'relative_clauses', label: 'Relative clauses (que, quien, donde)', cefr: 'B1',
    category: 'syntax', prereqs: ['question_words', 'present_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },

  // ── B2 ──────────────────────────────────────────────────────────────────
  present_perfect: {
    id: 'present_perfect', label: 'Present perfect (he/has/ha)', cefr: 'B2',
    category: 'verb', prereqs: ['preterite_regular'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  pluperfect: {
    id: 'pluperfect', label: 'Pluperfect (había + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['present_perfect', 'imperfect'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  future_perfect: {
    id: 'future_perfect', label: 'Future perfect (habrá + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['future_simple', 'present_perfect'],
    explanationStyles: ['rule_first', 'example_first'],
  },
  conditional_perfect: {
    id: 'conditional_perfect', label: 'Conditional perfect (habría + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['conditional', 'present_perfect'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  passive_voice: {
    id: 'passive_voice', label: 'Passive voice (ser + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['ser_basics', 'preterite_regular'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  passive_se: {
    id: 'passive_se', label: 'Passive se (se vende, se habla)', cefr: 'B2',
    category: 'verb', prereqs: ['reflexive_verbs', 'passive_voice'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  imperfect_subjunctive: {
    id: 'imperfect_subjunctive', label: 'Imperfect subjunctive (-ara/-iera)', cefr: 'B2',
    category: 'verb', prereqs: ['present_subjunctive', 'imperfect'],
    explanationStyles: ['table', 'rule_first', 'contrastive', 'example_first'],
  },
  si_clauses: {
    id: 'si_clauses', label: 'Si-clauses (conditionals)', cefr: 'B2',
    category: 'syntax', prereqs: ['conditional', 'imperfect_subjunctive'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first', 'story'],
  },
  subjunctive_adverbial: {
    id: 'subjunctive_adverbial', label: 'Subjunctive in adverbial clauses', cefr: 'B2',
    category: 'syntax', prereqs: ['present_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  comparatives: {
    id: 'comparatives', label: 'Comparatives & superlatives', cefr: 'B2',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['rule_first', 'table', 'example_first', 'contrastive'],
  },
  ser_estar_participle: {
    id: 'ser_estar_participle', label: 'Ser/estar + participio contrast', cefr: 'B2',
    category: 'verb', prereqs: ['ser_vs_estar', 'passive_voice'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  diminutives_augmentatives: {
    id: 'diminutives_augmentatives', label: 'Diminutives & augmentatives', cefr: 'B2',
    category: 'morphology', prereqs: ['noun_gender', 'adjective_agreement'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  relative_pronouns_advanced: {
    id: 'relative_pronouns_advanced', label: 'Advanced relative pronouns (cuyo, el cual)', cefr: 'B2',
    category: 'syntax', prereqs: ['relative_clauses'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },

  // ── C1 ──────────────────────────────────────────────────────────────────
  subjunctive_noun_clauses: {
    id: 'subjunctive_noun_clauses', label: 'Subjunctive in noun clauses', cefr: 'C1',
    category: 'syntax', prereqs: ['present_subjunctive', 'imperfect_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  subjunctive_adjective_clauses: {
    id: 'subjunctive_adjective_clauses', label: 'Subjunctive in adjective clauses', cefr: 'C1',
    category: 'syntax', prereqs: ['present_subjunctive', 'relative_clauses'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  gerund_advanced: {
    id: 'gerund_advanced', label: 'Gerund (gerundio) — advanced uses', cefr: 'C1',
    category: 'verb', prereqs: ['reflexive_verbs', 'present_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  ser_passive: {
    id: 'ser_passive', label: 'Ser passive — stylistic variation', cefr: 'C1',
    category: 'verb', prereqs: ['passive_voice', 'ser_estar_participle'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  estilo_indirecto: {
    id: 'estilo_indirecto', label: 'Indirect speech (estilo indirecto)', cefr: 'C1',
    category: 'syntax', prereqs: ['imperfect_subjunctive', 'conditional'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive', 'story'],
  },
  nominalisation: {
    id: 'nominalisation', label: 'Nominalisation (el hecho de que…)', cefr: 'C1',
    category: 'syntax', prereqs: ['subjunctive_noun_clauses'],
    explanationStyles: ['rule_first', 'example_first'],
  },
  subjunctive_temporal: {
    id: 'subjunctive_temporal', label: 'Subjunctive in temporal clauses', cefr: 'C1',
    category: 'syntax', prereqs: ['present_subjunctive', 'subjunctive_adverbial'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  cuantificadores: {
    id: 'cuantificadores', label: 'Quantifiers (bastante, demasiado, cada)', cefr: 'C1',
    category: 'morphology', prereqs: ['adjective_agreement', 'comparatives'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
};

export function getConceptById(id) {
  return CONCEPTS[id] ?? null;
}

export function getPrereqs(conceptId) {
  return CONCEPTS[conceptId]?.prereqs ?? [];
}

// Returns concept IDs where all prereqs are met (mastery_score >= threshold)
export function getReadyConcepts(masteryMap, threshold = 0.6) {
  return Object.values(CONCEPTS)
    .filter(c => c.prereqs.every(p => (masteryMap[p]?.mastery_score ?? 0) >= threshold))
    .map(c => c.id);
}

export function getNextExplanationStyle(conceptId, triedStyles) {
  const styles = CONCEPTS[conceptId]?.explanationStyles ?? ['rule_first'];
  const tried = Array.isArray(triedStyles) ? triedStyles : [];
  const untried = styles.filter(s => !tried.includes(s));
  return untried[0] ?? styles[styles.length - 1];
}
