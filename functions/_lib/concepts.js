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
    explanationStyles: ['example_first', 'rule_first', 'story'],
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
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
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
  muy_vs_mucho: {
    id: 'muy_vs_mucho', label: 'Muy vs. mucho', cefr: 'A1',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  question_words: {
    id: 'question_words', label: 'Question words (qué, cómo, dónde…)', cefr: 'A1',
    category: 'syntax', prereqs: ['ser_basics'],
    explanationStyles: ['example_first', 'rule_first', 'table'],
  },
  hay: {
    id: 'hay', label: 'Hay (there is/are)', cefr: 'A1',
    category: 'verb', prereqs: ['indefinite_articles'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  weather_expressions: {
    id: 'weather_expressions', label: 'Weather expressions (hace calor, llueve, está nublado)', cefr: 'A1',
    category: 'vocabulary', prereqs: ['estar_basics', 'hay'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  numbers_21_100: {
    id: 'numbers_21_100', label: 'Numbers 21–100', cefr: 'A1',
    category: 'vocabulary', prereqs: ['numbers_1_20'],
    explanationStyles: ['pattern', 'example_first', 'story'],
  },
  ordinal_numbers: {
    id: 'ordinal_numbers', label: 'Ordinal numbers (primero–décimo)', cefr: 'A1',
    category: 'morphology', prereqs: ['numbers_1_20'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  plural_nouns: {
    id: 'plural_nouns', label: 'Forming plural nouns (-s/-es/-ces)', cefr: 'A1',
    category: 'morphology', prereqs: ['noun_gender'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  irregular_present_core: {
    id: 'irregular_present_core', label: 'Core irregular present verbs (ser, tener, ir)', cefr: 'A1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['table', 'pattern', 'example_first'],
  },
  gustar_basico: {
    id: 'gustar_basico', label: 'Gustar (basic likes/dislikes)', cefr: 'A1',
    category: 'verb', prereqs: ['subject_pronouns'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  prepositions_core: {
    id: 'prepositions_core', label: 'Core prepositions (a, de, en)', cefr: 'A1',
    category: 'syntax', prereqs: ['definite_articles', 'present_ar'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  modal_verbs_core: {
    id: 'modal_verbs_core', label: 'Core modal verbs (poder, querer)', cefr: 'A1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['example_first', 'rule_first', 'table'],
  },
  obligation_infinitive: {
    id: 'obligation_infinitive', label: 'Obligation (tener que / hay que)', cefr: 'A1',
    category: 'verb', prereqs: ['irregular_present_core', 'hay'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  near_future: {
    id: 'near_future', label: 'Near future (ir a + infinitive)', cefr: 'A1',
    category: 'verb', prereqs: ['irregular_present_core', 'prepositions_core'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },

  // ── A2 ──────────────────────────────────────────────────────────────────
  ser_vs_estar: {
    id: 'ser_vs_estar', label: 'Ser vs. estar contrast', cefr: 'A2',
    category: 'verb', prereqs: ['ser_basics', 'estar_basics'],
    explanationStyles: ['contrastive', 'rule_first', 'story', 'example_first'],
  },
  reflexive_verbs: {
    id: 'reflexive_verbs', label: 'Reflexive verbs (llamarse, levantarse)', cefr: 'A1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'subject_pronouns'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  gustar_type: {
    id: 'gustar_type', label: 'Gustar-type verbs (encantar, doler, molestar, parecer…)', cefr: 'A2',
    category: 'verb', prereqs: ['indirect_object_pronouns', 'gustar_basico'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  restaurant_ordering: {
    id: 'restaurant_ordering', label: 'Ordering at a café/restaurant (quisiera, la cuenta)', cefr: 'A2',
    category: 'vocabulary', prereqs: ['gustar_basico', 'numbers_1_20'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
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
    id: 'demonstratives', label: 'Demonstratives (este/ese/aquel)', cefr: 'A1',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  possessives: {
    id: 'possessives', label: 'Possessives (mi/tu/su/nuestro)', cefr: 'A1',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['table', 'rule_first', 'example_first'],
  },
  preterite_regular: {
    id: 'preterite_regular', label: 'Preterite tense (regular)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['table', 'rule_first', 'contrastive', 'example_first'],
  },
  modal_verbs: {
    id: 'modal_verbs', label: 'Modal verbs — deber (obligation/probability)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'modal_verbs_core'],
    explanationStyles: ['example_first', 'rule_first', 'table'],
  },
  time_expressions: {
    id: 'time_expressions', label: 'Time expressions (ayer, hace…)', cefr: 'A2',
    category: 'vocabulary', prereqs: ['preterite_regular'],
    explanationStyles: ['example_first', 'rule_first', 'contrastive'],
  },
  phone_plans: {
    id: 'phone_plans', label: 'Phone calls & making plans', cefr: 'A2',
    category: 'vocabulary', prereqs: ['near_future', 'time_expressions'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  present_progressive: {
    id: 'present_progressive', label: 'Present progressive (estar + gerund)', cefr: 'A2',
    category: 'verb', prereqs: ['estar_basics', 'present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  irregular_present: {
    id: 'irregular_present', label: 'Irregular present tense (venir, hacer, poner, salir…)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'irregular_present_core'],
    explanationStyles: ['table', 'pattern', 'example_first'],
  },
  negation: {
    id: 'negation', label: 'Negation & negative words (nada, nadie, nunca)', cefr: 'A2',
    category: 'syntax', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  prepositions_basic: {
    id: 'prepositions_basic', label: 'Extended prepositions (con, sin, por, para, entre…)', cefr: 'A2',
    category: 'syntax', prereqs: ['definite_articles', 'present_ar', 'prepositions_core'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  adverbs_formation: {
    id: 'adverbs_formation', label: 'Adverbs formation (-mente)', cefr: 'A2',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  comparatives_basic: {
    id: 'comparatives_basic', label: 'Basic comparatives (más/menos…que, tan…como)', cefr: 'A2',
    category: 'morphology', prereqs: ['adjective_agreement'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  shopping_language: {
    id: 'shopping_language', label: 'Shopping: prices, sizes, colors, trying things on', cefr: 'A2',
    category: 'vocabulary', prereqs: ['direct_object_pronouns', 'comparatives_basic'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  imperative_affirmative: {
    id: 'imperative_affirmative', label: 'Affirmative informal commands (tú)', cefr: 'A2',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  relative_clauses_core: {
    id: 'relative_clauses_core', label: 'Core relative clauses (que, donde)', cefr: 'A2',
    category: 'syntax', prereqs: ['question_words'],
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
    id: 'preterite_irregular', label: 'Preterite irregular (ir/ser/tener)', cefr: 'A2',
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
  hotel_travel: {
    id: 'hotel_travel', label: 'Hotel check-in & travel logistics', cefr: 'B1',
    category: 'vocabulary', prereqs: ['preterite_vs_imperfect'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
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
    id: 'imperative', label: 'Imperative — negative & formal commands, clitic placement', cefr: 'B1',
    category: 'verb', prereqs: ['present_ar', 'present_er_ir', 'reflexive_verbs', 'imperative_affirmative'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  directions_transport: {
    id: 'directions_transport', label: 'Asking for directions & public transport', cefr: 'B1',
    category: 'vocabulary', prereqs: ['imperative', 'estar_basics'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  doctor_pharmacy: {
    id: 'doctor_pharmacy', label: 'At the doctor & pharmacy', cefr: 'B1',
    category: 'vocabulary', prereqs: ['gustar_type', 'present_subjunctive'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  emergencies: {
    id: 'emergencies', label: 'Emergencies & getting help', cefr: 'B1',
    category: 'vocabulary', prereqs: ['imperative'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  bank_post_office: {
    id: 'bank_post_office', label: 'At the bank & post office', cefr: 'B1',
    category: 'vocabulary', prereqs: ['present_perfect'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  por_vs_para: {
    id: 'por_vs_para', label: 'Por vs. para', cefr: 'B1',
    category: 'prepositions', prereqs: ['preterite_regular'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first', 'story'],
  },
  relative_clauses: {
    id: 'relative_clauses', label: 'Relative clauses — quien, subjunctive-in-relative nuance', cefr: 'B1',
    category: 'syntax', prereqs: ['question_words', 'present_subjunctive', 'relative_clauses_core'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  object_pronoun_order: {
    id: 'object_pronoun_order', label: 'Double object pronouns (me lo, se lo)', cefr: 'B1',
    category: 'pronouns', prereqs: ['direct_object_pronouns', 'indirect_object_pronouns'],
    explanationStyles: ['rule_first', 'table', 'contrastive'],
  },
  se_impersonal: {
    id: 'se_impersonal', label: 'Impersonal se (Se habla, Se vive)', cefr: 'B1',
    category: 'pronouns', prereqs: ['reflexive_verbs', 'obligation_infinitive'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  infinitive_vs_subjunctive: {
    id: 'infinitive_vs_subjunctive', label: 'Infinitive vs. subjunctive (same/different subject)', cefr: 'B1',
    category: 'verb', prereqs: ['present_subjunctive', 'modal_verbs'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  exclamativas: {
    id: 'exclamativas', label: 'Exclamatory sentences (¡Qué!, ¡Cuánto!)', cefr: 'B1',
    category: 'syntax', prereqs: ['adjective_agreement', 'question_words'],
    explanationStyles: ['example_first', 'rule_first', 'pattern'],
  },
  saber_vs_conocer: {
    id: 'saber_vs_conocer', label: 'Saber vs. conocer', cefr: 'A2',
    category: 'verb', prereqs: ['irregular_present'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  lo_neutro: {
    id: 'lo_neutro', label: 'Neuter lo (lo + adjective, lo que)', cefr: 'B1',
    category: 'syntax', prereqs: ['adjective_agreement', 'relative_clauses'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  estilo_indirecto_basico: {
    id: 'estilo_indirecto_basico', label: 'Basic reported speech (dijo que...)', cefr: 'B1',
    category: 'syntax', prereqs: ['imperfect'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  expresiones_probabilidad_basica: {
    id: 'expresiones_probabilidad_basica', label: 'Certainty & doubt (deber de, es posible que)', cefr: 'B1',
    category: 'discourse', prereqs: ['present_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  imperfect_subjunctive: {
    id: 'imperfect_subjunctive', label: 'Imperfect subjunctive (-ara/-iera)', cefr: 'B1',
    category: 'verb', prereqs: ['present_subjunctive', 'imperfect'],
    explanationStyles: ['table', 'rule_first', 'contrastive', 'example_first'],
  },
  si_clauses: {
    id: 'si_clauses', label: 'Si-clauses — hypothetical conditionals (si tuviera... iría...)', cefr: 'B1',
    category: 'syntax', prereqs: ['conditional', 'imperfect_subjunctive'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first', 'story'],
  },

  // ── B2 ──────────────────────────────────────────────────────────────────
  present_perfect: {
    id: 'present_perfect', label: 'Present perfect (he/has/ha)', cefr: 'A2',
    category: 'verb', prereqs: ['preterite_regular'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  small_talk: {
    id: 'small_talk', label: 'Small talk & catching up', cefr: 'A2',
    category: 'vocabulary', prereqs: ['preterite_regular', 'present_perfect'],
    explanationStyles: ['example_first', 'rule_first', 'story'],
  },
  pluperfect: {
    id: 'pluperfect', label: 'Pluperfect (había + participio)', cefr: 'B1',
    category: 'verb', prereqs: ['present_perfect', 'imperfect'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  future_perfect: {
    id: 'future_perfect', label: 'Future perfect (habrá + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['future_simple', 'present_perfect'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
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
    id: 'passive_se', label: 'Passive se (se vende, se habla)', cefr: 'B1',
    category: 'verb', prereqs: ['reflexive_verbs'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  subjunctive_adverbial: {
    id: 'subjunctive_adverbial', label: 'Subjunctive in adverbial clauses', cefr: 'B1',
    category: 'syntax', prereqs: ['present_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  comparatives: {
    id: 'comparatives', label: 'Comparatives & superlatives', cefr: 'B1',
    category: 'morphology', prereqs: ['adjective_agreement', 'comparatives_basic'],
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
  adjectives_ser_estar: {
    id: 'adjectives_ser_estar', label: 'Adjectives with different ser/estar meanings', cefr: 'B2',
    category: 'verb', prereqs: ['ser_vs_estar', 'adjective_agreement'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first', 'table'],
  },
  perfect_subjunctive: {
    id: 'perfect_subjunctive', label: 'Present perfect subjunctive (haya + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['present_subjunctive', 'present_perfect'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  verbos_cambio: {
    id: 'verbos_cambio', label: 'Verbs of change (ponerse, volverse, hacerse, llegar a ser)', cefr: 'B2',
    category: 'verb', prereqs: ['ser_vs_estar', 'reflexive_verbs'],
    explanationStyles: ['contrastive', 'example_first', 'rule_first'],
  },
  adjective_position: {
    id: 'adjective_position', label: 'Adjective position (before/after the noun)', cefr: 'B2',
    category: 'morphology', prereqs: ['adjective_agreement', 'comparatives'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  conectores_argumentativos_basicos: {
    id: 'conectores_argumentativos_basicos', label: 'Basic argumentative connectors (pero, sin embargo, por eso)', cefr: 'B2',
    category: 'discourse', prereqs: ['comparatives'],
    explanationStyles: ['contrastive', 'example_first', 'table'],
  },
  controladores_contacto: {
    id: 'controladores_contacto', label: 'Contact controllers (¿verdad?, fíjate, oye)', cefr: 'B2',
    category: 'discourse', prereqs: [],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  registro_formal_correspondencia: {
    id: 'registro_formal_correspondencia', label: 'Formal correspondence & polite requests', cefr: 'B2',
    category: 'discourse', prereqs: ['conditional'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  reformuladores_basico: {
    id: 'reformuladores_basico', label: 'Basic reformulators (o sea, es decir)', cefr: 'B2',
    category: 'discourse', prereqs: ['conectores_argumentativos_basicos'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },
  operadores_discursivos: {
    id: 'operadores_discursivos', label: 'Discourse operators (de hecho, en realidad, por cierto)', cefr: 'B2',
    category: 'discourse', prereqs: ['reformuladores_basico'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  genero_informe: {
    id: 'genero_informe', label: 'Formal genre: the informe (report)', cefr: 'B2',
    category: 'discourse', prereqs: ['registro_formal_correspondencia'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },

  // ── C1 ──────────────────────────────────────────────────────────────────
  subjunctive_noun_clauses: {
    id: 'subjunctive_noun_clauses', label: 'Subjunctive in noun clauses', cefr: 'C1',
    category: 'syntax', prereqs: ['present_subjunctive', 'imperfect_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  subjunctive_adjective_clauses: {
    id: 'subjunctive_adjective_clauses', label: 'Subjunctive in adjective clauses', cefr: 'B2',
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
    category: 'syntax', prereqs: ['imperfect_subjunctive', 'conditional', 'estilo_indirecto_basico'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive', 'story'],
  },
  nominalisation: {
    id: 'nominalisation', label: 'Nominalisation (el hecho de que…)', cefr: 'C1',
    category: 'syntax', prereqs: ['subjunctive_noun_clauses'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },
  subjunctive_concessive_intensifiers: {
    id: 'subjunctive_concessive_intensifiers', label: 'Concessive intensifiers (por más/mucho que)', cefr: 'C1',
    category: 'syntax', prereqs: ['aunque_concessive', 'present_subjunctive'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  cuantificadores: {
    id: 'cuantificadores', label: 'Quantifiers (bastante, demasiado, cada)', cefr: 'B1',
    category: 'morphology', prereqs: ['adjective_agreement', 'comparatives'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  superlative_absolute: {
    id: 'superlative_absolute', label: 'Absolute superlative (-ísimo)', cefr: 'B1',
    category: 'morphology', prereqs: ['adjective_agreement', 'comparatives_basic'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  futuro_probabilidad: {
    id: 'futuro_probabilidad', label: 'Future for probability (Serán las diez)', cefr: 'B1',
    category: 'verb', prereqs: ['future_simple', 'conditional'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  condicional_probabilidad: {
    id: 'condicional_probabilidad', label: 'Conditional for past inference (Tendría 30 años)', cefr: 'B2',
    category: 'verb', prereqs: ['conditional', 'futuro_probabilidad'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  perifraseis_avanzadas: {
    id: 'perifraseis_avanzadas', label: 'Advanced verb periphrases (soler, ponerse a…)', cefr: 'B1',
    category: 'verb', prereqs: ['acabar_de', 'llevar_gerund', 'present_subjunctive'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  pluperfect_subjunctive: {
    id: 'pluperfect_subjunctive', label: 'Pluperfect subjunctive (hubiera/hubiese + participio)', cefr: 'B2',
    category: 'verb', prereqs: ['imperfect_subjunctive', 'pluperfect'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first', 'story'],
  },
  aunque_concessive: {
    id: 'aunque_concessive', label: 'Concessive clauses with aunque (indicative vs. subjunctive)', cefr: 'B2',
    category: 'syntax', prereqs: ['present_subjunctive', 'subjunctive_adverbial'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },
  verbos_preposicionales: {
    id: 'verbos_preposicionales', label: 'Verbs with fixed prepositions (pensar en, soñar con…)', cefr: 'B1',
    category: 'prepositions', prereqs: ['prepositions_basic', 'por_vs_para'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },

  // ── C1 (Connectors & Cohesion — foundation for C2 discourse work) ──────
  connectors_contrast: {
    id: 'connectors_contrast', label: 'Contrast connectors — formal register nuance (sin embargo, no obstante, en cambio)', cefr: 'C1',
    category: 'discourse', prereqs: ['aunque_concessive', 'conectores_argumentativos_basicos'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  connectors_consequence: {
    id: 'connectors_consequence', label: 'Consequence connectors — formal register nuance (por lo tanto, así que, de ahí que)', cefr: 'C1',
    category: 'discourse', prereqs: ['connectors_contrast', 'conectores_argumentativos_basicos'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },
  connectors_addition_sequence: {
    id: 'connectors_addition_sequence', label: 'Addition & sequence connectors — formal register nuance (además, es más, en primer/último lugar)', cefr: 'C1',
    category: 'discourse', prereqs: ['connectors_contrast', 'conectores_argumentativos_basicos'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },
  connectors_cause_reason: {
    id: 'connectors_cause_reason', label: 'Cause/reason connectors — formal register nuance (ya que, puesto que, dado que)', cefr: 'C1',
    category: 'discourse', prereqs: ['connectors_consequence', 'conectores_argumentativos_basicos'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  estructuradores_informacion: {
    id: 'estructuradores_informacion', label: 'Information structurers (por una parte…por otra, en primer lugar…en definitiva)', cefr: 'C1',
    category: 'discourse', prereqs: ['connectors_addition_sequence'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  registro_formal_informal: {
    id: 'registro_formal_informal', label: 'Register switching (formal, informal, colloquial, technical)', cefr: 'C1',
    category: 'discourse', prereqs: ['operadores_discursivos'],
    explanationStyles: ['contrastive', 'rule_first', 'example_first'],
  },

  // ── C2 ──────────────────────────────────────────────────────────────────
  reformuladores: {
    id: 'reformuladores', label: 'Reformulators — self-correction (mejor dicho, más bien)', cefr: 'C2',
    category: 'discourse', prereqs: ['connectors_addition_sequence', 'reformuladores_basico'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },
  modalizacion_epistemica: {
    id: 'modalizacion_epistemica', label: 'Epistemic modalization & hedging (al parecer, se supone que, presuntamente)', cefr: 'C2',
    category: 'discourse', prereqs: ['futuro_probabilidad', 'condicional_probabilidad'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  subjunctive_indefinite_relative: {
    id: 'subjunctive_indefinite_relative', label: 'Indefinite relative subjunctive (quienquiera que, dondequiera que, comoquiera que)', cefr: 'C2',
    category: 'syntax', prereqs: ['subjunctive_adjective_clauses'],
    explanationStyles: ['rule_first', 'example_first', 'pattern'],
  },
  subjunctive_rare_triggers: {
    id: 'subjunctive_rare_triggers', label: 'Rare subjunctive triggers (ni que, por si + subjunctive, que yo sepa)', cefr: 'C2',
    category: 'syntax', prereqs: ['subjunctive_noun_clauses'],
    explanationStyles: ['rule_first', 'contrastive', 'example_first'],
  },
  preterito_anterior: {
    id: 'preterito_anterior', label: 'Pretérito anterior — literary compound past (hubo cantado)', cefr: 'C2',
    category: 'verb', prereqs: ['pluperfect'],
    explanationStyles: ['rule_first', 'example_first', 'table'],
  },
  futuro_subjuntivo_relic: {
    id: 'futuro_subjuntivo_relic', label: 'Futuro de subjuntivo — legal/literary relic tense (sea como fuere)', cefr: 'C2',
    category: 'verb', prereqs: ['imperfect_subjunctive'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  presente_historico_narrativo: {
    id: 'presente_historico_narrativo', label: 'Historic/narrative present & free indirect style', cefr: 'C2',
    category: 'verb', prereqs: ['estilo_indirecto'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  dislocacion_topicalizacion: {
    id: 'dislocacion_topicalizacion', label: 'Dislocation & topicalization for emphasis', cefr: 'C2',
    category: 'syntax', prereqs: ['object_pronoun_order'],
    explanationStyles: ['rule_first', 'example_first', 'contrastive'],
  },
  oraciones_hendidas: {
    id: 'oraciones_hendidas', label: 'Cleft sentences (lo que pasa es que…, lo que hizo fue…)', cefr: 'C2',
    category: 'syntax', prereqs: ['lo_neutro'],
    explanationStyles: ['rule_first', 'pattern', 'example_first'],
  },
  inversion_literaria: {
    id: 'inversion_literaria', label: 'Literary subject-verb inversion', cefr: 'C2',
    category: 'syntax', prereqs: ['dislocacion_topicalizacion'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  connotacion_denotacion: {
    id: 'connotacion_denotacion', label: 'Connotation vs. denotation', cefr: 'C2',
    category: 'vocabulary', prereqs: [],
    explanationStyles: ['contrastive', 'example_first', 'rule_first'],
  },
  pares_registro_lexico: {
    id: 'pares_registro_lexico', label: 'Register-marked synonym pairs (coche/vehículo/carro)', cefr: 'C2',
    category: 'vocabulary', prereqs: ['registro_formal_informal'],
    explanationStyles: ['contrastive', 'table', 'example_first'],
  },
  ironia_doble_sentido: {
    id: 'ironia_doble_sentido', label: 'Irony, sarcasm & double meaning', cefr: 'C2',
    category: 'vocabulary', prereqs: ['connotacion_denotacion'],
    explanationStyles: ['example_first', 'story', 'contrastive'],
  },
  implicatura_pragmatica: {
    id: 'implicatura_pragmatica', label: 'Pragmatic implicature (what\'s meant vs. what\'s said)', cefr: 'C2',
    category: 'discourse', prereqs: ['ironia_doble_sentido'],
    explanationStyles: ['rule_first', 'example_first', 'story'],
  },
  generos_discursivos_formales: {
    id: 'generos_discursivos_formales', label: 'Formal written genres — ensayo argumentativo', cefr: 'C2',
    category: 'discourse', prereqs: ['estructuradores_informacion', 'genero_informe'],
    explanationStyles: ['rule_first', 'table', 'example_first'],
  },
  referencias_culturales_avanzadas: {
    id: 'referencias_culturales_avanzadas', label: 'Advanced cultural references & allusions', cefr: 'C2',
    category: 'vocabulary', prereqs: [],
    explanationStyles: ['example_first', 'story', 'rule_first'],
  },
};

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
