// Unit 20 — Nuance & Connection (B1, final unit of the "Get Started" course)
// Covers: relative_clauses, por_vs_para, saber_vs_conocer, lo_neutro, possessive_pronouns_stressed
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and RAE-
// informed sources before writing — see the audit note at the bottom of
// this file for the specific claims checked. This unit intentionally
// orders relative_clauses before lo_neutro (lo_neutro's prereq, per
// functions/_lib/concepts.js) and treats por_vs_para and saber_vs_conocer
// as the two other B1 concepts assigned to this unit by UNIT_METADATA.

export default {
  sections: [
    {
      heading: 'Connecting Ideas: Relative Clauses with Que',
      paragraphs: [
        "You've been building longer sentences for a while now, but there's one connector you've probably been avoiding without realizing it: the word that lets you fold one sentence inside another instead of stringing two short ones together with \"and.\" In English that word is \"that,\" \"which,\" or \"who\" — El libro que leí es bueno (\"The book that I read is good\") instead of the clunkier El libro es bueno. Lo leí (\"The book is good. I read it.\"). Spanish's all-purpose version of this word is que, and the very good news is that que is the one relative pronoun you can reach for almost every time, whether you're talking about a person or a thing.",
        'Que never changes form — no gender, no number, no agreement with anything. La mujer que trabaja aquí (the woman who works here), los libros que compré (the books that I bought), el café que bebo (the coffee that I drink) — same little word every time, right after the noun it describes. This is different from English, where "who" is reserved for people and "which"/"that" for things; Spanish que covers both jobs at once, which actually makes your life easier once you stop looking for an equivalent split.',
        "One habit to unlearn from English: you can never drop que the way English drops \"that.\" \"The man I saw\" is perfectly natural English with no connector at all, but Spanish always keeps que: El hombre que vi. Leaving it out is not a stylistic choice in Spanish — it's simply wrong.",
      ],
      examples: [
        { es: 'El restaurante que recomendaste es excelente.', en: 'The restaurant that you recommended is excellent.' },
        { es: 'La persona que llamó no dejó su nombre.', en: 'The person who called did not leave their name.' },
        { es: 'Estas son las fotos que tomé en el viaje.', en: 'These are the photos that I took on the trip.' },
        { es: 'El hombre que vi en la tienda es mi vecino.', en: 'The man that I saw in the store is my neighbor.' },
      ],
      commonMistakes: [
        'English lets you drop "that" ("the book I read"), but Spanish never drops que — it must always appear: el libro que leí, never *el libro leí.',
        "Don't reach for a different word depending on person vs. thing the way English splits \"who\" from \"which\" — que covers both, and that's the default choice unless a specific rule (below) calls for quien or donde instead.",
      ],
    },
    {
      heading: 'People After Prepositions: Quien and Quienes',
      paragraphs: [
        "Que handles almost everything, but Spanish has one relative pronoun reserved specifically for people: quien (singular) and quienes (plural). You'll see quien most often right after a preposition — con quien (with whom), de quien (about/of whom), para quien (for whom) — when the person being described is the object of that preposition. La persona con quien hablé ayer es mi jefa (\"The person with whom I spoke yesterday is my boss\") is a very typical B1-level sentence: notice English almost never says \"with whom\" in casual speech (\"the person I spoke with\" is far more natural), so this is a spot where formal Spanish and formal English actually line up, even if everyday English skips it.",
        "Quien/quienes only ever refers to people, and it agrees in number (not gender) with the person or people it stands for: quien for one person, quienes for more than one — los amigos con quienes viajé (the friends with whom I traveled). Outside of the after-a-preposition pattern, que is still perfectly fine for people too (la mujer que trabaja aquí, from the last section) — quien isn't required there, it's an optional, slightly more formal alternative. The one place quien is the natural, expected choice is directly after a preposition referring to a person.",
        'Donde works the same way, but for places instead of people: it replaces "where" and typically follows a place noun. El pueblo donde nací es pequeño ("The town where I was born is small"); la oficina donde trabajo queda cerca ("the office where I work is nearby"). Like quien, donde is a specialized tool — que + a preposition (el pueblo en que nací) also works and means the same thing, but donde is the more natural, everyday choice once a place is involved.',
      ],
      examples: [
        { es: 'La persona con quien hablé es mi jefa.', en: 'The person with whom I spoke is my boss.' },
        { es: 'Los amigos con quienes viajé viven en Chile.', en: 'The friends with whom I traveled live in Chile.' },
        { es: '¿Quién es la mujer para quien compraste el regalo?', en: 'Who is the woman you bought the gift for?' },
        { es: 'El pueblo donde nací es muy pequeño.', en: 'The town where I was born is very small.' },
        { es: 'Este es el restaurante donde nos conocimos.', en: 'This is the restaurant where we met.' },
      ],
      commonMistakes: [
        "Don't use quien for things — la silla que compré (the chair that I bought), never *la silla quien compré. Quien is people-only.",
        "A common overcorrection is inserting quien everywhere a person is involved — but away from a preposition, que is still the normal, unmarked choice for people: la mujer que trabaja aquí, not necessarily la mujer quien trabaja aquí.",
        'Remember quienes (not quiens) is the plural — the accented í stays, and an -es is added, matching the pattern of other plural forms you\'ve seen.',
      ],
    },
    {
      heading: 'A Preview: When a Relative Clause Takes the Subjunctive',
      paragraphs: [
        "Here's a small but genuinely useful payoff once relative clauses and the subjunctive have both entered your toolkit: the verb inside a relative clause can shift from indicative to subjunctive depending on whether the thing being described is known to exist or not. Compare Tengo un libro que tiene fotos (\"I have a book that has photos\" — a specific, real book, so the indicative tiene is used) with Busco un libro que tenga fotos (\"I'm looking for a book that has photos\" — any book fitting that description would do, and you don't know yet if one exists, so the subjunctive tenga is used).",
        'The pattern generalizes: when the noun a relative clause describes is uncertain, hypothetical, or possibly nonexistent, use the subjunctive inside that clause; when it refers to something specific and known to exist, use the indicative. ¿Conoces a alguien que hable japonés? (\"Do you know anyone who speaks Japanese?\" — you don\'t know if such a person exists for you, so hable is subjunctive) versus Conozco a alguien que habla japonés (\"I know someone who speaks Japanese\" — a real, specific person, so habla is indicative). This is only a preview here — full mastery of subjunctive-in-relative-clauses is its own deeper topic, but recognizing the contrast now will make a lot of native Spanish click into place.',
      ],
      examples: [
        { es: 'Tengo un amigo que vive en Madrid.', en: 'I have a friend who lives in Madrid. (specific, known — indicative)' },
        { es: 'Busco un amigo que viva cerca de mí.', en: "I'm looking for a friend who lives near me. (any such friend — subjunctive)" },
        { es: 'Conozco un restaurante que sirve comida vegana.', en: 'I know a restaurant that serves vegan food. (real place — indicative)' },
        { es: '¿Hay un restaurante que sirva comida vegana por aquí?', en: "Is there a restaurant that serves vegan food around here? (uncertain if one exists — subjunctive)" },
      ],
      commonMistakes: [
        "It's easy to default to the indicative out of habit even when describing something hypothetical — but Busco una casa que tenga jardín (subjunctive, tenga) is different in meaning from Busco la casa que tiene jardín (indicative, tiene — a specific house you already have in mind).",
        "This shift only affects the verb inside the relative clause, not que/quien/donde themselves — the relative pronoun stays exactly the same either way.",
      ],
    },
    {
      heading: 'Por vs. Para, Part 1: Para for Destination, Purpose, and Deadline',
      paragraphs: [
        "Now for the preposition pair that trips up nearly every Spanish learner at some point: por and para. Both can translate as \"for\" in English, which is exactly the trap — English gives you one word where Spanish demands you pick between two, based on a completely different logic than translation. The good news is that each word has a consistent internal logic of its own; the trick is learning to think in categories instead of hunting for an English match.",
        'Start with para, which is fundamentally forward-looking: it points toward a destination, a goal, a deadline, or a recipient — the thing something is aimed at or heading toward. Destination: Salgo para Bogotá mañana ("I\'m leaving for Bogotá tomorrow") — para marks where you\'re headed. Purpose/goal: Estudio para aprender ("I study in order to learn") — para + infinitive answers "what for?" or "in order to do what?" Deadline: Necesito el informe para el viernes ("I need the report by Friday") — para marks a point in time something must be done by, not a stretch of time something lasts.',
        "Two more para uses round this out: recipient — Este regalo es para ti (\"This gift is for you\") marks who ultimately receives something — and opinion/perspective — Para mí, el examen fue difícil (\"For me/In my opinion, the exam was hard\") uses para mí/para ti/para él as a fixed way to frame a personal viewpoint, roughly \"as far as I'm concerned.\" If you can mentally substitute \"in order to,\" \"by [a deadline],\" \"intended for,\" or \"in my opinion,\" para is almost always the right choice.",
      ],
      examples: [
        { es: 'Este tren sale para Barcelona a las ocho.', en: 'This train leaves for Barcelona at eight. (destination)' },
        { es: 'Trabajo para ganar dinero.', en: 'I work in order to earn money. (purpose)' },
        { es: 'Necesito terminar esto para el lunes.', en: 'I need to finish this by Monday. (deadline)' },
        { es: 'Compré estas flores para mi madre.', en: 'I bought these flowers for my mother. (recipient)' },
        { es: 'Para mí, este es el mejor plan.', en: 'In my opinion, this is the best plan. (opinion)' },
      ],
      commonMistakes: [
        'Don\'t confuse a deadline (para el lunes — done by Monday) with a duration (por dos horas — for two hours, covered next section) — both can sound like "for" in a rushed English translation, but they answer completely different questions.',
        "Para el viernes means \"by/for Friday\" as a due date, not \"during Friday\" — if you mean the action happens throughout a stretch of time, that's por's job, not para's.",
      ],
    },
    {
      heading: 'Por vs. Para, Part 2: Por for Cause, Duration, Exchange, and Movement',
      paragraphs: [
        'Where para looks forward, por tends to look backward or sideways — it points at the cause behind something, an exchange, a stretch of time, or movement through/around a space, rather than a destination or goal. Cause/reason: Lo hice por amor (\"I did it out of love\") or Cerraron la tienda por la lluvia (\"They closed the shop because of the rain\") — por answers "why did this happen?" Duration: Viví en Perú por dos años (\"I lived in Peru for two years\") — por marks a length of time something lasted, as opposed to para\'s deadline.',
        "Exchange/substitution is another core por use: Te cambio mi sándwich por tu manzana (\"I'll trade you my sandwich for your apple\") — one thing given in place of another, including money (Pagué veinte dólares por el libro, \"I paid twenty dollars for the book\") and standing in for someone (Trabajé por ella cuando estuvo enferma, \"I worked in her place when she was sick\"). Por also covers means or method — hablar por teléfono (\"to speak by/on the phone\"), mandar algo por correo (\"to send something by mail\") — and physical movement through, along, or around a place, rather than toward a fixed endpoint: Caminé por el parque (\"I walked through the park\") versus Caminé para el parque, which would mean you were headed toward the park as your destination.",
        'Finally, a handful of everyday expressions simply use por or para by fixed convention, and are worth memorizing directly rather than reasoning through: por favor (please), por ejemplo (for example), por fin (finally, at last), por supuesto (of course), and — on the para side — para siempre (forever). These don\'t map cleanly onto "cause" or "purpose" in any obvious way; they\'re fixed phrases, and native speakers don\'t consciously apply the categories above every time they say them, so neither should you.',
      ],
      examples: [
        { es: 'No fuimos a la playa por el mal tiempo.', en: "We didn't go to the beach because of the bad weather. (cause)" },
        { es: 'Estudié español por tres años.', en: 'I studied Spanish for three years. (duration)' },
        { es: 'Gracias por el regalo, te doy este libro por el tuyo.', en: "Thanks for the gift, I'll give you this book for yours. (exchange)" },
        { es: 'Te llamo por teléfono esta noche.', en: "I'll call you by phone tonight. (means)" },
        { es: 'Caminamos por la playa toda la tarde.', en: 'We walked along the beach all afternoon. (movement through)' },
        { es: 'Por favor, dime la verdad. Por fin llegamos a casa.', en: 'Please, tell me the truth. We finally arrived home.' },
      ],
      commonMistakes: [
        'Salir para un lugar (to leave for/head toward a place as a destination) is different from salir por un lugar (to leave through/via a place) — mixing these up changes the meaning of the sentence.',
        "Fixed expressions like por favor and por fin don't need to fit neatly into the \"cause/duration/exchange/means\" categories — they're memorized as-is; only para siempre breaks the pattern by using para.",
        'Duration is por (viví allí por dos años), not para — a very common learner slip is reaching for para whenever a time expression appears, but para only marks a deadline, never a stretch of elapsed time.',
      ],
    },
    {
      heading: 'Saber vs. Conocer: Two Kinds of "Knowing"',
      paragraphs: [
        "English uses one verb, \"to know,\" for two genuinely different ideas that Spanish keeps separate: knowing a fact or a skill, and being familiar with a person, place, or thing. Saber covers the first: facts, information, and things you know how to do. Sé la respuesta (\"I know the answer\"), ¿Sabes qué hora es? (\"Do you know what time it is?\"), Sé nadar (\"I know how to swim\") — notice that last one uses saber + infinitive for a learned skill, with no extra word needed for \"how to.\"",
        'Conocer covers the second: familiarity through experience — with a person you\'ve met, a place you\'ve been, or a thing you\'re acquainted with. Conozco a María (\"I know María\"), Conozco bien Madrid (\"I know Madrid well\" — I\'ve spent time there), Conozco esa película (\"I\'m familiar with that movie\"). A useful gut check from this unit\'s reference material: if you could answer the question with a plain fact or a yes/no, it\'s saber; if you\'re talking about having met, visited, or spent time with something, it\'s conocer.',
        'One detail is easy to forget: when conocer\'s object is a specific person, Spanish requires the personal a right before that person — Conozco a tu hermana, never *Conozco tu hermana. This is the same personal a you\'ve met with other verbs that take a human direct object; conocer is simply one of the verbs where it shows up constantly, since knowing people is exactly what conocer is for.',
        'A last wrinkle worth knowing at B1: in the preterite, both verbs shift meaning slightly, because the preterite captures the moment something started rather than an ongoing state. Conocí a Juan en la universidad means "I met Juan at university" (the moment the acquaintance began), not "I knew Juan." Supe la verdad ayer means "I found out the truth yesterday" (the moment the fact arrived), not "I knew the truth." Outside the preterite, this distinction doesn\'t apply — Conocía a Juan desde niño ("I had known Juan since childhood," imperfect) describes an ongoing state, same as you\'d expect.',
      ],
      examples: [
        { es: 'Sé cocinar, pero no sé mucho de vinos.', en: "I know how to cook, but I don't know much about wine." },
        { es: '¿Sabes dónde está la estación?', en: 'Do you know where the station is?' },
        { es: 'Conozco a tu hermana desde hace años.', en: "I've known your sister for years." },
        { es: 'No conozco este barrio muy bien todavía.', en: "I don't know this neighborhood very well yet." },
        { es: 'Conocí a mi esposa en una fiesta.', en: 'I met my wife at a party. (conocer, preterite = "met")' },
        { es: 'Supe la noticia esta mañana.', en: 'I found out the news this morning. (saber, preterite = "found out")' },
      ],
      commonMistakes: [
        'Forgetting the personal a with conocer is one of the most common slips at this level — Conozco a tu hermano, never *Conozco tu hermano, whenever the direct object is a specific person.',
        'Don\'t say "Sé a María" for "I know María" — a person always takes conocer, never saber, regardless of how well you know them.',
        'Watch the preterite shift: conocí means "I met" (not "I knew"), and supe means "I found out" (not "I knew") — using the imperfect (conocía, sabía) instead gives you the ongoing "knew/was familiar with" meaning.',
      ],
    },
    {
      heading: 'Lo Neutro: Talking About Ideas Instead of Things',
      paragraphs: [
        "Every noun you've met so far has been masculine or feminine, because every noun in Spanish names a specific, countable thing or being. But sometimes you want to talk about a quality or an idea in the abstract — not \"the good book\" (a specific thing) but \"the good part\" or \"what's good\" (an abstract concept). For that, Spanish uses a special neuter article, lo, which never changes for gender or number because it isn't attached to any specific noun at all.",
        'Lo + a masculine singular adjective turns that adjective into an abstract noun phrase: lo bueno (\"the good thing/part\"), lo malo (\"the bad thing/part\"), lo difícil (\"the difficult part\"), lo interesante (\"the interesting thing\"). Lo bueno de este trabajo es el horario (\"The good thing about this job is the schedule\") isn\'t talking about one specific good object — it\'s naming the quality of goodness itself, as it applies to this situation. This is a genuinely useful, frequent construction once you notice it: lo mejor (the best part), lo peor (the worst part), lo importante (the important thing) all follow the same pattern.',
        'The second half of lo neutro is lo que, which means "what" or "that which" in the sense of an idea or statement rather than a specific noun — this is exactly the relative-clauses skill from earlier in this unit, just without a stated antecedent. No entiendo lo que dices ("I don\'t understand what you\'re saying") isn\'t referring back to any specific noun already mentioned — lo que itself stands in for "the thing that." Compare this with a normal relative clause with an antecedent: La cosa que dices (awkward, and rarely how a native speaker would actually say it) versus the natural Lo que dices ("what you\'re saying"). Eso es exactamente lo que necesito ("That\'s exactly what I need") is the same pattern doing the same job.',
      ],
      examples: [
        { es: 'Lo bueno es que tenemos tiempo.', en: 'The good thing is that we have time.' },
        { es: 'Lo más difícil del examen fue la última pregunta.', en: 'The hardest part of the exam was the last question.' },
        { es: 'No entiendo lo que dices.', en: "I don't understand what you're saying." },
        { es: 'Lo que más me gusta de viajar es conocer gente nueva.', en: 'What I like most about traveling is meeting new people.' },
        { es: 'Eso es exactamente lo que necesito.', en: "That's exactly what I need." },
      ],
      commonMistakes: [
        'Lo never changes form for gender or number — there is no "la buena" or "los buenos" version of this construction, because lo isn\'t agreeing with any noun; it\'s always just lo + [masculine singular adjective].',
        'Don\'t use que alone when there\'s no specific noun being referred to — La cosa que dices sounds unnatural where a native speaker would simply say Lo que dices.',
        "Don't confuse this lo with the direct object pronoun lo (\"him/it,\" as in Lo veo, \"I see him/it\") — same word, but a completely different job: one replaces a specific noun already mentioned, the other builds an abstract idea from scratch.",
      ],
    },
    {
      heading: 'Mine, Yours, and Whose: Stressed Possessives',
      paragraphs: [
        "Unit 8 taught you mi, tu, su, and nuestro/vuestro — the possessives that sit right before a noun (mi coche, tu casa). Those are called unstressed possessives, and they're by far the most common way to show possession. But Spanish has a second, less frequent set — mío, tuyo, suyo, nuestro, vuestro, suyo — called stressed possessives, and they do two jobs the short forms can't: they let you drop the noun entirely and say \"mine/yours/his,\" and they let you place possession after the noun for emphasis or contrast.",
        "Every stressed possessive has four forms, agreeing in both gender and number with the thing possessed — never with the possessor. Mío/mía/míos/mías, tuyo/tuya/tuyos/tuyas, suyo/suya/suyos/suyas, nuestro/nuestra/nuestros/nuestras, vuestro/vuestra/vuestros/vuestras, and suyo/suya/suyos/suyas again (for de usted/ustedes/él/ella/ellos/ellas, same as the short su). Notice nuestro and vuestro look identical whether stressed or unstressed — only mi/tu/su change shape (gaining an extra syllable and full gender/number agreement) when they stress.",
        'The first job is standing in for the noun entirely, always paired with a definite article: Mi coche es azul; el tuyo es rojo ("My car is blue; yours is red") — el tuyo replaces tu coche completely, and it agrees with coche (masculine), not with whoever "you" happens to be. ¿Tienes las llaves? Las mías están aquí ("Do you have the keys? Mine are here") — las mías is feminine plural because llaves is, regardless of the speaker\'s own gender.',
        'The second job is an adjective placed after the noun instead of before it, usually with un/una rather than a definite article, for emphasis or to mean "a ___ of mine" rather than a specific, already-identified one: Un amigo mío trabaja aquí ("A friend of mine works here") sounds a little different from Mi amigo trabaja aquí ("My friend works here") — the stressed version implies one among several friends, while the unstressed version simply names the specific friend you mean. This pattern is more common in writing and slightly formal speech than in fast casual conversation, where mi amigo still does most of the everyday work.',
        "One more wrinkle, specifically with ser: when you're just stating plain ownership, drop the article — Este libro es mío (\"This book is mine\"), not Este libro es el mío. A quick contrastive aside like Este libro es mío, no tuyo (\"This book is mine, not yours\") still drops the article too — it's still just naming whose something is, not singling one out from a group. The article comes back specifically when you're answering \"which one\" out of several options: ¿Este es tu dinero? No, ¡es el mío! (\"Is this your money? No, it's mine!\") — here el mío is picking out one particular thing from the options on the table, which is a different job than a plain mío/tuyo contrast.",
      ],
      examples: [
        { es: 'Mi coche es azul; el tuyo es rojo.', en: 'My car is blue; yours is red.' },
        { es: '¿Tienes las llaves? Las mías están aquí.', en: 'Do you have the keys? Mine are here.' },
        { es: 'Un amigo mío trabaja en ese restaurante.', en: 'A friend of mine works at that restaurant.' },
        { es: 'Este libro es mío, no es tuyo.', en: "This book is mine, it's not yours." },
        { es: '¿Esta maleta es suya? No, ¡es la nuestra!', en: 'Is this suitcase yours (formal)? No, it\'s ours!' },
      ],
      commonMistakes: [
        'Stressed possessives agree with the thing possessed, not the possessor — a man and a woman both say el mío for a masculine noun like trabajo, and both say la mía for a feminine noun like casa; don\'t let the speaker\'s own gender leak into the ending.',
        'Don\'t place a stressed possessive before the noun the way you would mi/tu/su — un mío amigo is wrong; the stressed form goes after the noun: un amigo mío.',
        'With ser, plain ownership statements usually drop the article (Es mío, not Es el mío) — even a quick contrast (Es mío, no tuyo) still drops it; only add el/la/los/las back when you\'re specifically singling out one option out of several (¿Cuál es tuyo? Ese es el mío).',
      ],
    },
  ],

  vocab: [
    { es: 'que', en: 'that / which / who', example: 'El libro que leí es bueno.', exampleEn: 'The book that I read is good.' },
    { es: 'quien / quienes', en: 'whom (people, esp. after a preposition)', example: 'La persona con quien hablé es mi jefa.', exampleEn: 'The person with whom I spoke is my boss.' },
    { es: 'donde', en: 'where', example: 'El pueblo donde nací es pequeño.', exampleEn: 'The town where I was born is small.' },
    { es: 'lo que', en: 'what / that which', example: 'No entiendo lo que dices.', exampleEn: "I don't understand what you're saying." },
    { es: 'para', en: 'for / in order to / by (deadline)', example: 'Necesito esto para el lunes.', exampleEn: 'I need this by Monday.' },
    { es: 'por', en: 'for / because of / through / for (duration)', example: 'Viví allí por dos años.', exampleEn: 'I lived there for two years.' },
    { es: 'por favor', en: 'please', example: 'Por favor, ayúdame.', exampleEn: 'Please help me.' },
    { es: 'por ejemplo', en: 'for example', example: 'Me gustan las frutas, por ejemplo la manzana.', exampleEn: 'I like fruits, for example the apple.' },
    { es: 'por fin', en: 'finally, at last', example: 'Por fin terminamos el proyecto.', exampleEn: 'We finally finished the project.' },
    { es: 'para siempre', en: 'forever', example: 'Te querré para siempre.', exampleEn: "I'll love you forever." },
    { es: 'el destino', en: 'destination', example: 'Nuestro destino final es Lima.', exampleEn: 'Our final destination is Lima.' },
    { es: 'la fecha límite', en: 'deadline', example: 'La fecha límite es el viernes.', exampleEn: 'The deadline is Friday.' },
    { es: 'saber', en: 'to know (facts, how to)', example: 'Sé nadar muy bien.', exampleEn: 'I know how to swim very well.' },
    { es: 'conocer', en: 'to know (people, places)', example: 'Conozco a tu hermana.', exampleEn: 'I know your sister.' },
    { es: 'conocer a', en: 'to know (a person, personal a)', example: 'Conozco a Juan desde niño.', exampleEn: "I've known Juan since childhood." },
    { es: 'lo bueno', en: 'the good thing/part', example: 'Lo bueno es que tenemos tiempo.', exampleEn: 'The good thing is that we have time.' },
    { es: 'lo malo', en: 'the bad thing/part', example: 'Lo malo es el tráfico.', exampleEn: 'The bad thing is the traffic.' },
    { es: 'lo mejor', en: 'the best part/thing', example: 'Lo mejor del viaje fue la comida.', exampleEn: 'The best part of the trip was the food.' },
    { es: 'el mío / la mía', en: 'mine', example: 'Mi coche es azul; el tuyo es rojo.', exampleEn: 'My car is blue; yours is red.' },
    { es: 'el tuyo / la tuya', en: 'yours (informal)', example: '¿Tienes las llaves? Las mías están aquí.', exampleEn: 'Do you have the keys? Mine are here.' },
    { es: 'el suyo / la suya', en: 'his / hers / yours (formal) / theirs', example: '¿Esta maleta es suya?', exampleEn: 'Is this suitcase yours (formal)?' },
    { es: 'un amigo mío', en: 'a friend of mine', example: 'Un amigo mío trabaja en ese restaurante.', exampleEn: 'A friend of mine works at that restaurant.' },
  ],

  practice: [
    // ── relative_clauses block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete: "El libro ___ leí es muy interesante." (that)', word: 'que', english: 'that', answer: 'que', concept_id: 'relative_clauses', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which word fits: "La persona con ___ hablé es mi jefa"?', word: 'quien', english: 'whom', answer: 'quien', options: ['que', 'quien', 'donde', 'lo que'], concept_id: 'relative_clauses', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "El pueblo ___ nací es pequeño." (where)', word: 'donde', english: 'where', answer: 'donde', concept_id: 'relative_clauses', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The friends with whom I traveled live in Chile.'", english: 'The friends with whom I traveled live in Chile.', answer: 'Los amigos con quienes viajé viven en Chile.', word: 'quienes', concept_id: 'relative_clauses', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "La silla quien compré es cómoda."', word: 'que', english: 'that (for things)', answer: 'La silla que compré es cómoda.', concept_id: 'relative_clauses', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence describes a specific, known friend (indicative)?', word: 'que', english: 'indicative in relative clause', answer: 'Tengo un amigo que vive en Madrid.', options: ['Tengo un amigo que vive en Madrid.', 'Busco un amigo que viva cerca.', '¿Hay alguien que hable japonés?', 'Necesito un libro que tenga fotos.'], concept_id: 'relative_clauses', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Busco un libro que tenga fotos."', word: 'busco', english: "I'm looking for a book that has photos.", answer: "I'm looking for a book that has photos (any book fitting that description).", concept_id: 'relative_clauses', difficulty: 3 },

    // ── por_vs_para block (kept separate from relative_clauses; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which preposition fits: "Necesito el informe ___ el viernes" (deadline)?', word: 'para', english: 'by (deadline)', answer: 'para', options: ['por', 'para'], concept_id: 'por_vs_para', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Viví en Perú ___ dos años." (duration)', word: 'por', english: 'for (duration)', answer: 'por', concept_id: 'por_vs_para', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which sentence means "I walked through the park" (not toward it as a destination)?', word: 'por', english: 'through', answer: 'Caminé por el parque.', options: ['Caminé por el parque.', 'Caminé para el parque.'], concept_id: 'por_vs_para', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'This gift is for you.' (recipient)", english: 'This gift is for you.', answer: 'Este regalo es para ti.', word: 'para', concept_id: 'por_vs_para', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We didn't go out because of the rain.' (cause)", english: "We didn't go out because of the rain.", answer: 'No salimos por la lluvia.', word: 'por', concept_id: 'por_vs_para', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Estudié español para tres años."', word: 'por', english: 'for (duration)', answer: 'Estudié español por tres años.', concept_id: 'por_vs_para', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete the fixed expression: "___ favor, dime la verdad."', word: 'por', english: 'please', answer: 'Por', concept_id: 'por_vs_para', difficulty: 1 },
    { type: 'translation_to_english', prompt: 'Translate: "Para mí, este examen fue muy difícil."', word: 'para mí', english: 'For me/In my opinion, this exam was very difficult.', answer: 'For me/In my opinion, this exam was very difficult.', concept_id: 'por_vs_para', difficulty: 2 },

    // ── saber_vs_conocer block ──
    { type: 'multiple_choice', prompt: 'Which verb fits: "___ nadar muy bien" (a skill)?', word: 'sé', english: 'I know how to', answer: 'Sé', options: ['Sé', 'Conozco'], concept_id: 'saber_vs_conocer', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "___ a tu hermana desde hace años." (conocer, yo form)', word: 'conozco', english: 'I know', answer: 'Conozco', concept_id: 'saber_vs_conocer', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the error: "Conozco tu hermano."', word: 'a', english: 'personal a', answer: 'Conozco a tu hermano.', concept_id: 'saber_vs_conocer', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Do you know where the station is?'", english: 'Do you know where the station is?', answer: '¿Sabes dónde está la estación?', word: 'sabes', concept_id: 'saber_vs_conocer', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Conocí a mi esposa en una fiesta." (preterite)', word: 'conocí', english: 'I met my wife at a party.', answer: 'I met my wife at a party.', concept_id: 'saber_vs_conocer', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which best translates "supe" in "Supe la verdad ayer"?', word: 'supe', english: 'found out', answer: 'found out', options: ['knew (ongoing)', 'found out', 'met', 'was able to'], concept_id: 'saber_vs_conocer', difficulty: 3 },

    // ── lo_neutro block ──
    { type: 'fill_blank', prompt: 'Complete: "___ bueno es que tenemos tiempo." (the good thing)', word: 'lo', english: 'the [abstract quality]', answer: 'Lo', concept_id: 'lo_neutro', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I don't understand what you're saying.'", english: "I don't understand what you're saying.", answer: 'No entiendo lo que dices.', word: 'lo que', concept_id: 'lo_neutro', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Eso es exactamente lo que necesito."', word: 'lo que', english: "That's exactly what I need.", answer: "That's exactly what I need.", concept_id: 'lo_neutro', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "La buena es que tenemos tiempo."', word: 'lo', english: 'the good thing', answer: 'Lo bueno es que tenemos tiempo.', concept_id: 'lo_neutro', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which phrase means "the hardest part"?', word: 'lo más difícil', english: 'the hardest part', answer: 'lo más difícil', options: ['la más difícil', 'lo más difícil', 'el más difícil', 'los más difícil'], concept_id: 'lo_neutro', difficulty: 2 },

    // ── possessive_pronouns_stressed block ──
    { type: 'fill_blank', prompt: 'Complete: "Mi coche es azul; ___ es rojo." (yours)', word: 'el tuyo', english: 'yours', answer: 'el tuyo', concept_id: 'possessive_pronouns_stressed', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Do you have the keys? Mine are here.' (llaves is feminine)", english: 'Do you have the keys? Mine are here.', answer: '¿Tienes las llaves? Las mías están aquí.', word: 'las mías', concept_id: 'possessive_pronouns_stressed', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly places the stressed possessive after the noun?', word: 'un amigo mío', english: 'a friend of mine', answer: 'Un amigo mío trabaja aquí.', options: ['Un amigo mío trabaja aquí.', 'Un mío amigo trabaja aquí.', 'Mi amigo mío trabaja aquí.', 'Un amigo el mío trabaja aquí.'], concept_id: 'possessive_pronouns_stressed', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the plain-ownership statement: "Este libro es el mío." (no contrast intended, just stating it\'s mine)', word: 'mío', english: 'mine', answer: 'Este libro es mío.', concept_id: 'possessive_pronouns_stressed', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Esta maleta es suya? No, ¡es la nuestra!"?', word: 'la nuestra', english: 'ours', answer: 'Is this suitcase yours (formal)? No, it\'s ours!', concept_id: 'possessive_pronouns_stressed', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and RAE-informed grammar references before writing (July 2026):
// - que as the all-purpose relative pronoun for people and things, never
//   dropped the way English drops "that" (SpanishDict Relative Pronouns
//   guide; StudySpanish.com "Relative Pronouns: Que")
// - quien/quienes reserved for people, standard/expected after a
//   preposition (con quien, para quien), que still valid for people
//   away from a preposition (StudySpanish.com "Relative Pronouns: Quien";
//   SpanishDict Relative Pronouns guide)
// - donde for places, interchangeable with que + preposition (en que) but
//   more natural in everyday speech (SpanishDict; existing grammar.js
//   relative_clauses card)
// - indicative vs. subjunctive in relative/adjective clauses depending on
//   whether the antecedent is known/specific (indicative: Tengo un libro
//   que tiene fotos) vs. uncertain/indefinite (subjunctive: Busco un libro
//   que tenga fotos) — confirmed via SpanishDict-adjacent subjunctive
//   adjective-clause explanations, consistent with existing
//   subjunctive_adjective_clauses concept in functions/_lib/concepts.js
// - por vs. para categories: para = destination, purpose (+ infinitive),
//   deadline, recipient, opinion (para mí); por = cause/reason, duration,
//   exchange/substitution, means, physical movement through/around
//   (SpanishDict "Por vs Para" and "Advanced Por vs Para" guides; multiple
//   cross-checked pedagogical sources agree on this category split, which
//   also matches the existing por_vs_para card in src/content/grammar.js)
// - fixed expressions: por favor, por ejemplo, por fin, por supuesto (por)
//   vs. para siempre (para) as conventional exceptions not derived from
//   the categories above (SpanishDict "Expressions with Por and Para")
// - saber = facts/information/skills (saber + infinitive for "know how
//   to"); conocer = familiarity with people/places/things, requires
//   personal "a" before a specific person (SpanishDict "Saber vs Conocer"
//   guide)
// - preterite meaning shift: conocí = "met" (first encounter), supe =
//   "found out" (moment of discovery), vs. ongoing imperfect
//   conocía/sabía (SpanishDict guide; Study.com preterite-tense lesson;
//   consistent with the existing saber_vs_conocer card)
// - lo + masculine singular adjective for abstract qualities (lo bueno,
//   lo mejor), invariable for gender/number since it has no noun
//   antecedent (SpanishDict "Using the Neuter Article (Lo) in Spanish")
// - lo que as a headless relative clause ("what/that which"), used where
//   there is no specific noun antecedent, contrasted with que + explicit
//   antecedent (SpanishDict neuter lo and relative-pronoun guides)
// - Stressed possessives (mío, tuyo, suyo, nuestro, vuestro, suyo) agree in
//   gender AND number with the thing possessed, never the possessor,
//   confirmed against SpanishDict's Possessive Pronouns guide and Lawless
//   Spanish Grammar; nuestro/vuestro confirmed identical in stressed and
//   unstressed form, unlike mi/tu/su which gain a syllable and full
//   agreement when stressed.
// - Two uses confirmed: (1) pronoun replacing the noun, almost always with
//   a definite article (el tuyo, las mías), per SpanishDict/Lawless; (2)
//   post-noun adjective (un amigo mío), confirmed against SpanishStep's
//   "un amigo mío vs. mi amigo" analysis as implying "one of several" and
//   sounding somewhat more formal/literary than the unstressed mi amigo,
//   which still dominates casual speech.
// - Article omission with ser confirmed: plain ownership drops the article
//   (Es mío), including a quick contrastive aside (Es mío, no tuyo); the
//   article returns specifically when singling out one option among
//   several (¿Es tuyo? No, ¡es el mío!) — confirmed against SpanishDict's
//   Possessive Pronouns guide and Elon.io's Spanish possessive-pronoun
//   reference.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// por_vs_para, relative_clauses, saber_vs_conocer, and lo_neutro in
// src/content/grammar.js (same facts, fuller B1-paced walkthrough with
// worked contrasts) and does not contradict them. Concept prerequisite
// order (relative_clauses before lo_neutro) matches functions/_lib/
// concepts.js, where lo_neutro lists relative_clauses as a prereq.
// possessive_pronouns_stressed is a new concept (see functions/_lib/
// concepts.js) with no prior GRAMMAR_CARDS entry, building directly on
// the unstressed possessives (mi/tu/su/nuestro) taught in Unit 8.
