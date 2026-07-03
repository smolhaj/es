// Unit 05 — Where You Are (A1)
// Covers: estar_basics, hay
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// WordReference-adjacent sources, and RAE before writing — see the audit
// note at the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: '"To Be" (Here): Introducing Estar',
      paragraphs: [
        "You've already met one Spanish verb that translates as \"to be\" — ser, which handles identity, origin, and other permanent-feeling facts (soy estudiante, \"I am a student\"). Spanish has a second \"to be\" verb, estar, and this unit is about it. For now, the short version: estar handles location — where something or someone physically is — and temporary conditions, like how you're feeling right now. A full side-by-side comparison of ser and estar is coming in a later unit, so don't worry about mastering the boundary between them today; just get comfortable with what estar itself does.",
        "Like most commonly-used Spanish verbs, estar is irregular, so its six present-tense forms need to be learned directly rather than derived from a pattern: estoy (I am), estás (you are, informal), está (he/she is, you formal are), estamos (we are), estáis (you all are, Spain), están (they/you all are). Notice the accent marks on estás, está, and están — they're not optional decoration; they mark exactly where the stress falls and are part of correct spelling.",
        'The headline use for this unit is location: to ask where something is, you say ¿Dónde está...? (singular) or ¿Dónde están...? (plural), and to answer, you use the matching form of estar plus a location word or phrase. El gato está en la cocina (\"The cat is in the kitchen\") pairs perfectly with what you\'ll learn next: a small toolkit of location words like aquí, allí, cerca, lejos, dentro, and fuera that estar constantly appears alongside.',
        "Estar also covers temporary states and conditions — how someone feels or looks right now, as opposed to a lasting trait. Estoy cansado (\"I am tired\") and Estoy bien (\"I am fine/well\") are both estar, because tiredness and how you're doing today are temporary, not permanent facts about who you are. You'll see a few examples of this use in this unit, but its full contrast with ser is intentionally left for later — treat it here as \"one more thing estar is good for,\" not something to fully resolve yet.",
      ],
      examples: [
        { es: 'Yo estoy en casa.', en: 'I am at home.' },
        { es: '¿Dónde estás tú?', en: 'Where are you (informal)?' },
        { es: 'El café está caliente.', en: 'The coffee is hot.' },
        { es: 'Nosotros estamos en el parque.', en: 'We are at the park.' },
        { es: '¿Vosotros estáis listos?', en: 'Are you all ready? (Spain)' },
        { es: 'Ellos están en la oficina.', en: 'They are at the office.' },
      ],
      commonMistakes: [
        "Don't drop the accent marks when writing estás, está, and están — an unaccented \"esta\" is a different word (the demonstrative \"this,\" as in esta casa, \"this house\"), and unaccented \"estan\" simply isn't a correctly spelled Spanish word at all.",
        "Estar is not the only \"to be\" verb — resist the urge to use it for every single \"is/am/are\" you'd say in English. If in doubt for now, stick to estar for location and physical/emotional state and don't worry about the rest; ser gets its own full treatment elsewhere.",
        'Remember usted and used-formal "you" take the same form as él/ella, just as you learned with other verbs: usted está, not "usted estás."',
      ],
    },
    {
      heading: 'Location Words: Here, There, Near, Far',
      paragraphs: [
        "Estar for location is much more useful once you have a small vocabulary of place words to pair it with. Spanish distinguishes distance from the speaker more finely than English does: aquí and acá both mean \"here\" (very close to the speaker — acá is more common in Latin America, aquí is universal), allí means \"there\" (further away), and cerca (\"near\") and lejos (\"far\") describe relative distance without pinning down an exact spot.",
        'A handful of position words round this out: dentro ("inside") and fuera ("outside") describe being in or out of an enclosed space, while encima ("on top") and debajo ("underneath") describe vertical position relative to something else. When any of these is followed by a specific noun rather than standing alone, Spanish adds de: cerca de la estación ("near the station"), debajo de la mesa ("under the table"), dentro de la casa ("inside the house"). Used alone, with nothing following, they drop the de: Está cerca ("It\'s nearby"), Está debajo ("It\'s underneath").',
        'The preposition en deserves a special mention here too — it\'s the single most common way to say "in," "on," or "at" a place in Spanish, and you\'ll use it constantly with estar: Estoy en la escuela ("I\'m at school"), El libro está en la mesa ("The book is on the table"). One preposition, three possible English translations — context tells you which one fits.',
      ],
      examples: [
        { es: 'El perro está aquí.', en: 'The dog is here.' },
        { es: 'La tienda está allí, cerca del banco.', en: 'The store is there, near the bank.' },
        { es: 'Mi casa está lejos de la ciudad.', en: 'My house is far from the city.' },
        { es: 'Las llaves están dentro de la mochila.', en: 'The keys are inside the backpack.' },
        { es: 'El gato está encima de la silla; el perro está debajo.', en: 'The cat is on top of the chair; the dog is underneath.' },
        { es: 'Estamos en el parque.', en: "We're at the park." },
      ],
      commonMistakes: [
        'Don\'t forget de when a place word is followed by a specific noun — "cerca la estación" is missing a word; it must be cerca de la estación.',
        'English "here" and "there" are a simple pair, but Spanish aquí/acá (here), ahí (there, near you), and allí/allá (over there, far) mark three distances, not two — allí is genuinely farther away than a vague "there."',
      ],
    },
    {
      heading: '"There Is / There Are": Introducing Hay',
      paragraphs: [
        "Now for a small, strange-looking word that does a lot of work: hay. It translates as \"there is\" or \"there are\" — it announces that something exists or is present, without telling you exactly where. Hay is a special impersonal form of the verb haber, and the single most important thing to know about it is that it never changes for number: the exact same word hay covers both \"there is\" (one thing) and \"there are\" (many things). There's no separate plural form — you will never see or need anything like \"hayn\"; hay stays hay no matter how many things you're talking about.",
        'Hay un gato en el jardín ("There is a cat in the garden") and Hay tres gatos en el jardín ("There are three cats in the garden") use the identical word hay — only the number word changes. This is a real relief for a beginner: one word, zero conjugation, in every context where you\'re introducing something\'s existence.',
        'The rule that trips up almost every beginner is what can follow hay: it pairs with indefinite nouns — things not yet identified or singled out — so it takes indefinite articles (un, una, unos, unas), numbers, quantity words (mucho, poco), or a bare noun with no article at all: Hay leche ("There is milk"), Hay libros en la mesa ("There are books on the table"). What hay can never take is a definite article: you cannot say "hay el libro" or "hay la leche" — that combination doesn\'t exist in Spanish. The moment you\'re talking about a specific, already-identified thing (the book, the milk, the one you both already know about), you switch to estar instead: El libro está en la mesa ("The book is on the table"), not hay.',
        "That contrast — hay for something new/unidentified, estar for something specific/already known — is worth sitting with, because it's the most common real mix-up for English speakers, whose \"there is/are\" doesn't carry this restriction at all. Hay un banco en esa calle (\"There's a bank on that street\" — you're just announcing one exists) versus El banco está en esa calle (\"The bank is on that street\" — a specific bank you both already have in mind). Same English translation, two different Spanish tools, and the article is your clue for which one to reach for.",
      ],
      examples: [
        { es: 'Hay un parque cerca de aquí.', en: 'There is a park near here.' },
        { es: 'Hay dos sillas en la cocina.', en: 'There are two chairs in the kitchen.' },
        { es: '¿Hay leche? — Sí, hay mucha.', en: 'Is there milk? — Yes, there is a lot.' },
        { es: 'No hay nadie en la calle.', en: 'There is nobody on the street.' },
        { es: 'Hay un banco en esa calle.', en: "There's a bank on that street. (indefinite — one exists)" },
        { es: 'El banco está en esa calle.', en: 'The bank is on that street. (definite — a specific, known bank)' },
      ],
      commonMistakes: [
        'Never put a definite article directly after hay — "hay el libro" and "hay la leche" are both incorrect; drop the article entirely (hay leche) or use an indefinite one (hay un libro).',
        'Hay does not conjugate for plural — resist the instinct to make it agree with a plural noun the way English "there is/there are" changes; hay tres perros is correct, not any plural-looking variant of hay.',
        "Don't reach for hay when you mean a specific, already-identified thing — that's estar's job. Hay introduces something into the conversation for the first time; estar locates something you (and your listener) already know about.",
      ],
    },
  ],

  vocab: [
    { es: 'estoy', en: 'I am (estar)', example: 'Estoy en casa.', exampleEn: 'I am at home.' },
    { es: 'estás', en: 'you are, informal (estar)', example: '¿Dónde estás?', exampleEn: 'Where are you?' },
    { es: 'está', en: 'he/she is, you formal are (estar)', example: 'Ella está en el trabajo.', exampleEn: 'She is at work.' },
    { es: 'estamos', en: 'we are (estar)', example: 'Estamos listos.', exampleEn: 'We are ready.' },
    { es: 'estáis', en: 'you all are, Spain (estar)', example: '¿Estáis en casa?', exampleEn: 'Are you all at home?' },
    { es: 'están', en: 'they/you all are (estar)', example: 'Están en el parque.', exampleEn: 'They are at the park.' },
    { es: 'hay', en: 'there is / there are', example: 'Hay un libro en la mesa.', exampleEn: 'There is a book on the table.' },
    { es: 'aquí', en: 'here', example: 'El perro está aquí.', exampleEn: 'The dog is here.' },
    { es: 'allí', en: 'there (farther away)', example: 'La tienda está allí.', exampleEn: 'The store is over there.' },
    { es: 'cerca', en: 'near, nearby', example: 'El hospital está cerca.', exampleEn: 'The hospital is nearby.' },
    { es: 'lejos', en: 'far, far away', example: 'Mi casa está lejos.', exampleEn: 'My house is far away.' },
    { es: 'en', en: 'in / on / at', example: 'Estamos en el parque.', exampleEn: "We're at the park." },
    { es: 'dentro', en: 'inside', example: 'Las llaves están dentro.', exampleEn: 'The keys are inside.' },
    { es: 'fuera', en: 'outside', example: 'El gato está fuera.', exampleEn: 'The cat is outside.' },
    { es: 'encima', en: 'on top', example: 'El libro está encima de la mesa.', exampleEn: 'The book is on top of the table.' },
    { es: 'debajo', en: 'underneath', example: 'El perro está debajo de la silla.', exampleEn: 'The dog is underneath the chair.' },
    { es: 'la casa', en: 'the house', example: 'Hay una casa grande en la esquina.', exampleEn: 'There is a big house on the corner.' },
    { es: 'la cocina', en: 'the kitchen', example: 'Hay dos sillas en la cocina.', exampleEn: 'There are two chairs in the kitchen.' },
    { es: 'el jardín', en: 'the garden / yard', example: 'Hay un gato en el jardín.', exampleEn: 'There is a cat in the garden.' },
    { es: 'la ciudad', en: 'the city', example: 'Hay muchos parques en la ciudad.', exampleEn: 'There are many parks in the city.' },
    { es: 'la calle', en: 'the street', example: 'No hay nadie en la calle.', exampleEn: 'There is nobody on the street.' },
    { es: 'el banco', en: 'the bank', example: 'Hay un banco cerca de aquí.', exampleEn: 'There is a bank near here.' },
  ],

  practice: [
    // ── estar_basics block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete with the correct form of estar: "Yo ___ en casa."', word: 'estar', english: 'to be', answer: 'estoy', concept_id: 'estar_basics', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of estar: "¿Dónde ___ tú?"', word: 'estar', english: 'to be', answer: 'estás', concept_id: 'estar_basics', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which form of estar goes with "nosotros"?', word: 'estar', english: 'to be (we)', answer: 'estamos', options: ['estás', 'está', 'estamos', 'están'], concept_id: 'estar_basics', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The bank is near the park.'", english: 'The bank is near the park.', answer: 'El banco está cerca del parque.', word: 'estar', concept_id: 'estar_basics', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Ellos están en la oficina"?', word: 'están', english: 'they are', answer: 'They are at the office.', concept_id: 'estar_basics', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Someone asks "¿Cómo estás?" and you feel tired. What do you say?', word: 'estoy', english: 'I am (tired)', answer: 'Estoy cansado.', options: ['Soy cansado.', 'Estoy cansado.', 'Hay cansado.', 'Están cansado.'], concept_id: 'estar_basics', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "El libro está ___ de la mesa." (on top)', word: 'encima', english: 'on top', answer: 'encima', concept_id: 'estar_basics', difficulty: 2 },

    // ── hay block (kept separate from estar_basics; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "___ un libro en la mesa." (there is)', word: 'hay', english: 'there is', answer: 'Hay', concept_id: 'hay', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which sentence is correct?', word: 'hay', english: 'there is / there are', answer: 'Hay dos gatos en el jardín.', options: ['Hay el gato en el jardín.', 'Hay dos gatos en el jardín.', 'Hayn dos gatos en el jardín.', 'Están dos gatos en el jardín.'], concept_id: 'hay', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Hay el banco en esa calle."', word: 'hay', english: 'there is / the bank is', answer: 'El banco está en esa calle.', concept_id: 'hay', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'There are three chairs in the kitchen.'", english: 'There are three chairs in the kitchen.', answer: 'Hay tres sillas en la cocina.', word: 'hay', concept_id: 'hay', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "No hay nadie en la calle"?', word: 'hay', english: 'there is / there are', answer: 'There is nobody on the street.', concept_id: 'hay', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Your friend is looking for "the" milk you both bought yesterday. Which is correct?', word: 'está', english: 'is (specific/known)', answer: 'La leche está en la nevera.', options: ['Hay la leche en la nevera.', 'La leche está en la nevera.', 'Hay leche en la nevera está.', 'La leche hay en la nevera.'], concept_id: 'hay', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, RAE (Diccionario
// panhispánico de dudas "haber" entry, RAE's Nueva gramática de la lengua
// española section on impersonal haber/estar), and other pedagogical
// grammar sources before writing (July 2026):
// - full present-tense conjugation of estar: estoy, estás, está, estamos,
//   estáis, están (SpanishDict conjugation tables)
// - estar's core uses: location (¿Dónde está...?) and temporary states/
//   conditions, with ser-vs-estar full contrast explicitly deferred to a
//   later A2 unit per this unit's brief, matching the existing ser_basics /
//   estar_basics / ser_vs_estar entries in src/content/grammar.js
// - hay as the impersonal form of haber: invariant for number (no plural
//   form exists — RAE confirms it is conjugated only in 3rd person
//   singular regardless of what follows, and flags "hayn"/pluralized haber
//   as a widespread but non-standard error to avoid modeling)
// - hay never takes a definite article (no "hay el libro" / "hay la
//   leche") — confirmed via SpanishDict's definite-article guide and
//   multiple grammar references; hay instead pairs with indefinite
//   articles, numbers, quantity words, or bare/unarticled nouns (including
//   bare plural nouns, e.g. "hay libros")
// - hay vs. estar for location: hay introduces indefinite/new existence,
//   estar locates a specific, already-identified referent — mirrors the
//   existing worked example in the `hay` GRAMMAR_CARDS entry
// - aquí/acá (here) vs. allí/allá (there, farther) vs. cerca/lejos (near/
//   far) distance distinctions, and encima/debajo/dentro/fuera dropping
//   "de" when used standalone vs. requiring "de" before a following noun
//   (cerca de, lejos de, debajo de, dentro de)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// estar_basics and hay in src/content/grammar.js (same facts, fuller
// beginner-paced walkthrough) and does not contradict them.
