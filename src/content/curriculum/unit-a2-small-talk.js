// Unit — Small Talk & Catching Up (A2)
// Covers: small_talk
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against FluentU, InkLingo, and other
// pedagogical phrasebook sources before writing — see the audit note at
// the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): placed right
// after Unit 11 (What Happened) specifically to put the freshly-taught
// preterite and present perfect to real use catching up with someone,
// rather than introducing new grammar. Unit 1 (Saying Hello) only covers
// true-beginner greetings — this is the first unit to teach an actual
// sustained social exchange.

export default {
  sections: [
    {
      heading: 'Long Time No See',
      paragraphs: [
        'Unit 1 taught you to greet someone for the first time; this unit is about greeting someone you already know, especially after a while apart. ¡Tanto tiempo! ("Long time no see!", literally "so much time") is the standard opener, often followed immediately by ¿Cómo has estado? ("How have you been?") — present perfect, from Unit 11\'s he comido, asking about a stretch of time up to right now.',
        'To ask more generally how things are going, ¿Qué tal todo? ("How\'s everything going?") and ¿Cómo va todo? (same meaning, different verb) both work well as an opener that invites more than a one-word answer. ¿Qué has hecho? ("What have you been up to?", present perfect again) specifically invites the other person to fill you in on recent events.',
        "To actually catch up, the preterite from Unit 11 carries most of the storytelling weight, since specific completed events (a trip, a new job, a move) are exactly what preterite is for: Empecé un trabajo nuevo (\"I started a new job\"), Me mudé el mes pasado (\"I moved last month\"). Cuéntame (\"Tell me,\" from contar) is the natural way to hand the conversation back: Cuéntame, ¿qué has hecho? combines both tenses in one natural exchange — has hecho asking broadly, cuéntame inviting the preterite details that follow.",
      ],
      examples: [
        { es: '¡Tanto tiempo! ¿Cómo has estado?', en: 'Long time no see! How have you been?' },
        { es: '¿Qué tal todo? ¿Cómo va el trabajo?', en: "How's everything? How's work going?" },
        { es: 'Cuéntame, ¿qué has hecho este último año?', en: 'Tell me, what have you been up to this past year?' },
        { es: 'Pues, empecé un trabajo nuevo y me mudé de ciudad.', en: 'Well, I started a new job and moved to a different city.' },
        { es: '¡Qué interesante! ¿Y cómo te sientes al respecto?', en: 'How interesting! And how do you feel about it?' },
      ],
      commonMistakes: [
        'Don\'t reach for the preterite to ask the broad "how have you been" question — that\'s present perfect territory (¿Cómo has estado?, not ¿Cómo estuviste?) since it covers a stretch of time up to now, exactly like Unit 11 taught.',
        'Once you switch to telling a specific story, though, preterite takes over — empecé, me mudé are completed one-time events, not "have started/have moved."',
        '¿Qué tal todo? invites more than yes/no — a bare bien in response, while not wrong, undersells the invitation; a native speaker usually adds at least one detail back.',
      ],
    },
    {
      heading: 'Keeping the Conversation Going',
      paragraphs: [
        "Showing genuine interest keeps small talk from going flat. ¿En serio? (\"Really?\") and ¡Qué interesante! (\"How interesting!\") are the two most common reactions to something surprising or notable. Cuéntame más (\"Tell me more\") invites the other person to keep going once they've started.",
        'If you need to wrap up — a genuinely common, polite move, not rude — Lo siento, tengo prisa (\"Sorry, I\'m in a hurry\") explains why you\'re cutting things short. ¡Nos vemos pronto! (\"See you soon!\") or ¡Hablamos pronto! (\"We\'ll talk soon!\") are natural closing lines that promise a next time without over-committing to specifics.',
        "This unit deliberately reuses grammar rather than teaching new structure — the skill here is entirely in the exchange pattern itself: greet warmly, ask broadly (present perfect), let the other person tell their story (preterite), react with genuine interest, then close naturally. That rhythm, more than any single phrase, is what makes small talk feel natural instead of like a memorized script.",
      ],
      examples: [
        { es: '¿En serio? ¡No lo sabía!', en: "Really? I didn't know!" },
        { es: '¡Qué interesante! Cuéntame más.', en: 'How interesting! Tell me more.' },
        { es: 'Lo siento, tengo prisa, pero me encantó verte.', en: "Sorry, I'm in a hurry, but it was great to see you." },
        { es: '¡Nos vemos pronto! Un abrazo.', en: 'See you soon! A hug (goodbye).' },
        { es: '¡Hablamos pronto! Cuídate.', en: "We'll talk soon! Take care." },
      ],
      commonMistakes: [
        "Ending a conversation with tengo prisa isn't considered rude in Spanish the way cutting someone off might feel in English — it's a normal, polite way to explain you need to go, especially paired with a warm closing line.",
        'Cuéntame más keeps the floor with the other person — don\'t confuse it with dime ("tell me," more direct/neutral), which doesn\'t carry the same "I\'m enjoying this, keep going" warmth.',
        "Un abrazo (literally \"a hug\") is a common warm sign-off between friends, spoken or written — it's not announcing an actual hug is about to happen, it's closer to English \"take care\" or \"hugs\" at the end of a message.",
      ],
    },
  ],

  vocab: [
    { es: 'tanto tiempo', en: 'long time no see', example: '¡Tanto tiempo! ¿Cómo has estado?', exampleEn: "Long time no see! How have you been?" },
    { es: '¿qué tal todo?', en: "how's everything going?", example: '¿Qué tal todo por casa?', exampleEn: "How's everything at home?" },
    { es: '¿qué has hecho?', en: 'what have you been up to?', example: '¿Qué has hecho este último año?', exampleEn: 'What have you been up to this past year?' },
    { es: 'cuéntame', en: 'tell me', example: 'Cuéntame, ¿qué has hecho?', exampleEn: 'Tell me, what have you been up to?' },
    { es: 'en serio', en: 'really / seriously', example: '¿En serio? ¡No lo sabía!', exampleEn: "Really? I didn't know!" },
    { es: 'qué interesante', en: 'how interesting', example: '¡Qué interesante! Cuéntame más.', exampleEn: 'How interesting! Tell me more.' },
    { es: 'tengo prisa', en: "I'm in a hurry", example: 'Lo siento, tengo prisa.', exampleEn: "Sorry, I'm in a hurry." },
    { es: 'nos vemos pronto', en: 'see you soon', example: '¡Nos vemos pronto!', exampleEn: 'See you soon!' },
  ],

  practice: [
    // ── small_talk block (blocked practice: greeting/asking first, then reacting/closing) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'Long time no see! How have you been?'", english: 'Long time no see! How have you been?', answer: '¡Tanto tiempo! ¿Cómo has estado?', word: 'tanto tiempo', concept_id: 'small_talk', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which tense does ¿Cómo has estado? use, and why?', word: 'has estado', english: 'have you been', answer: 'present perfect — covers a stretch of time up to now', options: ['preterite — one completed event', 'present perfect — covers a stretch of time up to now', 'imperfect — an ongoing past state', 'future — something not yet true'], concept_id: 'small_talk', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the preterite: "___ un trabajo nuevo el mes pasado." (empezar)', word: 'empecé', english: 'I started', answer: 'Empecé', concept_id: 'small_talk', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Cuéntame, ¿qué has hecho?"?', word: 'cuéntame', english: 'tell me', answer: 'Tell me, what have you been up to?', concept_id: 'small_talk', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Someone tells you surprising news. What is the most natural reaction?', word: '¿en serio?', english: 'really?', answer: '¿En serio? ¡No lo sabía!', options: ['Tengo prisa.', '¿En serio? ¡No lo sabía!', 'Nos vemos pronto.', '¿Qué tal todo?'], concept_id: 'small_talk', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Sorry, I'm in a hurry, but it was great to see you.'", english: "Sorry, I'm in a hurry, but it was great to see you.", answer: 'Lo siento, tengo prisa, pero me encantó verte.', word: 'tengo prisa', concept_id: 'small_talk', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the mistake: "¿Cómo estuviste?" (asking generally how someone has been, not about one finished moment)', word: 'has estado', english: 'have you been', answer: '¿Cómo has estado?', concept_id: 'small_talk', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against FluentU, InkLingo, and
// other pedagogical small-talk/catching-up phrase guides before writing
// (July 2026):
// - ¡tanto tiempo!, ¿cómo has estado?, ¿qué tal todo?/¿cómo va todo?,
//   ¿qué has hecho? confirmed as the standard catching-up openers, all
//   using present perfect for the broad "up to now" question — correctly
//   distinguished from preterite, which is reserved for the specific
//   completed events that follow once someone starts telling their story
// - cuéntame / cuéntame más confirmed as standard conversation-continuing
//   phrases; ¿en serio?/¡qué interesante! confirmed as the standard
//   interest-showing reactions
// - tengo prisa confirmed as a normal, non-rude way to explain ending a
//   conversation; nos vemos pronto / un abrazo confirmed as standard warm
//   closing lines, with un abrazo confirmed as a sign-off convention
//   (spoken and written) rather than a literal hug announcement
// This unit reuses preterite_regular and present_perfect (both Unit 11)
// rather than introducing new grammar — the first unit to teach a
// sustained social exchange beyond Unit 1's true-beginner greetings. No
// prior GRAMMAR_CARDS entry exists for small_talk, a new
// functional-language concept (see functions/_lib/concepts.js).
