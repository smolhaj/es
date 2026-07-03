// Unit 03 — People and Things (A1)
// Covers: noun_gender, definite_articles, indefinite_articles
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// WordReference-adjacent sources, RAE-derived explanations, and established
// grammar references before writing — see the audit note at the bottom of
// this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Every Noun Has a Gender: Predicting -o and -a',
      paragraphs: [
        "In English, nouns don't carry gender — a table, a book, and a friend are all just \"it,\" or whichever pronoun fits the person. Spanish works differently: every single noun, whether it's a person, an object, or an idea, is grammatically either masculine or feminine, and that choice isn't really about biology — a table (una mesa) isn't female in any real sense, and a book (un libro) isn't male. It's a grammatical category baked into the word itself, and it controls which little word (\"the,\" \"a\") goes in front of it, and how any adjective describing it has to change to match. This is one of the very first structural habits to build as a beginner, so let's start with the part that's genuinely good news.",
        'Here\'s the good news: Spanish gives you a strong hint for guessing a noun\'s gender almost every time — its ending. Nouns ending in -o are usually masculine: el libro ("the book"), el chico ("the boy"), el gato ("the cat"). Nouns ending in -a are usually feminine: la casa ("the house"), la chica ("the girl"), la mesa ("the table"). This isn\'t a vague tendency — it holds for the large majority of everyday nouns, so it\'s worth treating as your default guess the moment you meet a new word ending in -o or -a.',
        "Why does gender matter so much? Because it ripples outward through the sentence: the article you use (el/la, un/una — both covered later in this lesson) has to match, and so does every adjective describing the noun, which you'll build on soon. Get the gender right at the noun, and everything downstream falls into place; get it wrong, and a whole sentence can sound off to a native speaker's ear, even if every individual word is otherwise correct.",
      ],
      examples: [
        { es: 'el libro', en: 'the book (masculine)' },
        { es: 'la casa', en: 'the house (feminine)' },
        { es: 'el chico', en: 'the boy (masculine)' },
        { es: 'la chica', en: 'the girl (feminine)' },
        { es: 'el gato', en: 'the cat (masculine)' },
        { es: 'la mesa', en: 'the table (feminine)' },
      ],
      commonMistakes: [
        "Thinking gender is about real-world sex for objects — a table (mesa) isn't female and a book (libro) isn't male; it's a grammatical category tied to the word itself, not to meaning.",
        "Forgetting that gender decides which article you must use — you can't casually swap in el for a feminine noun; \"el mesa\" is not acceptable Spanish, it has to be la mesa.",
        "Assuming the -o/-a rule is a guarantee — it's an extremely strong predictor, but not an absolute law, which is exactly what the next section covers.",
      ],
    },
    {
      heading: "The Exceptions: When -a Doesn't Mean Feminine (and -o Doesn't Mean Masculine)",
      paragraphs: [
        "The -o/-a rule from the last section is reliable, but Spanish does have a real, well-documented set of exceptions, and a beginner needs to meet the most common ones early rather than getting blindsided later. The single most useful pattern-within-the-exception: a cluster of words of Greek origin that end in -ma are masculine, even though they end in -a. El problema (\"the problem\"), el programa (\"the program\"), el sistema (\"the system\"), el tema (\"the topic\"), el idioma (\"the language\"), and el clima (\"the climate\") are all masculine. Because they share that -ma ending, it's worth learning them as a small group rather than one at a time.",
        "A few other high-frequency -a nouns are masculine for their own individual historical reasons, unrelated to the -ma pattern: el día (\"the day\") and el mapa (\"the map\") are two of the most common words a beginner runs into constantly, so they're worth memorizing by name rather than trying to derive a rule for them.",
        "The exception runs the other way too, just less often: a small number of common nouns end in -o but are feminine. La mano (\"the hand\") is the single most important one to know — it comes from the Latin manus, which was already feminine, so the -o ending here is essentially a historical leftover that never changed. La foto (\"the photo\") and la radio (\"the radio\") are two more, and they have a tidier explanation: both are shortened forms of longer feminine words — la fotografía and la radiodifusión — and Spanish kept the original word's gender even after chopping off most of the word.",
      ],
      examples: [
        { es: 'el problema', en: 'the problem (masculine, despite -a)' },
        { es: 'el mapa', en: 'the map (masculine, despite -a)' },
        { es: 'el día', en: 'the day (masculine, despite -a)' },
        { es: 'el programa', en: 'the program (masculine, despite -a)' },
        { es: 'la mano', en: 'the hand (feminine, despite -o)' },
        { es: 'la foto', en: 'the photo (feminine, despite -o — short for la fotografía)' },
      ],
      commonMistakes: [
        "Saying \"la problema\" or \"la programa\" is a very natural mistake for a beginner — but words of Greek origin ending in -ma (problema, programa, sistema, tema, clima, idioma) are masculine as a group, so it's worth memorizing the pattern itself, not just individual words.",
        "Saying \"el mano\" instead of la mano is the reverse mistake — mano is feminine straight from Latin, and the -o ending doesn't override that.",
        "Treating la foto and la radio as brand-new feminine -o words to memorize individually — it's easier to remember that they're shortened forms of already-feminine words (fotografía, radiodifusión) that simply kept their gender.",
      ],
    },
    {
      heading: 'El, La, Los, Las: The Definite Article — and the Curious Case of el agua',
      paragraphs: [
        "Now that you can predict — and sometimes just have to know — a noun's gender, it's time to put that to use. El, la, los, and las all translate to the single English word \"the,\" but Spanish makes you pick the one that agrees with the noun in both gender and number: el for masculine singular, la for feminine singular, los for masculine plural, and las for feminine plural. El libro becomes los libros; la casa becomes las casas. There's no separate rule to learn here beyond matching what you already know about the noun, which is exactly why the last two sections mattered.",
        "Now for a genuinely famous exception, one every Spanish learner eventually asks about: agua (\"water\") is a completely normal feminine noun, and yet you'll almost always see it written el agua, not la agua. The reason is purely about sound, not meaning: agua starts with a stressed a- sound, and la agua creates an awkward run of two nearly-identical vowel sounds bumping into each other. So Spanish borrows the masculine singular article el purely to smooth that clash out — but this is a pronunciation fix, not a gender change. Agua is still, and has always been, feminine; that's exactly why any adjective describing it still takes the feminine ending: el agua fría (\"the cold water\"), never \"el agua frío.\" The same swap applies to a handful of other feminine nouns that begin with a stressed a- or ha- sound, like el hacha (\"the axe\") and el alma (\"the soul\").",
        "Two more pieces complete the picture. First, the moment you're talking about more than one — plural — the vowel clash disappears (the -s at the end of las does the separating), so the feminine article comes right back: las aguas, las hachas, las almas, never \"los aguas.\" Second, if any word slips in between the article and the noun — most often an adjective — the same thing happens, because el and agua are no longer sitting right next to each other: la misma agua (\"the same water\"). Keep both of those firmly in mind, because \"el agua\" is the version everyone remembers, and \"las aguas\" is the version everyone forgets.",
      ],
      examples: [
        { es: 'el chico / los chicos', en: 'the boy / the boys' },
        { es: 'la chica / las chicas', en: 'the girl / the girls' },
        { es: 'El agua está fría.', en: 'The water is cold. (agua stays feminine — fría, not frío)' },
        { es: 'Hay mucha agua en el río; las aguas bajan rápido.', en: 'There is a lot of water in the river; the waters are flowing fast.' },
        { es: 'El hacha es muy afilada.', en: 'The axe is very sharp. (hacha is feminine too — afilada, not afilado)' },
        { es: 'Bebimos la misma agua.', en: 'We drank the same water. (la returns once a word comes between article and noun)' },
      ],
      commonMistakes: [
        "\"La agua\" is a very natural-looking mistake for an English speaker — but it's wrong; the vowel clash is exactly why el steps in for stressed a-/ha- feminine nouns in the singular.",
        'Assuming el agua makes the noun grammatically masculine — it doesn\'t. Adjectives describing it still take the feminine ending: el agua fría, never el agua frío. This is the detail almost every quick explanation glosses over.',
        'Carrying el into the plural — "los aguas" is incorrect. The plural is always las aguas, since the -s breaks up the vowel clash that caused the switch to el in the first place.',
      ],
    },
    {
      heading: 'Un, Una, Unos, Unas: The Indefinite Article',
      paragraphs: [
        'Definite articles (el/la/los/las) point to something specific — "the book," the one you both already have in mind. Indefinite articles do the opposite job: un and una translate to "a"/"an," introducing something for the first time or speaking about it in general — not any particular book, just a book. Like the definite articles, they agree with the noun: un before a masculine singular noun (un libro), una before a feminine singular noun (una mesa).',
        'The plural forms, unos and unas, cover two different jobs that English keeps separate. The first is straightforward: unos/unas means "some" — unos libros ("some books"), unas mesas ("some tables"). The second is a genuinely useful trick English doesn\'t really have a matching word for: placed directly before a number, unos/unas means "about" or "approximately" — unos veinte minutos ("about twenty minutes"), unas treinta personas ("about thirty people"). Same word, two jobs, and context — is there a number right after it? — tells you which one is meant.',
        "A full contrast between when Spanish reaches for the definite article versus the indefinite one deepens in a later unit — for now, the practical takeaway is simpler: get comfortable with the automatic gender/number agreement (un/una/unos/unas matching the noun, exactly like el/la/los/las did), and you've got everything you need to introduce new people and things into a conversation.",
      ],
      examples: [
        { es: 'un libro', en: 'a book' },
        { es: 'una mesa', en: 'a table' },
        { es: 'unos chicos', en: 'some boys' },
        { es: 'unas chicas', en: 'some girls' },
        { es: 'Tengo unos veinte años.', en: "I'm about twenty years old." },
        { es: 'Hay unas casas grandes en esta calle.', en: 'There are some big houses on this street.' },
      ],
      commonMistakes: [
        'Forgetting to switch un to una before a feminine noun — "un mesa" is wrong; it has to be una mesa.',
        'Mixing up the two jobs of unos/unas — unas treinta personas right before a number means "about thirty people," not literally "some thirty people"; without a number right after it, unas personas just means "some people."',
        "Overusing indefinite articles the way English does — Spanish sometimes drops them entirely (for example, with professions after ser, which you'll see in a later unit), so don't assume every English \"a/an\" needs a matching un/una.",
      ],
    },
  ],

  vocab: [
    { es: 'el libro', en: 'the book', example: 'El libro está en la mesa.', exampleEn: 'The book is on the table.' },
    { es: 'la casa', en: 'the house', example: 'Mi casa es pequeña.', exampleEn: 'My house is small.' },
    { es: 'el chico', en: 'the boy', example: 'El chico juega en el parque.', exampleEn: 'The boy plays in the park.' },
    { es: 'la chica', en: 'the girl', example: 'La chica estudia español.', exampleEn: 'The girl studies Spanish.' },
    { es: 'el amigo', en: 'the friend (male)', example: 'Mi amigo vive en Madrid.', exampleEn: 'My (male) friend lives in Madrid.' },
    { es: 'la amiga', en: 'the friend (female)', example: 'Mi amiga habla tres idiomas.', exampleEn: 'My (female) friend speaks three languages.' },
    { es: 'el gato', en: 'the cat', example: 'El gato duerme todo el día.', exampleEn: 'The cat sleeps all day.' },
    { es: 'la mesa', en: 'the table', example: 'Los platos están en la mesa.', exampleEn: 'The plates are on the table.' },
    { es: 'el coche', en: 'the car', example: 'El coche es nuevo.', exampleEn: 'The car is new.' },
    { es: 'la puerta', en: 'the door', example: 'La puerta está cerrada.', exampleEn: 'The door is closed.' },
    { es: 'el papel', en: 'the paper', example: 'Necesito un papel y un lápiz.', exampleEn: 'I need a paper and a pencil.' },
    { es: 'la ciudad', en: 'the city', example: 'Vivimos en una ciudad grande.', exampleEn: 'We live in a big city.' },
    { es: 'el hombre', en: 'the man', example: 'El hombre trabaja en el banco.', exampleEn: 'The man works at the bank.' },
    { es: 'la mujer', en: 'the woman', example: 'La mujer es doctora.', exampleEn: 'The woman is a doctor.' },
    { es: 'el día', en: 'the day (masculine exception)', example: 'Hoy es un buen día.', exampleEn: 'Today is a good day.' },
    { es: 'la mano', en: 'the hand (feminine exception)', example: 'Dame la mano.', exampleEn: 'Give me your hand.' },
    { es: 'el problema', en: 'the problem (masculine exception)', example: 'Tenemos un problema.', exampleEn: 'We have a problem.' },
    { es: 'el mapa', en: 'the map (masculine exception)', example: 'El mapa está en la mochila.', exampleEn: 'The map is in the backpack.' },
    { es: 'el agua', en: 'the water (feminine noun that takes el)', example: 'El agua está muy fría.', exampleEn: 'The water is very cold.' },
    { es: 'la noche', en: 'the night', example: 'Trabajo por la noche.', exampleEn: 'I work at night.' },
  ],

  practice: [
    // ── noun_gender block (blocked practice: foundational concept drilled first, in isolation) ──
    { type: 'multiple_choice', prompt: 'Which article goes with "problema"? (This one is a well-known exception.)', word: 'problema', english: 'problem', answer: 'el', options: ['el', 'la', 'los', 'las'], concept_id: 'noun_gender', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "___ día es hermoso." (the day, masculine)', word: 'día', english: 'day', answer: 'El', concept_id: 'noun_gender', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'the map' (remember, this noun is an exception)", english: 'the map', answer: 'el mapa', word: 'mapa', concept_id: 'noun_gender', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "la mano"?', word: 'mano', english: 'the hand', answer: 'the hand', concept_id: 'noun_gender', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which of these nouns is masculine, even though it ends in -a?', word: 'problema', english: 'problem', answer: 'problema', options: ['casa', 'mesa', 'problema', 'chica'], concept_id: 'noun_gender', difficulty: 2 },

    // ── definite_articles block (kept separate from noun_gender; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "___ chicos son de España." (the boys, plural masculine)', word: 'chicos', english: 'the boys', answer: 'Los', concept_id: 'definite_articles', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly says "The water is cold"?', word: 'agua', english: 'water', answer: 'El agua está fría.', options: ['La agua está fría.', 'El agua está fría.', 'El agua está frío.', 'Las agua está fría.'], concept_id: 'definite_articles', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'the girls' (plural, feminine)", english: 'the girls', answer: 'las chicas', word: 'chicas', concept_id: 'definite_articles', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Los aguas están frías."', word: 'aguas', english: 'the waters', answer: 'Las aguas están frías.', concept_id: 'definite_articles', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "el hacha"?', word: 'hacha', english: 'the axe', answer: 'the axe', concept_id: 'definite_articles', difficulty: 2 },

    // ── indefinite_articles block (kept separate; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "Tengo ___ gato." (a, masculine)', word: 'gato', english: 'a cat', answer: 'un', concept_id: 'indefinite_articles', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which is the correct way to say "some tables"?', word: 'mesas', english: 'some tables', answer: 'unas mesas', options: ['unos mesas', 'unas mesas', 'unos mesa', 'una mesas'], concept_id: 'indefinite_articles', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'about twenty minutes' (using unos to mean approximately)", english: 'about twenty minutes', answer: 'unos veinte minutos', word: 'unos', concept_id: 'indefinite_articles', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "unas amigas"?', word: 'amigas', english: 'some friends', answer: 'some (female) friends', concept_id: 'indefinite_articles', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict (definite/
// indefinite article guides, "el agua" Q&A entries), RAE-derived
// explanations (Diccionario panhispánico de dudas guidance on stressed a-/
// ha- feminine nouns), and established pedagogical grammar sources
// (Lawless Spanish, StudySpanish, BaseLang, The Language Garage, Yabla)
// before writing (July 2026):
// - core -o = masculine / -a = feminine noun-gender rule as a strong but
//   non-absolute predictor
// - masculine nouns ending in -a: the Greek-origin -ma class (el problema,
//   el programa, el sistema, el tema, el idioma, el clima) plus el día and
//   el mapa as individually-memorized high-frequency exceptions
// - feminine nouns ending in -o: la mano (from Latin manus, already
//   feminine), la foto/la radio (shortened forms of la fotografía/la
//   radiodifusión that retained the original word's gender)
// - definite articles el/la/los/las agreeing in gender and number
// - the "el agua" rule specifically double-checked against the trap noted
//   in the brief: el/un before the noun is a pronunciation-driven swap for
//   feminine nouns with a stressed a-/ha- onset (el agua, el hacha, el
//   alma, el águila) — the noun's actual grammatical gender never changes,
//   confirmed by adjective agreement staying feminine (el agua fría, not
//   "el agua frío"); the plural reverts to las/unas (las aguas, unas
//   águilas) because the -s breaks up the vowel clash that caused the
//   singular swap in the first place; the la/una form also returns if a
//   word (e.g. an adjective) intervenes between article and noun (la misma
//   agua)
// - indefinite articles un/una/unos/unas agreeing in gender and number,
//   unos/unas meaning both "some" and, directly before a number,
//   "approximately" (unos veinte minutos)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// noun_gender, definite_articles, and indefinite_articles in
// src/content/grammar.js (same facts, fuller beginner-paced walkthrough)
// and does not contradict them.
