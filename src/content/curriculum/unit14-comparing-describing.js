// Unit 14 — Comparing & Describing (A2)
// Covers: ser_vs_estar, adverbs_formation, comparatives_basic, prepositions_basic
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// StudySpanish.com, RAE-derived pedagogical sources, and established
// grammar references before writing — see the audit note at the bottom of
// this file for the specific claims checked. This unit assumes ser_basics
// (Unit 4) and estar_basics (Unit 5) are already taught — it does not
// reintroduce their conjugations, only the direct contrast between them.

export default {
  sections: [
    {
      heading: 'Ser vs. Estar: Putting the Two "To Be" Verbs Side by Side',
      paragraphs: [
        "Back in Unit 4 you met ser for identity — who someone is, where they're from, what they do, what they're like. In Unit 5 you met estar for location and temporary states — where something is, how someone feels right now. Spanish makes you choose between them every single time you say \"is\" or \"are,\" so it's worth stating the core rule as plainly as possible before we go further: ser describes what something essentially, definitionally is; estar describes the condition or state something is in at a given moment (or where it currently is).",
        'A simple way to feel the difference: Ana es alegre means Ana is a cheerful person — it\'s part of who she is, the way "tall" or "funny" would be in English. Ana está alegre means Ana is happy right now — maybe she just got good news, but tomorrow she might be tired or stressed instead. Same adjective, same speaker, genuinely different claims. Ser answers "what kind of person/thing is this, generally?" Estar answers "what state is this in, right now or lately?"',
        "This distinction becomes very visible with health, mood, and appearance. Estar is almost always the choice for how someone feels or looks at a moment: Estoy cansado (I'm tired), Está nervioso (he's nervous), Estás guapa hoy (you look great today — a comment on today, not a permanent judgment). Ser holds the line for lasting identity: Es inteligente (she's intelligent — a trait), Es alto (he's tall — a lasting physical fact, not a mood).",
        "Here's where it gets genuinely interesting, and where this unit earns its name: a small set of common adjectives change their actual meaning depending on which verb they follow — not just \"permanent vs. temporary\" shades of the same idea, but two different words in English. That's the heart of this lesson, and we'll walk through the classic list next.",
      ],
      examples: [
        { es: 'Ana es alegre. / Ana está alegre hoy.', en: 'Ana is a cheerful person. / Ana is happy today.' },
        { es: 'Es alto y delgado.', en: 'He is tall and thin. (lasting physical trait — ser)' },
        { es: 'Está cansado y un poco nervioso.', en: "He's tired and a bit nervous. (current state — estar)" },
        { es: 'Estás muy guapa hoy.', en: 'You look really good today. (appearance right now — estar)' },
        { es: 'Es de Colombia, pero está en España este año.', en: "She's from Colombia, but she's in Spain this year. (origin vs. current location)" },
      ],
      commonMistakes: [
        'Don\'t treat "ser = good, estar = bad" or any similar shortcut — the real question is always "am I describing a lasting identity/characteristic, or a state/condition/location right now?"',
        "A mood or physical feeling (tired, happy, sick, nervous, angry) almost always takes estar, even though English just uses \"is\" — resist the urge to reach for ser out of habit.",
      ],
    },
    {
      heading: 'The Classic List: Adjectives That Change Meaning with Ser vs. Estar',
      paragraphs: [
        "A handful of adjectives are famous in Spanish classes because ser and estar don't just shade their meaning — they flip it into what feels like two separate English words. Learning this short list well will make you sound noticeably more natural, and it will also sharpen your instinct for the ser/estar distinction generally, since seeing the contrast in sharp relief makes the general rule easier to feel.",
        'Aburrido is the textbook example: Él es aburrido means he\'s a boring person (a trait); Él está aburrido means he\'s bored right now (a temporary state) — English needs two different words, aburrido/a covers both. Listo works the same way: Soy listo means I\'m clever/smart (an inherent trait); Estoy listo means I\'m ready (a state — ready to go, ready to leave, prepared for something specific right now).',
        "Rico shifts from wealth to flavor: Es rico can mean he's rich (wealthy, a lasting fact about him); Está rico/rica is what you say about food that tastes good right now — La sopa está rica (the soup is delicious, tonight, to my taste). Malo follows a similar split: Es malo describes someone or something as bad in a lasting sense — a bad person, poor quality; Está malo usually means sick (a temporary condition) or, for food, that it's gone off or tastes bad.",
        "Two more worth knowing: verde literally means green (Es verde — the color, a fixed fact) but estar verde describes fruit that's unripe, or — used about a person — someone who's inexperienced or still \"green\" at something. And vivo shows the same pattern in a different direction: Está vivo means he's alive (a state — the opposite of dead); Es vivo describes someone as sharp, clever, or street-smart (a personality trait, and mildly informal in tone).",
      ],
      examples: [
        { es: 'Él es aburrido. / Él está aburrido.', en: "He's boring (personality). / He's bored (right now)." },
        { es: 'Soy listo. / Estoy listo para salir.', en: "I'm clever. / I'm ready to leave." },
        { es: 'Es rico. / La sopa está rica.', en: "He's rich. / The soup is delicious." },
        { es: 'Es malo. / Estoy malo hoy.', en: "He's a bad person / it's poor quality. / I'm sick today." },
        { es: 'La fruta está verde. / Es verde.', en: "The fruit is unripe. / It's green (color)." },
        { es: 'Está vivo. / Es muy vivo.', en: "He's alive. / He's very sharp/street-smart." },
      ],
      commonMistakes: [
        "This list is short on purpose — don't assume every adjective works this way. Most adjectives (alto, inteligente, simpático…) just follow the general ser-vs-estar rule of trait vs. state without changing their English translation.",
        'When food tastes good right now, it\'s está rico/rica, not es rico/rica — save es rico for describing wealth.',
        "Estoy listo (I'm ready) and soy listo (I'm smart) are easy to mix up because they look so similar — say them slowly and think about which meaning you actually intend.",
      ],
    },
    {
      heading: 'Turning Adjectives into Adverbs: The -mente Suffix',
      paragraphs: [
        'Now for a completely different, much more mechanical rule: how Spanish builds adverbs of manner (words like "quickly," "clearly," "slowly" that describe how an action is done). The recipe is simple: take the feminine singular form of the adjective and add -mente. Rápido (fast, masculine) → rápida (feminine) → rápidamente (quickly). Lento (slow) → lenta → lentamente. Claro (clear) → clara → claramente.',
        "If the adjective doesn't change for gender in the first place — anything ending in -e or a consonant, like fácil, feliz, or elegante — you just add -mente directly to that single form: fácil → fácilmente (easily), feliz → felizmente (happily), elegante → elegantemente (elegantly). And if the adjective already carries a written accent, the adverb keeps it exactly as is: rápido has an accent on the á, so rápidamente keeps that same accent, even though when you say the word aloud the stress actually falls on -mente.",
        "One more rule worth knowing early, because it trips up even careful learners: when two -mente adverbs are joined by y (\"and\"), only the second one gets the suffix — the first one appears as the plain feminine adjective. So \"clearly and slowly\" is clara y lentamente, not claramente y lentamente. It looks incomplete at first glance, but it's the standard, correct pattern.",
        "A last practical note: not every common adverb comes from an adjective this way. Bien (well) and mal (badly) are irregular short words with no -mente form (there's no \"buenamente\" for \"well\" in ordinary use), and words like así (like this), ya (already), and también (also) are adverbs in their own right, unrelated to any adjective. Those are worth learning as vocabulary on their own terms.",
      ],
      examples: [
        { es: 'rápido → rápida → rápidamente', en: 'fast → quickly' },
        { es: 'Habla despacio y claramente.', en: 'She speaks slowly and clearly.' },
        { es: 'fácil → fácilmente (no gender change)', en: 'easy → easily' },
        { es: 'Lo hizo rápida y silenciosamente.', en: 'She did it quickly and quietly. (only the last adverb keeps -mente)' },
        { es: 'Habla muy bien el español.', en: 'She speaks Spanish very well. (bien, not a -mente form)' },
      ],
      commonMistakes: [
        'Add -mente to the feminine form, not the masculine dictionary form — it\'s rápidamente (from rápida), never "rápomente" or "rápidomente."',
        'When stacking two -mente adverbs, only the final one keeps the suffix — "claramente y lentamente" is understood but not the natural, standard pattern; clara y lentamente is what you\'ll see in edited writing.',
        'Don\'t force bien and mal into -mente forms — they\'re irregular adverbs on their own, not adjectives waiting for a suffix.',
      ],
    },
    {
      heading: 'Comparing Two Things: más/menos…que and tan…como',
      paragraphs: [
        "Everything in this unit so far has been about describing one thing precisely — this section adds the other half of what \"comparing\" means: setting two things side by side. Spanish has one clear pattern for inequality (more/less than) and one for equality (as…as), and both are far more mechanical than the ser-vs-estar contrast you just learned.",
        'For inequality, the pattern is más ("more") or menos ("less") + adjective + que ("than"): Ana es más alta que Luis ("Ana is taller than Luis"), Este libro es menos interesante que ese ("This book is less interesting than that one"). The adjective always agrees in gender and number with the noun it describes — not with whatever it\'s being compared to — so a woman compared to a man still gets the feminine form: Ana es más alta que Luis, never "más alto."',
        'For equality, use tan ("as") + adjective + como ("as"): Mi hermana es tan inteligente como yo ("My sister is as intelligent as I am"). The same agreement rule applies — the adjective matches the noun being described, not the person or thing on the other side of como. One small trap worth flagging now, even though the fuller rule waits for a later lesson on comparatives and superlatives: que means "than" before a noun or adjective, but it switches to de right before a plain number — Tiene más de treinta años ("She\'s over thirty"), never "más que treinta años."',
      ],
      examples: [
        { es: 'Ana es más alta que Luis.', en: 'Ana is taller than Luis.' },
        { es: 'Este libro es menos interesante que ese.', en: 'This book is less interesting than that one.' },
        { es: 'Mi hermana es tan inteligente como yo.', en: 'My sister is as intelligent as I am.' },
        { es: 'La casa es tan grande como el jardín.', en: 'The house is as big as the garden.' },
        { es: 'Tiene más de treinta años.', en: 'She is over thirty. (más de before a number, not más que)' },
      ],
      commonMistakes: [
        'Forgetting that the adjective agrees with the noun being described, not the comparison target — "Ana es más alto que Luis" is wrong; it must be más alta, matching Ana.',
        'Using que instead of de right before a number — "más que treinta" is wrong; before a plain number it\'s always más de treinta.',
        'Dropping como in an equality comparison — "tan alto Luis" is incomplete; it must be tan alto como Luis.',
      ],
    },
    {
      heading: 'The Small Words That Do a Lot of Work: Basic Prepositions',
      paragraphs: [
        "Prepositions are short, unglamorous words, but they connect almost every sentence you'll ever say, so it's worth being deliberate about the core set: a, de, en, con, sin, para, and por. Each one has a home base meaning, plus a few extensions worth knowing at this stage.",
        'A means "to" or "at": it marks movement toward a place (Voy a Madrid — I\'m going to Madrid) and a specific clock time (a las ocho — at eight o\'clock). It also has a special job called the "personal a": when the direct object of a verb is a specific person, Spanish inserts a right before that person, with no English equivalent — Veo a María (I see María), never "Veo María." De means "of" or "from": it marks possession (el libro de Ana — Ana\'s book) and origin (Soy de Perú — I\'m from Peru). En covers both "in" and "on" for location — En + a place doesn\'t distinguish inside-a-box from on-top-of-a-table the way English does; context does that job (Está en la mesa can mean on the table, and usually does).',
        'Con means "with" (café con leche — coffee with milk) and sin means "without" (sin azúcar — without sugar) — they\'re natural opposites and easy to learn as a pair. Para and por both often translate as "for" in English, which is exactly why they confuse beginners, but at this stage you only need their most basic, common jobs: para typically points toward a purpose, a recipient, or a destination (Es un regalo para ti — it\'s a gift for you; Salgo para el aeropuerto — I\'m leaving for the airport), while por often marks a reason, an exchange, or moving through/along something (Gracias por tu ayuda — thanks for your help; Caminamos por el parque — we walked through the park). The full, precise por-vs-para contrast is its own dedicated topic later in this course — for now, just get comfortable recognizing and using each one in these everyday phrases.',
        "Two small mechanical notes that come up constantly: a and de both contract with the article el. A + el becomes al (Voy al banco, never \"Voy a el banco\"), and de + el becomes del (Vengo del trabajo, never \"Vengo de el trabajo\"). This contraction is mandatory in writing and speech — there's no optional version.",
      ],
      examples: [
        { es: 'Voy a Madrid a las ocho.', en: "I'm going to Madrid at eight o'clock." },
        { es: 'Veo a mi hermana en el parque.', en: 'I see my sister in the park. (personal a before a specific person)' },
        { es: 'El coche es de mi padre.', en: "The car is my father's." },
        { es: 'Café con leche, sin azúcar, por favor.', en: 'Coffee with milk, without sugar, please.' },
        { es: 'Este regalo es para ti.', en: 'This gift is for you.' },
        { es: 'Vengo del trabajo y voy al gimnasio.', en: "I'm coming from work and going to the gym. (del = de+el, al = a+el)" },
      ],
      commonMistakes: [
        'Don\'t skip the personal a before a specific person as a direct object — "Veo María" is wrong; it must be "Veo a María."',
        'A + el and de + el must contract to al and del — "voy a el cine" and "vengo de el cine" are both incorrect; only al and del are grammatical.',
        "Para and por both sometimes translate as \"for,\" so don't assume they're interchangeable — for now, lean on para for purpose/destination/recipient and por for reason/exchange, and expect a full dedicated lesson on the finer points later.",
      ],
    },
  ],

  vocab: [
    { es: 'aburrido', en: 'boring (ser) / bored (estar)', example: 'Está aburrido en clase.', exampleEn: "He's bored in class." },
    { es: 'listo', en: 'smart (ser) / ready (estar)', example: 'Estoy listo para salir.', exampleEn: "I'm ready to leave." },
    { es: 'rico', en: 'rich (ser) / delicious (estar)', example: 'La sopa está muy rica.', exampleEn: 'The soup is very delicious.' },
    { es: 'malo', en: 'bad (ser) / sick, off-tasting (estar)', example: 'Estoy malo desde ayer.', exampleEn: "I've been sick since yesterday." },
    { es: 'verde', en: 'green (ser) / unripe, inexperienced (estar)', example: 'El plátano está verde todavía.', exampleEn: "The banana is still unripe." },
    { es: 'vivo', en: 'sharp, street-smart (ser) / alive (estar)', example: 'Mi abuelo todavía está vivo.', exampleEn: 'My grandfather is still alive.' },
    { es: 'rápidamente', en: 'quickly', example: 'Terminó el examen rápidamente.', exampleEn: 'She finished the exam quickly.' },
    { es: 'lentamente', en: 'slowly', example: 'El tren avanza lentamente.', exampleEn: 'The train is moving slowly.' },
    { es: 'más...que', en: 'more...than', example: 'Ella es más alta que yo.', exampleEn: 'She is taller than me.' },
    { es: 'menos...que', en: 'less...than', example: 'Es menos caro que el otro.', exampleEn: 'It is less expensive than the other one.' },
    { es: 'tan...como', en: 'as...as', example: 'Es tan inteligente como su hermana.', exampleEn: 'He is as intelligent as his sister.' },
    { es: 'a', en: 'to / at', example: 'Llego a las nueve.', exampleEn: "I'm arriving at nine." },
    { es: 'de', en: 'of / from', example: 'Somos de Chile.', exampleEn: "We're from Chile." },
    { es: 'en', en: 'in / on / at', example: 'Vivo en un apartamento pequeño.', exampleEn: 'I live in a small apartment.' },
    { es: 'con', en: 'with', example: 'Voy con mis amigos.', exampleEn: "I'm going with my friends." },
    { es: 'sin', en: 'without', example: 'No puedo vivir sin café.', exampleEn: "I can't live without coffee." },
    { es: 'para', en: 'for (purpose/destination/recipient)', example: 'Este café es para mi mamá.', exampleEn: 'This coffee is for my mom.' },
    { es: 'por', en: 'for / by (reason, exchange, through)', example: 'Gracias por todo.', exampleEn: 'Thanks for everything.' },
  ],

  practice: [
    // ── ser_vs_estar block (blocked practice: drill the contrast in isolation before mixing) ──
    { type: 'multiple_choice', prompt: 'Your friend just tasted the soup and loved it. What does she say?', word: 'rica', english: 'delicious', answer: 'Está muy rica.', options: ['Es muy rica.', 'Está muy rica.', 'Es muy rico.', 'Está muy rico ella.'], concept_id: 'ser_vs_estar', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Mi jefe ___ muy aburrido." (he has a boring personality)', word: 'aburrido', english: 'boring', answer: 'es', concept_id: 'ser_vs_estar', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "¿___ (tú) listo para el viaje?" (are you ready?)', word: 'listo', english: 'ready', answer: 'Estás', concept_id: 'ser_vs_estar', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'He is bored in this class.'", english: 'He is bored in this class.', answer: 'Está aburrido en esta clase.', word: 'aburrido', concept_id: 'ser_vs_estar', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Ella es muy viva"?', word: 'viva', english: 'sharp / clever', answer: "She's very sharp/street-smart.", concept_id: 'ser_vs_estar', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake (he\'s talking about being wealthy): "Estoy rico desde que gané la lotería."', word: 'rico', english: 'rich', answer: 'Soy rico desde que gané la lotería.', concept_id: 'ser_vs_estar', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which sentence means "The banana is still unripe"?', word: 'verde', english: 'unripe', answer: 'El plátano todavía está verde.', options: ['El plátano todavía es verde.', 'El plátano todavía está verde.', 'El plátano verde está.', 'El plátano es verde todavía color.'], concept_id: 'ser_vs_estar', difficulty: 2 },

    // ── adverbs_formation block (kept separate before mixing with other concepts) ──
    { type: 'fill_blank', prompt: 'Turn "rápida" into an adverb meaning "quickly."', word: 'rápido', english: 'quick / quickly', answer: 'rápidamente', concept_id: 'adverbs_formation', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'What is the correct adverb form of "claro" (clear)?', word: 'claro', english: 'clearly', answer: 'claramente', options: ['clarimente', 'claromente', 'claramente', 'clarmente'], concept_id: 'adverbs_formation', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Habla rápidamente y clara."', word: 'clara y rápidamente', english: 'quickly and clearly', answer: 'Habla clara y rápidamente.', concept_id: 'adverbs_formation', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The train moves slowly.'", english: 'The train moves slowly.', answer: 'El tren se mueve lentamente.', word: 'lentamente', concept_id: 'adverbs_formation', difficulty: 2 },

    // ── comparatives_basic block (kept separate before mixing with other concepts) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'Ana is taller than Luis.'", english: 'Ana is taller than Luis.', answer: 'Ana es más alta que Luis.', word: 'más...que', concept_id: 'comparatives_basic', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Mi hermana es tan inteligente ___ yo." (as...as)', word: 'como', english: 'as', answer: 'como', concept_id: 'comparatives_basic', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which is correct for "She is over thirty years old"?', word: 'más de', english: 'more than (before a number)', answer: 'Tiene más de treinta años.', options: ['Tiene más que treinta años.', 'Tiene más de treinta años.', 'Tiene tan treinta años.', 'Tiene menos que treinta años.'], concept_id: 'comparatives_basic', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Ana es más alto que Luis."', word: 'alto → alta', english: 'taller (feminine agreement)', answer: 'Ana es más alta que Luis.', concept_id: 'comparatives_basic', difficulty: 2 },

    // ── prepositions_basic block ──
    { type: 'fill_blank', prompt: 'Complete: "Voy ___ Madrid mañana." (to)', word: 'a', english: 'to', answer: 'a', concept_id: 'prepositions_basic', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly uses the personal "a"?', word: 'a', english: 'personal a', answer: 'Veo a mi hermana en el parque.', options: ['Veo mi hermana en el parque.', 'Veo a mi hermana en el parque.', 'Veo a el parque mi hermana.', 'A veo mi hermana en el parque.'], concept_id: 'prepositions_basic', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Vengo del trabajo y voy al gimnasio"?', word: 'del / al', english: 'from the / to the', answer: "I'm coming from work and going to the gym.", concept_id: 'prepositions_basic', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict (including its
// ser/estar comparison entries), StudySpanish.com, Kwiziq, and other
// established pedagogical grammar sources before writing (July 2026):
// - ser = lasting identity/characteristic vs. estar = temporary state/
//   location, as the core organizing rule (matches existing ser_basics/
//   estar_basics/ser_vs_estar entries in src/content/grammar.js)
// - the classic changing-meaning adjective list: aburrido (boring/bored),
//   listo (smart/ready), rico (rich/delicious), malo (bad person or
//   quality/sick or off-tasting), verde (green/unripe or inexperienced),
//   and vivo (sharp-street-smart as ser + adjective/alive with estar) —
//   each meaning pair confirmed against multiple independent sources
// - adverb formation: -mente attaches to the feminine singular adjective
//   form; adjectives with a single form for both genders (fácil, feliz,
//   elegante) just add -mente directly; a written accent on the base
//   adjective is preserved in the adverb (rápido → rápidamente)
// - the two-adverb stacking rule: when two -mente adverbs are joined by
//   "y," only the final adverb keeps the -mente suffix (e.g. clara y
//   lentamente, not claramente y lentamente)
// - bien/mal as irregular adverbs with no -mente derivation, and así/ya/
//   también as non-adjective-derived adverbs
// - basic prepositions a/de/en/con/sin/para/por core meanings, the
//   personal "a" rule before specific-person direct objects, and the
//   mandatory al/del contractions — matches the existing prepositions_basic
//   entry in src/content/grammar.js, which explicitly defers the full
//   por-vs-para contrast to the dedicated B1 por_vs_para concept, matching
//   this unit's approach of only covering basic/common usage of por/para
// - basic comparatives: más/menos + adjective + que for inequality, tan +
//   adjective + como for equality, adjective agreement with the noun
//   described (not the comparison target), and que → de directly before a
//   plain number (más de treinta años) — matches the existing
//   comparatives_basic entry in src/content/grammar.js, which explicitly
//   defers superlatives and irregular comparative forms (mejor/peor/mayor/
//   menor) to the fuller B2 comparatives entry
// This content is complementary to and consistent with the existing
// GRAMMAR_CARDS entries for ser_vs_estar, adverbs_formation,
// comparatives_basic, and prepositions_basic in src/content/grammar.js, and
// does not duplicate the ser_basics/estar_basics conjugation content
// already taught in Units 4-5, nor the fuller B2 adjectives_ser_estar/
// comparatives treatments reserved for later.
