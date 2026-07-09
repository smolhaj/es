// Unit — Argumentation & Workplace Correspondence (B2)
// Covers: conectores_argumentativos_basicos, registro_formal_correspondencia
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit closes
// a B2 gap: learners could already form complex sentences (comparatives,
// the conditional, the subjunctive) but had no dedicated lesson on the
// everyday connectors that hold an opinion together (pero, sin embargo,
// por eso, por lo tanto, además) or on the register shift formal writing
// requires (Estimado/a, le escribo para, quisiera, ¿podría...?). This is
// deliberately the conversational-tier, practical subset of both topics —
// the fuller, formally-categorized connector families (no obstante, en
// cambio, así que, de ahí que, es más, ya que, puesto que, dado que) are
// covered later at C1 in Unit 30, "Connectors & Cohesion," which this unit
// is a prerequisite for. The final section applies both concepts together
// in a realistic workplace complaint email, matching the curriculum's
// "real-world practical tasks" directive. Every Spanish claim below was
// verified via WebSearch against SpanishDict, Kwiziq, SpanishStep, and
// established Spanish-correspondence guides before writing — see the audit
// note at the bottom of this file.

export default {
  sections: [
    {
      heading: 'Pero and Sin Embargo: Two Sizes of Contrast',
      paragraphs: [
        "You've been using pero (\"but\") since your very first units — it's the default, all-purpose word for pivoting on a contrast, and it stays that way for the rest of your Spanish life. What's new here is learning its heavier cousin, sin embargo (\"however,\" \"nevertheless\"), and understanding exactly when to reach for which one. The two aren't interchangeable stylistic twins; they do different structural jobs.",
        "Pero joins two ideas inside a single sentence, in one breath: Me gusta, pero es caro (\"I like it, but it's expensive\"). It's light, conversational, and it never needs a comma of its own beyond the one separating the two clauses. Sin embargo, by contrast, usually stands between two separate sentences or clauses and carries more weight — it signals a bigger, more deliberate contrast, often an unexpected turn: Llovía mucho. Sin embargo, salimos a caminar (\"It was raining hard. Even so, we went for a walk\"). Notice sin embargo can open its own sentence and is set off by a comma; pero almost never opens a sentence this way in natural Spanish.",
        "A rough but reliable test: if you could just as easily say \"but\" in casual English speech, pero is probably right. If the English in your head sounds more like \"however\" or \"nevertheless\" — the kind of word that shows up when you're making a case, not just chatting — reach for sin embargo. Both are completely normal in speech and writing at this level; sin embargo just signals that you're building an argument, not only describing.",
      ],
      examples: [
        { es: 'Me gusta, pero es caro.', en: "I like it, but it's expensive." },
        { es: 'Quiero ir, pero no tengo tiempo.', en: "I want to go, but I don't have time." },
        { es: 'Llovía mucho. Sin embargo, salimos a caminar.', en: 'It was raining hard. Even so, we went for a walk.' },
        { es: 'El plan parecía bueno. Sin embargo, nadie lo aprobó.', en: 'The plan seemed good. However, nobody approved it.' },
      ],
      commonMistakes: [
        "Using sin embargo to link two short clauses the way pero does — X pero Y works in one breath, but X. Sin embargo, Y (or X; sin embargo, Y) wants its own clause boundary, usually a period or semicolon plus a comma after sin embargo.",
        "Treating sin embargo as simply \"a fancier pero\" and using it everywhere — it's not wrong, but it makes casual speech sound stiff. Save it for moments where you're genuinely building or defending a point, not every time you'd say \"but\" in English.",
        "Forgetting the comma after sin embargo when it opens a sentence: Sin embargo, no llegamos a tiempo — the comma is expected, not optional.",
      ],
    },
    {
      heading: 'Por Eso, Por Lo Tanto, Además: Stating What Follows',
      paragraphs: [
        "Once you can contrast two ideas, the next move in any argument is showing consequence — what follows from what — or adding another point on top of one you've already made. Three words do most of this work at the everyday level: por eso, por lo tanto, and además.",
        "Por eso (\"that's why,\" \"so\") is the conversational go-to for cause and effect: No tenía dinero, por eso no fui (\"I didn't have money, so I didn't go\"). Por lo tanto (\"therefore\") means almost the same thing but sits a register higher — it's the word you'd expect in a report, an email to a colleague, or a considered spoken argument, where por eso would sound a touch casual. They're close enough that swapping one for the other rarely creates a real error, only a shift in tone: more everyday with por eso, more measured with por lo tanto.",
        "Además (\"furthermore,\" \"what's more,\" \"also\") adds a new point rather than drawing a conclusion — use it when you want to stack a second reason on top of the first, strengthening your case rather than explaining an effect: El plan es caro. Además, tardaría meses (\"The plan is expensive. What's more, it would take months\"). It's a stronger, more deliberate cousin of también (\"also\") — también just tacks on information, while además signals you're building toward something, which is exactly the job it does in an argument.",
        "Put together, these four words — pero, sin embargo, por eso/por lo tanto, además — are really all you need to state an opinion, back it up, concede a counterpoint, and add weight to your case. That's the whole toolkit this section is teaching: not an exhaustive catalogue of connectors (that comes later), just the practical basics for saying what you think and why.",
      ],
      examples: [
        { es: 'No tenía dinero, por eso no fui.', en: "I didn't have money, so I didn't go." },
        { es: 'Llegamos tarde. Por lo tanto, perdimos el tren.', en: 'We arrived late. Therefore, we missed the train.' },
        { es: 'El plan es caro. Además, tardaría meses.', en: "The plan is expensive. What's more, it would take months." },
        { es: 'No me convence el precio; además, la calidad es dudosa.', en: "I'm not convinced by the price; on top of that, the quality is questionable." },
      ],
      commonMistakes: [
        "Reaching for por lo tanto in casual chat about small everyday things — it's not wrong, but it can sound oddly formal for \"that's why I was late,\" where por eso fits the moment better.",
        "Using además to mean \"but\" or to introduce a contrast — it only adds a point in the same direction as what came before; for a contrast you still need pero or sin embargo.",
        "Confusing por eso (consequence: \"that's why\") with porque (reason: \"because\") — porque introduces the cause, por eso introduces the effect that follows from it. No fui porque no tenía dinero and No tenía dinero, por eso no fui say the same thing in reverse order.",
      ],
    },
    {
      heading: 'Opening and Closing a Formal Letter or Email',
      paragraphs: [
        "Shift gears now from spoken argument to written formality — a different but related skill, since you'll often need both together, as in the workplace email at the end of this unit. Formal Spanish correspondence (a job application, a complaint to a company, an email to your landlord) follows a fixed shape, and once you know the pieces, you can build almost any formal letter from them.",
        "You open with Estimado/a followed by a title and surname, or just the surname if you don't know a title: Estimado Sr. García, Estimada Dra. López, or the more generic Estimados señores if you're writing to a department rather than a person. Spanish typically uses a colon after this greeting, not a comma the way English does — Estimada señora García: is the norm in a formal letter, even though ¡Hola María! with a comma would be fine in a casual one.",
        "Right after the greeting, state your purpose immediately — don't bury it. The workhorse phrase is le escribo para + infinitive (\"I am writing to...\"): Le escribo para solicitar información sobre... (\"I am writing to request information about...\"), Le escribo para informarle de que... (\"I am writing to inform you that...\"). This upfront-purpose structure is exactly what a busy reader expects and mirrors how English formal emails open too, so it should feel familiar even in a new language.",
        "You close with Atentamente (\"Sincerely\") or the slightly warmer Un cordial saludo (\"Best regards\" / \"Kind regards\") — both are safe, standard, and interchangeable in tone at this level, then a new line for your name. Skip the closer you'd use with friends (Un abrazo, Besos) entirely in this register; they'd feel as out of place here as \"later, bro\" would at the bottom of a business email in English.",
      ],
      examples: [
        { es: 'Estimada señora García: Le escribo para solicitar información sobre...', en: 'Dear Ms. García: I am writing to request information about...' },
        { es: 'Estimado Sr. Ruiz: Le escribo para informarle de que...', en: 'Dear Mr. Ruiz: I am writing to inform you that...' },
        { es: 'Atentamente, / Un cordial saludo,', en: 'Sincerely, / Best regards,' },
        { es: 'Estimados señores: Les escribo en relación con su anuncio.', en: "Dear Sirs/Madams: I'm writing in connection with your ad." },
      ],
      commonMistakes: [
        "Using a comma after Estimado/a the way English uses one after \"Dear\" — Spanish formal correspondence expects a colon: Estimada señora García: not Estimada señora García,.",
        "Burying the reason for writing three sentences in — le escribo para... belongs right after the greeting, not after a paragraph of pleasantries.",
        "Closing a formal letter with an informal sign-off like Un abrazo or Saludos alone — save those for messages to people you already know well; Atentamente or Un cordial saludo is the safe default here.",
      ],
    },
    {
      heading: 'Asking Politely: Quisiera and ¿Podría...?',
      paragraphs: [
        "Back in Unit 19 you learned the imperative for direct commands, and in Unit 18 you met the conditional. Formal register leans on both of those foundations to soften a request: instead of a blunt imperative (Envíeme el informe, \"Send me the report\"), polite written and spoken Spanish reaches for quisiera or ¿podría...?.",
        "Quisiera is technically the imperfect subjunctive of querer, but in practice it works as a fixed, extra-polite way to say \"I would like\" — one notch more courteous than the everyday conditional querría, and far softer than the blunt present-tense quiero (\"I want\"). Quisiera hacer una reserva para dos personas (\"I'd like to make a reservation for two\") states what you want without any hint of demanding it. It's the standard choice in formal writing and in service interactions with strangers — a waiter, a hotel receptionist, a stranger's inbox.",
        "¿Podría...? (\"Could you...?\") does the same softening job for requests you're making of someone else, using the conditional of poder instead of a command: ¿Podría enviarme el informe antes del viernes? (\"Could you send me the report before Friday?\") lands far more politely than the imperative Envíeme el informe, even though both get the report sent. The conditional puts a small, deliberate distance between you and the demand — you're not ordering, you're asking whether it's possible.",
        "Neither of these is about being unclear — you still say exactly what you need. They're about tone: in formal Spanish, a direct imperative to someone you don't know well can come across as curt or even rude, the way \"Send me the report\" reads more like an order than a request in English too. Quisiera and ¿podría...? get the same information across while sounding like a request, not a command.",
      ],
      examples: [
        { es: 'Quisiera hacer una reserva para dos personas.', en: "I'd like to make a reservation for two." },
        { es: '¿Podría enviarme el informe antes del viernes?', en: 'Could you send me the report before Friday?' },
        { es: 'Quisiera saber si hay plazas disponibles.', en: "I'd like to know if there are spots available." },
        { es: '¿Podría confirmarme la recepción de este correo?', en: 'Could you confirm receipt of this email for me?' },
      ],
      commonMistakes: [
        "Defaulting to quiero in a formal email — it's grammatically fine but sounds blunt in this register, the way \"I want\" sounds blunter than \"I would like\" in a formal English email. Quisiera is the safer, standard choice.",
        "Using a bare imperative (Envíeme, Confírmeme) with someone you don't know in a formal context — it's not incorrect, but ¿podría + infinitive? reads as noticeably more courteous and is the expected default in written requests.",
        "Forgetting quisiera doesn't change form for politeness levels the way English modal verbs sometimes do — it's already the polite form; there's no more-polite version to layer on top for everyday formal use.",
      ],
    },
    {
      heading: 'Putting It Together: A Workplace Complaint Email',
      paragraphs: [
        "Here's where the two halves of this unit meet. Real formal writing rarely uses connectors or polite requests in isolation — a complaint, a negotiation, or a request to a colleague needs both at once: the formal shell (greeting, purpose, closing, softened requests) built around a small argument (a contrast, a consequence, an added point). Read the email below and notice how compact it is — every sentence is doing one clear job.",
        "Estimado Sr. Ramírez: opens exactly as Section 3 taught. Le escribo para expresar mi disconformidad con el pedido... states the purpose immediately. El producto llegó a tiempo, pero no funciona correctamente uses pero for a contrast inside one sentence — a small, local pivot. Por eso, quisiera solicitar un reembolso completo chains a consequence (por eso) straight into a softened request (quisiera) — the two concepts working in the same sentence. Además, ¿podría confirmarme el plazo de devolución? adds a second, related request (además) phrased politely (¿podría...?). Sin embargo, entiendo que estos procesos llevan tiempo shows sin embargo doing its heavier, concession-signaling job — conceding a point before the closer. And it ends with Atentamente, exactly as taught.",
        "This is the level of writing this whole unit is aiming at: not a wall of connectors for their own sake, but a short, clear, correctly registered piece of real-world writing — the kind you'd actually need to send.",
      ],
      examples: [
        { es: 'Estimado Sr. Ramírez:\n\nLe escribo para expresar mi disconformidad con el pedido que recibí la semana pasada. El producto llegó a tiempo, pero no funciona correctamente. Por eso, quisiera solicitar un reembolso completo. Además, ¿podría confirmarme el plazo de devolución? Sin embargo, entiendo que estos procesos llevan tiempo, por lo que agradezco de antemano su atención.\n\nAtentamente,\nLaura Méndez', en: "Dear Mr. Ramírez:\n\nI am writing to express my dissatisfaction with the order I received last week. The product arrived on time, but it doesn't work correctly. That's why I would like to request a full refund. Also, could you confirm the return deadline for me? That said, I understand these processes take time, so I appreciate your attention in advance.\n\nSincerely,\nLaura Méndez" },
      ],
      commonMistakes: [
        "Piling on every connector you know in one paragraph — the sample email uses each one exactly once, because that's how real writing works; more isn't more persuasive, it's just cluttered.",
        "Switching registers mid-email — starting formal with Estimado and then slipping into quiero or a bare imperative later on breaks the consistency a formal email needs from greeting to sign-off.",
        "Leaving out the purpose sentence (le escribo para...) and jumping straight into the complaint — even in an assertive email, state why you're writing before you make your case.",
      ],
    },
  ],

  vocab: [
    { es: 'pero', en: 'but', example: 'Me gusta, pero es caro.', exampleEn: "I like it, but it's expensive." },
    { es: 'sin embargo', en: 'however / nevertheless', example: 'Llovía mucho. Sin embargo, salimos.', exampleEn: 'It was raining hard. Even so, we went out.' },
    { es: 'por eso', en: "that's why / so", example: 'No tenía dinero, por eso no fui.', exampleEn: "I didn't have money, so I didn't go." },
    { es: 'por lo tanto', en: 'therefore', example: 'Llegamos tarde. Por lo tanto, perdimos el tren.', exampleEn: 'We arrived late. Therefore, we missed the train.' },
    { es: 'además', en: "furthermore / what's more", example: 'El plan es caro. Además, tardaría meses.', exampleEn: "The plan is expensive. What's more, it would take months." },
    { es: 'estar de acuerdo', en: 'to agree', example: 'No estoy de acuerdo con esa idea.', exampleEn: "I don't agree with that idea." },
    { es: 'el argumento', en: 'the argument', example: 'Su argumento no me convence.', exampleEn: "Their argument doesn't convince me." },
    { es: 'convencer', en: 'to convince', example: 'Sus razones no me convencen.', exampleEn: "Their reasons don't convince me." },
    { es: 'opinar', en: 'to think / have an opinion', example: 'Yo opino que es una buena idea.', exampleEn: 'I think it\'s a good idea.' },
    { es: 'estimado/a', en: 'dear (formal)', example: 'Estimada señora García:', exampleEn: 'Dear Ms. García:' },
    { es: 'le escribo para', en: 'I am writing to', example: 'Le escribo para solicitar información.', exampleEn: 'I am writing to request information.' },
    { es: 'quisiera', en: 'I would like', example: 'Quisiera hacer una reserva.', exampleEn: "I'd like to make a reservation." },
    { es: '¿podría...?', en: 'could you...?', example: '¿Podría enviarme el informe?', exampleEn: 'Could you send me the report?' },
    { es: 'atentamente', en: 'sincerely', example: 'Atentamente, Laura Méndez', exampleEn: 'Sincerely, Laura Méndez' },
    { es: 'un cordial saludo', en: 'best regards / kind regards', example: 'Un cordial saludo, el equipo.', exampleEn: 'Best regards, the team.' },
    { es: 'solicitar', en: 'to request', example: 'Quisiera solicitar un reembolso.', exampleEn: 'I would like to request a refund.' },
    { es: 'el reembolso', en: 'the refund', example: 'Quisiera solicitar un reembolso completo.', exampleEn: 'I would like to request a full refund.' },
    { es: 'el plazo', en: 'the deadline / time frame', example: '¿Podría confirmarme el plazo?', exampleEn: 'Could you confirm the deadline for me?' },
    { es: 'la disconformidad', en: 'the dissatisfaction / disagreement', example: 'Le escribo para expresar mi disconformidad.', exampleEn: 'I am writing to express my dissatisfaction.' },
    { es: 'adjuntar', en: 'to attach', example: 'Adjunto encontrará el documento.', exampleEn: 'Please find the document attached.' },
  ],

  practice: [
    // ── conectores_argumentativos_basicos block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which connector fits inside one sentence for a light contrast? "Me gusta, ___ es caro."', word: 'pero', english: 'but', answer: 'pero', options: ['pero', 'sin embargo', 'por eso', 'además'], concept_id: 'conectores_argumentativos_basicos', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the heavier, sentence-opening contrast word: "Llovía mucho. ___, salimos a caminar."', word: 'sin embargo', english: 'even so / however', answer: 'Sin embargo', concept_id: 'conectores_argumentativos_basicos', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It was raining hard. Even so, we went out.'", english: 'It was raining hard. Even so, we went out.', answer: 'Llovía mucho. Sin embargo, salimos.', word: 'sin embargo', concept_id: 'conectores_argumentativos_basicos', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which word introduces a consequence in casual, everyday speech?', word: 'por eso', english: "that's why", answer: 'por eso', options: ['por eso', 'además', 'pero', 'sin embargo'], concept_id: 'conectores_argumentativos_basicos', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "No tenía dinero, ___ no fui." (that\'s why)', word: 'por eso', english: "that's why", answer: 'por eso', concept_id: 'conectores_argumentativos_basicos', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which of these two is the more formal way to say "therefore"?', word: 'por lo tanto', english: 'therefore', answer: 'por lo tanto', options: ['por lo tanto', 'por eso', 'pero', 'además'], concept_id: 'conectores_argumentativos_basicos', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate, adding a second point with 'furthermore': 'The plan is expensive. What's more, it would take months.'", english: "The plan is expensive. What's more, it would take months.", answer: 'El plan es caro. Además, tardaría meses.', word: 'además', concept_id: 'conectores_argumentativos_basicos', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "El precio es alto. Además, no me convence la calidad, pero no puedo pagarlo." (the "pero" should be a consequence word, since this isn\'t a contrast)', word: 'por eso', english: "that's why", answer: 'El precio es alto. Además, no me convence la calidad, por eso no puedo pagarlo.', concept_id: 'conectores_argumentativos_basicos', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Llegamos tarde. Por lo tanto, perdimos el tren."', word: 'por lo tanto', english: 'therefore', answer: 'We arrived late. Therefore, we missed the train.', concept_id: 'conectores_argumentativos_basicos', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly uses además to add a point (not contrast)?', word: 'además', english: 'furthermore', answer: 'No me convence el precio; además, la calidad es dudosa.', options: ['No me convence el precio; además, la calidad es dudosa.', 'No me convence el precio; además, la calidad es buena, pero lo compraré.', 'Me convence el precio, además no lo compraré.', 'El precio es alto, además es barato.'], concept_id: 'conectores_argumentativos_basicos', difficulty: 3 },

    // ── registro_formal_correspondencia block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which greeting is correct for a formal letter to Sra. García?', word: 'estimada', english: 'dear', answer: 'Estimada señora García:', options: ['Estimada señora García:', 'Hola María,', '¡Estimada señora García!', 'Querida señora García,'], concept_id: 'registro_formal_correspondencia', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete the opening purpose phrase: "Estimado Sr. Ruiz: ___ informarle de que..." (I am writing to)', word: 'le escribo para', english: 'I am writing to', answer: 'Le escribo para', concept_id: 'registro_formal_correspondencia', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which is the more polite, standard way to say "I would like" in a formal request?', word: 'quisiera', english: 'I would like', answer: 'quisiera', options: ['quisiera', 'quiero', 'quería', 'querré'], concept_id: 'registro_formal_correspondencia', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate using the polite form: 'I would like to make a reservation for two people.'", english: 'I would like to make a reservation for two people.', answer: 'Quisiera hacer una reserva para dos personas.', word: 'quisiera', concept_id: 'registro_formal_correspondencia', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete the polite request: "¿___ enviarme el informe antes del viernes?" (Could you)', word: 'podría', english: 'could you', answer: 'Podría', concept_id: 'registro_formal_correspondencia', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which closing is appropriate for a formal letter?', word: 'atentamente', english: 'sincerely', answer: 'Atentamente', options: ['Atentamente', 'Un abrazo', 'Besos', 'Chao'], concept_id: 'registro_formal_correspondencia', difficulty: 1 },
    { type: 'error_correction', prompt: 'Find and correct the register error in a formal email: "Envíeme el informe ahora mismo."', word: 'podría', english: 'could you send me', answer: '¿Podría enviarme el informe, por favor?', concept_id: 'registro_formal_correspondencia', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Le escribo para solicitar información sobre el puesto."', word: 'le escribo para', english: 'I am writing to', answer: 'I am writing to request information about the position.', concept_id: 'registro_formal_correspondencia', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate, using a polite request instead of a command: 'Could you confirm receipt of this email for me?'", english: 'Could you confirm receipt of this email for me?', answer: '¿Podría confirmarme la recepción de este correo?', word: 'podría', concept_id: 'registro_formal_correspondencia', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which punctuation follows the greeting in a Spanish formal letter?', word: 'dos puntos', english: 'colon', answer: 'Estimada señora García: (colon)', options: ['Estimada señora García: (colon)', 'Estimada señora García, (comma)', 'Estimada señora García! (exclamation)', 'Estimada señora García (nothing)'], concept_id: 'registro_formal_correspondencia', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Kwiziq Spanish,
// SpanishStep, and established Spanish business-correspondence guides
// before writing (July 2026):
// - pero vs. sin embargo: pero is the lighter, all-purpose, spoken-register
//   conjunction joining two clauses in one breath; sin embargo is the
//   heavier, more formal/written option that typically opens or punctuates
//   its own clause and signals a stronger or more deliberate contrast —
//   confirmed against SpanishDict's "sin embargo vs. pero" answer thread
//   and SpanishStep's dedicated "sin embargo" usage guide.
// - por eso vs. por lo tanto: both express consequence ("that's why" vs.
//   "therefore"), near-interchangeable in meaning but different in
//   register — por eso is the casual, conversational default, por lo tanto
//   is the more formal choice for reports/essays/professional writing —
//   confirmed against SpanishDict's "Por lo tanto vs. Por eso" comparison
//   page and I Think Languages' connectors breakdown.
// - además as an addition connector ("furthermore," "what's more"),
//   stronger/more deliberate than también, commonly used to stack a second
//   point onto an argument and appropriate in both conversational and
//   formal/academic registers — confirmed against SpanishStep's "además"
//   guide and Study.com's Spanish connector-words overview.
// - This is confirmed as the deliberately narrower, conversational-tier
//   subset of connectors — the fuller, formally-categorized families (no
//   obstante, en cambio, así que, de ahí que, es más, en primer/último
//   lugar, ya que, puesto que, dado que) are the ones already scoped to
//   the existing C1 concepts connectors_contrast/connectors_consequence/
//   connectors_addition_sequence/connectors_cause_reason and taught in
//   Unit 30, "Connectors & Cohesion" — this unit does not re-teach or
//   duplicate that material, only the basics that unit already lists as a
//   prerequisite.
// - Formal letter/email structure (Estimado/a + name or title, colon
//   rather than comma after the greeting, le escribo para + infinitive to
//   state purpose immediately, Atentamente/Un cordial saludo as standard,
//   register-appropriate closings) confirmed against FluentU's "How to
//   Write Formal and Informal Letters in Spanish," Na'atik Language &
//   Culture Institute's formal-letters guide, and SpanishDict's "Writing a
//   Letter in Spanish" guide — all three agree on the colon convention and
//   the greeting/purpose/closing shape.
// - quisiera as the standard, most-natural polite form of "I would like":
//   confirmed as historically the imperfect subjunctive of querer, used in
//   practice as a fixed courteous request form, one step more polite than
//   the everyday conditional querría and considerably softer than present-
//   tense quiero — confirmed against SpanishStep's "Quiero vs Quisiera"
//   comparison and Elon.io's "quisiera, pudiera" courtesy-forms page,
//   which both describe the same quiero → quería → querría → quisiera
//   politeness ladder.
// - ¿Podría...? as the conditional-of-poder polite-request pattern,
//   preferred over a bare imperative when addressing someone formally or a
//   stranger, confirmed against Kwiziq's "poder for polite requests" page
//   and Migaku's/123TeachMe's polite-request guides.
// This content agrees with and does not contradict the existing
// GRAMMAR_CARDS entries for conectores_argumentativos_basicos and
// registro_formal_correspondencia in src/content/grammar.js (same four
// connectors, same letter-opening/closing phrases, same quisiera/podría
// framing), and builds directly on comparatives (Unit 25), the conditional
// (Unit 18), and the imperative (Unit 19) without re-teaching their basics
// from scratch.
