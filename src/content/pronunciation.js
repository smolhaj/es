// Spanish pronunciation rules — organized by topic

export const PRONUNCIATION_RULES = [
  // ── VOWELS ──────────────────────────────────────────────────────────────
  {
    id: 'vowels_pure',
    category: 'Vowels',
    title: 'Pure vowels — always the same',
    rule: 'Spanish has 5 vowels (a, e, i, o, u) and each has exactly one sound. They never glide or reduce to a schwa (uh) like English vowels do in unstressed syllables.',
    sounds: [
      { letter: 'a', ipa: '/a/', like: '"ah" in "father"', example: 'casa, hablar, mamá' },
      { letter: 'e', ipa: '/e/', like: '"e" in "bed" (but shorter, no glide)', example: 'mesa, leche, verde' },
      { letter: 'i', ipa: '/i/', like: '"ee" in "see"', example: 'vino, vivir, aquí' },
      { letter: 'o', ipa: '/o/', like: '"o" in "go" (but shorter, no glide)', example: 'poco, comer, todo' },
      { letter: 'u', ipa: '/u/', like: '"oo" in "moon"', example: 'luna, mucho, usted' },
    ],
    tips: [
      'Never reduce an unstressed vowel. "para" is PAH-rah, not "puh-ruh".',
      'Every vowel in a word is fully pronounced. "también" = tam-BYÉN (5 sounds, not 3).',
    ],
  },
  {
    id: 'stress_rules',
    category: 'Stress',
    title: 'Word stress rules',
    rule: 'Spanish stress follows predictable rules. If a word ends in a vowel, -n, or -s: stress the second-to-last syllable. Otherwise: stress the last syllable. Written accents override these rules.',
    sounds: [],
    tips: [
      'Words ending in vowel/n/s → penultimate stress: HABlo, CASa, JÓven, HABlan',
      'Words ending in consonant (not n/s) → final stress: haBAR, ciuDAD, comER',
      'Written accent marks the exception: télefono, mamá, autobús, café',
      'Question words always carry accent marks: qué, cómo, dónde, cuándo',
    ],
    examples: [
      { word: 'ca-SA', note: 'ends in vowel → stress penultimate' },
      { word: 'ha-BLAN', note: 'ends in -n → stress penultimate' },
      { word: 'ciu-DAD', note: 'ends in consonant (d) → stress final' },
      { word: 'TÉ-le-fo-no', note: 'accent overrides rule (would be te-lé-fo-no)' },
    ],
  },
  // ── CONSONANTS ──────────────────────────────────────────────────────────
  {
    id: 'h_silent',
    category: 'Consonants',
    title: 'H is always silent',
    rule: 'The letter H is never pronounced in Spanish. It is a spelling letter only.',
    sounds: [],
    tips: [
      'hola = "ola", hablar = "ablar", hotel = "otel"',
      'Exception: "ch" is a single sound /tʃ/ like "church" — the H changes ch.',
    ],
    examples: [
      { word: 'hola', note: 'pronounced: OLA' },
      { word: 'hospital', note: 'pronounced: ospital' },
      { word: 'ahora', note: 'pronounced: aOra' },
    ],
  },
  {
    id: 'j_g_sounds',
    category: 'Consonants',
    title: 'J and G before e/i — the "Spanish H"',
    rule: 'J always makes a guttural /x/ sound (like a strong English "h"). G before e or i makes the same /x/ sound.',
    sounds: [
      { letter: 'j', ipa: '/x/', like: 'strong "h" from the throat', example: 'jamón, jugar, ojo' },
      { letter: 'ge/gi', ipa: '/x/', like: 'same as j', example: 'gente, girasol' },
      { letter: 'ga/go/gu', ipa: '/g/', like: '"g" in "go"', example: 'gato, gobierno, agua' },
    ],
    tips: [
      'To keep the /g/ sound before e or i, add a silent u: guerra, guitarra.',
      'To keep a /gw/ sound: güe, güi (with diaeresis): pingüino, vergüenza.',
    ],
  },
  {
    id: 'r_rr_sounds',
    category: 'Consonants',
    title: 'R and RR — tapped vs trilled',
    rule: 'Single R between vowels is a quick tap (like the "dd" in American "ladder"). Double RR and R at the start of a word or after n/l/s is a full trill.',
    sounds: [
      { letter: 'r (middle)', ipa: '/ɾ/', like: '"d" tap in American "butter"', example: 'pero, hora, caro' },
      { letter: 'rr / r (start)', ipa: '/r/', like: 'long rolling trill', example: 'perro, rosa, alrededor' },
    ],
    tips: [
      'pero (but) vs. perro (dog) — one letter makes a big difference!',
      'r at word-start always trills: rojo, restaurante, ropa.',
    ],
  },
  {
    id: 'b_v_sounds',
    category: 'Consonants',
    title: 'B and V — identical sounds',
    rule: 'B and V are pronounced identically in Spanish. Both make a /b/ sound at the start of a phrase or after m/n, and a softer fricative /β/ in other positions.',
    sounds: [
      { letter: 'b/v (strong)', ipa: '/b/', like: '"b" in "boy"', example: 'vino, bueno, también' },
      { letter: 'b/v (soft)', ipa: '/β/', like: 'b with lips barely touching', example: 'saber, uva, abierto' },
    ],
    tips: [
      'Don\'t try to distinguish b and v by sound — native speakers don\'t.',
      'Spelling matters for writing, not pronunciation.',
    ],
  },
  {
    id: 'c_z_sounds',
    category: 'Consonants',
    title: 'C before e/i and Z — regional variation',
    rule: 'In Spain (Castilian): C before e/i and Z = /θ/ (like "th" in "think"). In Latin America and southern Spain: C before e/i and Z = /s/ (like "s" in "see"). Both are correct.',
    sounds: [
      { letter: 'ce/ci/z (Spain)', ipa: '/θ/', like: '"th" in "think"', example: 'cinco, ciudad, zapato' },
      { letter: 'ce/ci/z (LatAm)', ipa: '/s/', like: '"s" in "see"', example: 'cinco, ciudad, zapato' },
      { letter: 'ca/co/cu', ipa: '/k/', like: '"k"', example: 'casa, coco, curioso' },
    ],
    tips: [
      'The Spain pronunciation is called "distinción" (it distinguishes /s/ from /θ/).',
      'Latin American pronunciation merges both into /s/ — called "seseo".',
    ],
  },
  {
    id: 'll_y_sounds',
    category: 'Consonants',
    title: 'LL and Y — yeísmo',
    rule: 'Traditionally, LL = /ʎ/ (like "million") and Y = /j/ (like "yes"). In most modern Spanish (everywhere), both are /j/ or /ʝ/ — called yeísmo.',
    sounds: [
      { letter: 'll / y', ipa: '/j/ or /ʝ/', like: '"y" in "yes"', example: 'llama, yo, calle, maya' },
    ],
    tips: [
      'In Argentina and Uruguay, LL/Y = /ʃ/ or /ʒ/ (like "sh" or "zh") — the "zheísmo" accent.',
      'For learners: pronounce both LL and Y as English Y. ✓',
    ],
  },
  {
    id: 'n_tilde',
    category: 'Consonants',
    title: 'Ñ — the tilde N',
    rule: 'Ñ is a separate letter from N. It is pronounced /ɲ/, like "ny" in "canyon" or Italian "gn" in "lasagna".',
    sounds: [
      { letter: 'ñ', ipa: '/ɲ/', like: '"ny" in "canyon"', example: 'mañana, niño, España, año' },
    ],
    tips: [
      'mañana has TWO ñ sounds: ma-NYA-na.',
      'Spain = España (es-PAHN-ya) — the ñ is what gives it that "ny" sound.',
    ],
  },
  {
    id: 'diphthongs',
    category: 'Vowels',
    title: 'Diphthongs — two vowels as one syllable',
    rule: 'When a weak vowel (i, u) appears next to a strong vowel (a, e, o) with no accent mark, they merge into a single syllable (diphthong). Two strong vowels stay in separate syllables.',
    sounds: [],
    tips: [
      'Diphthongs: ia, ie, io, ua, ue, ui, ai, ei, oi, au, eu — both vowels glide together.',
      'Strong+strong = two syllables: le-er, ca-er, po-e-ta.',
      'An accent breaks a diphthong: día (dí-a = 2 syllables), not *dia (1 syllable).',
    ],
    examples: [
      { word: 'bue-no', note: 'ue diphthong → 2 syllables, not 3' },
      { word: 'ciu-dad', note: 'iu diphthong → 2 syllables' },
      { word: 'dí-a', note: 'accent breaks diphthong → 2 syllables' },
    ],
  },
  {
    id: 'linking_words',
    category: 'Connected speech',
    title: 'Linking — words run together',
    rule: 'In natural Spanish, words run together across boundaries. A final vowel links directly into the next initial vowel forming a single syllable. Final consonants link into next initial vowels.',
    sounds: [],
    tips: [
      '"¿Cómo estás?" sounds like "CÓ-mo-es-TÁS" — 4 syllables, not 5.',
      '"está aquí" sounds like "es-ta-KÍ" — the a links into aquí.',
      'This is why Spanish can sound very fast — there are no small gaps between words.',
    ],
    examples: [
      { word: 'este año', note: 'es-te-A-ño (4 syllables, not 5)' },
      { word: 'un amigo', note: 'u-na-mí-go (vowels link)' },
    ],
  },
  {
    id: 'd_intervocalic',
    category: 'Consonants',
    title: 'D between vowels — softens to /ð/',
    rule: 'D is pronounced as a hard /d/ (like English "dog") only at the beginning of a phrase or after n/l. In all other positions — especially between vowels — it softens to /ð/, like the "th" in "this".',
    sounds: [
      { letter: 'd (initial/after n,l)', ipa: '/d/', like: '"d" in "dog"', example: 'donde, cuando, el día' },
      { letter: 'd (between vowels)', ipa: '/ð/', like: '"th" in "this"', example: 'nada, todo, ciudad, Madrid' },
    ],
    tips: [
      '"nada" sounds like "NAH-tha" (soft d, not hard d).',
      '"Madrid" — the final d is so soft it often disappears entirely in casual speech.',
      'This is one of the most common features of native-sounding Spanish.',
    ],
    examples: [
      { word: 'todo', note: 'TOH-tho (soft d between o and o)' },
      { word: 'ciudad', note: 'syoo-DAHTH (final d barely voiced)' },
      { word: 'el día', note: 'el-DÍ-a (hard d after l)' },
    ],
  },
  {
    id: 'unaspirated_stops',
    category: 'Consonants',
    title: 'P, T, K — no aspiration',
    rule: 'In English, the stops P, T, K at the start of stressed syllables have a puff of air (aspiration): "pin", "tin", "kin". Spanish never aspirates these consonants — they are "clean" stops with no air burst.',
    sounds: [
      { letter: 'p', ipa: '/p/ (no aspiration)', like: '"p" in "spin" (not "pin")', example: 'padre, pero,apa' },
      { letter: 't', ipa: '/t/ (no aspiration)', like: '"t" in "stop" (not "top")', example: 'también, tú, alto' },
      { letter: 'k / c / qu', ipa: '/k/ (no aspiration)', like: '"k" in "ski" (not "key")', example: 'casa, querer, que' },
    ],
    tips: [
      'Hold a piece of paper in front of your mouth. English "pin" makes it flutter; Spanish "pin" should not.',
      'Spanish T is also dental (tongue touches upper teeth, not the ridge behind them like English T).',
      'Getting this right makes your Spanish sound instantly more native.',
    ],
  },
  {
    id: 'silent_u',
    category: 'Consonants',
    title: 'Silent U in QU and GU',
    rule: 'The letter U is silent in the combinations QUE, QUI, GUE, and GUI. It is only there to keep the hard /k/ or /g/ sound before E or I. The diaeresis (Ü) signals that the U is actually pronounced.',
    sounds: [
      { letter: 'que / qui', ipa: '/ke/ /ki/', like: 'hard k + vowel', example: 'querer, quiero, aquí, queso' },
      { letter: 'gue / gui', ipa: '/ge/ /gi/', like: 'hard g + vowel', example: 'guerra, guitarra, llegué' },
      { letter: 'güe / güi', ipa: '/gwe/ /gwi/', like: 'hard g + w + vowel', example: 'pingüino, vergüenza, agüero' },
    ],
    tips: [
      '"querer" = ke-RER (the u is silent — just keeps the k sound).',
      '"guitarra" = gi-TAH-ra (again, silent u).',
      '"pingüino" = pin-GWEE-no — the diaeresis over ü means the u IS pronounced.',
    ],
  },
  {
    id: 'x_sounds',
    category: 'Consonants',
    title: 'X — three different sounds',
    rule: 'The letter X has three pronunciations in Spanish depending on origin and position: /ks/ in most words (like English "x"), /x/ (guttural h) in words of Nahuatl/indigenous origin (especially Mexico), and /s/ in words beginning with ex- before a consonant in casual speech.',
    sounds: [
      { letter: 'x (mid-word)', ipa: '/ks/', like: '"x" in "taxi"', example: 'taxi, éxito, exacto, examen' },
      { letter: 'x (Nahuatl words)', ipa: '/x/', like: 'guttural "h" (j-sound)', example: 'México, Oaxaca, Xochimilco' },
      { letter: 'x (ex+consonant, casual)', ipa: '/s/', like: '"s"', example: 'explicar → [esplicar], extraño → [estraño]' },
    ],
    tips: [
      'México is spelled with X but pronounced "Méjico" (the X = /x/ like the J in jamón).',
      'Oaxaca = "wa-HA-ka" — the X is the guttural /x/ sound, not /ks/.',
      'In formal speech: éxito = "EK-si-to". Casual: "E-si-to" (the /ks/ cluster simplifies).',
      'All other Spanish x words: pronounce as /ks/ — taxi, flexible, sexto.',
    ],
    examples: [
      { word: 'éxito', note: 'EK-si-to — success (formal) or E-si-to (casual)' },
      { word: 'México', note: 'MÉ-hi-co — x = /x/ (same as j)' },
      { word: 'Oaxaca', note: 'wa-HA-ca — x = /x/ again' },
    ],
  },
  {
    id: 's_aspiration',
    category: 'Connected speech',
    title: 'S aspiration — casual and regional speech',
    rule: 'In many Spanish dialects (Andalucía, Canary Islands, all of Latin America, Caribbean especially), an S before a consonant or at the end of a word is weakened to /h/ (aspiration) or dropped entirely. This is not a mistake — it is standard in those dialects.',
    sounds: [
      { letter: 's (before consonant)', ipa: '/h/ or Ø', like: '"h" or silent', example: 'estos → "ehtoh", las manos → "lah manoh"' },
      { letter: 's (final, formal)', ipa: '/s/', like: '"s"', example: 'hablas, tienes (Spain)' },
    ],
    tips: [
      'In Caribbean Spanish (Cuba, Puerto Rico, Dominican Rep.): "¿cómo estás?" sounds like "¿cómo ehtáh?".',
      'In Argentina: S stays but is often softer — less extreme aspiration than Caribbean.',
      'Learner tip: If you can\'t parse a fast Caribbean speaker, the missing S\'s are the main culprit. Listen for the pattern.',
      'Producing aspiration is optional for learners, but recognising it is essential for real-world listening.',
    ],
    examples: [
      { word: 'los niños', note: 'formal: los-NIÑOS | casual/Caribbean: loh-NIÑO' },
      { word: 'ustedes', note: 'formal: us-TEH-des | casual: uhtéhe' },
      { word: 'más tarde', note: 'formal: más-TAR-de | aspirated: máh-TAR-e' },
    ],
  },
  {
    id: 'triphthongs',
    category: 'Vowels',
    title: 'Triphthongs — three vowels in one syllable',
    rule: 'A triphthong occurs when a weak vowel (i/u) + strong vowel (a/e/o) + weak vowel (i/u) appear together with no accent break. All three form a single syllable. They are rare but appear in verb forms like the vosotros subjunctive.',
    sounds: [],
    tips: [
      'Pattern: weak + strong + weak, all in one syllable. e.g. i-a-i, u-a-i, u-e-i',
      'Common triphthongs: -iáis, -uéis, -iais (vosotros subjunctive endings).',
      '"Limpiáis" (lim-PIÁIS, 2 syllables, not 3) — the ia+i is a triphthong.',
      '"Continuéis" (con-ti-NUÉIS, 3 syllables) — uéi is the triphthong.',
      'An accent mark on the strong vowel (á, é, ó) confirms these belong to the same syllable group.',
    ],
    examples: [
      { word: 'lim-PIÁIS', note: '2 syllables — iái is a triphthong (vosotros pres. subj.)' },
      { word: 'con-ti-NUÉIS', note: '3 syllables — uéi is a triphthong' },
      { word: 'cam-BIÁIS', note: '2 syllables — iái triphthong' },
    ],
  },
  {
    id: 'intonation',
    category: 'Connected speech',
    title: 'Intonation — questions and statements',
    rule: 'Spanish uses inverted opening punctuation (¿ ¡) to signal questions and exclamations from the start. Intonation patterns differ from English: yes/no questions typically rise at the end; wh-questions (with question words) often fall.',
    sounds: [],
    tips: [
      'Yes/no question: "¿Hablas español?" — voice rises at end.',
      'Wh-question: "¿Dónde vives?" — voice falls at end (like a statement).',
      'Unlike English, the word order rarely changes in questions — just the intonation does.',
      'Exclamations: "¡Qué bonito!" — sharp rise then fall, more dramatic than English.',
    ],
    examples: [
      { word: '¿Hablas inglés?', note: 'rises at the end (yes/no)' },
      { word: '¿Dónde está?', note: 'falls at the end (wh-question)' },
      { word: '¡Qué suerte!', note: 'sharp rise-fall (exclamation)' },
    ],
  },
];

export const CATEGORIES = [...new Set(PRONUNCIATION_RULES.map(r => r.category))];
