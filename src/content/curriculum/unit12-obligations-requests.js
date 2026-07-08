// Unit 12 — Obligations & Requests (A2)
// Covers: modal_verbs, obligation_infinitive
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict and StudySpanish-adjacent
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked. This content is
// written to be consistent with (not contradictory to) the existing
// modal_verbs and obligation_infinitive entries in src/content/grammar.js
// and functions/_lib/concepts.js.

export default {
  sections: [
    {
      heading: 'Poder, Querer, Deber: Verbs That Need a Partner',
      paragraphs: [
        "So far almost every verb you've learned has stood on its own: hablo, como, vivo. This lesson introduces a small group of verbs that almost never stand alone — they're always paired with a second verb in its plain, unconjugated infinitive form (the -ar/-er/-ir form you'd find in a dictionary). English does the same thing: \"I can speak,\" \"I want to eat,\" \"I should study\" all pair a helper verb with a plain second verb. Spanish calls this pattern conjugated modal verb + infinitive, and the three you'll use constantly are poder (can / to be able to), querer (to want), and deber (should / must).",
        "Poder and querer are both stem-changing in the present tense — the middle vowel of the stem shifts in every form except nosotros/vosotros. Poder changes o → ue: puedo, puedes, puede, podemos, podéis, pueden. Querer changes e → ie: quiero, quieres, quiere, queremos, queréis, quieren. Deber, by contrast, is a perfectly regular -er verb with no stem change at all: debo, debes, debe, debemos, debéis, deben. Whichever one you conjugate, the verb that follows always stays in the infinitive, untouched: Puedo hablar (I can speak), Quiero comer (I want to eat), Debo estudiar (I should study) — never puedo hablo or quiero como.",
        'Meaning-wise, poder covers ability or permission ("I can" in the sense of "I\'m able to" or "I\'m allowed to"), querer covers desire ("I want to"), and deber covers a recommendation or moral "should" — closer to English "ought to" than a hard rule. Deber is the softest of the three obligation-flavored verbs you\'ll meet in this unit; it suggests what\'s advisable or right, not what\'s strictly forced by circumstance. You\'ll meet its stronger cousin, tener que, later in this same lesson.',
      ],
      examples: [
        { es: 'Puedo ayudarte esta tarde.', en: 'I can help you this afternoon.' },
        { es: '¿Puedes venir a la fiesta?', en: 'Can you come to the party?' },
        { es: 'Quiero aprender a cocinar.', en: 'I want to learn to cook.' },
        { es: 'Ella no quiere salir hoy.', en: "She doesn't want to go out today." },
        { es: 'Debes descansar más.', en: 'You should rest more.' },
        { es: 'Nosotros podemos terminarlo mañana.', en: 'We can finish it tomorrow. (podemos — no stem change for nosotros)' },
      ],
      commonMistakes: [
        "Don't conjugate the second verb — after a modal verb like poder, querer, or deber, the following verb always stays in its plain infinitive form: Puedo hablar, not Puedo hablo.",
        'Remember the stem change disappears for nosotros/vosotros: podemos and queremos keep the o and e (not puedemos or quieremos), even though puedo and quiero change.',
        'Deber (without de) is for obligation/recommendation — don\'t confuse it yet with deber de, which is a completely different meaning (probability, "must be") covered later in this lesson.',
      ],
    },
    {
      heading: 'Poder vs. Saber: Two Different Ideas of "Can"',
      paragraphs: [
        'English uses "can" for two genuinely different ideas, and Spanish keeps them apart. Compare: "I can swim" (I know how — it\'s a learned skill) versus "I can\'t swim today" (the pool is closed — a circumstantial fact about right now, nothing to do with skill). Spanish has a dedicated verb for the first idea: saber + infinitive, used specifically for learned skills and know-how. Poder + infinitive covers the second idea: physical or circumstantial ability, or permission, at a given moment.',
        "Sé nadar means \"I know how to swim\" — you learned the skill at some point and still have it, full stop, regardless of today's circumstances. No puedo nadar hoy means \"I can't swim today\" — nothing about your ability as a swimmer, just today's situation (maybe the pool's closed, maybe you're injured). You can absolutely combine them in the same breath: Sé nadar, pero hoy no puedo nadar — \"I know how to swim, but I can't (right now) swim today.\"",
      ],
      examples: [
        { es: '¿Sabes tocar la guitarra?', en: 'Do you know how to play guitar? (learned skill)' },
        { es: 'Sé conducir, pero hoy no puedo conducir — el coche está averiado.', en: "I know how to drive, but I can't drive today — the car is broken. (skill vs. circumstance)" },
        { es: 'Mi hija ya sabe leer.', en: 'My daughter already knows how to read.' },
        { es: '¿Puedo entrar?', en: 'May I come in? (asking permission, not skill)' },
      ],
      commonMistakes: [
        'Don\'t use poder for a learned skill — "¿Puedes nadar?" sounds like you\'re asking whether the person is physically capable right now (Is the pool open? Are you hurt?), not whether they\'ve ever learned to swim. For the skill question, use "¿Sabes nadar?"',
        "Don't use saber for permission or momentary ability — \"¿Sé entrar?\" is not correct Spanish for \"May I come in?\"; that's always poder: ¿Puedo entrar?",
      ],
    },
    {
      heading: 'Tener Que vs. Hay Que: Whose Job Is It?',
      paragraphs: [
        "Now for the heart of this unit: two very common ways to express obligation that look similar but answer a different question — who has to do this? Tener que + infinitive names a specific person's obligation. Because tener is a regular conjugated verb here (tengo, tienes, tiene, tenemos, tenéis, tienen), tener que always tells you exactly whose job it is: Tengo que trabajar (I have to work), Tienes que estudiar (You have to study), Tienen que llegar temprano (They have to arrive early). It's the Spanish equivalent of English \"[someone] has to…\"",
        'Hay que + infinitive is different: it never names anyone. It\'s built from hay, the same invariable form of haber you already know from "hay un banco" ("there is a bank") — and just like hay itself, hay que never changes no matter who\'s involved: not "hayo que," not "has que," always hay que. It expresses a general rule, a social expectation, or "what one must do" without pinning the obligation on a specific subject: Hay que llegar a tiempo ("One must arrive on time" / "You have to arrive on time" as a general rule for everyone). English often translates hay que with a generic "you," "one," or "we," precisely because no particular person is named in the Spanish.',
        "Put side by side, the contrast becomes clear: Tengo que estudiar esta noche (I, specifically, have to study tonight — maybe I have an exam) versus Para aprender un idioma, hay que practicar todos los días (To learn a language, one has to practice every day — a general truth that applies to anyone learning a language, not a personal errand). If you can point to exactly who's on the hook, reach for tener que. If you're stating a rule, a piece of advice, or something true for people in general, reach for hay que.",
      ],
      examples: [
        { es: 'Tengo que terminar este informe hoy.', en: 'I have to finish this report today. (my specific obligation)' },
        { es: '¿Tienes que trabajar el sábado?', en: 'Do you have to work on Saturday?' },
        { es: 'Hay que respetar las normas del edificio.', en: 'One must respect the building rules. (general, no one named)' },
        { es: 'Para estar en forma, hay que hacer ejercicio.', en: 'To be in shape, you have to exercise. (general advice, applies to anyone)' },
        { es: 'Nosotros tenemos que salir a las ocho; en general, hay que salir temprano para evitar el tráfico.', en: 'We have to leave at eight; in general, one has to leave early to avoid traffic. (specific vs. general, in the same sentence)' },
      ],
      commonMistakes: [
        'Hay que never takes a subject — "Ella hay que trabajar" is incorrect. If you can name who has the obligation, you need tener que instead: Ella tiene que trabajar.',
        'Don\'t conjugate hay que to match a person — it has exactly one form, hay que, no matter who is involved, unlike tener que, which changes with the subject (tengo, tienes, tiene…).',
        "Don't reach for hay que just because a sentence sounds formal — the test is whether a specific person is named, not how formal the sentence feels. \"Tengo que ir al médico\" stays tener que even though it's a serious, personal obligation.",
      ],
    },
    {
      heading: 'Deber vs. Tener Que: Two Strengths of "Must"',
      paragraphs: [
        'You now have two verbs that can both translate as an obligation in English — deber and tener que — and it helps to know they carry different weight. Deber (from the first section) expresses a softer, more moral or advisable obligation: what\'s the right thing to do, what\'s recommended, what you ought to do. Tener que expresses a stronger, more externally-imposed obligation: a real requirement coming from outside circumstances — a deadline, a rule, someone else\'s demand — not just a personal sense of "should."',
        'Compare Debes llamar a tu madre ("You should call your mother" — good advice, the morally right thing to do, but nothing forces it) with Tienes que llamar a tu madre antes de las cinco, o se preocupará ("You have to call your mother before five, or she\'ll worry" — there\'s a real, external consequence attached). Both are common and correct; the choice signals how strong the obligation actually is.',
        'The negatives split even more sharply, and this is a place English speakers often get tripped up because English "don\'t have to" and "shouldn\'t" already feel similar. No tener que means there\'s no obligation at all — you\'re free not to do it: No tienes que venir si no quieres ("You don\'t have to come if you don\'t want to" — it\'s entirely optional). No deber means it would be wrong or unwise to do it — an actual recommendation against it: No debes mentir ("You shouldn\'t lie" — a moral warning, not a note about whether it\'s optional).',
        "One more useful sighting: you'll sometimes see deber de + infinitive rather than plain deber + infinitive. That small de changes the meaning entirely — deber de expresses probability or a guess (\"must be\" in the sense of \"I bet…\"), not obligation: Debe de ser tarde (\"It must be late\" — a guess about the time, not advice to anyone). Some native speakers use deber (without de) for probability too, and careful writers avoid deber de for actual obligation — but for now, just recognize that deber de ≈ probability, while deber ≈ obligation, so you're not thrown off when you encounter the de version in the wild.",
      ],
      examples: [
        { es: 'Debes comer más verduras.', en: 'You should eat more vegetables. (advice)' },
        { es: 'Tienes que presentar el pasaporte en el aeropuerto.', en: 'You have to show your passport at the airport. (external requirement)' },
        { es: 'No tienes que traer nada; nosotros llevamos la comida.', en: "You don't have to bring anything; we're bringing the food. (no obligation — optional)" },
        { es: 'No debes hablar así con tus abuelos.', en: "You shouldn't talk to your grandparents that way. (moral recommendation against it)" },
        { es: 'Juan no contesta el teléfono — debe de estar durmiendo.', en: "Juan isn't answering the phone — he must be sleeping. (deber de = probability, not obligation)" },
      ],
      commonMistakes: [
        "Don't treat no tener que and no deber as interchangeable — no tienes que ir means going is optional (no obligation either way), while no debes ir means going would be a mistake (an actual recommendation not to).",
        'Deber de + infinitive is about probability ("must be"), not obligation — don\'t confuse it with plain deber + infinitive, which is the obligation/advice one.',
        "Tener que signals a stronger, externally-imposed obligation than deber — if you want to soften a suggestion into gentle advice rather than a hard requirement, deber is usually the better choice.",
      ],
    },
    {
      heading: 'Making Requests: ¿Puedes…? and ¿Podría…?',
      paragraphs: [
        'Now that you can talk about obligations, it\'s a short step to making requests — asking someone else to do something for you. The simplest and most common way is a question built on poder: ¿Puedes ayudarme? ("Can you help me?") to someone you\'d address as tú, or ¿Puede ayudarme? to someone you\'d address as usted. This is exactly the poder + infinitive pattern from the first section, just turned into a question — no new grammar required, only a question mark and a rising intonation.',
        "Querer works the same way for offers and requests: ¿Quieres un café? (\"Do you want a coffee?\") or ¿Quieres ayudarme? (\"Do you want to help me?\" — a soft way to ask a favor). And you'll very often hear the fixed polite phrase quisiera (\"I would like…\") used instead of quiero in shops, restaurants, and with strangers — Quisiera un café, por favor sounds noticeably more polite than the blunter Quiero un café. For now, just recognize quisiera as a set, more courteous stand-in for quiero when you're asking for something from someone you don't know well; you'll learn exactly how it's built later on.",
        "Combining what you've learned: politeness in Spanish requests often comes from the choice of verb and pronoun (usted vs. tú, quisiera vs. quiero) more than from adding extra words the way English piles on \"would you mind\" or \"could you possibly.\" A simple ¿Puede ayudarme, por favor? said to a stranger, with usted and por favor, already lands as fully polite.",
      ],
      examples: [
        { es: '¿Puedes pasarme la sal?', en: 'Can you pass me the salt? (informal)' },
        { es: '¿Puede usted ayudarme con esto?', en: 'Can you (formal) help me with this?' },
        { es: '¿Quieres venir con nosotros?', en: 'Do you want to come with us?' },
        { es: 'Quisiera una mesa para dos, por favor.', en: 'I would like a table for two, please. (polite, to a stranger)' },
        { es: '¿Puede repetir eso, por favor?', en: 'Could you repeat that, please? (formal request)' },
      ],
      commonMistakes: [
        'Don\'t default to tú when asking a stranger or someone in a formal role for a favor — ¿Puedes ayudarme? to a bank clerk or police officer can sound overly familiar; ¿Puede ayudarme? (usted) is the safer, more polite choice.',
        "Quisiera isn't just a fancier version of quiero to memorize as a whole different verb — it's the same verb querer, used in a special polite form. You don't need to produce it yet; just recognize it as a courteous \"I would like\" when you hear or read it.",
      ],
    },
  ],

  vocab: [
    { es: 'poder', en: 'to be able to / can', example: '¿Puedes ayudarme un momento?', exampleEn: 'Can you help me for a moment?' },
    { es: 'querer', en: 'to want', example: 'Quiero viajar a España.', exampleEn: 'I want to travel to Spain.' },
    { es: 'deber', en: 'should / must (advice)', example: 'Debes dormir más.', exampleEn: 'You should sleep more.' },
    { es: 'saber', en: 'to know how to (skill)', example: 'Sé nadar desde niño.', exampleEn: "I've known how to swim since I was a kid." },
    { es: 'tener que', en: 'to have to (personal obligation)', example: 'Tengo que hacer la compra hoy.', exampleEn: 'I have to do the shopping today.' },
    { es: 'hay que', en: 'one must / it is necessary to (general)', example: 'Hay que llegar puntual a las reuniones.', exampleEn: 'One must arrive on time to meetings.' },
    { es: 'necesitar', en: 'to need', example: 'Necesito descansar un poco.', exampleEn: 'I need to rest a little.' },
    { es: 'permiso', en: 'permission', example: 'Pedí permiso para salir temprano.', exampleEn: 'I asked for permission to leave early.' },
    { es: 'favor', en: 'favor', example: '¿Me haces un favor?', exampleEn: 'Can you do me a favor?' },
    { es: 'ayuda', en: 'help', example: 'Necesito tu ayuda con esto.', exampleEn: 'I need your help with this.' },
    { es: 'necesario', en: 'necessary', example: 'No es necesario venir mañana.', exampleEn: "It's not necessary to come tomorrow." },
    { es: 'imposible', en: 'impossible', example: 'Es imposible terminar hoy.', exampleEn: "It's impossible to finish today." },
    { es: 'quisiera', en: 'I would like (polite)', example: 'Quisiera un vaso de agua, por favor.', exampleEn: 'I would like a glass of water, please.' },
    { es: 'obligación', en: 'obligation', example: 'No tienes obligación de ayudar.', exampleEn: "You're not obligated to help." },
  ],

  practice: [
    // ── modal_verbs block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which is the correct yo form of poder (present tense)?', word: 'poder', english: 'can / to be able to', answer: 'puedo', options: ['podo', 'puedo', 'podio', 'poyo'], concept_id: 'modal_verbs', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Nosotros ___ (poder) terminar el proyecto mañana." (no stem change for nosotros)', word: 'poder', english: 'to be able to', answer: 'podemos', concept_id: 'modal_verbs', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Ella no ___ (querer) salir hoy, prefiere quedarse en casa."', word: 'querer', english: 'to want', answer: 'quiere', concept_id: 'modal_verbs', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'You (informal) should rest more.'", english: 'You should rest more.', answer: 'Debes descansar más.', word: 'deber', concept_id: 'modal_verbs', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Sabes conducir?"?', word: 'saber', english: 'Do you know how to drive?', answer: 'Do you know how to drive?', concept_id: 'modal_verbs', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Your friend asks if the pool is open so you can swim today — which verb best fits the reply "No ___ nadar hoy, la piscina está cerrada"?', word: 'poder', english: 'circumstantial ability', answer: 'puedo', options: ['puedo', 'sé', 'quiero', 'debo'], concept_id: 'modal_verbs', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Yo quero ir contigo esta noche."', word: 'querer', english: 'to want', answer: 'Yo quiero ir contigo esta noche.', concept_id: 'modal_verbs', difficulty: 2 },

    // ── obligation_infinitive block (kept separate from modal_verbs; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which sentence expresses a general rule for everyone, with no specific person named — "One must arrive on time"?', word: 'hay que', english: 'one must / it is necessary to', answer: 'Hay que llegar a tiempo.', options: ['Hay que llegar a tiempo.', 'Tengo que llegar a tiempo.', 'Tienes que llegar a tiempo.', 'Debo llegar a tiempo.'], concept_id: 'obligation_infinitive', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Nosotros ___ que (tener) estudiar esta noche para el examen."', word: 'tener que', english: 'to have to', answer: 'tenemos', concept_id: 'obligation_infinitive', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'You (informal) have to finish the project by Friday.'", english: 'You have to finish the project by Friday.', answer: 'Tienes que terminar el proyecto para el viernes.', altAnswers: ['Tienes que acabar el proyecto para el viernes.'], word: 'tener que', concept_id: 'obligation_infinitive', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Hay que reciclar más"?', word: 'hay que', english: 'One must recycle more.', answer: 'One must recycle more. / We (in general) need to recycle more.', concept_id: 'obligation_infinitive', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Ella hay que trabajar mañana."', word: 'hay que', english: 'impersonal — no subject allowed', answer: 'Ella tiene que trabajar mañana.', concept_id: 'obligation_infinitive', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence means "You don\'t have to come" (it\'s entirely optional, not forbidden)?', word: 'no tener que', english: "don't have to (no obligation)", answer: 'No tienes que venir.', options: ['No tienes que venir.', 'No debes venir.', 'Hay que venir.', 'No puedes venir.'], concept_id: 'obligation_infinitive', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'To learn a language, one has to practice every day.' (general rule, no one named)", english: 'To learn a language, one has to practice every day.', answer: 'Para aprender un idioma, hay que practicar todos los días.', word: 'hay que', concept_id: 'obligation_infinitive', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish-
// adjacent grammar sources, and WordReference forum discussion before
// writing (July 2026):
// - poder (o→ue) and querer (e→ie) present-tense stem changes vs. deber's
//   regular -er conjugation (no stem change)
// - modal verb + infinitive pattern: the second verb always stays in the
//   plain infinitive, never conjugated
// - poder vs. saber: poder = physical/circumstantial ability or permission;
//   saber = learned skill/know-how (matches existing modal_verbs entry in
//   src/content/grammar.js)
// - tener que (personal, conjugated to the subject) vs. hay que (impersonal,
//   invariable, built from the same hay already taught for "there is/are";
//   never takes a named subject)
// - deber (obligation/advice) vs. deber de (probability/assumption, "must
//   be") — confirmed deber de for obligation is considered substandard by
//   some grammarians and best avoided by learners (matches existing
//   obligation_infinitive entry in src/content/grammar.js)
// - no tener que ("don't have to" — no obligation, optional) vs. no deber
//   ("shouldn't" — an actual recommendation against doing it) as distinct,
//   non-interchangeable negations
// - quisiera as a set, more courteous alternative to quiero in service/
//   stranger contexts (introduced here only as recognition vocabulary, not
//   as a production target, since its subjunctive/conditional formation is
//   taught later in the curriculum)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// modal_verbs and obligation_infinitive in src/content/grammar.js (same
// facts, fuller beginner-paced walkthrough) and does not contradict them.
