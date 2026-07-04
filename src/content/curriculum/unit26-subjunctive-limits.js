// Unit 26 — Subjunctive at Its Limits (C1)
// Covers: subjunctive_noun_clauses, subjunctive_adjective_clauses,
// subjunctive_temporal, pluperfect_subjunctive
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This is the first
// unit to extend the "Learn" path into C1 — the explanations stay as clear
// and plain as Unit 1's, even though the grammar itself is advanced. Every
// Spanish claim below was verified against SpanishDict, established C1
// grammar references, and Bowdoin/Lawless Spanish-style pedagogical sources
// before writing — see the audit note at the bottom of this file.

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
      heading: 'Real or Hypothetical? Subjunctive in Adjective Clauses',
      paragraphs: [
        'An "adjective clause" (also called a relative clause) is a que-clause that describes a noun — the way an adjective would, just longer: un piso que tenga terraza ("a flat that has a terrace") describes piso the same way un piso grande does. The question this unit adds at C1 is: does the noun being described actually, definitely exist for the speaker, or is it still unknown, hypothetical, or possibly nonexistent? That answer decides the mood of the clause.',
        'Compare these two side by side, because the contrast is the whole lesson: Busco un piso que tenga terraza — "I\'m looking for a flat that has a terrace," any flat, I haven\'t found it yet, it may not even exist in the size and price I need. Now: Conozco un piso que tiene terraza — "I know of a flat that has a terrace," a specific, real one I have in mind. Same verb (tener), same structure, different mood — because the first piso is still just an idea and the second is a known fact.',
        "A useful (though not perfectly airtight) signal: an indefinite article — un, una — often points toward subjunctive, because un piso means \"some flat or other,\" while el, la, or a name points toward indicative, because it identifies one specific thing. Treat this as a strong tendency to help you notice the pattern, not a rule you can apply blindly — the real test is always whether the antecedent is definite in the speaker's mind, not which article happens to appear.",
        "Negative antecedents behave predictably once you see the logic: if the thing doesn't exist at all, it obviously can't be a known, specific entity, so the subjunctive is automatic — No hay nadie que sepa la respuesta (\"There's no one who knows the answer\"), No conozco a nadie que hable ruso (\"I don't know anyone who speaks Russian\"). One more C1-level wrinkle: after a superlative (el mejor, el único, el primero…), Spanish typically still reaches for the subjunctive, because a claim like \"the best I've ever tried\" is inherently a personal, unverifiable judgment, not a checkable fact — Es el mejor restaurante que haya probado. The indicative (que he probado) is also heard and simply treats the claim as a plain statement instead.",
      ],
      examples: [
        { es: 'Busco un piso que tenga terraza.', en: "I'm looking for a flat that has a terrace. (unknown — any flat)" },
        { es: 'Conozco un piso que tiene terraza.', en: 'I know of a flat that has a terrace. (specific, real one)' },
        { es: 'No hay nadie que sepa la respuesta.', en: "There's no one who knows the answer." },
        { es: 'Necesito a alguien que hable alemán.', en: "I need someone who speaks German. (whoever that turns out to be)" },
        { es: 'Es el mejor restaurante que haya probado.', en: "It's the best restaurant I've ever tried." },
      ],
      commonMistakes: [
        'Defaulting to the indicative everywhere, the way beginners do — using the subjunctive correctly here is one of the clearest markers that separates a fluent C1 speaker from an intermediate one, so it\'s worth the deliberate effort.',
        "Forgetting that a negative antecedent (nadie, nada, ningún) forces subjunctive even without an obvious \"unknown\" flavor to the sentence.",
        "Relying on the article alone (un/una = subjunctive, el/la = indicative) without checking whether the antecedent is really definite — the article is a helpful hint, not the actual grammatical rule.",
      ],
    },
    {
      heading: "Not Yet Real: Subjunctive in Temporal Clauses",
      paragraphs: [
        'Time conjunctions — cuando (when), en cuanto and tan pronto como (as soon as), hasta que (until), después de que (after), mientras (while) — describe when something happens relative to something else. The mood of the verb that follows them depends on one question: has this moment already happened or become a settled habit, or is it still pending, out in the future?',
        "If the moment is still ahead of you — hasn't happened yet — Spanish uses the subjunctive: Cuando llegues, llámame (\"When you arrive, call me\" — you haven't arrived yet), En cuanto pueda, te escribo (\"As soon as I can, I'll write to you\"), Hasta que termines, no salgas (\"Until you finish, don't go out\"). If instead the clause describes something habitual or already completed — a routine, a repeated past action, a fact already true — Spanish uses the indicative: Cuando llueve, me quedo en casa (\"When it rains, I stay home\" — every time, a general pattern) or Cuando llegaba, siempre llamaba (\"When he arrived, he always called\" — a repeated past habit, not a pending event).",
        "Look at how close these two get in English and how firmly Spanish keeps them apart: Cuando venga, hablaremos (future, hasn't happened — subjunctive) versus Cuando viene, hablamos (habitual, happens every time — indicative). English collapses both into \"when he comes,\" but Spanish insists on marking whether that arrival is still hypothetical or already an established pattern.",
        'One conjunction breaks the "not yet happened" logic and just always takes the subjunctive, regardless of tense or context: antes de que ("before"). Llámame antes de que salgas is subjunctive even in a context that otherwise reads as habitual, because the moment described by antes de que is by definition something that hasn\'t occurred relative to the main clause yet. Worth knowing as you read more advanced Spanish: en cuanto is the more neutral, all-purpose choice for "as soon as" in both speech and writing, while tan pronto como leans more formal and shows up more in writing than in casual conversation — the subjunctive/indicative rule is identical for both, only the register differs.',
      ],
      examples: [
        { es: 'Cuando llegues, llámame.', en: "When you arrive, call me. (hasn't happened yet)" },
        { es: 'Cuando llegaba, siempre llamaba.', en: 'When he arrived, he always called. (past habit)' },
        { es: 'En cuanto pueda, te escribo.', en: "As soon as I can, I'll write to you." },
        { es: 'Hasta que termines, no salgas.', en: "Until you finish, don't go out." },
        { es: 'Llámame antes de que salgas.', en: 'Call me before you leave. (antes de que: always subjunctive)' },
        { es: 'Después de que hayan comido, saldremos.', en: "After they've eaten, we'll leave." },
      ],
      commonMistakes: [
        "Applying the future/habitual test to antes de que — it doesn't apply there. Antes de que is always subjunctive, full stop, even when the surrounding sentence otherwise describes a routine.",
        'Using subjunctive after cuando for a plain habitual statement ("cuando llueve, me quedo en casa") just because cuando "feels" like a subjunctive trigger from other contexts — habitual and past cuando clauses take the indicative.',
        "Missing that the same conjunction can go either way in the same conversation depending on meaning — cuando isn't inherently subjunctive or indicative; it depends entirely on whether the event is still pending.",
      ],
    },
    {
      heading: 'Regret and the Unreal Past: The Pluperfect Subjunctive',
      paragraphs: [
        'The pluperfect subjunctive is formed with the imperfect subjunctive of haber — hubiera or hubiese — plus a past participle: hubiera hablado, hubiese comido, hubieran salido. Both forms are fully correct and interchangeable in meaning; hubiera is the more common choice in everyday speech (especially across Latin America), while hubiese carries a slightly more formal or literary flavor. You\'ll meet both while reading, so it\'s worth recognizing each even if you settle on producing just one.',
        "Its first major job is the unreal, counterfactual past — talking about a past condition that didn't actually happen, and what would have followed if it had. The standard pattern is si + pluperfect subjunctive, ...conditional perfect: Si hubiera estudiado más, habría aprobado el examen (\"If I had studied more, I would have passed the exam\") — in real life, the studying didn't happen and the passing didn't happen either. This is the past-tense sibling of the si + imperfect subjunctive, conditional pattern you may already know for present hypotheticals (si tuviera dinero, viajaría) — same logic, one tense further back.",
        "Its second job is expressing a wish about something in the past that can no longer be changed, triggered by ojalá: Ojalá hubieras venido a la fiesta (\"I wish you had come to the party\" — you didn't, and now it's too late). This is a different tense from the ojalá + present subjunctive you use for a wish that could still come true (ojalá venga — \"I hope she comes,\" still possible) — reaching for the wrong one is a common, meaning-changing mistake.",
        'One more pattern worth knowing at this level: in the result half of a counterfactual si-sentence, spoken Spanish quite often lets the pluperfect subjunctive substitute for the expected conditional perfect — Si lo hubiera sabido, no lo hubiera hecho works as an informal, equally understood alternative to no lo habría hecho. Either is correct; the habría version is the more neutral, textbook-safe choice if you\'re not sure which register you\'re in.',
      ],
      examples: [
        { es: 'Si hubiera estudiado más, habría aprobado el examen.', en: 'If I had studied more, I would have passed the exam.' },
        { es: 'Ojalá hubieras venido a la fiesta.', en: 'I wish you had come to the party.' },
        { es: 'No creía que hubiera terminado tan rápido.', en: "I didn't believe he had finished so fast." },
        { es: 'Me habría gustado que me lo hubieras dicho antes.', en: 'I would have liked you to have told me sooner.' },
        { es: 'Si lo hubiera sabido, no lo hubiera hecho.', en: "If I had known, I wouldn't have done it. (informal alternative to no lo habría hecho)" },
      ],
      commonMistakes: [
        'Confusing the pluperfect subjunctive (hubiera/hubiese + participle, for the past) with the plain imperfect subjunctive (fuera, tuviera, for present/future hypotheticals) — si tuviera dinero is "if I had money [now]," not "if I had had money."',
        'Using ojalá + present subjunctive for a regret that\'s already over — ojalá venga only works for something still possible; a past, closed-off wish needs ojalá + pluperfect subjunctive (ojalá hubiera venido).',
        "Pairing the pluperfect subjunctive's si-clause with a simple past tense instead of the conditional perfect in the result clause — the standard pattern needs habría + participle (or, informally, a second hubiera + participle) on the result side, not the preterite or imperfect.",
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
    { es: 'el piso', en: 'the flat, the apartment', example: 'Alquilamos un piso en el centro.', exampleEn: 'We rented a flat downtown.' },
    { es: 'el casero / la casera', en: 'the landlord / landlady', example: 'El casero subió el alquiler otra vez.', exampleEn: 'The landlord raised the rent again.' },
    { es: 'el alquiler', en: 'the rent', example: 'El alquiler sube cada año en esta ciudad.', exampleEn: 'The rent goes up every year in this city.' },
    { es: 'la entrevista', en: 'the interview', example: 'Tengo una entrevista de trabajo mañana.', exampleEn: 'I have a job interview tomorrow.' },
    { es: 'el currículum', en: 'the résumé, the CV', example: 'Actualicé mi currículum antes de enviarlo.', exampleEn: 'I updated my résumé before sending it.' },
    { es: 'arrepentirse', en: 'to regret', example: 'Se arrepiente de no haber aceptado la oferta.', exampleEn: 'He regrets not having accepted the offer.' },
    { es: 'el plazo', en: 'the deadline', example: 'El plazo para entregar la solicitud termina mañana.', exampleEn: 'The deadline to submit the application ends tomorrow.' },
    { es: 'exigir', en: 'to demand, to require', example: 'La empresa exige que los candidatos hablen dos idiomas.', exampleEn: 'The company requires candidates to speak two languages.' },
    { es: 'previsto / prevista', en: 'planned, expected, scheduled', example: 'El vuelo tiene previsto salir a las ocho.', exampleEn: 'The flight is scheduled to leave at eight.' },
    { es: 'el presentimiento', en: 'the hunch, the premonition', example: 'Tengo el presentimiento de que algo va a cambiar.', exampleEn: 'I have a hunch that something is going to change.' },
    { es: 'replantearse', en: 'to reconsider, to rethink', example: 'Después del rechazo, decidió replantearse sus planes.', exampleEn: 'After the rejection, she decided to rethink her plans.' },
    { es: 'el malentendido', en: 'the misunderstanding', example: 'Todo fue por un malentendido, no por mala intención.', exampleEn: 'It was all because of a misunderstanding, not bad intent.' },
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

    // ── subjunctive_adjective_clauses block (kept separate from noun clauses; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete: 'Busco un empleado que ___ (hablar) tres idiomas.' (an ideal candidate, not yet found)", word: 'hable', english: 'speaks (subjunctive)', answer: 'hable', options: ['habla', 'hable', 'hablará', 'hablaría'], concept_id: 'subjunctive_adjective_clauses', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'There's no one who knows the answer.'", english: "There's no one who knows the answer.", answer: 'No hay nadie que sepa la respuesta.', word: 'no hay nadie que', concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Carlos: 'Necesito algo que ___ (admitir) a mi perro.'",
      word: 'admita',
      english: 'admits, accepts (subjunctive)',
      answer: 'admita',
      concept_id: 'subjunctive_adjective_clauses',
      difficulty: 2,
      passage: 'Ana: ¿Ya encontraste piso?\nCarlos: Todavía no. Busco uno que tenga dos habitaciones y que esté cerca del metro.\nAna: Pues yo conozco un piso que tiene justo eso, en el barrio de mi prima.\nCarlos: ¿En serio? ¿Y sabes si el casero acepta mascotas?\nAna: No estoy segura, pero conozco a alguien que vive allí y podría preguntarle.\nCarlos: Perfecto. Necesito algo que admita a mi perro, si no, no me sirve.',
      passageEn: 'Ana: Have you found a flat yet?\nCarlos: Not yet. I\'m looking for one that has two bedrooms and is near the metro.\nAna: Well, I know of a flat that has exactly that, in my cousin\'s neighborhood.\nCarlos: Really? Do you know if the landlord allows pets?\nAna: I\'m not sure, but I know someone who lives there and could ask them.\nCarlos: Perfect. I need something that will accept my dog, otherwise it\'s no good to me.',
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, Carlos dice 'Busco uno que tenga dos habitaciones.' ¿Por qué usa el subjuntivo (tenga) en vez del indicativo (tiene)?",
      word: 'busco uno que tenga',
      english: 'I am looking for one that has (subjunctive)',
      answer: 'Porque todavía no ha encontrado el piso — es una posibilidad, no algo concreto',
      options: [
        'Porque todavía no ha encontrado el piso — es una posibilidad, no algo concreto',
        'Porque "piso" es una palabra femenina',
        'Porque está hablando del pasado',
        'Porque "buscar" siempre exige el subjuntivo, sin excepción',
      ],
      concept_id: 'subjunctive_adjective_clauses',
      difficulty: 3,
      passage: 'Ana: ¿Ya encontraste piso?\nCarlos: Todavía no. Busco uno que tenga dos habitaciones y que esté cerca del metro.\nAna: Pues yo conozco un piso que tiene justo eso, en el barrio de mi prima.\nCarlos: ¿En serio? ¿Y sabes si el casero acepta mascotas?\nAna: No estoy segura, pero conozco a alguien que vive allí y podría preguntarle.\nCarlos: Perfecto. Necesito algo que admita a mi perro, si no, no me sirve.',
      passageEn: 'Ana: Have you found a flat yet?\nCarlos: Not yet. I\'m looking for one that has two bedrooms and is near the metro.\nAna: Well, I know of a flat that has exactly that, in my cousin\'s neighborhood.\nCarlos: Really? Do you know if the landlord allows pets?\nAna: I\'m not sure, but I know someone who lives there and could ask them.\nCarlos: Perfect. I need something that will accept my dog, otherwise it\'s no good to me.',
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Ana: 'Yo conozco un piso que ___ (tener) justo eso.'",
      word: 'tiene',
      english: 'has (indicative — a real, known flat)',
      answer: 'tiene',
      concept_id: 'subjunctive_adjective_clauses',
      difficulty: 2,
      passage: 'Ana: ¿Ya encontraste piso?\nCarlos: Todavía no. Busco uno que tenga dos habitaciones y que esté cerca del metro.\nAna: Pues yo conozco un piso que tiene justo eso, en el barrio de mi prima.\nCarlos: ¿En serio? ¿Y sabes si el casero acepta mascotas?\nAna: No estoy segura, pero conozco a alguien que vive allí y podría preguntarle.\nCarlos: Perfecto. Necesito algo que admita a mi perro, si no, no me sirve.',
      passageEn: 'Ana: Have you found a flat yet?\nCarlos: Not yet. I\'m looking for one that has two bedrooms and is near the metro.\nAna: Well, I know of a flat that has exactly that, in my cousin\'s neighborhood.\nCarlos: Really? Do you know if the landlord allows pets?\nAna: I\'m not sure, but I know someone who lives there and could ask them.\nCarlos: Perfect. I need something that will accept my dog, otherwise it\'s no good to me.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate Ana's line from the dialogue: 'Conozco a alguien que vive allí y podría preguntarle.'",
      word: 'conozco a alguien que vive',
      english: 'I know someone who lives (indicative)',
      answer: 'I know someone who lives there and could ask them.',
      concept_id: 'subjunctive_adjective_clauses',
      difficulty: 2,
      passage: 'Ana: ¿Ya encontraste piso?\nCarlos: Todavía no. Busco uno que tenga dos habitaciones y que esté cerca del metro.\nAna: Pues yo conozco un piso que tiene justo eso, en el barrio de mi prima.\nCarlos: ¿En serio? ¿Y sabes si el casero acepta mascotas?\nAna: No estoy segura, pero conozco a alguien que vive allí y podría preguntarle.\nCarlos: Perfecto. Necesito algo que admita a mi perro, si no, no me sirve.',
      passageEn: 'Ana: Have you found a flat yet?\nCarlos: Not yet. I\'m looking for one that has two bedrooms and is near the metro.\nAna: Well, I know of a flat that has exactly that, in my cousin\'s neighborhood.\nCarlos: Really? Do you know if the landlord allows pets?\nAna: I\'m not sure, but I know someone who lives there and could ask them.\nCarlos: Perfect. I need something that will accept my dog, otherwise it\'s no good to me.',
    },

    // ── subjunctive_temporal block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete: 'Cuando ___ (llegar) el tren, avísame.' (it hasn't arrived yet)", word: 'llegue', english: 'arrives (subjunctive)', answer: 'llegue', options: ['llega', 'llegue', 'llegará', 'llegaba'], concept_id: 'subjunctive_temporal', difficulty: 2 },
    { type: 'translation_to_english', prompt: "¿Qué significa: 'Llámame antes de que salgas'?", word: 'antes de que', english: 'before', answer: 'Call me before you leave.', concept_id: 'subjunctive_temporal', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Cuando me ___ (llamar), contestaré enseguida.'",
      word: 'llamen',
      english: 'they call (subjunctive)',
      answer: 'llamen',
      concept_id: 'subjunctive_temporal',
      difficulty: 2,
      passage: 'Marta lleva dos semanas esperando noticias sobre el puesto en la empresa de diseño. Antes de que se lo ofrecieran, tenía miedo de ilusionarse demasiado. "Cuando me llamen, contestaré enseguida", se repite cada mañana. En cuanto reciba la oferta, se lo dirá a toda su familia, pero hasta que no firme el contrato, prefiere no celebrar. De niña, cuando su padre conseguía un trabajo nuevo, la familia entera salía a cenar esa misma noche — pero esta vez Marta quiere esperar a tener algo seguro entre las manos.',
      passageEn: '"Marta has been waiting two weeks for news about the job at the design company. Before they offered it to her, she was afraid of getting her hopes up too much. \'When they call me, I\'ll answer right away,\' she tells herself every morning. As soon as she gets the offer, she\'ll tell her whole family, but until she signs the contract, she\'d rather not celebrate. As a girl, whenever her father got a new job, the whole family would go out to dinner that same night — but this time Marta wants to wait until she has something certain in her hands."',
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'En cuanto ___ (recibir) la oferta, se lo dirá a toda su familia.'",
      word: 'reciba',
      english: 'she receives (subjunctive)',
      answer: 'reciba',
      concept_id: 'subjunctive_temporal',
      difficulty: 2,
      passage: 'Marta lleva dos semanas esperando noticias sobre el puesto en la empresa de diseño. Antes de que se lo ofrecieran, tenía miedo de ilusionarse demasiado. "Cuando me llamen, contestaré enseguida", se repite cada mañana. En cuanto reciba la oferta, se lo dirá a toda su familia, pero hasta que no firme el contrato, prefiere no celebrar. De niña, cuando su padre conseguía un trabajo nuevo, la familia entera salía a cenar esa misma noche — pero esta vez Marta quiere esperar a tener algo seguro entre las manos.',
      passageEn: '"Marta has been waiting two weeks for news about the job at the design company. Before they offered it to her, she was afraid of getting her hopes up too much. \'When they call me, I\'ll answer right away,\' she tells herself every morning. As soon as she gets the offer, she\'ll tell her whole family, but until she signs the contract, she\'d rather not celebrate. As a girl, whenever her father got a new job, the whole family would go out to dinner that same night — but this time Marta wants to wait until she has something certain in her hands."',
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto: 'De niña, cuando su padre conseguía un trabajo nuevo...' ¿Por qué se usa el indicativo (conseguía) aquí y no el subjuntivo?",
      word: 'cuando conseguía',
      english: 'when he used to get (indicative)',
      answer: 'Porque describe una acción habitual y repetida en el pasado, no un evento futuro pendiente',
      options: [
        'Porque describe una acción habitual y repetida en el pasado, no un evento futuro pendiente',
        'Porque "cuando" nunca lleva subjuntivo',
        'Porque el sujeto de la oración es "su padre"',
        'Porque se refiere a algo que todavía no ha pasado',
      ],
      concept_id: 'subjunctive_temporal',
      difficulty: 3,
      passage: 'Marta lleva dos semanas esperando noticias sobre el puesto en la empresa de diseño. Antes de que se lo ofrecieran, tenía miedo de ilusionarse demasiado. "Cuando me llamen, contestaré enseguida", se repite cada mañana. En cuanto reciba la oferta, se lo dirá a toda su familia, pero hasta que no firme el contrato, prefiere no celebrar. De niña, cuando su padre conseguía un trabajo nuevo, la familia entera salía a cenar esa misma noche — pero esta vez Marta quiere esperar a tener algo seguro entre las manos.',
      passageEn: '"Marta has been waiting two weeks for news about the job at the design company. Before they offered it to her, she was afraid of getting her hopes up too much. \'When they call me, I\'ll answer right away,\' she tells herself every morning. As soon as she gets the offer, she\'ll tell her whole family, but until she signs the contract, she\'d rather not celebrate. As a girl, whenever her father got a new job, the whole family would go out to dinner that same night — but this time Marta wants to wait until she has something certain in her hands."',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Hasta que no firme el contrato, prefiere no celebrar.'",
      word: 'hasta que',
      english: 'until',
      answer: "Until she signs the contract, she'd rather not celebrate.",
      concept_id: 'subjunctive_temporal',
      difficulty: 3,
      passage: 'Marta lleva dos semanas esperando noticias sobre el puesto en la empresa de diseño. Antes de que se lo ofrecieran, tenía miedo de ilusionarse demasiado. "Cuando me llamen, contestaré enseguida", se repite cada mañana. En cuanto reciba la oferta, se lo dirá a toda su familia, pero hasta que no firme el contrato, prefiere no celebrar. De niña, cuando su padre conseguía un trabajo nuevo, la familia entera salía a cenar esa misma noche — pero esta vez Marta quiere esperar a tener algo seguro entre las manos.',
      passageEn: '"Marta has been waiting two weeks for news about the job at the design company. Before they offered it to her, she was afraid of getting her hopes up too much. \'When they call me, I\'ll answer right away,\' she tells herself every morning. As soon as she gets the offer, she\'ll tell her whole family, but until she signs the contract, she\'d rather not celebrate. As a girl, whenever her father got a new job, the whole family would go out to dinner that same night — but this time Marta wants to wait until she has something certain in her hands."',
    },

    // ── pluperfect_subjunctive block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete: 'Si ___ (saber) la verdad, no habría dicho nada.'", word: 'hubiera sabido', english: 'had known', answer: 'hubiera sabido', options: ['supiera', 'hubiera sabido', 'sabría', 'sabía'], concept_id: 'pluperfect_subjunctive', difficulty: 2 },
    { type: 'error_correction', prompt: "Fix the error: 'Ojalá vengas ayer a la fiesta.' (a wish about something already over)", word: 'ojalá hubieras venido', english: 'I wish you had come', answer: 'Ojalá hubieras venido ayer a la fiesta.', concept_id: 'pluperfect_subjunctive', difficulty: 3 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Si ___ (investigar) mejor la empresa, habría respondido con más seguridad.'",
      word: 'hubiera investigado',
      english: 'he had researched',
      answer: 'hubiera investigado',
      concept_id: 'pluperfect_subjunctive',
      difficulty: 2,
      passage: 'Diego no dejaba de pensar en la entrevista de la semana pasada. Si hubiera investigado mejor la empresa, habría respondido con más seguridad. Ojalá hubiera preparado ejemplos concretos de su experiencia, en vez de improvisar. Su amiga Lucía, que también buscaba trabajo, le dijo: "Yo, si hubiera estado en tu lugar, habría hecho preguntas sobre el equipo." Diego suspiró. No creía que hubiera arruinado sus posibilidades del todo, pero sí sentía que, si se hubiera tomado más tiempo para prepararse, el resultado habría sido distinto.',
      passageEn: 'Diego couldn\'t stop thinking about last week\'s interview. If he had researched the company better, he would have answered more confidently. He wished he had prepared concrete examples of his experience instead of improvising. His friend Lucía, who was also job-hunting, told him: "If I had been in your shoes, I would have asked about the team." Diego sighed. He didn\'t think he had ruined his chances completely, but he did feel that if he had taken more time to prepare, the outcome would have been different.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate Lucía's line from the text: 'Yo, si hubiera estado en tu lugar, habría hecho preguntas sobre el equipo.'",
      word: 'si hubiera estado',
      english: 'if I had been',
      answer: 'If I had been in your shoes, I would have asked questions about the team.',
      concept_id: 'pluperfect_subjunctive',
      difficulty: 3,
      passage: 'Diego no dejaba de pensar en la entrevista de la semana pasada. Si hubiera investigado mejor la empresa, habría respondido con más seguridad. Ojalá hubiera preparado ejemplos concretos de su experiencia, en vez de improvisar. Su amiga Lucía, que también buscaba trabajo, le dijo: "Yo, si hubiera estado en tu lugar, habría hecho preguntas sobre el equipo." Diego suspiró. No creía que hubiera arruinado sus posibilidades del todo, pero sí sentía que, si se hubiera tomado más tiempo para prepararse, el resultado habría sido distinto.',
      passageEn: 'Diego couldn\'t stop thinking about last week\'s interview. If he had researched the company better, he would have answered more confidently. He wished he had prepared concrete examples of his experience instead of improvising. His friend Lucía, who was also job-hunting, told him: "If I had been in your shoes, I would have asked about the team." Diego sighed. He didn\'t think he had ruined his chances completely, but he did feel that if he had taken more time to prepare, the outcome would have been different.',
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Diego no creía que ___ (arruinar) sus posibilidades del todo.'",
      word: 'hubiera arruinado',
      english: 'had ruined',
      answer: 'hubiera arruinado',
      concept_id: 'pluperfect_subjunctive',
      difficulty: 3,
      passage: 'Diego no dejaba de pensar en la entrevista de la semana pasada. Si hubiera investigado mejor la empresa, habría respondido con más seguridad. Ojalá hubiera preparado ejemplos concretos de su experiencia, en vez de improvisar. Su amiga Lucía, que también buscaba trabajo, le dijo: "Yo, si hubiera estado en tu lugar, habría hecho preguntas sobre el equipo." Diego suspiró. No creía que hubiera arruinado sus posibilidades del todo, pero sí sentía que, si se hubiera tomado más tiempo para prepararse, el resultado habría sido distinto.',
      passageEn: 'Diego couldn\'t stop thinking about last week\'s interview. If he had researched the company better, he would have answered more confidently. He wished he had prepared concrete examples of his experience instead of improvising. His friend Lucía, who was also job-hunting, told him: "If I had been in your shoes, I would have asked about the team." Diego sighed. He didn\'t think he had ruined his chances completely, but he did feel that if he had taken more time to prepare, the outcome would have been different.',
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate: 'He wished he had prepared concrete examples of his experience.'",
      english: 'He wished he had prepared concrete examples of his experience.',
      answer: 'Ojalá hubiera preparado ejemplos concretos de su experiencia.',
      word: 'ojalá hubiera preparado',
      concept_id: 'pluperfect_subjunctive',
      difficulty: 3,
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
// - subjunctive_adjective_clauses: unknown/hypothetical/nonexistent
//   antecedent → subjunctive (busco un piso que tenga terraza) vs. known/
//   specific antecedent → indicative (conozco un piso que tiene terraza);
//   negative antecedents (nadie que, nada que) always subjunctive; the
//   un/una vs. el/la article pattern is a helpful but non-absolute signal,
//   not a hard rule — checked against SpanishDict's "Subjunctive in
//   Relative Clauses" / "Subjunctive vs. Indicative: Relative Clauses"
//   guides, Lawless Spanish's adjective-clause page, and the Bowdoin
//   grammar book's adjective-clause chapter. The superlative-triggers-
//   subjunctive exception (el mejor... que haya probado) matches the
//   existing GRAMMAR_CARDS entry for this concept in src/content/grammar.js
//   (itself previously corrected in an earlier audit per ES.md).
// - subjunctive_temporal: cuando/en cuanto/tan pronto como/hasta que/
//   después de que take subjunctive for a future, not-yet-realized event
//   and indicative for habitual or completed past reference (cuando venga
//   vs. cuando viene); antes de que always takes subjunctive regardless of
//   time reference — checked against Collins' "indicative or subjunctive"
//   guide, the 123teachme adverbial-clause page, and Yabla's "Using
//   Subjunctive after Conjunctions of Time" lesson. The register note (en
//   cuanto = neutral/all-purpose, tan pronto como = more formal/written,
//   identical mood rule for both) was checked separately against
//   SpanishDict's "en cuanto vs. tan pronto como" comparison page.
// - pluperfect_subjunctive: formed with hubiera/hubiese (imperfect
//   subjunctive of haber) + past participle; hubiera more frequent in
//   speech, hubiese more formal/literary, both fully interchangeable in
//   meaning; used for unreal/counterfactual si-clauses in the past (si +
//   pluperfect subjunctive, ...conditional perfect: si hubiera estudiado,
//   habría aprobado) and for ojalá-wishes about a closed-off past (ojalá
//   hubieras venido); the informal substitution of a second hubiera-clause
//   for the expected habría in the result clause (si lo hubiera sabido, no
//   lo hubiera hecho) — checked against Lawless Spanish's "Pluperfect
//   Subjunctive" page, the Elon.io "si-clauses tipo 3" grammar note, and
//   Tell Me in Spanish's past-perfect-subjunctive guide.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// subjunctive_noun_clauses, subjunctive_adjective_clauses,
// subjunctive_temporal, and pluperfect_subjunctive in src/content/grammar.js
// (same facts, fuller C1-paced walkthrough with original passages) and does
// not contradict them.
