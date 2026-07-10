// Unit 24 — Subjunctive Counterfactuals & Concession (B2)
// Covers: pluperfect_subjunctive, condicional_probabilidad, aunque_concessive,
// subjunctive_adjective_clauses
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified via WebSearch against RAE-derived pedagogical
// summaries, SpanishDict, Kwiziq, Lawless Spanish, gramaticas.net, and other
// established grammar references before writing — see the audit note at the
// bottom of this file for the specific claims checked.
//
// This is a new unit created by the curriculum-pacing-lag fix
// (07-09-2026). All four concepts here share a single theme — reasoning
// about the unreal, the uncertain, or the merely hypothetical — and all
// four were retagged B2 by the CEFR audit but previously sat scattered
// across mismatched C1 units: pluperfect_subjunctive and subjunctive_
// adjective_clauses came from the old unit26-subjunctive-limits.js (which
// also taught two genuinely-C1 concepts, now on their own); condicional_
// probabilidad came from the old unit28-probability-aspect.js (now
// repurposed as a B1 unit); aunque_concessive came from the old
// unit29-fixed-expressions.js (now the B1/C1 boundary for that unit
// improved too). Every section's prose, examples, and practice moved here
// verbatim — no content was rewritten, only relocated and given a new
// shared home. See ES.md's punch-list item 29 for the full pacing-lag
// writeup.

export default {
  sections: [
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
    {
      heading: 'Guessing About the Past: The Conditional for Inference',
      paragraphs: [
        "You already know the simple future can guess about right now (Estará cansado — \"He must be tired\"). Now for the mirror-image situation: guessing about a moment in the past. Spanish handles this exactly the way you'd hope, once you know the pattern — it shifts one tense back, from future to conditional. Just as Estará cansado guesses about someone's condition now, Estaría cansado guesses about someone's condition at some past moment you're describing. The forms are the ones you already know from any other conditional use (tendría, sería, estaría) — nothing new to conjugate, only a new job for a familiar tense.",
        'The classic example, and the one worth anchoring this whole concept to: Tendría unos treinta años cuando lo conocí — "He must have been about thirty when I met him." The speaker isn\'t stating a verified fact; they\'re reconstructing an estimate about the past, the same way tendrá would estimate about the present. Other common uses follow the identical logic: Serían las tres de la madrugada cuando llegamos ("It must have been three in the morning when we arrived"), Estaría agotado del viaje ("He must have been exhausted from the trip"), ¿Quién llamaría a esa hora? ("Who could have been calling at that hour?").',
        "Here's a nuance worth sitting with, because it's a genuine, testable contrast: compare Tenía treinta años cuando lo conocí (imperfect — stating his age as a plain fact you know) with Tendría treinta años cuando lo conocí (conditional — signaling that you're estimating, not certain). Both are grammatically fine sentences; they just make different claims about how sure the speaker is. And since Spanish expresses age with tener, not ser, remember that the probability form for age has to follow tener too — sería treinta años is simply not how a native speaker would say it; it has to be tendría treinta años.",
        "One thing to keep separate: this probability conditional is not the same as the conditional perfect (habría + participio), which expresses a hypothetical past result, not a guess — Habría llegado antes si hubiera salido temprano (\"He would have arrived earlier if he had left early\") is a different, hypothetical-past construction, not an inference about what actually happened.",
      ],
      examples: [
        { es: 'Tendría unos treinta años cuando lo conocí.', en: 'He must have been about thirty when I met him.' },
        { es: 'Serían las tres de la madrugada cuando llegamos.', en: 'It must have been three in the morning when we arrived.' },
        { es: 'Estaría agotado del viaje.', en: 'He must have been exhausted from the trip.' },
        { es: '¿Quién llamaría a esa hora?', en: 'Who could have been calling at that hour?' },
        { es: 'Costaría bastante dinero entonces.', en: 'It must have cost quite a bit of money back then.' },
      ],
      commonMistakes: [
        "Don't confuse the probability conditional with the conditional perfect (habría + participio) — one is a guess about a past fact, the other describes a hypothetical result that never happened.",
        'For age specifically, the probability form still follows tener, not ser — "sería treinta años" is wrong; it must be "tendría treinta años," the same rule that governs the non-probability sentence "tenía treinta años."',
        "Don't assume this is a rare, bookish construction — it's genuinely common in spoken storytelling, whenever a speaker is reconstructing details from memory rather than stating verified facts.",
      ],
    },
    {
      heading: 'Aunque: One Word, Two Very Different Meanings',
      paragraphs: [
        'Aunque translates to both "although" and "even if" in English, and which one you mean is signaled entirely by whether the verb that follows is in the indicative or the subjunctive — this single mood choice does real, meaningful work in Spanish that English has to handle with two different words instead. Get comfortable with this pattern and you unlock a genuinely advanced piece of precision.',
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
      heading: 'Real or Hypothetical? Subjunctive in Adjective Clauses',
      paragraphs: [
        'An "adjective clause" (also called a relative clause) is a que-clause that describes a noun — the way an adjective would, just longer: un piso que tenga terraza ("a flat that has a terrace") describes piso the same way un piso grande does. The question this section adds is: does the noun being described actually, definitely exist for the speaker, or is it still unknown, hypothetical, or possibly nonexistent? That answer decides the mood of the clause.',
        'Compare these two side by side, because the contrast is the whole lesson: Busco un piso que tenga terraza — "I\'m looking for a flat that has a terrace," any flat, I haven\'t found it yet, it may not even exist in the size and price I need. Now: Conozco un piso que tiene terraza — "I know of a flat that has a terrace," a specific, real one I have in mind. Same verb (tener), same structure, different mood — because the first piso is still just an idea and the second is a known fact.',
        "A useful (though not perfectly airtight) signal: an indefinite article — un, una — often points toward subjunctive, because un piso means \"some flat or other,\" while el, la, or a name points toward indicative, because it identifies one specific thing. Treat this as a strong tendency to help you notice the pattern, not a rule you can apply blindly — the real test is always whether the antecedent is definite in the speaker's mind, not which article happens to appear.",
        "Negative antecedents behave predictably once you see the logic: if the thing doesn't exist at all, it obviously can't be a known, specific entity, so the subjunctive is automatic — No hay nadie que sepa la respuesta (\"There's no one who knows the answer\"), No conozco a nadie que hable ruso (\"I don't know anyone who speaks Russian\"). One more wrinkle worth knowing: after a superlative (el mejor, el único, el primero…), Spanish typically still reaches for the subjunctive, because a claim like \"the best I've ever tried\" is inherently a personal, unverifiable judgment, not a checkable fact — Es el mejor restaurante que haya probado. The indicative (que he probado) is also heard and simply treats the claim as a plain statement instead.",
      ],
      examples: [
        { es: 'Busco un piso que tenga terraza.', en: "I'm looking for a flat that has a terrace. (unknown — any flat)" },
        { es: 'Conozco un piso que tiene terraza.', en: 'I know of a flat that has a terrace. (specific, real one)' },
        { es: 'No hay nadie que sepa la respuesta.', en: "There's no one who knows the answer." },
        { es: 'Necesito a alguien que hable alemán.', en: "I need someone who speaks German. (whoever that turns out to be)" },
        { es: 'Es el mejor restaurante que haya probado.', en: "It's the best restaurant I've ever tried." },
      ],
      commonMistakes: [
        'Defaulting to the indicative everywhere, the way beginners do — using the subjunctive correctly here is one of the clearest markers that separates a fluent speaker from an intermediate one, so it\'s worth the deliberate effort.',
        "Forgetting that a negative antecedent (nadie, nada, ningún) forces subjunctive even without an obvious \"unknown\" flavor to the sentence.",
        "Relying on the article alone (un/una = subjunctive, el/la = indicative) without checking whether the antecedent is really definite — the article is a helpful hint, not the actual grammatical rule.",
      ],
    },
  ],

  vocab: [
    { es: 'la entrevista', en: 'the interview', example: 'Tengo una entrevista de trabajo mañana.', exampleEn: 'I have a job interview tomorrow.' },
    { es: 'el currículum', en: 'the résumé, the CV', example: 'Actualicé mi currículum antes de enviarlo.', exampleEn: 'I updated my résumé before sending it.' },
    { es: 'arrepentirse', en: 'to regret', example: 'Se arrepiente de no haber aceptado la oferta.', exampleEn: 'He regrets not having accepted the offer.' },
    { es: 'el plazo', en: 'the deadline', example: 'El plazo para entregar la solicitud termina mañana.', exampleEn: 'The deadline to submit the application ends tomorrow.' },
    { es: 'exigir', en: 'to demand, to require', example: 'La empresa exige que los candidatos hablen dos idiomas.', exampleEn: 'The company requires candidates to speak two languages.' },
    { es: 'previsto / prevista', en: 'planned, expected, scheduled', example: 'El vuelo tiene previsto salir a las ocho.', exampleEn: 'The flight is scheduled to leave at eight.' },
    { es: 'el presentimiento', en: 'the hunch, the premonition', example: 'Tengo el presentimiento de que algo va a cambiar.', exampleEn: 'I have a hunch that something is going to change.' },
    { es: 'replantearse', en: 'to reconsider, to rethink', example: 'Después del rechazo, decidió replantearse sus planes.', exampleEn: 'After the rejection, she decided to rethink her plans.' },
    { es: 'el malentendido', en: 'the misunderstanding', example: 'Todo fue por un malentendido, no por mala intención.', exampleEn: 'It was all because of a misunderstanding, not bad intent.' },
    { es: 'suponer', en: 'to suppose / assume', example: 'Supongo que tendría unos cuarenta años entonces.', exampleEn: 'I suppose he was about forty back then.' },
    { es: 'calcular', en: 'to estimate / calculate', example: 'Calculo que llevarían diez años casados cuando se mudaron.', exampleEn: "I'd estimate they had been married ten years when they moved." },
    { es: 'aunque + indicativo', en: 'although (known, real fact)', example: 'Aunque llueve, salgo a caminar.', exampleEn: "Although it's raining, I'm going out for a walk." },
    { es: 'aunque + subjuntivo', en: 'even if (hypothetical, dismissed)', example: 'Aunque llueva, saldré a caminar.', exampleEn: "Even if it rains, I'll go out for a walk." },
    { es: 'a pesar de que', en: 'despite the fact that (concessive, same mood logic as aunque)', example: 'A pesar de que es tarde, voy a terminar.', exampleEn: "Despite the fact that it's late, I'm going to finish." },
    { es: 'el piso', en: 'the flat, the apartment (Spain; departamento in LatAm — piso means "floor" across most of Latin America)', example: 'Alquilamos un piso en el centro.', exampleEn: 'We rented a flat downtown.' },
    { es: 'el casero / la casera', en: 'the landlord / landlady', example: 'El casero subió el alquiler otra vez.', exampleEn: 'The landlord raised the rent again.' },
    { es: 'el alquiler', en: 'the rent', example: 'El alquiler sube cada año en esta ciudad.', exampleEn: 'The rent goes up every year in this city.' },
  ],

  practice: [
    // ── pluperfect_subjunctive block (blocked practice: drilled alone before mixed review) ──
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

    // ── condicional_probabilidad block (kept separate from pluperfect_subjunctive; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly guesses someone\'s age in the past using the conditional?', word: 'tener (condicional de probabilidad)', english: 'he must have been (age)', answer: 'Tendría treinta años cuando la conocí.', options: ['Tendría treinta años cuando la conocí.', 'Tendrá treinta años cuando la conocí.', 'Tuvo treinta años cuando la conocí.', 'Tenga treinta años cuando la conocí.'], concept_id: 'condicional_probabilidad', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the conditional of probability: "___ las tres de la madrugada cuando por fin llegamos a casa." (ser)', word: 'ser', english: 'it must have been', answer: 'Serían', concept_id: 'condicional_probabilidad', difficulty: 2 },
    {
      type: 'translation_to_spanish',
      prompt: "Based on the passage, translate: 'He must have been exhausted from the trip.'",
      english: 'He must have been exhausted from the trip.',
      answer: 'Estaría agotado del viaje.',
      word: 'estar (condicional de probabilidad)',
      concept_id: 'condicional_probabilidad',
      difficulty: 2,
      passage: 'Cuando conocí a Andrés, yo tendría unos veinte años; él parecía mayor, así que tendría treinta y pico, calculo. Nos conocimos en una estación de tren desierta; serían las tres de la madrugada y no había nadie más en el andén. Él llevaba una maleta vieja y hablaba con un acento que yo no reconocía. Estaría agotado del viaje, porque apenas dijo un par de palabras antes de quedarse dormido en el banco de al lado. Nunca supe de dónde venía ni adónde iba.',
      passageEn: "When I met Andrés, I must have been about twenty; he looked older, so he was probably around thirty-something, I'd guess. We met at a deserted train station; it must have been three in the morning, and there was no one else on the platform. He was carrying an old suitcase and spoke with an accent I didn't recognize. He was probably exhausted from the trip, because he barely said a couple of words before falling asleep on the bench next to mine. I never found out where he was from or where he was going.",
    },
    {
      type: 'translation_to_english',
      prompt: 'In the passage, translate: "Serían las tres de la madrugada y no había nadie más en el andén."',
      word: 'ser (condicional de probabilidad)',
      english: 'it must have been three in the morning',
      answer: 'It must have been three in the morning, and there was no one else on the platform.',
      concept_id: 'condicional_probabilidad',
      difficulty: 2,
      passage: 'Cuando conocí a Andrés, yo tendría unos veinte años; él parecía mayor, así que tendría treinta y pico, calculo. Nos conocimos en una estación de tren desierta; serían las tres de la madrugada y no había nadie más en el andén. Él llevaba una maleta vieja y hablaba con un acento que yo no reconocía. Estaría agotado del viaje, porque apenas dijo un par de palabras antes de quedarse dormido en el banco de al lado. Nunca supe de dónde venía ni adónde iba.',
      passageEn: "When I met Andrés, I must have been about twenty; he looked older, so he was probably around thirty-something, I'd guess. We met at a deserted train station; it must have been three in the morning, and there was no one else on the platform. He was carrying an old suitcase and spoke with an accent I didn't recognize. He was probably exhausted from the trip, because he barely said a couple of words before falling asleep on the bench next to mine. I never found out where he was from or where he was going.",
    },
    {
      type: 'multiple_choice',
      prompt: 'The narrator says "yo tendría unos veinte años" instead of "yo tenía unos veinte años." What does this choice of verb form signal?',
      word: 'condicional de probabilidad',
      english: 'estimating vs. stating a fact',
      answer: 'That the narrator is estimating/guessing their age, not stating it as a precise fact.',
      options: ['That the narrator is completely certain of their exact age at the time.', 'That the narrator is estimating/guessing their age, not stating it as a precise fact.', 'That the age changed over the course of the story.', 'That the sentence describes a hypothetical, unreal situation.'],
      concept_id: 'condicional_probabilidad',
      difficulty: 3,
      passage: 'Cuando conocí a Andrés, yo tendría unos veinte años; él parecía mayor, así que tendría treinta y pico, calculo. Nos conocimos en una estación de tren desierta; serían las tres de la madrugada y no había nadie más en el andén. Él llevaba una maleta vieja y hablaba con un acento que yo no reconocía. Estaría agotado del viaje, porque apenas dijo un par de palabras antes de quedarse dormido en el banco de al lado. Nunca supe de dónde venía ni adónde iba.',
      passageEn: "When I met Andrés, I must have been about twenty; he looked older, so he was probably around thirty-something, I'd guess. We met at a deserted train station; it must have been three in the morning, and there was no one else on the platform. He was carrying an old suitcase and spoke with an accent I didn't recognize. He was probably exhausted from the trip, because he barely said a couple of words before falling asleep on the bench next to mine. I never found out where he was from or where he was going.",
    },
    { type: 'error_correction', prompt: 'Find and correct the error: "Sería treinta años cuando lo conocí." (The speaker is guessing about someone\'s age in the past.)', word: 'tener (condicional de probabilidad)', english: 'he must have been (age)', answer: 'Tendría treinta años cuando lo conocí.', concept_id: 'condicional_probabilidad', difficulty: 3 },

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
      prompt: "En el diálogo, Carlos dice: 'Busco uno que tenga dos habitaciones.' ¿Por qué usa el subjuntivo (tenga) en vez del indicativo (tiene)?",
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
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// This unit is a new consolidation created by the curriculum-pacing-lag fix
// (07-09-2026) — see ES.md's punch-list item 29. Every section's Spanish
// claims were already independently verified via WebSearch before this
// content was first written, in the units it moved from:
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
//   Tell Me in Spanish's past-perfect-subjunctive guide. Originally verified
//   for the old unit26-subjunctive-limits.js.
// - condicional_probabilidad: the conditional expresses probability/
//   inference about the past, as the past-shifted counterpart of the future
//   of probability — confirmed via gramaticas.net's dedicated "El
//   Condicional de Probabilidad" article, which uses the exact "Tendría
//   unos treinta años" example; tener (not ser) as the verb for expressing
//   age, so the probability form must be tendría, not sería; the
//   conditional perfect (habría + participio) as a distinct hypothetical-
//   past construction, not to be confused with the probability conditional.
//   Originally verified for the old unit28-probability-aspect.js.
// - aunque_concessive: aunque + indicative = concedes a known/established
//   fact ("although"); aunque + subjunctive = frames the concession as
//   hypothetical, unconfirmed, or dismissed as irrelevant ("even if"), with
//   the choice governed by the speaker's stance toward the information
//   rather than objective truth (Kwiziq "Aunque + indicative or
//   subjunctive"; Yabla "Aunque + Present Indicative vs. Subjunctive";
//   Collins Education "When should you use the indicative or the
//   subjunctive in Spanish?"); a pesar de que/pese a que following the same
//   logic (Gymglish "Aunque and pese a que followed by the indicative or
//   subjunctive"). Originally verified for the old unit29-fixed-
//   expressions.js.
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
//   existing GRAMMAR_CARDS entry for this concept. Originally verified for
//   the old unit26-subjunctive-limits.js.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// pluperfect_subjunctive, condicional_probabilidad, aunque_concessive, and
// subjunctive_adjective_clauses in src/content/grammar.js (same facts,
// fuller paced walkthroughs with original passages) and does not contradict
// them. All four concepts share an "unreal, uncertain, or hypothetical"
// theme, which is why they were consolidated into one unit rather than
// scattered across their old, mismatched homes.
