// Unit 13 — Right Now & Soon (A2)
// Covers: present_progressive, near_future, time_expressions
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a learner who
// already has estar (Unit 5) and regular -ar/-er/-ir present-tense verbs
// (Unit 6) but has not yet had the full irregular-present-tense unit
// (Unit 15) or the basic-prepositions unit (Unit 14). This lesson therefore
// teaches only the six present-tense forms of "ir" and the single
// preposition "a" it needs — a small, standalone, memorizable set — rather
// than presupposing either later unit. Every Spanish claim below was
// verified against SpanishDict, StudySpanish.com, Spanish.academy, and
// other established grammar references before writing — see the audit note
// at the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Right Now: The Present Progressive',
      paragraphs: [
        "So far you've used the simple present (hablo, como, vivo) to talk about actions in general — what you do routinely, or facts about the world. But sometimes you need to zoom in on a single action happening at this exact moment, the way English uses \"-ing\": \"I am eating,\" \"she is working.\" Spanish has a dedicated tense for exactly this: the present progressive, and you already have half the tools to build it — you learned estar back in Unit 5.",
        'The formula is simple: estar (conjugated in the present, matching the subject) + the gerund of the main verb. The gerund is the Spanish equivalent of the "-ing" form, and it never changes — it doesn\'t agree in gender or number with anything, unlike adjectives. To form it: -ar verbs drop the ending and add -ando (hablar → hablando); -er and -ir verbs drop the ending and add -iendo (comer → comiendo, vivir → viviendo). So Estoy hablando means "I am talking," Está comiendo means "she is eating," and Estamos viviendo aquí means "we are living here."',
        "A handful of common verbs change their stem in the gerund, and these are worth learning by heart because they come up constantly. Verbs like pedir (to ask for) and dormir (to sleep) shift their stem vowel: pedir → pidiendo (e → i), dormir → durmiendo (o → u), decir → diciendo (e → i). And any -er/-ir verb whose stem ends in a vowel swaps the i of -iendo for a y, because Spanish avoids stringing three vowels together: leer → leyendo (not \"leiendo\"), oír → oyendo, traer → trayendo, construir → construyendo. You'll meet these as a memorized short list for now — the deeper pattern behind them ties into stem-changing verbs, which get fuller treatment later.",
        'One habit worth building early: Spanish uses the present progressive far more narrowly than English does. English happily says "I\'m starting a new job next week" or "I\'m meeting her tomorrow" using "-ing" for a scheduled future event — Spanish does not do this. The present progressive in Spanish is reserved for something actually in progress right now, at this moment, not a planned future event and not a habitual action. "I usually eat at two" is simply Como a las dos (simple present), never a progressive form — and for a scheduled future plan, Spanish reaches for the construction in the next section instead.',
      ],
      examples: [
        { es: 'Estoy comiendo ahora mismo.', en: "I'm eating right now." },
        { es: '¿Qué estás haciendo?', en: 'What are you doing?' },
        { es: 'Ella está leyendo un libro.', en: "She's reading a book." },
        { es: 'Los niños están durmiendo.', en: 'The kids are sleeping.' },
        { es: '¿Qué estás pidiendo? — Estoy pidiendo un café.', en: "What are you ordering? — I'm ordering a coffee." },
        { es: 'Estamos estudiando en este momento, no podemos hablar.', en: "We're studying at this moment, we can't talk." },
      ],
      commonMistakes: [
        'Don\'t use the present progressive for scheduled future plans the way English does with "-ing" ("I\'m flying to Peru next month") — Spanish uses ir a + infinitive or the simple present for that; the progressive is only for what is actually happening right now.',
        'The gerund never changes form to agree with the subject — it stays comiendo whether "I," "she," or "we" are eating; only estar conjugates.',
        'Watch for the -yendo spelling: a stem ending in a vowel (le-er, o-ír, tra-er) takes -yendo, not -iendo — "leiendo" and "oiendo" are not correct Spanish.',
      ],
    },
    {
      heading: 'Soon: The Near Future with "ir a"',
      paragraphs: [
        "Now for the flip side: talking about what's about to happen or what you plan to do. Spanish speakers reach for this construction constantly in everyday conversation — far more often than the more formal simple future tense (hablaré, comeré) that you'll meet in a later unit. It's built from the verb ir (\"to go\") plus the word a (\"to\") plus an infinitive: ir + a + infinitive.",
        "You'll get a full unit on Spanish's irregular verbs later (Unit 15), and a full unit on prepositions like a, de, and en soon after (Unit 14) — but ir a + infinitive is so useful, and so common, that it's worth learning right now as its own small, memorizable pattern. All you need for this lesson is ir conjugated in the present tense — voy, vas, va, vamos, vais, van — plus the single preposition a wedged in the middle, plus any infinitive you already know. Nothing else about irregular verbs or prepositions is required yet.",
        'Put those three pieces together and you get sentences like Voy a comer ("I\'m going to eat"), Vas a estudiar ("you\'re going to study"), or ¿Qué van a hacer? ("what are they going to do?"). Notice the pattern holds no matter what the main action is — swap in any infinitive you know: Voy a llamar, Voy a trabajar, Voy a dormir. This one small formula — six forms of ir, the word a, and an infinitive — unlocks talking about the future starting today.',
        'A quick trap to watch for: ir a + infinitive is a tightly bound little unit. Nothing goes between va and a, or between a and the infinitive — time words and other extras go before or after the whole phrase, never inside it. So "tomorrow I\'m going to work" is Mañana voy a trabajar or Voy a trabajar mañana, never "voy mañana a trabajar."',
      ],
      examples: [
        { es: 'Voy a comer luego.', en: "I'm going to eat later." },
        { es: 'Vas a estudiar más tarde, ¿verdad?', en: "You're going to study later, right?" },
        { es: 'Va a llover esta noche.', en: "It's going to rain tonight." },
        { es: 'Vamos a viajar mañana.', en: "We're going to travel tomorrow." },
        { es: '¿Qué van a hacer el fin de semana?', en: 'What are they going to do this weekend?' },
        { es: 'Mañana voy a trabajar temprano.', en: "Tomorrow I'm going to work early." },
      ],
      commonMistakes: [
        'Don\'t split ir a + infinitive with an extra word — "voy mañana a comer" is not correct word order; time expressions go before or after the whole phrase (Mañana voy a comer / Voy a comer mañana), never in the middle.',
        'Don\'t confuse the near future ir a + infinitive with the present progressive from the previous section — estoy comiendo means an action happening right now; voy a comer means an action that hasn\'t happened yet.',
        'Ir is completely irregular and doesn\'t follow the -ar/-er/-ir patterns you already know — its forms (voy, vas, va, vamos, vais, van) simply have to be memorized as their own small set.',
      ],
    },
    {
      heading: 'Time Words for Now and Soon',
      paragraphs: [
        "Both new tenses pair naturally with time expressions that flag exactly when something is happening — and using the right time word alongside the right tense is part of sounding natural in Spanish, not just grammatically correct.",
        'For the present progressive, the natural companions are words that anchor an action to this exact instant: ahora ("now"), ahora mismo ("right now," a stronger, more immediate version of ahora), and en este momento ("at this moment," useful in slightly more formal or careful speech). All three pair well with estar + gerund: Estoy trabajando ahora mismo ("I\'m working right now").',
        'For the near future, a different set of time words points forward without committing to a specific future tense: luego ("then," "afterward"), más tarde ("later"), esta noche ("tonight"), and mañana ("tomorrow"). These work equally well with ir a + infinitive: Voy a salir esta noche ("I\'m going out tonight"). Notice luego does double duty in Spanish — you\'ve already seen it in hasta luego ("see you later") as a farewell; here it works as a plain time word meaning "afterward" or "then."',
        'One more small but useful piece: desde ("since") marks the starting point something has been going on, and desde hace marks how long it\'s been going on — a duration. Desde pairs with a specific point in time: Vivo aquí desde 2020 ("I\'ve lived here since 2020"). Desde hace pairs with a length of time instead: Vivo aquí desde hace tres años ("I\'ve lived here for three years"). Keep this pair light for now — a fuller way to talk about ongoing duration, llevar + gerund, is coming in a later unit; for now, just recognize desde vs. desde hace as "since [a point]" vs. "for [a length]."',
      ],
      examples: [
        { es: 'Ahora mismo estoy cocinando.', en: "Right now I'm cooking." },
        { es: 'En este momento no puedo hablar.', en: "At this moment I can't talk." },
        { es: 'Voy a llamarte más tarde.', en: "I'm going to call you later." },
        { es: 'Vamos a cenar esta noche a las ocho.', en: "We're going to have dinner tonight at eight." },
        { es: 'Estudio español desde enero.', en: "I've studied Spanish since January." },
        { es: 'Estudio español desde hace seis meses.', en: "I've studied Spanish for six months." },
      ],
      commonMistakes: [
        'Don\'t mix up desde and desde hace: desde attaches to a specific starting point (desde 2020, desde el lunes); desde hace attaches to a length of time (desde hace tres años, desde hace un mes).',
        'Ahora mismo is stronger and more immediate than plain ahora — reach for it when you mean "this very instant," not just "these days" or "at this time."',
        "Remember luego has two different jobs: a farewell (hasta luego) and a plain time word (voy a comer luego, \"I'm going to eat afterward\") — context tells you which.",
      ],
    },
  ],

  vocab: [
    { es: 'estar', en: 'to be (temporary state/location; used with the gerund)', example: 'Estoy estudiando.', exampleEn: "I'm studying." },
    { es: 'hablando', en: 'talking (gerund of hablar)', example: 'Está hablando por teléfono.', exampleEn: "She's talking on the phone." },
    { es: 'comiendo', en: 'eating (gerund of comer)', example: 'Estamos comiendo ahora.', exampleEn: "We're eating now." },
    { es: 'viviendo', en: 'living (gerund of vivir)', example: '¿Dónde estás viviendo?', exampleEn: 'Where are you living?' },
    { es: 'leyendo', en: 'reading (gerund of leer, irregular)', example: 'Está leyendo el periódico.', exampleEn: "He's reading the newspaper." },
    { es: 'durmiendo', en: 'sleeping (gerund of dormir, irregular)', example: 'El bebé está durmiendo.', exampleEn: 'The baby is sleeping.' },
    { es: 'pidiendo', en: 'asking for / ordering (gerund of pedir, irregular)', example: 'Estoy pidiendo la cuenta.', exampleEn: "I'm asking for the bill." },
    { es: 'ir', en: 'to go (used in ir a + infinitive)', example: 'Voy a estudiar esta tarde.', exampleEn: "I'm going to study this afternoon." },
    { es: 'ahora', en: 'now', example: 'Ahora estoy libre.', exampleEn: "I'm free now." },
    { es: 'ahora mismo', en: 'right now', example: 'Ahora mismo está lloviendo.', exampleEn: "It's raining right now." },
    { es: 'en este momento', en: 'at this moment', example: 'En este momento estamos comiendo.', exampleEn: "We're eating at this moment." },
    { es: 'luego', en: 'later / afterward', example: 'Voy a llamarte luego.', exampleEn: "I'm going to call you later." },
    { es: 'más tarde', en: 'later on', example: 'Vamos a salir más tarde.', exampleEn: "We're going to go out later." },
    { es: 'esta noche', en: 'tonight', example: 'Esta noche vamos a cenar fuera.', exampleEn: "Tonight we're going to have dinner out." },
    { es: 'mañana', en: 'tomorrow', example: 'Mañana voy a trabajar.', exampleEn: "Tomorrow I'm going to work." },
    { es: 'desde', en: 'since (a point in time)', example: 'Vivo aquí desde 2020.', exampleEn: "I've lived here since 2020." },
    { es: 'desde hace', en: 'for (a length of time)', example: 'Vivo aquí desde hace tres años.', exampleEn: "I've lived here for three years." },
  ],

  practice: [
    // ── present_progressive block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which sentence describes an action happening right now?', word: 'estar + gerund', english: 'present progressive', answer: 'Estoy comiendo.', options: ['Como todos los días.', 'Estoy comiendo.', 'Voy a comer.', 'Comí ayer.'], concept_id: 'present_progressive', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Ella está ___." (leer, "reading" — irregular gerund)', word: 'leyendo', english: 'reading', answer: 'leyendo', concept_id: 'present_progressive', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Los niños están ___." (dormir, "sleeping" — irregular gerund)', word: 'durmiendo', english: 'sleeping', answer: 'durmiendo', concept_id: 'present_progressive', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'What are you doing right now?'", english: 'What are you doing right now?', answer: '¿Qué estás haciendo ahora mismo?', word: 'estar + gerund', concept_id: 'present_progressive', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Estamos estudiando en este momento"?', word: 'estar + gerund', english: "We're studying at this moment", answer: "We're studying at this moment", concept_id: 'present_progressive', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the error: "Ella está comeindo."', word: 'comiendo', english: 'eating', answer: 'Ella está comiendo.', concept_id: 'present_progressive', difficulty: 2 },

    // ── near_future block (blocked separately before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly uses "ir a + infinitive" to talk about a plan?', word: 'ir a + infinitivo', english: 'near future', answer: 'Voy a estudiar esta tarde.', options: ['Voy estudiar esta tarde.', 'Voy a estudiar esta tarde.', 'Voy a estudiando esta tarde.', 'Estudiando voy a esta tarde.'], concept_id: 'near_future', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of "ir": "Nosotros ___ a cenar a las ocho."', word: 'vamos', english: 'we are going to', answer: 'vamos', concept_id: 'near_future', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of "ir": "Ellos ___ a viajar mañana."', word: 'van', english: 'they are going to', answer: 'van', concept_id: 'near_future', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It's going to rain tonight.'", english: "It's going to rain tonight.", answer: 'Va a llover esta noche.', word: 'ir a + infinitivo', concept_id: 'near_future', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Qué van a hacer el fin de semana?"?', word: 'ir a + infinitivo', english: 'What are they going to do this weekend?', answer: 'What are they going to do this weekend?', concept_id: 'near_future', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the word-order error: "Voy mañana a trabajar."', word: 'ir a + infinitivo', english: "I'm going to work tomorrow", answer: 'Mañana voy a trabajar. / Voy a trabajar mañana.', concept_id: 'near_future', difficulty: 3 },

    // ── time_expressions block (blocked separately; light coverage of desde/desde hace) ──
    { type: 'multiple_choice', prompt: 'Which pairs with a specific starting point, like a year? "Vivo aquí ___ 2020."', word: 'desde', english: 'since', answer: 'desde', options: ['desde', 'desde hace', 'ahora mismo', 'luego'], concept_id: 'time_expressions', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Estudio español ___ tres años." (for three years — a length of time)', word: 'desde hace', english: 'for', answer: 'desde hace', concept_id: 'time_expressions', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict-adjacent sources,
// StudySpanish.com, Spanish.academy, Kwiziq Spanish, and other established
// grammar references before writing (July 2026):
// - Present progressive formation: estar (conjugated) + gerund; -ar → -ando,
//   -er/-ir → -iendo; gerund is invariable (no gender/number agreement).
// - Irregular gerunds: pedir → pidiendo (e→i), dormir → durmiendo (o→u),
//   decir → diciendo (e→i); vowel-stem -er/-ir verbs take -yendo instead of
//   -iendo to avoid a triple-vowel sequence: leer → leyendo, oír → oyendo,
//   traer → trayendo, construir → construyendo.
// - Spanish present progressive is reserved for an action actually in
//   progress right now — unlike English "-ing," it is not used for
//   scheduled future events or habitual actions.
// - Near future: ir (voy, vas, va, vamos, vais, van) + a + infinitive,
//   more common in spoken Spanish than the simple future tense; the three
//   pieces (conjugated ir, a, infinitive) are not split by other words.
// - desde (since — a specific point in time) vs. desde hace (for — a
//   length/duration of time), both usable with the present tense for an
//   action that started in the past and continues now; llevar + gerund
//   (a fuller duration construction) deliberately deferred to a later unit
//   per the unit's scope note.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// present_progressive, near_future, and time_expressions in
// src/content/grammar.js (same facts, fuller beginner-paced walkthrough)
// and does not contradict them. Per concepts.js, near_future formally lists
// irregular_present and prepositions_basic as prerequisites (taught fully
// in Units 15 and 14, both after this unit) — this lesson intentionally
// teaches only the six present-tense forms of "ir" and the single
// preposition "a" as a small, standalone, memorizable pattern, and says so
// explicitly in the prose, rather than presupposing either later unit.
