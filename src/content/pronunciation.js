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
];

export const CATEGORIES = [...new Set(PRONUNCIATION_RULES.map(r => r.category))];
