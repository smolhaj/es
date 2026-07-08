// Unit 34 — Literary & Formal Relic Tenses (C2)
// Covers: preterito_anterior, futuro_subjuntivo_relic, presente_historico_narrativo
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit is
// unusual among the C2 units in that two of its three concepts are, by the
// site's own honest framing, essentially obsolete in living spoken and
// written Spanish outside a narrow literary/legal register — the goal here
// is recognition while reading, not active production, and the lesson prose
// says so plainly rather than oversell these as everyday-useful. Every
// Spanish claim below was verified against the RAE's Nueva gramática de la
// lengua española and El buen uso del español directly, plus supporting
// pedagogical sources, before writing — see the audit note at the bottom of
// this file for the specific claims checked. This content is complementary
// to the existing GRAMMAR_CARDS entries for preterito_anterior,
// futuro_subjuntivo_relic, and presente_historico_narrativo in
// src/content/grammar.js (same facts, same honest obsolescence framing,
// fuller C2-paced walkthrough with original passages) and does not
// contradict them.

export default {
  sections: [
    {
      heading: 'A Fossil in Formal Prose: The Pretérito Anterior',
      paragraphs: [
        "The pretérito anterior is formed exactly like the pluperfect, just with a different tense of haber: hube, hubiste, hubo, hubimos, hubisteis, hubieron, plus a past participle — hube cantado, hubo terminado, hubieron salido. Structurally it's simple. Functionally, it's a fossil: this unit exists to help you read it correctly when you meet it, not to teach you to produce it, because outside a narrow literary register, nobody reaches for it anymore.",
        'The RAE\'s Nueva gramática is specific about the surviving pattern: modern literary use of hube cantado is restricted to télico verbs — verbs describing a bounded, completable action (terminar, salir, llegar, firmar), not an open-ended state — and it must be preceded by a temporal adverb or conjunction expressing immediate succession: apenas, en cuanto, tan pronto como, no bien, una vez que, así que, luego que, nada más. In other words, the pretérito anterior never just sits in a sentence on its own; it always answers "immediately after this happened, then…" — Apenas hubo terminado la cena, se marcharon ("As soon as dinner had finished, they left").',
        "Here's the honest part: RAE itself notes that this construction has all but disappeared from everyday language, spoken or written. In virtually all modern usage — including in careful, edited prose — the simple preterite (terminó, salió) does the exact same job with no loss of meaning: Apenas terminó la cena, se marcharon is how a contemporary writer or speaker would actually phrase it. Hube cantado survives almost exclusively as a stylistic flourish in older novels, formal historical narration, and writers deliberately reaching for an archaic register.",
        "So treat this section as a decoder, not a production goal. If you're reading a 19th- or early-20th-century novel, a piece of self-consciously literary prose, or certain formal historical writing, you'll recognize hube/hubo + participle right after apenas, en cuanto, or una vez que, and you'll know it means exactly what the simple preterite would mean in the same slot — one action completing an instant before the next one starts. You will almost never need to write it yourself.",
      ],
      examples: [
        { es: 'Apenas hubo terminado la cena, se marcharon.', en: 'As soon as dinner had finished, they left.' },
        { es: 'En cuanto hubo salido el sol, se pusieron en marcha.', en: 'As soon as the sun had risen, they set off.' },
        { es: 'Tan pronto como hubo firmado el contrato, se arrepintió.', en: 'As soon as he had signed the contract, he regretted it.' },
        { es: 'Una vez que hubo terminado la guerra, la ciudad empezó a reconstruirse.', en: 'Once the war had ended, the city began to rebuild. (a contemporary writer would say "una vez que terminó la guerra")' },
      ],
      commonMistakes: [
        "Assuming hube cantado can appear anywhere the pluperfect (había cantado) can — it can't. It's confined to a subordinate clause introduced by a temporal conjunction of immediate succession; it never functions as a general 'had done' the way había cantado does.",
        'Trying to actively produce this tense in your own writing or speech — for a C2 learner the realistic goal is recognizing it while reading, not reaching for it yourself; the simple preterite is what a native speaker actually writes today in the same context.',
        "Using it with an atelic (open-ended, no natural endpoint) verb — RAE's modern literary examples are all télico (terminar, salir, firmar, caer), because the whole construction is about one bounded action finishing right before another begins.",
      ],
    },
    {
      heading: 'A Legal and Proverbial Relic: The Futuro de Subjuntivo',
      paragraphs: [
        "The futuro de subjuntivo (hablare, comiere, viviere) was once a fully productive tense in Old and Golden Age Spanish, used for future hypotheticals inside subordinate clauses. Today it is, by the RAE's own description, an archaizing survival — essentially extinct in ordinary spoken Spanish everywhere (with a handful of rural exceptions in the Canary Islands and parts of the Caribbean), kept alive on purpose only in legal/administrative drafting and a short, closed list of proverbs and fixed expressions.",
        'That closed list is short enough to simply memorize whole, rather than trying to conjugate the tense productively: sea como fuere ("be that as it may"), sea cual fuere ("whatever it/the… may be" — el resultado, el motivo, etc.), sea quien fuere ("whoever it may be"), and the proverb adonde fueres, haz lo que vieres ("wherever you go, do as you see [the locals doing]" — the Spanish equivalent of "when in Rome, do as the Romans do," itself tracing back to a maxim attributed to Saint Ambrose in the 4th century). Outside legal register, modern Spanish has replaced the productive uses of this tense with sea cual sea (present subjunctive of ser) or the imperfect subjunctive.',
        "You will still meet the living tense outside fixed phrases in one place: formal legal and administrative texts, where it persists precisely because legal drafting prizes a fixed, archaic register — El socio que faltare a esta obligación será sancionado (\"Any member who fails to meet this obligation will be sanctioned\"). Spain's own constitution and older civil and penal codes use it this way. If you ever read a contract, a law, or an official regulation in Spanish and meet a verb ending in -are, -iere, or -eren that looks like nothing you've studied, this is almost certainly it.",
        "Be honest with yourself about the ceiling here: this is recognition-only knowledge, full stop. You are not expected to produce hablare or comiere in conversation or in your own writing — doing so would sound bizarre and archaic to any native speaker, the linguistic equivalent of dropping \"thou dost\" into casual English. The goal is narrow and specific: don't be baffled by sea como fuere in a news editorial, a legal document, or a folk saying your host family repeats.",
      ],
      examples: [
        { es: 'Sea como fuere, hay que tomar una decisión.', en: 'Be that as it may, a decision has to be made.' },
        { es: 'Sea cual fuere el resultado, aceptaremos el veredicto.', en: 'Whatever the result may be, we will accept the verdict.' },
        { es: 'Adonde fueres, haz lo que vieres.', en: 'Wherever you go, do as you see [being done]. ("when in Rome…")' },
        { es: 'El que faltare a esta obligación será sancionado.', en: 'Whoever fails to meet this obligation will be sanctioned. (legal register)' },
        { es: 'No discutía con quien fuere que se le opusiera.', en: 'He never argued with whoever might oppose him.' },
      ],
      commonMistakes: [
        "Trying to learn this as a conjugation pattern to reproduce — treat sea como fuere, sea cual fuere, sea quien fuere, and adonde fueres haz lo que vieres as four whole memorized chunks, not as evidence you should start forming other verbs the same way.",
        'Confusing fuere (future subjunctive of ser/ir) with fuera or fuese (imperfect subjunctive of ser/ir) — they look similar and RAE itself notes this is a common point of confusion, but fuera/fuese are alive and everyday; fuere is the archaic relic.',
        'Assuming this tense is dead everywhere — it is genuinely still productive, on purpose, in legal/administrative drafting, so meeting it in a contract or statute is not a typo or an old-fashioned author being cute; it is the expected register for that kind of document.',
      ],
    },
    {
      heading: 'Narrating the Past as if It Were Now: Historic Present & Free Indirect Style',
      paragraphs: [
        "Unlike the previous two relic tenses, this section's technique is alive and thriving — you'll meet it constantly in journalism, history books, biographies, and fiction. The historic (or narrative) present uses ordinary present-tense verb forms to narrate something that already happened, for vividness and immediacy: En 1492, Colón llega a América y cambia el curso de la historia (\"In 1492, Columbus arrives in America and changes the course of history\") describes a centuries-old event as if it were unfolding right now. It's a deliberate stylistic choice, not a grammatical requirement — the same sentence in the preterite/imperfect (Colón llegó a América y cambió...) is equally correct; switching to the present simply speeds up the pace and pulls the reader into the moment.",
        "You'll see this constantly in Spanish-language news headlines and history writing (En el siglo XV, los españoles conquistan gran parte de América), and inside fiction whenever a writer wants a flashback or an anecdote to feel unusually immediate: Camina por la calle desierta cuando, de repente, oye un grito (\"She walks down the deserted street when, suddenly, she hears a scream\") — this could just as easily have been caminaba... oyó, but the present makes the scene feel like it's happening as you read it.",
        'The second technique here is subtler, so we\'ll keep it concrete: free indirect style (estilo indirecto libre) reports a character\'s thoughts or words without an explicit framing verb like dijo que or pensó que, blending the narrator\'s voice with the character\'s own. Compare a plain reported-speech version with its free indirect rewrite: standard estilo indirecto says Se preguntó si debía saludarlo ("She wondered whether she should say hello to him") — the framing verb se preguntó tells you plainly that a thought is being reported. Free indirect style drops that framing verb entirely and just gives you the thought in the narrator\'s own past-tense voice: ¿Debía saludarlo o fingir que no lo había visto? ("Should she say hello or pretend she hadn\'t seen him?") — no "she wondered," no quotation marks, just her question sitting directly in the narration, as if the narrator and the character have briefly become the same voice.',
        "The giveaway for free indirect style is exactly that absence: if a sentence has the emotional shape of a question, a worry, or an opinion that clearly belongs to a specific character — not the neutral narrator — but there's no dijo que, pensó que, or quotation marks anywhere nearby, you're very likely looking at estilo indirecto libre. It's a subtle, purely literary effect; the realistic goal here is noticing and enjoying it while reading contemporary fiction, not producing it yourself.",
      ],
      examples: [
        { es: 'En 1492, Colón llega a América y cambia el curso de la historia.', en: 'In 1492, Columbus arrives in America and changes the course of history. (historic present, though centuries in the past)' },
        { es: 'Camina por la calle desierta cuando, de repente, oye un grito.', en: 'She walks down the deserted street when, suddenly, she hears a scream. (narrating a past scene in the present)' },
        { es: 'Se preguntó si debía saludarlo. (estilo indirecto, with a framing verb)', en: 'She wondered whether she should say hello to him.' },
        { es: '¿Debía saludarlo o fingir que no lo había visto? (estilo indirecto libre, no framing verb)', en: "Should she say hello, or pretend she hadn't seen him?" },
        { es: 'Miró el reloj. Llegaría tarde otra vez, como siempre.', en: "She looked at the clock. She'd be late again, as always. (free indirect: the narration slides into her private worry)" },
      ],
      commonMistakes: [
        "Thinking the historic present is a grammar error when you meet it in a history book or news article — it's a deliberate, fully correct stylistic choice used specifically to make a past event feel immediate; nothing has gone wrong with the tense system.",
        "Confusing free indirect style with a straightforward change of narrator — free indirect style keeps normal third-person, past-tense narration; what marks it is the absence of a framing verb (dijo que, pensó que) even though the content is clearly a character's private thought or words, not neutral narration.",
        "Expecting quotation marks or a colon to flag reported thought — free indirect style specifically has neither; that lack of a visible marker is what makes it subtle (and is exactly why this section asks you to recognize it, not reproduce it).",
      ],
    },
  ],

  vocab: [
    { es: 'el relato', en: 'the story, the account', example: 'El relato empieza con una tormenta en alta mar.', exampleEn: 'The story begins with a storm on the open sea.' },
    { es: 'la crónica', en: 'the chronicle, the news account', example: 'La crónica del periodista describe el juicio con gran detalle.', exampleEn: "The journalist's chronicle describes the trial in great detail." },
    { es: 'el desenlace', en: 'the outcome, the denouement', example: 'Nadie esperaba un desenlace tan trágico.', exampleEn: 'No one expected such a tragic outcome.' },
    { es: 'acontecer', en: 'to happen, to come to pass', example: 'Lo que aconteció aquella noche cambió su vida para siempre.', exampleEn: 'What happened that night changed his life forever.' },
    { es: 'el suceso', en: 'the event, the happening', example: 'El suceso conmocionó a todo el pueblo.', exampleEn: 'The event shocked the whole town.' },
    { es: 'el narrador / la narradora', en: 'the narrator', example: 'El narrador nunca revela su verdadero nombre.', exampleEn: 'The narrator never reveals his true name.' },
    { es: 'la trama', en: 'the plot', example: 'La trama se complica en el último capítulo.', exampleEn: 'The plot gets more complicated in the last chapter.' },
    { es: 'presenciar', en: 'to witness', example: 'Los vecinos presenciaron todo desde la ventana.', exampleEn: 'The neighbors witnessed everything from the window.' },
    { es: 'el testigo / la testigo', en: 'the witness', example: 'El testigo describió al sospechoso con gran precisión.', exampleEn: 'The witness described the suspect with great precision.' },
    { es: 'comparecer', en: 'to appear (before a court or authority)', example: 'El acusado debía comparecer ante el juez al amanecer.', exampleEn: 'The accused had to appear before the judge at dawn.' },
    { es: 'el veredicto', en: 'the verdict', example: 'El jurado tardó tres días en dar su veredicto.', exampleEn: 'The jury took three days to give its verdict.' },
    { es: 'la sentencia', en: 'the ruling, the (court) sentence', example: 'La sentencia se leyó en voz alta ante toda la sala.', exampleEn: 'The ruling was read aloud before the whole courtroom.' },
  ],

  practice: [
    // ── preterito_anterior block (blocked practice: recognition-only, this tense is not meant to be produced) ──
    {
      type: 'multiple_choice',
      prompt: "En el texto, '¿Qué indica la construcción \"Apenas hubo terminado de recoger la vajilla\"?",
      word: 'apenas hubo terminado',
      english: 'as soon as she had finished (pretérito anterior)',
      answer: 'Que una acción terminó un instante antes de que empezara la siguiente',
      options: [
        'Que una acción terminó un instante antes de que empezara la siguiente',
        'Que la acción todavía está ocurriendo',
        'Que la acción va a ocurrir en el futuro',
        'Que la acción se repite habitualmente',
      ],
      concept_id: 'preterito_anterior',
      difficulty: 2,
      passage: 'En cuanto hubo salido el último invitado, la anfitriona cerró la puerta y respiró hondo. Apenas hubo terminado de recoger la vajilla, se sentó junto a la ventana a contemplar la noche. No bien hubo caído el silencio sobre la casa, empezó a llover. Tan pronto como hubo cesado la tormenta, salió al jardín a comprobar los daños. Una vez que hubo revisado cada rincón, volvió adentro y se acostó, agotada pero tranquila.',
      passageEn: 'As soon as the last guest had left, the hostess closed the door and took a deep breath. She had barely finished clearing the dishes when she sat by the window to watch the night. No sooner had silence fallen over the house than it began to rain. As soon as the storm had ceased, she went out to the garden to check for damage. Once she had checked every corner, she went back inside and went to bed, exhausted but at peace.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'No bien hubo caído el silencio sobre la casa, empezó a llover.'",
      word: 'no bien hubo caído',
      english: 'no sooner had fallen',
      answer: 'No sooner had silence fallen over the house than it began to rain.',
      concept_id: 'preterito_anterior',
      difficulty: 3,
      passage: 'En cuanto hubo salido el último invitado, la anfitriona cerró la puerta y respiró hondo. Apenas hubo terminado de recoger la vajilla, se sentó junto a la ventana a contemplar la noche. No bien hubo caído el silencio sobre la casa, empezó a llover. Tan pronto como hubo cesado la tormenta, salió al jardín a comprobar los daños. Una vez que hubo revisado cada rincón, volvió adentro y se acostó, agotada pero tranquila.',
      passageEn: 'As soon as the last guest had left, the hostess closed the door and took a deep breath. She had barely finished clearing the dishes when she sat by the window to watch the night. No sooner had silence fallen over the house than it began to rain. As soon as the storm had ceased, she went out to the garden to check for damage. Once she had checked every corner, she went back inside and went to bed, exhausted but at peace.',
    },
    {
      type: 'multiple_choice',
      prompt: 'Which of the following is the pretérito anterior most likely to be replaced by in modern spoken or written Spanish?',
      word: 'hube terminado → terminé',
      english: 'the simple preterite',
      answer: 'The simple preterite (e.g., terminó instead of hubo terminado)',
      options: [
        'The simple preterite (e.g., terminó instead of hubo terminado)',
        'The future tense (e.g., terminará)',
        'The present subjunctive (e.g., termine)',
        'It cannot be replaced by anything; it has no modern equivalent',
      ],
      concept_id: 'preterito_anterior',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'According to the RAE, which condition must always be present for the pretérito anterior to appear in modern literary Spanish?',
      word: 'apenas / en cuanto / una vez que',
      english: 'a temporal expression of immediate succession',
      answer: 'A temporal adverb or conjunction of immediate succession (apenas, en cuanto, una vez que, etc.)',
      options: [
        'A temporal adverb or conjunction of immediate succession (apenas, en cuanto, una vez que, etc.)',
        'A direct object pronoun attached to the verb',
        'A negative word like nunca or nadie somewhere in the sentence',
        'The subject must be a formal usted or ustedes',
      ],
      concept_id: 'preterito_anterior',
      difficulty: 3,
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Tan pronto como ___ (cesar) la tormenta, salió al jardín a comprobar los daños.'",
      word: 'hubo cesado',
      english: 'had ceased',
      answer: 'hubo cesado',
      concept_id: 'preterito_anterior',
      difficulty: 2,
      passage: 'En cuanto hubo salido el último invitado, la anfitriona cerró la puerta y respiró hondo. Apenas hubo terminado de recoger la vajilla, se sentó junto a la ventana a contemplar la noche. No bien hubo caído el silencio sobre la casa, empezó a llover. Tan pronto como hubo cesado la tormenta, salió al jardín a comprobar los daños. Una vez que hubo revisado cada rincón, volvió adentro y se acostó, agotada pero tranquila.',
      passageEn: 'As soon as the last guest had left, the hostess closed the door and took a deep breath. She had barely finished clearing the dishes when she sat by the window to watch the night. No sooner had silence fallen over the house than it began to rain. As soon as the storm had ceased, she went out to the garden to check for damage. Once she had checked every corner, she went back inside and went to bed, exhausted but at peace.',
    },
    {
      type: 'multiple_choice',
      prompt: 'What kind of verbs does the pretérito anterior in the passage use — cesar, terminar, salir, revisar, caer?',
      word: 'verbos télicos',
      english: 'telic (bounded, completable) verbs',
      answer: 'Télico verbs — actions with a clear, bounded endpoint',
      options: [
        'Télico verbs — actions with a clear, bounded endpoint',
        'Reflexive verbs only',
        'Verbs of motion exclusively, and no others',
        'Stative, open-ended verbs like ser or estar',
      ],
      concept_id: 'preterito_anterior',
      difficulty: 3,
      passage: 'En cuanto hubo salido el último invitado, la anfitriona cerró la puerta y respiró hondo. Apenas hubo terminado de recoger la vajilla, se sentó junto a la ventana a contemplar la noche. No bien hubo caído el silencio sobre la casa, empezó a llover. Tan pronto como hubo cesado la tormenta, salió al jardín a comprobar los daños. Una vez que hubo revisado cada rincón, volvió adentro y se acostó, agotada pero tranquila.',
      passageEn: 'As soon as the last guest had left, the hostess closed the door and took a deep breath. She had barely finished clearing the dishes when she sat by the window to watch the night. No sooner had silence fallen over the house than it began to rain. As soon as the storm had ceased, she went out to the garden to check for damage. Once she had checked every corner, she went back inside and went to bed, exhausted but at peace.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Una vez que hubo revisado cada rincón, volvió adentro y se acostó, agotada pero tranquila.'",
      word: 'una vez que hubo revisado',
      english: 'once she had checked',
      answer: 'Once she had checked every corner, she went back inside and went to bed, exhausted but at peace.',
      concept_id: 'preterito_anterior',
      difficulty: 3,
      passage: 'En cuanto hubo salido el último invitado, la anfitriona cerró la puerta y respiró hondo. Apenas hubo terminado de recoger la vajilla, se sentó junto a la ventana a contemplar la noche. No bien hubo caído el silencio sobre la casa, empezó a llover. Tan pronto como hubo cesado la tormenta, salió al jardín a comprobar los daños. Una vez que hubo revisado cada rincón, volvió adentro y se acostó, agotada pero tranquila.',
      passageEn: 'As soon as the last guest had left, the hostess closed the door and took a deep breath. She had barely finished clearing the dishes when she sat by the window to watch the night. No sooner had silence fallen over the house than it began to rain. As soon as the storm had ceased, she went out to the garden to check for damage. Once she had checked every corner, she went back inside and went to bed, exhausted but at peace.',
    },

    // ── futuro_subjuntivo_relic block (blocked; entirely recognition-focused — a closed set of fixed expressions) ──
    {
      type: 'multiple_choice',
      prompt: '¿Qué significa la expresión fija "sea como fuere"?',
      word: 'sea como fuere',
      english: 'be that as it may',
      answer: 'Be that as it may',
      options: ['Be that as it may', 'It will be as it was', 'Let it be said', 'It is what it is going to be'],
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 2,
      passage: 'El artículo del reglamento antiguo rezaba: "El socio que faltare a esta obligación será sancionado, sea cual fuere el motivo alegado." Mi abuelo, abogado de profesión, solía citarlo con una sonrisa: "Sea como fuere", decía, "la ley es la ley." Y cuando alguno de nosotros se quejaba de mudarse a una ciudad nueva, él respondía con el viejo refrán: "Adonde fueres, haz lo que vieres." Nunca discutía con quien fuere que se le opusiera; prefería, sea quien fuere el interlocutor, dejar que el tiempo diera la razón.',
      passageEn: 'The old regulation\'s article read: "Any member who fails to meet this obligation will be sanctioned, whatever reason may be given." My grandfather, a lawyer by profession, used to quote it with a smile: "Be that as it may," he\'d say, "the law is the law." And whenever one of us complained about moving to a new city, he\'d answer with the old proverb: "Wherever you go, do as the locals do." He never argued with whoever might oppose him; he preferred, whoever the other party might be, to let time prove him right.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate the proverb from the text: 'Adonde fueres, haz lo que vieres.'",
      word: 'adonde fueres, haz lo que vieres',
      english: 'wherever you go, do as you see (when in Rome...)',
      answer: 'Wherever you go, do as you see (being done). ("When in Rome, do as the Romans do.")',
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 2,
      passage: 'El artículo del reglamento antiguo rezaba: "El socio que faltare a esta obligación será sancionado, sea cual fuere el motivo alegado." Mi abuelo, abogado de profesión, solía citarlo con una sonrisa: "Sea como fuere", decía, "la ley es la ley." Y cuando alguno de nosotros se quejaba de mudarse a una ciudad nueva, él respondía con el viejo refrán: "Adonde fueres, haz lo que vieres." Nunca discutía con quien fuere que se le opusiera; prefería, sea quien fuere el interlocutor, dejar que el tiempo diera la razón.',
      passageEn: 'The old regulation\'s article read: "Any member who fails to meet this obligation will be sanctioned, whatever reason may be given." My grandfather, a lawyer by profession, used to quote it with a smile: "Be that as it may," he\'d say, "the law is the law." And whenever one of us complained about moving to a new city, he\'d answer with the old proverb: "Wherever you go, do as the locals do." He never argued with whoever might oppose him; he preferred, whoever the other party might be, to let time prove him right.',
    },
    {
      type: 'multiple_choice',
      prompt: 'Where does the futuro de subjuntivo (hablare, comiere, faltare) still survive productively today, outside of fixed proverbs?',
      word: 'futuro de subjuntivo',
      english: 'future subjunctive',
      answer: 'Legal and administrative texts (laws, contracts, constitutions)',
      options: [
        'Legal and administrative texts (laws, contracts, constitutions)',
        'Everyday spoken Spanish in every Spanish-speaking country',
        'Text messages and informal social media posts',
        'Children\'s books, because it sounds simple',
      ],
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: '¿Qué significa "sea quien fuere que se le opusiera" en el texto?',
      word: 'quien fuere',
      english: 'whoever it may be',
      answer: 'Whoever might oppose him, no matter who that turned out to be',
      options: [
        'Whoever might oppose him, no matter who that turned out to be',
        'Someone who had already opposed him in the past',
        'A specific person the narrator refuses to name',
        'No one ever opposed him',
      ],
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 3,
      passage: 'El artículo del reglamento antiguo rezaba: "El socio que faltare a esta obligación será sancionado, sea cual fuere el motivo alegado." Mi abuelo, abogado de profesión, solía citarlo con una sonrisa: "Sea como fuere", decía, "la ley es la ley." Y cuando alguno de nosotros se quejaba de mudarse a una ciudad nueva, él respondía con el viejo refrán: "Adonde fueres, haz lo que vieres." Nunca discutía con quien fuere que se le opusiera; prefería, sea quien fuere el interlocutor, dejar que el tiempo diera la razón.',
      passageEn: 'The old regulation\'s article read: "Any member who fails to meet this obligation will be sanctioned, whatever reason may be given." My grandfather, a lawyer by profession, used to quote it with a smile: "Be that as it may," he\'d say, "the law is the law." And whenever one of us complained about moving to a new city, he\'d answer with the old proverb: "Wherever you go, do as the locals do." He never argued with whoever might oppose him; he preferred, whoever the other party might be, to let time prove him right.',
    },
    {
      type: 'multiple_choice',
      prompt: '¿Con qué forma se confunde fácilmente "fuere" (futuro de subjuntivo), según el propio aviso de la RAE?',
      word: 'fuere vs. fuera/fuese',
      english: 'fuere vs. fuera/fuese',
      answer: 'Con fuera o fuese, el imperfecto de subjuntivo de ser/ir',
      options: [
        'Con fuera o fuese, el imperfecto de subjuntivo de ser/ir',
        'Con será, el futuro de indicativo',
        'Con fue, el pretérito',
        'Con sería, el condicional',
      ],
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 3,
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto legal citado, completa: 'El socio que ___ (faltar) a esta obligación será sancionado.'",
      word: 'faltare',
      english: 'fails (legal future subjunctive)',
      answer: 'faltare',
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 3,
      passage: 'El artículo del reglamento antiguo rezaba: "El socio que faltare a esta obligación será sancionado, sea cual fuere el motivo alegado." Mi abuelo, abogado de profesión, solía citarlo con una sonrisa: "Sea como fuere", decía, "la ley es la ley." Y cuando alguno de nosotros se quejaba de mudarse a una ciudad nueva, él respondía con el viejo refrán: "Adonde fueres, haz lo que vieres." Nunca discutía con quien fuere que se le opusiera; prefería, sea quien fuere el interlocutor, dejar que el tiempo diera la razón.',
      passageEn: 'The old regulation\'s article read: "Any member who fails to meet this obligation will be sanctioned, whatever reason may be given." My grandfather, a lawyer by profession, used to quote it with a smile: "Be that as it may," he\'d say, "the law is the law." And whenever one of us complained about moving to a new city, he\'d answer with the old proverb: "Wherever you go, do as the locals do." He never argued with whoever might oppose him; he preferred, whoever the other party might be, to let time prove him right.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'El socio que faltare a esta obligación será sancionado, sea cual fuere el motivo alegado.'",
      word: 'sea cual fuere',
      english: 'whatever it may be',
      answer: 'Any member who fails to meet this obligation will be sanctioned, whatever reason may be given.',
      concept_id: 'futuro_subjuntivo_relic',
      difficulty: 3,
      passage: 'El artículo del reglamento antiguo rezaba: "El socio que faltare a esta obligación será sancionado, sea cual fuere el motivo alegado." Mi abuelo, abogado de profesión, solía citarlo con una sonrisa: "Sea como fuere", decía, "la ley es la ley." Y cuando alguno de nosotros se quejaba de mudarse a una ciudad nueva, él respondía con el viejo refrán: "Adonde fueres, haz lo que vieres." Nunca discutía con quien fuere que se le opusiera; prefería, sea quien fuere el interlocutor, dejar que el tiempo diera la razón.',
      passageEn: 'The old regulation\'s article read: "Any member who fails to meet this obligation will be sanctioned, whatever reason may be given." My grandfather, a lawyer by profession, used to quote it with a smile: "Be that as it may," he\'d say, "the law is the law." And whenever one of us complained about moving to a new city, he\'d answer with the old proverb: "Wherever you go, do as the locals do." He never argued with whoever might oppose him; he preferred, whoever the other party might be, to let time prove him right.',
    },

    // ── presente_historico_narrativo block (blocked; recognition-focused, though this technique is genuinely alive) ──
    {
      type: 'multiple_choice',
      prompt: "En el texto, '¿Debía saludarlo o fingir que no lo había visto? Total, ya habían pasado tantos años...' ¿Qué técnica narrativa es esta?",
      word: 'estilo indirecto libre',
      english: 'free indirect style',
      answer: "Estilo indirecto libre — el pensamiento de Marta sin verbo introductorio como 'pensó que'",
      options: [
        "Estilo indirecto libre — el pensamiento de Marta sin verbo introductorio como 'pensó que'",
        'Estilo directo — una cita exacta entre comillas',
        'Presente histórico — narrar el pasado en tiempo presente',
        'Estilo indirecto normal, con el verbo "pensó que"',
      ],
      concept_id: 'presente_historico_narrativo',
      difficulty: 3,
      passage: 'Es el verano de 1985. Marta camina sola por la plaza cuando ve, por primera vez en años, a su antiguo profesor de piano. El corazón le da un vuelco. ¿Debía saludarlo o fingir que no lo había visto? Total, ya habían pasado tantos años... Se acerca despacio. Él la mira, sonríe, y en ese instante Marta comprende que nunca dejó de admirarlo. Aquella tarde cambia el rumbo de su vida: decide, por fin, volver a tocar el piano.',
      passageEn: "It is the summer of 1985. Marta is walking alone across the square when she sees, for the first time in years, her old piano teacher. Her heart skips a beat. Should she say hello or pretend she hadn't seen him? After all, so many years had gone by... She approaches slowly. He looks at her, smiles, and in that instant Marta understands she never stopped admiring him. That afternoon changes the course of her life: she finally decides to play the piano again.",
    },
    {
      type: 'multiple_choice',
      prompt: "¿Por qué el narrador usa el presente ('camina', 've', 'comprende') para contar algo que ocurrió en 1985, un pasado ya lejano?",
      word: 'presente histórico',
      english: 'historic present',
      answer: 'Para darle inmediatez y viveza a la escena, como si estuviera ocurriendo ahora mismo',
      options: [
        'Para darle inmediatez y viveza a la escena, como si estuviera ocurriendo ahora mismo',
        'Porque cometió un error gramatical',
        'Porque la historia todavía no ha terminado de ocurrir',
        'Porque "caminar" no tiene forma de pretérito',
      ],
      concept_id: 'presente_historico_narrativo',
      difficulty: 2,
      passage: 'Es el verano de 1985. Marta camina sola por la plaza cuando ve, por primera vez en años, a su antiguo profesor de piano. El corazón le da un vuelco. ¿Debía saludarlo o fingir que no lo había visto? Total, ya habían pasado tantos años... Se acerca despacio. Él la mira, sonríe, y en ese instante Marta comprende que nunca dejó de admirarlo. Aquella tarde cambia el rumbo de su vida: decide, por fin, volver a tocar el piano.',
      passageEn: "It is the summer of 1985. Marta is walking alone across the square when she sees, for the first time in years, her old piano teacher. Her heart skips a beat. Should she say hello or pretend she hadn't seen him? After all, so many years had gone by... She approaches slowly. He looks at her, smiles, and in that instant Marta understands she never stopped admiring him. That afternoon changes the course of her life: she finally decides to play the piano again.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Aquella tarde cambia el rumbo de su vida: decide, por fin, volver a tocar el piano.'",
      word: 'aquella tarde cambia',
      english: 'that afternoon changes',
      answer: "That afternoon changes the course of her life: she finally decides to play the piano again.",
      concept_id: 'presente_historico_narrativo',
      difficulty: 2,
      passage: 'Es el verano de 1985. Marta camina sola por la plaza cuando ve, por primera vez en años, a su antiguo profesor de piano. El corazón le da un vuelco. ¿Debía saludarlo o fingir que no lo había visto? Total, ya habían pasado tantos años... Se acerca despacio. Él la mira, sonríe, y en ese instante Marta comprende que nunca dejó de admirarlo. Aquella tarde cambia el rumbo de su vida: decide, por fin, volver a tocar el piano.',
      passageEn: "It is the summer of 1985. Marta is walking alone across the square when she sees, for the first time in years, her old piano teacher. Her heart skips a beat. Should she say hello or pretend she hadn't seen him? After all, so many years had gone by... She approaches slowly. He looks at her, smiles, and in that instant Marta understands she never stopped admiring him. That afternoon changes the course of her life: she finally decides to play the piano again.",
    },
    {
      type: 'multiple_choice',
      prompt: '¿Cuál de estas dos oraciones es un ejemplo de estilo indirecto normal (con verbo introductorio), no de estilo indirecto libre?',
      word: 'se preguntó si',
      english: 'she wondered whether (standard reported speech)',
      answer: 'Se preguntó si debía saludarlo.',
      options: [
        'Se preguntó si debía saludarlo.',
        '¿Debía saludarlo o fingir que no lo había visto?',
        'Miró el reloj. Llegaría tarde otra vez, como siempre.',
        'El corazón le da un vuelco.',
      ],
      concept_id: 'presente_historico_narrativo',
      difficulty: 3,
    },
    {
      type: 'multiple_choice',
      prompt: 'What is the key structural feature that marks free indirect style (estilo indirecto libre), distinguishing it from standard reported speech?',
      word: 'sin verbo introductorio',
      english: 'no framing verb',
      answer: 'The absence of a framing verb like dijo que or pensó que, even though the content is clearly a character\'s thought',
      options: [
        'The absence of a framing verb like dijo que or pensó que, even though the content is clearly a character\'s thought',
        'The use of quotation marks around the character\'s words',
        'A switch to first-person narration',
        'The use of the future subjunctive',
      ],
      concept_id: 'presente_historico_narrativo',
      difficulty: 2,
    },
    {
      type: 'translation_to_english',
      prompt: "Translate: 'Miró el reloj. Llegaría tarde otra vez, como siempre.' (a free indirect style example)",
      word: 'llegaría tarde otra vez',
      english: "she'd be late again",
      answer: "She looked at the clock. She'd be late again, as always.",
      concept_id: 'presente_historico_narrativo',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'Is the historic present a required grammatical rule, or a stylistic choice?',
      word: 'presente histórico',
      english: 'historic present',
      answer: 'A deliberate stylistic choice — the same events could be told equally correctly in the preterite/imperfect',
      options: [
        'A deliberate stylistic choice — the same events could be told equally correctly in the preterite/imperfect',
        'A required rule whenever narrating any past event in Spanish',
        'A rule that only applies to events before the year 1500',
        'A mistake that careful writers avoid',
      ],
      concept_id: 'presente_historico_narrativo',
      difficulty: 1,
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - preterito_anterior: formed with hube/hubiste/hubo/hubimos/hubisteis/
//   hubieron + past participle; modern literary use restricted to télico
//   verbs and always preceded by a temporal adverb/conjunction of immediate
//   succession (apenas, en cuanto, tan pronto como, no bien, una vez que,
//   así que, luego que, nada más) — checked directly against the RAE's
//   Nueva gramática de la lengua española page "Tiempos compuestos no
//   orientados directamente desde el momento del habla" (rae.es), which
//   gives "Algunos invitados se marcharon apenas hubo terminado la cena" as
//   its own example and states explicitly that this construction has
//   "desaparecido" from current everyday language, surviving mainly in the
//   most careful written registers, where canté/terminó is now strongly
//   preferred over hube cantado/hubo terminado in the same slot.
// - futuro_subjuntivo_relic: formed hablare/comiere/viviere; confirmed via
//   RAE's Nueva gramática page "Los tiempos del subjuntivo (III). El futuro
//   simple (cantare) y el futuro compuesto (hubiere cantado)" (rae.es) that
//   the tense is maintained today as "un rasgo arcaizante" in legal and
//   administrative texts, has fallen out of oral use in virtually all
//   dialect regions (with rural exceptions in the Canary Islands and parts
//   of the Caribbean), and survives in some proverbs (adonde fueres, haz lo
//   que vieres) and reduplicated concessive formulas (sea cual fuere, sea
//   como fuere) — same source directly confirms sea cual fuere el precio as
//   a still-current fixed expression. Adonde fueres, haz lo que vieres
//   verified as the Spanish "when in Rome" equivalent, tracing to a maxim
//   attributed to Saint Ambrose (4th c.), via iNMSOL's Spanish-proverbs page
//   and Estandarte's writeup on the expression. The RAE's own X/Twitter
//   account (@RAEinforma) was used to confirm the fuere-vs-fuera/fuese
//   confusion point directly from the Academy.
// - presente_historico_narrativo: historic/narrative present for vividness
//   in journalism, history, and storytelling, plus its status as a
//   stylistic choice rather than a rule — checked against Kwiziq's "El
//   Presente to narrate past events," Español Avanzado's "presente
//   histórico / narrativo" page, and Inklingo's C1 grammar page on the
//   historical present. Free indirect style (estilo indirecto libre) —
//   defined as blending narrator and character voice by omitting a framing
//   verb like dijo que/pensó que, keeping third-person past-tense narration
//   otherwise — checked against Escuela Ray Bolívar Sosa's and unprofesor's
//   "estilo indirecto libre" explainers and StudySmarter's "discurso
//   indirecto libre" summary, all of which agree on the no-framing-verb,
//   blended-voice definition used in this section.
