// Unit 32 — Register & Stance (C2)
// Covers: registro_formal_informal, modalizacion_epistemica, controladores_contacto
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit also
// follows ES.md's C2-specific framing: per DELE/Instituto Cervantes research,
// C2 is not primarily about learning new grammar structures — by this level
// nearly all of the grammar is already in place — it's about register
// control, discourse markers, and pragmatic nuance: sounding native, not
// just correct. This unit IS the register unit, and leans into that fully.
// Every Spanish claim below was verified against RAE (Diccionario
// panhispánico de dudas), Instituto Cervantes' Plan Curricular (Tácticas y
// estrategias pragmáticas, C1-C2 inventory), and reputable ELE/pragmatics
// sources before writing — see the audit note at the bottom of this file.

export default {
  sections: [
    {
      heading: 'The Four-Level Register System: Formal, Neutral, Informal, Colloquial',
      paragraphs: [
        "By C2, you already have almost every piece of Spanish grammar this site teaches. What separates a highly advanced learner from someone who sounds truly native isn't one more verb tense — it's register: the ability to reshape an entire sentence, not just swap a pronoun, depending on who you're talking to and how formal the situation is. You've actually already met this idea if you've browsed this site's idioms reference: every single idiom there is tagged on a four-way scale — colloquial, informal, neutral, formal — from the most casual slang to the most careful, polished phrasing. This unit puts that exact same four-way scale to work, but at the level of whole sentences and requests, not just fixed expressions.",
        "The clearest way to see register in action is to watch one request slide across all four levels. Imagine you need the same document from four different people. To your boss: ¿Podría usted enviarme el informe antes de las cinco, por favor? — formal, built on the conditional podría plus usted, maximally indirect and polite. To someone you don't know well: ¿Podría enviarme el informe antes de las cinco? — still polite and indirect, but usted is dropped since the verb form alone signals the same distance; call this neutral-formal. To a trusted coworker: ¿Puedes enviarme el informe antes de las cinco? — informal, present tense puedes, still a real question but far less hedged. To your best friend: Oye, ¿me pasas el informe ese antes de las cinco o qué? — colloquial, with the attention-grabber oye, the vague filler ese, and the blunt tag o qué. Same request, four entirely different sentences.",
        "Notice that tú vs. usted is only one ingredient here, and a fairly small one — it's covered on its own, grammatically, back in Unit 1. The bigger, C2-level skill is everything else that shifts alongside it: word choice (comprar vs. adquirir, casa vs. domicilio — see the related pares_registro_lexico concept), sentence length and subordination (formal register tolerates, even rewards, longer and more layered sentences), and above all the level of indirection. Formal Spanish routinely wraps a request in a conditional or a hedge — quisiera, ¿le importaría?, le agradecería que — treating direct imperatives or blunt questions as too abrupt. Colloquial Spanish does the opposite: it favors bluntness, fillers, slang address terms (tío, tía, colega), and even grammatically redundant emphatic pronouns (¿Puedes tú ayudarme con esto? adds tú purely for emphasis, not because the verb needs it).",
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
    {
      heading: 'Hedging Your Certainty: Epistemic Modalization',
      paragraphs: [
        "Epistemic modalization is the technical name for a very practical skill: signaling how sure you are about something, or that you're relaying a claim rather than personally vouching for it. Compare El vuelo se retrasó — a flat, unhedged statement of fact — with Al parecer, el vuelo se retrasó — \"Apparently, the flight was delayed,\" which reports the same information while explicitly distancing the speaker from full certainty. Nothing about the underlying grammar changes; what changes is the speaker's stance toward their own claim.",
        "Al parecer and según parece both translate as \"apparently\" or \"it seems that,\" and function as close synonyms: both signal that the information comes from indirect evidence, secondhand report, or general impression rather than something the speaker witnessed or confirmed firsthand. Según parece leans slightly more formal/written, and can front a sentence the same way al parecer does: Según parece, cambiarán la fecha de la reunión (\"It seems they'll change the meeting date\").",
        'Se supone que ("it\'s supposed to / it\'s assumed that") does something subtly different: it points to an expectation, plan, or common assumption — often one the speaker is quietly questioning or about to contradict. Se supone que la tienda abre a las nueve is a neutral statement of an assumed fact, but the same phrase very often carries a note of mild criticism or disappointment when reality violates the assumption: Se supone que ibas a llamarme ("You were supposed to call me" — and didn\'t).',
        'Presuntamente ("allegedly") is the most register-specific of the four, and the one most worth using carefully. It\'s strongly tied to legal and journalistic register, precisely because it protects the presunción de inocencia (presumption of innocence): a news report says el sospechoso, presuntamente implicado en el fraude rather than flatly asserting guilt before any conviction. Reach for it in casual conversation about an everyday claim — who ate the last slice of pizza — and it will land as comically overformal or ironic rather than genuinely cautious.',
      ],
      examples: [
        { es: 'Al parecer, el vuelo se retrasará dos horas.', en: 'Apparently, the flight will be delayed two hours.' },
        { es: 'Según parece, el acuerdo se firmará la próxima semana.', en: 'It seems that the agreement will be signed next week.' },
        { es: 'Se supone que la tienda abre a las nueve.', en: 'The shop is supposed to open at nine.' },
        { es: 'Se supone que ibas a llamarme anoche.', en: "You were supposed to call me last night. (mild reproach — the expectation wasn't met)" },
        { es: 'El sospechoso, presuntamente implicado en el fraude, negó los cargos.', en: 'The suspect, allegedly involved in the fraud, denied the charges.' },
      ],
      commonMistakes: [
        "Treating all four hedges as fully interchangeable — presuntamente belongs to legal/journalistic register specifically; swapping it into casual talk about a friend eating the last cookie sounds like a joke, not genuine caution. Al parecer or por lo que parece would be the natural everyday choice instead.",
        "Reading se supone que as pure neutral information every time — very often it carries an implied 'and that didn't happen' or 'and I'm not so sure,' especially in spoken Spanish. Missing that undertone means missing the speaker's actual attitude.",
        'Forgetting these hedges do the same job — signaling inference or reduced certainty — as tools taught elsewhere, like the future/conditional of probability (será, sería tarde). Different structure, same underlying pragmatic function: distancing the speaker from full commitment to the claim.',
      ],
    },
    {
      heading: 'Staying Connected: Phatic Contact Controllers',
      paragraphs: [
        "Contact controllers (also called phatic markers) are words and phrases that add almost no propositional content of their own — they don't tell you a new fact — but instead manage the conversation itself: checking that the listener is still following, inviting agreement, or grabbing attention before the real point arrives. This is squarely a spoken, informal-register phenomenon, which makes it a deliberate contrast with the first section of this unit: where formal register was about careful distance and indirection, controladores de contacto are themselves markers of informal, engaged, face-to-face conversation. Using them in a formal report or essay (see generos_discursivos_formales) tends to sound jarringly out of place.",
        '¿Verdad? and ¿no? both function like English tag questions — "right?", "isn\'t that so?" — inviting the listener to confirm or agree: Hace un día precioso, ¿verdad? A useful, if not perfectly rigid, distinction: ¿no? tends to feel quicker and more casual, while ¿verdad? sits a touch more neutral and pairs naturally with either an affirmative or a negative statement just before it.',
        'Fíjate ("get this," "just imagine," literally "notice/pay attention") draws the listener\'s focus to something you\'re about to say is notable or surprising: Fíjate, al final ganamos el partido. Oye and its formal counterpart oiga both grab someone\'s attention before you actually speak — and here, even among these informal-register tools, there\'s a small register split of its own: oye is the tú-register version, used with friends, peers, or anyone you\'d already address informally, while oiga is the usted-register equivalent, used with a stranger, an elder, or anyone you\'d formally address — Oye, ¿tienes hora? versus Oiga, perdone, ¿sabe dónde está la estación?',
        '¿Sabes? ("you know?") checks rapport and comprehension more than it asks a literal question — Me costó mucho decidirlo, ¿sabes? isn\'t really asking whether the listener has information; it\'s inviting them to stay engaged and empathize. Across all of these markers, the same warning applies: translating them word-for-word into English badly misses their function. They\'re conversational glue holding a spoken exchange together, not extra facts being asserted.',
      ],
      examples: [
        { es: 'Hace mucho calor hoy, ¿verdad?', en: "It's very hot today, isn't it?" },
        { es: 'Vas a venir a la fiesta, ¿no?', en: "You're coming to the party, right?" },
        { es: 'Fíjate, al final resultó que era todo un malentendido.', en: 'Get this — it turned out to all be a misunderstanding.' },
        { es: 'Oye, ¿tienes un momento para hablar? — Oiga, perdone, ¿sabe dónde está la estación?', en: 'Hey, do you have a moment to talk? — Excuse me, sir, do you know where the station is?' },
        { es: '¿Sabes? Creo que deberíamos replantear el plan.', en: 'You know? I think we should rethink the plan.' },
      ],
      commonMistakes: [
        'Answering these as if they were literal, content-bearing questions — a native listener rarely expects a real yes/no answer to ¿verdad? or ¿no?; the expected response is agreement, a nod, or a continuation of the conversation.',
        'Using oye with a stranger, an official, or a boss instead of the usted-register oiga — even within this set of overwhelmingly informal markers, that one pair still tracks the tú/usted distance split.',
        'Sprinkling fíjate, oye, or ¿sabes? into formal writing (an informe, an ensayo argumentativo) — these belong almost exclusively to spoken or informal written registers (chat, dialogue) and read as strikingly casual in a formal document.',
      ],
    },
  ],

  vocab: [
    { es: 'quisiera', en: 'I would like (formal, softened with the conditional)', example: 'Quisiera hacerle una pregunta, si no le importa.', exampleEn: "I would like to ask you a question, if you don't mind." },
    { es: 'le agradecería que', en: 'I would be grateful if... (formal)', example: 'Le agradecería que me confirmara la cita.', exampleEn: 'I would be grateful if you could confirm the appointment.' },
    { es: '¿te importaría?', en: 'would you mind? (neutral-informal, polite)', example: '¿Te importaría cerrar la ventana?', exampleEn: 'Would you mind closing the window?' },
    { es: '¿me haces un favor?', en: 'can you do me a favor? (informal)', example: '¿Me haces un favor y me pasas el móvil?', exampleEn: 'Can you do me a favor and hand me my phone?' },
    { es: 'tío / tía', en: 'dude, mate (colloquial address term, Spain)', example: 'Tío, no te vas a creer lo que pasó.', exampleEn: "Dude, you're not going to believe what happened." },
    { es: 'colega', en: 'buddy, pal (informal/colloquial)', example: 'Oye, colega, ¿me echas una mano con esto?', exampleEn: 'Hey, buddy, can you give me a hand with this?' },
    { es: 'al parecer', en: 'apparently (neutral epistemic hedge)', example: 'Al parecer, el tren llega con retraso.', exampleEn: 'Apparently, the train is running late.' },
    { es: 'según parece', en: 'it seems that, apparently (neutral, slightly more formal/written)', example: 'Según parece, cambiarán la fecha de la reunión.', exampleEn: "It seems they'll change the date of the meeting." },
    { es: 'se supone que', en: "it's supposed to / it's assumed that (neutral; often implies an unmet expectation)", example: 'Se supone que la tienda abre a las nueve.', exampleEn: 'The shop is supposed to open at nine.' },
    { es: 'presuntamente', en: 'allegedly (formal, legal/journalistic register)', example: 'El conductor, presuntamente ebrio, provocó el accidente.', exampleEn: 'The driver, allegedly drunk, caused the accident.' },
    { es: '¿verdad?', en: "right?, isn't that so? (informal tag question)", example: 'Hace un día precioso, ¿verdad?', exampleEn: "It's a beautiful day, isn't it?" },
    { es: '¿no?', en: 'right? (informal, especially quick/casual tag question)', example: 'Ya has terminado el informe, ¿no?', exampleEn: "You've already finished the report, right?" },
    { es: 'fíjate', en: 'get this, just imagine (informal, attention-grabbing)', example: 'Fíjate, al final ganamos el partido.', exampleEn: 'Get this — we ended up winning the game.' },
    { es: 'oye / oiga', en: 'hey / excuse me (oye = tú-register, oiga = usted-register)', example: 'Oye, ¿tienes hora? — Oiga, perdone, ¿sabe dónde está la estación?', exampleEn: 'Hey, do you have the time? — Excuse me, sir, do you know where the station is?' },
    { es: '¿sabes?', en: 'you know? (informal, checks rapport/comprehension)', example: 'Me costó mucho decidirlo, ¿sabes?', exampleEn: "It was hard for me to decide, you know?" },
  ],

  practice: [
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

    // ── modalizacion_epistemica block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete, keeping a neutral hedge (not a legal/journalistic one): '___, el vuelo se retrasará dos horas.'", word: 'al parecer', english: 'apparently', answer: 'Al parecer', options: ['Al parecer', 'Presuntamente', 'Se supone que no', 'Es cierto que'], concept_id: 'modalizacion_epistemica', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Se supone que ibas a llamarme anoche"?', word: 'se supone que', english: "you were supposed to (implying you didn't)", answer: 'You were supposed to call me last night. (implying a broken expectation)', concept_id: 'modalizacion_epistemica', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'El sospechoso está ___ implicado en el fraude.'",
      word: 'presuntamente',
      english: 'allegedly (legal/journalistic register)',
      answer: 'presuntamente',
      concept_id: 'modalizacion_epistemica',
      difficulty: 2,
      passage: 'Según las primeras informaciones, el sospechoso está presuntamente implicado en el fraude que se descubrió la semana pasada. Al parecer, la empresa llevaba meses perdiendo dinero sin que nadie lo notara. Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control. La policía no ha confirmado nada oficialmente todavía.',
      passageEn: 'According to initial reports, the suspect is allegedly involved in the fraud discovered last week. Apparently, the company had been losing money for months without anyone noticing. The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight. Police have not officially confirmed anything yet.',
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto, ¿por qué el periodista usa 'presuntamente' en vez de afirmar directamente la culpabilidad del sospechoso?",
      word: 'presuntamente',
      english: 'allegedly',
      answer: 'Porque protege la presunción de inocencia hasta que se demuestre lo contrario',
      options: [
        'Porque protege la presunción de inocencia hasta que se demuestre lo contrario',
        'Porque "presuntamente" significa exactamente lo mismo que "culpable"',
        'Porque es una palabra más corta y fácil de escribir',
        'Porque el periodista ya sabe que el sospechoso es inocente',
      ],
      concept_id: 'modalizacion_epistemica',
      difficulty: 3,
      passage: 'Según las primeras informaciones, el sospechoso está presuntamente implicado en el fraude que se descubrió la semana pasada. Al parecer, la empresa llevaba meses perdiendo dinero sin que nadie lo notara. Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control. La policía no ha confirmado nada oficialmente todavía.',
      passageEn: 'According to initial reports, the suspect is allegedly involved in the fraud discovered last week. Apparently, the company had been losing money for months without anyone noticing. The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight. Police have not officially confirmed anything yet.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control.'",
      word: 'se supone que... según parece',
      english: 'it was supposed to... it seems',
      answer: "The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight.",
      concept_id: 'modalizacion_epistemica',
      difficulty: 3,
      passage: 'Según las primeras informaciones, el sospechoso está presuntamente implicado en el fraude que se descubrió la semana pasada. Al parecer, la empresa llevaba meses perdiendo dinero sin que nadie lo notara. Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control. La policía no ha confirmado nada oficialmente todavía.',
      passageEn: 'According to initial reports, the suspect is allegedly involved in the fraud discovered last week. Apparently, the company had been losing money for months without anyone noticing. The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight. Police have not officially confirmed anything yet.',
    },
    { type: 'translation_to_spanish', prompt: "Translate: 'Apparently, they'll change the date of the meeting.'", english: "Apparently, they'll change the date of the meeting.", answer: 'Según parece, cambiarán la fecha de la reunión.', word: 'según parece', concept_id: 'modalizacion_epistemica', difficulty: 2 },
    {
      type: 'error_correction',
      prompt: "Fix the register mismatch: 'Presuntamente, mi hermano se comió la última galleta.' (a casual, everyday claim — not a legal/journalistic one)",
      word: 'al parecer',
      english: 'apparently (the natural everyday hedge)',
      answer: 'Al parecer, mi hermano se comió la última galleta.',
      concept_id: 'modalizacion_epistemica',
      difficulty: 3,
    },

    // ── controladores_contacto block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which phrase checks that the listener is following along/agrees, tag-question style?', word: '¿verdad?', english: "right? / isn't that so?", answer: 'Hace frío hoy, ¿verdad?', options: ['Hace frío hoy, ¿verdad?', 'Hace frío hoy, o sea.', 'Hace frío hoy, por lo tanto.', 'Hace frío hoy, es más.'], concept_id: 'controladores_contacto', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Fíjate, al final resultó que era todo un malentendido"?', word: 'fíjate', english: 'get this / just imagine', answer: 'Get this — it turned out to all be a misunderstanding.', concept_id: 'controladores_contacto', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la primera línea de Marta: '___, ¿sabes que Diego se va a vivir a Chile?'",
      word: 'oye',
      english: 'hey (tú-register attention-getter)',
      answer: 'Oye',
      concept_id: 'controladores_contacto',
      difficulty: 1,
      passage: 'Marta: Oye, ¿sabes que Diego se va a vivir a Chile?\nLaura: ¿En serio? Fíjate, no me lo esperaba para nada.\nMarta: Ya llevaba tiempo pensándolo, ¿no? Siempre decía que quería cambiar de aires.\nLaura: Sí, tienes razón. Va a ser una experiencia increíble para él, ¿verdad?\nMarta: Seguro que sí. Aunque le va a costar despedirse de todos, ¿sabes?',
      passageEn: "Marta: Hey, did you know Diego is going to live in Chile?\nLaura: Really? Get this, I didn't expect that at all.\nMarta: He'd been thinking about it for a while, right? He always said he wanted a change of scenery.\nLaura: Yeah, you're right. It's going to be an incredible experience for him, don't you think?\nMarta: For sure. Although it's going to be hard for him to say goodbye to everyone, you know?",
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, Marta dice: 'Ya llevaba tiempo pensándolo, ¿no?' ¿Qué función cumple '¿no?' aquí?",
      word: '¿no?',
      english: 'right? (seeking agreement, not literal information)',
      answer: 'Invita a Laura a confirmar o estar de acuerdo, no pide información nueva',
      options: [
        'Invita a Laura a confirmar o estar de acuerdo, no pide información nueva',
        'Pregunta si Laura sabe la respuesta correcta',
        'Niega lo que se acaba de decir',
        'Introduce una idea completamente nueva y sin relación',
      ],
      concept_id: 'controladores_contacto',
      difficulty: 2,
      passage: 'Marta: Oye, ¿sabes que Diego se va a vivir a Chile?\nLaura: ¿En serio? Fíjate, no me lo esperaba para nada.\nMarta: Ya llevaba tiempo pensándolo, ¿no? Siempre decía que quería cambiar de aires.\nLaura: Sí, tienes razón. Va a ser una experiencia increíble para él, ¿verdad?\nMarta: Seguro que sí. Aunque le va a costar despedirse de todos, ¿sabes?',
      passageEn: "Marta: Hey, did you know Diego is going to live in Chile?\nLaura: Really? Get this, I didn't expect that at all.\nMarta: He'd been thinking about it for a while, right? He always said he wanted a change of scenery.\nLaura: Yeah, you're right. It's going to be an incredible experience for him, don't you think?\nMarta: For sure. Although it's going to be hard for him to say goodbye to everyone, you know?",
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Laura: 'Va a ser una experiencia increíble para él, ___?'",
      word: '¿verdad?',
      english: "right?, isn't that so?",
      answer: '¿verdad?',
      concept_id: 'controladores_contacto',
      difficulty: 1,
      passage: 'Marta: Oye, ¿sabes que Diego se va a vivir a Chile?\nLaura: ¿En serio? Fíjate, no me lo esperaba para nada.\nMarta: Ya llevaba tiempo pensándolo, ¿no? Siempre decía que quería cambiar de aires.\nLaura: Sí, tienes razón. Va a ser una experiencia increíble para él, ¿verdad?\nMarta: Seguro que sí. Aunque le va a costar despedirse de todos, ¿sabes?',
      passageEn: "Marta: Hey, did you know Diego is going to live in Chile?\nLaura: Really? Get this, I didn't expect that at all.\nMarta: He'd been thinking about it for a while, right? He always said he wanted a change of scenery.\nLaura: Yeah, you're right. It's going to be an incredible experience for him, don't you think?\nMarta: For sure. Although it's going to be hard for him to say goodbye to everyone, you know?",
    },
    { type: 'translation_to_spanish', prompt: "Translate, using an informal contact-controller ending: 'You already know the answer, right?'", english: 'You already know the answer, right?', answer: 'Ya sabes la respuesta, ¿no?', word: '¿no?', concept_id: 'controladores_contacto', difficulty: 2 },
    {
      type: 'error_correction',
      prompt: "Fix the register mismatch: a customer says to a stranger clerk they've never met: 'Oye, ¿sabe dónde está la salida?' (mixing the tú-register attention-getter with the usted verb form)",
      word: 'oiga',
      english: 'excuse me (usted-register attention-getter)',
      answer: 'Oiga, ¿sabe dónde está la salida?',
      concept_id: 'controladores_contacto',
      difficulty: 3,
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - registro_formal_informal: the four-way register scale (formal, neutral,
//   informal, colloquial) matching this site's own idioms.js register field;
//   the request spectrum from ¿podría usted...? through ¿me pasas...?, and
//   that register control involves word choice, sentence length/
//   subordination, and level of indirection, not just tú/usted — checked
//   against LanguageTool's "Registro formal o informal" guide, the CVC
//   (Centro Virtual Cervantes) Didactired "Tabla de diferencias entre el
//   registro informal y el formal," and RAE's Diccionario panhispánico de
//   dudas entry on usted (formality/distance function). Matches the existing
//   GRAMMAR_CARDS entry for registro_formal_informal in src/content/
//   grammar.js (same core examples: ¿podría usted...?/¿puede.../¿puedes.../
//   se ruega a los señores pasajeros).
// - modalizacion_epistemica: al parecer / según parece as near-synonymous
//   evidential/epistemic hedges signaling inference or secondhand
//   information rather than firsthand certainty; se supone que marking an
//   assumption that can carry an implied unmet expectation; presuntamente as
//   specifically legal/journalistic register tied to presunción de
//   inocencia — checked against the general linguistic definition of
//   modalidad epistémica (Wikipedia ES summary of the pragmatic/semantic
//   concept: speaker's stance toward the dictum) and against journalism-
//   ethics sources on "presuntamente" and presumption of innocence in
//   Spanish-language reporting. Matches the existing GRAMMAR_CARDS entry for
//   modalizacion_epistemica in src/content/grammar.js.
// - controladores_contacto: ¿verdad?/¿no? as confirmation-seeking tag
//   questions; fíjate as an attention-directing marker; oye/oiga as a
//   tú-register/usted-register attention-getting pair; ¿sabes? as a
//   rapport-checking marker with low literal content; the overarching
//   "phatic function" (maintenance of interlocutive attention/contact)
//   framing — checked against academic descriptions of "marcadores de
//   control de contacto" (PRESEEA-corpus studies on ¿no?/¿verdad?/¿cierto?
//   as interrogative contact-control markers, and pragmatics literature
//   describing oye/mira/fíjate/escucha as affirmative contact-control forms
//   fulfilling a phatic, attention-maintaining function) and a direct
//   comparison of "oye" vs. "oiga" formality/addressee-age usage notes.
//   Matches the existing GRAMMAR_CARDS entry for controladores_contacto in
//   src/content/grammar.js.
// - General C2 framing (register/pragmatics, not new grammar, as the core
//   C2 skill) checked against Instituto Cervantes' Plan Curricular, "6.
//   Tácticas y estrategias pragmáticas. Inventario. C1-C2," which places
//   register marking (marcas de registro) as increasingly dense at C1 and
//   especially C2, alongside field/mode discourse features.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// registro_formal_informal, modalizacion_epistemica, and
// controladores_contacto in src/content/grammar.js (same facts, fuller
// C2-paced walkthrough with original passages) and does not contradict them.
