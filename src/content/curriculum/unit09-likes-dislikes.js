// Unit 09 — Likes & Dislikes (A2)
// Covers: gustar_type, demonstratives
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked. This content is
// written to be consistent with (not contradictory to) the existing
// gustar_type and demonstratives entries in src/content/grammar.js and
// functions/_lib/concepts.js.
//
// Sequencing note: concepts.js lists indirect_object_pronouns as a formal
// prerequisite of gustar_type, but that concept isn't taught until Unit 10.
// This mirrors how real Spanish textbooks sequence it: the gustar pronoun
// set (me/te/le/nos/os/les) is introduced here as a small, memorizable,
// fixed set scoped tightly to gustar-type verbs, with an explicit note
// telling the learner that the same words are part of a bigger pattern
// they'll learn formally next unit. No general indirect-object theory is
// taught here.

export default {
  sections: [
    {
      heading: 'Backwards Verbs: How Gustar Really Works',
      paragraphs: [
        "So far, every Spanish sentence you've built has followed a subject-does-the-action pattern, just like English: yo hablo (I speak), ella come (she eats). Gustar — the verb behind \"to like\" — breaks that pattern completely, and it's worth slowing down here, because trying to force gustar into an English sentence shape is the single most common stumbling block at this level.",
        'Gustar does not mean \"to like\" in a word-for-word sense. It literally means \"to be pleasing to.\" When you say Me gusta el café, you are not making \"I\" the subject and \"coffee\" the object, the way English does with \"I like coffee.\" You\'re saying, essentially, \"Coffee is pleasing to me\" — el café (coffee) is the grammatical subject of the sentence, and me (\"to me\") marks the person experiencing the pleasing. The verb gusta agrees with el café, not with you.',
        "This is why the verb changes shape depending on what's being liked, not who's doing the liking. Gusta (singular) is used when one thing is pleasing: Me gusta el café (I like coffee — singular, one drink). Gustan (plural) is used when more than one thing is pleasing: Me gustan las películas (I like movies — plural, many movies). Get in the habit of asking yourself \"is the thing liked singular or plural?\" before choosing gusta or gustan — the person liking it never changes that choice.",
        'The typical word order is [pronoun] + gusta/gustan + [the thing liked], usually with its article: Me gusta el café, Nos gustan los perros. If what\'s liked is an action rather than a noun, gustar uses the infinitive and stays singular no matter how many actions are listed: Me gusta nadar (I like to swim), Me gusta leer y escribir (I like to read and write — still gusta, because infinitives don\'t pluralize).',
      ],
      examples: [
        { es: 'Me gusta el café.', en: 'I like coffee. (Coffee is pleasing to me — singular thing liked.)' },
        { es: 'Me gustan las películas de terror.', en: 'I like horror movies. (Plural thing liked → gustan.)' },
        { es: '¿Te gusta el chocolate?', en: 'Do you like chocolate?' },
        { es: 'Nos gusta bailar.', en: 'We like to dance. (Infinitive → always singular gusta.)' },
        { es: 'A Juan le gustan los deportes.', en: 'Juan likes sports. (More on the "A Juan le" pattern next.)' },
      ],
      commonMistakes: [
        'The single biggest error English speakers make is conjugating gustar to match the person, the way "like" works in English — saying "Yo gusto el café" (as if it meant "I like coffee" the English way) is not correct Spanish. Gustar agrees with the thing liked, never with the person who likes it.',
        'Watch singular vs. plural carefully: Me gusta los libros is a very common mistake — since libros is plural, it must be Me gustan los libros.',
        "Don't drop the pronoun (me/te/le/nos/os/les) before gustar — unlike subject pronouns (yo, tú...), which Spanish happily omits, this little word is not optional. Gusta el café alone is incomplete; it needs Me gusta el café to say who is doing the liking.",
      ],
    },
    {
      heading: 'The Full Pronoun Set (and a Preview of What\'s Coming)',
      paragraphs: [
        "Gustar needs one of six small words in front of it to say who's doing the liking: me (to me), te (to you, informal), le (to him/her/you-formal), nos (to us), os (to you all, Spain informal), les (to them/you all). Put together with gustar, that gives you the full set you'll use constantly: me gusta(n), te gusta(n), le gusta(n), nos gusta(n), os gusta(n), les gusta(n).",
        "A heads-up on where these words come from: me, te, le, nos, os, and les are actually indirect object pronouns — a general category of Spanish pronoun used any time something happens \"to\" or \"for\" someone (as in \"she gives the book to me\"). You'll learn that fuller pattern formally in the next unit. For now, don't worry about the general rule — just learn this specific set as the fixed \"gustar pronouns.\" Memorizing them here, tied to a verb you'll use every day, is a genuinely good first exposure to words you'll meet again very soon in a bigger role.",
        'One wrinkle worth flagging early: le and les are ambiguous on their own. Le gusta el café could mean "he likes coffee," "she likes coffee," or "you (formal) like coffee" — Spanish doesn\'t distinguish these with le itself. To clarify (or simply to add emphasis), Spanish adds a + [name or pronoun] in front of the whole phrase: A Juan le gusta el café (Juan likes coffee), A ella le gusta el café (she likes coffee), A usted le gusta el café (you, formal, like coffee). Notice le doesn\'t disappear when you add the clarifier — both A Juan and le appear together; this is completely normal and not redundant in Spanish.',
        "This same a + [pronoun] construction works for every person, not just to disambiguate — it's also used for emphasis or contrast, the way English might stress a word out loud: A mí me gusta el café, pero a ti no te gusta (I like coffee, but you don't). The pattern is a mí, a ti, a él/ella/usted, a nosotros/nosotras, a vosotros/vosotras, a ellos/ellas/ustedes — always paired with the matching short pronoun (me, te, le, nos, os, les), never replacing it.",
      ],
      examples: [
        { es: 'A Juan le gusta el fútbol.', en: 'Juan likes soccer. (le clarified by A Juan)' },
        { es: 'A mí me gusta el té; a ti te gusta el café.', en: 'I like tea; you like coffee. (contrast, using a mí / a ti)' },
        { es: '¿A ustedes les gusta la música clásica?', en: 'Do you all like classical music?' },
        { es: 'A nosotros nos gusta viajar.', en: 'We like to travel.' },
        { es: 'A ella le gustan los gatos, no los perros.', en: 'She likes cats, not dogs.' },
      ],
      commonMistakes: [
        "Don't drop le when you add a Juan, a ella, a usted, etc. — A Juan gusta el café (missing le) is wrong; Spanish keeps both: A Juan le gusta el café.",
        'Le and les are two of the trickiest little words in Spanish precisely because they carry no gender information — hearing le gusta out of context genuinely doesn\'t tell you if "he," "she," or "you" is meant. Lean on the a + name/pronoun clarifier whenever it matters.',
        "These pronouns are a preview, not the full picture — you'll see me/te/le/nos/os/les again in Unit 10 doing more general work (giving, telling, showing things to people). For now it's fine to just know them as \"the words that go with gustar.\"",
      ],
    },
    {
      heading: 'More "Backwards" Verbs: encantar, interesar, molestar, doler',
      paragraphs: [
        'Gustar isn\'t alone — a whole family of verbs works exactly the same "backwards" way, using the identical pronoun set (me/te/le/nos/os/les) and the identical singular/plural agreement rule. Once gustar clicks, these come almost for free. Encantar (to love / to delight) is used for strong enthusiasm — stronger than gustar: Me encanta el chocolate (I love chocolate, literally "chocolate delights me").',
        'Interesar (to interest) and molestar (to bother/annoy) follow the exact same shape: Me interesa la historia (History interests me / I\'m interested in history), Me molesta el ruido (Noise bothers me). Just like gustar, these agree with the thing causing the interest or annoyance, not with the person: Me interesan las ciencias (plural — sciences interest me), Nos molestan los mosquitos (plural — mosquitoes bother us).',
        'Doler (to hurt/ache) works the same way and is especially common with body parts: Me duele la cabeza (My head hurts, literally "the head is hurting to me"), Me duelen los pies (My feet hurt). Notice Spanish uses the definite article (la cabeza, los pies) rather than a possessive like "my" — the same pattern you\'ve already seen with lavarse los dientes. The pronoun (me) already makes clear whose head or feet are meant, so adding mi would be redundant. Doler is also a stem-changing verb (o→ue) in the parts where the stem is stressed: duele, duelen — though as a "backwards" verb, you\'ll almost only ever use its third-person forms (duele/duelen), since the thing hurting is nearly always "it" or "they," not "I" or "you."',
        "One more you'll see often: faltar (to be lacking, to need). Me falta dinero (I need money / I'm short on money, literally \"money is lacking to me\"). All five of these verbs — encantar, interesar, molestar, doler, faltar — slot into exactly the same frame as gustar: [pronoun] + verb(singular/plural) + [the thing causing the feeling].",
      ],
      examples: [
        { es: 'A ella le encanta bailar salsa.', en: 'She loves dancing salsa.' },
        { es: 'Me interesan mucho los idiomas.', en: 'Languages interest me a lot. / I\'m very interested in languages.' },
        { es: '¿Te molesta si abro la ventana?', en: 'Does it bother you if I open the window?' },
        { es: 'Me duele la cabeza.', en: 'My head hurts.' },
        { es: 'Nos falta tiempo para terminar.', en: "We're short on time to finish. (literally: time is lacking to us)" },
      ],
      commonMistakes: [
        'Encantar is stronger than gustar — it\'s closer to "love" than "like." Saying Me encanta un poco el café ("I kind of love coffee") sounds odd to a native speaker; if the feeling is mild, reach for gustar instead.',
        "Don't add a possessive with doler and body parts — Me duele mi cabeza is redundant in Spanish; the correct form is Me duele la cabeza, exactly parallel to lavarse los dientes from Unit 8.",
        "These verbs still agree with the thing causing the feeling, not the experiencer — Me interesa las noticias is wrong because noticias is plural; it must be Me interesan las noticias.",
      ],
    },
    {
      heading: 'This, That, and That Over There: Demonstratives',
      paragraphs: [
        'Switching gears completely: English has two demonstrative words for pointing things out — "this" (near) and "that" (not near). Spanish makes a three-way distinction that English simply doesn\'t have: este (this, near the speaker), ese (that, near the listener), and aquel (that, over there — far from both speaker and listener). If you\'re holding a book, it\'s este libro. If your friend across the table is holding one, it\'s ese libro. If you\'re both looking at a book on a shelf across the room, it\'s aquel libro.',
        'All three change form to agree in gender and number with the noun they point to, giving four forms each: este/esta/estos/estas, ese/esa/esos/esas, aquel/aquella/aquellos/aquellas. So "these books" (near you) is estos libros, "those chairs" (near your listener) is esas sillas, and "those mountains" (far off in the distance) is aquellas montañas.',
        "In everyday speech, especially in casual contexts, many speakers blur the line between ese and aquel — the near-listener vs. very-far distinction is the one most likely to get flattened, while este (truly close to the speaker) stays distinct. As a learner, it's worth knowing all three precisely; you'll understand every speaker even if some blur ese/aquel themselves, and you'll sound precise when you keep the distinction clear.",
        "Spanish also has three neuter forms — esto, eso, aquello — for when you're pointing at something unspecified or abstract rather than a particular noun with a known gender: a whole situation, an idea, or an object you can't yet identify. ¿Qué es esto? (What is this?) works when you don't know what the object is; Todo eso es mentira (All of that is a lie) refers to an idea, not a specific noun. Unlike the other demonstratives, the neuter forms never change for gender or number — there's only ever one of each.",
      ],
      examples: [
        { es: 'Este libro es mío; ese es tuyo.', en: 'This book is mine; that one is yours. (both speaker and listener are holding one)' },
        { es: 'Estas fotos son de mi viaje.', en: 'These photos are from my trip. (near the speaker)' },
        { es: '¿Me pasas esa silla?', en: 'Can you pass me that chair? (near the listener)' },
        { es: 'Aquellas montañas se ven increíbles.', en: 'Those mountains (in the distance) look incredible.' },
        { es: '¿Qué es esto? — No sé, nunca vi eso antes.', en: "What is this? — I don't know, I've never seen that before. (neuter, unspecified)" },
      ],
      commonMistakes: [
        'Don\'t collapse all three distances into just "this/that" the way English does — using este for something clearly far away (aquel edificio, "that building over there") sounds off to a native speaker once you\'ve learned the three-way system.',
        "Forgetting agreement is a common slip: estos silla (wrong — silla is feminine) should be esta silla; estas problemas (wrong — problema is masculine despite the -a ending) should be estos problemas.",
        "Don't reach for a neuter form (esto/eso/aquello) when you actually know the noun's gender — if you know you're pointing at un libro, say este libro, not esto libro; neuter forms are only for unidentified things or whole ideas/situations, not known nouns.",
      ],
    },
  ],

  vocab: [
    { es: 'gustar', en: 'to like (literally: to be pleasing to)', example: 'Me gusta el café.', exampleEn: 'I like coffee.' },
    { es: 'encantar', en: 'to love (something), to delight', example: 'Nos encanta esta ciudad.', exampleEn: 'We love this city.' },
    { es: 'interesar', en: 'to interest', example: 'Me interesa el arte moderno.', exampleEn: "I'm interested in modern art." },
    { es: 'molestar', en: 'to bother, to annoy', example: '¿Te molesta la música alta?', exampleEn: 'Does loud music bother you?' },
    { es: 'doler (o→ue)', en: 'to hurt, to ache', example: 'Me duelen los pies.', exampleEn: 'My feet hurt.' },
    { es: 'faltar', en: 'to be lacking, to need', example: 'Nos falta azúcar.', exampleEn: "We're out of sugar / We need sugar." },
    { es: 'me', en: 'to me (gustar-type pronoun)', example: 'Me gustan los animales.', exampleEn: 'I like animals.' },
    { es: 'te', en: 'to you (informal, gustar-type pronoun)', example: '¿Te interesa el proyecto?', exampleEn: 'Are you interested in the project?' },
    { es: 'le', en: 'to him/her/you (formal, gustar-type pronoun)', example: 'A ella le encanta leer.', exampleEn: 'She loves reading.' },
    { es: 'nos', en: 'to us (gustar-type pronoun)', example: 'Nos gusta el cine.', exampleEn: 'We like the movies.' },
    { es: 'les', en: 'to them/you all (gustar-type pronoun)', example: 'A ellos les molesta el frío.', exampleEn: 'The cold bothers them.' },
    { es: 'este / esta / estos / estas', en: 'this / these (near the speaker)', example: 'Este café está delicioso.', exampleEn: 'This coffee is delicious.' },
    { es: 'ese / esa / esos / esas', en: 'that / those (near the listener)', example: '¿Cuánto cuesta esa camisa?', exampleEn: 'How much does that shirt cost?' },
    { es: 'aquel / aquella / aquellos / aquellas', en: 'that / those (over there, far from both)', example: 'Aquel edificio es muy antiguo.', exampleEn: 'That building over there is very old.' },
    { es: 'esto / eso / aquello', en: 'this / that (neuter — unspecified thing or idea)', example: 'No entiendo esto.', exampleEn: "I don't understand this." },
  ],

  practice: [
    // ── gustar_type block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which is correct: "I like books" (los libros = plural)?', word: 'gustar', english: 'to like', answer: 'Me gustan los libros.', options: ['Me gusto los libros.', 'Me gusta los libros.', 'Me gustan los libros.', 'Yo gusto los libros.'], concept_id: 'gustar_type', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "A Juan ___ gusta el café." (fill in the pronoun)', word: 'le', english: 'to him', answer: 'le', concept_id: 'gustar_type', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with gusta or gustan: "Nos ___ las películas de acción."', word: 'gustar', english: 'to like', answer: 'gustan', concept_id: 'gustar_type', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I like tea.'", english: 'I like tea.', answer: 'Me gusta el té.', word: 'gustar', concept_id: 'gustar_type', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'My head hurts.'", english: 'My head hurts.', answer: 'Me duele la cabeza.', word: 'doler', concept_id: 'gustar_type', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "A ella le encanta bailar"?', word: 'encantar', english: 'to love (something)', answer: 'She loves to dance.', concept_id: 'gustar_type', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Yo gusto el chocolate."', word: 'gustar', english: 'to like', answer: 'Me gusta el chocolate.', concept_id: 'gustar_type', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Me interesa las ciencias."', word: 'interesar', english: 'to interest', answer: 'Me interesan las ciencias.', concept_id: 'gustar_type', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'You want to make clear that it\'s specifically María (not someone else) who likes soccer. Which is correct?', word: 'a María le', english: "María's — clarifying le", answer: 'A María le gusta el fútbol.', options: ['María gusta el fútbol.', 'A María gusta el fútbol.', 'A María le gusta el fútbol.', 'Le gusta María el fútbol.'], concept_id: 'gustar_type', difficulty: 2 },

    // ── demonstratives block (kept separate from gustar_type; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'You are holding a book in your own hands. How do you say "this book"?', word: 'este libro', english: 'this book', answer: 'este libro', options: ['ese libro', 'este libro', 'aquel libro', 'esa libro'], concept_id: 'demonstratives', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete, pointing at mountains far in the distance: "___ montañas son hermosas." (feminine plural, far from both speaker and listener)', word: 'aquellas', english: 'those (over there)', answer: 'aquellas', concept_id: 'demonstratives', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Can you pass me that chair?' (the chair is next to the person you're talking to)", english: 'Can you pass me that chair?', answer: '¿Me pasas esa silla?', word: 'ese/esa', concept_id: 'demonstratives', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the agreement error: "Estos silla es nueva."', word: 'esta silla', english: 'this chair (feminine)', answer: 'Esta silla es nueva.', concept_id: 'demonstratives', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Qué es esto?"', word: 'esto', english: 'this (neuter, unspecified)', answer: 'What is this?', concept_id: 'demonstratives', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other established grammar references before writing (July 2026):
// - Gustar's literal meaning ("to be pleasing to") and its inverted subject/
//   indirect-object structure; the thing liked is the grammatical subject
// - gusta (singular) vs. gustan (plural) agreement with the thing liked, not
//   the person who likes it; infinitives always take singular gusta
// - Full gustar pronoun set (me/te/le/nos/os/les) and the a + noun/pronoun
//   clarifying construction (a Juan le gusta, a mí me gusta) — confirmed le/
//   les ambiguity (his/her/your-formal) requires this construction to
//   disambiguate, exactly as with su/sus in Unit 8
// - Verbs sharing gustar's "backwards" pattern: encantar, interesar,
//   molestar, doler, faltar — same pronoun set, same singular/plural
//   agreement rule, doler as an o→ue stem-changing verb almost always used
//   in third person; body parts with doler take the definite article, not
//   a possessive (parallel to lavarse los dientes, Unit 8)
// - Demonstrative three-way distance system: este (near speaker), ese (near
//   listener), aquel (far from both) — including the real-world note that
//   ese/aquel are sometimes blurred in casual speech while este stays
//   distinct
// - Four-form gender/number agreement for este/ese/aquel; neuter invariable
//   forms esto/eso/aquello for unspecified/abstract reference
// - RAE's 2010 style guidance that demonstrative pronouns no longer require
//   a written accent (éste/ésta forms are the pre-2010 convention)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// gustar_type and demonstratives in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough) and does not contradict them. The
// indirect_object_pronouns prerequisite listed in concepts.js is
// deliberately not fully taught here — see the sequencing note above this
// export.
