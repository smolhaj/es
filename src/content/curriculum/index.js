// Structured "Get Started" curriculum — thematic units mapped onto the 79
// tracked grammar concepts (see functions/_lib/concepts.js), CEFR-ordered.
// Each unit with written content lives in its own file (unitNN-slug.js) and
// is registered in CONTENT below; units without a file yet render as
// "coming soon" using only their metadata. See ES.md's "Pedagogical
// principles" section for the rules unit content must follow.

import whySpanish from './unit00-why-spanish.js';
import sayingHello from './unit01-saying-hello.js';
import numbersTime from './unit02-numbers-time.js';
import peopleThings from './unit03-people-things.js';
import whoYouAre from './unit04-who-you-are.js';
import whereYouAre from './unit05-where-you-are.js';
import everydayActions from './unit06-everyday-actions.js';
import askingQuestions from './unit07-asking-questions.js';
import dailyRoutine from './unit08-daily-routine.js';
import likesDislikes from './unit09-likes-dislikes.js';
import peopleAroundYou from './unit10-people-around-you.js';
import whatHappened from './unit11-what-happened.js';
import obligationsRequests from './unit12-obligations-requests.js';
import rightNowSoon from './unit13-right-now-soon.js';
import comparingDescribing from './unit14-comparing-describing.js';
import irregularPresent from './unit15-irregular-present.js';
import recentOngoing from './unit16-recent-ongoing.js';
import pastInDetail from './unit17-past-in-detail.js';
import futureHypotheticals from './unit18-future-hypotheticals.js';
import opinionsCommands from './unit19-opinions-commands.js';
import nuanceConnection from './unit20-nuance-connection.js';
import efficiencyEmphasis from './unit21-efficiency-emphasis.js';
import perfectTenses from './unit22-perfect-tenses.js';
import passiveImpersonal from './unit23-passive-impersonal.js';
import subjunctiveDeepDive from './unit24-subjunctive-deep-dive.js';
import fineDetails from './unit25-fine-details.js';
import subjunctiveLimits from './unit26-subjunctive-limits.js';
import reportedSpeech from './unit27-reported-speech.js';
import probabilityAspect from './unit28-probability-aspect.js';
import fixedExpressions from './unit29-fixed-expressions.js';

const CONTENT = {
  'why-spanish': whySpanish,
  'saying-hello': sayingHello,
  'numbers-time': numbersTime,
  'people-things': peopleThings,
  'who-you-are': whoYouAre,
  'where-you-are': whereYouAre,
  'everyday-actions': everydayActions,
  'asking-questions': askingQuestions,
  'daily-routine': dailyRoutine,
  'likes-dislikes': likesDislikes,
  'people-around-you': peopleAroundYou,
  'what-happened': whatHappened,
  'obligations-requests': obligationsRequests,
  'right-now-soon': rightNowSoon,
  'comparing-describing': comparingDescribing,
  'irregular-present': irregularPresent,
  'recent-ongoing': recentOngoing,
  'past-in-detail': pastInDetail,
  'future-hypotheticals': futureHypotheticals,
  'opinions-commands': opinionsCommands,
  'nuance-connection': nuanceConnection,
  'efficiency-emphasis': efficiencyEmphasis,
  'perfect-tenses': perfectTenses,
  'passive-impersonal': passiveImpersonal,
  'subjunctive-deep-dive': subjunctiveDeepDive,
  'fine-details': fineDetails,
  'subjunctive-limits': subjunctiveLimits,
  'reported-speech': reportedSpeech,
  'probability-aspect': probabilityAspect,
  'fixed-expressions': fixedExpressions,
};

export const UNIT_METADATA = [
  // Orientation — no grammar, just context
  { id: 'why-spanish', order: 0, level: 'A1', title: 'Why Spanish?',
    concepts: [],
    summary: '520 million voices, 20+ countries, one language — why it\'s worth learning in 2026.' },
  // A1 — Absolute Basics
  { id: 'saying-hello', order: 1, level: 'A1', title: 'Saying Hello',
    concepts: ['greeting_basics', 'subject_pronouns'],
    summary: 'Greet people, say goodbye, and use the right word for "you" and "I".' },
  { id: 'numbers-time', order: 2, level: 'A1', title: 'Numbers & Time',
    concepts: ['numbers_1_20', 'numbers_21_100'],
    summary: 'Count, tell time, and exchange phone numbers or prices.' },
  { id: 'people-things', order: 3, level: 'A1', title: 'People & Things',
    concepts: ['noun_gender', 'plural_nouns', 'definite_articles', 'indefinite_articles'],
    summary: 'Every Spanish noun has a gender — learn to spot it, make it plural, and use the right article.' },
  { id: 'who-you-are', order: 4, level: 'A1', title: 'Who You Are',
    concepts: ['ser_basics', 'adjective_agreement'],
    summary: 'Describe yourself and others with ser, and make adjectives agree.' },
  { id: 'where-you-are', order: 5, level: 'A1', title: 'Where You Are',
    concepts: ['estar_basics', 'hay'],
    summary: 'Talk about location with estar, and say what there is with hay.' },
  { id: 'everyday-actions', order: 6, level: 'A1', title: 'Everyday Actions',
    concepts: ['present_ar', 'present_er_ir'],
    summary: 'Conjugate regular -ar, -er, and -ir verbs in the present tense.' },
  { id: 'asking-questions', order: 7, level: 'A1', title: 'Asking Questions',
    concepts: ['question_words'],
    summary: 'Qué, quién, cómo, dónde, cuándo, por qué — ask about anything.' },

  // A2 — Building Fluency
  { id: 'daily-routine', order: 8, level: 'A2', title: 'Your Daily Routine',
    concepts: ['reflexive_verbs', 'possessives'],
    summary: 'Describe your routine with reflexive verbs and say what belongs to whom.' },
  { id: 'likes-dislikes', order: 9, level: 'A2', title: 'Likes & Dislikes',
    concepts: ['gustar_type', 'demonstratives'],
    summary: 'Gustar works backwards from English — learn to say what you like.' },
  { id: 'people-around-you', order: 10, level: 'A2', title: 'People & Things Around You',
    concepts: ['direct_object_pronouns', 'indirect_object_pronouns'],
    summary: 'Replace nouns with pronouns so you stop repeating yourself.' },
  { id: 'what-happened', order: 11, level: 'A2', title: 'What Happened',
    concepts: ['preterite_regular', 'negation'],
    summary: 'Talk about completed past events and say what did NOT happen.' },
  { id: 'obligations-requests', order: 12, level: 'A2', title: 'Obligations & Requests',
    concepts: ['modal_verbs', 'obligation_infinitive'],
    summary: 'Say what you can, want, or have to do.' },
  { id: 'right-now-soon', order: 13, level: 'A2', title: 'Right Now & Soon',
    concepts: ['present_progressive', 'near_future', 'time_expressions'],
    summary: 'What\'s happening right now, what\'s about to happen, and since when.' },
  { id: 'comparing-describing', order: 14, level: 'A2', title: 'Comparing & Describing',
    concepts: ['ser_vs_estar', 'adverbs_formation', 'comparatives_basic', 'prepositions_basic'],
    summary: 'The famous ser-vs-estar contrast, comparing things with más/tan, adverbs, and basic prepositions.' },
  { id: 'irregular-present', order: 15, level: 'A2', title: 'Irregular Verbs in the Present',
    concepts: ['irregular_present'],
    summary: 'The high-frequency irregular verbs every conversation needs.' },

  // B1 — Expressing Yourself
  { id: 'recent-ongoing', order: 16, level: 'B1', title: 'Recent & Ongoing Actions',
    concepts: ['acabar_de', 'llevar_gerund'],
    summary: 'Say what you just did, and how long you\'ve been doing something.' },
  { id: 'past-in-detail', order: 17, level: 'B1', title: 'The Past in Detail',
    concepts: ['preterite_irregular', 'imperfect', 'preterite_vs_imperfect'],
    summary: 'Two past tenses, one clear rule for choosing between them.' },
  { id: 'future-hypotheticals', order: 18, level: 'B1', title: 'Future & Hypotheticals',
    concepts: ['future_simple', 'conditional'],
    summary: 'What will happen, and what would happen.' },
  { id: 'opinions-commands', order: 19, level: 'B1', title: 'Opinions & Commands',
    concepts: ['present_subjunctive', 'imperative'],
    summary: 'The subjunctive mood and giving direct commands.' },
  { id: 'nuance-connection', order: 20, level: 'B1', title: 'Nuance & Connection',
    concepts: ['por_vs_para', 'relative_clauses', 'saber_vs_conocer', 'lo_neutro'],
    summary: 'The trickiest small words in Spanish, finally explained clearly.' },
  { id: 'efficiency-emphasis', order: 21, level: 'B1', title: 'Efficiency & Emphasis',
    concepts: ['object_pronoun_order', 'se_impersonal', 'infinitive_vs_subjunctive', 'exclamativas'],
    summary: 'Stack your pronouns, drop the subject Spanish already knows, and say things with real feeling.' },

  // B2 — Advanced Structures
  { id: 'perfect-tenses', order: 22, level: 'B2', title: 'Perfect Tenses',
    concepts: ['present_perfect', 'pluperfect', 'future_perfect', 'conditional_perfect'],
    summary: 'Have done, had done, will have done, would have done.' },
  { id: 'passive-impersonal', order: 23, level: 'B2', title: 'Passive & Impersonal',
    concepts: ['passive_voice', 'passive_se', 'ser_estar_participle'],
    summary: 'How Spanish avoids naming who did something.' },
  { id: 'subjunctive-deep-dive', order: 24, level: 'B2', title: 'Subjunctive Deep Dive',
    concepts: ['imperfect_subjunctive', 'si_clauses', 'subjunctive_adverbial', 'perfect_subjunctive'],
    summary: 'Hypotheticals, wishes, and if-clauses in the past.' },
  { id: 'fine-details', order: 25, level: 'B2', title: 'Fine Details',
    concepts: ['comparatives', 'diminutives_augmentatives', 'relative_pronouns_advanced', 'adjectives_ser_estar', 'adjective_position', 'verbos_cambio'],
    summary: 'The polish that separates advanced learners from natives.' },

  // C1 — Near-Native Precision
  { id: 'subjunctive-limits', order: 26, level: 'C1', title: 'Subjunctive at Its Limits',
    concepts: ['subjunctive_noun_clauses', 'subjunctive_adjective_clauses', 'subjunctive_concessive_intensifiers', 'pluperfect_subjunctive'],
    summary: 'Doubt, unknown antecedents, concessive intensifiers, and unreal pasts — the subjunctive\'s full range.' },
  { id: 'reported-speech', order: 27, level: 'C1', title: 'Reported Speech & Nominalisation',
    concepts: ['estilo_indirecto', 'nominalisation', 'gerund_advanced'],
    summary: 'Report what someone said with the right tense shift, and turn whole ideas into noun phrases.' },
  { id: 'probability-aspect', order: 28, level: 'C1', title: 'Probability & Ongoing Action',
    concepts: ['futuro_probabilidad', 'condicional_probabilidad', 'perifraseis_avanzadas'],
    summary: 'Guess the time or someone\'s age without saying "probablemente," and master soler, ponerse a, and more.' },
  { id: 'fixed-expressions', order: 29, level: 'C1', title: 'Passive, Concession & Fixed Expressions',
    concepts: ['ser_passive', 'aunque_concessive', 'verbos_preposicionales', 'cuantificadores'],
    summary: 'Formal passive voice, aunque\'s mood switch, verbs with fixed prepositions, and precise quantifiers.' },
];

export function getUnit(id) {
  const meta = UNIT_METADATA.find(u => u.id === id);
  if (!meta) return null;
  const content = CONTENT[id];
  return content ? { ...meta, ...content, comingSoon: false } : { ...meta, comingSoon: true };
}

export const UNITS = UNIT_METADATA.map(m => ({ ...m, comingSoon: !CONTENT[m.id] }));
