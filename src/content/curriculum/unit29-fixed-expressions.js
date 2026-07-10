// Unit 29 — Passive Voice & Discourse Structure (C1)
// Covers: ser_passive, estructuradores_informacion, registro_formal_informal
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose — the content here
// is C1-level, but the prose explaining it stays as plain and direct as
// unit01's, per the style precedent set there. Every Spanish claim below was
// verified against SpanishDict, WordReference-adjacent pedagogical sources,
// Kwiziq, CVC (Centro Virtual Cervantes), LanguageTool, and other established
// grammar references before writing — see the audit note at the bottom of
// this file for the specific claims checked. This is the first C1 unit in
// the curriculum (units 1-24 covered A1-B2; unit 25 was the B2 capstone
// "Fine Details" catch-all). Like unit25, this unit groups several loosely
// related advanced topics into one cohesive unit rather than a single
// grammar thread.
//
// Curriculum-pacing-lag fix (07-09-2026): this unit's original four
// concepts (ser_passive, aunque_concessive, verbos_preposicionales,
// cuantificadores) no longer cohered at C1 once the CEFR audit retagged
// three of them down a level. aunque_concessive (retagged B2) moved to the
// new subjunctive-counterfactuals-concession unit; verbos_preposicionales
// and cuantificadores (both retagged B1) moved to the repurposed probability-
// aspect unit. In their place, this unit gained estructuradores_
// informacion and registro_formal_informal, both genuinely C1, relocated
// verbatim from the old unit31-discourse-markers.js and unit32-register-
// stance.js (both C2 units that had one concept each retagged down to C1).
// ser_passive's own content is untouched. See ES.md's punch-list item 29
// for the full pacing-lag writeup.

export default {
  sections: [
    {
      heading: 'The Formal Passive: Ser + Participio',
      paragraphs: [
        "You already know Spanish has a passive-like structure with se — se aprobó la ley (\"the law was approved\") — and that this se-construction is by far the most common way Spanish expresses a passive idea in everyday speech and writing. C1 Spanish adds the other passive: ser + past participle, the direct structural cousin of the English passive (\"the law was approved by parliament\"). La ley fue aprobada por el parlamento uses exactly this pattern — ser (conjugated in whatever tense fits) plus a past participle that agrees in gender and number with the subject, optionally followed by por + the agent, the person or thing doing the action.",
        "Here's the part that matters most at this level: the ser-passive is not simply a formal-sounding synonym for the se-passive — it's a genuinely different register choice. Spoken Spanish strongly prefers active voice or the se-passive; reaching for ser + participio in casual conversation can sound stiff, translated, or unnatural, almost like a native English speaker hearing someone say \"it was decided by this committee that...\" in a text message. The ser-passive belongs to formal written registers — news reporting, legal and administrative documents, academic writing, historical narration — precisely the contexts where English speakers instinctively expect a passive construction and where Spanish, unusually, actually delivers one that maps closely onto English syntax.",
        'Two more pieces complete the picture. First, the ser-passive almost always benefits from stating or at least implying an agent (the por phrase) — El puente fue construido por una empresa francesa ("The bridge was built by a French company"). When there\'s no agent to mention and the focus is purely on the action itself, Spanish usually reaches for se instead (se construyó el puente), which is one more reason the se-passive dominates ordinary usage: most everyday statements don\'t bother naming who did something. Second, don\'t confuse the passive (an event, an action being done) with the resultant state built from estar + participle: La ley fue aprobada describes the act of approval happening; La ley está aprobada describes the state of already being approved, with no focus on the act at all.',
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
      heading: 'Structuring a Multi-Part Argument: Por una parte…por otra, En primer lugar…en definitiva',
      paragraphs: [
        "Once you're building a real argument — weighing two sides of an issue, or walking through several points in order — you need markers that organize the whole structure, not just connect two clauses. Spanish calls this family estructuradores de la información (information structurers), and within it, the specific markers you need at this level are ordenadores: markers whose entire job is to tell the listener where a piece fits within a larger, ordered whole.",
        "Por una parte…por otra (parte) frames two sides of the same issue as a single, deliberately balanced comparison — not two random facts, but two faces of one coin: Por una parte, el teletrabajo mejora la conciliación familiar; por otra parte, dificulta la supervisión directa (\"On the one hand, telework improves work-life balance; on the other, it makes direct supervision harder\"). The pairing only works as a pair — starting with por una parte commits you to a por otra (parte) later, and using por otra parte alone, with no earlier por una parte, reads as structurally incomplete in careful writing (you'll hear it done anyway in speech, where the first half is sometimes just implied). Por un lado…por otro (lado) means exactly the same thing and is a completely correct, slightly less formal everyday variant — reach for parte in a report, lado in a conversation, and don't feel you have to pick one for the whole text.",
        "En primer lugar…en segundo lugar…(en último lugar) do a related but different job: they number a sequence of points in a list or argument, the way \"first…second…lastly\" does in English. What closes this kind of structured sequence is a separate pair of markers: en definitiva and en resumen. En definitiva means \"ultimately\" or \"in short\" — it signals the real, bottom-line conclusion the whole preceding discussion was building toward, not just \"the last item on my list.\" En resumen (\"in summary\") does something slightly different: it condenses everything said before into a compact restatement, useful when you genuinely want to summarize rather than conclude. Both wrap up a structured passage; en definitiva leans toward \"here's what it comes down to,\" en resumen leans toward \"here's the short version of everything I just said.\"",
      ],
      examples: [
        { es: 'Por una parte, el teletrabajo mejora la conciliación familiar; por otra parte, dificulta la supervisión directa.', en: 'On the one hand, telework improves work-life balance; on the other, it makes direct supervision harder.' },
        { es: 'Por un lado me encanta empezar más tarde; por otro, echo de menos ver al equipo por la mañana.', en: 'On one hand I love starting later; on the other, I miss seeing the team in the morning.' },
        { es: 'En primer lugar, hay que revisar el presupuesto. En segundo lugar, contactar con los proveedores.', en: 'First, we need to review the budget. Second, contact the suppliers.' },
        { es: 'En definitiva, la decisión dependerá de los resultados de la encuesta.', en: 'Ultimately, the decision will depend on the results of the survey.' },
        { es: 'En resumen, las tres propuestas comparten el mismo objetivo.', en: 'In summary, all three proposals share the same goal.' },
      ],
      commonMistakes: [
        "Opening with por una parte and then never delivering por otra parte — the two halves are a matched pair, and dropping the second half (or replacing it with an unrelated además) leaves the structure visibly incomplete in formal writing.",
        "Treating por una parte/por otra parte and por un lado/por otro (lado) as different in meaning — they aren't; the only real difference is register (parte skews more formal/written, lado more everyday/spoken), so mixing them within one text is a style inconsistency, not a grammar error.",
        "Using en definitiva as if it just meant \"lastly\" in a numbered list — it specifically signals the overall conclusion or bottom line the discussion was building toward, which is a different job from en primer lugar/en segundo lugar's simple numbering.",
      ],
    },
    {
      heading: 'The Four-Level Register System: Formal, Neutral, Informal, Colloquial',
      paragraphs: [
        "You've actually already met a version of this idea if you've browsed this site's idioms reference: every single idiom there is tagged on a four-way scale — colloquial, informal, neutral, formal — from the most casual slang to the most careful, polished phrasing. This section puts that exact same four-way scale to work at the level of whole sentences and requests, not just fixed expressions — a genuinely advanced skill, because it's the ability to reshape an entire sentence, not just swap a pronoun, depending on who you're talking to and how formal the situation is.",
        "The clearest way to see register in action is to watch one request slide across all four levels. Imagine you need the same document from four different people. To your boss: ¿Podría usted enviarme el informe antes de las cinco, por favor? — formal, built on the conditional podría plus usted, maximally indirect and polite. To someone you don't know well: ¿Podría enviarme el informe antes de las cinco? — still polite and indirect, but usted is dropped since the verb form alone signals the same distance; call this neutral-formal. To a trusted coworker: ¿Puedes enviarme el informe antes de las cinco? — informal, present tense puedes, still a real question but far less hedged. To your best friend: Oye, ¿me pasas el informe ese antes de las cinco o qué? — colloquial, with the attention-grabber oye, the vague filler ese, and the blunt tag o qué. Same request, four entirely different sentences.",
        "Notice that tú vs. usted is only one ingredient here, and a fairly small one — it's covered on its own, grammatically, back in Unit 1. The bigger skill is everything else that shifts alongside it: word choice (comprar vs. adquirir, casa vs. domicilio), sentence length and subordination (formal register tolerates, even rewards, longer and more layered sentences), and above all the level of indirection. Formal Spanish routinely wraps a request in a conditional or a hedge — quisiera, ¿le importaría?, le agradecería que — treating direct imperatives or blunt questions as too abrupt. Colloquial Spanish does the opposite: it favors bluntness, fillers, slang address terms (tío, tía, colega), and even grammatically redundant emphatic pronouns (¿Puedes tú ayudarme con esto? adds tú purely for emphasis, not because the verb needs it).",
        "One more high-level pattern worth internalizing: the most formal register of all often drops personal reference entirely, favoring impersonal constructions like se ruega a los señores pasajeros abrocharse el cinturón (\"passengers are kindly requested to fasten their seatbelt\") — no tú, no usted, just an impersonal se. That's the formal end of the spectrum taken to its logical conclusion: distance isn't just about which pronoun you pick, it's about whether you address the listener directly at all.",
      ],
      examples: [
        { es: '¿Podría usted facilitarme los datos, por favor? (formal)', en: 'Could you please provide me with the details?' },
        { es: '¿Puede darme los datos, por favor? (neutral)', en: 'Can you give me the details, please?' },
        { es: '¿Puedes darme los datos? (informal)', en: 'Can you give me the details?' },
        { es: '¿Me pasas el dato ese, tío? (colloquial)', en: 'Can you pass me that thing/detail, dude?' },
        { es: 'Se ruega a los señores pasajeros abrocharse el cinturón. (very formal, impersonal)', en: 'Passengers are kindly requested to fasten their seatbelt.' },
        { es: 'Quisiera hacerle una pregunta, si no le importa.', en: "I'd like to ask you a question, if you don't mind. (formal, hedged with the conditional quisiera)" },
      ],
      commonMistakes: [
        "Treating register as nothing more than tú-vs.-usted — that pronoun choice is real, but it's the smallest piece. A sentence can use usted and still sound clumsy if the vocabulary and structure around it are casual, or vice versa.",
        'Mixing registers within one utterance — pairing an elevated, formal noun phrase with tú, or a slangy filler with usted — tends to sound unnatural or unintentionally ironic rather than genuinely polite or casual. Consistency across the whole sentence is what makes a register read as authentic.',
        "Overcorrecting in either direction: staying maximally formal with close friends can come across as cold or distant, while using colloquial phrasing (tío, o qué) with a boss or a stranger can read as disrespectful. Match the register to the actual relationship, not to a single fixed 'safe' choice.",
      ],
    },
  ],

  vocab: [
    { es: 'ser + participio', en: 'formal passive voice ("was done by")', example: 'La ley fue aprobada por el parlamento.', exampleEn: 'The law was approved by parliament.' },
    { es: 'por (agente)', en: 'by (introduces the agent in a passive)', example: 'El puente fue construido por una empresa francesa.', exampleEn: 'The bridge was built by a French company.' },
    { es: 'redactar', en: 'to draft / write up (formally)', example: 'El informe ya está redactado.', exampleEn: 'The report is already written up.' },
    { es: 'el teletrabajo', en: 'remote work, telework', example: 'La empresa amplió el teletrabajo a tres días por semana.', exampleEn: 'The company expanded remote work to three days a week.' },
    { es: 'la conciliación (laboral y familiar)', en: 'work-life balance', example: 'El nuevo horario mejora la conciliación laboral y familiar.', exampleEn: 'The new schedule improves work-life balance.' },
    { es: 'la productividad', en: 'productivity', example: 'La productividad del equipo subió este trimestre.', exampleEn: "The team's productivity went up this quarter." },
    { es: 'la encuesta', en: 'survey, poll', example: 'Los resultados de la encuesta se publicarán el lunes.', exampleEn: 'The survey results will be published on Monday.' },
    { es: 'resentirse', en: 'to suffer, to be adversely affected', example: 'Temen que la comunicación del equipo se resienta.', exampleEn: "They fear the team's communication will suffer." },
    { es: 'quisiera', en: 'I would like (formal, softened with the conditional)', example: 'Quisiera hacerle una pregunta, si no le importa.', exampleEn: "I would like to ask you a question, if you don't mind." },
    { es: 'le agradecería que', en: 'I would be grateful if... (formal)', example: 'Le agradecería que me confirmara la cita.', exampleEn: 'I would be grateful if you could confirm the appointment.' },
    { es: '¿te importaría?', en: 'would you mind? (neutral-informal, polite)', example: '¿Te importaría cerrar la ventana?', exampleEn: 'Would you mind closing the window?' },
    { es: '¿me haces un favor?', en: 'can you do me a favor? (informal)', example: '¿Me haces un favor y me pasas el móvil?', exampleEn: 'Can you do me a favor and hand me my phone?' },
    { es: 'tío / tía', en: 'dude, mate (colloquial address term, Spain)', example: 'Tío, no te vas a creer lo que pasó.', exampleEn: "Dude, you're not going to believe what happened." },
    { es: 'colega', en: 'buddy, pal (informal/colloquial)', example: 'Oye, colega, ¿me echas una mano con esto?', exampleEn: 'Hey, buddy, can you give me a hand with this?' },
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

    // ── estructuradores_informacion block (kept separate; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: 'Read the passage, then answer: what function do "por una parte" and "por otra parte" serve together?',
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
      word: 'por una parte...por otra parte',
      english: 'on the one hand...on the other hand',
      answer: 'They present two contrasting sides of the same issue as one balanced comparison',
      options: [
        'They present two contrasting sides of the same issue as one balanced comparison',
        'They list unrelated topics in random order',
        'They introduce the final conclusion of the text',
        'They correct something said earlier in the text',
      ],
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: 'Completa: "___, muchos empleados valoran la flexibilidad; por otra parte, algunos jefes temen que la comunicación se resienta."',
      word: 'Por una parte',
      english: 'on the one hand',
      answer: 'Por una parte',
      concept_id: 'estructuradores_informacion',
      difficulty: 1,
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
    },
    {
      type: 'fill_blank',
      prompt: 'Completa la conclusión del texto: "___, la decisión dependerá de los resultados de la encuesta interna." (the marker meaning "ultimately, in short")',
      word: 'En definitiva',
      english: 'ultimately, in short',
      answer: 'En definitiva',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate this sentence from the text: "En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas."',
      word: 'en primer lugar...en segundo lugar',
      english: 'first...second',
      answer: 'First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices.',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
    },
    {
      type: 'error_correction',
      prompt: 'Fix the gender agreement error: "Por una parte, el equipo apoya la medida; por otro parte, los directores dudan."',
      word: 'por otra parte',
      english: 'on the other hand',
      answer: 'Por una parte, el equipo apoya la medida; por otra parte, los directores dudan.',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'Read the dialogue, then answer: is "por un lado...por otro" more or less formal than "por una parte...por otra parte"?',
      word: 'por un lado...por otro',
      english: 'on one hand...on the other (informal variant)',
      answer: 'Less formal — an equally correct, more everyday variant',
      options: [
        'More formal — reserved for legal and academic writing',
        'Less formal — an equally correct, more everyday variant',
        'They are never interchangeable in meaning',
        'Only "por un lado" is grammatically correct',
      ],
      concept_id: 'estructuradores_informacion',
      difficulty: 3,
      passage: 'Jefe: ¿Qué opináis del nuevo horario flexible?\nMarta: Por un lado, me encanta poder empezar más tarde. Por otro, echo de menos ver a todo el equipo junto por la mañana.\nJefe: Entiendo. En resumen, parece que la flexibilidad tiene ventajas y desventajas para todos.',
      passageEn: 'Boss: What do you all think of the new flexible schedule?\nMarta: On one hand, I love being able to start later. On the other, I miss seeing the whole team together in the morning.\nBoss: I understand. In short, it seems flexibility has both advantages and disadvantages for everyone.',
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, using the closing/summary structurer meaning 'in short': 'In short, all three proposals share the same goal.'",
      english: 'In short, all three proposals share the same goal.',
      answer: 'En resumen, las tres propuestas comparten el mismo objetivo.',
      word: 'en resumen',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
    },

    // ── registro_formal_informal block (blocked practice: drilled alone before mixing with other concepts) ──
    { type: 'register_identify', prompt: 'What register is this sentence?', sentence: '¿Podría usted ayudarme, por favor?', sentenceEn: 'Could you help me, please?', word: 'podría usted', english: 'formal — conditional + usted, maximally indirect', answer: 'formal', options: ['formal', 'neutral', 'informal', 'colloquial'], concept_id: 'registro_formal_informal', difficulty: 2 },
    { type: 'register_identify', prompt: 'What register is this sentence?', sentence: '¿Puede darme los datos, por favor?', sentenceEn: 'Can you give me the details, please?', word: 'puede darme', english: 'neutral — polite but no usted needed for the same distance', answer: 'neutral', options: ['formal', 'neutral', 'informal', 'colloquial'], concept_id: 'registro_formal_informal', difficulty: 2 },
    { type: 'register_identify', prompt: 'What register is this sentence?', sentence: '¿Me haces un favor y me pasas el móvil?', sentenceEn: 'Can you do me a favor and hand me my phone?', word: 'me haces un favor', english: 'informal — direct present-tense question, no hedge', answer: 'informal', options: ['formal', 'neutral', 'informal', 'colloquial'], concept_id: 'registro_formal_informal', difficulty: 2 },
    { type: 'register_identify', prompt: 'What register is this sentence?', sentence: '¿Me pasas el informe ese, tío, o qué?', sentenceEn: 'Are you gonna pass me that report, dude, or what?', word: 'tío... o qué', english: 'colloquial — slang address term, vague filler, blunt tag', answer: 'colloquial', options: ['formal', 'neutral', 'informal', 'colloquial'], concept_id: 'registro_formal_informal', difficulty: 2 },
    {
      type: 'multiple_choice',
      prompt: 'Según el texto, ¿qué frase está dirigida al jefe (registro formal)?',
      word: 'podría usted enviarme',
      english: 'could you (formal) send me',
      answer: '¿Podría usted enviarme el informe antes de las cinco, por favor?',
      options: [
        '¿Podría usted enviarme el informe antes de las cinco, por favor?',
        '¿Puedes enviarme el informe antes de las cinco?',
        'Oye, ¿me pasas el informe ese antes de las cinco o qué?',
        '¿Podría enviarme el informe antes de las cinco?',
      ],
      concept_id: 'registro_formal_informal',
      difficulty: 2,
      passage: 'Necesitas el mismo informe urgente de cuatro personas distintas, y cada vez ajustas el registro a la relación que tienes con cada una. A tu jefe: "¿Podría usted enviarme el informe antes de las cinco, por favor?" A una clienta con la que apenas has hablado: "¿Podría enviarme el informe antes de las cinco?" A un compañero de confianza: "¿Puedes enviarme el informe antes de las cinco?" A tu mejor amigo: "Oye, ¿me pasas el informe ese antes de las cinco o qué?"',
      passageEn: 'You need the same urgent report from four different people, and each time you adjust the register to your relationship with them. To your boss: "Could you please send me the report before five?" To a client you\'ve barely spoken to: "Could you send me the report before five?" To a trusted coworker: "Can you send me the report before five?" To your best friend: "Hey, are you gonna send me that report before five or what?"',
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa la línea dirigida al mejor amigo: 'Oye, ¿me ___ el informe ese antes de las cinco o qué?'",
      word: 'pasas',
      english: 'you pass/send (informal present tense)',
      answer: 'pasas',
      concept_id: 'registro_formal_informal',
      difficulty: 2,
      passage: 'Necesitas el mismo informe urgente de cuatro personas distintas, y cada vez ajustas el registro a la relación que tienes con cada una. A tu jefe: "¿Podría usted enviarme el informe antes de las cinco, por favor?" A una clienta con la que apenas has hablado: "¿Podría enviarme el informe antes de las cinco?" A un compañero de confianza: "¿Puedes enviarme el informe antes de las cinco?" A tu mejor amigo: "Oye, ¿me pasas el informe ese antes de las cinco o qué?"',
      passageEn: 'You need the same urgent report from four different people, and each time you adjust the register to your relationship with them. To your boss: "Could you please send me the report before five?" To a client you\'ve barely spoken to: "Could you send me the report before five?" To a trusted coworker: "Can you send me the report before five?" To your best friend: "Hey, are you gonna send me that report before five or what?"',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate the line aimed at the trusted coworker: '¿Puedes enviarme el informe antes de las cinco?'",
      word: 'puedes enviarme',
      english: 'can you send me (informal)',
      answer: 'Can you send me the report before five?',
      concept_id: 'registro_formal_informal',
      difficulty: 1,
      passage: 'Necesitas el mismo informe urgente de cuatro personas distintas, y cada vez ajustas el registro a la relación que tienes con cada una. A tu jefe: "¿Podría usted enviarme el informe antes de las cinco, por favor?" A una clienta con la que apenas has hablado: "¿Podría enviarme el informe antes de las cinco?" A un compañero de confianza: "¿Puedes enviarme el informe antes de las cinco?" A tu mejor amigo: "Oye, ¿me pasas el informe ese antes de las cinco o qué?"',
      passageEn: 'You need the same urgent report from four different people, and each time you adjust the register to your relationship with them. To your boss: "Could you please send me the report before five?" To a client you\'ve barely spoken to: "Could you send me the report before five?" To a trusted coworker: "Can you send me the report before five?" To your best friend: "Hey, are you gonna send me that report before five or what?"',
    },
    { type: 'translation_to_spanish', prompt: "Translate, using formal register: 'I would be grateful if you could confirm the appointment.'", english: 'I would be grateful if you could confirm the appointment.', answer: 'Le agradecería que me confirmara la cita.', word: 'le agradecería que', concept_id: 'registro_formal_informal', difficulty: 3 },

    // ── Production practice: writing_prompt (self-assessed, no exact-match grading) ──
    { type: 'writing_prompt', prompt: 'Explica, en 3-4 frases, una ventaja y una desventaja de trabajar desde casa. Estructura tu respuesta con "por una parte... por otra... en definitiva".', word: null, english: null, answer: 'Por una parte, trabajar desde casa permite organizar mejor el tiempo y evitar el desplazamiento diario. Por otra, resulta más difícil separar la vida laboral de la personal. En definitiva, creo que las ventajas superan a los inconvenientes si uno mantiene una rutina clara.', concept_id: 'estructuradores_informacion', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, WordReference-
// adjacent pedagogical sources, Kwiziq, Lawless Spanish, CVC (Centro Virtual
// Cervantes), LanguageTool, and other established grammar references before
// writing (July 2026):
// - ser + past participle as the formal/written passive, agreeing in
//   gender/number with the subject, with por introducing the agent; the
//   se-passive and active voice as the strongly preferred everyday-spoken
//   alternatives; ser-passive's natural home in journalism, legal/academic
//   writing, and formal speeches (Mango Languages "How to use the passive
//   voice in Spanish?"; Spanish.academy "How to Master the Passive Voice in
//   Spanish"; SpanishDict "Impersonal Se vs. Passive Se"), consistent with
//   the existing ser_passive card in src/content/grammar.js.
// - the estar + participio resultant-state contrast (está redactado = the
//   state of being written, vs. fue redactado = the act of being written)
//   as a standard companion distinction to the ser-passive (SpanishDict
//   ser/estar + participle guidance, consistent with the existing
//   ser_passive card's estar note).
// - estructuradores_informacion: the estructuradores category splits into
//   comentadores, ordenadores, and digresores; por una parte/por otra
//   parte and en primer lugar/en segundo lugar are ordenadores, whose job
//   is placing a discourse member within an ordered sequence of parts; en
//   definitiva functions as a marcador conclusivo (bottom-line conclusion,
//   distinct from simply "the last item in a numbered list") — checked
//   against Retóricas "Ejemplos de Marcadores Estructuradores" and the CVC
//   ELE dictionary's marcadores del discurso entry, consistent with the
//   existing estructuradores_informacion card in src/content/grammar.js
//   (which likewise notes por una parte requiring its por otra parte
//   counterpart, and por un lado/por otro as an equally correct, less
//   formal variant).
// - registro_formal_informal: the four-way register scale (formal, neutral,
//   informal, colloquial) matching this site's own idioms.js register field;
//   the request spectrum from ¿podría usted...? through ¿me pasas...?, and
//   that register control involves word choice, sentence length/
//   subordination, and level of indirection, not just tú/usted — checked
//   against LanguageTool's "Registro formal o informal" guide, the CVC
//   Didactired "Tabla de diferencias entre el registro informal y el
//   formal," and RAE's Diccionario panhispánico de dudas entry on usted
//   (formality/distance function). Matches the existing GRAMMAR_CARDS entry
//   for registro_formal_informal in src/content/grammar.js (same core
//   examples: ¿podría usted...?/¿puede.../¿puedes.../se ruega a los señores
//   pasajeros).
// This content is complementary to the existing GRAMMAR_CARDS entries for
// ser_passive, estructuradores_informacion, and registro_formal_informal in
// src/content/grammar.js (same facts, fuller C1-paced walkthrough with
// worked contrasts and original reading passages) and does not contradict
// them. As the first C1 unit in the curriculum, its register notes
// (ser_passive as formal/written-only) are kept brief per the assignment,
// matching this unit's overall goal of advanced precision rather than new
// foundational ground.
//
// Curriculum-pacing-lag fix (07-09-2026): aunque_concessive, verbos_
// preposicionales, and cuantificadores were removed from this unit (see
// header note above for where each relocated); estructuradores_informacion
// and registro_formal_informal were added, verbatim, from the old
// unit31-discourse-markers.js and unit32-register-stance.js respectively.
// See ES.md's punch-list item 29.
