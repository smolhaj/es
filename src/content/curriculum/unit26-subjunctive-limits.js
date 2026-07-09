// Unit 26 — Subjunctive at Its Limits (C1)
// Covers: subjunctive_noun_clauses, subjunctive_concessive_intensifiers
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This is the first
// unit to extend the "Learn" path into C1 — the explanations stay as clear
// and plain as Unit 1's, even though the grammar itself is advanced. Every
// Spanish claim below was verified against SpanishDict, established C1
// grammar references, and Bowdoin/Lawless Spanish-style pedagogical sources
// before writing — see the audit note at the bottom of this file.
//
// Revision note: this unit originally taught subjunctive_temporal (cuando/en
// cuanto/hasta que + subjunctive for pending future time) as its third
// section, but a later full-site audit found that concept duplicated Unit
// 24's subjunctive_adverbial (same "cuando + subjunctive" material, two
// concept ids). subjunctive_temporal was removed from the concept graph
// entirely and this section was replaced with subjunctive_concessive_
// intensifiers (por más/mucho que) — new, non-duplicate C1 material. See
// ES.md's C2-curriculum section for the full account.

export default {
  sections: [
    {
      heading: 'Doubt, Denial, and Certainty: Subjunctive in Noun Clauses',
      paragraphs: [
        "You already know the subjunctive from earlier units as the mood of wish, emotion, and influence — quiero que vengas, me alegra que estés aquí. At C1, the focus shifts to a subtler and, frankly, more useful skill: using the subjunctive to signal how certain you are about something. A \"noun clause\" here just means a que-clause that functions as the object of the main verb — the thing you doubt, deny, or believe. Whether that clause takes the subjunctive or the indicative depends entirely on whether the main verb frames it as fact or as uncertain.",
        'Doubt, denial, and possibility all pull the following clause into the subjunctive: Dudo que ella llegue a tiempo ("I doubt she\'ll arrive on time"), Es posible que cambien de opinión ("It\'s possible they\'ll change their mind"), Niego que yo haya dicho eso ("I deny that I said that"). None of these treats its content as settled fact — dudar, negar, and es posible que all frame what follows as unconfirmed, so Spanish marks that grammatically, not just with vocabulary the way English does.',
        'Now the part that actually trips up C1 learners: creer and dudar flip their behavior depending on whether they\'re negated. Creo que tiene razón ("I think she\'s right") is indicative, because in the affirmative, creer states your belief as something you hold to be true. But No creo que tenga razón ("I don\'t think she\'s right") switches to subjunctive, because negating your belief turns the claim into something uncertain. Dudar works the mirror-opposite way: Dudo que sea verdad (subjunctive — you\'re doubting) but No dudo que es verdad (indicative — "I don\'t doubt it\'s true" states certainty, since you\'ve negated the doubt itself). The same logic covers certainty expressions: Es cierto que ha trabajado mucho (indicative — stated as fact) versus No es cierto que haya trabajado tanto (subjunctive — now you\'re disputing it).',
        "The one-sentence version to keep in your head: it's not the word que that triggers subjunctive, and it's not even a fixed list of verbs — it's whether the main clause, as a whole, presents what follows as certain or as doubtful/possible/denied. Read the whole sentence's logic, not just the trigger word.",
      ],
      examples: [
        { es: 'Dudo que ella llegue a tiempo.', en: "I doubt she'll arrive on time." },
        { es: 'No dudo que ella llega a tiempo.', en: "I don't doubt she'll arrive on time. (stated as certain)" },
        { es: 'Es posible que cambien de opinión.', en: "It's possible they'll change their mind." },
        { es: 'Niego que yo haya dicho eso.', en: 'I deny that I said that.' },
        { es: 'Creo que tiene razón. — No creo que tenga razón.', en: "I think she's right. — I don't think she's right." },
        { es: 'Es cierto que el proyecto ha tenido éxito.', en: 'It is true that the project has been successful.' },
      ],
      commonMistakes: [
        'Treating "que" itself as the trigger and reaching for subjunctive automatically — the deciding factor is the main clause\'s certainty, not the presence of que. Es cierto que, sé que, and es verdad que all keep the indicative because they assert fact.',
        'Forgetting that negation flips the mood for creer and dudar: creo/no dudo → indicative (certainty), but no creo/dudo → subjunctive (doubt). Many learners memorize "dudar = subjunctive" and miss that negating dudar reverses it.',
        'Assuming negar can ever take the indicative — it can\'t. Even if the denied thing is objectively true, negar que always takes subjunctive, because the grammar reflects the speaker\'s stance (denial), not the outside facts.',
      ],
    },
    {
      heading: "No Matter How Much: Concessive Intensifiers with Por más/mucho que",
      paragraphs: [
        'Por más que and por mucho que both mean "no matter how much" or "however much" — they intensify a concession the way aunque does, but with an added sense of effort, quantity, or degree. Por más que insisto, no me escucha ("No matter how much I insist, he doesn\'t listen to me") and Por mucho que le guste, no se lo puede permitir ("However much he likes it, he can\'t afford it") both frame the following clause as true or ongoing despite itself changing nothing about the outcome.',
        "Here's the part that actually matters for your mood choice: these two work by the exact same logic as aunque, which you already know from an earlier unit. Subjunctive is the standard, far more common choice — Por más que estudie, no voy a aprobar sin practicar treats the studying as a general point being emphasized, not a specific confirmed fact being reported. Indicative is also correct, and RAE explicitly confirms it, when you're stating a real, already-completed fact rather than emphasizing the idea in the abstract: Por mucho que se esforzó, no pasó el examen (\"However much he tried, he didn't pass the exam\") reports a specific, finished event as plain fact.",
        "One genuine regional pattern worth knowing, not just a stylistic footnote: RAE notes the indicative option shows up more frequently in American Spanish than in European Spanish, where the subjunctive dominates even more heavily. Either way, if you're not sure which to reach for, the subjunctive is the safer default — it's correct far more often than not, and it's never wrong to emphasize a point instead of just reporting it as settled fact.",
        'A small structural note: que can have a noun or adjective inserted right before it without changing anything about the mood rule — por mucho dinero que tenga ("however much money he has"), por más veces que lo repitas ("no matter how many times you repeat it"). And for something further in the past, the subjunctive slot becomes the imperfect subjunctive, not the present: Por más que lo intentáramos, no conseguimos abrir la puerta ("No matter how hard we tried, we couldn\'t get the door open").',
      ],
      examples: [
        { es: 'Por más que estudie, no voy a aprobar sin practicar.', en: "No matter how much I study, I won't pass without practicing. (subjunctive — the standard choice)" },
        { es: 'Por mucho que se esforzó, no pasó el examen.', en: "However much he tried, he didn't pass the exam. (indicative — a specific, completed fact)" },
        { es: 'Por mucho que le insistas, no va a cambiar de opinión.', en: "However much you insist to him, he's not going to change his mind." },
        { es: 'Por mucho dinero que tenga, nunca está satisfecho.', en: "However much money he has, he's never satisfied." },
        { es: 'Por más que lo intentáramos, no conseguimos abrir la puerta.', en: "No matter how hard we tried, we couldn't get the door open. (past — imperfect subjunctive)" },
      ],
      commonMistakes: [
        'Assuming por más/mucho que is "always subjunctive, no exceptions" — it isn\'t. It patterns exactly like aunque: subjunctive is the standard/default, but indicative is genuinely correct (per RAE) for a plain, confirmed fact, and it\'s more common in that role in American Spanish.',
        'Forgetting the imperfect subjunctive for past reference — por más que lo intentamos (indicative, treating it as settled fact) is different in nuance from por más que lo intentáramos (subjunctive, emphasizing the effort itself); both exist, but don\'t default to a present-tense subjunctive form for a past event.',
        'Confusing this construction\'s vocabulary with aunque\'s — they\'re interchangeable in the mood logic but not in wording; you can\'t mix them into "aunque más que" or "por más aunque."',
      ],
    },
  ],

  vocab: [
    { es: 'dudar', en: 'to doubt', example: 'Dudo que lleguemos a tiempo.', exampleEn: "I doubt we'll arrive on time." },
    { es: 'negar', en: 'to deny', example: 'Negó que hubiera cometido un error.', exampleEn: 'He denied having made a mistake.' },
    { es: 'sospechar', en: 'to suspect', example: 'Sospecho que no nos ha dicho toda la verdad.', exampleEn: "I suspect he hasn't told us the whole truth." },
    { es: 'el ascenso', en: 'the promotion', example: 'Le dieron el ascenso que tanto esperaba.', exampleEn: "They gave her the promotion she'd been waiting for." },
    { es: 'el rumor', en: 'the rumor', example: 'No hagas caso a ese rumor.', exampleEn: "Don't pay attention to that rumor." },
    { es: 'imprescindible', en: 'essential, indispensable', example: 'Es imprescindible que llegues puntual.', exampleEn: "It's essential that you arrive on time." },
    { es: 'esforzarse', en: 'to make an effort, to push oneself', example: 'Por mucho que te esfuerces, el cuerpo necesita descanso también.', exampleEn: 'However much you push yourself, the body needs rest too.' },
    { es: 'la constancia', en: 'consistency, perseverance', example: 'Nada sustituye la constancia cuando se entrena para una maratón.', exampleEn: 'Nothing replaces consistency when training for a marathon.' },
    { es: 'vencer', en: 'to overcome, to defeat', example: 'El calor lo venció antes de terminar la carrera.', exampleEn: 'The heat beat him before he finished the race.' },
  ],

  practice: [
    // ── subjunctive_noun_clauses block (blocked practice: drilled alone before mixing with other concepts) ──
    { type: 'multiple_choice', prompt: "Complete: 'Dudo que ella ___ razón.'", word: 'tenga', english: 'has (subjunctive)', answer: 'tenga', options: ['tiene', 'tenga', 'tendrá', 'tuviera'], concept_id: 'subjunctive_noun_clauses', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I don't think it's true.'", english: "I don't think it's true.", answer: 'No creo que sea verdad.', word: 'no creer que', concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Es posible que lo ___ (decidir) esta semana.'",
      word: 'decidan',
      english: 'they decide (subjunctive)',
      answer: 'decidan',
      concept_id: 'subjunctive_noun_clauses',
      difficulty: 2,
      passage: 'En la oficina corre el rumor de que van a ascender a Sara, pero yo dudo que sea cierto todavía — nadie se lo ha confirmado. Es posible que lo decidan esta semana, aunque también es posible que el proyecto se retrase otra vez. Sara niega que sepa nada, y la verdad es que le creo: no es de las que ocultan estas cosas. Eso sí, es cierto que ha trabajado muchísimo este último año, así que si el ascenso llega, nadie diría que no se lo merece.',
      passageEn: "There's a rumor going around the office that they're going to promote Sara, but I doubt it's true yet — nobody has confirmed it to her. It's possible they'll decide this week, though it's also possible the project gets delayed again. Sara denies knowing anything, and honestly, I believe her: she's not the type to hide these things. That said, it is true that she's worked incredibly hard this past year, so if the promotion comes, no one would say she doesn't deserve it.",
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Sara niega que ___ (saber) nada.'",
      word: 'sepa',
      english: 'she know (subjunctive)',
      answer: 'sepa',
      concept_id: 'subjunctive_noun_clauses',
      difficulty: 2,
      passage: 'En la oficina corre el rumor de que van a ascender a Sara, pero yo dudo que sea cierto todavía — nadie se lo ha confirmado. Es posible que lo decidan esta semana, aunque también es posible que el proyecto se retrase otra vez. Sara niega que sepa nada, y la verdad es que le creo: no es de las que ocultan estas cosas. Eso sí, es cierto que ha trabajado muchísimo este último año, así que si el ascenso llega, nadie diría que no se lo merece.',
      passageEn: "There's a rumor going around the office that they're going to promote Sara, but I doubt it's true yet — nobody has confirmed it to her. It's possible they'll decide this week, though it's also possible the project gets delayed again. Sara denies knowing anything, and honestly, I believe her: she's not the type to hide these things. That said, it is true that she's worked incredibly hard this past year, so if the promotion comes, no one would say she doesn't deserve it.",
    },
    {
      type: 'multiple_choice',
      prompt: '¿Qué afirma el narrador del texto con certeza, en indicativo?',
      word: 'es cierto que',
      english: 'it is true that (indicative)',
      answer: 'Que ha trabajado muchísimo este año',
      options: ['Que van a ascender a Sara', 'Que Sara oculta cosas', 'Que ha trabajado muchísimo este año', 'Que el proyecto se retrasará'],
      concept_id: 'subjunctive_noun_clauses',
      difficulty: 2,
      passage: 'En la oficina corre el rumor de que van a ascender a Sara, pero yo dudo que sea cierto todavía — nadie se lo ha confirmado. Es posible que lo decidan esta semana, aunque también es posible que el proyecto se retrase otra vez. Sara niega que sepa nada, y la verdad es que le creo: no es de las que ocultan estas cosas. Eso sí, es cierto que ha trabajado muchísimo este último año, así que si el ascenso llega, nadie diría que no se lo merece.',
      passageEn: "There's a rumor going around the office that they're going to promote Sara, but I doubt it's true yet — nobody has confirmed it to her. It's possible they'll decide this week, though it's also possible the project gets delayed again. Sara denies knowing anything, and honestly, I believe her: she's not the type to hide these things. That said, it is true that she's worked incredibly hard this past year, so if the promotion comes, no one would say she doesn't deserve it.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Es cierto que ha trabajado muchísimo este último año.'",
      word: 'es cierto que',
      english: 'it is true that',
      answer: "It is true that she's worked incredibly hard this past year.",
      concept_id: 'subjunctive_noun_clauses',
      difficulty: 3,
      passage: 'En la oficina corre el rumor de que van a ascender a Sara, pero yo dudo que sea cierto todavía — nadie se lo ha confirmado. Es posible que lo decidan esta semana, aunque también es posible que el proyecto se retrase otra vez. Sara niega que sepa nada, y la verdad es que le creo: no es de las que ocultan estas cosas. Eso sí, es cierto que ha trabajado muchísimo este último año, así que si el ascenso llega, nadie diría que no se lo merece.',
      passageEn: "There's a rumor going around the office that they're going to promote Sara, but I doubt it's true yet — nobody has confirmed it to her. It's possible they'll decide this week, though it's also possible the project gets delayed again. Sara denies knowing anything, and honestly, I believe her: she's not the type to hide these things. That said, it is true that she's worked incredibly hard this past year, so if the promotion comes, no one would say she doesn't deserve it.",
    },

    // ── subjunctive_concessive_intensifiers block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete: 'Por más que ___ (correr) cada mañana, no logra bajar de las cuatro horas.' (emphasizing the effort, not reporting a single event)", word: 'corra', english: 'runs (subjunctive — standard choice)', answer: 'corra', options: ['corre', 'corra', 'correrá', 'corría'], concept_id: 'subjunctive_concessive_intensifiers', difficulty: 2 },
    { type: 'translation_to_english', prompt: "¿Qué significa: 'Por mucho que le insistas, no va a cambiar de opinión'?", word: 'por mucho que', english: 'however much', answer: "However much you insist to him, he's not going to change his mind.", concept_id: 'subjunctive_concessive_intensifiers', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Por más que ___ (correr) cada mañana, todavía no logra bajar de las cuatro horas.'",
      word: 'corra',
      english: 'he runs (subjunctive)',
      answer: 'corra',
      concept_id: 'subjunctive_concessive_intensifiers',
      difficulty: 2,
      passage: 'Marcos lleva tres meses entrenando para la maratón. Por más que corra cada mañana, todavía no logra bajar de las cuatro horas. Su entrenadora le dice: "Por mucho que te esfuerces, el cuerpo necesita descanso también." La semana pasada, por más que lo intentó, no consiguió terminar los últimos cinco kilómetros — el calor lo venció. Aun así, por muy cansado que esté al final de cada sesión, Marcos se repite: "Por mucho dinero que gastara en zapatillas nuevas, nada sustituye la constancia."',
      passageEn: '"Marcos has been training for the marathon for three months. No matter how much he runs every morning, he still can\'t get under four hours. His coach tells him: \'However much you push yourself, the body needs rest too.\' Last week, no matter how hard he tried, he couldn\'t finish the last five kilometers — the heat beat him. Even so, however tired he is at the end of each session, Marcos repeats to himself: \'However much money I spent on new shoes, nothing replaces consistency.\'"',
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'La semana pasada, por más que lo ___ (intentar), no consiguió terminar los últimos cinco kilómetros.'",
      word: 'intentó',
      english: 'he tried (indicative — a specific, completed fact)',
      answer: 'intentó',
      concept_id: 'subjunctive_concessive_intensifiers',
      difficulty: 3,
      passage: 'Marcos lleva tres meses entrenando para la maratón. Por más que corra cada mañana, todavía no logra bajar de las cuatro horas. Su entrenadora le dice: "Por mucho que te esfuerces, el cuerpo necesita descanso también." La semana pasada, por más que lo intentó, no consiguió terminar los últimos cinco kilómetros — el calor lo venció. Aun así, por muy cansado que esté al final de cada sesión, Marcos se repite: "Por mucho dinero que gastara en zapatillas nuevas, nada sustituye la constancia."',
      passageEn: '"Marcos has been training for the marathon for three months. No matter how much he runs every morning, he still can\'t get under four hours. His coach tells him: \'However much you push yourself, the body needs rest too.\' Last week, no matter how hard he tried, he couldn\'t finish the last five kilometers — the heat beat him. Even so, however tired he is at the end of each session, Marcos repeats to himself: \'However much money I spent on new shoes, nothing replaces consistency.\'"',
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto: 'por más que lo intentó, no consiguió terminar...' ¿Por qué se usa el indicativo (intentó) aquí y no el subjuntivo?",
      word: 'por más que intentó',
      english: 'no matter how much he tried (indicative)',
      answer: 'Porque describe un hecho concreto y ya terminado la semana pasada, no una idea que se está enfatizando en general',
      options: [
        'Porque describe un hecho concreto y ya terminado la semana pasada, no una idea que se está enfatizando en general',
        'Porque "por más que" nunca lleva subjuntivo',
        'Porque el sujeto de la oración es "Marcos"',
        'Porque el subjuntivo no existe en el pretérito',
      ],
      concept_id: 'subjunctive_concessive_intensifiers',
      difficulty: 3,
      passage: 'Marcos lleva tres meses entrenando para la maratón. Por más que corra cada mañana, todavía no logra bajar de las cuatro horas. Su entrenadora le dice: "Por mucho que te esfuerces, el cuerpo necesita descanso también." La semana pasada, por más que lo intentó, no consiguió terminar los últimos cinco kilómetros — el calor lo venció. Aun así, por muy cansado que esté al final de cada sesión, Marcos se repite: "Por mucho dinero que gastara en zapatillas nuevas, nada sustituye la constancia."',
      passageEn: '"Marcos has been training for the marathon for three months. No matter how much he runs every morning, he still can\'t get under four hours. His coach tells him: \'However much you push yourself, the body needs rest too.\' Last week, no matter how hard he tried, he couldn\'t finish the last five kilometers — the heat beat him. Even so, however tired he is at the end of each session, Marcos repeats to himself: \'However much money I spent on new shoes, nothing replaces consistency.\'"',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Por mucho dinero que gastara en zapatillas nuevas, nada sustituye la constancia.'",
      word: 'por mucho dinero que',
      english: 'however much money',
      answer: 'However much money I spent on new shoes, nothing replaces consistency.',
      concept_id: 'subjunctive_concessive_intensifiers',
      difficulty: 3,
      passage: 'Marcos lleva tres meses entrenando para la maratón. Por más que corra cada mañana, todavía no logra bajar de las cuatro horas. Su entrenadora le dice: "Por mucho que te esfuerces, el cuerpo necesita descanso también." La semana pasada, por más que lo intentó, no consiguió terminar los últimos cinco kilómetros — el calor lo venció. Aun así, por muy cansado que esté al final de cada sesión, Marcos se repite: "Por mucho dinero que gastara en zapatillas nuevas, nada sustituye la constancia."',
      passageEn: '"Marcos has been training for the marathon for three months. No matter how much he runs every morning, he still can\'t get under four hours. His coach tells him: \'However much you push yourself, the body needs rest too.\' Last week, no matter how hard he tried, he couldn\'t finish the last five kilometers — the heat beat him. Even so, however tired he is at the end of each session, Marcos repeats to himself: \'However much money I spent on new shoes, nothing replaces consistency.\'"',
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - subjunctive_noun_clauses: dudar que / negar que / es posible que trigger
//   subjunctive; creer/dudar flip mood under negation (creo que + indicative
//   vs. no creo que + subjunctive; dudo que + subjunctive vs. no dudo que +
//   indicative, since negating doubt states certainty); negar que always
//   takes subjunctive regardless of the denied claim's actual truth —
//   checked against SpanishDict's "Subjunctive vs. Indicative in Spanish"
//   and "Expressing Doubts and Denial with the Subjunctive" guides, and the
//   Bowdoin (Enrique Yepes) grammar book's noun-clause chapter.
// - subjunctive_concessive_intensifiers: por más/mucho que follow the SAME
//   mood rule as aunque (not an unconditional "always subjunctive" rule, an
//   earlier draft of this concept overstated that) — subjunctive is the
//   standard, far more common default, but RAE's Nueva gramática explicitly
//   confirms indicative is also correct for a plain, confirmed fact (por
//   mucho que se esforzó, no pasó el examen) and is more frequent in that
//   role in American Spanish than in European Spanish; past reference uses
//   the imperfect subjunctive, not the present — checked against RAE's
//   "Elección del modo con las conjunciones subordinantes" and "El modo:
//   ¿indicativo o subjuntivo?" style-guide pages directly, not just
//   secondary pedagogical sources.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// subjunctive_noun_clauses and subjunctive_concessive_intensifiers in
// src/content/grammar.js (same facts, fuller C1-paced walkthrough with
// original passages) and does not contradict them.
//
// Curriculum-pacing-lag fix (07-09-2026): subjunctive_adjective_clauses
// and pluperfect_subjunctive were moved out of this unit — the CEFR audit
// retagged both to B2, and they now live in the new
// subjunctive-counterfactuals-concession unit alongside condicional_probabilidad
// and aunque_concessive (all B2, all sharing an unreal/hypothetical-
// reasoning theme). Their prose and practice moved with them verbatim;
// this unit's remaining two concepts (subjunctive_noun_clauses,
// subjunctive_concessive_intensifiers) are both still correctly C1.
