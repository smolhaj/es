// Single shared source for short, display-friendly concept labels — used by
// History.jsx, Dashboard.jsx, Session.jsx (frontend), and
// functions/api/sessions/end.js (backend Cloudflare Function; confirmed safe
// to import from src/ the same way functions/api/vocabulary/seed.js already
// does with vocabulary.js). Previously these were 4 separate hand-copied
// maps that drifted out of sync (History.jsx was fixed once already but
// Dashboard.jsx/Session.jsx/end.js weren't) — consolidated here so adding a
// new concept only means updating one file. See functions/_lib/concepts.js
// for the full, longer-form label/cefr/prereqs data this is a short-label
// companion to.
export const CONCEPT_LABELS = {
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
  object_pronoun_order: 'Double object pronouns', se_impersonal: 'Impersonal se',
  infinitive_vs_subjunctive: 'Inf. vs. subjunctive', exclamativas: 'Exclamatory sentences',
  present_perfect: 'Present perfect', pluperfect: 'Pluperfect', future_perfect: 'Future perfect',
  conditional_perfect: 'Conditional perfect', passive_voice: 'Passive voice', passive_se: 'Passive se',
  imperfect_subjunctive: 'Imperfect subjunctive', si_clauses: 'Si-clauses',
  subjunctive_adverbial: 'Subjunctive (adverbial)', comparatives: 'Comparatives',
  ser_estar_participle: 'Ser/estar + participio', diminutives_augmentatives: 'Diminutives',
  relative_pronouns_advanced: 'Relative pronouns (adv.)', adjectives_ser_estar: 'Ser/estar adj. meanings',
  subjunctive_noun_clauses: 'Subjunctive (noun clauses)', subjunctive_adjective_clauses: 'Subjunctive (adj. clauses)',
  gerund_advanced: 'Gerund (advanced)', ser_passive: 'Ser passive', estilo_indirecto: 'Indirect speech',
  nominalisation: 'Nominalisation',
  subjunctive_concessive_intensifiers: 'Concessive intensifiers (por más que)',
  cuantificadores: 'Quantifiers',
  futuro_probabilidad: 'Future probability', condicional_probabilidad: 'Conditional inference',
  perifraseis_avanzadas: 'Advanced periphrases',
  plural_nouns: 'Plural nouns', comparatives_basic: 'Basic comparatives',
  saber_vs_conocer: 'Saber vs. conocer', lo_neutro: 'Neuter lo',
  perfect_subjunctive: 'Present perfect subjunctive', verbos_cambio: 'Verbs of change',
  adjective_position: 'Adjective position', pluperfect_subjunctive: 'Pluperfect subjunctive',
  aunque_concessive: 'Concessive aunque', verbos_preposicionales: 'Verbs with fixed prepositions',
  connectors_contrast: 'Connectors (contrast)', connectors_consequence: 'Connectors (consequence)',
  connectors_addition_sequence: 'Connectors (addition/sequence)', connectors_cause_reason: 'Connectors (cause/reason)',
  reformuladores: 'Reformulators (o sea, es decir)', estructuradores_informacion: 'Information structurers',
  operadores_discursivos: 'Discourse operators (de hecho)', registro_formal_informal: 'Register switching',
  modalizacion_epistemica: 'Epistemic hedging', controladores_contacto: 'Contact controllers (¿verdad?)',
  subjunctive_indefinite_relative: 'Subjunctive (indefinite relative)', subjunctive_rare_triggers: 'Subjunctive (rare triggers)',
  preterito_anterior: 'Pretérito anterior', futuro_subjuntivo_relic: 'Futuro de subjuntivo',
  presente_historico_narrativo: 'Narrative present', dislocacion_topicalizacion: 'Dislocation/topicalization',
  oraciones_hendidas: 'Cleft sentences', inversion_literaria: 'Literary inversion',
  connotacion_denotacion: 'Connotation vs. denotation', pares_registro_lexico: 'Register synonym pairs',
  ironia_doble_sentido: 'Irony & double meaning', implicatura_pragmatica: 'Pragmatic implicature',
  generos_discursivos_formales: 'Formal written genres', referencias_culturales_avanzadas: 'Cultural references',
};
