// Unit 02 — Numbers & Time (A1)
// Covers: numbers_1_20, numbers_21_100, ordinal_numbers
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// WordReference-adjacent pedagogical sources, RAE-derived orthography
// guidance, and established grammar references before writing — see the
// audit note at the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Counting from Zero: Numbers 0–20',
      paragraphs: [
        "Numbers are some of the most-used words in any language — you need them for age, time, prices, addresses, phone numbers, and a hundred small daily moments. The good news is that Spanish numbers are extremely regular once you get past twenty. The less good news is that, just like English (\"eleven,\" \"twelve,\" \"thirteen\" don't obviously come from \"one,\" \"two,\" \"three\"), the numbers 0 through 15 in Spanish are mostly their own unique words that simply need to be memorized: cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez — then once, doce, trece, catorce, quince (11–15), each its own word rather than a combination.",
        "Sixteen through nineteen is where a pattern kicks in for the first time: Spanish fuses diez (\"ten\") + y (\"and\") + the units digit into a single written word — dieciséis (16), diecisiete (17), dieciocho (18), diecinueve (19). Say them out loud slowly and you can hear \"diez-y-seis\" hiding inside dieciséis. Note the accent mark on dieciséis (needed because the stress falls on that final -séis syllable) — diecisiete, dieciocho, and diecinueve don't need one. Veinte (20) then stands alone as its own word, closing out this block.",
        'One more thing to build in early, because it will resurface constantly: uno (\"one\") changes form depending on what it\'s doing. Counting by itself — uno, dos, tres — it stays uno. But the moment it sits directly in front of a noun as a describing word, it shortens to un before a masculine noun (un libro, "one book") and becomes una before a feminine noun (una mesa, "one table") — the same masculine/feminine split you\'ll see everywhere in Spanish. Keep this pattern in your back pocket: it comes back for every "-one" compound number later (veintiuno, treinta y uno, and so on).',
      ],
      examples: [
        { es: 'cero, uno, dos, tres, cuatro, cinco', en: '0, 1, 2, 3, 4, 5' },
        { es: 'diez, once, doce, trece, catorce, quince', en: '10, 11, 12, 13, 14, 15' },
        { es: 'dieciséis, diecisiete, dieciocho, diecinueve, veinte', en: '16, 17, 18, 19, 20' },
        { es: 'Tengo un hermano y una hermana.', en: 'I have one brother and one sister.' },
        { es: 'Cuento: uno, dos, tres, cuatro...', en: 'Counting: one, two, three, four...' },
      ],
      commonMistakes: [
        "Don't try to reason out 11–15 the way you can 16–19 — once, doce, trece, catorce, and quince are their own words, not combinations, so they simply have to be memorized like English \"eleven\" through \"fifteen.\"",
        'Writing 16–19 as two words ("diez y seis") is an older spelling the RAE still lists as historically valid, but it looks outdated today — the modern, expected spelling is the fused one-word form: dieciséis, not diez y seis.',
        'Watch the gender switch on uno: "un libro" is correct, but "uno libro" is not — uno only stays uno when it\'s standing alone (counting) or after the noun, never directly before a masculine noun.',
      ],
    },
    {
      heading: 'Twenty-One to One Hundred: Tens, "Y," and Gender Agreement',
      paragraphs: [
        "The 16–19 fusing pattern you just learned actually keeps going all the way through 29: veintiuno (21), veintidós (22), veintitrés (23), veinticuatro (24), veinticinco (25), veintiséis (26), veintisiete (27), veintiocho (28), veintinueve (29) are each written as a single word, a contraction of \"veinte y...\" Four of these carry a written accent because the stress lands on a final syllable ending in -s: dieciséis, veintidós, veintitrés, and veintiséis. The rest of the teens/twenties (diecisiete, dieciocho, diecinueve, veintiuno, veinticuatro, veinticinco, veintisiete, veintiocho, veintinueve) don't need one.",
        'Here\'s the explicit rule where the pattern changes, and it\'s worth stating plainly because it trips people up: treinta (30) stands alone, but starting at 31, Spanish switches to three separate words — tens + y + units, with visible spaces: treinta y uno (31), treinta y dos (32), cuarenta y cinco (45), and so on, all the way to noventa y nueve (99). Nothing from 31 onward fuses into one word the way 16–29 did. So you get veintidós as one word but treinta y dos as three — same "y," completely different spelling convention on either side of thirty.',
        'The un/una gender-agreement pattern from the last section applies to every one of these "-one" compounds, and it apocopates (shortens) the same way: veintiún días ("twenty-one days," masculine, dropping the final -o) but veintiuna personas ("twenty-one people," feminine, staying in full). Likewise treinta y un años but treinta y una semanas, cuarenta y un libros but cuarenta y una mesas — the pattern repeats at every decade.',
        'Finally, one hundred has its own small wrinkle: cien is used when the number stands completely alone or sits directly before a noun — cien (just "one hundred"), cien dólares ("one hundred dollars"). The moment anything follows to make a bigger number, it becomes ciento: ciento uno (101), ciento veinte (120). Unlike uno, cien/ciento does not change for gender by itself — that only starts mattering at 200 and up (doscientos/doscientas), which is beyond this lesson.',
      ],
      examples: [
        { es: 'veintiuno, veintidós, veintitrés, veinticuatro, veinticinco', en: '21, 22, 23, 24, 25' },
        { es: 'treinta, treinta y uno, treinta y dos', en: '30, 31, 32' },
        { es: 'cuarenta, cincuenta, sesenta, setenta, ochenta, noventa', en: '40, 50, 60, 70, 80, 90' },
        { es: 'Solo faltan veintiún días para las vacaciones.', en: 'Only twenty-one days are left until vacation.' },
        { es: 'Vinieron veintiuna personas a la fiesta.', en: 'Twenty-one people came to the party.' },
        { es: 'Tengo treinta y un años. — Cien libros, por favor.', en: "I'm thirty-one years old. — One hundred books, please." },
      ],
      commonMistakes: [
        'Don\'t carry the "one fused word" habit past 29 — "treintayuno" as a single word looks like a typo to a native speaker; from 31 on it\'s always three separate words with spaces: treinta y uno.',
        'Forgetting the accent on veintidós, veintitrés, and veintiséis is a very common beginner slip — say them slowly and you\'ll hear the stress land right where the accent mark sits.',
        'Using veintiuno or treinta y uno unchanged directly before a masculine noun ("veintiuno libros") is incorrect — it must apocopate to veintiún libros, just like uno → un.',
      ],
    },
    {
      heading: 'What Time Is It? Telling Time in Spanish',
      paragraphs: [
        'To ask the time, Spanish uses ¿Qué hora es? ("What time is it?" — literally "what hour is it"). The answer always uses a form of ser (to be), and here\'s the one genuinely tricky rule: one o\'clock is singular, but every other hour is plural. That\'s because Spanish is silently agreeing with the word hora(s) ("hour(s)") the whole time — Es la una ("It\'s one o\'clock," literally "it is the one [hour]," singular, feminine), but Son las dos, Son las tres, Son las cuatro... all the way up, because two-or-more hours is plural. Get comfortable with es la una vs. son las + [number] as a matched pair — mixing them up (es las dos, son la una) is one of the first things a native speaker will notice.',
        "Minutes past the hour stack onto that same phrase with y (\"and\"): Es la una y cuarto (1:15, \"one and a quarter\"), Son las tres y media (3:30, \"three and a half\"). Once you're past the halfway point, Spanish flips direction and counts down from the next hour using menos (\"minus/to\"): Son las cinco menos cuarto means 4:45 — literally \"it's five minus a quarter,\" i.e., a quarter till five, not four forty-five said forward. This up-to-the-half, then-down-from-the-next-hour logic is the single biggest adjustment for English speakers, since English can say either \"four forty-five\" or \"quarter to five\" — Spanish strongly prefers the quarter-to phrasing in everyday speech.",
        'To specify morning, afternoon, or night — Spanish\'s rough equivalent of AM/PM — attach de la mañana, de la tarde, or de la noche directly after the hour: Son las ocho de la mañana (8 AM), Son las tres de la tarde (3 PM), Son las once de la noche (11 PM). These boundaries shift a little by region and habit, similar to how buenos días/buenas tardes/buenas noches shifted in Unit 1 — but they only attach to a specific numbered hour, never to mediodía ("noon") or medianoche ("midnight"), which stand alone: Es mediodía, Es medianoche.',
      ],
      examples: [
        { es: '¿Qué hora es? — Es la una.', en: "What time is it? — It's one o'clock." },
        { es: 'Son las dos y cuarto.', en: "It's 2:15." },
        { es: 'Son las siete y media.', en: "It's 7:30." },
        { es: 'Son las nueve menos cuarto.', en: "It's 8:45 (a quarter to nine)." },
        { es: 'Son las seis de la mañana. Son las seis de la tarde.', en: "It's 6 AM. It's 6 PM." },
        { es: 'Es mediodía. Vamos a almorzar.', en: "It's noon. Let's go have lunch." },
      ],
      commonMistakes: [
        'Saying "Son la una" or "Es las dos" mixes up the singular/plural pair — remember it\'s always Es la una (singular) but Son las + any other number (plural), no exceptions.',
        'Reading menos cuarto forward, as if it meant "four and forty-five," is a common beginner trap — menos always counts backward from the next hour, so son las nueve menos cuarto is 8:45, not 9:45.',
        "Attaching de la mañana/tarde/noche to mediodía or medianoche (\"es mediodía de la tarde\") is redundant and incorrect — those two words already mean a specific, fixed moment and stand on their own.",
      ],
    },
    {
      heading: 'Numbers in Real Life: Phone Numbers and Prices',
      paragraphs: [
        "Now that you can count to 100 and tell time, two everyday situations put those numbers straight to work: exchanging phone numbers and asking prices. To ask for someone's number, say ¿Cuál es tu número de teléfono? (informal) or ¿Cuál es su número de teléfono? (formal, using usted from Unit 1). When giving a number back, Spanish speakers very commonly read digits in pairs rather than one at a time — so a number like 716-24-92-44 might come out as setecientos dieciséis, veinticuatro, noventa y dos, cuarenta y cuatro rather than digit-by-digit. You'll also hear people just say it digit-by-digit, especially slowly or over a bad phone line, so both styles are worth recognizing.",
        'To ask what something costs, the two everyday questions are ¿Cuánto cuesta? (from the verb costar, "to cost") and ¿Cuánto vale? (from valer, "to be worth"/"to cost") — they\'re interchangeable for a beginner\'s purposes, though cuesta is the more common default. If you\'re asking about more than one item, both verbs switch to their plural form: ¿Cuánto cuestan estos zapatos? ("How much do these shoes cost?"). The answer plugs a number straight in: Cuesta treinta euros ("It costs thirty euros") or Cuestan cien dólares ("They cost one hundred dollars").',
        "Put together, this is exactly the kind of \"you'll need this when...\" moment numbers are for: giving your number to a new friend, checking a price in a shop, telling someone what time to meet — all of it runs through the same 0–100 counting system and the same y/menos time logic you just built.",
      ],
      examples: [
        { es: '¿Cuál es tu número de teléfono? — Es el cinco, cinco, cinco, veinte, treinta y cuatro.', en: "What's your phone number? — It's 555-20-34." },
        { es: '¿Cuánto cuesta esta camiseta?', en: 'How much does this T-shirt cost?' },
        { es: 'Cuesta veinte dólares.', en: 'It costs twenty dollars.' },
        { es: '¿Cuánto valen estos libros? — Valen cuarenta y cinco dólares.', en: 'How much are these books worth (how much do they cost)? — They cost forty-five dollars.' },
        { es: 'Nos vemos a las ocho de la noche. ¿Cuál es tu número, por si acaso?', en: "See you at 8 PM. What's your number, just in case?" },
      ],
      commonMistakes: [
        'Forgetting to pluralize cuesta/vale when asking about multiple items ("¿Cuánto cuesta estos zapatos?") — it must agree with the plural subject: ¿Cuánto cuestan estos zapatos?',
        "Assuming phone numbers are always read digit-by-digit — pairs are extremely common in casual speech, so if you only expect single digits you may miss what someone said.",
        "Mixing up cuesta (costar) with cuenta (contar, \"to count\"/the check at a restaurant) — they look and sound similar but mean very different things.",
      ],
    },
    {
      heading: 'First, Second, Third: Ordinal Numbers',
      paragraphs: [
        "Counting (uno, dos, tres) tells you how many; ordinal numbers tell you where something falls in a sequence — first, second, third. Spanish has ten dedicated ordinal words worth learning by heart, primero through décimo: primero (1st), segundo (2nd), tercero (3rd), cuarto (4th), quinto (5th), sexto (6th), séptimo (7th), octavo (8th), noveno (9th), décimo (10th). Like adjectives, ordinals agree in gender and number with the noun they describe: el primer piso (\"the first floor,\" masculine) but la primera clase (\"the first class,\" feminine), los primeros días (\"the first days,\" masculine plural).",
        "That el primer piso example already shows the trickiest rule: primero and tercero shorten to primer and tercer the moment they sit directly before a masculine singular noun — the exact same kind of shortening (apocope) you already saw with uno → un. El primer día (\"the first day\"), el tercer intento (\"the third attempt\"). The shortening only happens before a masculine singular noun sitting right after it: la primera vez (feminine, stays full), los primeros días (plural, stays full), el año primero (after the noun instead of before, also stays full) all keep the complete word.",
        'Here\'s a fact that will save you from overbuilding: past décimo, ordinals get long and clunky (undécimo, duodécimo, vigésimo...), and in everyday speech Spanish speakers mostly just skip them and use a cardinal number instead, placed after the noun rather than before it. Nobody says "el vigésimo quinto piso" for "the 25th floor" — they say el piso veinticinco. Compare that to el primer piso, where the true ordinal goes before the noun: ordinal-before-the-noun for 1st–10th, cardinal-after-the-noun for anything higher. You\'ll still see the higher ordinals in formal writing (kings\' names like Alfonso XIII, read aloud as Alfonso trece in speech, or centuries) — but for everyday speech, 1st–10th is what actually gets used.',
      ],
      examples: [
        { es: 'Vivo en el primer piso.', en: 'I live on the first floor.' },
        { es: 'Es la tercera vez que llamo.', en: "It's the third time I've called." },
        { es: 'Llegó en quinto lugar.', en: 'She finished in fifth place.' },
        { es: 'Es mi segundo año en la universidad.', en: "It's my second year at university." },
        { es: 'El examen está en el piso veinticinco.', en: 'The exam is on the twenty-fifth floor.' },
      ],
      commonMistakes: [
        'Don\'t say "el tercero piso" or "el primero día" — before a masculine singular noun, primero and tercero must shorten to primer and tercer: el primer día, el tercer piso.',
        'Don\'t force a fancy ordinal past décimo in everyday speech — el piso veintiuno (cardinal, after the noun) sounds natural; el vigésimo primer piso sounds like a legal document.',
        'Ordinals agree just like any other adjective — la primera clase, not "la primero clase"; los primeros días, not "los primero días."',
      ],
    },
  ],

  vocab: [
    { es: 'cero', en: 'zero', example: 'Empezamos desde cero.', exampleEn: 'We start from zero.' },
    { es: 'uno', en: 'one', example: 'Uno, dos, tres... ¡vamos!', exampleEn: 'One, two, three... let\'s go!' },
    { es: 'dos', en: 'two', example: 'Tengo dos hermanos.', exampleEn: 'I have two siblings.' },
    { es: 'diez', en: 'ten', example: 'El examen tiene diez preguntas.', exampleEn: 'The exam has ten questions.' },
    { es: 'quince', en: 'fifteen', example: 'Tengo quince minutos libres.', exampleEn: 'I have fifteen free minutes.' },
    { es: 'dieciséis', en: 'sixteen', example: 'Mi prima cumple dieciséis años.', exampleEn: 'My cousin is turning sixteen.' },
    { es: 'veinte', en: 'twenty', example: 'Hay veinte estudiantes en la clase.', exampleEn: 'There are twenty students in the class.' },
    { es: 'veintiuno', en: 'twenty-one', example: 'Faltan veintiún días para el viaje.', exampleEn: 'Twenty-one days are left until the trip.' },
    { es: 'veintidós', en: 'twenty-two', example: 'Vive en el piso veintidós.', exampleEn: 'She lives on the twenty-second floor.' },
    { es: 'treinta', en: 'thirty', example: 'El autobús llega en treinta minutos.', exampleEn: 'The bus arrives in thirty minutes.' },
    { es: 'treinta y uno', en: 'thirty-one', example: 'Enero tiene treinta y un días.', exampleEn: 'January has thirty-one days.' },
    { es: 'cuarenta', en: 'forty', example: 'Mi padre tiene cuarenta años.', exampleEn: 'My father is forty years old.' },
    { es: 'cincuenta', en: 'fifty', example: 'Necesito cincuenta dólares.', exampleEn: 'I need fifty dollars.' },
    { es: 'cien', en: 'one hundred', example: 'Este libro tiene cien páginas.', exampleEn: 'This book has one hundred pages.' },
    { es: '¿Qué hora es?', en: 'what time is it?', example: '¿Qué hora es? — Son las cuatro.', exampleEn: "What time is it? — It's four o'clock." },
    { es: 'la hora', en: 'the hour / the time', example: 'Es hora de comer.', exampleEn: "It's time to eat." },
    { es: 'y cuarto', en: 'quarter past', example: 'Son las diez y cuarto.', exampleEn: "It's 10:15." },
    { es: 'y media', en: 'half past', example: 'Es la una y media.', exampleEn: "It's 1:30." },
    { es: 'menos cuarto', en: 'quarter to', example: 'Son las ocho menos cuarto.', exampleEn: "It's 7:45 (a quarter to eight)." },
    { es: 'de la mañana', en: 'in the morning (AM)', example: 'Me levanto a las siete de la mañana.', exampleEn: 'I get up at 7 AM.' },
    { es: '¿Cuánto cuesta?', en: 'how much does it cost?', example: '¿Cuánto cuesta el café?', exampleEn: 'How much does the coffee cost?' },
    { es: 'número de teléfono', en: 'phone number', example: '¿Cuál es tu número de teléfono?', exampleEn: "What's your phone number?" },
    { es: 'primero', en: 'first', example: 'Vivo en el primer piso.', exampleEn: 'I live on the first floor.' },
    { es: 'segundo', en: 'second', example: 'Es mi segundo año aquí.', exampleEn: "It's my second year here." },
    { es: 'tercero', en: 'third', example: 'Es el tercer intento.', exampleEn: "It's the third attempt." },
    { es: 'cuarto', en: 'fourth', example: 'Llegó en cuarto lugar.', exampleEn: 'She finished in fourth place.' },
    { es: 'quinto', en: 'fifth', example: 'Vivimos en el quinto piso.', exampleEn: 'We live on the fifth floor.' },
    { es: 'sexto', en: 'sixth', example: 'Es la sexta vez que lo intento.', exampleEn: "It's the sixth time I've tried." },
    { es: 'séptimo', en: 'seventh', example: 'Hoy es mi séptimo día aquí.', exampleEn: "Today is my seventh day here." },
    { es: 'octavo', en: 'eighth', example: 'Está en el octavo capítulo.', exampleEn: "It's in the eighth chapter." },
    { es: 'noveno', en: 'ninth', example: 'Es la novena canción del álbum.', exampleEn: "It's the ninth song on the album." },
    { es: 'décimo', en: 'tenth', example: 'Vivo en el décimo piso.', exampleEn: 'I live on the tenth floor.' },
  ],

  practice: [
    // ── numbers_1_20 block (blocked practice: 0–20, uno/un/una gender, and clock hours which stay within 1–12) ──
    { type: 'multiple_choice', prompt: 'How do you say "16" in Spanish?', word: 'dieciséis', english: '16', answer: 'dieciséis', options: ['quince', 'dieciséis', 'diecisiete', 'veinte'], concept_id: 'numbers_1_20', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Tengo un hermano y ___ hermana." (one, feminine)', word: 'una', english: 'one (feminine)', answer: 'una', concept_id: 'numbers_1_20', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate the number: 'twelve'", english: 'twelve', answer: 'doce', word: 'doce', concept_id: 'numbers_1_20', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "diecinueve"?', word: 'diecinueve', english: 'nineteen', answer: 'nineteen', concept_id: 'numbers_1_20', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which of these is the correct modern spelling of 17?', word: 'diecisiete', english: '17', answer: 'diecisiete', options: ['diez y siete', 'diecisiete', 'diecisiete y', 'dieci siete'], concept_id: 'numbers_1_20', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Es ___ una." (It\'s one o\'clock.)', word: 'la', english: 'the (feminine, for "hora")', answer: 'la', concept_id: 'numbers_1_20', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'It is 8:45. Which is the natural way to say it in Spanish?', word: 'menos cuarto', english: "a quarter to nine", answer: 'Son las nueve menos cuarto.', options: ['Son las nueve menos cuarto.', 'Son las ocho menos cuarto.', 'Es las nueve menos cuarto.', 'Son las ocho y cuarenta y cinco menos.'], concept_id: 'numbers_1_20', difficulty: 2 },

    // ── numbers_21_100 block (kept separate; 21–100, y-spacing, veintiún/treinta y un apocope, cien/ciento, prices) ──
    { type: 'multiple_choice', prompt: 'Which of these numbers is written with an accent mark?', word: 'veintidós', english: 'twenty-two', answer: 'veintidós', options: ['veintiuno', 'veintidós', 'veinticuatro', 'veintinueve'], concept_id: 'numbers_21_100', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "31 = treinta y ___." (as a standalone counting number)', word: 'uno', english: 'one', answer: 'uno', concept_id: 'numbers_21_100', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'twenty-one books' (veintiuno modifying a masculine noun)", english: 'twenty-one books', answer: 'veintiún libros', word: 'veintiún', concept_id: 'numbers_21_100', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "cien"?', word: 'cien', english: 'one hundred', answer: 'one hundred (100)', altAnswers: ['100'], concept_id: 'numbers_21_100', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'How do you say 101 in Spanish?', word: 'ciento uno', english: '101', answer: 'ciento uno', options: ['cien uno', 'ciento uno', 'cien y uno', 'cientouno'], concept_id: 'numbers_21_100', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It costs thirty euros.'", english: 'It costs thirty euros.', answer: 'Cuesta treinta euros.', word: 'cuesta', concept_id: 'numbers_21_100', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "¿Cuánto ___ estos zapatos?" (plural form of costar, for multiple items)', word: 'cuestan', english: 'do they cost', answer: 'cuestan', concept_id: 'numbers_21_100', difficulty: 2 },

    // ── ordinal_numbers block (kept separate; primero–décimo, primer/tercer apocope, cardinal-after-noun past 10th) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'the first day' (masculine, apocopated)", english: 'the first day', answer: 'el primer día', word: 'primer', concept_id: 'ordinal_numbers', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Es la ___ vez que llamo." (third, feminine, no apocope)', word: 'tercera', english: 'third', answer: 'tercera', concept_id: 'ordinal_numbers', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which is correct for "the third attempt"?', word: 'tercer intento', english: 'the third attempt', answer: 'el tercer intento', options: ['el tercero intento', 'el tercer intento', 'el tercera intento', 'el tercero de intento'], concept_id: 'ordinal_numbers', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "el piso veinticinco"?', word: 'piso veinticinco', english: 'the 25th floor', answer: 'the twenty-fifth floor (floor 25)', concept_id: 'ordinal_numbers', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Vivo en el tercero piso."', word: 'tercer', english: 'third', answer: 'Vivo en el tercer piso.', concept_id: 'ordinal_numbers', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'How would a Spanish speaker naturally say "the 25th floor" in everyday speech?', word: 'piso veinticinco', english: 'the 25th floor', answer: 'el piso veinticinco', options: ['el vigésimo quinto piso', 'el piso veinticinco', 'el veinticinco piso', 'el piso vigésimo cinco'], concept_id: 'ordinal_numbers', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, RAE-derived
// orthography guidance, and established pedagogical grammar sources before
// writing (July 2026):
// - Spelling/accentuation of 16 (dieciséis, accented) vs. 17/18/19
//   (diecisiete, dieciocho, diecinueve, unaccented)
// - 21–29 fused as one word each (veintiuno...veintinueve), with accents
//   confirmed specifically on veintidós, veintitrés, and veintiséis only
// - 30 (treinta) standing alone; 31–99 as three separate words with "y"
//   (treinta y uno, etc.) — confirmed this is the RAE-recommended modern
//   form, with fused alternates (treintaiuno) and the archaic two-word
//   16–19 spelling ("diez y seis") both noted as valid-but-nonstandard,
//   not used as the taught form
// - veintiún/treinta y un apocope before masculine nouns vs. veintiuna/
//   treinta y una (full form, no apocope) before feminine nouns
// - cien (alone or directly before a noun) vs. ciento (101–199); gender
//   agreement only becoming relevant at 200+ (doscientos/-as), out of
//   scope for this lesson and only mentioned as a forward pointer
// - Es la una (singular, agreeing with "la hora") vs. Son las dos/tres/...
//   (plural) for telling time
// - y cuarto / y media / menos cuarto construction, including the
//   "count up to the half, then count down from the next hour" logic
// - de la mañana/tarde/noche usage attaching only to a specific hour, not
//   to standalone mediodía/medianoche
// - ¿Cuánto cuesta?/¿Cuánto vale? (costar/valer) with plural agreement for
//   multiple items, and the common pairs-based convention for reading
//   phone numbers aloud
// - ordinal numbers primero–décimo (1st–10th), confirmed as the set in
//   everyday active use; gender/number agreement like any adjective
// - primero/tercero apocope to primer/tercer directly before a masculine
//   singular noun only (not before feminine, not before plural, not when
//   standing after the noun) — confirmed via SpanishDict and Spanish.Academy
// - beyond décimo, cardinal numbers placed after the noun (el piso
//   veinticinco) are confirmed as the everyday-speech norm over the
//   grammatically-possible-but-rarely-used higher ordinal forms
//   (vigésimo quinto), which are mentioned only as a forward pointer for
//   formal/literary contexts (regnal names, centuries)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// numbers_1_20 and numbers_21_100 in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough with added time/phone/price coverage)
// and does not contradict them. ordinal_numbers is a new concept (see
// functions/_lib/concepts.js) with no prior GRAMMAR_CARDS entry.
