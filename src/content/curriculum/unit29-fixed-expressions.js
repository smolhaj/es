// Unit 29 — Passive, Concession & Fixed Expressions (C1)
// Covers: ser_passive, aunque_concessive, verbos_preposicionales, cuantificadores
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose — the content here
// is C1-level, but the prose explaining it stays as plain and direct as
// unit01's, per the style precedent set there. Every Spanish claim below was
// verified against SpanishDict, WordReference-adjacent pedagogical sources,
// Kwiziq, and other established grammar references before writing — see the
// audit note at the bottom of this file for the specific claims checked.
// This is the first C1 unit in the curriculum (units 1-24 covered A1-B2;
// unit 25 was the B2 capstone "Fine Details" catch-all). Like unit25, this
// unit groups several loosely related advanced topics into one cohesive
// unit rather than a single grammar thread. Ordering follows the assignment
// given for this unit: ser_passive, aunque_concessive,
// verbos_preposicionales, cuantificadores.

export default {
  sections: [
    {
      heading: 'The Formal Passive: Ser + Participio',
      paragraphs: [
        "You already know Spanish has a passive-like structure with se — se aprobó la ley (\"the law was approved\") — and that this se-construction is by far the most common way Spanish expresses a passive idea in everyday speech and writing. C1 Spanish adds the other passive: ser + past participle, the direct structural cousin of the English passive (\"the law was approved by parliament\"). La ley fue aprobada por el parlamento uses exactly this pattern — ser (conjugated in whatever tense fits) plus a past participle that agrees in gender and number with the subject, optionally followed by por + the agent, the person or thing doing the action.",
        "Here's the part that matters most at this level: the ser-passive is not simply a formal-sounding synonym for the se-passive — it's a genuinely different register choice. Spoken Spanish strongly prefers active voice or the se-passive; reaching for ser + participio in casual conversation can sound stiff, translated, or unnatural, almost like a native English speaker hearing someone say \"it was decided by this committee that...\" in a text message. The ser-passive belongs to formal written registers — news reporting, legal and administrative documents, academic writing, historical narration — precisely the contexts where English speakers instinctively expect a passive construction and where Spanish, unusually, actually delivers one that maps closely onto English syntax.",
        'Two more pieces complete the picture. First, the ser-passive almost always benefits from stating or at least implying an agent (the por phrase) — El puente fue construido por una empresa francesa (\"The bridge was built by a French company\"). When there\'s no agent to mention and the focus is purely on the action itself, Spanish usually reaches for se instead (se construyó el puente), which is one more reason the se-passive dominates ordinary usage: most everyday statements don\'t bother naming who did something. Second, don\'t confuse the passive (an event, an action being done) with the resultant state built from estar + participle: La ley fue aprobada describes the act of approval happening; La ley está aprobada describes the state of already being approved, with no focus on the act at all.',
      ],
      examples: [
        { es: 'La ley fue aprobada por el parlamento.', en: 'The law was approved by parliament.' },
        { es: 'El puente fue construido por una empresa francesa.', en: 'The bridge was built by a French company.' },
        { es: 'Los sospechosos fueron detenidos por la policía anoche.', en: 'The suspects were arrested by the police last night.' },
        { es: 'Se aprobó la ley ayer.', en: 'The law was approved yesterday. (se-passive, no agent named — the everyday spoken choice)' },
        { es: 'El informe ya está redactado.', en: 'The report is already written. (resultant state with estar, not an action)' },
      ],
      commonMistakes: [
        "Don't reach for ser + participio in everyday spoken Spanish the way you'd reach for the passive in casual English — native speakers overwhelmingly prefer se or active voice in conversation, saving ser + participio for formal writing and journalism.",
        'The past participle must agree with the subject in gender and number: la ley fue aprobada (feminine, to match ley), los sospechosos fueron detenidos (masculine plural) — treat it like any other adjective agreement.',
        "Don't confuse fue aprobada (the event of being approved, ser) with está aprobada (the resulting state of already being approved, estar) — one narrates an action, the other describes a condition.",
      ],
    },
    {
      heading: 'Aunque: One Word, Two Very Different Meanings',
      paragraphs: [
        'Aunque translates to both "although" and "even if" in English, and which one you mean is signaled entirely by whether the verb that follows is in the indicative or the subjunctive — this single mood choice does real, meaningful work in Spanish that English has to handle with two different words instead. Get comfortable with this pattern and you unlock a genuinely C1-level piece of precision.',
        'Aunque + indicative presents the concession as a known, established fact — something the speaker accepts as true and is conceding despite. Aunque llueve, salgo ("Although it\'s raining — and it genuinely is raining right now — I\'m going out") states plainly that rain is a real, current fact; the speaker is simply saying it won\'t change their plans. Aunque es caro, lo voy a comprar ("Although it\'s expensive, I\'m going to buy it") works the same way — the price is a known, agreed-upon fact, not a guess.',
        'Aunque + subjunctive shifts the concession into hypothetical, uncertain, or dismissed territory — "even if," rather than "although." Aunque llueva, saldré ("Even if it rains — we don\'t yet know whether it will, or it simply doesn\'t matter to the plan — I\'ll go out") treats the rain as unconfirmed or irrelevant to the outcome, not as an established fact. The subjunctive here isn\'t about objective truth — it\'s about the speaker\'s stance toward the information: are they presenting it as settled reality, or waving it off as uncertain, unknown, or beside the point? Aunque no tengas dinero, puedes venir ("Even if you don\'t have money, you can come") dismisses a hypothetical objection as irrelevant to the invitation, regardless of whether it turns out to be true.',
        "A useful mental test: if you could naturally follow the sentence with \"...and this is definitely true,\" you want the indicative. If it feels more like \"...whether or not that ends up being the case,\" you want the subjunctive. The same indicative/subjunctive split extends to other concessive conjunctions you may encounter in more formal or written Spanish, like a pesar de que and pese a que — same logic, same test.",
      ],
      examples: [
        { es: 'Aunque llueve, salgo a caminar.', en: "Although it's raining (it really is), I'm going out for a walk." },
        { es: 'Aunque llueva, saldré a caminar.', en: "Even if it rains (we don't know / it doesn't matter), I'll go out for a walk." },
        { es: 'Aunque es caro, lo voy a comprar.', en: "Although it's expensive (known fact), I'm going to buy it." },
        { es: 'Aunque fuera millonario, no se lo compraría.', en: "Even if he were a millionaire (he isn't), he wouldn't buy it for himself." },
        { es: 'Aunque no tengas dinero, puedes venir a la fiesta.', en: "Even if you don't have money, you can come to the party." },
      ],
      commonMistakes: [
        'The choice between indicative and subjunctive after aunque is about the known-vs-hypothetical distinction, not about whether the statement is actually true in the end — a speaker can use the subjunctive about something that later turns out to be true, because at the moment of speaking they were framing it as unconfirmed or irrelevant.',
        'Don\'t assume aunque always means "although" — check the mood of the verb that follows before you translate: aunque + indicative = "although" (real fact), aunque + subjunctive = "even if" (hypothetical/dismissed).',
        "This same indicative/subjunctive split applies to other concessive expressions like a pesar de que and pese a que — don't treat aunque as an isolated special case.",
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
        "You already know the basic quantity words — mucho, poco — but C1 Spanish calls for sharper tools: quantifiers that carry more specific shades of meaning and, in several cases, their own distinct agreement quirks. Getting these exactly right is a clear marker of advanced fluency, because each one behaves just a little differently from the pattern you'd expect.",
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
    { es: 'ser + participio', en: 'formal passive voice ("was done by")', example: 'La ley fue aprobada por el parlamento.', exampleEn: 'The law was approved by parliament.' },
    { es: 'por (agente)', en: 'by (introduces the agent in a passive)', example: 'El puente fue construido por una empresa francesa.', exampleEn: 'The bridge was built by a French company.' },
    { es: 'redactar', en: 'to draft / write up (formally)', example: 'El informe ya está redactado.', exampleEn: 'The report is already written up.' },
    { es: 'aunque + indicativo', en: 'although (known, real fact)', example: 'Aunque llueve, salgo a caminar.', exampleEn: "Although it's raining, I'm going out for a walk." },
    { es: 'aunque + subjuntivo', en: 'even if (hypothetical, dismissed)', example: 'Aunque llueva, saldré a caminar.', exampleEn: "Even if it rains, I'll go out for a walk." },
    { es: 'a pesar de que', en: 'despite the fact that (concessive, same mood logic as aunque)', example: 'A pesar de que es tarde, voy a terminar.', exampleEn: "Despite the fact that it's late, I'm going to finish." },
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
    // ── ser_passive block (blocked practice: drill in isolation before interleaving elsewhere) ──
    {
      type: 'multiple_choice',
      prompt: 'Read the passage, then answer: which register does this passage represent?',
      passage: 'El nuevo puente sobre el río Marañón fue inaugurado ayer por el gobernador regional ante cientos de asistentes. La obra, financiada por el ministerio de transporte, fue construida en un plazo de dieciocho meses. Según los ingenieros, el puente ha sido diseñado para resistir terremotos de gran magnitud. Se espera que la infraestructura sea utilizada por más de veinte mil vehículos al día.',
      passageEn: 'The new bridge over the Marañón River was inaugurated yesterday by the regional governor before hundreds of attendees. The project, financed by the ministry of transportation, was built over an eighteen-month period. According to the engineers, the bridge has been designed to withstand major earthquakes. The infrastructure is expected to be used by more than twenty thousand vehicles per day.',
      word: 'fue inaugurado',
      english: 'formal/journalistic (news report)',
      answer: 'formal/journalistic (news report)',
      options: ['casual spoken conversation', 'formal/journalistic (news report)', 'a text message between friends', 'a children\'s story'],
      concept_id: 'ser_passive',
      difficulty: 2,
    },
    { type: 'fill_blank', prompt: 'Complete with the correct participle ending: "La ley fue aprobad___ por el parlamento." (ley is feminine)', word: 'aprobada', english: 'approved', answer: 'aprobada', concept_id: 'ser_passive', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate using ser + participio: 'The suspects were arrested by the police.'", english: 'The suspects were arrested by the police.', answer: 'Los sospechosos fueron detenidos por la policía.', word: 'fueron detenidos', concept_id: 'ser_passive', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the agreement error: "Los sospechosos fue detenido por la policía."', word: 'fueron detenidos', english: 'were arrested', answer: 'Los sospechosos fueron detenidos por la policía.', concept_id: 'ser_passive', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which sentence would a Spanish speaker most naturally say in casual conversation about a law being passed?', word: 'se aprobó', english: 'the se-passive (casual/everyday)', answer: 'Se aprobó la ley ayer.', options: ['La ley fue aprobada ayer por el parlamento.', 'Se aprobó la ley ayer.', 'La ley ha sido siendo aprobada.', 'La ley fue aprobar ayer.'], concept_id: 'ser_passive', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate, noting the difference from a simple passive: "El informe ya está redactado."', word: 'está redactado', english: 'The report is already written (up). (resultant state, not an action)', answer: 'The report is already written (up). (resultant state, not an action)', concept_id: 'ser_passive', difficulty: 3 },

    // ── aunque_concessive block ──
    {
      type: 'multiple_choice',
      prompt: 'Read the mini-dialogue, then answer: why does the second speaker say "aunque llueva" instead of "aunque llueve"?',
      passage: '— ¿Vas a ir a la excursión mañana?\n— Sí, voy a ir aunque llueva. Todavía no sabemos el pronóstico, así que no quiero cancelar mis planes por algo que ni siquiera es seguro.\n— Yo también iré. Aunque hace mucho frío hoy, mañana debería estar más templado.',
      passageEn: '— Are you going on the trip tomorrow?\n— Yes, I\'m going even if it rains. We still don\'t know the forecast, so I don\'t want to cancel my plans over something that isn\'t even certain.\n— I\'ll go too. Although it\'s very cold today, tomorrow should be milder.',
      word: 'aunque llueva',
      english: 'because whether it will rain is still unknown/uncertain',
      answer: 'because whether it will rain is still unknown/uncertain',
      options: ['because it is definitely going to rain', 'because whether it will rain is still unknown/uncertain', 'because "llueva" is more polite than "llueve"', 'there is no real difference between the two forms'],
      concept_id: 'aunque_concessive',
      difficulty: 3,
    },
    { type: 'fill_blank', prompt: 'Complete with the indicative (it really is raining right now): "Aunque ___ (llover), salgo a caminar."', word: 'llueve', english: 'it is raining', answer: 'llueve', concept_id: 'aunque_concessive', difficulty: 2 },
    { type: 'fill_blank', prompt: "Complete with the subjunctive (we don't yet know if it will rain): \"Aunque ___ (llover) mañana, saldré de todas formas.\"", word: 'llueva', english: 'it rains', answer: 'llueva', concept_id: 'aunque_concessive', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate (the price is a known, agreed fact): 'Although it's expensive, I'm going to buy it.'", english: "Although it's expensive, I'm going to buy it.", answer: 'Aunque es caro, lo voy a comprar.', altAnswers: ['Aunque es caro, voy a comprarlo.'], word: 'aunque es', concept_id: 'aunque_concessive', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate (dismissing a hypothetical objection as irrelevant): 'Even if you don't have money, you can come.'", english: "Even if you don't have money, you can come.", answer: 'Aunque no tengas dinero, puedes venir.', word: 'aunque no tengas', concept_id: 'aunque_concessive', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the mood: the speaker is describing a purely hypothetical scenario (he is not a millionaire), so the indicative here is wrong: "Aunque es millonario, no se lo compraría."', word: 'fuera', english: 'even if he were (a millionaire)', answer: 'Aunque fuera millonario, no se lo compraría.', concept_id: 'aunque_concessive', difficulty: 3 },

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
// Claims cross-verified via WebSearch against SpanishDict, WordReference-
// adjacent pedagogical sources, Kwiziq, Lawless Spanish, and other
// established grammar references before writing (July 2026):
// - ser + past participle as the formal/written passive, agreeing in
//   gender/number with the subject, with por introducing the agent; the
//   se-passive and active voice as the strongly preferred everyday-spoken
//   alternatives; ser-passive's natural home in journalism, legal/academic
//   writing, and formal speeches (Mango Languages "How to use the passive
//   voice in Spanish?"; Spanish.academy "How to Master the Passive Voice in
//   Spanish"; SpanishDict "Impersonal Se vs. Passive Se"), consistent with
//   the existing ser_passive card in src/content/grammar.js
// - the estar + participio resultant-state contrast (está redactado = the
//   state of being written, vs. fue redactado = the act of being written)
//   as a standard companion distinction to the ser-passive (SpanishDict
//   ser/estar + participle guidance, consistent with the existing
//   ser_passive card's estar note)
// - aunque + indicative = concedes a known/established fact ("although");
//   aunque + subjunctive = frames the concession as hypothetical,
//   unconfirmed, or dismissed as irrelevant ("even if"), with the choice
//   governed by the speaker's stance toward the information rather than
//   objective truth (Kwiziq "Aunque + indicative or subjunctive"; Yabla
//   "Aunque + Present Indicative vs. Subjunctive"; Collins Education "When
//   should you use the indicative or the subjunctive in Spanish?"),
//   consistent with the existing aunque_concessive card in
//   src/content/grammar.js
// - a pesar de que / pese a que following the same indicative/subjunctive
//   concessive logic as aunque (Gymglish "Aunque and pese a que followed by
//   the indicative or subjunctive"), consistent with the existing
//   aunque_concessive card's "exceptions" note
// - fixed verb+preposition pairings pensar en, soñar con, consistir en,
//   depender de, alegrarse de, none of which map to their literal English
//   prepositions, plus the pensar en (think about) vs. pensar de (opinion
//   of) distinction and preposition retention before an infinitive
//   complement (blog.worldsacross.com "How to use 'pensar en', 'soñar con',
//   and other key structures"; Real Fast Spanish "25 Common Spanish Verbs
//   and Their Prepositions"), consistent with the existing
//   verbos_preposicionales card in src/content/grammar.js
// - bastante/bastantes agreeing only in number, never gender, as both
//   adjective and adverb (spanishgrammar.net "Spanish Quantifiers Guide")
// - demasiado/a(s) agreeing fully in gender and number as an adjective
//   modifying a noun (demasiados problemas) but staying invariable as an
//   adverb modifying an adjective/adverb (demasiado grande) (Study.com/
//   Wyzant adverb-vs-adjective guides; spanishgrammar.net quantifiers guide)
// - cada as invariable (no gender or plural form) and normally followed by
//   a singular noun, with the specific exception that a following numeral
//   greater than one pluralizes the noun (cada diez años) (Kwiziq "Cada +
//   noun for each + noun"; Kwiziq "Cada and plural nouns"; Elon.io "Cada:
//   'cada día'")
// - ambos/ambas as always plural, agreeing in gender with its noun, never
//   preceded by an article (ambos hermanos, not los ambos hermanos), and
//   more formal in register than los dos (SpanishStep "'Ambos' vs 'Los dos'
//   in Spanish"; SpanishStep "How to Use 'Ambos' in Spanish in Clear Formal
//   Sentences")
// - cualquiera shortening to cualquier directly before a singular noun of
//   either gender, and retaining its full form as a pronoun or when placed
//   after the noun (FluentU "Apocopation in Spanish"; Spanish for London
//   "Cualquier vs Cualquiera in Spanish"; Kwiziq "Cualquier/a = any")
// This content is complementary to the existing GRAMMAR_CARDS entries for
// ser_passive, aunque_concessive, verbos_preposicionales, and
// cuantificadores in src/content/grammar.js (same facts, fuller C1-paced
// walkthrough with worked contrasts and two original reading passages) and
// does not contradict them. As the first C1 unit in the curriculum, its
// register notes (ser_passive as formal/written-only, cualquiera/ambos as
// leaning formal) are kept brief per the assignment, matching this unit's
// overall goal of advanced precision rather than new foundational ground.
