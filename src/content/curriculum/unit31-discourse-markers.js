// Unit 31 — Discourse Markers: Reformulating with Precision (C2)
// Covers: reformuladores
// See ES.md's "Pedagogical principles" for the general rules this content
// follows: comprehensible input, explicit instruction, retrieval practice,
// blocked practice before interleaving, multiple modalities, and immediate
// explanatory feedback. This is a C2 unit, and C2 content follows a
// different center of gravity than earlier units: per DELE/Instituto
// Cervantes-aligned research on discourse competence, C2 mastery is not
// primarily about learning new grammar rules — the learner already commands
// nearly all of Spanish's morphology and syntax by this point. What remains
// is discourse-level control: how fluent speakers connect, restate,
// structure, and frame ideas across a stretch of speech or writing, plus the
// pragmatic nuance of exactly what a marker signals about the speaker's
// stance. This unit is written with that in mind — less "here is a rule,"
// more "here is how a fluent argument is actually built."
//
// This unit explicitly builds on Unit 30 (Connectors & Cohesion, C1), which
// taught the plain connective layer: sin embargo/no obstante (contrast),
// por lo tanto/así que (consequence), además/en primer lugar (addition/
// sequence), ya que/puesto que (cause). This unit assumes that foundation
// and adds the next layer up: reformulating a point with more precision —
// the layer that separates an advanced learner's Spanish from a native
// speaker's. Because these markers are fundamentally about discourse
// cohesion, almost none of them make sense applied to an isolated sentence —
// the exercises below use the passage/passageEn fields (a short text or
// two-person dialogue) instead of one-off sentences, since that is the only
// context where these markers actually do their job.
//
// Every Spanish claim below was verified via WebSearch against the CVC
// (Centro Virtual Cervantes) "Diccionario de términos clave de ELE" entry
// for marcadores del discurso, RAE's Nueva gramática de la lengua española
// (discursive-connectors chapters), and the standard Martín Zorraquino &
// Portolés discourse-marker taxonomy (reformuladores explicativos/
// rectificativos) — see the audit note at the bottom of this file for the
// specific claims checked. This content is complementary to the existing
// GRAMMAR_CARDS entry for reformuladores in src/content/grammar.js and does
// not contradict it.
//
// Curriculum-pacing-lag fix (07-09-2026): this unit originally also taught
// estructuradores_informacion and operadores_discursivos, but the CEFR audit
// retagged both down to B2. They've moved, verbatim, to unit29-fixed-
// expressions.js (estructuradores_informacion) and unit-b2-argumentation-
// workplace.js (operadores_discursivos) — see ES.md's punch-list item 29.
// reformuladores stays here; it's still correctly C2.

export default {
  sections: [
    {
      heading: 'Reformulators: Saying It Again, More Precisely — O sea, Es decir, Mejor dicho',
      paragraphs: [
        "By now you can already connect ideas with además, por lo tanto, sin embargo, and the rest of Unit 30's connectors — you can add, conclude, and contrast. Reformulators do something different: they don't add a new idea at all. They go back to something you just said and present it again, in other words, because the first version wasn't precise enough, wasn't clear enough, or simply deserves saying differently for emphasis. This is a genuinely C2 skill, because it requires holding your own last sentence in mind and consciously choosing to rephrase it — something native speakers do constantly and unconsciously, and something a fluent-sounding non-native speaker needs to be able to do on purpose.",
        "Spanish groups reformulators by what kind of \"again, but differently\" they signal. O sea and es decir are explicativos (explanatory) — they restate the same idea in clearer or more accessible words, without correcting anything: La reunión es a las nueve, es decir, dentro de una hora (\"The meeting is at nine, that is, in an hour\"). The two are not interchangeable in register, though: es decir is the neutral, written-safe choice — you'll see it in reports, essays, and careful speech — while o sea is overwhelmingly the spoken, everyday choice, extremely common in conversation but a shade too casual for formal writing. Dicho de otro modo (\"put another way\") functions like a more deliberate, formal cousin of es decir, useful when you want to flag that a genuinely different phrasing is coming, not just a quick clarification.",
        "Mejor dicho belongs to a different family entirely: reformuladores rectificativos (rectifying reformulators). It doesn't just clarify — it corrects or sharpens something you just said, signaling \"actually, let me put that more accurately.\" Vive en Madrid — mejor dicho, en un pueblo cerca de Madrid (\"She lives in Madrid — or rather, in a town near Madrid\") tells the listener your first statement was slightly wrong or imprecise, and this is the fix. That's the real test for choosing between es decir/o sea and mejor dicho: are you rephrasing the same accurate idea for clarity, or walking back something you now realize was a bit off? Más bien works the same corrective way as mejor dicho and can substitute for it.",
        "One extra wrinkle worth knowing, precisely because it's a common trap: o sea also does a completely different job in casual spoken Spanish, introducing a consequence rather than a reformulation — Ya son las diez, o sea que llegamos tarde (\"It's already ten, so we're running late\"). This isn't a contradiction of the explanatory use; it's simply a second, extremely common function that spoken o sea (usually followed by que) has picked up. Recognize both, but keep them straight: reformulating a prior idea vs. drawing a conclusion from it are different jobs, even when the same word does both.",
      ],
      examples: [
        { es: 'La reunión es a las nueve, es decir, dentro de una hora.', en: 'The meeting is at nine, that is, in an hour.' },
        { es: 'Llego en un rato, o sea, sobre las ocho.', en: "I'll get there in a bit — that is, around eight." },
        { es: 'Vive en Madrid — mejor dicho, en un pueblo cerca de Madrid.', en: 'She lives in Madrid — or rather, in a town near Madrid.' },
        { es: 'El proyecto se pospone; dicho de otro modo, no se cancela, solo se retrasa.', en: "The project is being postponed; put another way, it's not cancelled, just delayed." },
        { es: 'Ya son las diez, o sea que llegamos tarde.', en: "It's already ten, so we're running late. (o sea introducing a consequence, not a reformulation)" },
      ],
      commonMistakes: [
        "Treating es decir and o sea as perfectly interchangeable in every context — they say the same kind of thing, but o sea skews strongly spoken/casual and can sound out of place in a formal report or essay, where es decir (or dicho de otro modo) is the safer choice.",
        "Reaching for mejor dicho when you're just clarifying, not correcting — mejor dicho specifically signals you're fixing or sharpening something imprecise you just said, not simply restating it in equivalent words (that's the job of es decir/o sea).",
        "Assuming o sea always reformulates — in casual speech, o sea (que) very often introduces a consequence instead (\"so...\"), a distinct function from its explanatory use, and only context tells you which job it's doing.",
      ],
    },
  ],

  vocab: [
    { es: 'el teletrabajo', en: 'remote work, telework', example: 'La empresa amplió el teletrabajo a tres días por semana.', exampleEn: 'The company expanded remote work to three days a week.' },
    { es: 'la conciliación (laboral y familiar)', en: 'work-life balance', example: 'El nuevo horario mejora la conciliación laboral y familiar.', exampleEn: 'The new schedule improves work-life balance.' },
    { es: 'la plantilla', en: 'staff, workforce', example: 'Casi toda la plantilla apoya la propuesta.', exampleEn: 'Almost the entire staff supports the proposal.' },
    { es: 'la propuesta', en: 'proposal', example: 'La dirección presentó una nueva propuesta de horario.', exampleEn: 'Management presented a new schedule proposal.' },
    { es: 'matizar', en: 'to qualify, to add nuance to', example: 'Quiero matizar lo que dije antes sobre el proyecto.', exampleEn: 'I want to qualify what I said earlier about the project.' },
    { es: 'el consenso', en: 'consensus', example: 'Todavía no hay consenso sobre el nuevo horario.', exampleEn: 'There is still no consensus on the new schedule.' },
  ],

  practice: [
    // ── reformuladores block (blocked practice: drilled alone before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: 'Read the passage, then answer: why does the speaker use "mejor dicho" in the last sentence instead of "es decir"?',
      passage: 'La empresa va a implementar un nuevo sistema de teletrabajo; es decir, los empleados podrán trabajar desde casa dos días a la semana. Muchos en la plantilla lo han recibido con entusiasmo, o sea, la mayoría está a favor. Sin embargo, el director no dijo que sería obligatorio — mejor dicho, cada equipo decidirá sus propios días según la carga de trabajo.',
      passageEn: "The company is going to roll out a new telework system; that is, employees will be able to work from home two days a week. Most of the staff have welcomed it enthusiastically — in other words, most are in favor. However, the director didn't say it would be mandatory — rather, each team will decide its own days based on workload.",
      word: 'mejor dicho',
      english: 'rather, more precisely (self-correction)',
      answer: 'Because they are correcting/sharpening what they just implied, not just rephrasing it in equivalent words',
      options: [
        'Because they are simply repeating the same idea in other words',
        'Because they are correcting/sharpening what they just implied, not just rephrasing it in equivalent words',
        'Because "mejor dicho" is more casual than "es decir"',
        'Because "mejor dicho" only works with negative sentences',
      ],
      concept_id: 'reformuladores',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: 'Según el texto, completa: "Muchos en la plantilla lo han recibido con entusiasmo, ___, la mayoría está a favor." (the casual, spoken reformulator)',
      word: 'o sea',
      english: 'that is, in other words',
      answer: 'o sea',
      concept_id: 'reformuladores',
      difficulty: 1,
      passage: 'La empresa va a implementar un nuevo sistema de teletrabajo; es decir, los empleados podrán trabajar desde casa dos días a la semana. Muchos en la plantilla lo han recibido con entusiasmo, o sea, la mayoría está a favor. Sin embargo, el director no dijo que sería obligatorio — mejor dicho, cada equipo decidirá sus propios días según la carga de trabajo.',
      passageEn: "The company is going to roll out a new telework system; that is, employees will be able to work from home two days a week. Most of the staff have welcomed it enthusiastically — in other words, most are in favor. However, the director didn't say it would be mandatory — rather, each team will decide its own days based on workload.",
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate this sentence from the text: "Es decir, los empleados podrán trabajar desde casa dos días a la semana."',
      word: 'es decir',
      english: 'that is',
      answer: 'That is, employees will be able to work from home two days a week.',
      concept_id: 'reformuladores',
      difficulty: 1,
      passage: 'La empresa va a implementar un nuevo sistema de teletrabajo; es decir, los empleados podrán trabajar desde casa dos días a la semana. Muchos en la plantilla lo han recibido con entusiasmo, o sea, la mayoría está a favor. Sin embargo, el director no dijo que sería obligatorio — mejor dicho, cada equipo decidirá sus propios días según la carga de trabajo.',
      passageEn: "The company is going to roll out a new telework system; that is, employees will be able to work from home two days a week. Most of the staff have welcomed it enthusiastically — in other words, most are in favor. However, the director didn't say it would be mandatory — rather, each team will decide its own days based on workload.",
    },
    {
      type: 'multiple_choice',
      prompt: 'In the dialogue, what is Luis doing when he says "¿O sea, crees que trabajamos menos desde casa?"',
      word: 'o sea',
      english: 'so, in other words (checking understanding)',
      answer: 'Checking his understanding by rephrasing what Ana just said',
      options: [
        'Introducing a completely new, unrelated topic',
        'Checking his understanding by rephrasing what Ana just said',
        'Correcting a factual error Ana made',
        'Ending the conversation politely',
      ],
      concept_id: 'reformuladores',
      difficulty: 2,
      passage: 'Ana: Me parece que el teletrabajo reduce la productividad.\nLuis: ¿En serio? O sea, ¿crees que trabajamos menos desde casa?\nAna: No exactamente. Es decir, no es que trabajemos menos, sino que la comunicación se resiente.\nLuis: Ah, mejor dicho, el problema no es la cantidad de trabajo, sino la coordinación del equipo.',
      passageEn: "Ana: I think telework reduces productivity.\nLuis: Really? So, do you mean you think we work less from home?\nAna: Not exactly. That is, it's not that we work less, but that communication suffers.\nLuis: Ah, in other words, the problem isn't the amount of work, but the team's coordination.",
    },
    {
      type: 'fill_blank',
      prompt: 'Completa la línea de Luis: "Ah, ___, el problema no es la cantidad de trabajo, sino la coordinación del equipo." (self-correcting, sharpening Ana\'s point)',
      word: 'mejor dicho',
      english: 'rather, put more precisely',
      answer: 'mejor dicho',
      concept_id: 'reformuladores',
      difficulty: 2,
      passage: 'Ana: Me parece que el teletrabajo reduce la productividad.\nLuis: ¿En serio? O sea, ¿crees que trabajamos menos desde casa?\nAna: No exactamente. Es decir, no es que trabajemos menos, sino que la comunicación se resiente.\nLuis: Ah, mejor dicho, el problema no es la cantidad de trabajo, sino la coordinación del equipo.',
      passageEn: "Ana: I think telework reduces productivity.\nLuis: Really? So, do you mean you think we work less from home?\nAna: Not exactly. That is, it's not that we work less, but that communication suffers.\nLuis: Ah, in other words, the problem isn't the amount of work, but the team's coordination.",
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, using a reformulator that corrects/refines a previous statement: 'She lives in Madrid — or rather, in a small town near Madrid.'",
      english: 'She lives in Madrid — or rather, in a small town near Madrid.',
      answer: 'Vive en Madrid — mejor dicho, en un pueblo pequeño cerca de Madrid.',
      word: 'mejor dicho',
      concept_id: 'reformuladores',
      difficulty: 3,
    },
    {
      type: 'error_correction',
      prompt: 'This line is from a formal written report, where the more casual reformulator sounds out of place: "El proyecto se retrasará un mes, o sea, no cumpliremos con el plazo original." Replace it with the neutral, written-register option.',
      word: 'es decir',
      english: 'that is (formal, written register)',
      answer: 'El proyecto se retrasará un mes; es decir, no cumpliremos con el plazo original.',
      concept_id: 'reformuladores',
      difficulty: 3,
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - reformuladores: the standard classification into reformuladores
//   explicativos (o sea, es decir, esto es, a saber — restating the same
//   idea for clarity, no correction implied) vs. reformuladores
//   rectificativos (mejor dicho, más bien — correcting/sharpening what was
//   just said); the register split within the explicativos group (o sea
//   dominant in speech and skewing casual, es decir/esto es/a saber the
//   written-safe/formal choices) — checked against Retóricas "Ejemplos de
//   Reformuladores," Castellano Actual (Universidad de Piura) "Los
//   reformuladores en el discurso," and the CVC (Centro Virtual Cervantes)
//   "Diccionario de términos clave de ELE" marcadores del discurso entry.
// - o sea's second, distinct function introducing a consequence in
//   colloquial speech (o sea que + indicative, "so...") as a genuinely
//   separate use from its explanatory/reformulating function, not a
//   contradiction of it — checked against a WordReference forum discussion
//   of "o sea (que)" and general es-decir-vs-o-sea register comparisons
//   (formal writing favors es decir; o sea is flagged as a filler/
//   colloquial marker in formal-vs-informal register guides).
// This content is complementary to the existing GRAMMAR_CARDS entry for
// reformuladores in src/content/grammar.js (same facts, fuller C2-paced
// walkthrough built around one running workplace-telework-debate theme)
// and does not contradict it. As a unit that explicitly builds on a prior
// unit's connector foundation (Unit 30, Connectors & Cohesion) rather than
// introducing a standalone grammar thread, this unit's prose deliberately
// foregrounds discourse function and register over new syntax.
//
// Curriculum-pacing-lag fix (07-09-2026): estructuradores_informacion and
// operadores_discursivos were removed from this unit (see header note for
// where each relocated); their citations, previously included here, now
// live in the audit notes of unit29-fixed-expressions.js and
// unit-b2-argumentation-workplace.js respectively. See ES.md's punch-list
// item 29.
