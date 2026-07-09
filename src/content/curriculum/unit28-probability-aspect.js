// Unit 28 — Verb Nuance: Periphrases, Prepositions & Quantifiers (B1)
// Covers: futuro_probabilidad, perifraseis_avanzadas, verbos_preposicionales, cuantificadores
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit assumes
// full mastery of the future and conditional tenses, the preterite/imperfect
// contrast, and the B1 periphrases acabar de and llevar + gerund/sin
// (unit16-recent-ongoing.js) — those two are referenced and reused, never
// re-taught from scratch here. Every Spanish claim below was verified via
// WebSearch against RAE-derived pedagogical summaries, Kwiziq Spanish,
// SpanishDict, Lawless Spanish, gramaticas.net, WordReference-adjacent
// pedagogical sources, and other established grammar references before
// writing — see the audit note at the bottom of this file for the specific
// claims checked.
//
// Curriculum-pacing-lag fix (07-09-2026): this unit moved from C1 to B1 and
// changed shape. The CEFR audit retagged futuro_probabilidad and
// perifraseis_avanzadas as B1, not C1 — they were only bundled with the
// genuinely-later condicional_probabilidad in the old version of this unit.
// condicional_probabilidad has moved out to the new subjunctive-
// counterfactuals-concession unit, where it now sits alongside
// pluperfect_subjunctive, aunque_concessive, and subjunctive_adjective_
// clauses (all sharing an unreal/hypothetical-reasoning theme, all
// correctly B2). In its place, this repurposed B1 slot gained verbos_
// preposicionales and cuantificadores — two concepts likewise retagged to
// B1 that used to live, mismatched, in the old C1 unit29-fixed-
// expressions.js. All four concepts here are now genuinely B1, and share a
// "sharpen your verbs, prepositions, and quantifiers" theme. Their prose
// and practice moved with them verbatim — see ES.md's punch-list item 29
// for the full pacing-lag writeup.

export default {
  sections: [
    {
      heading: 'Guessing About Now: The Future for Probability',
      paragraphs: [
        "You already know the simple future (el futuro) for talking about what's going to happen — hablaré, iremos, será. Now it's time to learn something that surprises a lot of learners the first time they meet it: Spanish speakers use that exact same tense, with the exact same conjugations, to do something that has nothing to do with the future at all — to guess about right now. In English, we handle this with a modal word or phrase: \"It must be about ten,\" \"She's probably at work,\" \"Where can he be?\" Spanish handles it by simply putting the verb in the future tense: Serán las diez. Estará en el trabajo. ¿Dónde estará?. No word for \"probably\" is required — the future tense itself already carries the meaning of a guess.",
        'The rule, stated directly: when a Spanish speaker uses the simple future about a present situation rather than a future one, the sentence expresses probability, conjecture, or supposition about now — grammars describe this as the future\'s "valor de conjetura." There\'s nothing new to memorize about the forms themselves — hablaré, tendrá, serán are the exact conjugations you already have — only the meaning shifts, and context is what tells a listener which reading is intended. Serán las diez said while checking a clock is a real future statement ("it will be ten o\'clock [later today]"); said with a shrug, glancing at a dim sky, it means "it must be about ten right now."',
        "This isn't limited to telling time. Any present-tense idea can be reframed as a guess this way: age (Tendrá unos quince años — \"She must be about fifteen\"), location or identity (¿Quién será? — \"Who could that be?\", said about someone at the door right now), cost (Costará unos cien euros — \"It probably costs around a hundred euros\"), or a state (Estará cansado — \"He must be tired\"). Notice none of these sentences describe something that hasn't happened yet — every one of them is a guess about a fact that's already true, right now, the speaker just doesn't know it for certain.",
        "This construction is extremely common in ordinary spoken Spanish — it's often the more natural, more compact choice compared to building a sentence with probablemente or debe de + infinitivo, even though those alternatives exist and are perfectly correct too. Native speakers reach for the future of probability constantly: guessing a stranger's age, wondering why someone hasn't answered the phone, estimating a price without checking the tag.",
      ],
      examples: [
        { es: 'Serán las diez.', en: 'It must be about ten o\'clock.' },
        { es: 'Estará en el trabajo todavía.', en: 'He must still be at work.' },
        { es: '¿Dónde estará Pedro? No lo veo.', en: 'Where can Pedro be? I don\'t see him.' },
        { es: 'Tendrá unos quince años.', en: 'She must be about fifteen.' },
        { es: 'Costará unos cien euros.', en: "It's probably about a hundred euros." },
        { es: '¿Quién llamará a estas horas?', en: 'Who can be calling at this hour?' },
      ],
      commonMistakes: [
        "Don't assume every future-tense sentence is describing something that hasn't happened yet — context matters. \"Estará cansado\" said about someone standing right in front of you is a guess about now, not a prediction about later.",
        'You never need to add probablemente or seguramente on top of the future of probability for the sentence to work — the tense alone already means "probably." (You can combine them for extra emphasis, but it\'s optional, not required.)',
        'This future-for-probability meaning only exists in the simple future about the present. To guess about the past, Spanish shifts one tense back to the conditional — a related concept you\'ll meet with pluperfect_subjunctive later on.',
      ],
    },
    {
      heading: 'Habits, Sudden Starts, Repeats, and Stops: Five More Verb Periphrases',
      paragraphs: [
        "Back in B1 you learned two verb periphrases for talking about time and duration: acabar de + infinitive (\"just did something\") and llevar + gerund / llevar + sin + infinitive (\"have been doing something\" / \"haven't done something for a while\"). Now you're adding five more periphrases to that same toolkit — each one pairs a conjugated auxiliary verb with an infinitive to express a nuance of aspect (how habitual, how sudden, whether repeated, whether stopped) that a plain tense alone can't capture.",
        "First: soler + infinitive, for habitual or customary action — things you usually do, or used to do. Suelo desayunar café con tostadas means \"I usually have coffee and toast for breakfast.\" The rule to state explicitly and remember: soler is essentially only used in the present (suelo, sueles, suele...) and the imperfect (solía, solías, solía...); a future or preterite form of soler is not something you'll hear from a native speaker in practice, even though a grammar table might technically list one. Present soler describes a current habit; imperfect solía describes a past habit, often one that no longer holds — soler leans noticeably spoken and informal, especially in storytelling, more so than in careful formal writing.",
        'Second: ponerse a + infinitive, for a sudden, often emotional or voluntary start. It overlaps with the more neutral empezar a ("to start"), but adds force: Empezó a llover simply reports that rain began, neutrally; Se puso a llover suggests it suddenly started pouring, more abruptly or dramatically. The same contrast shows up with people: Se puso a llorar de repente ("She suddenly burst into tears") carries an emotional, unplanned quality that Empezó a llorar wouldn\'t.',
        'Third: volver a + infinitive, for repetition — "to do something again." Volvió a llamarla al día siguiente means "He called her again the next day." This is the natural, idiomatic way to express "again" attached to a verb in Spanish — more common than tacking otra vez or de nuevo onto a plain verb, though those work too.',
        'Fourth: dejar de + infinitive, for stopping a habitual or ongoing action — Dejó de fumar hace un año ("She stopped smoking a year ago"). One paradox worth knowing on sight, because it inverts the meaning completely: negate it, and no dejar de + infinitive flips to mean the opposite — "to keep on doing something" or "can\'t stop doing something." No dejo de pensar en ti doesn\'t mean "I don\'t stop [in order] to think of you" — it means "I can\'t stop thinking about you." Two negatives (no + dejar) don\'t cancel out to a neutral statement; they land on a persistent, almost helpless continuation.',
        "And the fifth piece of this expanded toolkit is one you already own: llevar + time + sin + infinitive, from unit16, for how long an absence of action has lasted — Lleva diez años sin fumar (\"He hasn't smoked in ten years\"). It belongs in this same family of aspect-marking periphrases, so keep it active alongside these four new ones rather than filing it away as a separate, unrelated topic.",
      ],
      examples: [
        { es: 'Solía fumar en el balcón todas las noches.', en: 'He used to smoke on the balcony every night.' },
        { es: 'Se puso a llorar de repente.', en: 'She suddenly burst into tears.' },
        { es: 'Volvió a llamarla al día siguiente.', en: 'He called her again the next day.' },
        { es: 'Dejó de fumar hace un año.', en: 'She stopped smoking a year ago.' },
        { es: 'No dejo de pensar en ti.', en: "I can't stop thinking about you." },
        { es: 'Lleva diez años sin fumar.', en: "He hasn't smoked in ten years." },
      ],
      commonMistakes: [
        'Don\'t reach for a future or preterite form of soler — native speakers only use suele/solía (present/imperfect); anything else sounds off even if a table technically lists it.',
        "Don't treat ponerse a and empezar a as perfectly interchangeable — empezar a is neutral, while ponerse a signals a sudden, forceful, or emotionally charged start.",
        'Watch the double negative trap: dejar de fumar = "to stop smoking," but no dejar de fumar = "to keep on smoking / not be able to quit" — the negation flips the meaning, it doesn\'t just add "not."',
        'Keep sin followed by the plain infinitive in llevar + sin (sin fumar, never sin fumando) — the same rule from unit16 still applies here.',
      ],
    },
    {
      heading: 'Verbs That Insist on Their Own Preposition',
      paragraphs: [
        "English and Spanish verbs almost never line up preposition-for-preposition, and this is one of the most common sources of subtly \"off\" Spanish even from otherwise advanced learners. Many Spanish verbs are simply fused to a specific preposition — not because of any deeper logic you can derive, but because that's the fixed pairing native speakers use, full stop. These pairings have to be memorized as a unit, verb + preposition together, the same way you'd memorize a single vocabulary item.",
        'Some of the most useful pairs at this level: pensar en (to think about) — Pienso en ti todos los días ("I think about you every day"); soñar con (to dream about/of) — Sueño con viajar por el mundo ("I dream of traveling the world"); consistir en (to consist of) — El éxito consiste en la constancia ("Success consists of persistence"); depender de (to depend on) — Depende de la situación ("It depends on the situation"); and alegrarse de (to be glad about) — Me alegro de verte ("I\'m glad to see you"). Notice none of these match their English preposition: "think about" isn\'t pensar sobre, "dream of" isn\'t soñar de, "depend on" isn\'t depender en. Fighting the instinct to translate the English preposition literally is most of the battle here.',
        'One extra wrinkle worth knowing: pensar en (thinking about a person, thing, or topic — what\'s occupying your mind) is different from pensar de (asking or giving an opinion about something) — ¿Qué piensas de esta idea? ("What do you think of this idea?") is a completely separate, equally valid pattern, not an error. And when the complement of one of these verbs is an infinitive rather than a noun, the fixed preposition stays exactly in place: Sueño con vivir en España ("I dream of living in Spain"), Trato de entenderlo ("I try to understand it") — the preposition doesn\'t drop just because a verb follows.',
      ],
      examples: [
        { es: 'Pienso en ti todos los días.', en: 'I think about you every day.' },
        { es: 'Sueño con vivir en otro país algún día.', en: 'I dream of living in another country someday.' },
        { es: 'El éxito consiste en la constancia y la paciencia.', en: 'Success consists of persistence and patience.' },
        { es: 'Todo depende de la decisión del jefe.', en: "Everything depends on the boss's decision." },
        { es: 'Me alegro de que hayas venido.', en: "I'm glad that you came." },
        { es: '¿Qué piensas de esta idea? — Pienso que es excelente.', en: 'What do you think of this idea? — I think it\'s excellent.' },
      ],
      commonMistakes: [
        "Don't translate the English preposition literally — \"depend on\" is depender de (not depender en), \"dream of/about\" is soñar con (not soñar de), and \"think about\" is pensar en (not pensar sobre).",
        "Pensar en (thinking about someone/something) and pensar de (giving an opinion about something) look similar but do different jobs — mixing them up is a common intermediate-to-advanced slip.",
        "When these verbs are followed by an infinitive instead of a noun, the fixed preposition doesn't disappear: Sueño con viajar, not *Sueño viajar.",
      ],
    },
    {
      heading: 'Precision Quantifiers: Bastante, Demasiado, Cada, Ambos, Cualquiera',
      paragraphs: [
        "You already know the basic quantity words — mucho, poco — but fluent Spanish calls for sharper tools: quantifiers that carry more specific shades of meaning and, in several cases, their own distinct agreement quirks. Getting these exactly right is a clear marker of advanced fluency, because each one behaves just a little differently from the pattern you'd expect.",
        'Bastante means "quite a lot of" or "enough," and it changes only for number, never gender: bastante (singular, either gender) and bastantes (plural, either gender) — Tengo bastante tiempo ("I have quite a bit of time"), Hay bastantes personas aquí ("There are quite a few people here," not *bastante personas). Demasiado means "too much/too many," and as an adjective it fully agrees in both gender and number: demasiado ruido (masc. sing.), demasiada sal (fem. sing.), demasiados problemas (masc. pl.), demasiadas opciones (fem. pl.). But when demasiado instead modifies an adjective or adverb — meaning "too" rather than "too much" — it becomes invariable: La casa es demasiado grande ("The house is too big") never changes to *demasiada grande, even describing a feminine noun, because here demasiado is modifying grande (an adjective), not standing in for a noun itself.',
        'Cada ("each," "every") is invariable — it never takes a feminine or plural form at all, and the noun that follows it is normally singular even though the English translation ("every") can feel plural in spirit: cada estudiante ("each/every student," whether that student is male or female), cada casa ("each house"). The one exception: when cada is followed by a number greater than one, the following noun does pluralize — cada diez años ("every ten years"), cada tres días ("every three days") — because there you\'re counting a group of units, not a single item.',
        "Ambos/ambas means \"both,\" is always plural, agrees in gender with the noun (ambos hermanos, ambas hermanas), and — unlike los dos, its more everyday equivalent — never takes an article in front of it: ambos hermanos is correct, los ambos hermanos is not. Ambos also reads as more formal than los dos, so expect it more in writing and careful speech than in casual chat. Finally, cualquiera (\"any,\" \"whichever\") shortens to cualquier directly before a singular noun of either gender — cualquier libro, cualquier persona — but keeps its full form cualquiera when it stands alone as a pronoun or comes after the noun: Cualquiera puede hacerlo (\"Anyone can do it\"), un libro cualquiera (\"any book at all,\" with a slightly dismissive \"just any old book\" flavor when placed after the noun).",
      ],
      examples: [
        { es: 'Tengo bastante tiempo esta semana.', en: 'I have quite a bit of time this week.' },
        { es: 'Hay bastantes personas en la sala.', en: 'There are quite a few people in the room.' },
        { es: 'Compré demasiados libros este mes.', en: 'I bought too many books this month.' },
        { es: 'Esta sopa está demasiado salada.', en: 'This soup is too salty. (invariable, modifying an adjective)' },
        { es: 'Cada estudiante debe entregar su tarea el viernes.', en: 'Each student must turn in their homework on Friday.' },
        { es: 'El médico revisa el equipo cada seis meses.', en: 'The doctor checks the equipment every six months.' },
        { es: 'Ambas hermanas estudian medicina.', en: 'Both sisters are studying medicine.' },
        { es: 'Cualquier persona puede inscribirse; cualquiera puede intentarlo.', en: 'Any person can enroll; anyone can try.' },
      ],
      commonMistakes: [
        "Bastante only changes for number (bastante/bastantes), never gender — bastantes personas is correct, but there's no such thing as a special feminine form of bastante itself.",
        'Don\'t confuse demasiado-as-adjective (agrees fully: demasiados problemas) with demasiado-as-adverb (invariable: demasiado grande, demasiado caro, never *demasiada grande) — check whether it\'s modifying a noun or an adjective/adverb.',
        "Cada never changes form and is normally followed by a singular noun (cada estudiante, not *cada estudiantes) — except right before a number greater than one, where the following noun does pluralize: cada tres días.",
        "Never place an article before ambos/ambas — los ambos hermanos is incorrect; it's simply ambos hermanos.",
        "Cualquier (shortened) goes directly before the noun; cualquiera (full form) goes after the noun or stands alone as a pronoun — cualquier libro, but un libro cualquiera or Cualquiera sabe la respuesta.",
      ],
    },
  ],

  vocab: [
    { es: 'adivinar', en: 'to guess', example: 'No sé exactamente, pero voy a adivinar: serán las nueve.', exampleEn: "I don't know exactly, but I'll guess: it must be nine." },
    { es: 'suponer', en: 'to suppose / assume', example: 'Supongo que tiene unos cuarenta años.', exampleEn: 'I suppose he is about forty.' },
    { es: 'sospechar', en: 'to suspect', example: 'Sospecho que dejó de venir por vergüenza.', exampleEn: 'I suspect he stopped coming out of embarrassment.' },
    { es: 'calcular', en: 'to estimate / calculate', example: 'Calculo que llevan diez años casados.', exampleEn: "I'd estimate they've been married ten years." },
    { es: 'de repente', en: 'suddenly', example: 'De repente, se puso a llover con fuerza.', exampleEn: 'Suddenly, it started pouring rain.' },
    { es: 'de vez en cuando', en: 'once in a while', example: 'De vez en cuando vuelve a fumar, aunque lo dejó hace años.', exampleEn: 'Once in a while he smokes again, even though he quit years ago.' },
    { es: 'a menudo', en: 'often', example: 'Solía visitarnos a menudo cuando vivía cerca.', exampleEn: 'He used to visit us often when he lived nearby.' },
    { es: 'con frecuencia', en: 'frequently', example: 'Con frecuencia se ponía a cantar sin motivo.', exampleEn: 'He would frequently burst into song for no reason.' },
    { es: 'la costumbre', en: 'the habit / custom', example: 'Tenía la costumbre de leer antes de dormir.', exampleEn: 'He had the habit of reading before bed.' },
    { es: 'el hábito', en: 'the habit', example: 'Dejar un hábito de tantos años no es fácil.', exampleEn: "Breaking a habit of so many years isn't easy." },
    { es: 'envejecer', en: 'to grow old / age', example: 'Envejeció mucho después de jubilarse.', exampleEn: 'He aged a lot after retiring.' },
    { es: 'la infancia', en: 'childhood', example: 'En su infancia, solía pasar los veranos en el campo.', exampleEn: 'In his childhood, he used to spend summers in the countryside.' },
    { es: 'de joven', en: 'as a young person', example: 'De joven, tenía unos veinte años cuando emigró.', exampleEn: 'As a young man, he was about twenty when he emigrated.' },
    { es: 'en aquella época', en: 'back in those days / at that time', example: 'En aquella época, no había teléfonos móviles.', exampleEn: 'Back in those days, there were no cellphones.' },
    { es: 'seguramente', en: 'surely / most likely', example: 'Seguramente estará durmiendo a esta hora.', exampleEn: "He's most likely sleeping at this hour." },
    { es: 'probablemente', en: 'probably', example: 'Probablemente tenga razón, aunque no lo sé con certeza.', exampleEn: "He's probably right, though I don't know for sure." },
    { es: 'aproximadamente', en: 'approximately', example: 'Costará aproximadamente cien euros.', exampleEn: 'It will probably cost approximately a hundred euros.' },
    { es: 'imaginarse', en: 'to imagine', example: 'Me imagino que estará muy cansada después del vuelo.', exampleEn: 'I imagine she must be very tired after the flight.' },
    { es: 'pensar en', en: 'to think about (someone/something)', example: 'Pienso en ti todos los días.', exampleEn: 'I think about you every day.' },
    { es: 'soñar con', en: 'to dream about/of', example: 'Sueño con viajar por el mundo.', exampleEn: 'I dream of traveling the world.' },
    { es: 'consistir en', en: 'to consist of', example: 'El éxito consiste en la constancia.', exampleEn: 'Success consists of persistence.' },
    { es: 'depender de', en: 'to depend on', example: 'Depende de la situación.', exampleEn: 'It depends on the situation.' },
    { es: 'alegrarse de', en: 'to be glad about', example: 'Me alegro de verte.', exampleEn: "I'm glad to see you." },
    { es: 'bastante / bastantes', en: 'quite a lot of / enough (agrees only in number)', example: 'Hay bastantes personas aquí.', exampleEn: 'There are quite a few people here.' },
    { es: 'demasiado/a(s)', en: 'too much/many (adjective, agrees) / too (adverb, invariable)', example: 'Compré demasiados libros.', exampleEn: 'I bought too many books.' },
    { es: 'cada', en: 'each / every (invariable, singular noun)', example: 'Cada estudiante tiene su propio horario.', exampleEn: 'Each student has their own schedule.' },
    { es: 'ambos/ambas', en: 'both (no article, agrees in gender)', example: 'Ambas hermanas estudian medicina.', exampleEn: 'Both sisters are studying medicine.' },
    { es: 'cualquier', en: 'any (shortened form, before a singular noun)', example: 'Cualquier persona puede inscribirse.', exampleEn: 'Any person can enroll.' },
    { es: 'cualquiera', en: 'anyone / any (full form, pronoun or after noun)', example: 'Cualquiera puede intentarlo.', exampleEn: 'Anyone can try it.' },
  ],

  practice: [
    // ── futuro_probabilidad block (blocked practice: drill this concept in isolation first) ──
    { type: 'multiple_choice', prompt: 'Which of these best captures the idea in "Serán las diez"?', word: 'ser (futuro de probabilidad)', english: "it must be / it's probably", answer: 'It must be about ten o\'clock right now.', options: ['It will definitely be ten o\'clock next week.', 'It must be about ten o\'clock right now.', 'It was ten o\'clock yesterday.', 'Please be ten o\'clock.'], concept_id: 'futuro_probabilidad', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the future of probability: "¿Dónde ___ Juan? No contesta el teléfono." (estar)', word: 'estar', english: 'to be (location)', answer: 'estará', concept_id: 'futuro_probabilidad', difficulty: 2 },
    {
      type: 'translation_to_spanish',
      prompt: "Based on the scene in the passage, translate: 'He must be tired after such a long day.'",
      english: 'He must be tired after such a long day.',
      answer: 'Estará cansado después de un día tan largo.',
      word: 'estar (futuro de probabilidad)',
      concept_id: 'futuro_probabilidad',
      difficulty: 2,
      passage: 'Marta no lleva reloj esta noche. —¿Qué hora será? —pregunta, mirando la ventana oscura. Su amiga Rosa se encoge de hombros. —Serán las diez, más o menos. Todavía no ha llegado nadie a la fiesta. Raro, ¿no? Diego siempre es puntual. —Estará atrapado en el tráfico —dice Marta—, o tal vez estará cansado después de un día tan largo en la oficina. Su hermano tendrá la culpa, seguro: siempre le pide favores imposibles a última hora.',
      passageEn: "Marta isn't wearing a watch tonight. \"What time do you think it is?\" she asks, looking at the dark window. Her friend Rosa shrugs. \"It's probably around ten. Nobody's arrived at the party yet. Weird, right? Diego is always punctual.\" \"He's probably stuck in traffic,\" says Marta, \"or maybe he's just tired after such a long day at the office. His brother is probably to blame — he's always asking him for impossible favors at the last minute.\"",
    },
    {
      type: 'translation_to_english',
      prompt: 'In the passage, translate: "Estará atrapado en el tráfico."',
      word: 'estar (futuro de probabilidad)',
      english: "he's probably stuck",
      answer: "He's probably stuck in traffic.",
      concept_id: 'futuro_probabilidad',
      difficulty: 2,
      passage: 'Marta no lleva reloj esta noche. —¿Qué hora será? —pregunta, mirando la ventana oscura. Su amiga Rosa se encoge de hombros. —Serán las diez, más o menos. Todavía no ha llegado nadie a la fiesta. Raro, ¿no? Diego siempre es puntual. —Estará atrapado en el tráfico —dice Marta—, o tal vez estará cansado después de un día tan largo en la oficina. Su hermano tendrá la culpa, seguro: siempre le pide favores imposibles a última hora.',
      passageEn: "Marta isn't wearing a watch tonight. \"What time do you think it is?\" she asks, looking at the dark window. Her friend Rosa shrugs. \"It's probably around ten. Nobody's arrived at the party yet. Weird, right? Diego is always punctual.\" \"He's probably stuck in traffic,\" says Marta, \"or maybe he's just tired after such a long day at the office. His brother is probably to blame — he's always asking him for impossible favors at the last minute.\"",
    },
    {
      type: 'multiple_choice',
      prompt: 'Based on the passage, why does Rosa say "Serán las diez" instead of stating the time directly?',
      word: 'futuro de probabilidad',
      english: 'guessing about the present',
      answer: 'She is making an educated guess because neither of them has checked a clock.',
      options: ['She is certain of the exact time.', 'She is making an educated guess because neither of them has checked a clock.', 'She is talking about what time it will be tomorrow.', 'She misspoke and meant "Son las diez."'],
      concept_id: 'futuro_probabilidad',
      difficulty: 3,
      passage: 'Marta no lleva reloj esta noche. —¿Qué hora será? —pregunta, mirando la ventana oscura. Su amiga Rosa se encoge de hombros. —Serán las diez, más o menos. Todavía no ha llegado nadie a la fiesta. Raro, ¿no? Diego siempre es puntual. —Estará atrapado en el tráfico —dice Marta—, o tal vez estará cansado después de un día tan largo en la oficina. Su hermano tendrá la culpa, seguro: siempre le pide favores imposibles a última hora.',
      passageEn: "Marta isn't wearing a watch tonight. \"What time do you think it is?\" she asks, looking at the dark window. Her friend Rosa shrugs. \"It's probably around ten. Nobody's arrived at the party yet. Weird, right? Diego is always punctual.\" \"He's probably stuck in traffic,\" says Marta, \"or maybe he's just tired after such a long day at the office. His brother is probably to blame — he's always asking him for impossible favors at the last minute.\"",
    },
    { type: 'error_correction', prompt: 'Find and correct the error: "Juan no contesta el teléfono. Estuvo trabajando, seguramente." (The speaker means "He\'s probably working" — a guess about right now, not something that already happened and finished.)', word: 'estar (futuro de probabilidad)', english: "he's probably working", answer: 'Estará trabajando, seguramente.', concept_id: 'futuro_probabilidad', difficulty: 3 },

    // ── perifraseis_avanzadas block (kept separate from the other concepts; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which periphrasis expresses a habitual, customary action?', word: 'soler', english: 'to usually do something', answer: 'soler + infinitivo', options: ['ponerse a + infinitivo', 'soler + infinitivo', 'volver a + infinitivo', 'dejar de + infinitivo'], concept_id: 'perifraseis_avanzadas', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with ponerse a (sudden start): "Cuando escuchó la noticia, ___ a llorar." (ponerse, preterite)', word: 'ponerse a', english: 'to suddenly start doing', answer: 'se puso', concept_id: 'perifraseis_avanzadas', difficulty: 2 },
    {
      type: 'translation_to_spanish',
      prompt: "Based on the passage, translate: 'He used to smoke on the balcony every night.'",
      english: 'He used to smoke on the balcony every night.',
      answer: 'Solía fumar en el balcón todas las noches.',
      word: 'soler',
      concept_id: 'perifraseis_avanzadas',
      difficulty: 2,
      passage: 'Mi abuelo solía fumar en el balcón todas las noches después de cenar, un ritual que duró décadas. Un día, sin previo aviso, dejó de fumar por completo; llevaba ya diez años sin tocar un cigarrillo cuando yo nací. Sorprendentemente, tras jubilarse, volvió a fumar durante unos meses, algo que preocupó mucho a mi abuela. Cuando ella se enteró, se puso a llorar en la cocina, convencida de que la historia se repetiría. Por suerte, mi abuelo lo dejó de nuevo, esta vez para siempre, y hasta hoy no ha vuelto a fumar.',
      passageEn: "My grandfather used to smoke on the balcony every night after dinner, a ritual that lasted decades. One day, out of nowhere, he stopped smoking completely; he had already gone ten years without touching a cigarette by the time I was born. Surprisingly, after retiring, he started smoking again for a few months, which worried my grandmother a great deal. When she found out, she burst into tears in the kitchen, convinced the whole story would repeat itself. Luckily, my grandfather quit again, this time for good, and to this day he hasn't smoked again.",
    },
    {
      type: 'translation_to_english',
      prompt: 'In the passage, translate: "Un día, sin previo aviso, dejó de fumar por completo."',
      word: 'dejar de',
      english: 'he stopped completely',
      answer: 'One day, out of nowhere, he stopped smoking completely.',
      concept_id: 'perifraseis_avanzadas',
      difficulty: 2,
      passage: 'Mi abuelo solía fumar en el balcón todas las noches después de cenar, un ritual que duró décadas. Un día, sin previo aviso, dejó de fumar por completo; llevaba ya diez años sin tocar un cigarrillo cuando yo nací. Sorprendentemente, tras jubilarse, volvió a fumar durante unos meses, algo que preocupó mucho a mi abuela. Cuando ella se enteró, se puso a llorar en la cocina, convencida de que la historia se repetiría. Por suerte, mi abuelo lo dejó de nuevo, esta vez para siempre, y hasta hoy no ha vuelto a fumar.',
      passageEn: "My grandfather used to smoke on the balcony every night after dinner, a ritual that lasted decades. One day, out of nowhere, he stopped smoking completely; he had already gone ten years without touching a cigarette by the time I was born. Surprisingly, after retiring, he started smoking again for a few months, which worried my grandmother a great deal. When she found out, she burst into tears in the kitchen, convinced the whole story would repeat itself. Luckily, my grandfather quit again, this time for good, and to this day he hasn't smoked again.",
    },
    {
      type: 'multiple_choice',
      prompt: 'According to the passage, what happened after the grandfather retired?',
      word: 'volver a',
      english: 'to do again',
      answer: 'He went back to smoking again for a few months.',
      options: ['He started smoking for the very first time.', 'He went back to smoking again for a few months.', 'He never smoked again for the rest of his life.', 'He only ever smoked in secret.'],
      concept_id: 'perifraseis_avanzadas',
      difficulty: 3,
      passage: 'Mi abuelo solía fumar en el balcón todas las noches después de cenar, un ritual que duró décadas. Un día, sin previo aviso, dejó de fumar por completo; llevaba ya diez años sin tocar un cigarrillo cuando yo nací. Sorprendentemente, tras jubilarse, volvió a fumar durante unos meses, algo que preocupó mucho a mi abuela. Cuando ella se enteró, se puso a llorar en la cocina, convencida de que la historia se repetiría. Por suerte, mi abuelo lo dejó de nuevo, esta vez para siempre, y hasta hoy no ha vuelto a fumar.',
      passageEn: "My grandfather used to smoke on the balcony every night after dinner, a ritual that lasted decades. One day, out of nowhere, he stopped smoking completely; he had already gone ten years without touching a cigarette by the time I was born. Surprisingly, after retiring, he started smoking again for a few months, which worried my grandmother a great deal. When she found out, she burst into tears in the kitchen, convinced the whole story would repeat itself. Luckily, my grandfather quit again, this time for good, and to this day he hasn't smoked again.",
    },
    { type: 'error_correction', prompt: 'Find and correct the error: "Mi tía suele fumar durante veinte años, pero ya no." (The speaker means her aunt used to smoke, habitually, for twenty years, but not anymore — a discontinued past habit.)', word: 'soler', english: 'used to do something', answer: 'Mi tía solía fumar durante veinte años, pero ya no.', concept_id: 'perifraseis_avanzadas', difficulty: 3 },

    // ── verbos_preposicionales block ──
    { type: 'fill_blank', prompt: 'Complete with the correct preposition: "Pienso ___ ti todos los días."', word: 'en', english: 'about', answer: 'en', concept_id: 'verbos_preposicionales', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct preposition: "Sueño ___ vivir en otro país."', word: 'con', english: 'of/about', answer: 'con', concept_id: 'verbos_preposicionales', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which preposition correctly completes "El éxito consiste ___ la constancia"?', word: 'en', english: 'of', answer: 'en', options: ['de', 'en', 'con', 'a'], concept_id: 'verbos_preposicionales', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It depends on the situation.'", english: 'It depends on the situation.', answer: 'Depende de la situación.', word: 'depender de', concept_id: 'verbos_preposicionales', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I'm glad that you came.'", english: "I'm glad that you came.", answer: 'Me alegro de que hayas venido.', word: 'alegrarse de', concept_id: 'verbos_preposicionales', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the preposition error: "Todo depende en la decisión del jefe."', word: 'depende de', english: 'depends on', answer: 'Todo depende de la decisión del jefe.', concept_id: 'verbos_preposicionales', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate, noting the different pattern: "¿Qué piensas de esta idea?"', word: 'pensar de', english: 'What do you think of this idea?', answer: 'What do you think of this idea?', altAnswers: ['What do you think about this idea?'], concept_id: 'verbos_preposicionales', difficulty: 3 },

    // ── cuantificadores block ──
    { type: 'fill_blank', prompt: 'Complete (agreement in number only): "Hay bastant___ personas en la sala."', word: 'bastantes', english: 'quite a few', answer: 'bastantes', concept_id: 'cuantificadores', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete (adjective, agrees with masculine plural "problemas"): "Tenemos demasiad___ problemas."', word: 'demasiados', english: 'too many', answer: 'demasiados', concept_id: 'cuantificadores', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which is correct: "Esta sopa está ___ salada" (too, modifying an adjective — invariable)?', word: 'demasiado', english: 'too', answer: 'demasiado', options: ['demasiada', 'demasiado', 'demasiados', 'demasiadas'], concept_id: 'cuantificadores', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Each student must turn in their homework.'", english: 'Each student must turn in their homework.', answer: 'Cada estudiante debe entregar su tarea.', word: 'cada', concept_id: 'cuantificadores', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the article error: "Los ambos hermanos estudian medicina."', word: 'ambos', english: 'both', answer: 'Ambos hermanos estudian medicina.', concept_id: 'cuantificadores', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which correctly completes "___ persona puede inscribirse" (directly before the noun)?', word: 'cualquier', english: 'any', answer: 'Cualquier', options: ['Cualquiera', 'Cualquier', 'Cualesquiera', 'Cada'], concept_id: 'cuantificadores', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "El médico revisa el equipo cada seis meses."', word: 'cada seis meses', english: 'The doctor checks the equipment every six months.', answer: 'The doctor checks the equipment every six months.', concept_id: 'cuantificadores', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against RAE-derived pedagogical
// summaries, Kwiziq Spanish, SpanishDict, Lawless Spanish, gramaticas.net,
// WordReference-adjacent pedagogical sources, elon.io, realfastspanish.com,
// ithinklanguages.com, and the existing GRAMMAR_CARDS entries for these
// concepts in src/content/grammar.js:
// - The simple future expresses probability/conjecture about the present
//   (RAE's "valor de conjetura o probabilidad") — confirmed via Kwiziq
//   Spanish's "El Futuro Simple for prediction, speculation and probability
//   in the present" and multiple corroborating sources (Sprachcaffe,
//   SpanishPod101, Wisc.pb.unizin.org "The Future of Probability"); the
//   "Serán las diez" / "No tengo reloj pero serán las once y media" example
//   pattern is directly attested.
// - Soler + infinitive expresses habitual action and is essentially confined
//   to the present (suelo/sueles/suele...) and imperfect (solía/solías...);
//   future/conditional forms (soleré, solería) are effectively nonexistent,
//   and the technically-possible preterite (solí) is unused by native
//   speakers — confirmed via realfastspanish.com and Kwiziq Spanish's "Soler
//   (imperfect) + infinitive" pages, and matches the existing GRAMMAR_CARDS
//   exceptions note.
// - Ponerse a + infinitive marks a sudden, voluntary, or emotionally charged
//   start of an action, contrasting with the neutral empezar a/comenzar a —
//   confirmed via Kwiziq's empezar/comenzar entry and multiple verbal-
//   periphrasis overviews (Talkpal, Digestible Notes, SpanishDict's
//   "Verbal Periphrasis in Spanish" guide), all giving the same Se puso a
//   llorar / Empezó a llorar contrast used in this unit.
// - Volver a + infinitive expresses repetition ("to do again"), losing
//   volver's literal "to return" meaning entirely in this construction, and
//   is the preferred idiomatic way to express "again" attached to a verb —
//   confirmed via Kwiziq's "Volver a + [infinitive] to express repetition"
//   and holaquepasa.com.
// - Dejar de + infinitive expresses stopping a habitual or ongoing action —
//   confirmed via Kwiziq's "Dejar de + [infinitive]" entry and
//   ithinklanguages.com. The negated form no dejar de + infinitive flips to
//   mean "to keep on doing / can't stop doing" (No dejo de pensar en ti = "I
//   can't stop thinking about you") rather than a plain negation — confirmed
//   via an italki native-speaker discussion thread and cross-checked against
//   the general dejar de/no dejar de contrast documented across multiple
//   grammar sources.
// - Llevar + time + sin + infinitive (duration of non-action) is reused
//   as-taught from unit16-recent-ongoing.js, not re-verified here since it
//   is a prerequisite concept already audited in that unit's own note.
// - fixed verb+preposition pairings pensar en, soñar con, consistir en,
//   depender de, alegrarse de, none of which map to their literal English
//   prepositions, plus the pensar en (think about) vs. pensar de (opinion
//   of) distinction and preposition retention before an infinitive
//   complement (blog.worldsacross.com "How to use 'pensar en', 'soñar con',
//   and other key structures"; Real Fast Spanish "25 Common Spanish Verbs
//   and Their Prepositions"), consistent with the existing
//   verbos_preposicionales card in src/content/grammar.js.
// - bastante/bastantes agreeing only in number, never gender, as both
//   adjective and adverb (spanishgrammar.net "Spanish Quantifiers Guide").
// - demasiado/a(s) agreeing fully in gender and number as an adjective
//   modifying a noun (demasiados problemas) but staying invariable as an
//   adverb modifying an adjective/adverb (demasiado grande) (Study.com/
//   Wyzant adverb-vs-adjective guides; spanishgrammar.net quantifiers guide).
// - cada as invariable (no gender or plural form) and normally followed by
//   a singular noun, with the specific exception that a following numeral
//   greater than one pluralizes the noun (cada diez años) (Kwiziq "Cada +
//   noun for each + noun"; Kwiziq "Cada and plural nouns"; Elon.io "Cada:
//   'cada día'").
// - ambos/ambas as always plural, agreeing in gender with its noun, never
//   preceded by an article (ambos hermanos, not los ambos hermanos), and
//   more formal in register than los dos (SpanishStep "'Ambos' vs 'Los dos'
//   in Spanish"; SpanishStep "How to Use 'Ambos' in Spanish in Clear Formal
//   Sentences").
// - cualquiera shortening to cualquier directly before a singular noun of
//   either gender, and retaining its full form as a pronoun or when placed
//   after the noun (FluentU "Apocopation in Spanish"; Spanish for London
//   "Cualquier vs Cualquiera in Spanish"; Kwiziq "Cualquier/a = any").
// This content is complementary to the existing GRAMMAR_CARDS entries for
// futuro_probabilidad, perifraseis_avanzadas, verbos_preposicionales, and
// cuantificadores in src/content/grammar.js (same facts, fuller B1-paced
// walkthrough with original passages) and does not contradict them.
//
// Curriculum-pacing-lag fix (07-09-2026): condicional_probabilidad was
// removed from this unit and relocated, verbatim, to the new subjunctive-
// counterfactuals-concession unit; verbos_preposicionales and
// cuantificadores were added, verbatim, from the old unit29-fixed-
// expressions.js. See ES.md's punch-list item 29.
