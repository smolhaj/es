// Unit 35 — Word-Order Effects: Dislocation, Clefts & Literary Inversion (C2)
// Covers: dislocacion_topicalizacion, oraciones_hendidas, inversion_literaria
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit sits at
// C2 and assumes the learner already has direct/indirect object pronouns and
// double object pronoun order (me lo, se lo) solidly in place from earlier
// B1 units — that existing knowledge is the mechanical backbone of the
// resumptive-pronoun pattern taught in the first section here. Every Spanish
// claim below was verified against RAE's Glosario de términos gramaticales,
// RAE's Nueva gramática de la lengua española, and established
// Spanish-linguistics/ELE sources before writing — see the audit note at the
// bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Fronting for Emphasis: Dislocation & Topicalization',
      paragraphs: [
        "You already know how object pronouns work — lo, la, le, los, las replace a direct or indirect object noun, and you can even stack two of them (me lo dio, se lo dije). This unit puts that existing skill to a new, stylistic use. Spanish very often moves an object (or another phrase) to the very front of the sentence to spotlight it, and when it does, it leaves behind a pronoun in the object's normal slot that \"echoes\" what was moved. Linguists call this dislocación a la izquierda (left dislocation) or topicalización, and the echoing pronoun is called a pronombre resuntivo (resumptive pronoun). Ese libro, ya lo leí — literally \"That book, I already read it\" — fronts ese libro for emphasis and leaves lo behind as the direct object of leí, exactly where a direct object pronoun would sit in an ordinary sentence.",
        "The resumptive pronoun is not optional decoration — RAE's grammar treats it as the grammatical link that ties the fronted tópico back into the clause that follows. When the fronted element is a definite direct or indirect object (especially one marked with the personal a, as with people), standard Spanish requires the clitic copy: A tu hermana la vi ayer en el mercado (\"Your sister, I saw her yesterday at the market\") needs la; dropping it — *A tu hermana vi ayer en el mercado — is ungrammatical, not just informal. The same logic applies to indirect objects: A Pedro no le dije nada (\"Pedro, I didn't tell him anything\") keeps le even though Pedro is already named up front.",
        "It's worth separating this from a look-alike: fronting a subject for contrast doesn't take a resumptive pronoun at all, because a subject was never an object pronoun slot to begin with — Vino Juan (\"Juan came\") just reorders subject and verb, with nothing to echo. Dislocation specifically concerns displaced objects (and some other complements, like de eso in De eso, no quiero hablar, \"About that, I don't want to talk\" — no clitic here either, since de eso isn't a direct or indirect object). The giveaway is simple: if what's fronted could be replaced by lo/la/le/los/las/se + lo, you need the resumptive pronoun; if it couldn't, you don't.",
        "One more thing worth knowing before you start using this actively: dislocation is extremely natural and common in everyday spoken Spanish — it's one of the main ways speakers manage what's already \"on the table\" in a conversation versus what's new. In careful, formal writing it still appears, but more sparingly and more deliberately, reserved for genuine emphasis rather than the constant background hum it has in speech.",
      ],
      examples: [
        { es: 'Ese libro, ya lo leí.', en: 'That book, I already read it.' },
        { es: 'A tu hermana la vi ayer en el mercado.', en: 'Your sister, I saw her yesterday at the market.' },
        { es: 'A Pedro no lo soporto.', en: "Pedro, I can't stand him." },
        { es: 'De eso, no quiero hablar.', en: "About that, I don't want to talk." },
        { es: 'El dinero se lo di a mi hermano.', en: 'The money, I gave it to my brother.' },
        { es: 'A los ladrones los detuvo la policía dos calles más adelante.', en: 'The thieves, the police caught them two blocks further on.' },
      ],
      commonMistakes: [
        "Dropping the resumptive pronoun when the fronted element is a definite direct or indirect object — *Ese libro, ya leí is simply ungrammatical in standard Spanish, not just casual; the clitic copy (lo) is required, not optional.",
        "Confusing dislocation with plain subject-fronting for contrast — Vino Juan needs no clitic because a subject was never an object-pronoun slot; only fronted objects (and a few other complements) trigger a resumptive pronoun.",
        "Treating dislocation as equally natural in every register — it's the everyday norm in speech, but formal writing uses it more sparingly and only for deliberate emphasis, so leaning on it constantly in an essay can read as overly conversational.",
      ],
    },
    {
      heading: 'Isolating the Focus: Cleft Sentences with Lo que…es/fue/hizo',
      paragraphs: [
        "A cleft sentence (oración hendida) takes an ordinary statement and \"splits\" it in two so that one piece of information becomes the clear focus, framed by lo que (\"what,\" in the sense of \"the thing that\") and a form of ser. Compare No tenemos suficiente presupuesto (\"We don't have enough budget,\" a flat statement) with Lo que pasa es que no tenemos suficiente presupuesto (\"The thing is, we don't have enough budget\") — the second version isolates the budget shortfall as the specific point being made, rather than just reporting it. The pattern generalizes: lo que + [clause] + es/fue/hizo + [the focused element] lets you build the same effect around almost any verb — lo que necesitamos es… (\"what we need is…\"), lo que hizo fue… (\"what he did was…\").",
        "Lo que hizo fue + infinitive is especially useful for emphasizing an action by naming it abstractly first, then specifying it: Lo que hizo fue llamar a la policía (\"What he did was call the police\") holds off the actual action for a beat, which gives it more weight than the plain Llamó a la policía. The same works for needs and reactions: Lo que necesitamos es más información (\"What we need is more information\"), Lo que más me sorprendió fue su reacción (\"What surprised me most was his reaction\").",
        "A detail that trips learners up: the ser in the cleft agrees with the focused element in tense, but stays third-person singular regardless of that element's number or person. Lo que hicieron fue quejarse (\"What they did was complain\") takes fue, never fueron, even though hicieron is plural — the subject of ser, grammatically, is the whole lo que… clause (singular), not the people doing the complaining.",
        "Finally, keep lo que pasa es que separate in your mind from the simpler discourse marker es que. In real usage, lo que pasa es que has drifted into a near-fixed opener for an explanation or a mild pushback — closer to English \"the thing is…\" than a literal claim about something currently happening — while es que on its own is an even more minimal justification marker (Es que no tuve tiempo, \"It's just that I didn't have time\"). Both exist, but they aren't interchangeable one-for-one: the lo que version is a true cleft with a fronted focus; es que alone isn't fronting anything.",
      ],
      examples: [
        { es: 'Lo que pasa es que no tenemos suficiente presupuesto.', en: "The thing is, we don't have enough budget." },
        { es: 'Lo que necesitamos es más información.', en: 'What we need is more information.' },
        { es: 'Lo que hizo fue llamar a la policía.', en: 'What he did was call the police.' },
        { es: 'Lo que más me sorprendió fue su reacción.', en: 'What surprised me most was his reaction.' },
        { es: 'Lo que hicieron fue quejarse, no denunciar el robo.', en: 'What they did was complain, not report the robbery.' },
      ],
      commonMistakes: [
        "Making ser agree with the number of the focused element — Lo que hicieron fueron quejarse is wrong; it must stay fue, because the grammatical subject of ser is the singular lo que… clause, not the plural people involved.",
        "Treating lo que pasa es que as a literal claim about something happening right now — in practice it usually functions as a set-phrase opener for an explanation or gentle counterargument, closer to \"the thing is\" than a blow-by-blow report.",
        "Collapsing the cleft lo que…es que into the simpler discourse marker es que — they overlap in meaning but not in structure; es que alone isn't fronting or isolating anything, it's just a minimal justification opener.",
      ],
    },
    {
      heading: 'Verb Before Subject: Literary & Journalistic Inversion',
      paragraphs: [
        "Everyday spoken Spanish, like English, almost always puts the subject before the verb: Juan dijo que llegaría tarde (\"Juan said he'd arrive late\"). Formal written registers — literary narration, journalism, especially anything introducing or attributing a quotation — very often flip that order instead, putting the verb first: Dijo Juan que llegaría tarde. Both sentences mean exactly the same thing and are equally grammatical; the difference is register and effect, not correctness. VS (verb-subject) order signals \"this is careful, written, formal prose,\" the way a slightly more elevated word choice would in English.",
        "This inversion shows up most naturally in two situations. First, after a direct quotation, where verbs of saying (decir, afirmar, declarar, responder, señalar) commonly follow the subject that produced the quote: \"No pienso irme\", respondió la mujer, sin mirar atrás (\"'I don't intend to leave,' the woman replied, without looking back\"). Second, with verbs describing something appearing or happening — llegar, surgir, ocurrir — where VS order often reads as the more natural narrative choice rather than a marked, deliberate flourish: Llegó por fin el día tan esperado (\"The long-awaited day finally arrived\"); Ocurrió algo extraño esa noche (\"Something strange happened that night\").",
        "Journalism leans on this pattern constantly for attributing statements to an official source: Afirma el autor que la crisis tiene raíces más profundas (\"The author asserts that the crisis has deeper roots\"); Según declaró el testigo, el ladrón huyó a pie (\"According to what the witness stated, the thief fled on foot\"). Notice that the verbs doing the inverting here — afirmar, declarar — belong to the same family of verba dicendi (\"speech verbs\") that Spanish grammar and journalism scholarship both flag as especially prone to this VS pattern; a plain, everyday verb unrelated to speech or appearance inverts far less naturally and can sound odd forced into the same mold.",
        "Treat this mostly as a reading skill for now, not a production habit to force into every sentence: recognizing Dijo Juan que… or Confirmó la policía que… instantly as \"Juan said that…\" / \"Police confirmed that…\" will make news articles and literary narration far easier to follow. Producing it yourself, in moderation, can lend a polished, formal tone to your own writing — but sprinkling it into casual conversation will just sound stilted, since everyday speech strongly prefers the ordinary SV order.",
      ],
      examples: [
        { es: 'Dijo Juan que llegaría tarde.', en: 'Juan said he would arrive late.' },
        { es: '"No pienso irme", respondió la mujer, sin mirar atrás.', en: '"I don\'t intend to leave," the woman replied, without looking back.' },
        { es: 'Llegó por fin el día tan esperado.', en: 'The long-awaited day finally arrived.' },
        { es: 'Afirma el autor que la crisis tiene raíces más profundas.', en: 'The author asserts that the crisis has deeper roots.' },
        { es: 'Según declaró el testigo, el ladrón huyó a pie.', en: 'According to what the witness stated, the thief fled on foot.' },
      ],
      commonMistakes: [
        "Overusing VS inversion in casual conversation — it's a marked formal/literary/journalistic choice, not the everyday default; ordinary speech strongly prefers Juan dijo que… over Dijo Juan que….",
        "Assuming every verb inverts equally naturally — it's strongest with verbs of saying (decir, afirmar, declarar, responder) and verbs of appearing/happening (llegar, surgir, ocurrir); forcing an unrelated everyday verb into VS order can sound artificial.",
        "Forgetting that inversion is a stylistic option, not a grammatical requirement — Dijo Juan que llegaría tarde and Juan dijo que llegaría tarde are both fully correct and mean the same thing; only the register shifts.",
      ],
    },
  ],

  vocab: [
    { es: 'el suceso', en: 'the event, the incident', example: 'El suceso ocurrió a plena luz del día.', exampleEn: 'The incident happened in broad daylight.' },
    { es: 'el testigo / la testigo', en: 'the witness', example: 'Un testigo vio todo desde la ventana.', exampleEn: 'A witness saw everything from the window.' },
    { es: 'declarar', en: 'to state, to testify', example: 'El testigo declaró ante la policía esta mañana.', exampleEn: 'The witness testified before the police this morning.' },
    { es: 'el ladrón / la ladrona', en: 'the thief', example: 'El ladrón huyó antes de que llegara la policía.', exampleEn: 'The thief fled before the police arrived.' },
    { es: 'rescatar', en: 'to rescue', example: 'Los bomberos lograron rescatar a la familia atrapada.', exampleEn: 'The firefighters managed to rescue the trapped family.' },
    { es: 'el incendio', en: 'the fire', example: 'El incendio se extendió rápidamente por el edificio.', exampleEn: 'The fire spread quickly through the building.' },
    { es: 'sospechoso / sospechosa', en: 'suspicious; the suspect', example: 'La policía detuvo a un sospechoso cerca de la estación.', exampleEn: 'Police detained a suspect near the station.' },
    { es: 'el titular', en: 'the headline', example: 'El titular del periódico exageraba lo ocurrido.', exampleEn: 'The newspaper headline exaggerated what happened.' },
    { es: 'confirmar', en: 'to confirm', example: 'Las autoridades confirmaron que no hubo heridos.', exampleEn: 'Authorities confirmed there were no injuries.' },
    { es: 'la víctima', en: 'the victim', example: 'La víctima fue trasladada al hospital sin heridas graves.', exampleEn: 'The victim was taken to the hospital without serious injuries.' },
    { es: 'huir', en: 'to flee', example: 'El sospechoso huyó a pie por un callejón.', exampleEn: 'The suspect fled on foot through an alley.' },
    { es: 'el reportero / la reportera', en: 'the reporter', example: 'Una reportera entrevistó a los vecinos del barrio.', exampleEn: 'A reporter interviewed the neighbors in the area.' },
  ],

  practice: [
    // ── dislocacion_topicalizacion block (blocked practice: drilled alone before mixing with other concepts) ──
    {
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses left dislocation with a resumptive pronoun?',
      word: 'la',
      english: 'her (resumptive pronoun)',
      answer: 'A tu hermana la vi ayer en el mercado.',
      options: [
        'A tu hermana vi ayer en el mercado.',
        'A tu hermana la vi ayer en el mercado.',
        'A tu hermana lo vi ayer en el mercado.',
        'Vi a tu hermana la ayer en el mercado.',
      ],
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: "Complete with the resumptive pronoun: 'Ese libro, ya ___ leí.'",
      word: 'lo',
      english: 'it (resumptive pronoun)',
      answer: 'lo',
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 1,
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate using dislocation with a resumptive pronoun: 'Pedro, I can't stand him.'",
      english: "Pedro, I can't stand him.",
      answer: 'A Pedro no lo soporto.',
      word: 'a Pedro no lo soporto',
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 2,
    },
    {
      type: 'error_correction',
      prompt: "Fix the error: '*Ese libro, ya leí.' (missing the required resumptive pronoun)",
      word: 'lo',
      english: 'it (resumptive pronoun)',
      answer: 'Ese libro, ya lo leí.',
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'Al ladrón ___ vieron dos testigos cerca del banco.'",
      word: 'lo',
      english: 'him (resumptive pronoun)',
      answer: 'lo',
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 2,
      passage: 'El robo ocurrió a plena luz del día. Al ladrón lo vieron dos testigos cerca del banco. La bolsa con el dinero, la dejó tirada en la esquina. A la víctima la ayudaron unos vecinos que pasaban por allí. Del sospechoso, la policía todavía no tiene ninguna pista.',
      passageEn: "The robbery happened in broad daylight. The thief, two witnesses saw him near the bank. The bag with the money, he left it lying on the corner. The victim, some passing neighbors helped her. Of the suspect, the police still don't have any leads.",
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto: 'La bolsa con el dinero, la dejó tirada en la esquina.' ¿Qué función tiene 'la' en esta oración?",
      word: 'la',
      english: 'it (resumptive pronoun)',
      answer: 'Es un pronombre resuntivo que retoma "la bolsa con el dinero" como objeto directo',
      options: [
        'Es un pronombre resuntivo que retoma "la bolsa con el dinero" como objeto directo',
        'Es el sujeto de la oración',
        'Es un artículo definido sin función gramatical propia',
        'Es un pronombre reflexivo',
      ],
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 3,
      passage: 'El robo ocurrió a plena luz del día. Al ladrón lo vieron dos testigos cerca del banco. La bolsa con el dinero, la dejó tirada en la esquina. A la víctima la ayudaron unos vecinos que pasaban por allí. Del sospechoso, la policía todavía no tiene ninguna pista.',
      passageEn: "The robbery happened in broad daylight. The thief, two witnesses saw him near the bank. The bag with the money, he left it lying on the corner. The victim, some passing neighbors helped her. Of the suspect, the police still don't have any leads.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Del sospechoso, la policía todavía no tiene ninguna pista.'",
      word: 'del sospechoso',
      english: 'of the suspect',
      answer: "Of the suspect, the police still don't have any leads.",
      concept_id: 'dislocacion_topicalizacion',
      difficulty: 2,
      passage: 'El robo ocurrió a plena luz del día. Al ladrón lo vieron dos testigos cerca del banco. La bolsa con el dinero, la dejó tirada en la esquina. A la víctima la ayudaron unos vecinos que pasaban por allí. Del sospechoso, la policía todavía no tiene ninguna pista.',
      passageEn: "The robbery happened in broad daylight. The thief, two witnesses saw him near the bank. The bag with the money, he left it lying on the corner. The victim, some passing neighbors helped her. Of the suspect, the police still don't have any leads.",
    },

    // ── oraciones_hendidas block (kept separate from dislocation; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: "Complete the cleft sentence: 'Lo que necesitamos ___ más información, no más reuniones.'",
      word: 'es',
      english: 'is (cleft ser, 3rd person singular)',
      answer: 'es',
      options: ['es', 'son', 'fue', 'sea'],
      concept_id: 'oraciones_hendidas',
      difficulty: 1,
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate using a cleft sentence with 'lo que...fue': 'What he did was apologize.'",
      english: 'What he did was apologize.',
      answer: 'Lo que hizo fue disculparse.',
      word: 'lo que hizo fue',
      concept_id: 'oraciones_hendidas',
      difficulty: 2,
    },
    {
      type: 'error_correction',
      prompt: "Fix the error: 'Lo que hicieron fueron quejarse.' (ser must stay 3rd-person singular in this cleft, regardless of the plural subject of hicieron)",
      word: 'fue',
      english: 'was (stays singular)',
      answer: 'Lo que hicieron fue quejarse.',
      concept_id: 'oraciones_hendidas',
      difficulty: 3,
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa: 'Lo que ___ es que no tenemos suficientes cámaras en esa zona.'",
      word: 'pasa',
      english: 'happens (fixed discourse-marker use: "the thing is")',
      answer: 'pasa',
      concept_id: 'oraciones_hendidas',
      difficulty: 1,
      passage: 'Reportera: ¿Por qué no han atrapado todavía al ladrón?\nPolicía: Lo que pasa es que no tenemos suficientes cámaras en esa zona. Lo que hicimos fue interrogar a los testigos y revisar las grabaciones del banco. Lo que necesitamos ahora es más tiempo para confirmar la identidad del sospechoso. Lo que más nos sorprendió fue la rapidez con la que huyó.',
      passageEn: "Reporter: Why haven't you caught the thief yet?\nPolice officer: The thing is, we don't have enough cameras in that area. What we did was question the witnesses and review the bank's footage. What we need now is more time to confirm the suspect's identity. What surprised us most was how quickly he fled.",
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, la policía dice 'Lo que pasa es que no tenemos suficientes cámaras.' ¿Qué función cumple aquí 'lo que pasa es que'?",
      word: 'lo que pasa es que',
      english: 'the thing is (discourse marker)',
      answer: 'Introduce una explicación o justificación, casi como una muletilla, más que describir algo que está ocurriendo en ese instante',
      options: [
        'Introduce una explicación o justificación, casi como una muletilla, más que describir algo que está ocurriendo en ese instante',
        'Es una pregunta retórica dirigida a la reportera',
        'Describe literalmente un suceso físico que está pasando en la calle',
        'Es una orden dirigida al sospechoso',
      ],
      concept_id: 'oraciones_hendidas',
      difficulty: 3,
      passage: 'Reportera: ¿Por qué no han atrapado todavía al ladrón?\nPolicía: Lo que pasa es que no tenemos suficientes cámaras en esa zona. Lo que hicimos fue interrogar a los testigos y revisar las grabaciones del banco. Lo que necesitamos ahora es más tiempo para confirmar la identidad del sospechoso. Lo que más nos sorprendió fue la rapidez con la que huyó.',
      passageEn: "Reporter: Why haven't you caught the thief yet?\nPolice officer: The thing is, we don't have enough cameras in that area. What we did was question the witnesses and review the bank's footage. What we need now is more time to confirm the suspect's identity. What surprised us most was how quickly he fled.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate the police officer's line: 'Lo que necesitamos ahora es más tiempo para confirmar la identidad del sospechoso.'",
      word: 'lo que necesitamos ahora es',
      english: 'what we need now is',
      answer: "What we need now is more time to confirm the suspect's identity.",
      concept_id: 'oraciones_hendidas',
      difficulty: 2,
      passage: 'Reportera: ¿Por qué no han atrapado todavía al ladrón?\nPolicía: Lo que pasa es que no tenemos suficientes cámaras en esa zona. Lo que hicimos fue interrogar a los testigos y revisar las grabaciones del banco. Lo que necesitamos ahora es más tiempo para confirmar la identidad del sospechoso. Lo que más nos sorprendió fue la rapidez con la que huyó.',
      passageEn: "Reporter: Why haven't you caught the thief yet?\nPolice officer: The thing is, we don't have enough cameras in that area. What we did was question the witnesses and review the bank's footage. What we need now is more time to confirm the suspect's identity. What surprised us most was how quickly he fled.",
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa: 'Lo que más nos ___ fue la rapidez con la que huyó.'",
      word: 'sorprendió',
      english: 'surprised',
      answer: 'sorprendió',
      concept_id: 'oraciones_hendidas',
      difficulty: 2,
      passage: 'Reportera: ¿Por qué no han atrapado todavía al ladrón?\nPolicía: Lo que pasa es que no tenemos suficientes cámaras en esa zona. Lo que hicimos fue interrogar a los testigos y revisar las grabaciones del banco. Lo que necesitamos ahora es más tiempo para confirmar la identidad del sospechoso. Lo que más nos sorprendió fue la rapidez con la que huyó.',
      passageEn: "Reporter: Why haven't you caught the thief yet?\nPolice officer: The thing is, we don't have enough cameras in that area. What we did was question the witnesses and review the bank's footage. What we need now is more time to confirm the suspect's identity. What surprised us most was how quickly he fled.",
    },

    // ── inversion_literaria block (kept separate; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: 'Which sentence uses the formal literary/journalistic VS (verb-subject) order?',
      word: 'dijo Juan',
      english: 'Juan said (inverted VS order)',
      answer: 'Dijo Juan que llegaría tarde.',
      options: [
        'Juan dijo que llegaría tarde.',
        'Dijo Juan que llegaría tarde.',
        'Juan que llegaría tarde dijo.',
        'Tarde llegaría, dijo Juan.',
      ],
      concept_id: 'inversion_literaria',
      difficulty: 2,
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate using literary inversion (verb before subject): 'The long-awaited day finally arrived.'",
      english: 'The long-awaited day finally arrived.',
      answer: 'Llegó por fin el día tan esperado.',
      word: 'llegó por fin',
      concept_id: 'inversion_literaria',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: "Complete with the correct verb form for the inverted literary order: '___ por fin el día tan esperado.' (llegar)",
      word: 'Llegó',
      english: 'arrived',
      answer: 'Llegó',
      concept_id: 'inversion_literaria',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa con orden VS (verbo-sujeto): '___ la policía que no hubo heridos.' (confirmar)",
      word: 'Confirmó',
      english: 'confirmed',
      answer: 'Confirmó',
      concept_id: 'inversion_literaria',
      difficulty: 2,
      passage: 'Ocurrió anoche un robo en el centro de la ciudad. Según declaró un testigo, el ladrón huyó a pie hacia la estación. "No vi bien su cara", afirmó la testigo, todavía visiblemente nerviosa. Confirmó la policía que no hubo heridos. Llegó por fin, esta mañana, la noticia de que el sospechoso fue detenido.',
      passageEn: 'A robbery occurred last night downtown. According to what a witness stated, the thief fled on foot toward the station. "I didn\'t get a good look at his face," the witness stated, still visibly nervous. Police confirmed there were no injuries. This morning, the news that the suspect had been arrested finally arrived.',
    },
    {
      type: 'multiple_choice',
      prompt: "¿Por qué el texto usa 'Confirmó la policía' en vez de 'La policía confirmó'?",
      word: 'confirmó la policía',
      english: 'police confirmed (inverted VS order)',
      answer: 'Porque es el registro formal y periodístico habitual para atribuir declaraciones oficiales, aunque el orden SV también sería correcto',
      options: [
        'Porque es el registro formal y periodístico habitual para atribuir declaraciones oficiales, aunque el orden SV también sería correcto',
        'Porque "la policía" no puede ir antes del verbo en español',
        'Porque el verbo confirmar exige obligatoriamente el orden VS en cualquier registro',
        'Porque es una pregunta y no una afirmación',
      ],
      concept_id: 'inversion_literaria',
      difficulty: 3,
      passage: 'Ocurrió anoche un robo en el centro de la ciudad. Según declaró un testigo, el ladrón huyó a pie hacia la estación. "No vi bien su cara", afirmó la testigo, todavía visiblemente nerviosa. Confirmó la policía que no hubo heridos. Llegó por fin, esta mañana, la noticia de que el sospechoso fue detenido.',
      passageEn: 'A robbery occurred last night downtown. According to what a witness stated, the thief fled on foot toward the station. "I didn\'t get a good look at his face," the witness stated, still visibly nervous. Police confirmed there were no injuries. This morning, the news that the suspect had been arrested finally arrived.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the news text: 'Llegó por fin, esta mañana, la noticia de que el sospechoso fue detenido.'",
      word: 'llegó por fin la noticia',
      english: 'the news finally arrived',
      answer: 'This morning, the news that the suspect had been arrested finally arrived.',
      concept_id: 'inversion_literaria',
      difficulty: 3,
      passage: 'Ocurrió anoche un robo en el centro de la ciudad. Según declaró un testigo, el ladrón huyó a pie hacia la estación. "No vi bien su cara", afirmó la testigo, todavía visiblemente nerviosa. Confirmó la policía que no hubo heridos. Llegó por fin, esta mañana, la noticia de que el sospechoso fue detenido.',
      passageEn: 'A robbery occurred last night downtown. According to what a witness stated, the thief fled on foot toward the station. "I didn\'t get a good look at his face," the witness stated, still visibly nervous. Police confirmed there were no injuries. This morning, the news that the suspect had been arrested finally arrived.',
    },
    {
      type: 'error_correction',
      prompt: "Rewrite for a formal news article, using the literary/journalistic VS order instead of the everyday SV order: 'El testigo afirmó que no vio bien la cara del ladrón.'",
      word: 'afirmó el testigo',
      english: 'the witness stated (inverted VS order)',
      answer: 'Afirmó el testigo que no vio bien la cara del ladrón.',
      concept_id: 'inversion_literaria',
      difficulty: 3,
    },

    // ── Production practice: writing_prompt (self-assessed, no exact-match grading) ──
    { type: 'writing_prompt', prompt: 'Reescribe esta idea para dar énfasis: "Quiero paz y tranquilidad, no dinero." Usa una oración hendida (por ejemplo, "Lo que quiero es...") o una dislocación.', word: null, english: null, answer: 'Lo que de verdad quiero es paz y tranquilidad; el dinero, la verdad, me importa poco.', concept_id: 'oraciones_hendidas', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - dislocacion_topicalizacion: left dislocation / topicalización fronts a
//   constituent (typically an object) and leaves a coindexed clitic
//   ("pronombre resuntivo") in the object's ordinary position; the
//   resumptive clitic is required for definite direct/indirect objects,
//   especially those marked with personal a — checked directly against
//   RAE-ASALE's Glosario de términos gramaticales entries for "dislocación"
//   and "tópico" (rae.es/gtg/dislocación, rae.es/gtg/tópico), RAE's Nueva
//   gramática de la lengua española section "El concepto de tópico (II).
//   Vínculos sintácticos y discursivos entre el tópico y la oración a la que
//   corresponde," and the E-Prints Complutense corpus study "La dislocación
//   a la izquierda en el español hablado," which supplied the corpus example
//   pattern (Todo esto, Juan lo dijo sin inmutarse) that this unit's own
//   examples were modeled on without copying verbatim. Contrasted against
//   plain subject-fronting (Vino Juan), which needs no resumptive pronoun
//   since a subject isn't an object-pronoun slot.
// - oraciones_hendidas: cleft/"copulativas enfáticas de relativo" structures
//   built on lo que + ser to isolate one focused element (Lo que le falta a
//   ese autor es imaginación), including the alternative fronted orderings
//   (Imaginación es lo que le falta / Es imaginación lo que le falta) —
//   checked against Español Avanzado's "Cleft sentences in Spanish" /
//   "Cleft sentences — copulativas enfáticas de relativo" pages and the
//   hottopos.com academic paper "Del uso de las oraciones hendidas en el
//   español actual" (Guitart). The invariable third-person-singular ser
//   regardless of the focused element's number, and the drift of lo que
//   pasa es que into a near-fixed discourse marker distinct from the bare
//   es que justification marker, match the existing GRAMMAR_CARDS entry for
//   this concept in src/content/grammar.js and are not contradicted by any
//   source consulted.
// - inversion_literaria: VS (verb-subject) order as a register-marked,
//   fully grammatical stylistic alternative to the everyday SV order,
//   common in literary narration and journalism, especially after direct
//   quotations and with verbs of saying/appearing — checked against
//   Wikilengua's "Inversión" entry, the WordReference Foros thread
//   "inversión verbo+sujeto," and Olga Fernández Soriano's "Sobre el orden
//   de palabras en español" (UCM/DICE). The specific claim that verbs of
//   saying (verba dicendi: decir, afirmar, declarar, responder, señalar)
//   invert especially readily in journalistic attribution was checked
//   against academic work on verba dicendi in Spanish news discourse
//   (El genio maligno's "Verbos que expresan actividades humanas y su valor
//   de verba dicendi" and the ResearchGate paper "Los verbos de decir y su
//   valor argumentativo en noticias de dos diarios..."), which both confirm
//   decir-family verbs function as the core reporting-verb paradigm in
//   Spanish news writing. Matches the existing GRAMMAR_CARDS entry for this
//   concept in src/content/grammar.js (same facts: Dijo Juan que…, verbs of
//   saying/appearing invert most readily, everyday speech prefers SV).
// This content is complementary to the existing GRAMMAR_CARDS entries for
// dislocacion_topicalizacion, oraciones_hendidas, and inversion_literaria in
// src/content/grammar.js (same facts, fuller C2-paced walkthrough with
// original passages) and does not contradict them. It also builds
// explicitly on the learner's existing B1 knowledge of direct/indirect
// object pronouns and double object pronoun order (object_pronoun_order),
// per that concept's listed prereq relationship in
// functions/_lib/concepts.js.
