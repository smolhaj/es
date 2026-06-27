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
  time_expressions: {
    id: 'time_expressions', label: 'Time expressions (ayer, hace…)', cefr: 'A2',
    category: 'vocabulary', prereqs: ['preterite_regular'],
    explanationStyles: ['example_first', 'rule_first'],
  },

  // ── B1 ──────────────────────────────────────────────────────────────────
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
