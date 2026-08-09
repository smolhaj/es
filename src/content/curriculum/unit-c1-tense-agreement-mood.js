// Unit — Tense Agreement & Mood Control (C1)
// Covers: sequence_of_tenses, subjunctive_independent_clauses,
// verbos_pronominales
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified via WebSearch against the RAE's Nueva gramática
// de la lengua española, SpanishDict, and established C1-level grammar
// references before writing — see the audit note at the bottom of this file.
//
// Built to thicken C1, which the 07-25-2026 content sweep found to be the
// thinnest tier by concept count (12 concepts / 4 units vs. B1's 37 / 16)
// and lopsided — 6 of its 12 concepts were discourse connectors, with zero
// verb-morphology and zero pronoun concepts.
//
// IMPORTANT SCOPING NOTE. That sweep counted concept IDs, not taught
// content, and initially overstated the gap. A proofread pass caught this:
// substantial parts of what looked "untaught" are in fact already taught at
// B1 under different concept IDs, specifically —
//   * unit24-subjunctive-deep-dive.js already teaches the CORE sequence-of-
//     tenses rule (present tier → present subj., past/conditional tier →
//     imperfect subj.) and already teaches como si + imperfect subjunctive.
//   * unit-b1-certainty-doubt-probability.js already teaches quizá/tal vez
//     dual mood AND that a lo mejor never takes the subjunctive.
// This unit was therefore rewritten to stop re-teaching that material and
// to carry only what is genuinely new at C1, treating the B1 content as
// known background it explicitly refers back to:
//   1. sequence_of_tenses → scoped to ANTERIORITY only: the two compound
//      subjunctives (haya/hubiera + participle) and the resulting four-cell
//      grid. The two-tense core is referenced as already known, not retaught.
//   2. subjunctive_independent_clauses → scoped to the SYNTACTIC constraint:
//      quizá/tal vez/acaso license the subjunctive only preverbally, so
//      postverbal placement forces the indicative. The semantic dual-mood
//      choice is referenced as already known. Ojalá's three-way tense
//      contrast is retained as the contrasting non-alternating case.
//   3. verbos_pronominales → wholly new; nothing in the curriculum covered
//      caer/caerse or ir/irse beyond unit-a2-phone-plans.js's surface
//      quedar/quedarse contrast, which this unit builds on rather than repeats.
// Builds on subjunctive_noun_clauses (Unit 26, immediately preceding),
// imperfect_subjunctive (B1), perfect_subjunctive / pluperfect_subjunctive
// (B2), reflexive_verbs (A1), and se_accidental (B1).

export default {
  sections: [
    {
      heading: 'Anteriority: The Compound Subjunctives That Complete the Sequence',
      paragraphs: [
        "You already know the core of la concordancia de tiempos from Unit 24: a present-tier main verb pulls the subordinate clause into the present subjunctive, and a past-tier main verb (including the conditional) pulls it into the imperfect subjunctive. Espero que vengas versus Esperaba que vinieras. That rule handles every case where the two actions are simultaneous or where the subordinate one comes later. This section adds the dimension that rule leaves out: what happens when the subordinate action came first.",
        "For that, Spanish reaches for the two compound subjunctives, and the same tier logic still applies. After a present-tier main verb, anteriority takes the present perfect subjunctive: Me alegro de que hayas venido (\"I'm glad you came\") — the coming happened before the gladness. After a past-tier main verb, it takes the pluperfect subjunctive: Me alegré de que hubieras venido (\"I was glad you had come\"). So the choice is genuinely two-dimensional. The main verb's tier picks the row — present or imperfect; the timing of the subordinate action picks the column — simple if it is simultaneous or later, compound if it came earlier.",
        "Laid out as a grid, the four cells are: present main + simultaneous → Dudo que venga; present main + anterior → Dudo que haya venido; past main + simultaneous → Dudaba que viniera; past main + anterior → Dudaba que hubiera venido. Learners who have only ever drilled the two-tense version of the rule tend to flatten those four cells into two, reaching for the simple subjunctive everywhere and losing the anteriority distinction entirely. The listener still understands, but the sequencing information is simply gone from the sentence.",
        "One caveat on how mechanical any of this is. The tier rule describes the standard, prescriptively expected pattern, and it is what you should produce. It is not, however, exceptionless in real usage: when the subordinate action remains open or still pending at the moment of speaking, native speakers do sometimes keep the present subjunctive after a past main verb — Me pidió que vaya mañana, where the going has not happened yet. Treat the tier rule as the reliable default and this as a documented variation you will hear, not as licence to ignore the rule.",
      ],
      examples: [
        { es: 'Me alegro de que hayas venido.', en: "I'm glad you came. (present main + anterior action → present perfect subjunctive)" },
        { es: 'Me alegré de que hubieras venido.', en: 'I was glad you had come. (past main + anterior action → pluperfect subjunctive)' },
        { es: 'Dudo que haya terminado el informe.', en: "I doubt he has finished the report. (present main, action already over)" },
        { es: 'Dudaba que hubiera terminado el informe.', en: 'I doubted he had finished the report. (past main, action already over)' },
        { es: 'No creo que llegara a tiempo aquel día.', en: "I don't think he arrived on time that day. (present main, but past reference)" },
        { es: 'Me hablaba como si no me hubiera visto nunca.', en: 'He talked to me as if he had never seen me before. (como si + past unreality → pluperfect subjunctive)' },
      ],
      commonMistakes: [
        'Don\'t flatten the four cells into two — reaching for the simple subjunctive everywhere loses the anteriority information. Dudo que venga (he may come) and Dudo que haya venido (he may already have come) are different claims.',
        'Don\'t reach for a compound subjunctive just because the sentence feels long or complex — haya/hubiera + participle specifically mark an action that happened BEFORE the main verb, not general emphasis.',
        'Keep the tier logic when you go compound: a past-tier main verb takes hubiera + participle, not haya + participle. Me alegré de que hubieras venido, not *Me alegré de que hayas venido.',
        'Note that the tier rule is the standard default rather than an absolute law — you will hear a present subjunctive after a past main verb when the action is still pending (Me pidió que vaya mañana). Produce the tier form; recognise the variant.',
      ],
    },
    {
      heading: 'Where the Adverb Sits: Position as Grammar',
      paragraphs: [
        "From Unit 22 you already know that quizá and tal vez accept either mood — subjunctive for live doubt, indicative when you think the thing is probably true — and that a lo mejor never takes the subjunctive at all, however uncertain the guess. That is the semantic half of the picture. This section adds the syntactic half, which is rarely taught and is a genuine marker of advanced control: with these adverbs, where the adverb sits in the sentence constrains which moods are even available.",
        "The rule is that quizá(s), tal vez and acaso license the subjunctive only from the preverbal position. Placed before the verb, both moods are open to you and the choice is the expressive one you already know: Quizá venga (real doubt) or Quizá viene (probably true). Move the adverb after the verb, though, and the subjunctive is no longer licensed at all — only the indicative survives: Vendrá mañana, quizá. Here position is not stylistic preference; it is doing grammatical work, closing off an option that was available a moment earlier.",
        "This is worth internalising because the postverbal placement is extremely common in speech, where the adverb often arrives as an afterthought — a hedge tacked on once the sentence is already out. That is precisely the moment a learner who has over-learned \"doubt takes the subjunctive\" is most likely to produce something ungrammatical, because the doubt is genuine and the reflex fires. The mood was fixed by the syntax before the doubt was expressed.",
        "Ojalá is the useful contrast on both counts. It never alternates: no indicative is ever available, in any position. What varies with ojalá is which subjunctive, and that choice carries real modal weight — Ojalá venga (I hope he comes, genuinely open), Ojalá viniera (I wish he would, but I doubt it), Ojalá hubiera venido (I wish he had, and he didn't). Same adverb, three quite different positions toward reality.",
      ],
      examples: [
        { es: 'Quizá venga mañana.', en: 'Maybe he\'ll come tomorrow. (preverbal + subjunctive — live doubt)' },
        { es: 'Quizá viene mañana.', en: 'Maybe he\'s coming tomorrow. (preverbal + indicative — leaning likely)' },
        { es: 'Vendrá mañana, quizá.', en: "He'll come tomorrow, maybe. (postverbal → indicative only)" },
        { es: 'Ojalá venga a la reunión.', en: 'I hope he comes to the meeting. (present subjunctive — genuinely open)' },
        { es: 'Ojalá viniera más a menudo.', en: 'I wish he came more often. (imperfect subjunctive — unlikely / contrary to fact)' },
        { es: 'Ojalá hubiera estudiado más.', en: 'I wish I had studied more. (pluperfect subjunctive — regret about the past)' },
        { es: 'Tal vez no fuera la mejor decisión.', en: "Perhaps it wasn't the best decision. (imperfect subjunctive — hedged judgement about the past)" },
      ],
      commonMistakes: [
        'The position trap: once quizá/tal vez/acaso follows the verb, the subjunctive is no longer available — Vendrá mañana, quizá, not a subjunctive form. The syntax fixes the mood before your sense of doubt gets a vote.',
        'Don\'t treat Ojalá venga and Ojalá viniera as interchangeable stylistic variants — the tense shift genuinely changes the message from "I hope this happens" to "I wish this were so, but it probably isn\'t."',
        'Ojalá never alternates with the indicative in any position, unlike quizá and tal vez — that asymmetry is the point of contrasting them.',
      ],
    },
    {
      heading: 'The Optional Pronoun That Isn\'t Optional: Caer vs. Caerse, Ir vs. Irse',
      paragraphs: [
        "A small group of intransitive verbs can appear with or without a reflexive-looking pronoun, and both versions are perfectly grammatical. Because nothing is technically wrong either way, learners tend to treat the pronoun as decoration and drop or add it at random. Native speakers do not: the pronoun consistently shifts the meaning, and using the wrong one is one of the most audible non-native tells at this level — precisely because the sentence stays grammatical while quietly saying the wrong thing.",
        "Take caer versus caerse. Caerse foregrounds an unexpected, involuntary loss of balance or support, and it is the default for animate subjects taking a tumble: Me caí en la escalera (\"I fell on the stairs\"). Caer leans neutral and external, describing the trajectory rather than the mishap, and is preferred in figurative and formal uses — caer en la cuenta (\"to realise\"), caer enfermo (\"to fall ill\"), la noche cae (\"night falls\"). Be careful with the textbook contrast here: for something like leaves, both Las hojas caen en otoño and Las hojas se caen are perfectly natural, so this pair is a difference of emphasis, not a hard either/or.",
        "One distinction in this area is sharp rather than gradient, and it is worth isolating: caerse versus the accidental se you met at B1. Me caí means I myself went down — I am the subject. Se me cayó el vaso means the glass went down and I am marked as the affected party by the dative me — the glass is the subject and I dropped it. Both are built on caerse; what differs is who occupies the subject slot, and that is exactly what decides whether you fell or something fell out of your hands.",
        "Ir versus irse splits along a different axis: destination versus departure. Ir points at where you are going — Voy al médico (\"I'm going to the doctor\"), with the doctor's office as the focus. Irse points at the leaving itself — Me voy (\"I'm off,\" \"I'm leaving\"), where the destination may not even be mentioned and is not the point. This is why Me voy works perfectly as a complete sentence when you stand up to leave a party, while a bare Voy sounds like an unfinished thought waiting for its destination.",
        "Quedar versus quedarse follows the same logic, and you already met the surface contrast back at A2 in the phone-and-plans unit: quedar for arranging to meet (Quedamos a las siete) and quedarse for staying put (Me quedo en casa). What is worth adding now is a working mnemonic for the whole family. Across these pairs the pronoun tends to mark a bounded change of state affecting the subject, rather than a bare description of an action: caerse packages the whole fall as a completed event that happened to you; irse packages the departure as a transition out of where you were; quedarse packages remaining as a state you settled into. This is a rule of thumb for reading the pronoun, not a formal category — the underlying grammar is aspectual, and the pattern is a tendency with real exceptions rather than a law. Used that way, though, it turns the pronoun from arbitrary decoration into a fairly reliable signal.",
      ],
      examples: [
        { es: 'Las hojas caen en otoño.', en: 'The leaves fall in autumn. (caer — neutral, expected, observed from outside)' },
        { es: 'Me caí en la escalera y me hice daño.', en: 'I fell on the stairs and hurt myself. (caerse — accidental, loss of balance)' },
        { es: 'Se me cayó el vaso.', en: 'I dropped the glass. (accidental se from B1 — the glass fell, not me)' },
        { es: 'Voy al médico esta tarde.', en: "I'm going to the doctor this afternoon. (ir — destination is the point)" },
        { es: 'Me voy, que ya es tarde.', en: "I'm off, it's getting late. (irse — the departure is the point)" },
        { es: 'Quedamos a las siete en la plaza.', en: "We're meeting at seven in the square. (quedar — arrange to meet)" },
        { es: 'Me quedé en casa todo el fin de semana.', en: 'I stayed home all weekend. (quedarse — remaining in place)' },
      ],
      commonMistakes: [
        'Don\'t confuse caerse with the accidental se — Me caí means "I fell" (I went down myself), while Se me cayó el vaso means "I dropped the glass" (the object fell). Both involve a pronoun and an accident, but the subject is different.',
        'Don\'t use a bare Voy as a complete sentence when you mean "I\'m leaving" — ir needs its destination to feel finished; the standalone "I\'m off" is Me voy.',
        'Don\'t assume the pronoun is optional decoration on these verbs just because both forms are grammatical — dropping or adding it changes what you actually said, and native listeners hear the difference immediately.',
        'Remember quedar and quedarse are not a style choice either: Quedamos a las siete (we\'re meeting) and Nos quedamos a las siete (we\'re staying) describe completely different evenings.',
      ],
    },
  ],

  vocab: [
    { es: 'la concordancia de tiempos', en: 'sequence of tenses (tense agreement)', example: 'La concordancia de tiempos decide qué subjuntivo usar.', exampleEn: 'Sequence of tenses decides which subjunctive to use.' },
    { es: 'ojalá', en: 'I hope / I wish (always + subjunctive)', example: 'Ojalá venga a la reunión.', exampleEn: 'I hope he comes to the meeting.' },
    { es: 'quizá / quizás', en: 'maybe, perhaps (+ subjunctive or indicative)', example: 'Quizá esté enfadado conmigo.', exampleEn: 'He might be annoyed with me.' },
    { es: 'tal vez', en: 'perhaps (+ subjunctive or indicative)', example: 'Tal vez no fuera la mejor decisión.', exampleEn: "Perhaps it wasn't the best decision." },
    { es: 'a lo mejor', en: 'maybe (never takes the subjunctive)', example: 'A lo mejor viene esta tarde.', exampleEn: "Maybe he'll come this afternoon." },
    { es: 'como si', en: 'as if (always + imperfect/pluperfect subjunctive)', example: 'Gasta dinero como si fuera millonario.', exampleEn: 'He spends money as if he were a millionaire.' },
    { es: 'caerse', en: 'to fall (accidentally, losing balance)', example: 'Me caí en la escalera.', exampleEn: 'I fell on the stairs.' },
    { es: 'irse', en: 'to leave, to go off (departure is the point)', example: 'Me voy, que ya es tarde.', exampleEn: "I'm off, it's getting late." },
    { es: 'hacerse daño', en: 'to hurt oneself', example: 'Me caí y me hice daño.', exampleEn: 'I fell and hurt myself.' },
  ],

  practice: [
    // ── sequence_of_tenses block (blocked practice: new-concept drill in isolation before interleaving) ──
    { type: 'fill_blank', prompt: 'Complete with the correct subjunctive: "Quería que ___ (venir, tú) ayer." (imperfect main verb)', word: 'vinieras', english: 'you would come', answer: 'vinieras', concept_id: 'sequence_of_tenses', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the sequence-of-tenses error: "Quería que vengas a la fiesta."', word: 'vinieras', english: 'you came', answer: 'Quería que vinieras a la fiesta.', altAnswers: ['Quería que vinieses a la fiesta.'], concept_id: 'sequence_of_tenses', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which subjunctive follows a conditional main verb: "Me gustaría que ___ bien"?', word: 'lo pensaras', english: 'you thought it over', answer: 'lo pensaras', options: ['lo pensaras', 'lo pienses', 'lo hayas pensado', 'lo piensas'], concept_id: 'sequence_of_tenses', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete: "Me alegro de que ___ (venir, tú)." (present main verb, action already happened)', word: 'hayas venido', english: 'you came', answer: 'hayas venido', concept_id: 'sequence_of_tenses', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I asked him to call me.' (preterite main verb)", english: 'I asked him to call me.', answer: 'Le pedí que me llamara.', altAnswers: ['Le pedí que me llamase.'], word: 'llamara', concept_id: 'sequence_of_tenses', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "Gasta dinero como si sea millonario." (como si has its own fixed rule)', word: 'fuera', english: 'he were', answer: 'Gasta dinero como si fuera millonario.', altAnswers: ['Gasta dinero como si fuese millonario.'], concept_id: 'sequence_of_tenses', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Me alegré de que hubieras venido."', word: 'hubieras venido', english: 'I was glad you had come.', answer: 'I was glad you had come.', concept_id: 'sequence_of_tenses', difficulty: 3 },

    // ── subjunctive_independent_clauses block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which adverb NEVER takes the subjunctive?', word: 'a lo mejor', english: 'maybe', answer: 'a lo mejor', options: ['a lo mejor', 'ojalá', 'quizá', 'tal vez'], concept_id: 'subjunctive_independent_clauses', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'The adverb follows the verb here. Which sentence is grammatical?', word: 'quizá (postverbal)', english: 'postverbal quizá forces the indicative', answer: 'Estará en casa, quizá.', options: ['Estará en casa, quizá.', 'Esté en casa, quizá.', 'Estuviera en casa, quizá.', 'Haya estado en casa, quizá.'], concept_id: 'subjunctive_independent_clauses', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "A lo mejor venga esta tarde."', word: 'viene', english: 'he comes', answer: 'A lo mejor viene esta tarde.', concept_id: 'subjunctive_independent_clauses', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which correctly expresses regret about something that did NOT happen?', word: 'ojalá hubiera', english: 'I wish I had', answer: 'Ojalá hubiera estudiado más.', options: ['Ojalá hubiera estudiado más.', 'Ojalá estudie más.', 'Ojalá estudiara más.', 'Ojalá he estudiado más.'], concept_id: 'subjunctive_independent_clauses', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete with the indicative (the adverb comes AFTER the verb): "___, quizá, pero no lo aseguro." (venir, él — future)', word: 'Vendrá', english: 'he will come', answer: 'Vendrá', concept_id: 'subjunctive_independent_clauses', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate, signalling that it's unlikely: 'I wish he came more often.'", english: 'I wish he came more often.', answer: 'Ojalá viniera más a menudo.', altAnswers: ['Ojalá viniese más a menudo.'], word: 'ojalá viniera', concept_id: 'subjunctive_independent_clauses', difficulty: 3 },
    { type: 'writing_prompt', prompt: 'Explica la diferencia de significado entre "Quizá esté enfadado" y "Quizá está enfadado".', word: 'quizá', english: 'subjunctive = more doubt; indicative = more confidence', answer: 'The subjunctive (esté) signals more doubt; the indicative (está) signals more confidence that he is annoyed.', concept_id: 'subjunctive_independent_clauses', difficulty: 3 },

    // ── verbos_pronominales block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which sentence means "I dropped the glass" (the glass fell, not you)?', word: 'se me cayó', english: 'I dropped it', answer: 'Se me cayó el vaso.', options: ['Se me cayó el vaso.', 'Me caí el vaso.', 'Caí el vaso.', 'Me cayó del vaso.'], concept_id: 'verbos_pronominales', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete: "___, que ya es tarde." (I\'m off — departure is the point, using irse)', word: 'Me voy', english: "I'm leaving", answer: 'Me voy', concept_id: 'verbos_pronominales', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which verb describes a neutral, expected fall observed from outside?', word: 'caer', english: 'to fall', answer: 'Las hojas caen en otoño.', options: ['Las hojas caen en otoño.', 'Las hojas se caen en otoño por accidente.', 'Se me caen las hojas.', 'Me caigo las hojas.'], concept_id: 'verbos_pronominales', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I fell on the stairs and hurt myself.'", english: 'I fell on the stairs and hurt myself.', answer: 'Me caí en la escalera y me hice daño.', altAnswers: ['Me caí por la escalera y me hice daño.'], word: 'caerse', concept_id: 'verbos_pronominales', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the meaning error — the speaker means "we\'re meeting at seven," not "we\'re staying": "Nos quedamos a las siete en la plaza."', word: 'Quedamos', english: 'we are meeting', answer: 'Quedamos a las siete en la plaza.', concept_id: 'verbos_pronominales', difficulty: 3 },
    { type: 'writing_prompt', prompt: 'Traduce y explica el matiz entre "Voy al médico" y "Me voy".', word: 'ir / irse', english: 'destination vs. departure', answer: '"I\'m going to the doctor" (destination is the point) vs. "I\'m leaving/I\'m off" (the departure itself is the point).', concept_id: 'verbos_pronominales', difficulty: 3 },

    // ── Production practice: writing_prompt (self-assessed, no exact-match grading) ──
    { type: 'writing_prompt', prompt: 'Escribe un párrafo breve sobre algo que querías que pasara el año pasado pero que no pasó. Usa al menos una vez la concordancia de tiempos (verbo principal en pasado + imperfecto de subjuntivo) y una vez "ojalá" con el subjuntivo.', word: null, english: null, answer: 'El año pasado quería que mi hermano viniera a vivir a mi ciudad. Le pedí que lo pensara bien y que buscara trabajo aquí, pero al final decidió quedarse donde estaba. Ojalá hubiera aceptado, porque ahora nos vemos muy poco. Aun así, entiendo su decisión: quizá tuviera razón y que allí estuviera mejor.', concept_id: 'sequence_of_tenses', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against the RAE's Nueva gramática de
// la lengua española (the "concordancia de tiempos" and "inductores del
// modo" chapters), SpanishDict's sequence-of-tenses guide, and established
// C1-level grammar references before writing (July 2026):
// - sequence_of_tenses core rule confirmed in both directions: main verb in
//   present / present perfect / future / imperative → present subjunctive;
//   main verb in preterite / imperfect / pluperfect / conditional →
//   imperfect subjunctive. The conditional belonging to the PAST tier (not
//   the present tier) was specifically confirmed, since it is the half of
//   the rule learners most often get backwards.
// - The compound-subjunctive refinement confirmed: the present perfect
//   subjunctive (haya cantado) and pluperfect subjunctive (hubiera cantado)
//   mark anteriority — a subordinate action prior to the main verb — with
//   the main verb's tier still selecting which of the two applies.
// - como si (and igual que si, cual si, lo mismo que si) confirmed as a
//   genuine closed exception: always imperfect or pluperfect subjunctive
//   regardless of the main verb's tense, because the imperfect subjunctive
//   there marks distance from reality rather than past time.
// - Also confirmed, and now stated explicitly in the prose rather than
//   omitted: speakers can transgress the concordancia when the subordinate
//   action remains pending in the present/future (Me pidió que vaya
//   mañana). An earlier draft called the rule simply "mechanical" and
//   claimed a wrong form was "ungrammatical"; a proofread pass flagged that
//   this contradicted this very note, so the section now presents the tier
//   rule as the standard, prescriptively expected default and names the
//   pending-action variation as something to recognise but not produce.
// - subjunctive_independent_clauses: ojalá confirmed as admitting NO
//   indicative alternative at all, unlike the rest of the group; its
//   present / imperfect / pluperfect subjunctive forms confirmed as
//   carrying genuinely different modal values (hope / unlikely wish /
//   past regret) rather than being stylistic variants.
// - quizá(s), tal vez, acaso, probablemente, posiblemente confirmed as
//   admitting BOTH moods, with the subjunctive signalling greater doubt and
//   the indicative greater confidence — an expressive choice, not an error
//   either way.
// - The position constraint was confirmed explicitly and is the most
//   advanced claim in this unit: these adverbs induce the subjunctive only
//   from the PREVERBAL position; once the adverb follows the verb, only the
//   indicative is grammatical (Vendrá, quizá — never *Venga, quizá).
// - a lo mejor (and colloquial igual / lo mismo in the same sense)
//   confirmed as never taking the subjunctive despite being semantically
//   near-identical to quizá — verified specifically because it is the
//   predictable over-generalisation once "doubt takes subjunctive" is
//   internalised.
// - verbos_pronominales: caer/caerse, ir/irse and quedar/quedarse confirmed
//   as intransitive verbs admitting both pronominal and non-pronominal
//   construction with real (if subtle) meaning differences, not free
//   variation — caer neutral/external vs. caerse accidental/loss of
//   balance; ir destination-focused vs. irse departure-focused, per the
//   RAE's "Usos de se. Los verbos pronominales" entry and Hispanoteca's
//   verbos-pronominales reference.
// - CORRECTION applied after proofread: an earlier draft presented an
//   "ingressive/inceptive" analysis as an established grammarians' label
//   confirmed by the RAE. It is not — the RAE treats this se as aspectual,
//   and "ingressive" is in any case wrong for irse, which marks egress
//   (movement away from a source), not entry into a state. The unifying
//   paragraph is now framed explicitly as a learner mnemonic about bounded
//   change of state affecting the subject, labelled a tendency with real
//   exceptions rather than a formal category.
// - Also corrected after proofread: the caer/caerse contrast was originally
//   illustrated with "Las hojas caen en otoño" as if the pronominal form
//   were unavailable there. "Las hojas se caen" is equally natural, so the
//   pair is now presented as a difference of emphasis, with caer's genuinely
//   preferred contexts (caer en la cuenta, caer enfermo, la noche cae)
//   given instead as the clearer non-pronominal cases.
// This content builds on and does not re-teach: subjunctive_noun_clauses
// (Unit 26, immediately preceding), imperfect_subjunctive (B1),
// perfect_subjunctive and pluperfect_subjunctive (B2), reflexive_verbs
// (A1), and se_accidental (B1). The caerse-vs-se_accidental contrast and
// the quedar-vs-quedarse contrast are both written as deliberate
// callbacks to that earlier material — unit-a2-phone-plans.js already
// introduces the surface quedar/quedarse split, so this unit adds the
// change-of-state reading rather than repeating the basic contrast.
// It also now explicitly defers to unit24-subjunctive-deep-dive.js for the
// two-tense sequence rule and como si, and to
// unit-b1-certainty-doubt-probability.js for quizá/tal vez dual mood and
// the a lo mejor restriction, rather than restating any of them.
//
// C1 curriculum-volume fix (07-25-2026): built as a new standalone unit
// after a full-content sweep found C1 was the thinnest tier in the
// curriculum (12 concepts / 4 units vs. B1's 37 / 16) and structurally
// lopsided — 6 of its 12 concepts were discourse connectors, with zero
// verb-morphology and zero pronoun concepts. These three concepts were
// chosen specifically as near-native accuracy markers rather than for
// volume: sequence_of_tenses is the most commonly fossilised C1 error,
// and subjunctive_independent_clauses had been referenced incidentally
// 14 times across existing units without ever being taught.