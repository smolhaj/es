// Unit 07 — Asking Questions (A1)
// Covers: question_words, prepositions_core
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// WordReference-adjacent sources, and established grammar references
// before writing — see the audit note at the bottom of this file for the
// specific claims checked.

export default {
  sections: [
    {
      heading: 'Questions Start Upside Down: ¿...? and the Core Question Words',
      paragraphs: [
        "Spanish has a punctuation habit English doesn't: every written question opens with an upside-down question mark, ¿, and closes with a normal one, ?. This isn't decorative — Spanish word order for a question often looks identical to a statement until you actually hit a question mark, so the opening ¿ warns the reader from the very first word that a question is coming, rather than making them guess until the end of the sentence.",
        'One detail that surprises beginners: the marks wrap only the question itself, not necessarily the whole sentence. If a greeting or aside comes before the question, it sits outside the marks: Oye, ¿qué hora es? ("Hey, what time is it?") — Oye stays outside the ¿, because only qué hora es? is the actual question.',
        "Now the words themselves. Spanish has a small, closed set of question words, and every single one of them carries a written accent mark (a tilde) when it's used to ask a question: qué (what), quién/quiénes (who), cómo (how), dónde (where), and cuándo (when). This accent is not optional styling — que, quien, como, donde, and cuando also exist as ordinary, unaccented words with completely different jobs (linking clauses together, mostly), so the accent is doing real grammatical work: it signals \"this word is asking something,\" not just decorating it.",
        "Quién deserves a special note, because it marks something English doesn't: number. English \"who\" is used for one person or a hundred people with no change. Spanish switches to quiénes the moment you're asking about more than one person — ¿Quién es? (Who is it? — one person) vs. ¿Quiénes son? (Who are they? — more than one).",
      ],
      examples: [
        { es: '¿Qué hora es?', en: 'What time is it?' },
        { es: '¿Quién es esa persona?', en: 'Who is that person?' },
        { es: '¿Quiénes son ustedes?', en: 'Who are you all?' },
        { es: '¿Cómo te llamas?', en: "What's your name? (literally: How do you call yourself?)" },
        { es: '¿Dónde está el baño?', en: 'Where is the bathroom?' },
        { es: 'Oye, ¿cuándo es tu cumpleaños?', en: 'Hey, when is your birthday?' },
      ],
      commonMistakes: [
        'Forgetting the opening ¿ is one of the most common beginner slips in writing — a sentence like "Qué hora es?" is missing half of its required punctuation in standard Spanish; both marks are mandatory, not just the closing one.',
        "Dropping the accent (writing que, quien, como, donde, cuando without the tilde) isn't a minor typo — it can change which word you've actually written, since the unaccented versions are different words with different grammatical roles.",
        "Using quién for a group is a common slip — if you expect more than one person in the answer, you need quiénes, not quién.",
      ],
    },
    {
      heading: 'Qué vs. Cuál: Two Different "Whats"',
      paragraphs: [
        "Here's the genuinely tricky part of this unit, and it's worth slowing down for: English \"what\" covers a lot of ground, but Spanish splits that ground between two words, qué and cuál/cuáles, and the dividing line isn't obvious from English. The core rule: use qué when you're asking for a definition or explanation (or when qué sits directly in front of a noun), and use cuál/cuáles when you're asking someone to select one item out of an implied set of options — even when the expected answer is something as ordinary as a name, a date, or a number.",
        'The classic example that trips up almost every beginner: "What\'s your name?" In English, "what" feels automatic here, so it\'s tempting to say ¿Qué es tu nombre? — but that\'s not what a native speaker would say. The correct question is ¿Cuál es tu nombre?, because you\'re not asking someone to define the concept of a name — you\'re asking them to pick their specific name out of the set of every possible name. Qué es tu nombre? would sound like you\'re literally asking "what is [the concept of] your name," which is a strange thing to ask a person. (In everyday conversation, Spanish speakers more often ask ¿Cómo te llamas? for a name — but when the verb is ser, as in "what/which is your name," cuál is the word that\'s actually correct.)',
        'One reliable shortcut: when a question word sits immediately in front of a noun with nothing in between, standard Spanish reaches for qué, not cuál — ¿Qué color prefieres? (What color do you prefer?), ¿Qué libro estás leyendo? (What book are you reading?). Putting cuál directly before a noun (¿cuál libro?) is heard in some everyday speech but is not the standard, prescriptively correct pattern — qué + noun is the safe, correct choice for a learner.',
        "Finally, the cuánto family: cuánto, cuánta, cuántos, cuántas ask about amount — \"how much\" or \"how many\" — and unlike the other question words, this one changes its ending to match the gender and number of the noun it refers to, just like an adjective. Cuánto and cuánta ask \"how much\" of something you don't count individually (cuánto dinero — how much money; cuánta agua — how much water); cuántos and cuántas ask \"how many\" of something you do count (cuántos libros — how many books; cuántas personas — how many people).",
      ],
      examples: [
        { es: '¿Cuál es tu nombre?', en: "What's your name? (selecting your name from all possible names)" },
        { es: '¿Qué es la felicidad?', en: 'What is happiness? (asking for a definition)' },
        { es: '¿Qué color prefieres?', en: 'What color do you prefer? (qué directly before a noun)' },
        { es: '¿Cuál de estos dos prefieres?', en: 'Which of these two do you prefer? (choosing from a set)' },
        { es: '¿Cuánto cuesta el boleto?', en: 'How much does the ticket cost?' },
        { es: '¿Cuántos años tienes?', en: 'How old are you? (literally: how many years do you have?)' },
      ],
      commonMistakes: [
        'The single most common English-speaker error in this whole unit: saying ¿Qué es tu nombre? out of habit, when a native speaker would say ¿Cuál es tu nombre? — remember, you\'re selecting a specific name, not defining the word "name."',
        "Forgetting that cuánto changes form: saying cuánto personas instead of cuántas personas is a gender/number mismatch — cuánto has to agree with the noun that follows it, exactly like an adjective would.",
        'Putting cuál directly in front of a noun (¿cuál libro?) instead of qué (¿qué libro?) — when the question word is glued right onto a noun with nothing between them, qué is the standard, correct choice.',
      ],
    },
    {
      heading: 'Por qué, Porque, and Porqué: Three Words, One Sound',
      paragraphs: [
        'Last piece of this unit, and it\'s a spelling trap that catches learners (and plenty of native speakers) constantly, because all three versions sound almost identical when spoken: por qué, porque, and porqué. They are three different words with three different jobs, and mixing them up is one of the most common written errors in Spanish.',
        'Por qué — two words, with an accent on qué — is the question word for "why." Use it any time you\'re asking a question, whether directly (¿Por qué estudias español?) or indirectly inside a larger sentence (No sé por qué llegó tarde — "I don\'t know why he arrived late").',
        'Porque — one word, no accent — is the answer to a por qué question: it means "because" and introduces the reason. It\'s a conjunction joining a result to its cause: Estudio español porque quiero viajar ("I study Spanish because I want to travel"). A handy memory trick: the question splits apart (por qué), and the answer joins together (porque).',
        'Porqué — one word, with an accent — is the odd one out: it\'s not a question word or a conjunction at all, but a noun meaning "the reason" or "the motive." Because it\'s a noun, it can take an article in front of it, like el porqué: No entiendo el porqué de tu decisión ("I don\'t understand the reason for your decision"). This one is rarer in everyday speech than the other two, but worth recognizing so it doesn\'t confuse you in reading.',
      ],
      examples: [
        { es: '¿Por qué estudias español?', en: 'Why do you study Spanish?' },
        { es: 'Estudio español porque me gusta la cultura.', en: 'I study Spanish because I like the culture.' },
        { es: 'No entiendo el porqué de tu decisión.', en: "I don't understand the reason for your decision." },
        { es: 'No sé por qué no vino.', en: "I don't know why he didn't come. (indirect question)" },
        { es: '¿Por qué no vienes? — Porque estoy cansado.', en: "Why aren't you coming? — Because I'm tired." },
      ],
      commonMistakes: [
        'Writing porque when you mean the question word por qué (or vice versa) is extremely common — if you\'re asking something, even indirectly ("I wonder why..."), it\'s two words with the accent: por qué. If you\'re giving a reason, it\'s one word, no accent: porque.',
        'Forgetting that porqué (the noun, "the reason") exists at all — many learners only ever learn the first two and are thrown off the first time they see el porqué in a reading passage.',
        'Dropping the accent on por qué is a small-looking mistake that actually changes the word — without the accent it reads as porque\'s two-word cousin por que (roughly "for which"), which is a different, much rarer construction.',
      ],
    },
    {
      heading: 'Answering With A, De, and En',
      paragraphs: [
        'Now that you can ask dónde, cuándo, and other questions, you need a few small words to actually answer them — Spanish\'s three most essential prepositions: a, de, and en. They\'re tiny, but they carry a lot of weight in nearly every sentence you\'ll build from here on.',
        'A means "to" or "at," and shows up constantly with movement or a specific point in time: Voy a Madrid ("I\'m going to Madrid"), Empiezo a las ocho ("I start at eight"). De means "of" or "from," used for origin and possession: Soy de España ("I\'m from Spain"), el libro de María ("María\'s book" — literally "the book of María"). En means "in" or "on," for location: Vivo en Barcelona ("I live in Barcelona"), Está en la mesa ("It\'s on the table").',
        'One contraction to lock in now, because it\'s mandatory, not optional: a + el always becomes al, and de + el always becomes del. Voy al mercado, never "voy a el mercado"; vengo del trabajo, never "vengo de el trabajo." This only happens with el (masculine singular "the") — a la, de la, a los, de los, and so on never contract.',
      ],
      examples: [
        { es: 'Voy a la playa este fin de semana.', en: "I'm going to the beach this weekend." },
        { es: 'Soy de México.', en: "I'm from Mexico." },
        { es: 'Vivimos en un apartamento pequeño.', en: 'We live in a small apartment.' },
        { es: 'Voy al cine con mis amigos.', en: 'I\'m going to the movies with my friends. (a + el → al)' },
        { es: 'Ella viene del trabajo muy cansada.', en: 'She comes from work very tired. (de + el → del)' },
      ],
      commonMistakes: [
        'Forgetting the mandatory contraction is one of the most common beginner slips: "voy a el parque" is incorrect — it must be voy al parque. The same applies to de + el → del.',
        'Mixing up en (location, "in/on") with a (movement toward, "to/at") — Estoy en casa ("I\'m at home," already there) versus Voy a casa ("I\'m going home," heading there) express two different ideas.',
        'A + el and de + el are the only contractions — don\'t apply the same shortcut to a la, de la, a los, or de los, which always stay as two separate words.',
      ],
    },
  ],

  vocab: [
    { es: 'qué', en: 'what', example: '¿Qué hora es?', exampleEn: 'What time is it?' },
    { es: 'quién', en: 'who (singular)', example: '¿Quién es esa persona?', exampleEn: 'Who is that person?' },
    { es: 'quiénes', en: 'who (plural)', example: '¿Quiénes son ustedes?', exampleEn: 'Who are you all?' },
    { es: 'cómo', en: 'how', example: '¿Cómo te llamas?', exampleEn: "What's your name?" },
    { es: 'dónde', en: 'where', example: '¿Dónde está el baño?', exampleEn: 'Where is the bathroom?' },
    { es: 'cuándo', en: 'when', example: '¿Cuándo es tu cumpleaños?', exampleEn: 'When is your birthday?' },
    { es: 'por qué', en: 'why', example: '¿Por qué estudias español?', exampleEn: 'Why do you study Spanish?' },
    { es: 'porque', en: 'because', example: 'Estudio español porque me gusta.', exampleEn: 'I study Spanish because I like it.' },
    { es: 'porqué', en: 'the reason (noun)', example: 'No entiendo el porqué de tu decisión.', exampleEn: "I don't understand the reason for your decision." },
    { es: 'cuál', en: 'which / what (singular)', example: '¿Cuál es tu nombre?', exampleEn: "What's your name? (selecting from all possible names)" },
    { es: 'cuáles', en: 'which / what (plural)', example: '¿Cuáles son tus planes?', exampleEn: 'What are your plans?' },
    { es: 'cuánto', en: 'how much (masc. sing.)', example: '¿Cuánto cuesta el boleto?', exampleEn: 'How much does the ticket cost?' },
    { es: 'cuánta', en: 'how much (fem. sing.)', example: '¿Cuánta agua necesitas?', exampleEn: 'How much water do you need?' },
    { es: 'cuántos', en: 'how many (masc. pl.)', example: '¿Cuántos años tienes?', exampleEn: 'How old are you?' },
    { es: 'cuántas', en: 'how many (fem. pl.)', example: '¿Cuántas personas vienen?', exampleEn: 'How many people are coming?' },
    { es: 'a', en: 'to / at', example: 'Voy a Madrid.', exampleEn: "I'm going to Madrid." },
    { es: 'de', en: 'of / from', example: 'Soy de España.', exampleEn: "I'm from Spain." },
    { es: 'en', en: 'in / on', example: 'Vivo en Barcelona.', exampleEn: 'I live in Barcelona.' },
  ],

  practice: [
    // ── question_words block (blocked practice: single-concept unit, internal variety of exercise type) ──
    { type: 'multiple_choice', prompt: 'Complete correctly: "¿___ es tu nombre?" (you are asking someone to give you their specific name)', word: 'cuál', english: 'which / what', answer: 'cuál', options: ['qué', 'cuál', 'cómo', 'quién'], concept_id: 'question_words', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "¿___ vives?" (Where do you live?)', word: 'dónde', english: 'where', answer: 'dónde', concept_id: 'question_words', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Why do you study Spanish?'", english: 'Why do you study Spanish?', answer: '¿Por qué estudias español?', word: 'por qué', concept_id: 'question_words', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Cuántos años tienes?"?', word: 'cuántos', english: 'how old are you', answer: 'How old are you? (literally: how many years do you have?)', concept_id: 'question_words', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Complete: "Estudio español ___ me gusta la cultura." (because)', word: 'porque', english: 'because', answer: 'porque', options: ['por qué', 'porque', 'porqué', 'qué'], concept_id: 'question_words', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete, choosing from several options: "¿___ es tu color favorito?"', word: 'cuál', english: 'which / what', answer: 'cuál', concept_id: 'question_words', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Who is that woman?'", english: 'Who is that woman?', answer: '¿Quién es esa mujer?', word: 'quién', concept_id: 'question_words', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'You want to ask a whole group, "Who are you all?" Which word do you need?', word: 'quiénes', english: 'who (plural)', answer: 'quiénes', options: ['quién', 'quiénes', 'qué', 'cuáles'], concept_id: 'question_words', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Cuánta agua necesitas?"?', word: 'cuánta', english: 'how much water do you need', answer: 'How much water do you need?', concept_id: 'question_words', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the noun form: "No entiendo el ___ de tu decisión." (the reason)', word: 'porqué', english: 'the reason', answer: 'porqué', concept_id: 'question_words', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which of these is correctly punctuated as a Spanish question?', word: '¿...?', english: 'inverted question mark', answer: '¿Qué hora es?', options: ['Qué hora es?', '¿Qué hora es?', '¡Qué hora es?', '¿Qué hora es!'], concept_id: 'question_words', difficulty: 1 },

    // ── prepositions_core block: a, de, en ──
    { type: 'multiple_choice', prompt: 'Choose the correct preposition: "Voy ___ Madrid."', word: 'a', english: 'to', answer: 'a', options: ['a', 'de', 'en', 'al'], concept_id: 'prepositions_core', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Soy ___ Argentina." (I am from Argentina)', word: 'de', english: 'from', answer: 'de', concept_id: 'prepositions_core', difficulty: 1 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Voy a el mercado."', word: 'al', english: 'to the', answer: 'Voy al mercado.', concept_id: 'prepositions_core', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We live in Barcelona.'", english: 'We live in Barcelona.', answer: 'Vivimos en Barcelona.', word: 'en', concept_id: 'prepositions_core', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Vengo del trabajo"?', word: 'del', english: 'I come from work', answer: 'I come from work. (de + el → del)', concept_id: 'prepositions_core', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, WordReference-
// adjacent pedagogical sources, and established grammar references before
// writing (July 2026):
// - Inverted ¿...? / ¡...! punctuation rule, including RAE's rule that the
//   opening mark wraps only the question itself, not any leading clause
//   (e.g. "Oye, ¿qué hora es?").
// - All core question words (qué, quién/quiénes, cómo, dónde, cuándo,
//   cuál/cuáles, cuánto family) require a written accent when used as
//   question words, distinguishing them from unaccented relative-pronoun/
//   conjunction counterparts (que, quien, como, donde, cuando, cual, cuanto).
// - quién (singular) vs. quiénes (plural) — Spanish marks number on "who"
//   where English does not; verb agreement follows the same split.
// - qué vs. cuál: qué for definitions/explanations and directly before a
//   noun (qué color, qué libro); cuál/cuáles for selecting one item from an
//   implied set, including when the expected answer is a name, date, or
//   number. Specifically verified: "What's your name?" = ¿Cuál es tu
//   nombre?, not ¿Qué es tu nombre?, because the question selects a specific
//   name rather than requesting a definition of "name" — confirmed against
//   SpanishDict's qué-vs-cuál guide and multiple pedagogical breakdowns of
//   this exact example.
// - Cuál directly before a noun (¿cuál libro?) is heard in some everyday
//   speech but is not the standard prescriptive pattern; qué + noun is
//   presented as the safe, correct beginner choice — verified this is a
//   genuinely disputed/nonstandard construction, not confidently taught as
//   correct.
// - cuánto/cuánta/cuántos/cuántas agree in gender and number with the noun
//   they quantify, exactly like an adjective (cuánto dinero, cuánta agua,
//   cuántos libros, cuántas personas).
// - por qué (question word, two words, accented) vs. porque (conjunction
//   "because", one word, unaccented) vs. porqué (noun "the reason", one
//   word, accented) — all three confirmed as genuinely distinct, correctly
//   spelled forms against FluentU, Spanish Academy, and Kwiziq breakdowns.
// This content is complementary to the existing question_words entry in
// src/content/grammar.js (same facts: qué/cuál distinction, cuánto
// agreement, accent-marking rule) and does not contradict it.
//
// Curriculum-pacing-lag fix (07-09-2026): added prepositions_core (a, de,
// en) section/practice — split off from prepositions_basic during the CEFR
// audit as the A1 core (con, sin, por, para and the rest stayed at A2 under
// prepositions_basic), but had no A1 unit teaching it. Folded in here since
// question words and their answers (dónde/en, de dónde/de) pair naturally.
// Contents cross-checked against SpanishDict; agrees with and does not
// contradict the existing GRAMMAR_CARDS entry for prepositions_core.
