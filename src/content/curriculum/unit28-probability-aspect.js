// Unit 28 — Probability & Ongoing Action (C1)
// Covers: futuro_probabilidad, condicional_probabilidad, perifraseis_avanzadas
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This is the first
// C1 unit in the curriculum, so it assumes full mastery of the future,
// conditional, preterite/imperfect contrast, and the B1 periphrases acabar de
// and llevar + gerund/sin (unit16-recent-ongoing.js) — those two are
// referenced and reused, never re-taught from scratch here. Every Spanish
// claim below was verified via WebSearch against RAE-derived pedagogical
// summaries, Kwiziq Spanish, SpanishDict, Lawless Spanish, gramaticas.net,
// and other established grammar references before writing — see the audit
// note at the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Guessing About Now: The Future for Probability',
      paragraphs: [
        "You already know the simple future (el futuro) for talking about what's going to happen — hablaré, iremos, será. At C1, it's time to learn something that surprises a lot of learners the first time they meet it: Spanish speakers use that exact same tense, with the exact same conjugations, to do something that has nothing to do with the future at all — to guess about right now. In English, we handle this with a modal word or phrase: \"It must be about ten,\" \"She's probably at work,\" \"Where can he be?\" Spanish handles it by simply putting the verb in the future tense: Serán las diez. Estará en el trabajo. ¿Dónde estará?. No word for \"probably\" is required — the future tense itself already carries the meaning of a guess.",
        'The rule, stated directly: when a Spanish speaker uses the simple future about a present situation rather than a future one, the sentence expresses probability, conjecture, or supposition about now — grammars describe this as the future\'s "valor de conjetura." There\'s nothing new to memorize about the forms themselves — hablaré, tendrá, serán are the exact conjugations you already have — only the meaning shifts, and context is what tells a listener which reading is intended. Serán las diez said while checking a clock is a real future statement ("it will be ten o\'clock [later today]"); said with a shrug, glancing at a dim sky, it means "it must be about ten right now."',
        "This isn't limited to telling time. Any present-tense idea can be reframed as a guess this way: age (Tendrá unos quince años — \"She must be about fifteen\"), location or identity (¿Quién será? — \"Who could that be?\", said about someone at the door right now), cost (Costará unos cien euros — \"It probably costs around a hundred euros\"), or a state (Estará cansado — \"He must be tired\"). Notice none of these sentences describe something that hasn't happened yet — every one of them is a guess about a fact that's already true, right now, the speaker just doesn't know it for certain.",
        "This construction is extremely common in ordinary spoken Spanish — it's often the more natural, more compact choice compared to building a sentence with probablemente or debe de + infinitivo, even though those alternatives exist and are perfectly correct too. Native speakers reach for the future of probability constantly: guessing a stranger's age, wondering why someone hasn't answered the phone, estimating a price without checking the tag.",
      ],
      examples: [
        { es: 'Serán las diez.', en: 'It must be about ten o\'clock.' },
        { es: 'Estará en el trabajo todavía.', en: 'He must still be at work.' },
        { es: '¿Dónde estará Pedro? No lo veo.', en: 'Where can Pedro be? I don\'t see him.' },
        { es: 'Tendrá unos quince años.', en: 'She must be about fifteen.' },
        { es: 'Costará unos cien euros.', en: "It's probably about a hundred euros." },
        { es: '¿Quién llamará a estas horas?', en: 'Who can be calling at this hour?' },
      ],
      commonMistakes: [
        "Don't assume every future-tense sentence is describing something that hasn't happened yet — context matters. \"Estará cansado\" said about someone standing right in front of you is a guess about now, not a prediction about later.",
        'You never need to add probablemente or seguramente on top of the future of probability for the sentence to work — the tense alone already means "probably." (You can combine them for extra emphasis, but it\'s optional, not required.)',
        'This future-for-probability meaning only exists in the simple future about the present. To guess about the past, Spanish shifts one tense back to the conditional — that\'s the next section.',
      ],
    },
    {
      heading: 'Guessing About the Past: The Conditional for Inference',
      paragraphs: [
        "Section one taught you to guess about right now using the future tense. Now for the mirror-image situation: guessing about a moment in the past. Spanish handles this exactly the way you'd hope, once you know the pattern — it shifts one tense back, from future to conditional. Just as Estará cansado guesses about someone's condition now, Estaría cansado guesses about someone's condition at some past moment you're describing. The forms are the ones you already know from any other conditional use (tendría, sería, estaría) — nothing new to conjugate, only a new job for a familiar tense.",
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
      heading: 'Habits, Sudden Starts, Repeats, and Stops: Five More Verb Periphrases',
      paragraphs: [
        "Back in B1 you learned two verb periphrases for talking about time and duration: acabar de + infinitive (\"just did something\") and llevar + gerund / llevar + sin + infinitive (\"have been doing something\" / \"haven't done something for a while\"). At C1, you're adding five more periphrases to that same toolkit — each one pairs a conjugated auxiliary verb with an infinitive to express a nuance of aspect (how habitual, how sudden, whether repeated, whether stopped) that a plain tense alone can't capture.",
        "First: soler + infinitive, for habitual or customary action — things you usually do, or used to do. Suelo desayunar café con tostadas means \"I usually have coffee and toast for breakfast.\" The rule to state explicitly and remember: soler is essentially only used in the present (suelo, sueles, suele...) and the imperfect (solía, solías, solía...); a future or preterite form of soler is not something you'll hear from a native speaker in practice, even though a grammar table might technically list one. Present soler describes a current habit; imperfect solía describes a past habit, often one that no longer holds — soler leans noticeably spoken and informal, especially in storytelling, more so than in careful formal writing.",
        'Second: ponerse a + infinitive, for a sudden, often emotional or voluntary start. It overlaps with the more neutral empezar a ("to start"), but adds force: Empezó a llover simply reports that rain began, neutrally; Se puso a llover suggests it suddenly started pouring, more abruptly or dramatically. The same contrast shows up with people: Se puso a llorar de repente ("She suddenly burst into tears") carries an emotional, unplanned quality that Empezó a llorar wouldn\'t.',
        'Third: volver a + infinitive, for repetition — "to do something again." Volvió a llamarla al día siguiente means "He called her again the next day." This is the natural, idiomatic way to express "again" attached to a verb in Spanish — more common than tacking otra vez or de nuevo onto a plain verb, though those work too.',
        'Fourth: dejar de + infinitive, for stopping a habitual or ongoing action — Dejó de fumar hace un año ("She stopped smoking a year ago"). One paradox worth knowing on sight, because it inverts the meaning completely: negate it, and no dejar de + infinitive flips to mean the opposite — "to keep on doing something" or "can\'t stop doing something." No dejo de pensar en ti doesn\'t mean "I don\'t stop [in order] to think of you" — it means "I can\'t stop thinking about you." Two negatives (no + dejar) don\'t cancel out to a neutral statement; they land on a persistent, almost helpless continuation.',
        "And the fifth piece of this expanded toolkit is one you already own: llevar + time + sin + infinitive, from unit16, for how long an absence of action has lasted — Lleva diez años sin fumar (\"He hasn't smoked in ten years\"). It belongs in this same family of aspect-marking periphrases, so keep it active alongside these four new ones rather than filing it away as a separate, unrelated B1 topic.",
      ],
      examples: [
        { es: 'Solía fumar en el balcón todas las noches.', en: 'He used to smoke on the balcony every night.' },
        { es: 'Se puso a llorar de repente.', en: 'She suddenly burst into tears.' },
        { es: 'Volvió a llamarla al día siguiente.', en: 'He called her again the next day.' },
        { es: 'Dejó de fumar hace un año.', en: 'She stopped smoking a year ago.' },
        { es: 'No dejo de pensar en ti.', en: "I can't stop thinking about you." },
        { es: 'Lleva diez años sin fumar.', en: "He hasn't smoked in ten years." },
      ],
      commonMistakes: [
        'Don\'t reach for a future or preterite form of soler — native speakers only use suele/solía (present/imperfect); anything else sounds off even if a table technically lists it.',
        "Don't treat ponerse a and empezar a as perfectly interchangeable — empezar a is neutral, while ponerse a signals a sudden, forceful, or emotionally charged start.",
        'Watch the double negative trap: dejar de fumar = "to stop smoking," but no dejar de fumar = "to keep on smoking / not be able to quit" — the negation flips the meaning, it doesn\'t just add "not."',
        'Keep sin followed by the plain infinitive in llevar + sin (sin fumar, never sin fumando) — the same rule from unit16 still applies here.',
      ],
    },
  ],

  vocab: [
    { es: 'adivinar', en: 'to guess', example: 'No sé exactamente, pero voy a adivinar: serán las nueve.', exampleEn: "I don't know exactly, but I'll guess: it must be nine." },
    { es: 'suponer', en: 'to suppose / assume', example: 'Supongo que tendría unos cuarenta años entonces.', exampleEn: 'I suppose he was about forty back then.' },
    { es: 'sospechar', en: 'to suspect', example: 'Sospecho que dejó de venir por vergüenza.', exampleEn: 'I suspect he stopped coming out of embarrassment.' },
    { es: 'calcular', en: 'to estimate / calculate', example: 'Calculo que llevan diez años casados.', exampleEn: "I'd estimate they've been married ten years." },
    { es: 'de repente', en: 'suddenly', example: 'De repente, se puso a llover con fuerza.', exampleEn: 'Suddenly, it started pouring rain.' },
    { es: 'de vez en cuando', en: 'once in a while', example: 'De vez en cuando vuelve a fumar, aunque lo dejó hace años.', exampleEn: 'Once in a while he smokes again, even though he quit years ago.' },
    { es: 'a menudo', en: 'often', example: 'Solía visitarnos a menudo cuando vivía cerca.', exampleEn: 'He used to visit us often when he lived nearby.' },
    { es: 'con frecuencia', en: 'frequently', example: 'Con frecuencia se ponía a cantar sin motivo.', exampleEn: 'He would frequently burst into song for no reason.' },
    { es: 'la costumbre', en: 'the habit / custom', example: 'Tenía la costumbre de leer antes de dormir.', exampleEn: 'He had the habit of reading before bed.' },
    { es: 'el hábito', en: 'the habit', example: 'Dejar un hábito de tantos años no es fácil.', exampleEn: "Breaking a habit of so many years isn't easy." },
    { es: 'envejecer', en: 'to grow old / age', example: 'Envejeció mucho después de jubilarse.', exampleEn: 'He aged a lot after retiring.' },
    { es: 'la infancia', en: 'childhood', example: 'En su infancia, solía pasar los veranos en el campo.', exampleEn: 'In his childhood, he used to spend summers in the countryside.' },
    { es: 'de joven', en: 'as a young person', example: 'De joven, tendría unos veinte años cuando emigró.', exampleEn: 'As a young man, he must have been about twenty when he emigrated.' },
    { es: 'en aquella época', en: 'back in those days / at that time', example: 'En aquella época, no había teléfonos móviles.', exampleEn: 'Back in those days, there were no cellphones.' },
    { es: 'seguramente', en: 'surely / most likely', example: 'Seguramente estará durmiendo a esta hora.', exampleEn: "He's most likely sleeping at this hour." },
    { es: 'probablemente', en: 'probably', example: 'Probablemente tendría razón, aunque nunca lo supe con certeza.', exampleEn: 'He was probably right, though I never knew for sure.' },
    { es: 'aproximadamente', en: 'approximately', example: 'Costaría aproximadamente cien euros en aquel entonces.', exampleEn: 'It probably cost approximately a hundred euros back then.' },
    { es: 'imaginarse', en: 'to imagine', example: 'Me imagino que estará muy cansada después del vuelo.', exampleEn: 'I imagine she must be very tired after the flight.' },
  ],

  practice: [
    // ── futuro_probabilidad block (blocked practice: drill this concept in isolation first) ──
    { type: 'multiple_choice', prompt: 'Which of these best captures the idea in "Serán las diez"?', word: 'ser (futuro de probabilidad)', english: "it must be / it's probably", answer: 'It must be about ten o\'clock right now.', options: ['It will definitely be ten o\'clock next week.', 'It must be about ten o\'clock right now.', 'It was ten o\'clock yesterday.', 'Please be ten o\'clock.'], concept_id: 'futuro_probabilidad', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the future of probability: "¿Dónde ___ Juan? No contesta el teléfono." (estar)', word: 'estar', english: 'to be (location)', answer: 'estará', concept_id: 'futuro_probabilidad', difficulty: 2 },
    {
      type: 'translation_to_spanish',
      prompt: "Based on the scene in the passage, translate: 'He must be tired after such a long day.'",
      english: 'He must be tired after such a long day.',
      answer: 'Estará cansado después de un día tan largo.',
      word: 'estar (futuro de probabilidad)',
      concept_id: 'futuro_probabilidad',
      difficulty: 2,
      passage: 'Marta no lleva reloj esta noche. —¿Qué hora será? —pregunta, mirando la ventana oscura. Su amiga Rosa se encoge de hombros. —Serán las diez, más o menos. Todavía no ha llegado nadie a la fiesta. Raro, ¿no? Diego siempre es puntual. —Estará atrapado en el tráfico —dice Marta—, o tal vez estará cansado después de un día tan largo en la oficina. Su hermano tendrá la culpa, seguro: siempre le pide favores imposibles a última hora.',
      passageEn: "Marta isn't wearing a watch tonight. \"What time do you think it is?\" she asks, looking at the dark window. Her friend Rosa shrugs. \"It's probably around ten. Nobody's arrived at the party yet. Weird, right? Diego is always punctual.\" \"He's probably stuck in traffic,\" says Marta, \"or maybe he's just tired after such a long day at the office. His brother is probably to blame — he's always asking him for impossible favors at the last minute.\"",
    },
    {
      type: 'translation_to_english',
      prompt: 'In the passage, translate: "Estará atrapado en el tráfico."',
      word: 'estar (futuro de probabilidad)',
      english: "he's probably stuck",
      answer: "He's probably stuck in traffic.",
      concept_id: 'futuro_probabilidad',
      difficulty: 2,
      passage: 'Marta no lleva reloj esta noche. —¿Qué hora será? —pregunta, mirando la ventana oscura. Su amiga Rosa se encoge de hombros. —Serán las diez, más o menos. Todavía no ha llegado nadie a la fiesta. Raro, ¿no? Diego siempre es puntual. —Estará atrapado en el tráfico —dice Marta—, o tal vez estará cansado después de un día tan largo en la oficina. Su hermano tendrá la culpa, seguro: siempre le pide favores imposibles a última hora.',
      passageEn: "Marta isn't wearing a watch tonight. \"What time do you think it is?\" she asks, looking at the dark window. Her friend Rosa shrugs. \"It's probably around ten. Nobody's arrived at the party yet. Weird, right? Diego is always punctual.\" \"He's probably stuck in traffic,\" says Marta, \"or maybe he's just tired after such a long day at the office. His brother is probably to blame — he's always asking him for impossible favors at the last minute.\"",
    },
    {
      type: 'multiple_choice',
      prompt: 'Based on the passage, why does Rosa say "Serán las diez" instead of stating the time directly?',
      word: 'futuro de probabilidad',
      english: 'guessing about the present',
      answer: 'She is making an educated guess because neither of them has checked a clock.',
      options: ['She is certain of the exact time.', 'She is making an educated guess because neither of them has checked a clock.', 'She is talking about what time it will be tomorrow.', 'She misspoke and meant "Son las diez."'],
      concept_id: 'futuro_probabilidad',
      difficulty: 3,
      passage: 'Marta no lleva reloj esta noche. —¿Qué hora será? —pregunta, mirando la ventana oscura. Su amiga Rosa se encoge de hombros. —Serán las diez, más o menos. Todavía no ha llegado nadie a la fiesta. Raro, ¿no? Diego siempre es puntual. —Estará atrapado en el tráfico —dice Marta—, o tal vez estará cansado después de un día tan largo en la oficina. Su hermano tendrá la culpa, seguro: siempre le pide favores imposibles a última hora.',
      passageEn: "Marta isn't wearing a watch tonight. \"What time do you think it is?\" she asks, looking at the dark window. Her friend Rosa shrugs. \"It's probably around ten. Nobody's arrived at the party yet. Weird, right? Diego is always punctual.\" \"He's probably stuck in traffic,\" says Marta, \"or maybe he's just tired after such a long day at the office. His brother is probably to blame — he's always asking him for impossible favors at the last minute.\"",
    },
    { type: 'error_correction', prompt: 'Find and correct the error: "Juan no contesta el teléfono. Estuvo trabajando, seguramente." (The speaker means "He\'s probably working" — a guess about right now, not something that already happened and finished.)', word: 'estar (futuro de probabilidad)', english: "he's probably working", answer: 'Estará trabajando, seguramente.', concept_id: 'futuro_probabilidad', difficulty: 3 },

    // ── condicional_probabilidad block (kept separate from futuro_probabilidad; blocked before mixed review) ──
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

    // ── perifraseis_avanzadas block (kept separate from the two probability concepts; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which periphrasis expresses a habitual, customary action?', word: 'soler', english: 'to usually do something', answer: 'soler + infinitivo', options: ['ponerse a + infinitivo', 'soler + infinitivo', 'volver a + infinitivo', 'dejar de + infinitivo'], concept_id: 'perifraseis_avanzadas', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with ponerse a (sudden start): "Cuando escuchó la noticia, ___ a llorar." (ponerse, preterite)', word: 'ponerse a', english: 'to suddenly start doing', answer: 'se puso', concept_id: 'perifraseis_avanzadas', difficulty: 2 },
    {
      type: 'translation_to_spanish',
      prompt: "Based on the passage, translate: 'He used to smoke on the balcony every night.'",
      english: 'He used to smoke on the balcony every night.',
      answer: 'Solía fumar en el balcón todas las noches.',
      word: 'soler',
      concept_id: 'perifraseis_avanzadas',
      difficulty: 2,
      passage: 'Mi abuelo solía fumar en el balcón todas las noches después de cenar, un ritual que duró décadas. Un día, sin previo aviso, dejó de fumar por completo; llevaba ya diez años sin tocar un cigarrillo cuando yo nací. Sorprendentemente, tras jubilarse, volvió a fumar durante unos meses, algo que preocupó mucho a mi abuela. Cuando ella se enteró, se puso a llorar en la cocina, convencida de que la historia se repetiría. Por suerte, mi abuelo lo dejó de nuevo, esta vez para siempre, y hasta hoy no ha vuelto a fumar.',
      passageEn: "My grandfather used to smoke on the balcony every night after dinner, a ritual that lasted decades. One day, out of nowhere, he stopped smoking completely; he had already gone ten years without touching a cigarette by the time I was born. Surprisingly, after retiring, he started smoking again for a few months, which worried my grandmother a great deal. When she found out, she burst into tears in the kitchen, convinced the whole story would repeat itself. Luckily, my grandfather quit again, this time for good, and to this day he hasn't smoked again.",
    },
    {
      type: 'translation_to_english',
      prompt: 'In the passage, translate: "Un día, sin previo aviso, dejó de fumar por completo."',
      word: 'dejar de',
      english: 'he stopped completely',
      answer: 'One day, out of nowhere, he stopped smoking completely.',
      concept_id: 'perifraseis_avanzadas',
      difficulty: 2,
      passage: 'Mi abuelo solía fumar en el balcón todas las noches después de cenar, un ritual que duró décadas. Un día, sin previo aviso, dejó de fumar por completo; llevaba ya diez años sin tocar un cigarrillo cuando yo nací. Sorprendentemente, tras jubilarse, volvió a fumar durante unos meses, algo que preocupó mucho a mi abuela. Cuando ella se enteró, se puso a llorar en la cocina, convencida de que la historia se repetiría. Por suerte, mi abuelo lo dejó de nuevo, esta vez para siempre, y hasta hoy no ha vuelto a fumar.',
      passageEn: "My grandfather used to smoke on the balcony every night after dinner, a ritual that lasted decades. One day, out of nowhere, he stopped smoking completely; he had already gone ten years without touching a cigarette by the time I was born. Surprisingly, after retiring, he started smoking again for a few months, which worried my grandmother a great deal. When she found out, she burst into tears in the kitchen, convinced the whole story would repeat itself. Luckily, my grandfather quit again, this time for good, and to this day he hasn't smoked again.",
    },
    {
      type: 'multiple_choice',
      prompt: 'According to the passage, what happened after the grandfather retired?',
      word: 'volver a',
      english: 'to do again',
      answer: 'He went back to smoking again for a few months.',
      options: ['He started smoking for the very first time.', 'He went back to smoking again for a few months.', 'He never smoked again for the rest of his life.', 'He only ever smoked in secret.'],
      concept_id: 'perifraseis_avanzadas',
      difficulty: 3,
      passage: 'Mi abuelo solía fumar en el balcón todas las noches después de cenar, un ritual que duró décadas. Un día, sin previo aviso, dejó de fumar por completo; llevaba ya diez años sin tocar un cigarrillo cuando yo nací. Sorprendentemente, tras jubilarse, volvió a fumar durante unos meses, algo que preocupó mucho a mi abuela. Cuando ella se enteró, se puso a llorar en la cocina, convencida de que la historia se repetiría. Por suerte, mi abuelo lo dejó de nuevo, esta vez para siempre, y hasta hoy no ha vuelto a fumar.',
      passageEn: "My grandfather used to smoke on the balcony every night after dinner, a ritual that lasted decades. One day, out of nowhere, he stopped smoking completely; he had already gone ten years without touching a cigarette by the time I was born. Surprisingly, after retiring, he started smoking again for a few months, which worried my grandmother a great deal. When she found out, she burst into tears in the kitchen, convinced the whole story would repeat itself. Luckily, my grandfather quit again, this time for good, and to this day he hasn't smoked again.",
    },
    { type: 'error_correction', prompt: 'Find and correct the error: "Mi tía suele fumar durante veinte años, pero ya no." (The speaker means her aunt used to smoke, habitually, for twenty years, but not anymore — a discontinued past habit.)', word: 'soler', english: 'used to do something', answer: 'Mi tía solía fumar durante veinte años, pero ya no.', concept_id: 'perifraseis_avanzadas', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch (July 2026) against RAE-derived
// pedagogical summaries, Kwiziq Spanish, SpanishDict, Lawless Spanish,
// gramaticas.net, elon.io, realfastspanish.com, ithinklanguages.com, and
// the existing GRAMMAR_CARDS entries for these three concepts in
// src/content/grammar.js:
// - The simple future expresses probability/conjecture about the present
//   (RAE's "valor de conjetura o probabilidad") — confirmed via Kwiziq
//   Spanish's "El Futuro Simple for prediction, speculation and probability
//   in the present" and multiple corroborating sources (Sprachcaffe,
//   SpanishPod101, Wisc.pb.unizin.org "The Future of Probability"); the
//   "Serán las diez" / "No tengo reloj pero serán las once y media" example
//   pattern is directly attested.
// - The conditional expresses probability/inference about the past, as the
//   past-shifted counterpart of the future of probability — confirmed via
//   gramaticas.net's dedicated "El Condicional de Probabilidad" article,
//   which uses the exact "Tendría unos treinta años" example.
// - Tener (not ser) is the verb used to express age in Spanish, so the
//   probability form for age must be tendría, not sería — consistent with
//   the existing GRAMMAR_CARDS entry and standard age-expression rules.
// - The conditional perfect (habría + participio) is a distinct hypothetical-
//   past construction, not to be confused with the probability conditional —
//   this distinction is already flagged in the existing condicional_
//   probabilidad GRAMMAR_CARDS entry and was not contradicted by any source
//   checked.
// - Soler + infinitive expresses habitual action and is essentially confined
//   to the present (suelo/sueles/suele...) and imperfect (solía/solías...);
//   future/conditional forms (soleré, solería) are effectively nonexistent,
//   and the technically-possible preterite (solí) is unused by native
//   speakers — confirmed via realfastspanish.com and Kwiziq Spanish's "Soler
//   (imperfect) + infinitive" pages, and matches the existing GRAMMAR_CARDS
//   exceptions note.
// - Ponerse a + infinitive marks a sudden, voluntary, or emotionally charged
//   start of an action, contrasting with the neutral empezar a/comenzar a —
//   confirmed via Kwiziq's empezar/comenzar entry and multiple verbal-
//   periphrasis overviews (Talkpal, Digestible Notes, SpanishDict's
//   "Verbal Periphrasis in Spanish" guide), all giving the same Se puso a
//   llorar / Empezó a llorar contrast used in this unit.
// - Volver a + infinitive expresses repetition ("to do again"), losing
//   volver's literal "to return" meaning entirely in this construction, and
//   is the preferred idiomatic way to express "again" attached to a verb —
//   confirmed via Kwiziq's "Volver a + [infinitive] to express repetition"
//   and holaquepasa.com.
// - Dejar de + infinitive expresses stopping a habitual or ongoing action —
//   confirmed via Kwiziq's "Dejar de + [infinitive]" entry and
//   ithinklanguages.com. The negated form no dejar de + infinitive flips to
//   mean "to keep on doing / can't stop doing" (No dejo de pensar en ti = "I
//   can't stop thinking about you") rather than a plain negation — confirmed
//   via an italki native-speaker discussion thread and cross-checked against
//   the general dejar de/no dejar de contrast documented across multiple
//   grammar sources.
// - Llevar + time + sin + infinitive (duration of non-action) is reused
//   as-taught from unit16-recent-ongoing.js, not re-verified here since it
//   is a prerequisite concept already audited in that unit's own note.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// futuro_probabilidad, condicional_probabilidad, and perifraseis_avanzadas
// in src/content/grammar.js (same facts, fuller C1-paced walkthrough with
// original passages) and does not contradict them.
