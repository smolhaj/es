// Unit 15 — Irregular Verbs in the Present (A2)
// Covers: irregular_present
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked. This is a
// review-and-consolidate unit for ser, estar, and ir (already taught in
// earlier units) alongside first-time formal coverage of the yo-go verbs,
// saber/conocer, and the three stem-changing patterns — all under one
// umbrella concept, irregular_present, matching functions/_lib/concepts.js
// and the existing GRAMMAR_CARDS entry in src/content/grammar.js.

export default {
  sections: [
    {
      heading: "The \"Yo-Go\" Verbs: One Irregular Spot, Not a Whole New Verb",
      paragraphs: [
        "So far almost every verb you've conjugated has followed one of three clean patterns: regular -ar, -er, or -ir endings. Irregular verbs break that pattern — but here's the encouraging part: most of Spanish's \"irregular\" present-tense verbs are irregular in exactly one form, the yo form, and completely regular everywhere else. Learn that one oddball form, and the rest of the verb takes care of itself.",
        'The clearest family is what many textbooks call the "go-verbs": hacer (to do/make) → hago, poner (to put/place) → pongo, and salir (to leave/go out) → salgo. Every other form is fully regular: haces, hace, hacemos, hacéis, hacen; pones, pone, ponemos, ponéis, ponen; sales, sale, salimos, salís, salen. Just memorize the -go yo form for each verb, and conjugate everything else exactly as you would any regular -er or -ir verb.',
        "Tener (to have) and venir (to come) also pick up that -go ending in yo — tengo, vengo — but they add a second irregularity on top: the stem vowel itself changes from e to ie in every form except nosotros/vosotros (tienes, tiene, tienen; vienes, viene, vienen), while tenemos/tenéis and venimos/venís keep the plain e. That's a preview of the stem-changing pattern the next section covers in full — tener and venir are simply verbs that combine both irregularities at once, which is exactly why they're worth flagging now: tener in particular is one of the most-used verbs in the entire language.",
        "Saber (to know facts/how to do something) and conocer (to know/be familiar with a person, place, or thing) are irregular in yo for a different reason. Saber's yo form, sé, doesn't follow any visible pattern — you simply memorize it (not \"sabo\"); everything else is regular: sabes, sabe, sabemos, sabéis, saben. Conocer's yo form, conozco, does follow a pattern, just a different one: verbs ending in a vowel plus -cer or -cir (like parecer or ofrecer) take -zco in yo. Beyond that, conocer is fully regular: conoces, conoce, conocemos, conocéis, conocen.",
        'Saber and conocer both translate as "to know" in English, but Spanish splits the meaning in two, and mixing them up is one of the most common beginner errors. Use saber for facts, information, and learned skills — sé la respuesta (I know the answer), sé nadar (I know how to swim). Use conocer for familiarity with people, places, or things — conozco a tu hermano (I know your brother), conozco Madrid (I know/am familiar with Madrid). A useful gut check: if you could answer with "yes/no" or a fact, it\'s saber; if you\'re talking about having met or visited something, it\'s conocer.',
      ],
      examples: [
        { es: 'Hago la tarea todos los días.', en: 'I do homework every day.' },
        { es: 'Pongo el libro sobre la mesa.', en: 'I put the book on the table.' },
        { es: 'Salgo de casa a las siete.', en: 'I leave home at seven.' },
        { es: 'Tengo un hermano; vengo de una familia grande.', en: 'I have a brother; I come from a big family.' },
        { es: 'Sé nadar, pero no sé bailar muy bien.', en: "I know how to swim, but I don't know how to dance very well." },
        { es: 'Conozco a tu prima; no conozco Madrid todavía.', en: "I know your cousin; I don't know Madrid yet." },
      ],
      commonMistakes: [
        'A frequent slip is regularizing the yo form — "yo haco," "yo pono," "yo salo" — instead of the memorized irregular forms hago, pongo, salgo. Everything else in these verbs is regular, which is exactly why the yo form stands out and needs separate memorization.',
        'Don\'t say "yo sabo" for saber — the correct irregular yo form is sé, with no visible connection to the infinitive. It just has to be memorized on its own.',
        'Mixing up saber and conocer is extremely common for English speakers, since both mean "to know." Remember: facts and skills take saber (sé la hora, sé cocinar); people, places, and things you\'re familiar with take conocer (conozco a Ana, conozco ese restaurante).',
      ],
    },
    {
      heading: 'The Boot Pattern: Stem-Changing Verbs (e→ie, o→ue, e→i)',
      paragraphs: [
        "A second large family of irregular verbs changes a vowel in the stem — the part before the ending — rather than the ending itself. These are called stem-changing verbs, and they follow a shape teachers often call the \"boot\": the change happens in yo, tú, él/ella/usted, and ellos/ellas/ustedes, but nosotros and vosotros are left out and keep the plain infinitive vowel. Draw a line around those four changing forms on a conjugation chart and it traces the outline of a boot — a handy visual for which forms change and which don't.",
        'There are three patterns to learn, and each is best anchored to one common verb. Querer (to want/to love) shows e→ie: quiero, quieres, quiere, queremos, queréis, quieren — notice queremos and queréis keep the plain e. Poder (to be able to/can) shows o→ue: puedo, puedes, puede, podemos, podéis, pueden — again, podemos and podéis keep the plain o. Pedir (to ask for/to order) shows e→i, a pattern that only ever appears in -ir verbs: pido, pides, pide, pedimos, pedís, piden — pedimos and pedís keep the plain e.',
        "These three verbs are just the anchors — the same three patterns repeat across dozens of other common verbs you'll meet going forward: e→ie also covers pensar (to think), empezar (to begin), and preferir (to prefer); o→ue also covers volver (to return), dormir (to sleep), and encontrar (to find); e→i also covers servir (to serve) and seguir (to follow/continue). Once you've internalized the pattern with querer, poder, and pedir, recognizing it in a new verb is mostly a matter of noticing the shape, not learning a brand-new rule each time.",
        "Remember tener and venir from the previous section? They're actually members of this same e→ie family (tienes, tiene, tienen; vienes, viene, vienen) — they just also happen to add the irregular -go ending in yo (tengo, vengo). So rather than three unrelated irregularities to memorize, you really have two overlapping systems: the yo-go/yo-only irregularity, and the boot-shaped stem change — and some verbs, like tener and venir, sit at the intersection of both.",
      ],
      examples: [
        { es: 'Quiero aprender español este año.', en: 'I want to learn Spanish this year.' },
        { es: '¿Puedes ayudarme un momento?', en: 'Can you help me for a moment?' },
        { es: 'Ella pide un café con leche.', en: 'She orders a coffee with milk.' },
        { es: 'Queremos viajar este verano.', en: 'We want to travel this summer. (nosotros — no stem change)' },
        { es: 'Vosotros pedís mucho, ¿no?', en: "You all ask for a lot, don't you? (vosotros — no stem change)" },
        { es: 'Tengo hambre y quiero comer algo ya.', en: "I'm hungry and I want to eat something now." },
      ],
      commonMistakes: [
        'The single most common error with stem-changing verbs is applying the change to nosotros/vosotros — "nosotros pidemos," "nosotros puedemos" — when those forms should keep the plain infinitive vowel: pedimos, podemos.',
        "Mixing up which vowel a verb changes to is another frequent slip — poder changes o→ue (puedo), not o→o or o→u alone, so \"pudo\" as a present-tense form is wrong (pudo is actually a preterite/past form of a different verb pair entirely, which you'll meet later).",
        "Don't assume every -er/-ir verb with an e or o in the stem is automatically stem-changing — comer (to eat) and vivir (to live) are perfectly regular. The stem change has to be learned verb by verb (though a dictionary or vocab list will always mark it).",
      ],
    },
    {
      heading: 'Consolidating Ser, Estar, Ir, and Haber',
      paragraphs: [
        "You've already met ser, estar, and ir in earlier units — this section isn't teaching them for the first time so much as gathering them into the same \"irregular present\" family you've now built explicit rules for, plus introducing haber, the last of the handful of verbs so irregular they don't fit into either pattern above at all. As a quick refresher: ser is soy, eres, es, somos, sois, son; estar is estoy, estás, está, estamos, estáis, están; ir is voy, vas, va, vamos, vais, van. None of these follow the yo-go or stem-change patterns — they're simply irregular throughout and have to be memorized as their own shapes, which you've likely already done through repeated use.",
        'Haber is the fourth fully irregular verb, and it does two very different jobs. As a personal verb matching yo/tú/etc., it conjugates he, has, ha, hemos, habéis, han — you\'ll mostly meet this later as the "have" of compound tenses like the present perfect (he comido, "I have eaten"), which is a topic for a future unit, so don\'t worry about producing it yet. Far more useful to you right now is haber\'s other job: the special impersonal form hay, meaning "there is" or "there are." Unlike English, which changes "is" to "are" depending on number, hay never changes at all — Hay un mercado cerca (There\'s a market nearby) and Hay muchos mercados cerca (There are many markets nearby) both use the exact same word.',
        'One contrast worth locking in now, because English blurs it: "I have" a possession is tener (Tengo un perro — I have a dog), but "there is/are" something existing is hay, from haber (Hay un perro en el jardín — There\'s a dog in the garden). Both can sound like "have" in a loose English translation, but they answer different questions — tener says who owns something, hay says something exists — and native speakers never substitute one for the other.',
      ],
      examples: [
        { es: 'Soy de Argentina, pero estoy en España ahora.', en: "I'm from Argentina, but I'm in Spain now." },
        { es: 'Vamos al cine esta noche.', en: "We're going to the movies tonight." },
        { es: 'Hay un mercado cerca de mi casa.', en: "There's a market near my house." },
        { es: 'Hay muchos parques en esta ciudad.', en: 'There are many parks in this city. (hay stays the same)' },
        { es: 'No tengo mucho dinero, pero hay una tienda barata cerca.', en: "I don't have much money, but there's a cheap store nearby." },
      ],
      commonMistakes: [
        'Don\'t pluralize hay to match a plural noun — "hay son muchos parques" is wrong; hay is invariable and stays hay no matter how many things you\'re describing.',
        'Don\'t confuse hay (existence: "there is/are") with tener (possession: "to have") just because both loosely translate to "have" in casual English — Tengo dos hermanos (I have two siblings) and Hay dos personas en la sala (There are two people in the room) are not interchangeable.',
        "Since ser, estar, and ir are fully irregular with no shared pattern between them, don't try to derive their forms from a rule the way you can with hago/pongo/salgo or quiero/puedo — these three (plus haber) simply have to be memorized as their own shapes.",
      ],
    },
    {
      heading: "Idioms Built on Tener: Describing How You Feel",
      paragraphs: [
        "Now that tengo/tienes/tiene is second nature, here's a payoff that surprises a lot of English speakers: Spanish uses tener, not ser or estar, to describe many physical and emotional states that English expresses with \"to be.\" Tener hambre (to be hungry), tener sed (to be thirsty), tener sueño (to be sleepy), tener frío (to be cold), and tener calor (to be hot) all follow the same shape — literally, they mean \"to have hunger/thirst/sleepiness/cold/heat,\" even though the natural English translation uses \"be.\"",
        'The same pattern extends to emotions and a few other very common situations: tener miedo (to be afraid), tener prisa (to be in a hurry), tener razón (to be right), tener cuidado (to be careful), and tener ganas de + infinitive (to feel like doing something) — Tengo ganas de ver esa película (I feel like watching that movie). Age works the same way too: Spanish asks ¿Cuántos años tienes? (literally "how many years do you have?") and answers with Tengo veinte años (I am twenty years old) — never with ser or estar.',
        "Because every one of these is just tener plus a noun, you already know how to conjugate all of them in every person — Tengo miedo, tienes miedo, tiene miedo, tenemos miedo, tenéis miedo, tienen miedo — the grammar is nothing new, just a very high-value vocabulary payoff for the irregular verb you've already mastered.",
      ],
      examples: [
        { es: 'Tengo mucha hambre; ¿comemos ya?', en: "I'm very hungry; should we eat now?" },
        { es: '¿Tienes miedo de las arañas?', en: 'Are you afraid of spiders?' },
        { es: 'Mi abuela tiene ochenta años.', en: 'My grandmother is eighty years old.' },
        { es: 'Tenemos prisa — el tren sale en cinco minutos.', en: "We're in a hurry — the train leaves in five minutes." },
        { es: 'Tengo ganas de ver esa película.', en: 'I feel like watching that movie.' },
      ],
      commonMistakes: [
        'A very common error is using ser or estar for these expressions by direct translation from English — "soy hambriento" or "estoy con hambre" instead of the natural tengo hambre. These tener idioms are the standard, expected way to express them.',
        'For age, don\'t say "soy veinte años" or "tengo veinte" alone — Spanish requires años: Tengo veinte años, not a shortened version that drops the word for "years."',
        "Since these are set expressions with a noun (hambre, sed, miedo, etc.), you intensify them with mucho/mucha, not muy — tengo mucha hambre (a lot of hunger), not \"tengo muy hambre.\"",
      ],
    },
  ],

  vocab: [
    { es: 'tener', en: 'to have', example: 'Tengo veinte años.', exampleEn: 'I am twenty years old.' },
    { es: 'hacer', en: 'to do / to make', example: 'Hago la tarea todas las tardes.', exampleEn: 'I do homework every afternoon.' },
    { es: 'poner', en: 'to put / to place', example: 'Pongo la mesa antes de cenar.', exampleEn: 'I set the table before dinner.' },
    { es: 'salir', en: 'to leave / to go out', example: 'Salgo de casa a las ocho.', exampleEn: 'I leave home at eight.' },
    { es: 'saber', en: 'to know (facts / how to)', example: 'Sé hablar tres idiomas.', exampleEn: 'I know how to speak three languages.' },
    { es: 'conocer', en: 'to know / be familiar with', example: 'Conozco muy bien esta ciudad.', exampleEn: 'I know this city very well.' },
    { es: 'querer', en: 'to want / to love', example: 'Quiero un vaso de agua.', exampleEn: 'I want a glass of water.' },
    { es: 'poder', en: 'to be able to / can', example: 'No puedo salir esta noche.', exampleEn: "I can't go out tonight." },
    { es: 'pedir', en: 'to ask for / to order', example: 'Ella pide la cuenta.', exampleEn: 'She asks for the check.' },
    { es: 'venir', en: 'to come', example: 'Vengo de la oficina.', exampleEn: "I'm coming from the office." },
    { es: 'ser', en: 'to be (identity/permanent)', example: 'Somos estudiantes de español.', exampleEn: 'We are Spanish students.' },
    { es: 'estar', en: 'to be (state/location)', example: 'Estamos muy cansados hoy.', exampleEn: 'We are very tired today.' },
    { es: 'ir', en: 'to go', example: 'Vamos al parque los domingos.', exampleEn: 'We go to the park on Sundays.' },
    { es: 'haber (hay)', en: 'to have (aux.) / there is, there are', example: 'Hay mucho tráfico hoy.', exampleEn: "There's a lot of traffic today." },
  ],

  practice: [
    // ── yo-go / saber-conocer block (blocked practice: drill this sub-pattern in isolation first) ──
    { type: 'multiple_choice', prompt: 'Which is the correct yo form of hacer?', word: 'hacer', english: 'to do/make', answer: 'hago', options: ['hago', 'haco', 'hazo', 'hace'], concept_id: 'irregular_present', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Yo ___ la mesa todas las noches." (poner)', word: 'poner', english: 'to put/place', answer: 'pongo', concept_id: 'irregular_present', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I don't know the answer.'", english: "I don't know the answer.", answer: 'No sé la respuesta.', word: 'saber', concept_id: 'irregular_present', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Conozco a tu hermano"?', word: 'conocer', english: 'to know / be familiar with', answer: 'I know your brother.', concept_id: 'irregular_present', difficulty: 1 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Yo conozco que la fiesta es a las ocho."', word: 'saber vs. conocer', english: 'to know (fact) vs. to know (familiarity)', answer: 'Yo sé que la fiesta es a las ocho.', concept_id: 'irregular_present', difficulty: 2 },

    // ── stem-changing block (e→ie, o→ue, e→i; kept separate before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which form of poder means "we can"?', word: 'poder', english: 'to be able to/can', answer: 'podemos', options: ['podemos', 'puedemos', 'podéis', 'pueden'], concept_id: 'irregular_present', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Ella ___ un café." (pedir)', word: 'pedir', english: 'to ask for/order', answer: 'pide', concept_id: 'irregular_present', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I want to travel to Peru.'", english: 'I want to travel to Peru.', answer: 'Quiero viajar a Perú.', word: 'querer', concept_id: 'irregular_present', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Vosotros pedís mucho"?', word: 'pedir', english: 'to ask for/order', answer: 'You all ask for a lot.', concept_id: 'irregular_present', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Nosotros pidemos la cuenta."', word: 'pedir (nosotros)', english: 'to ask for/order', answer: 'Nosotros pedimos la cuenta.', concept_id: 'irregular_present', difficulty: 2 },

    // ── fully irregular + tener idioms block (consolidation review) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly expresses "I am twenty years old"?', word: 'tener + años', english: 'to be __ years old', answer: 'Tengo veinte años.', options: ['Soy veinte años.', 'Estoy veinte años.', 'Tengo veinte años.', 'Hay veinte años.'], concept_id: 'irregular_present', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "___ dos gatos en la casa." (haber — existence, not tener)', word: 'hay', english: 'there is/are', answer: 'Hay', concept_id: 'irregular_present', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We are hungry and thirsty.'", english: 'We are hungry and thirsty.', answer: 'Tenemos hambre y sed.', word: 'tener hambre/sed', concept_id: 'irregular_present', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Tengo mucha prisa"?', word: 'tener prisa', english: 'to be in a hurry', answer: "I'm in a big hurry.", concept_id: 'irregular_present', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other established grammar references before writing (July 2026):
// - Yo-go verbs: hacer→hago, poner→pongo, salir→salgo, regular elsewhere
//   (haces/hace/hacemos/hacéis/hacen, etc.)
// - Tener/venir combine the -go yo ending with an e→ie stem change in
//   tú/él/ellos forms only (tengo/tienes/tiene/tenemos/tenéis/tienen;
//   vengo/vienes/viene/venimos/venís/vienen)
// - Saber: irregular yo (sé), regular elsewhere (sabes/sabe/sabemos/sabéis/
//   saben); Conocer: irregular yo via the -zco pattern (conozco), regular
//   elsewhere (conoces/conoce/conocemos/conocéis/conocen); saber = facts/
//   skills vs. conocer = familiarity with people/places/things
// - Stem-changing "boot" pattern (all forms except nosotros/vosotros):
//   querer e→ie (quiero/quieres/quiere/queremos/queréis/quieren), poder o→ue
//   (puedo/puedes/puede/podemos/podéis/pueden), pedir e→i (pido/pides/pide/
//   pedimos/pedís/piden)
// - Ser (soy/eres/es/somos/sois/son), estar (estoy/estás/está/estamos/
//   estáis/están), and ir (voy/vas/va/vamos/vais/van) full present
//   conjugations
// - Haber: personal forms he/has/ha/hemos/habéis/han (auxiliary, used for
//   compound tenses not yet taught) vs. the invariable impersonal hay
//   ("there is/are"), which never changes for number
// - Tener idioms: tener hambre/sed/sueño/frío/calor/miedo/prisa/razón/
//   cuidado/ganas de, and tener + años for age — all use tener, not ser/
//   estar, and intensify with mucho/mucha (not muy)
// This content agrees with (does not contradict) the existing
// irregular_present entry in src/content/grammar.js and
// functions/_lib/concepts.js, and consolidates the ir/ser/estar material
// already introduced in earlier units (present_progressive/near_future,
// ser_vs_estar) rather than re-teaching it from scratch.
