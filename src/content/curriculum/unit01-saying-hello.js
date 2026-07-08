// Unit 01 — Saying Hello (A1)
// Covers: greeting_basics, subject_pronouns
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// WordReference, RAE-derived pedagogical sources, and established grammar
// references before writing — see the audit note at the bottom of this
// file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Hello, Spanish! Greeting People',
      paragraphs: [
        "Every language has a handful of words you'll use more than almost anything else, and greetings are top of that list. The good news: Spanish greetings are simple, and one word — hola (\"hello\") — works at any time of day, with anyone, in any Spanish-speaking country. You genuinely cannot use it wrong.",
        'Beyond hola, Spanish greetings shift with the time of day, similar to English "good morning" vs. "good afternoon." Buenos días covers the morning (roughly until noon or early afternoon), buenas tardes takes over after that until the sun goes down, and buenas noches covers the evening and night. Notice that buenas noches does double duty in Spanish — it means both "good evening" (a greeting) and "good night" (a farewell when you leave or head to bed). Context tells you which one is meant.',
        'To ask how someone is doing, the all-purpose phrase is ¿Cómo estás? ("How are you?"), which literally uses the verb estar (to be, for temporary states) — you\'re asking about someone\'s current condition, not their permanent identity. You\'ll also hear ¿Qué tal? used the same way, especially in Spain; it\'s a shade more casual than ¿Cómo estás?, though both are extremely common and either is a safe choice for a beginner. A typical reply is Bien, gracias ("Fine, thank you") or Muy bien ("Very well").',
        "When you meet someone for the first time, Mucho gusto (\"nice to meet you,\" literally \"much pleasure\") is the phrase to reach for anywhere in the Spanish-speaking world. In Spain you'll also often hear Encantado (said by a man) or Encantada (said by a woman) — this one is the one place in this lesson where the speaker's own gender changes the word, not the listener's.",
      ],
      examples: [
        { es: 'Hola, ¿cómo estás?', en: 'Hi, how are you?' },
        { es: 'Buenos días, señora García.', en: 'Good morning, Mrs. García.' },
        { es: 'Buenas tardes a todos.', en: 'Good afternoon, everyone.' },
        { es: '¡Buenas noches! Nos vemos mañana.', en: 'Good night! See you tomorrow.' },
        { es: 'Mucho gusto, soy Ana.', en: "Nice to meet you, I'm Ana." },
        { es: 'Encantado. — Encantada, igualmente.', en: 'Delighted (m.). — Delighted (f.), likewise.' },
      ],
      commonMistakes: [
        'English speakers often treat "buenas tardes" as an all-day greeting the way English can stretch "good afternoon" loosely — but Spanish speakers do shift to buenas noches once evening arrives, so listen for what people around you are saying and match it.',
        'Don\'t assume "buenas noches" only means "goodnight" as a farewell — walking into a room at 8 PM and saying it as a greeting is completely normal and expected.',
        'Encantado/Encantada agrees with the person speaking, not the person being greeted — a woman always says encantada, even to a man, and vice versa.',
      ],
    },
    {
      heading: 'Saying Goodbye and Basic Courtesy',
      paragraphs: [
        'Just as there are several ways to say hello, Spanish gives you a few options for goodbye, and they carry slightly different weight. Adiós is the direct equivalent of "goodbye" — it\'s completely standard, though because it can feel a touch more final or formal than a casual "bye," many everyday conversations end with Hasta luego ("see you later") instead, which is the most common, low-key way to sign off.',
        "If you know when you'll see the person again, Spanish lets you say so directly: Hasta mañana (\"see you tomorrow\"), Hasta pronto (\"see you soon\"). In much of Latin America you'll also hear the casual Chao (borrowed from Italian ciao), especially among younger speakers and friends.",
        'A short list of courtesy words will get you a long way: por favor ("please"), gracias ("thank you"), and the reply de nada ("you\'re welcome," literally "of nothing"). If you need to interrupt someone, apologize for a small bump, or get someone\'s attention, perdón is your all-purpose word — think of it as covering both "sorry" and "excuse me" for minor things. (Spanish does draw finer distinctions here — disculpe is more for politely interrupting or asking a question, and con permiso is specifically for asking to physically pass by someone — but perdón alone will serve you well as a beginner.)',
      ],
      examples: [
        { es: 'Bueno, me voy. ¡Adiós!', en: "Okay, I'm heading out. Goodbye!" },
        { es: 'Hasta luego, nos vemos pronto.', en: "See you later, we'll see each other soon." },
        { es: 'Hasta mañana, que descanses.', en: 'See you tomorrow, rest well.' },
        { es: 'Gracias por tu ayuda. — De nada.', en: "Thanks for your help. — You're welcome." },
        { es: '¿Puedo pasar? Perdón.', en: 'Can I come through? Excuse me.' },
        { es: 'Un café, por favor.', en: 'A coffee, please.' },
      ],
      commonMistakes: [
        'English speakers sometimes reach for adiós the way English uses "bye" for every single goodbye — but native speakers use hasta luego far more often in everyday conversation, saving adiós for a more final or less casual farewell.',
        'Don\'t confuse perdón (apologizing / getting attention) with con permiso (asking to physically pass through a space) — they overlap in English translation but not in actual use.',
      ],
    },
    {
      heading: '"I" and "You": Subject Pronouns, Part 1',
      paragraphs: [
        "In English, \"you\" works for everyone — your best friend, your boss, a stranger, a room full of people. Spanish makes a distinction English lost centuries ago: there's a different word for \"you\" depending on how familiar or respectful the relationship is. This is one of the first real grammar concepts a beginner has to absorb, so let's take it slowly, starting with the singular pronouns: yo (I), tú (you, informal), and usted (you, formal).",
        'Tú is what you use with friends, family, people your own age, children, and generally anyone you\'d be on a first-name basis with. Usted (often abbreviated Ud. or Vd. in writing) is what you use to signal respect or distance — with strangers, elders, people in authority (a doctor, a police officer, your boss), or in any formal setting. A useful rule for a beginner: when in doubt, especially with someone older or in a professional context, start with usted. It is very rarely wrong to be too polite; it can occasionally feel awkward to be too familiar. If someone wants you to switch to tú with them, they may say Puedes tutearme ("you can call me tú").',
        'Here\'s the part that surprises a lot of beginners: even though usted means "you," it grammatically behaves like "he" or "she" — it takes the same verb form as él/ella. So "you (formal) speak" is usted habla — the exact same habla used for "he speaks" or "she speaks." Tú, by contrast, gets its own distinct verb form: tú hablas.',
        "One more habit to build early: Spanish very often drops subject pronouns entirely, because the verb ending already tells you who's doing the action. Hablo español already means \"I speak Spanish\" — adding yo (Yo hablo español) is optional and mostly used for emphasis or contrast, not because the sentence needs it. English can't do this (verb forms like \"speak\" don't change enough to identify the subject), so it takes conscious practice to stop expecting a pronoun in every Spanish sentence.",
      ],
      examples: [
        { es: 'Yo soy de Canadá. ¿Y tú?', en: "I'm from Canada. And you (informal)?" },
        { es: 'Tú hablas muy bien español.', en: 'You (informal) speak Spanish very well.' },
        { es: 'Usted habla muy bien español.', en: 'You (formal) speak Spanish very well.' },
        { es: 'Perdón, ¿usted es el doctor García?', en: 'Excuse me, are you (formal) Dr. García?' },
        { es: 'Hablo un poco de español.', en: 'I speak a little Spanish. (yo is dropped)' },
      ],
      commonMistakes: [
        'English speakers often default to tú with everyone, since English only has one "you" — but using tú with someone who expects usted (an elder, a boss, an official) can come across as overly familiar or even disrespectful.',
        'Remember usted takes the él/ella verb form, not the tú form — "¿Usted hablas…?" is incorrect; it must be "¿Usted habla…?"',
        "Don't feel like you have to say yo, tú, etc. in every sentence — Spanish speakers usually leave the pronoun out once the subject is clear from the verb ending or context.",
      ],
    },
    {
      heading: '"We," "They," and "You All": Subject Pronouns, Part 2',
      paragraphs: [
        'Now for the plural pronouns, where Spanish adds a wrinkle English speakers don\'t expect: the group forms nosotros/nosotras (we), vosotros/vosotras (you all, Spain only), ellos/ellas (they), and ustedes (you all) also mark gender, and — for "you all" — split by region in a way that trips up almost every beginner resource. Let\'s get it exactly right.',
        'Nosotros/nosotras and ellos/ellas follow a simple rule: use the -as form only when every single person in the group is female. If there\'s even one man in an otherwise all-female group, Spanish defaults to the masculine form: nosotros, ellos. So diez amigas y un amigo ("ten female friends and one male friend") together are still nosotros, not nosotras.',
        'Now the regional split, which is worth memorizing carefully because it\'s a genuine difference in the language, not a style choice: in Spain, vosotros/vosotras is the everyday, informal way to say "you all" — you\'d use it with a group of friends the same way you\'d use tú with one friend. Formal groups in Spain (a group of strangers, elders, or officials) get ustedes instead, mirroring the tú/usted split but for plural "you." In Latin America, vosotros essentially isn\'t used in everyday speech at all — ustedes covers "you all" for every situation, formal or informal, friend group or business meeting. So a Latin American Spanish speaker addressing a group of close friends still says ustedes, where a Spanish person in the same situation would say vosotros.',
        "Practically, what does this mean for you as a learner? If your Spanish is aimed at Latin America, you can use ustedes for every plural \"you\" and never touch vosotros. If you're headed to Spain, or want to understand Spanish media and literature broadly, you'll want to recognize and eventually produce vosotros too. This lesson introduces both so you're not caught off guard by either — you'll decide later which one your own spoken Spanish leans on.",
      ],
      examples: [
        { es: 'Nosotros somos estudiantes.', en: 'We are students. (mixed or all-male group)' },
        { es: 'Nosotras somos hermanas.', en: 'We are sisters. (all-female group)' },
        { es: 'Vosotros sois muy simpáticos.', en: 'You all are very nice. (Spain, informal group)' },
        { es: 'Ustedes son muy simpáticos.', en: 'You all are very nice. (Latin America, any group; Spain, formal group)' },
        { es: 'Ellos viven en Argentina; ellas viven en Chile.', en: 'They (m./mixed) live in Argentina; they (f.) live in Chile.' },
      ],
      commonMistakes: [
        "English speakers new to Spanish often assume vosotros is standard everywhere in the Spanish-speaking world — it's specific to Spain (with a few regional exceptions even within Spain). Using it in Latin America will be understood but will sound distinctly foreign.",
        "Don't assume ustedes is always formal — that's only true in Spain. In Latin America, ustedes is the completely normal, neutral way to say \"you all\" to your own close friends, not just to strangers or elders.",
        'A common slip is using nosotras for a group that includes even one man — remember, mixed groups always take the masculine nosotros, regardless of how the numbers split.',
      ],
    },
  ],

  vocab: [
    { es: 'hola', en: 'hello', example: 'Hola, ¿qué tal?', exampleEn: "Hello, how's it going?" },
    { es: 'buenos días', en: 'good morning', example: 'Buenos días, ¿cómo durmió?', exampleEn: 'Good morning, how did you sleep?' },
    { es: 'buenas tardes', en: 'good afternoon', example: 'Buenas tardes, ¿en qué puedo ayudarle?', exampleEn: 'Good afternoon, how can I help you?' },
    { es: 'buenas noches', en: 'good evening / good night', example: 'Buenas noches, hasta mañana.', exampleEn: 'Good night, see you tomorrow.' },
    { es: 'adiós', en: 'goodbye', example: 'Adiós, que tengas un buen viaje.', exampleEn: 'Goodbye, have a good trip.' },
    { es: 'hasta luego', en: 'see you later', example: 'Me voy a casa. ¡Hasta luego!', exampleEn: "I'm going home. See you later!" },
    { es: 'mucho gusto', en: 'nice to meet you', example: 'Mucho gusto, soy el nuevo vecino.', exampleEn: "Nice to meet you, I'm the new neighbor." },
    { es: 'por favor', en: 'please', example: 'Un vaso de agua, por favor.', exampleEn: 'A glass of water, please.' },
    { es: 'gracias', en: 'thank you', example: 'Gracias por venir.', exampleEn: 'Thank you for coming.' },
    { es: 'perdón', en: 'sorry / excuse me', example: 'Perdón, ¿qué hora es?', exampleEn: 'Excuse me, what time is it?' },
    { es: 'yo', en: 'I', example: 'Yo estudio español.', exampleEn: 'I study Spanish.' },
    { es: 'tú', en: 'you (informal, singular)', example: '¿Tú vives aquí?', exampleEn: 'Do you live here?' },
    { es: 'usted', en: 'you (formal, singular)', example: '¿De dónde es usted?', exampleEn: 'Where are you from?' },
    { es: 'él', en: 'he', example: 'Él trabaja en un banco.', exampleEn: 'He works at a bank.' },
    { es: 'ella', en: 'she', example: 'Ella es mi hermana.', exampleEn: 'She is my sister.' },
    { es: 'nosotros', en: 'we (all-male or mixed group)', example: 'Nosotros vamos al cine.', exampleEn: "We're going to the movies." },
    { es: 'vosotros', en: 'you all (informal, Spain only)', example: '¿Vosotros habláis inglés?', exampleEn: 'Do you all speak English?' },
    { es: 'ellos', en: 'they (all-male or mixed group)', example: 'Ellos son de Perú.', exampleEn: "They're from Peru." },
    { es: 'ellas', en: 'they (all-female group)', example: 'Ellas cantan muy bien.', exampleEn: 'They sing very well.' },
    { es: 'ustedes', en: 'you all (formal in Spain; any register in Latin America)', example: '¿Ustedes son estudiantes?', exampleEn: 'Are you all students?' },
  ],

  practice: [
    // ── greeting_basics block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which greeting would you use walking into a shop around 9 PM?', word: 'buenas noches', english: 'good evening', answer: 'buenas noches', options: ['buenos días', 'buenas tardes', 'buenas noches', 'hasta luego'], concept_id: 'greeting_basics', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "___, ¿cómo estás?" (the all-purpose word for "hello")', word: 'hola', english: 'hello', answer: 'hola', concept_id: 'greeting_basics', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Nice to meet you.'", english: 'Nice to meet you.', answer: 'Mucho gusto.', word: 'mucho gusto', concept_id: 'greeting_basics', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "de nada"?', word: 'de nada', english: "you're welcome", answer: "you're welcome", concept_id: 'greeting_basics', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Someone bumps into you lightly on the street. What do they most likely say?', word: 'perdón', english: 'sorry / excuse me', answer: 'perdón', options: ['gracias', 'de nada', 'perdón', 'buenas tardes'], concept_id: 'greeting_basics', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Un café, ___." (please)', word: 'por favor', english: 'please', answer: 'por favor', concept_id: 'greeting_basics', difficulty: 1 },

    // ── subject_pronouns block (kept separate from greeting_basics; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'You are speaking to your new boss for the first time. Which pronoun should you use for "you"?', word: 'usted', english: 'you (formal)', answer: 'usted', options: ['tú', 'usted', 'vosotros', 'nosotros'], concept_id: 'subject_pronouns', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct verb form: "Usted ___ muy bien español." (hablar)', word: 'hablar', english: 'to speak', answer: 'habla', concept_id: 'subject_pronouns', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'They (a group of only women) are from Bolivia.'", english: 'They (a group of only women) are from Bolivia.', answer: 'Ellas son de Bolivia.', word: 'ellas', concept_id: 'subject_pronouns', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "vosotros" y dónde se usa?', word: 'vosotros', english: 'you all (informal)', answer: 'you all (informal plural "you" — used only in Spain)', altAnswers: ['you all, spain', 'you all - spain', 'you all (spain)', 'you all, used in spain', 'you guys, spain', 'you guys - spain', 'you all, used only in spain'], concept_id: 'subject_pronouns', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'In Mexico, how would a speaker address a group of close friends ("you all")?', word: 'ustedes', english: 'you all', answer: 'ustedes', options: ['vosotros', 'ustedes', 'usted', 'tú'], concept_id: 'subject_pronouns', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "___ (we, all-male group) somos hermanos."', word: 'nosotros', english: 'we', answer: 'nosotros', concept_id: 'subject_pronouns', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, WordReference-
// adjacent pedagogical sources, and RAE-informed regional-dialect writeups
// before writing (July 2026):
// - tú vs. usted usage and verb-form behavior (usted = 3rd person verb form)
// - vosotros = Spain-only informal plural; ustedes = all-register plural in
//   Latin America, formal-only plural in Spain (noting Western Andalusia /
//   Canary Islands as an intra-Spain exception, not claimed as universal)
// - buenos días / buenas tardes / buenas noches time-of-day boundaries
// - ¿qué tal? vs. ¿cómo estás? relative formality and regional frequency
// - mucho gusto vs. encantado/encantada (speaker-gender agreement, regional
//   preference: encantado/a more Spain, mucho gusto more Latin America)
// - perdón vs. disculpe vs. con permiso functional distinctions
// - nosotros/nosotras and ellos/ellas gender rule (mixed group → masculine)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// greeting_basics and subject_pronouns in src/content/grammar.js (same
// facts, fuller beginner-paced walkthrough) and does not contradict them.
