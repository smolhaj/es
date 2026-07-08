// Unit 33 — Subjunctive: The Final Reaches (C2)
// Covers: subjunctive_indefinite_relative, subjunctive_rare_triggers
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit sits at
// the very top of the subjunctive curriculum: by Unit 26 (subjunctive at
// C1 — noun clauses, adjective clauses, concessive intensifiers, pluperfect
// subjunctive) a learner already handles the broad, high-frequency rule
// systems. This unit is intentionally narrower and denser — just two
// concepts, each covering genuinely rare, low-frequency constructions a C1
// speaker has likely never encountered, not a repeat of C1 material. Every
// Spanish claim below was verified against SpanishDict, Elon.io's Spanish
// grammar reference, Kwiziq Spanish, and a Spanish-school pedagogical page
// before writing — see the audit note at the bottom of this file.

export default {
  sections: [
    {
      heading: 'Whoever, Wherever, However: The Indefinite Relative Subjunctive',
      paragraphs: [
        "Back in your C1 work on adjective clauses, you learned that a que-clause describing an unknown or hypothetical noun takes the subjunctive: busco un piso que tenga terraza. Spanish has a small, closed family of words built on exactly that same logic, except the \"unknown\" part is baked directly into the word itself: quienquiera que (\"whoever\"), dondequiera que (\"wherever\"), comoquiera que (\"however, in whatever way\"), and cualquiera que (\"whatever, whichever\"). Each one pairs an indefinite root with -quiera (from querer) and que, and the verb that follows is always subjunctive — never indicative — because by definition the person, place, manner, or thing referred to is unspecified or irrelevant to the speaker.",
        'Quienquiera que refers to an unknown person: Quienquiera que haya sido, no dejó ninguna pista ("Whoever it was, they didn\'t leave any clue") — you\'re naming a category (the person responsible), not a known individual. Dondequiera que refers to an unknown place: Dondequiera que esté el sospechoso, la policía lo encontrará ("Wherever the suspect is, the police will find him"). Comoquiera que refers to an unknown manner: Comoquiera que lo mires, la coartada no tiene sentido ("However you look at it, the alibi doesn\'t make sense"). And cualquiera que refers to an unknown thing or reason: Cualquiera que sea la explicación, alguien tiene que dar la cara ("Whatever the explanation may be, someone has to answer for it").',
        "Spelling matters enormously here, and it's the single most common trap: these are each written as one word. Quien quiera que — written as two words — is a completely different construction, built transparently on the verb querer, and it means \"whoever wants to\" (as in, whoever wants to do something), not \"whoever [it may be].\" Quienquiera que lo intente, whoever [unknown person] attempts it; quien quiera que lo intente, whoever wants to attempt it — same string of letters split differently, genuinely different meaning. When the main clause sits in a past tense, the verb after -quiera que shifts back to the imperfect subjunctive, the same way it would in an ordinary adjective clause: Quienquiera que robara los documentos, sabía exactamente dónde buscar (\"Whoever stole the documents knew exactly where to look\").",
        "One more thing worth knowing before you use these in your own speech: the -quiera forms carry a formal, literary flavor — you'll meet them constantly in writing, journalism, and speeches, but native speakers reach for a lighter colloquial alternative in everyday conversation: quien sea que, donde sea que, como sea que. Quien sea que lo haya hecho, tarde o temprano se sabrá la verdad (\"Whoever did it, sooner or later the truth will come out\") says exactly the same thing as quienquiera que lo haya hecho, just with a more conversational register. Recognize both; lean on the sea que versions when you're speaking casually.",
      ],
      examples: [
        { es: 'Quienquiera que haya sido, no dejó ninguna pista.', en: "Whoever it was, they didn't leave any clue." },
        { es: 'Dondequiera que esté el sospechoso, la policía lo encontrará.', en: 'Wherever the suspect is, the police will find him.' },
        { es: 'Comoquiera que lo mires, la coartada no tiene sentido.', en: "However you look at it, the alibi doesn't make sense." },
        { es: 'Cualquiera que sea la explicación, alguien tiene que dar la cara.', en: 'Whatever the explanation may be, someone has to answer for it.' },
        { es: 'Quienquiera que robara los documentos, sabía exactamente dónde buscar.', en: 'Whoever stole the documents knew exactly where to look. (past main clause → imperfect subjunctive)' },
        { es: 'Quien sea que lo haya hecho, tarde o temprano se sabrá la verdad.', en: 'Whoever did it, sooner or later the truth will come out. (colloquial alternative)' },
      ],
      commonMistakes: [
        'Confusing quienquiera que (one word — "whoever it may be," unknown identity) with quien quiera que (two words — "whoever wants to," built on querer). They look almost identical but describe completely different situations.',
        "Defaulting to the indicative because these look like fixed, memorized vocabulary rather than live grammar — the unknown-reference logic that drives subjunctive in adjective clauses is still fully in force here; it's just packaged into a single word.",
        "Reaching for the -quiera forms in casual conversation and sounding stiff as a result — quien sea que, donde sea que, and como sea que are the natural everyday choices; save quienquiera/dondequiera/comoquiera que for writing or more formal registers.",
      ],
    },
    {
      heading: 'Ni Que, Por Si, and Que Yo Sepa: Three Rare but Essential Triggers',
      paragraphs: [
        "The subjunctive triggers you've studied so far — wishes, doubt, unknown antecedents — are broad categories that cover huge swaths of the language. This section is different: three narrow, specific, idiomatic constructions, each worth learning individually because each shows up constantly in real conversation despite being nowhere near as generalizable as \"doubt\" or \"emotion.\" None of the three follows from a bigger rule; each is its own small, fixed pattern.",
        '¡Ni que fueras mi jefe para darme órdenes! — "As if you were my boss, giving me orders!" Ni que + subjunctive rejects, with real indignation or sarcasm, a comparison the situation seems to be implying. Someone is acting like your boss (bossing you around), and you\'re pushing back: no, you are not, so stop acting like it. It\'s always paired with the imperfect or pluperfect subjunctive — fueras, hubiera insultado — never the present, because the comparison being shot down is inherently unreal and typically reacts to something that just happened: Se puso furioso, ni que le hubiera insultado ("He got furious, as if I\'d insulted him"). You\'ll almost always hear it as its own exclamation, fired back at something someone just said or did, rather than sitting inside a longer sentence.',
        'Por si + subjunctive needs real precision, because it\'s easy to overstate. Por si ("in case") can take either the indicative or the subjunctive, and the choice tracks how likely the speaker judges the condition to be: Llévate el paraguas por si llueve treats rain as a fair possibility (indicative, present tense, entirely normal). Llévate el paraguas por si lloviera treats it as more remote or hypothetical — genuinely subjunctive, but critically, only the imperfect (lloviera) or pluperfect (hubiera llovido) subjunctive ever appears here. A present subjunctive after por si — a form like "por si llueva" — is not standard Spanish; it simply doesn\'t occur in this construction. If you want the subjunctive with por si, imperfect or pluperfect is the only route: Guardé las pruebas por si las necesitara más tarde ("I kept the evidence in case I needed it later").',
        'Que yo sepa — "as far as I know" — is a fixed hedge that uses the subjunctive of saber in what functions as its own small clause, softening a claim by openly admitting the speaker\'s knowledge might be incomplete: Que yo sepa, el sospechoso no salió de la ciudad esa noche ("As far as I know, the suspect didn\'t leave the city that night"). The same pattern extends to other verbs of knowing or perceiving — que yo recuerde ("as far as I remember"), que yo entienda ("as far as I understand"), que yo vea ("as far as I can tell") — always subjunctive, always hedging rather than asserting. It\'s flexible about word order too: it can open the sentence or land at the end as a softening afterthought, as in No ha confesado nadie, que yo sepa ("No one has confessed, as far as I know").',
      ],
      examples: [
        { es: '¡Ni que fueras mi jefe para darme órdenes!', en: 'As if you were my boss to be giving me orders!' },
        { es: 'Se puso furioso, ni que le hubiera insultado.', en: "He got furious, as if I'd insulted him." },
        { es: 'Llévate el paraguas por si llueve.', en: "Take the umbrella in case it rains. (indicative — fairly likely)" },
        { es: 'Llévate el paraguas por si lloviera.', en: "Take the umbrella in case it were to rain. (imperfect subjunctive — more remote)" },
        { es: 'Guardé las pruebas por si las necesitara más tarde.', en: 'I kept the evidence in case I needed it later.' },
        { es: 'Que yo sepa, el sospechoso no salió de la ciudad esa noche.', en: "As far as I know, the suspect didn't leave the city that night." },
        { es: 'No ha confesado nadie, que yo sepa.', en: 'No one has confessed, as far as I know.' },
      ],
      commonMistakes: [
        'Using a present subjunctive after por si (a form like "por si llueva") — this is not standard; por si only ever takes the imperfect or pluperfect subjunctive (lloviera, hubiera llovido), never the present, when the subjunctive is used at all.',
        "Treating por si as always subjunctive — it isn't; por si + present indicative (por si llueve) is completely normal and in fact more common, used whenever the speaker sees the condition as a real possibility rather than a remote one.",
        'Pairing ni que with a present-tense subjunctive — the comparison ni que rejects is inherently unreal, so it takes the imperfect or pluperfect subjunctive (ni que fueras, ni que hubiera sido), never the present.',
        'Missing that que yo sepa is genuinely subjunctive grammar, not just a stock phrase to memorize by sound — the same hedging pattern productively extends to que yo recuerde, que yo entienda, que yo vea, and other verbs of knowing or perceiving.',
      ],
    },
  ],

  vocab: [
    { es: 'el sospechoso / la sospechosa', en: 'the suspect', example: 'La policía interrogó al sospechoso durante horas.', exampleEn: 'The police questioned the suspect for hours.' },
    { es: 'la pista', en: 'the clue, the lead', example: 'Quienquiera que lo hiciera no dejó ninguna pista.', exampleEn: "Whoever did it didn't leave a single clue." },
    { es: 'el/la testigo', en: 'the witness', example: 'Ningún testigo vio salir al ladrón por esa puerta.', exampleEn: "No witness saw the thief leave through that door." },
    { es: 'interrogar', en: 'to interrogate, to question', example: 'Van a interrogar a todos los empleados por separado.', exampleEn: 'They are going to question all the employees separately.' },
    { es: 'el culpable / la culpable', en: 'the guilty party, the culprit', example: 'Cualquiera que sea el culpable, tendrá que responder por esto.', exampleEn: 'Whoever the culprit is, they will have to answer for this.' },
    { es: 'desaparecer', en: 'to disappear, to go missing', example: 'Los documentos desaparecieron la misma noche del robo.', exampleEn: 'The documents disappeared the same night as the robbery.' },
    { es: 'la coartada', en: 'the alibi', example: 'Su coartada no coincide con lo que dijo el testigo.', exampleEn: "His alibi doesn't match what the witness said." },
    { es: 'sospechoso / sospechosa', en: 'suspicious', example: 'Es sospechoso que nadie mencionara el asunto antes.', exampleEn: "It's suspicious that no one mentioned the matter before." },
    { es: 'el robo', en: 'the theft, the robbery', example: 'El robo ocurrió mientras la oficina estaba vacía.', exampleEn: 'The theft happened while the office was empty.' },
    { es: 'confiar (en)', en: 'to trust', example: 'Que yo sepa, todos confiaban en ella hasta ahora.', exampleEn: 'As far as I know, everyone trusted her until now.' },
    { es: 'acusar', en: 'to accuse', example: '¡Ni que me estuvieras acusando de algo!', exampleEn: "As if you were accusing me of something!" },
    { es: 'indignado / indignada', en: 'indignant, outraged', example: 'Se quedó indignado cuando lo acusaron sin pruebas.', exampleEn: 'He was left indignant when they accused him without proof.' },
  ],

  practice: [
    // ── subjunctive_indefinite_relative block (blocked practice: drilled alone before mixing with other concepts) ──
    { type: 'multiple_choice', prompt: "Complete: 'Quienquiera que ___ (ser), no dejó ninguna pista.'", word: 'haya sido', english: 'it was (subjunctive)', answer: 'haya sido', options: ['es', 'sea', 'haya sido', 'fue'], concept_id: 'subjunctive_indefinite_relative', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Wherever you go, I'll find you.'", english: "Wherever you go, I'll find you.", answer: 'Dondequiera que vayas, te encontraré.', word: 'dondequiera que', concept_id: 'subjunctive_indefinite_relative', difficulty: 2 },
    { type: 'error_correction', prompt: "Fix the error: 'Quien quiera que lo haya hecho, dejó una pista.' (meaning 'whoever it may be,' not 'whoever wants to')", word: 'quienquiera que', english: 'whoever it may be', answer: 'Quienquiera que lo haya hecho, dejó una pista.', concept_id: 'subjunctive_indefinite_relative', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which colloquial alternative to dondequiera que is more common in everyday speech?', word: 'donde sea que', english: 'wherever (colloquial)', answer: 'donde sea que', options: ['donde sea que', 'donde que sea', 'donde estuviera que', 'donde quiere que'], concept_id: 'subjunctive_indefinite_relative', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Quienquiera que ___ (robar) los documentos, sabía exactamente dónde buscar.'",
      word: 'robara',
      english: 'stole (imperfect subjunctive)',
      answer: 'robara',
      concept_id: 'subjunctive_indefinite_relative',
      difficulty: 3,
      passage: "El caso llevaba semanas sin resolverse. Quienquiera que robara los documentos, sabía exactamente dónde buscar. Dondequiera que estuviera el sospechoso, tarde o temprano cometería un error. La inspectora Ruiz insistía: \"Comoquiera que se mire este caso, hay algo que no cuadra.\" Cualquiera que fuera el motivo, alguien en la oficina sabía más de lo que decía.",
      passageEn: 'The case had gone weeks without being solved. Whoever had stolen the documents knew exactly where to look. Wherever the suspect was, sooner or later they would make a mistake. Inspector Ruiz insisted: "However you look at this case, something doesn\'t add up." Whatever the motive was, someone in the office knew more than they were saying.',
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Dondequiera que ___ (estar) el sospechoso, tarde o temprano cometería un error.'",
      word: 'estuviera',
      english: 'was (imperfect subjunctive)',
      answer: 'estuviera',
      concept_id: 'subjunctive_indefinite_relative',
      difficulty: 3,
      passage: "El caso llevaba semanas sin resolverse. Quienquiera que robara los documentos, sabía exactamente dónde buscar. Dondequiera que estuviera el sospechoso, tarde o temprano cometería un error. La inspectora Ruiz insistía: \"Comoquiera que se mire este caso, hay algo que no cuadra.\" Cualquiera que fuera el motivo, alguien en la oficina sabía más de lo que decía.",
      passageEn: 'The case had gone weeks without being solved. Whoever had stolen the documents knew exactly where to look. Wherever the suspect was, sooner or later they would make a mistake. Inspector Ruiz insisted: "However you look at this case, something doesn\'t add up." Whatever the motive was, someone in the office knew more than they were saying.',
    },
    {
      type: 'multiple_choice',
      prompt: "Según la cita de la inspectora Ruiz en el texto, ¿qué expresión usa para decir 'no matter how you look at it'?",
      word: 'comoquiera que se mire',
      english: 'however you look at it',
      answer: 'Comoquiera que se mire',
      options: ['Cualquiera que sea', 'Comoquiera que se mire', 'Quienquiera que sea', 'Dondequiera que esté'],
      concept_id: 'subjunctive_indefinite_relative',
      difficulty: 2,
      passage: "El caso llevaba semanas sin resolverse. Quienquiera que robara los documentos, sabía exactamente dónde buscar. Dondequiera que estuviera el sospechoso, tarde o temprano cometería un error. La inspectora Ruiz insistía: \"Comoquiera que se mire este caso, hay algo que no cuadra.\" Cualquiera que fuera el motivo, alguien en la oficina sabía más de lo que decía.",
      passageEn: 'The case had gone weeks without being solved. Whoever had stolen the documents knew exactly where to look. Wherever the suspect was, sooner or later they would make a mistake. Inspector Ruiz insisted: "However you look at this case, something doesn\'t add up." Whatever the motive was, someone in the office knew more than they were saying.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this line from the text: 'Cualquiera que fuera el motivo, alguien en la oficina sabía más de lo que decía.'",
      word: 'cualquiera que fuera',
      english: 'whatever it was',
      answer: 'Whatever the motive was, someone in the office knew more than they were saying.',
      concept_id: 'subjunctive_indefinite_relative',
      difficulty: 3,
      passage: "El caso llevaba semanas sin resolverse. Quienquiera que robara los documentos, sabía exactamente dónde buscar. Dondequiera que estuviera el sospechoso, tarde o temprano cometería un error. La inspectora Ruiz insistía: \"Comoquiera que se mire este caso, hay algo que no cuadra.\" Cualquiera que fuera el motivo, alguien en la oficina sabía más de lo que decía.",
      passageEn: 'The case had gone weeks without being solved. Whoever had stolen the documents knew exactly where to look. Wherever the suspect was, sooner or later they would make a mistake. Inspector Ruiz insisted: "However you look at this case, something doesn\'t add up." Whatever the motive was, someone in the office knew more than they were saying.',
    },

    // ── subjunctive_rare_triggers block (kept separate from indefinite relatives; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Which subjunctive tense correctly follows 'por si' when treating a condition as remote or hypothetical?", word: 'imperfecto de subjuntivo', english: 'imperfect subjunctive', answer: 'imperfecto', options: ['presente', 'imperfecto', 'pretérito', 'presente perfecto'], concept_id: 'subjunctive_rare_triggers', difficulty: 3 },
    { type: 'error_correction', prompt: "Fix the error: 'Llévate el paraguas por si llueva.' (treating rain as a remote possibility)", word: 'por si lloviera', english: 'in case it were to rain', answer: 'Llévate el paraguas por si lloviera.', concept_id: 'subjunctive_rare_triggers', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'As far as I know, the meeting is still at five.'", english: 'As far as I know, the meeting is still at five.', answer: 'Que yo sepa, la reunión sigue siendo a las cinco.', word: 'que yo sepa', concept_id: 'subjunctive_rare_triggers', difficulty: 2 },
    { type: 'multiple_choice', prompt: "Which sentence correctly uses 'por si' with a condition the speaker sees as fairly likely?", word: 'por si llueve', english: 'in case it rains', answer: 'Llévate el paraguas por si llueve.', options: ['Llévate el paraguas por si llueve.', 'Llévate el paraguas por si lloviera.', 'Llévate el paraguas por si haya llovido.', 'Llévate el paraguas por si llueva.'], concept_id: 'subjunctive_rare_triggers', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Diego: '¡Ni que yo ___ (ser) el ladrón!'",
      word: 'fuera',
      english: 'were (imperfect subjunctive)',
      answer: 'fuera',
      concept_id: 'subjunctive_rare_triggers',
      difficulty: 2,
      passage: 'Marta: ¿Tú tocaste los documentos del caso?\nDiego: ¡Ni que yo fuera el ladrón! Ni siquiera estaba en la oficina esa tarde.\nMarta: Está bien, no te enfades. Guardé una copia por si el original se perdiera.\nDiego: Que yo sepa, nadie más tiene acceso a esa carpeta.\nMarta: Pues alguien la abrió, que yo sepa, entre las tres y las cinco.\nDiego: Se puso furiosa la jefa, ni que hubiéramos perdido el caso entero.',
      passageEn: "Marta: Did you touch the case documents?\nDiego: As if I were the thief! I wasn't even in the office that afternoon.\nMarta: Fine, don't get upset. I kept a copy in case the original got lost.\nDiego: As far as I know, no one else has access to that folder.\nMarta: Well, someone opened it, as far as I know, between three and five.\nDiego: The boss got furious, as if we'd lost the whole case.",
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Marta: 'Guardé una copia por si el original se ___ (perder).'",
      word: 'perdiera',
      english: 'got lost (imperfect subjunctive)',
      answer: 'perdiera',
      concept_id: 'subjunctive_rare_triggers',
      difficulty: 3,
      passage: 'Marta: ¿Tú tocaste los documentos del caso?\nDiego: ¡Ni que yo fuera el ladrón! Ni siquiera estaba en la oficina esa tarde.\nMarta: Está bien, no te enfades. Guardé una copia por si el original se perdiera.\nDiego: Que yo sepa, nadie más tiene acceso a esa carpeta.\nMarta: Pues alguien la abrió, que yo sepa, entre las tres y las cinco.\nDiego: Se puso furiosa la jefa, ni que hubiéramos perdido el caso entero.',
      passageEn: "Marta: Did you touch the case documents?\nDiego: As if I were the thief! I wasn't even in the office that afternoon.\nMarta: Fine, don't get upset. I kept a copy in case the original got lost.\nDiego: As far as I know, no one else has access to that folder.\nMarta: Well, someone opened it, as far as I know, between three and five.\nDiego: The boss got furious, as if we'd lost the whole case.",
    },
    {
      type: 'multiple_choice',
      prompt: "¿Por qué usa Diego el subjuntivo en '¡Ni que yo fuera el ladrón!'?",
      word: 'ni que fuera',
      english: 'as if I were',
      answer: 'Porque está rechazando con indignación una comparación implícita que no es real',
      options: [
        'Porque está rechazando con indignación una comparación implícita que no es real',
        'Porque "ladrón" es una palabra femenina',
        'Porque está describiendo un hecho pasado y confirmado',
        'Porque "ni que" siempre exige el indicativo',
      ],
      concept_id: 'subjunctive_rare_triggers',
      difficulty: 3,
      passage: 'Marta: ¿Tú tocaste los documentos del caso?\nDiego: ¡Ni que yo fuera el ladrón! Ni siquiera estaba en la oficina esa tarde.\nMarta: Está bien, no te enfades. Guardé una copia por si el original se perdiera.\nDiego: Que yo sepa, nadie más tiene acceso a esa carpeta.\nMarta: Pues alguien la abrió, que yo sepa, entre las tres y las cinco.\nDiego: Se puso furiosa la jefa, ni que hubiéramos perdido el caso entero.',
      passageEn: "Marta: Did you touch the case documents?\nDiego: As if I were the thief! I wasn't even in the office that afternoon.\nMarta: Fine, don't get upset. I kept a copy in case the original got lost.\nDiego: As far as I know, no one else has access to that folder.\nMarta: Well, someone opened it, as far as I know, between three and five.\nDiego: The boss got furious, as if we'd lost the whole case.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate Diego's line from the dialogue: 'Que yo sepa, nadie más tiene acceso a esa carpeta.'",
      word: 'que yo sepa',
      english: 'as far as I know',
      answer: 'As far as I know, no one else has access to that folder.',
      concept_id: 'subjunctive_rare_triggers',
      difficulty: 2,
      passage: 'Marta: ¿Tú tocaste los documentos del caso?\nDiego: ¡Ni que yo fuera el ladrón! Ni siquiera estaba en la oficina esa tarde.\nMarta: Está bien, no te enfades. Guardé una copia por si el original se perdiera.\nDiego: Que yo sepa, nadie más tiene acceso a esa carpeta.\nMarta: Pues alguien la abrió, que yo sepa, entre las tres y las cinco.\nDiego: Se puso furiosa la jefa, ni que hubiéramos perdido el caso entero.',
      passageEn: "Marta: Did you touch the case documents?\nDiego: As if I were the thief! I wasn't even in the office that afternoon.\nMarta: Fine, don't get upset. I kept a copy in case the original got lost.\nDiego: As far as I know, no one else has access to that folder.\nMarta: Well, someone opened it, as far as I know, between three and five.\nDiego: The boss got furious, as if we'd lost the whole case.",
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea final de Diego: 'Se puso furiosa la jefa, ni que ___ (perder) el caso entero.'",
      word: 'hubiéramos perdido',
      english: 'we had lost (pluperfect subjunctive)',
      answer: 'hubiéramos perdido',
      concept_id: 'subjunctive_rare_triggers',
      difficulty: 3,
      passage: 'Marta: ¿Tú tocaste los documentos del caso?\nDiego: ¡Ni que yo fuera el ladrón! Ni siquiera estaba en la oficina esa tarde.\nMarta: Está bien, no te enfades. Guardé una copia por si el original se perdiera.\nDiego: Que yo sepa, nadie más tiene acceso a esa carpeta.\nMarta: Pues alguien la abrió, que yo sepa, entre las tres y las cinco.\nDiego: Se puso furiosa la jefa, ni que hubiéramos perdido el caso entero.',
      passageEn: "Marta: Did you touch the case documents?\nDiego: As if I were the thief! I wasn't even in the office that afternoon.\nMarta: Fine, don't get upset. I kept a copy in case the original got lost.\nDiego: As far as I know, no one else has access to that folder.\nMarta: Well, someone opened it, as far as I know, between three and five.\nDiego: The boss got furious, as if we'd lost the whole case.",
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - subjunctive_indefinite_relative: quienquiera que, dondequiera que,
//   comoquiera que, and cualquiera que are each written as one word and
//   always take the subjunctive because they refer to an unknown/hypothetical
//   person, place, manner, or thing; when the main clause is past tense the
//   following verb shifts to the imperfect subjunctive (quienquiera que
//   robara..., sabía...); the two-word "quien quiera que" is a distinct
//   construction built on querer meaning "whoever wants to," not "whoever it
//   may be"; quien sea que / donde sea que / como sea que are the more
//   natural colloquial equivalents, with the -quiera forms reserved for
//   formal/literary register — checked against Elon.io's "Free Relative
//   Clauses (Quienquiera, Dondequiera, Comoquiera)" grammar page, SpanishDict's
//   "Comoquiera vs. Dondequiera" comparison page, and the WordReference
//   Forums thread "Quiera words and the subjunctive." This matches the
//   existing GRAMMAR_CARDS entry for subjunctive_indefinite_relative in
//   src/content/grammar.js and does not contradict it.
// - subjunctive_rare_triggers, ni que: rejects an implied comparison with
//   indignation/sarcasm ("as if..."), always paired with the imperfect or
//   pluperfect subjunctive (never present), since the rejected comparison is
//   inherently unreal — checked against SpanishDict's general subjunctive and
//   subjunctive-vs-indicative guides.
// - subjunctive_rare_triggers, por si + subjunctive (the claim requiring the
//   most care): confirmed specifically and explicitly that when por si takes
//   the subjunctive at all, it is ONLY the imperfect (lloviera) or pluperfect
//   (hubiera llovido) subjunctive — a present-subjunctive form ("por si
//   llueva") is not standard and does not occur in this construction. The
//   indicative (por si llueve) is used, and is more common, when the speaker
//   sees the condition as fairly probable; the imperfect/pluperfect
//   subjunctive signals a more remote, less likely condition — checked
//   against Kwiziq Spanish's "Using por si/por si acaso for 'in case'" page
//   and cross-checked against SpanishDict's Imperfect Subjunctive guide
//   (which cites "por si lloviera" as the standard illustrative example).
//   This matches, and does not overstate beyond, the existing GRAMMAR_CARDS
//   entry for subjunctive_rare_triggers in src/content/grammar.js, which
//   already notes the same imperfect/pluperfect-only restriction.
// - subjunctive_rare_triggers, que yo sepa: a fixed hedging phrase using the
//   subjunctive of saber ("as far as I know"), productively extending to
//   other verbs of knowing/perceiving (que yo recuerde, que yo entienda, que
//   yo vea); flexible sentence position, with sentence-final placement
//   working as a softening afterthought — checked against Spanish School
//   Valencia's "The Spanish expression 'Que yo sepa'" page and Elon.io's
//   saber grammar reference.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// subjunctive_indefinite_relative and subjunctive_rare_triggers in
// src/content/grammar.js (same facts, fuller C2-paced walkthrough with
// original passages) and does not contradict them.
