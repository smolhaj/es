// Unit 08 — Your Daily Routine (A2)
// Covers: reflexive_verbs, possessives
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked. This content is
// written to be consistent with (not contradictory to) the existing
// reflexive_verbs and possessives entries in src/content/grammar.js and
// functions/_lib/concepts.js.

export default {
  sections: [
    {
      heading: 'Reflexive Verbs: When the Action Comes Back to You',
      paragraphs: [
        "Most verbs describe an action one person does to someone or something else — Ana lava el carro (Ana washes the car). But what happens when the subject does the action to themselves? English usually just leaves this implied: \"I wash up,\" \"she gets dressed,\" \"we sit down\" — no special grammar marks that the action loops back to the subject. Spanish, by contrast, marks it explicitly with a reflexive pronoun: me, te, se, nos, os, se — one for each subject pronoun (yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes).",
        'A reflexive verb is simply a regular -ar/-er/-ir verb paired with its own reflexive pronoun, and you\'ll recognize the infinitive form by the -se glued to the end: levantarse (to get (oneself) up), llamarse (to call oneself — i.e., to be named), ducharse (to shower (oneself)). To conjugate one, drop the -se, conjugate the verb exactly as you already know how, and place the matching reflexive pronoun immediately before the conjugated verb. Llamarse conjugates just like a regular -ar verb (llamo, llamas, llama...); add the pronoun and you get me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman.',
        "Pronoun placement has one more wrinkle worth learning now, since you'll use it constantly: with an infinitive or a gerund (-ando/-iendo form), the reflexive pronoun can either stay in front of the whole phrase or attach directly to the end of the infinitive/gerund — both are correct and equally common. Voy a levantarme temprano and Me voy a levantar temprano mean exactly the same thing (\"I'm going to get up early\"); so do Está duchándose and Se está duchando (\"She's showering\"). With a plain conjugated verb, though, there's no attaching — the pronoun always goes in front: me levanto, not levantome.",
        'One important flag: some verbs change meaning depending on whether they\'re used reflexively or not. Ir means "to go," but irse means "to leave/go away." Dormir means "to sleep," but dormirse means "to fall asleep." Comer means "to eat," but comerse (colloquially) adds a sense of finishing something off entirely. The reflexive pronoun isn\'t decorative here — it genuinely shifts the meaning, so it\'s worth learning these verb pairs as separate vocabulary rather than assuming "reflexive" always just means "to oneself."',
      ],
      examples: [
        { es: 'Me llamo Sofía. ¿Cómo te llamas tú?', en: "My name is Sofía. What's your name?" },
        { es: 'Ella se levanta, se ducha y se viste.', en: 'She gets up, showers, and gets dressed.' },
        { es: 'Vamos a sentarnos aquí. / Nos vamos a sentar aquí.', en: "Let's sit down here. (both word orders are correct)" },
        { es: 'Mi hermano se durmió en el sofá.', en: 'My brother fell asleep on the couch. (dormirse ≠ dormir)' },
        { es: 'Se van mañana a las ocho.', en: "They're leaving tomorrow at eight. (irse ≠ ir)" },
      ],
      commonMistakes: [
        "English speakers often forget the reflexive pronoun entirely, since English doesn't require one — \"Yo levanto a las siete\" is missing me and actually reads as \"I lift (something) at seven,\" not \"I get up at seven.\" The pronoun is not optional.",
        'Don\'t attach the reflexive pronoun to a conjugated verb — "Levantome a las siete" is wrong. Attaching is only for infinitives and gerunds (levantarme, levantándome); a conjugated form always takes the pronoun in front (me levanto).',
        "Don't assume every -se verb keeps the exact same meaning as its non-reflexive twin — check pairs like ir/irse and dormir/dormirse individually, since the reflexive form can shift the meaning rather than just adding \"to oneself.\"",
      ],
    },
    {
      heading: 'A Day in the Life: The Core Routine Verbs',
      paragraphs: [
        "Reflexive verbs cluster heavily around daily routine, which is exactly why they're worth mastering together: describing your day from waking up to going to bed uses reflexive verbs almost every step of the way. The most common set — despertarse (to wake up), levantarse (to get up), ducharse (to shower) or bañarse (to bathe), vestirse (to get dressed), peinarse (to comb/style one's hair), and acostarse (to go to bed) — will let you narrate an entire day.",
        "Several of these are stem-changing verbs, meaning the vowel in the stem shifts in every form except nosotros/vosotros — the same stem-changing pattern you may already know from verbs like querer or poder, just with a reflexive pronoun added on top. Despertarse changes e→ie: me despierto, te despiertas, se despierta, nos despertamos, os despertáis, se despiertan. Acostarse changes o→ue: me acuesto, te acuestas, se acuesta, nos acostamos, os acostáis, se acuestan. Vestirse changes e→i: me visto, te vistes, se viste, nos vestimos, os vestís, se visten. Notice in all three that the nosotros and vosotros forms keep the original vowel (despertamos, acostamos, vestimos) — the stem only changes when that syllable is stressed in pronunciation.",
        "Levantarse, by contrast, is a fully regular -ar verb once you add the reflexive pronoun — no stem change at all: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Ducharse and llamarse are likewise fully regular. So while the stem-changing pattern looks like a lot to track, it only applies to a handful of these routine verbs, not all of them — and you'll meet the same three patterns (e→ie, o→ue, e→i) again and again elsewhere in Spanish.",
        'Also common: lavarse (to wash (oneself)), often used with a specific body part — lavarse los dientes (to brush one\'s teeth, literally "to wash oneself the teeth"), lavarse las manos (to wash one\'s hands). Notice Spanish uses the definite article (los, las) here, not a possessive like "my" — me lavo mis dientes sounds redundant to a native speaker, since the reflexive pronoun me already establishes whose teeth they are.',
      ],
      examples: [
        { es: 'Me despierto a las seis, pero me levanto a las seis y media.', en: 'I wake up at six, but I get up at six-thirty.' },
        { es: '¿A qué hora te acuestas los fines de semana?', en: 'What time do you go to bed on weekends?' },
        { es: 'Él se viste muy rápido antes de ir al trabajo.', en: 'He gets dressed very quickly before going to work.' },
        { es: 'Nos lavamos los dientes después de desayunar.', en: 'We brush our teeth after having breakfast.' },
        { es: 'Mi rutina: me ducho, me peino y me visto.', en: 'My routine: I shower, I comb my hair, and I get dressed.' },
      ],
      commonMistakes: [
        'Don\'t use the possessive with body parts after a reflexive verb — say Me lavo las manos, not "Me lavo mis manos." The reflexive pronoun already tells you whose hands they are, so adding mis is redundant in Spanish (unlike English "my hands").',
        "A frequent slip is applying the stem change to the nosotros/vosotros forms too — it's nos despertamos, not nos despiertamos; the stem only changes when the syllable is stressed, which nosotros/vosotros forms never are.",
        'Ducharse and bañarse are often treated as interchangeable by beginners, and in most everyday contexts they are (both mean roughly "to shower/bathe") — but bañarse can also specifically mean "to bathe/swim" (in a pool or the sea), so context matters.',
      ],
    },
    {
      heading: "Whose Is It? Introducing Possessive Adjectives",
      paragraphs: [
        "Now let's cover a completely different kind of word that also shows up constantly when you talk about your life and routine: possessives — mi (my), tu (your, informal), su (his/her/your-formal/their), nuestro (our), and vuestro (your all, Spain, informal). You'll use these anytime you mention mi rutina (my routine), tu casa (your house), or nuestra familia (our family).",
        'Here\'s the rule that surprises most English speakers: Spanish possessives agree with the thing being possessed, not with the possessor. In English, "his" or "her" tells you the owner\'s gender no matter what\'s owned — "his book," "her book." In Spanish, mi, tu, and su never change for gender at all; they only add -s for plural: mi libro / mis libros, tu casa / tus casas, su hermano / sus hermanos. It doesn\'t matter if the owner is male or female, or if there\'s one owner or several (for su/sus) — mi, tu, and su themselves stay exactly the same shape.',
        'Nuestro and vuestro are the exception: they behave like regular four-form adjectives, agreeing in both gender and number with the noun that follows: nuestro hermano, nuestra hermana, nuestros hermanos, nuestras hermanas (and the same pattern for vuestro/vuestra/vuestros/vuestras). So while mi amiga and mi amigo both use the unchanging mi, nuestra amiga and nuestro amigo do change to match.',
        "All of these possessives go before the noun (mi coche, not coche mi), and — like most describing words in Spanish — they replace the article rather than joining it: it's mi coche, never el mi coche.",
      ],
      examples: [
        { es: 'Mi rutina empieza a las seis.', en: 'My routine starts at six.' },
        { es: 'Tus hermanos son muy simpáticos.', en: 'Your (informal) siblings are very nice.' },
        { es: 'Nuestra casa está cerca del parque.', en: 'Our house is near the park.' },
        { es: 'Nuestros amigos llegan mañana.', en: 'Our friends arrive tomorrow.' },
        { es: '¿Dónde están vuestras maletas?', en: 'Where are your (informal, plural, Spain) suitcases?' },
      ],
      commonMistakes: [
        'Don\'t add a gender ending to mi, tu, or su — "mia," "tuyo," "suya" used this way (as the short form before a noun) don\'t exist; only nuestro and vuestro have four forms.',
        'Remember the possessive agrees with the thing owned, not the owner — nuestra casa is correct even if the owners are all men, because casa is feminine, not because of who owns it.',
        'Don\'t combine the article with a possessive — "la mi casa" is not standard Spanish (unlike some Italian dialects); it\'s simply mi casa.',
      ],
    },
    {
      heading: 'Untangling "su": His, Her, Your, or Their?',
      paragraphs: [
        'By now you\'ve probably noticed that su and sus do a lot of work: they can mean "his," "her," "your" (formal, usted/ustedes), or "their." Su carro, taken completely on its own, could be "his car," "her car," "your car," or "their car" — Spanish genuinely doesn\'t distinguish these with the possessive itself. Usually context makes it obvious (if you\'re mid-conversation with someone using usted, su clearly means "your"), but when it isn\'t obvious, Spanish has a clean fix.',
        'To remove the ambiguity, replace su/sus + noun with [article] + noun + de + pronoun: el carro de él (his car), el carro de ella (her car), el carro de usted (your car, formal), el carro de ellos/ellas (their car), el carro de ustedes (your-all\'s car). This construction is completely normal and not at all clunky in Spanish — you\'ll hear it constantly whenever a conversation has more than one third person in play and the listener needs to know which one owns what.',
        "A natural moment to use this clarifying construction: imagine you're talking about both Juan and María, and you need to specify whose backpack you mean. Su mochila alone leaves it open; la mochila de Juan or la mochila de él nails it down. You don't need to use the de construction every time you say su — only reach for it when the context genuinely leaves the ownership unclear.",
      ],
      examples: [
        { es: 'Juan y María llegaron tarde. Su carro se dañó.', en: "Juan and María arrived late. Their car broke down. (context makes 'their' clear)" },
        { es: '¿Es la mochila de Juan o de María?', en: "Is it Juan's backpack or María's? (de + name, to specify)" },
        { es: 'No es su casa, es la casa de ella.', en: "It's not his house, it's her house. (de ella clarifies)" },
        { es: 'Perdón, ¿es esta su maleta? (usted)', en: 'Excuse me, is this your suitcase? (formal usted)' },
        { es: 'Los estudiantes terminaron su tarea.', en: 'The students finished their homework.' },
      ],
      commonMistakes: [
        'Don\'t assume su always means "their" just because it looks similar in a sentence with multiple people — check the context carefully, since su covers his/her/your(formal)/their all at once.',
        'Overusing de él / de ella / de ellos when context already makes the meaning obvious can sound unnatural — native speakers reach for the de construction specifically to resolve genuine ambiguity, not as a constant substitute for su.',
        'Don\'t translate "de él" as "of he" word-for-word in your head — de + subject pronoun (él, ella, usted, ellos, ellas, ustedes) is the standard way to clarify possession, and it\'s "de él," never "de su."',
      ],
    },
  ],

  vocab: [
    { es: 'despertarse', en: 'to wake up', example: 'Me despierto a las seis de la mañana.', exampleEn: 'I wake up at six in the morning.' },
    { es: 'levantarse', en: 'to get up', example: 'Nos levantamos temprano los lunes.', exampleEn: 'We get up early on Mondays.' },
    { es: 'ducharse', en: 'to shower', example: 'Él se ducha antes de desayunar.', exampleEn: 'He showers before having breakfast.' },
    { es: 'bañarse', en: 'to bathe / to swim', example: 'Los niños se bañan en el mar.', exampleEn: 'The kids swim/bathe in the sea.' },
    { es: 'vestirse', en: 'to get dressed', example: 'Ella se viste en cinco minutos.', exampleEn: 'She gets dressed in five minutes.' },
    { es: 'peinarse', en: "to comb/style one's hair", example: 'Me peino delante del espejo.', exampleEn: 'I comb my hair in front of the mirror.' },
    { es: 'lavarse los dientes', en: "to brush one's teeth", example: 'Nos lavamos los dientes dos veces al día.', exampleEn: 'We brush our teeth twice a day.' },
    { es: 'acostarse', en: 'to go to bed', example: '¿A qué hora te acuestas?', exampleEn: 'What time do you go to bed?' },
    { es: 'dormirse', en: 'to fall asleep', example: 'Mi hermano se duerme viendo la tele.', exampleEn: 'My brother falls asleep watching TV.' },
    { es: 'llamarse', en: 'to be called / named', example: '¿Cómo se llama tu perro?', exampleEn: "What's your dog's name?" },
    { es: 'mi / mis', en: 'my', example: 'Mi rutina no cambia mucho.', exampleEn: 'My routine doesn\'t change much.' },
    { es: 'tu / tus', en: 'your (informal)', example: '¿Cuál es tu horario esta semana?', exampleEn: 'What\'s your schedule this week?' },
    { es: 'su / sus', en: 'his / her / your (formal) / their', example: 'Su casa está muy cerca de aquí.', exampleEn: 'His/her/your/their house is very close to here.' },
    { es: 'nuestro / nuestra / nuestros / nuestras', en: 'our', example: 'Nuestra rutina empieza muy temprano.', exampleEn: 'Our routine starts very early.' },
    { es: 'vuestro / vuestra / vuestros / vuestras', en: 'your all (Spain, informal)', example: '¿Cuál es vuestro plan para hoy?', exampleEn: 'What\'s your (you-all\'s) plan for today?' },
  ],

  practice: [
    // ── reflexive_verbs block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which reflexive pronoun matches "nosotros"?', word: 'nos', english: 'ourselves', answer: 'nos', options: ['me', 'te', 'se', 'nos'], concept_id: 'reflexive_verbs', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Yo ___ a las siete de la mañana." (levantarse)', word: 'levantarse', english: 'to get up', answer: 'me levanto', concept_id: 'reflexive_verbs', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct stem-changing form: "Ella ___ muy rápido porque llega tarde." (vestirse)', word: 'vestirse', english: 'to get dressed', answer: 'se viste', concept_id: 'reflexive_verbs', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I go to bed at eleven.'", english: 'I go to bed at eleven.', answer: 'Me acuesto a las once.', word: 'acostarse', concept_id: 'reflexive_verbs', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Nos duchamos por la mañana"?', word: 'ducharse', english: 'to shower', answer: 'We shower in the morning.', altAnswers: ['We take a shower in the morning.'], concept_id: 'reflexive_verbs', difficulty: 1 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Yo lavo los dientes."', word: 'lavarse', english: 'to brush (wash) one\'s teeth', answer: 'Yo me lavo los dientes.', concept_id: 'reflexive_verbs', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly attaches the reflexive pronoun to an infinitive?', word: 'levantarse', english: 'to get up', answer: 'Voy a levantarme temprano.', options: ['Voy a me levantar temprano.', 'Voy a levantarme temprano.', 'Me voy a levantarme temprano.', 'Voy levantarme a temprano.'], concept_id: 'reflexive_verbs', difficulty: 2 },

    // ── possessives block (kept separate from reflexive_verbs; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which possessive correctly completes "___ casa es grande" (casa = feminine, "our house")?', word: 'nuestra', english: 'our', answer: 'nuestra', options: ['nuestro', 'nuestra', 'nuestros', 'su'], concept_id: 'possessives', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "___ hermanos viven en Madrid." (my, plural)', word: 'mis', english: 'my', answer: 'mis', concept_id: 'possessives', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Her books are on the table.'", english: 'Her books are on the table.', answer: 'Sus libros están sobre la mesa.', altAnswers: ['Sus libros están en la mesa.'], word: 'su/sus', concept_id: 'possessives', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "su carro" sin más contexto?', word: 'su', english: 'his/her/your(formal)/their', answer: "his car, her car, your (formal) car, or their car — su is ambiguous without context", concept_id: 'possessives', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Nuestro amigas son de Chile."', word: 'nuestro → nuestras', english: 'our (agrees with amigas, feminine plural)', answer: 'Nuestras amigas son de Chile.', concept_id: 'possessives', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'You want to make clear that the car belongs specifically to Juan, not to anyone else in the group. Which is best?', word: 'de él', english: 'his (literally: of him)', answer: 'el carro de él', options: ['su carro', 'el carro de él', 'el su carro', 'carro su'], concept_id: 'possessives', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with vuestro/vuestra, speaking to a group of friends in Spain: "¿Es ___ coche?"', word: 'vuestro', english: 'your (informal, plural, Spain)', answer: 'vuestro', concept_id: 'possessives', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other established grammar references before writing (July 2026):
// - Reflexive pronoun set (me/te/se/nos/os/se) and the drop-(-se)-conjugate-
//   add-pronoun formation rule for reflexive verbs
// - Reflexive pronoun placement: fixed before a conjugated verb; free to
//   precede the phrase or attach to an infinitive/gerund (both correct)
// - Meaning-shifting reflexive pairs: ir/irse, dormir/dormirse
// - Stem-changing patterns in common routine reflexives: despertarse (e→ie),
//   acostarse (o→ue), vestirse (e→i); levantarse/ducharse/llamarse fully
//   regular; nosotros/vosotros forms keep the unstressed original vowel
// - lavarse + definite article (not possessive) with body parts (lavarse
//   los dientes, not lavarse mis dientes)
// - Possessive adjectives mi/tu/su agree in number only, never gender;
//   nuestro/vuestro agree in both gender and number (four forms each)
// - Possessives precede the noun and replace the article (mi coche, not
//   "el mi coche")
// - su/sus ambiguity (his/her/your-formal/their) and the de + pronoun
//   (de él, de ella, de usted, de ellos/ellas, de ustedes) disambiguation
//   construction
// This content is complementary to the existing GRAMMAR_CARDS entries for
// reflexive_verbs and possessives in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough) and does not contradict them.
