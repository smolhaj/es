// Unit 27 — Reported Speech & Nominalisation (C1)
// Covers: estilo_indirecto, nominalisation, gerund_advanced
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose — applied here at
// a C1 register rather than a beginner one. Every Spanish claim below was
// verified against SpanishDict, WordReference, RAE-adjacent pedagogical
// sources, and established C1 grammar references before writing — see the
// audit note at the bottom of this file for the specific claims checked.
// This is the first unit in the curriculum to extend past B2 into C1.

export default {
  sections: [
    {
      heading: 'He Said, She Said: Reported Speech and the Tense Backshift',
      paragraphs: [
        "Every language needs a way to relay what someone else said without quoting them word for word — English does it too (\"I'm tired\" becomes \"She said she was tired\"), and the underlying logic is the same in Spanish. When you report speech with a past-tense verb like dijo (\"said\"), the tense inside the que clause usually has to shift back one step in time. Linguists call this estilo indirecto (\"indirect/reported style\"), and getting the shift automatic is one of the last big grammar hurdles before your Spanish stops sounding translated from English.",
        "The core pattern is a two-step backshift, and it's worth memorizing as a table rather than piecing it together sentence by sentence. Presente shifts to imperfecto: \"Estoy cansado\" becomes Dijo que estaba cansado (\"He said he was tired\"). Pretérito and pretérito perfecto both shift to pluscuamperfecto: \"Llegué tarde\" or \"He llegado tarde\" both become Dijo que había llegado tarde (\"She said she had arrived late\"). And futuro shifts to condicional: \"Vendré mañana\" becomes Dijo que vendría al día siguiente (\"She said she would come the next day\"). Notice that last example also shifted mañana to al día siguiente — reported speech often needs to update time and place words too, since \"tomorrow\" no longer means the same day once you're retelling the conversation later. The most common shifts: hoy → ese día, ayer → el día anterior, mañana → al día siguiente, and aquí → allí. If you're relaying the message on the very same day, in the very same place, these shifts are often skipped — Dice Juan que llega hoy is perfectly natural if today is still today.",
        'Reported questions follow the same backshift, just wrapped differently. A yes/no question gets reported with si (\"if/whether\"): \"¿Vienes?\" becomes Preguntó si venía (\"He asked if I was coming\") — notice the question mark disappears and word order becomes a normal statement. A question with a question word keeps that word instead of si: \"¿Dónde vives?\" becomes Preguntó dónde vivía (\"She asked where I lived\").',
        'Reported commands work differently from reported statements, and this is the detail that trips up even strong learners: the imperative disappears entirely and is replaced by the subjunctive (almost always imperfect subjunctive, since the reporting verb is in the past). \"¡Cierra la puerta!\" becomes Le dijo que cerrara la puerta (\"He told her to close the door\"). This creates a genuinely useful ambiguity to be aware of: dijo que can introduce either a plain statement (indicative: dijo que llegaba, \"she said she was arriving\") or a relayed command (subjunctive: dijo que llegara, \"she told [someone] to arrive\") — the mood alone tells you which one it is. Reported requests and orders with pedir and ordenar work the same way: Me pidió que la llamara (\"She asked me to call her\"). This whole system shows up constantly in journalism and formal writing — a news report is almost entirely reported speech (según fuentes oficiales, el ministro afirmó que…) — so recognizing it fluently matters even before you produce it fluently yourself.',
      ],
      examples: [
        { es: '"Estoy cansado." → Dijo que estaba cansado.', en: '"I\'m tired." → He said he was tired.' },
        { es: '"He terminado el informe." → Dijo que había terminado el informe.', en: '"I\'ve finished the report." → She said she had finished the report.' },
        { es: '"Vendré mañana." → Dijo que vendría al día siguiente.', en: '"I\'ll come tomorrow." → She said she would come the next day.' },
        { es: '"¿Vienes a la reunión?" → Me preguntó si venía a la reunión.', en: '"Are you coming to the meeting?" → She asked me if I was coming to the meeting.' },
        { es: '"¿Cuándo llegaste?" → Preguntó cuándo había llegado.', en: '"When did you arrive?" → He asked when I had arrived.' },
        { es: '"¡Llámame esta noche!" → Me dijo que la llamara esa noche.', en: '"Call me tonight!" → She told me to call her that night.' },
      ],
      commonMistakes: [
        "The single most common slip is forgetting the futuro→condicional shift and leaving the future tense in place — \"Dijo que vendrá\" instead of the correct Dijo que vendría. If the reporting verb (dijo) is in the past, the reported verb must shift back too, even though a future action still feels \"future\" to you as the reporter.",
        'Don\'t confuse the two jobs "dijo que" can do: dijo que + indicative reports what was said as fact (dijo que llegaba — "she said she was arriving"), while dijo que + subjunctive reports a command (dijo que llegara — "she told them to arrive"). Reaching for the indicative out of habit when the original was actually an order is a very natural, very wrong mistake.',
        'Leaving time/place words un-shifted — quoting someone from last week and still saying "mañana" or "aquí" as if you were speaking from inside their original moment — creates real ambiguity about when/where you mean. Update them (al día siguiente, allí) whenever the reporting happens at a different time or place than the original statement.',
      ],
    },
    {
      heading: 'Turning Sentences into Nouns: El hecho de que and El que',
      paragraphs: [
        "Spanish has more than one way to build a noun out of an idea. You may already know the suffix-based route — crear becomes la creación, conocer becomes el conocimiento — where a single word does the nominalising. This section covers the other route: taking an entire clause (a full subject + verb) and packaging it as if it were a noun phrase, using el hecho de que (\"the fact that\") or el que (\"the fact that\" / \"the one who,\" depending on context). This lets a whole idea function as the subject or object of a sentence, which is extremely common in essays, opinion writing, and formal spoken registers — exactly the kind of complex sentence a C1 writer needs to build.",
        "El hecho de que is the clearest, most explicit version, and the rule that will serve you best as a learner is: default to the subjunctive after it. El hecho de que hayan subido los precios preocupa a los consumidores (\"The fact that prices have gone up worries consumers\") uses subjunctive (hayan subido) even though prices genuinely did go up — it's a completely true fact. The reason is subtler than \"true vs. false\": el hecho de que usually treats the fact as already-known background information the speaker is commenting on or reacting to, not as new information being asserted for the first time — and Spanish reserves the indicative there for cases where the speaker specifically wants to underline that the information itself is what's newsworthy. As a learner, subjunctive is the safe, standard choice and will be understood correctly in the overwhelming majority of contexts.",
        'El que works the same way when it means "the fact that" — El que no haya llamado no significa que se haya olvidado ("The fact that he hasn\'t called doesn\'t mean he\'s forgotten") — subjunctive again. But watch out: el que has a completely different, very common second meaning, where it works like "the one who/that" and refers to a specific, known person or thing — and that meaning takes the indicative, not the subjunctive. El que vino ayer era mi primo ("The one who came yesterday was my cousin") is indicative because a specific, identified person came. Compare that to el que venga primero ganará ("whoever arrives first will win") — subjunctive, because you don\'t yet know who that will be. The mood is doing real work here: it\'s the only signal telling you whether the referent is a known individual or an open, unresolved "whoever."',
        "One more construction worth recognizing even if you don't produce it often: cabe destacar que (\"it's worth noting that\") and similar fixed openers are a lighter-weight cousin of this same nominalising instinct, packaging an observation as a noun-like unit at the front of a sentence — common in essays, reports, and news writing.",
      ],
      examples: [
        { es: 'El hecho de que hayan subido los precios preocupa a los consumidores.', en: 'The fact that prices have gone up worries consumers.' },
        { es: 'El hecho de que llueva no cambia nuestros planes.', en: "The fact that it's raining doesn't change our plans." },
        { es: 'El que no haya llamado no significa que se haya olvidado.', en: "The fact that he hasn't called doesn't mean he's forgotten." },
        { es: 'El que vino ayer era mi primo. (specific, known person → indicative)', en: 'The one who came yesterday was my cousin.' },
        { es: 'El que venga primero ganará el premio. (unknown "whoever" → subjunctive)', en: 'Whoever arrives first will win the prize.' },
        { es: 'Cabe destacar que las cifras han mejorado este trimestre.', en: "It's worth noting that the figures have improved this quarter." },
      ],
      commonMistakes: [
        'The most common error is switching to the indicative after el hecho de que because the fact is objectively true — "el hecho de que él tiene razón" instead of tenga. Truth value isn\'t the deciding factor here; el hecho de que defaults to the subjunctive as the safe, standard register regardless of how true the fact is.',
        'Mixing up el que\'s two jobs is easy because they look identical on the page: el que + indicative means "the specific one who" (known, identified), while el que + subjunctive means "the fact that" or "whoever" (unresolved, or a background fact being commented on). Read the rest of the sentence for which one is meant.',
        "Reaching for el hecho de que in casual spoken conversation where a simple que clause would do (Me molesta que llegues tarde, not El hecho de que llegues tarde me molesta) is grammatically fine but stylistically heavy — save the nominalised version for writing and more formal registers.",
      ],
    },
    {
      heading: "The Gerund's Real Job (and What It Can't Do)",
      paragraphs: [
        "You already know the gerund (-ando/-iendo) from estar + gerundio for the progressive — está comiendo, \"she's eating.\" At C1, three more gerund uses are worth adding deliberately. First, the adverbial use, describing the manner or way an action happens: Salió corriendo (\"He left running\" / \"He ran out\") — the gerund attaches to the main verb salió and tells you how he left, not what noun it belongs to. Second, seguir and continuar + gerund express that an action is still ongoing: Sigue lloviendo (\"It's still raining\"), Continuó trabajando toda la noche (\"He kept working all night\"). Third, llevar + [time] + gerund expresses how long something has been going on: Llevo tres años estudiando español (\"I've been studying Spanish for three years\") — a construction with no direct one-word English equivalent, so it's worth practicing as its own fixed pattern rather than translating literally.",
        "Now for the error that even advanced English-speaking learners make constantly, precisely because English handles this differently: the Spanish gerund cannot modify a noun the way an English \"-ing\" word can. English happily says \"a box containing books\" or \"a woman wearing a red coat,\" with the -ing word acting like an adjective glued onto the noun. Spanish gerunds don't work that way — they attach to verbs (describing how an action happens, or forming a progressive), never directly to nouns as a description. So una caja conteniendo libros is simply wrong Spanish, even though it's a literal, word-for-word translation of correct English. The fix is a relative clause with que: una caja que contiene libros (\"a box that contains books\"). Same logic for una mujer llevando un abrigo rojo (wrong) → una mujer que llevaba un abrigo rojo (correct, \"a woman who was wearing a red coat\").",
        'There are exactly a couple of lexicalized exceptions worth knowing so they don\'t confuse you later: hirviendo ("boiling") and ardiendo ("burning") have, over long usage, become accepted as true adjectives, and can follow a noun directly — agua hirviendo ("boiling water"), una casa ardiendo ("a house on fire"). These are frozen, historical exceptions to memorize as vocabulary items, not a sign that the noun-modifying gerund rule is actually flexible — outside this small, closed set, the rule holds.',
      ],
      examples: [
        { es: 'Llevo tres años estudiando español.', en: "I've been studying Spanish for three years." },
        { es: 'Sigue lloviendo desde esta mañana.', en: "It's still raining since this morning." },
        { es: 'La niña salió llorando de la habitación.', en: 'The girl left the room crying.' },
        { es: 'Vi a un hombre cruzando la calle. (gerund describing the action seen, not modifying "hombre" as an adjective)', en: 'I saw a man crossing the street.' },
        { es: 'Incorrecto: Perdí la caja conteniendo mis documentos. → Correcto: Perdí la caja que contenía mis documentos.', en: 'Wrong: I lost the box containing my documents. → Correct version uses a relative clause.' },
        { es: 'Cuidado con el aceite hirviendo. (lexicalized exception)', en: 'Careful with the boiling oil.' },
      ],
      commonMistakes: [
        'Translating an English noun-modifying "-ing" phrase literally is the single biggest gerund error at this level: "una caja conteniendo libros," "un hombre llevando gafas," "una carta explicando la situación" are all incorrect for the same reason. Reach for que + a conjugated verb instead: una caja que contiene libros, un hombre que lleva gafas, una carta que explica la situación.',
        'Don\'t treat hirviendo/ardiendo as proof the noun-modifying rule is negotiable — they\'re a small, closed, memorized exception list, not a pattern you can extend to other verbs.',
        'Ser + gerund does not exist as a construction in Spanish (only estar + gerund forms the progressive) — "es corriendo" is not a real sentence; you need corre or está corriendo depending on what you mean.',
      ],
    },
  ],

  vocab: [
    { es: 'afirmar', en: 'to state, to affirm', example: 'El testigo afirmó que no había visto nada.', exampleEn: "The witness stated that he hadn't seen anything." },
    { es: 'sostener', en: 'to maintain, to claim', example: 'El acusado sostiene que es inocente.', exampleEn: 'The accused maintains that he is innocent.' },
    { es: 'alegar', en: 'to allege, to claim', example: 'La empresa alega que el error fue un malentendido.', exampleEn: 'The company alleges that the error was a misunderstanding.' },
    { es: 'negar', en: 'to deny', example: 'El ministro negó que hubiera mentido.', exampleEn: 'The minister denied that he had lied.' },
    { es: 'reconocer', en: 'to admit, to acknowledge', example: 'Reconoció que se había equivocado.', exampleEn: 'He admitted that he had made a mistake.' },
    { es: 'desmentir', en: 'to deny, to refute (a rumor)', example: 'La cantante desmintió los rumores sobre su boda.', exampleEn: 'The singer denied the rumors about her wedding.' },
    { es: 'quejarse (de)', en: 'to complain (about)', example: 'Los vecinos se quejaron de que el ruido continuaba toda la noche.', exampleEn: 'The neighbors complained that the noise continued all night.' },
    { es: 'advertir', en: 'to warn', example: 'El médico le advirtió que dejara de fumar.', exampleEn: 'The doctor warned him to stop smoking.' },
    { es: 'exigir', en: 'to demand', example: 'Los empleados exigieron que se les pagara a tiempo.', exampleEn: 'The employees demanded that they be paid on time.' },
    { es: 'insistir (en)', en: 'to insist (on)', example: 'Ella insistió en que la reunión se cambiara de fecha.', exampleEn: 'She insisted that the meeting be rescheduled.' },
    { es: 'el testimonio', en: 'testimony', example: 'El hecho de que su testimonio contradiga las pruebas preocupa al juez.', exampleEn: 'The fact that his testimony contradicts the evidence worries the judge.' },
    { es: 'la declaración', en: 'statement, declaration', example: 'Según su declaración, él llegó a las nueve.', exampleEn: 'According to his statement, he arrived at nine.' },
    { es: 'el rumor', en: 'rumor', example: 'El rumor de que la fábrica cerraría resultó falso.', exampleEn: 'The rumor that the factory would close turned out to be false.' },
    { es: 'cabe destacar (que)', en: "it's worth noting (that)", example: 'Cabe destacar que las cifras han mejorado este trimestre.', exampleEn: "It's worth noting that the figures have improved this quarter." },
    { es: 'el hecho', en: 'the fact', example: 'El hecho de que llueva no cambia nuestros planes.', exampleEn: "The fact that it's raining doesn't change our plans." },
    { es: 'según', en: 'according to', example: 'Según el testigo, el coche iba muy rápido.', exampleEn: 'According to the witness, the car was going very fast.' },
    { es: 'llevar a cabo', en: 'to carry out', example: 'El gobierno llevó a cabo una investigación exhaustiva.', exampleEn: 'The government carried out a thorough investigation.' },
    { es: 'seguir adelante', en: 'to keep going, to press on', example: 'A pesar de las críticas, decidió seguir adelante con el proyecto.', exampleEn: 'Despite the criticism, she decided to press on with the project.' },
  ],

  practice: [
    // ── estilo_indirecto block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    {
      type: 'fill_blank',
      prompt: 'Read the dialogue, then complete the reported-speech sentence: "Ana dijo que ___ temprano para ayudar con la comida." (ir, present → imperfect backshift)',
      word: 'ir',
      english: 'to go',
      answer: 'iba',
      concept_id: 'estilo_indirecto',
      difficulty: 2,
      passage: 'Ana: ¿Vienes a la fiesta el sábado?\nCarlos: No sé, todavía no he decidido. Tengo mucho trabajo esta semana.\nAna: Pues yo voy a llegar temprano para ayudar con la comida.\nCarlos: Vale, si termino el informe, iré también.',
      passageEn: "Ana: Are you coming to the party on Saturday?\nCarlos: I don't know, I haven't decided yet. I have a lot of work this week.\nAna: Well, I'm going to arrive early to help with the food.\nCarlos: Okay, if I finish the report, I'll come too.",
    },
    {
      type: 'translation_to_spanish',
      prompt: "Using the dialogue above, translate what Carlos said, applying the future→conditional backshift: 'Carlos said that he would come too if he finished the report.'",
      word: 'venir',
      english: 'would come',
      answer: 'Carlos dijo que vendría también si terminaba el informe.',
      concept_id: 'estilo_indirecto',
      difficulty: 3,
      passage: 'Ana: ¿Vienes a la fiesta el sábado?\nCarlos: No sé, todavía no he decidido. Tengo mucho trabajo esta semana.\nAna: Pues yo voy a llegar temprano para ayudar con la comida.\nCarlos: Vale, si termino el informe, iré también.',
      passageEn: "Ana: Are you coming to the party on Saturday?\nCarlos: I don't know, I haven't decided yet. I have a lot of work this week.\nAna: Well, I'm going to arrive early to help with the food.\nCarlos: Okay, if I finish the report, I'll come too.",
    },
    {
      type: 'fill_blank',
      prompt: 'Complete the reported yes/no question from the dialogue above: "Ana le preguntó a Carlos si ___ a la fiesta el sábado." (venir, present → imperfect)',
      word: 'venir',
      english: 'to come',
      answer: 'venía',
      concept_id: 'estilo_indirecto',
      difficulty: 2,
      passage: 'Ana: ¿Vienes a la fiesta el sábado?\nCarlos: No sé, todavía no he decidido. Tengo mucho trabajo esta semana.\nAna: Pues yo voy a llegar temprano para ayudar con la comida.\nCarlos: Vale, si termino el informe, iré también.',
      passageEn: "Ana: Are you coming to the party on Saturday?\nCarlos: I don't know, I haven't decided yet. I have a lot of work this week.\nAna: Well, I'm going to arrive early to help with the food.\nCarlos: Okay, if I finish the report, I'll come too.",
    },
    {
      type: 'translation_to_spanish',
      prompt: "Read the dialogue, then translate the reported command: 'The doctor told him not to exercise that week.'",
      word: 'hacer ejercicio',
      english: 'not to exercise',
      answer: 'La doctora le dijo que no hiciera ejercicio esa semana.',
      concept_id: 'estilo_indirecto',
      difficulty: 3,
      passage: 'Doctora: Debe tomar esta medicina cada ocho horas.\nPaciente: ¿Puedo seguir haciendo ejercicio?\nDoctora: No, no haga ejercicio esta semana. Ha estado muy estresado últimamente.\nPaciente: Entendido, gracias.',
      passageEn: "Doctor: You must take this medicine every eight hours.\nPatient: Can I keep exercising?\nDoctor: No, don't exercise this week. You've been very stressed lately.\nPatient: Understood, thank you.",
    },
    {
      type: 'fill_blank',
      prompt: 'Complete, applying the present-perfect → pluperfect backshift: "La doctora dijo que el paciente ___ muy estresado últimamente." (haber estado)',
      word: 'estar',
      english: 'had been',
      answer: 'había estado',
      concept_id: 'estilo_indirecto',
      difficulty: 2,
      passage: 'Doctora: Debe tomar esta medicina cada ocho horas.\nPaciente: ¿Puedo seguir haciendo ejercicio?\nDoctora: No, no haga ejercicio esta semana. Ha estado muy estresado últimamente.\nPaciente: Entendido, gracias.',
      passageEn: "Doctor: You must take this medicine every eight hours.\nPatient: Can I keep exercising?\nDoctor: No, don't exercise this week. You've been very stressed lately.\nPatient: Understood, thank you.",
    },
    {
      type: 'multiple_choice',
      prompt: 'From the dialogue above, complete the reported question: "El paciente preguntó si ___ seguir haciendo ejercicio."',
      word: 'poder',
      english: 'could',
      answer: 'podía',
      options: ['podía', 'puede', 'podrá', 'pudiera'],
      concept_id: 'estilo_indirecto',
      difficulty: 2,
      passage: 'Doctora: Debe tomar esta medicina cada ocho horas.\nPaciente: ¿Puedo seguir haciendo ejercicio?\nDoctora: No, no haga ejercicio esta semana. Ha estado muy estresado últimamente.\nPaciente: Entendido, gracias.',
      passageEn: "Doctor: You must take this medicine every eight hours.\nPatient: Can I keep exercising?\nDoctor: No, don't exercise this week. You've been very stressed lately.\nPatient: Understood, thank you.",
    },

    // ── nominalisation block (kept separate from estilo_indirecto; blocked before mixed review) ──
    {
      type: 'fill_blank',
      prompt: 'Read the passage, then complete: "El hecho de que la empresa ___ a cien empleados preocupa a todo el sector." (despedir → present perfect subjunctive)',
      word: 'despedir',
      english: 'has laid off',
      answer: 'haya despedido',
      concept_id: 'nominalisation',
      difficulty: 2,
      passage: 'El hecho de que la empresa haya despedido a cien empleados en un solo mes preocupa a todo el sector. Los sindicatos insisten en que la dirección reconsidere la decisión, mientras que el hecho de que las ganancias hayan subido un veinte por ciento este año resulta difícil de justificar ante tantos despidos. El que algunos directivos hayan recibido bonos millonarios mientras se recortaba personal solo ha empeorado la indignación pública. Cabe destacar que la junta se reunirá la próxima semana para discutir el asunto.',
      passageEn: "The fact that the company laid off a hundred employees in a single month worries the whole sector. The unions insist that management reconsider the decision, while the fact that profits rose twenty percent this year is hard to justify given so many layoffs. The fact that some executives received million-dollar bonuses while staff was being cut has only worsened the public outrage. It's worth noting that the board will meet next week to discuss the matter.",
    },
    {
      type: 'multiple_choice',
      prompt: "Based on the passage above, which mood does 'el hecho de que' normally take when the speaker is reacting to or commenting on something already known?",
      word: 'el hecho de que',
      english: 'the fact that',
      answer: 'subjunctive',
      options: ['indicative', 'subjunctive', 'imperative', 'conditional'],
      concept_id: 'nominalisation',
      difficulty: 1,
      passage: 'El hecho de que la empresa haya despedido a cien empleados en un solo mes preocupa a todo el sector. Los sindicatos insisten en que la dirección reconsidere la decisión, mientras que el hecho de que las ganancias hayan subido un veinte por ciento este año resulta difícil de justificar ante tantos despidos. El que algunos directivos hayan recibido bonos millonarios mientras se recortaba personal solo ha empeorado la indignación pública. Cabe destacar que la junta se reunirá la próxima semana para discutir el asunto.',
      passageEn: "The fact that the company laid off a hundred employees in a single month worries the whole sector. The unions insist that management reconsider the decision, while the fact that profits rose twenty percent this year is hard to justify given so many layoffs. The fact that some executives received million-dollar bonuses while staff was being cut has only worsened the public outrage. It's worth noting that the board will meet next week to discuss the matter.",
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, nominalising the clause: 'The fact that profits rose worries the unions.'",
      word: 'el hecho de que',
      english: 'the fact that',
      answer: 'El hecho de que las ganancias hayan subido preocupa a los sindicatos.',
      concept_id: 'nominalisation',
      difficulty: 3,
    },
    {
      type: 'error_correction',
      prompt: "Correct the error: 'El hecho de que él gasta tanto dinero le preocupa a su familia.'",
      word: 'gastar',
      english: 'spends',
      answer: 'El hecho de que él gaste tanto dinero le preocupa a su familia.',
      concept_id: 'nominalisation',
      difficulty: 3,
    },
    {
      type: 'fill_blank',
      prompt: 'Complete with the unknown-referent ("whoever") meaning of "el que": "El que ___ primero ganará el premio." (llegar)',
      word: 'llegar',
      english: 'arrives',
      answer: 'llegue',
      concept_id: 'nominalisation',
      difficulty: 2,
    },
    {
      type: 'translation_to_english',
      prompt: '¿Qué significa "el que" en esta oración: "El que vino ayer era mi primo"?',
      word: 'el que',
      english: 'the one who',
      answer: 'the one who (a specific, known person — indicative, not "whoever")',
      concept_id: 'nominalisation',
      difficulty: 2,
    },

    // ── gerund_advanced block (kept separate from nominalisation; blocked before mixed review) ──
    {
      type: 'fill_blank',
      prompt: 'Read the passage, then complete: "Llevo tres años ___ español." (estudiar, with llevar + time to express duration)',
      word: 'estudiar',
      english: 'studying',
      answer: 'estudiando',
      concept_id: 'gerund_advanced',
      difficulty: 1,
      passage: 'Llevo tres años estudiando español y todavía sigo aprendiendo cosas nuevas cada semana. Ayer, mientras caminaba por el parque, vi a un niño corriendo detrás de un perro que había escapado de su dueña. El niño gritaba llamando al perro, y este, sin hacerle caso, continuó corriendo hacia la calle. Por suerte, un hombre que estaba tomando café en una terraza cercana logró atraparlo justo a tiempo. La señora, agradeciéndole con lágrimas en los ojos, se llevó a su perro de vuelta a casa.',
      passageEn: "I've been studying Spanish for three years and I'm still learning new things every week. Yesterday, while I was walking through the park, I saw a boy running behind a dog that had escaped from its owner. The boy was shouting, calling the dog, and it, paying him no attention, kept running toward the street. Luckily, a man who was having coffee at a nearby terrace managed to catch it just in time. The woman, thanking him with tears in her eyes, took her dog back home.",
    },
    {
      type: 'multiple_choice',
      prompt: "Based on the passage, which construction expresses a continuing action, as in 'sigo aprendiendo cosas nuevas'?",
      word: 'seguir + gerundio',
      english: 'to keep on doing',
      answer: 'seguir + gerundio',
      options: ['seguir + gerundio', 'ser + gerundio', 'gerundio directly on the noun', 'estar + participio'],
      concept_id: 'gerund_advanced',
      difficulty: 1,
      passage: 'Llevo tres años estudiando español y todavía sigo aprendiendo cosas nuevas cada semana. Ayer, mientras caminaba por el parque, vi a un niño corriendo detrás de un perro que había escapado de su dueña. El niño gritaba llamando al perro, y este, sin hacerle caso, continuó corriendo hacia la calle. Por suerte, un hombre que estaba tomando café en una terraza cercana logró atraparlo justo a tiempo. La señora, agradeciéndole con lágrimas en los ojos, se llevó a su perro de vuelta a casa.',
      passageEn: "I've been studying Spanish for three years and I'm still learning new things every week. Yesterday, while I was walking through the park, I saw a boy running behind a dog that had escaped from its owner. The boy was shouting, calling the dog, and it, paying him no attention, kept running toward the street. Luckily, a man who was having coffee at a nearby terrace managed to catch it just in time. The woman, thanking him with tears in her eyes, took her dog back home.",
    },
    {
      type: 'error_correction',
      prompt: "Correct the classic English-analogy error: 'Perdí la caja conteniendo mis documentos.'",
      word: 'contener',
      english: 'containing',
      answer: 'Perdí la caja que contenía mis documentos.',
      concept_id: 'gerund_advanced',
      difficulty: 3,
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate using the adverbial gerund: 'The girl left the room crying.'",
      word: 'llorando',
      english: 'crying',
      answer: 'La niña salió llorando de la habitación.',
      concept_id: 'gerund_advanced',
      difficulty: 2,
      passage: 'Llevo tres años estudiando español y todavía sigo aprendiendo cosas nuevas cada semana. Ayer, mientras caminaba por el parque, vi a un niño corriendo detrás de un perro que había escapado de su dueña. El niño gritaba llamando al perro, y este, sin hacerle caso, continuó corriendo hacia la calle. Por suerte, un hombre que estaba tomando café en una terraza cercana logró atraparlo justo a tiempo. La señora, agradeciéndole con lágrimas en los ojos, se llevó a su perro de vuelta a casa.',
      passageEn: "I've been studying Spanish for three years and I'm still learning new things every week. Yesterday, while I was walking through the park, I saw a boy running behind a dog that had escaped from its owner. The boy was shouting, calling the dog, and it, paying him no attention, kept running toward the street. Luckily, a man who was having coffee at a nearby terrace managed to catch it just in time. The woman, thanking him with tears in her eyes, took her dog back home.",
    },
    {
      type: 'multiple_choice',
      prompt: 'Which sentence is grammatically correct in Spanish?',
      word: 'que tiene',
      english: 'that has',
      answer: 'Vi una mesa que tiene cuatro sillas.',
      options: ['Vi una mesa teniendo cuatro sillas.', 'Vi una mesa que tiene cuatro sillas.', 'Vi una mesa tenido cuatro sillas.', 'Vi una mesa tener cuatro sillas.'],
      concept_id: 'gerund_advanced',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: 'Complete using the lexicalized adjectival-gerund exception (the gerund follows the noun): "Cuidado con el aceite ___." (hervir)',
      word: 'hervir',
      english: 'boiling',
      answer: 'hirviendo',
      concept_id: 'gerund_advanced',
      difficulty: 2,
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch (July 2026) against SpanishDict,
// WordReference forums, Lawless Spanish, and established C1-level pedagogical
// grammar sources (Lingolia, Elon.io, Kwiziq) before writing:
// - Reported-speech tense backshift: presente→imperfecto, pretérito/
//   pretérito perfecto→pluscuamperfecto, futuro→condicional, all confirmed
//   against SpanishDict's "Indirect Speech in Spanish" guide and Lawless
//   Spanish's estilo indirecto page.
// - Reported yes/no questions with "preguntó si" + imperfect, and reported
//   wh-questions keeping the question word + imperfect with statement word
//   order — confirmed against Elon.io and mydailyspanish.com.
// - Reported commands: imperative replaced by (imperfect) subjunctive after
//   dijo que/pidió que when the reporting verb is past tense, and the dijo
//   que + indicative (statement) vs. + subjunctive (command) ambiguity —
//   confirmed against SpanishDict Answers ("The Subjunctive and Reported
//   Speech") and Elon.io's "Reporting Commands" page.
// - Time/place shifts (hoy→ese día, ayer→el día anterior, mañana→al día
//   siguiente, aquí→allí) and the "same-day reporting can skip the shift"
//   nuance — confirmed against mangolanguages.com and spanishenglish.com.
// - "El hecho de que" defaulting to subjunctive regardless of truth value,
//   with indicative reserved for asserting genuinely new information —
//   confirmed against WordReference Forums and SpanishDict Answers threads
//   specifically discussing this construction's mood variability.
// - "El que" + subjunctive ("the fact that" / unknown "whoever") vs. "el
//   que" + indicative ("the one who," a specific known referent) — confirmed
//   against Elon.io's nominalized-subjunctive-clauses page.
// - Gerund adverbial use (salió corriendo), estar+gerund progressive,
//   seguir/continuar+gerund for continuing action, and llevar+time+gerund
//   for duration — confirmed against spanish.academy and Kwiziq/Elon.io
//   pages specifically on llevar + gerundio.
// - The gerund's inability to modify a noun (the "-ing adjective" English-
//   analogy error, e.g. "caja conteniendo libros" is wrong; "caja que
//   contiene libros" is correct) — confirmed against a WordReference Forums
//   thread on this exact example and Lawless Spanish's gerund page.
// - The hirviendo/ardiendo (and colgando) lexicalized exceptions, which can
//   follow a noun as true adjectives unlike ordinary gerunds — confirmed
//   against espanolavanzado.com's dedicated "gerundio adjetival" page and a
//   WordReference Forums "Boiling Water" thread.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// estilo_indirecto, nominalisation, and gerund_advanced in
// src/content/grammar.js (same underlying facts, fuller walkthrough with
// added nuance — e.g. grammar.js's nominalisation card covers suffix-based
// nominalisation like crear→creación, which this lesson explicitly bridges
// to before covering the clausal el hecho de que / el que constructions)
// and does not contradict them.
