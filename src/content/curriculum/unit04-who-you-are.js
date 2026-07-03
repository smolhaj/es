// Unit 04 — Who You Are (A1)
// Covers: ser_basics, adjective_agreement
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict and
// other authoritative grammar references before writing — see the audit
// note at the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Meet Ser: "To Be" for Who You Are',
      paragraphs: [
        'Spanish has two verbs that both translate as "to be" in English — ser and estar. That might sound strange at first (English gets by with just one "to be"), but each verb has its own clear job: ser is for lasting, defining facts — who you are, where you\'re from, what you do — while estar, which you\'ll meet properly in the next unit, handles location and temporary states. This unit is entirely about ser, so you can focus on it without juggling both at once; a full side-by-side comparison comes later once you\'ve had time to get comfortable with each one separately.',
        "Ser is one of the most irregular verbs in Spanish, which actually makes it easier in one sense: its six present-tense forms don't follow a predictable pattern, so rather than deriving them from a rule, you simply learn them as a set: soy (I am), eres (you are, informal), es (he/she is, you formal are), somos (we are), sois (you all are, Spain), son (they/you all are). Because ser is used constantly in everyday conversation — for introductions, descriptions, and small talk — these six words are worth memorizing solidly from day one.",
        "You've already learned that Spanish frequently drops subject pronouns because the verb ending identifies who's doing the action, and ser is no exception: Soy de Chile and Yo soy de Chile both mean \"I am from Chile,\" but the second only adds yo for emphasis or contrast. Listen for the verb form itself to tell you who's being talked about, rather than expecting a pronoun in front of every sentence.",
      ],
      examples: [
        { es: 'Yo soy Ana.', en: 'I am Ana.' },
        { es: 'Tú eres muy amable.', en: 'You (informal) are very kind.' },
        { es: 'Usted es el señor López, ¿verdad?', en: 'You (formal) are Mr. López, right?' },
        { es: 'Nosotros somos hermanos.', en: 'We are siblings.' },
        { es: '¿Vosotros sois estudiantes?', en: 'Are you all students? (Spain)' },
        { es: 'Ellos son mis padres.', en: 'They are my parents.' },
      ],
      commonMistakes: [
        "Ser is irregular — you can't derive soy/eres/es from a regular -er verb pattern the way you can with a verb like comer; the six forms simply have to be memorized as their own set.",
        'Remember usted takes the same verb form as él/ella, exactly as you learned with other verbs: usted es, not "usted eres."',
        "Don't skip the accent-free spelling of es — it's short and looks like it could be missing something, but es is the complete, correct third-person form of ser.",
      ],
    },
    {
      heading: 'What Ser Is For: Identity, Origin, Profession, and Traits',
      paragraphs: [
        'The rule for when to reach for ser: use it for things that are true in a lasting, defining way — not things that could change by tomorrow. That covers four big categories: who someone is (identity), where someone or something is originally from (origin), what someone does for a living (profession), and what someone or something is essentially like (inherent characteristics, physical or personal). Estar, in the next unit, will handle the "temporary" side of "to be" — but for now, everything in this unit is squarely ser territory.',
        'Origin uses the pattern ser + de + place: Soy de Argentina ("I am from Argentina"), ¿De dónde eres? ("Where are you from?"). Note that this tells you where someone is originally from, not where they currently are — that distinction becomes important once you meet estar.',
        'Profession follows a rule that surprises a lot of English speakers: Spanish normally drops the article before an unmodified profession after ser. Soy profesora ("I am a teacher") needs no una — adding one (Soy una profesora) sounds off unless you also add a describing adjective, in which case the article returns: Soy una profesora excelente ("I am an excellent teacher").',
        "Finally, ser covers characteristics — the lasting traits that describe what someone or something is fundamentally like: personality (Es simpático, \"He is nice\"), physical appearance (Es alta, \"She is tall\"), and even material (La mesa es de madera, \"The table is made of wood\"). This is exactly where adjectives come in, which is the second half of this unit.",
      ],
      examples: [
        { es: 'Soy de Colombia.', en: 'I am from Colombia.' },
        { es: '¿De dónde eres tú?', en: 'Where are you (informal) from?' },
        { es: 'Ella es profesora.', en: 'She is a teacher. (no article before an unmodified profession)' },
        { es: 'Es una profesora excelente.', en: 'She is an excellent teacher. (the article returns once an adjective is added)' },
        { es: 'La mesa es de madera.', en: 'The table is made of wood.' },
        { es: 'Mi abuelo es muy simpático.', en: 'My grandfather is very nice.' },
      ],
      commonMistakes: [
        'Don\'t add un/una before an unmodified profession after ser — "Soy una doctora" is a common English-speaker slip; Soy doctora is correct. The article only comes back once an adjective describes the profession: Soy una doctora dedicada.',
        "Ser de + place tells you where someone or something is from, not where it currently is — Soy de México doesn't say where I am right now; that's a job for estar, which you'll meet next.",
        'Save ser for lasting facts about identity, origin, profession, and characteristics — a temporary mood or condition, like feeling tired today, is estar\'s job, not ser\'s.',
      ],
    },
    {
      heading: 'Describing People: Adjective Gender Agreement',
      paragraphs: [
        "Now that you have ser, you need words to put after it — adjectives, the describing words. In Spanish, adjectives normally follow the noun they describe (una chica alta, \"a tall girl\") or follow ser directly (Ella es alta, \"She is tall\"), and — this is the new rule for this unit — an adjective has to agree in gender with whatever it's describing. That means many adjectives actually change their ending depending on whether you're describing something masculine or feminine.",
        'The most common pattern is the one you\'ve probably already guessed: an adjective ending in -o in its base (masculine) form swaps that -o for -a to describe something feminine. Alto becomes alta, guapo becomes guapa, delgado becomes delgada — one clean swap, and it applies to a large share of Spanish adjectives.',
        "Plenty of adjectives don't follow that pattern at all, though, because they don't end in -o to begin with. Adjectives ending in -e (inteligente, amable) and most adjectives ending in a consonant (feliz, joven) are invariant for gender — the exact same word describes a man or a woman, no change needed: Él es inteligente and Ella es inteligente use the identical word. There is a real exception to watch for, though: adjectives ending in -dor, -tor, -ón, or -ín do add -a for the feminine even though they end in a consonant — trabajador (hardworking) becomes trabajadora, not \"trabajador\" for both.",
        'Nationality adjectives deserve their own note because they\'re a common source of mistakes. Nationalities ending in -o behave like any other -o/-a adjective (italiano → italiana). But the many nationalities that end in a consonant — français, inglés, alemán, and others — add -a for the feminine and, at the same time, drop the written accent mark: francés → francesa, inglés → inglesa, alemán → alemana. The stress stays on the same syllable either way; the accent mark is simply no longer needed to show it once the word gains that extra -a.',
      ],
      examples: [
        { es: 'un chico alto / una chica alta', en: 'a tall boy / a tall girl' },
        { es: 'Es un profesor amable.', en: 'He is a kind teacher. (amable never changes for gender)' },
        { es: 'Ella es muy trabajadora.', en: 'She is very hardworking. (-dor adjectives DO add -a)' },
        { es: 'Él es francés; ella es francesa.', en: 'He is French; she is French. (the accent drops in the feminine form)' },
        { es: 'Marco es italiano; Sofía es italiana.', en: 'Marco is Italian; Sofía is Italian. (-o nationality: the regular pattern)' },
        { es: 'Hans es alemán; Greta es alemana.', en: 'Hans is German; Greta is German. (accent drops here too)' },
      ],
      commonMistakes: [
        'Don\'t assume every consonant ending means "no change" — -dor/-tor/-ón/-ín adjectives are an exception and do add -a: trabajador → trabajadora, hablador → habladora.',
        'Consonant-ending nationality adjectives (francés, inglés, alemán, and others) add -a for the feminine AND drop the written accent — francesa, inglesa, alemana, never "francésa."',
        '-e-ending adjectives like inteligente or amable never change for gender — resist the urge to invent an -a form; "inteligenta" is not a word.',
      ],
    },
    {
      heading: 'More Than One: Adjective Number Agreement',
      paragraphs: [
        "Adjectives also have to agree in number — singular or plural — matching the noun exactly the way you learned nouns and articles do. The rule mirrors how Spanish makes nouns plural: an adjective ending in a vowel simply adds -s (alto → altos), and an adjective ending in a consonant adds -es (fácil → fáciles, joven → jóvenes).",
        'There\'s one small spelling twist to know: adjectives ending in -z change that -z to -c before adding -es. Feliz ("happy") becomes felices in the plural, not "felizes" — that spelling doesn\'t exist in Spanish. This same z-to-c swap shows up elsewhere in Spanish spelling too, so it\'s worth internalizing here.',
        'Occasionally, adding a plural ending shifts how many syllables a word has, which can require adjusting a written accent to keep the stress in the same spot. Joven ("young") has no accent mark, but its plural, jóvenes, does — the word gained a syllable, and Spanish spelling rules require the accent there to keep the stress exactly where it always was.',
        "Gender and number stack together, so a fully regular -o/-a adjective actually has four possible forms, one for each combination: alto (m. sing.), alta (f. sing.), altos (m. pl.), altas (f. pl.). An adjective that's invariant for gender still has two forms for number: feliz (sing., either gender) and felices (pl., either gender). Always match both features of the noun at once — a group of tall girls is altas, not alto, altos, or alta.",
      ],
      examples: [
        { es: 'un chico alto → dos chicos altos', en: 'a tall boy → two tall boys' },
        { es: 'una chica alta → dos chicas altas', en: 'a tall girl → two tall girls' },
        { es: 'Los niños son felices.', en: 'The children are happy. (feliz → felices, z becomes c)' },
        { es: 'Los estudiantes son jóvenes.', en: 'The students are young. (joven → jóvenes, gains an accent)' },
        { es: 'Somos amables.', en: "We're kind. (amable + s, a straightforward vowel ending)" },
        { es: 'Ellos son trabajadores; ellas son trabajadoras.', en: 'They (m.) are hardworking; they (f.) are hardworking. (consonant ending -dor/-dora, add -es/-as)' },
      ],
      commonMistakes: [
        'Don\'t add a plain -s to a consonant-ending adjective — feliz needs -es (felices), not "felizs" or "felices" spelled with a z, neither of which is correct Spanish spelling.',
        'Watch accent marks when a word gains a syllable in the plural — joven has no written accent, but jóvenes does, because of where the stress falls once the word is three syllables long.',
        'Adjectives must match both the gender AND the number of the noun at the same time — a group of tall girls is altas, combining the feminine -a with the plural -s, not just one or the other.',
      ],
    },
  ],

  vocab: [
    { es: 'soy', en: 'I am (ser)', example: 'Soy profesora.', exampleEn: 'I am a teacher.' },
    { es: 'eres', en: 'you are, informal (ser)', example: '¿Eres de España?', exampleEn: 'Are you from Spain?' },
    { es: 'es', en: 'he/she is, you formal are (ser)', example: 'Ella es médica.', exampleEn: 'She is a doctor.' },
    { es: 'somos', en: 'we are (ser)', example: 'Somos amigos.', exampleEn: 'We are friends.' },
    { es: 'sois', en: 'you all are, Spain (ser)', example: '¿Sois estudiantes?', exampleEn: 'Are you all students?' },
    { es: 'son', en: 'they/you all are (ser)', example: 'Son de Perú.', exampleEn: 'They are from Peru.' },
    { es: 'español / española', en: 'Spanish (nationality)', example: 'Él es español; ella es española.', exampleEn: 'He is Spanish; she is Spanish.' },
    { es: 'francés / francesa', en: 'French (nationality)', example: 'Pierre es francés; Marie es francesa.', exampleEn: 'Pierre is French; Marie is French.' },
    { es: 'inglés / inglesa', en: 'English (nationality)', example: 'John es inglés; Sarah es inglesa.', exampleEn: 'John is English; Sarah is English.' },
    { es: 'simpático / simpática', en: 'nice, friendly', example: 'Mi vecino es simpático; mi vecina es simpática.', exampleEn: 'My (male) neighbor is nice; my (female) neighbor is nice.' },
    { es: 'trabajador / trabajadora', en: 'hardworking', example: 'Mi padre es trabajador; mi madre también es trabajadora.', exampleEn: 'My father is hardworking; my mother is hardworking too.' },
    { es: 'inteligente', en: 'intelligent (same for m./f.)', example: 'Él es inteligente y ella es inteligente también.', exampleEn: 'He is intelligent and she is intelligent too.' },
    { es: 'amable', en: 'kind (same for m./f.)', example: 'El profesor es amable.', exampleEn: 'The teacher is kind.' },
    { es: 'feliz', en: 'happy (same for m./f.; plural: felices)', example: 'Los niños son felices.', exampleEn: 'The children are happy.' },
    { es: 'alto / alta', en: 'tall', example: 'Mi hermano es alto; mi hermana es alta.', exampleEn: 'My brother is tall; my sister is tall.' },
    { es: 'bajo / baja', en: 'short (height)', example: 'Mi tío es bajo; mi tía es baja.', exampleEn: 'My uncle is short; my aunt is short.' },
    { es: 'delgado / delgada', en: 'thin, slim', example: 'Mi amigo es delgado; mi amiga es delgada.', exampleEn: 'My (male) friend is thin; my (female) friend is thin.' },
    { es: 'moreno / morena', en: 'dark-haired, brunette', example: 'Ana es morena; su hermano también es moreno.', exampleEn: 'Ana is dark-haired; her brother is dark-haired too.' },
    { es: 'guapo / guapa', en: 'good-looking, attractive', example: 'Él es muy guapo; ella es muy guapa.', exampleEn: 'He is very good-looking; she is very good-looking.' },
    { es: 'joven', en: 'young (same for m./f.; plural: jóvenes)', example: 'El profesor es joven; los estudiantes también son jóvenes.', exampleEn: 'The teacher is young; the students are young too.' },
  ],

  practice: [
    // ── ser_basics block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete with the correct form of ser: "Yo ___ estudiante."', word: 'ser', english: 'to be', answer: 'soy', concept_id: 'ser_basics', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of ser: "¿De dónde ___ tú?"', word: 'ser', english: 'to be', answer: 'eres', concept_id: 'ser_basics', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which form of ser goes with "nosotros"?', word: 'ser', english: 'to be (we)', answer: 'somos', options: ['somos', 'sois', 'son', 'es'], concept_id: 'ser_basics', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'She is a doctor.'", english: 'She is a doctor.', answer: 'Ella es médica.', word: 'ser', concept_id: 'ser_basics', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Son de México"?', word: 'son', english: 'they are', answer: 'They are from Mexico.', concept_id: 'ser_basics', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Usted eres profesor."', word: 'ser', english: 'to be (formal you)', answer: 'Usted es profesor.', concept_id: 'ser_basics', difficulty: 2 },

    // ── adjective_agreement block (kept separate from ser_basics; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "Mi hermana es alt___." (tall, feminine)', word: 'alto', english: 'tall', answer: 'alta', concept_id: 'adjective_agreement', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'What is the correct feminine form of "francés" (French)?', word: 'francés', english: 'French', answer: 'francesa', options: ['francés', 'francesa', 'frances', 'francesas'], concept_id: 'adjective_agreement', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The girls are intelligent.'", english: 'The girls are intelligent.', answer: 'Las chicas son inteligentes.', word: 'inteligente', concept_id: 'adjective_agreement', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Los niños son feliz___." (happy, plural)', word: 'feliz', english: 'happy', answer: 'felices', concept_id: 'adjective_agreement', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Ella es alto."', word: 'alto', english: 'tall', answer: 'Ella es alta.', concept_id: 'adjective_agreement', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Somos trabajadores"?', word: 'trabajadores', english: 'hardworking', answer: 'We are hardworking.', concept_id: 'adjective_agreement', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict (conjugation
// tables, nationalities guide, descriptive-adjectives guide, noun-adjective
// agreement guide) and other pedagogical grammar references before writing
// (July 2026):
// - full present-tense conjugation of ser: soy, eres, es, somos, sois, son
//   (irregular, memorized as a set — SpanishDict conjugation tables)
// - ser's core uses: identity, origin (ser + de + place), profession (no
//   indefinite article unless modified by an adjective — matches the
//   existing indefinite_articles GRAMMAR_CARDS entry), and inherent
//   characteristics, with the full ser-vs-estar contrast explicitly
//   deferred to a later unit, matching this curriculum's existing
//   ser_basics / estar_basics / ser_vs_estar structure
// - adjective gender rule: -o/-a swap (alto/alta) for the largest class of
//   adjectives; -e-ending and most consonant-ending adjectives (inteligente,
//   amable, feliz) are invariant for gender
// - exception verified specifically: adjectives ending in -dor/-tor/-ón/-ín
//   DO take -a in the feminine despite ending in a consonant (trabajador →
//   trabajadora) — confirmed so the "consonant = invariant" rule is not
//   overclaimed as universal
// - nationality adjectives: -o-ending nationalities follow the regular -o/-a
//   pattern (italiano/italiana); consonant-ending nationalities add -a AND
//   drop the written accent in the feminine (francés → francesa, inglés →
//   inglesa, alemán → alemana) — accent drops because the stressed syllable
//   no longer needs marking once the extra syllable/letter is added
// - adjective plural rule: add -s after a vowel, -es after a consonant;
//   -z-ending adjectives change z → c before -es (feliz → felices); words
//   that gain a syllable in the plural may need an added accent to preserve
//   original stress (joven → jóvenes)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// ser_basics and adjective_agreement in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough) and does not contradict them.
