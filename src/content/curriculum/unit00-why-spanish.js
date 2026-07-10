// Unit 00 — Why Spanish? (orientation, no grammar)
// A short, fact-checked overview of Spanish's size, reach, and relevance
// as of 2026, meant to run before Unit 1. No new grammar is taught here,
// so there's no vocab list and the "practice" below is light reading-
// comprehension recall rather than a grammar drill — see ES.md's
// "Pedagogical principles" section for why retrieval practice still
// matters even for a motivational unit like this one.
//
// Every figure below was checked against a named source as of mid-2026:
// Instituto Cervantes' 2025 "El español en el mundo" report (native/total
// speaker counts), Ethnologue-derived rankings reported by Visual
// Capitalist and Babbel (native-speaker rank vs. Mandarin and English),
// the UN, EU, and African Union's own official-language pages, U.S.
// Census/Pew Research figures on the Hispanic population, and 2025-2026
// labor-market data from Comligo and Preply on bilingual hiring and pay.

export default {
  sections: [
    {
      heading: 'Half a Billion Voices',
      paragraphs: [
        "Before you learn your first word, it's worth knowing what you're actually signing up for. As of the Instituto Cervantes' 2025 report, Spanish has around 520 million native speakers — more than any language on Earth except Mandarin Chinese. Add in the roughly 92 million people who speak it fluently as a second or third language, plus the 24 million currently studying it (that's you), and you get about 636 million people connected by this one language.",
        "Spanish is the official or national language of 20 countries plus Puerto Rico, spread across three continents: nearly all of Latin America and Spain itself, plus Equatorial Guinea in Africa. It's also one of only six official languages of the United Nations, alongside English, French, Arabic, Chinese, and Russian — and an official language of both the European Union and the African Union. Very few languages open doors on that many continents at once.",
        "You don't have to leave home to use it, either. The United States has no official language at the federal level, but it's home to well over 40 million native Spanish speakers and roughly 60 million people who speak it fluently or at home — a larger Spanish-speaking population than Spain's. Spanish is by a wide margin the most common language other than English spoken in American homes, schools, and workplaces.",
      ],
    },
    {
      heading: "Why It's Useful, Specifically to You",
      paragraphs: [
        "Usefulness isn't just about headcount — it's about what the language actually opens up. In the U.S. job market, Spanish dominates bilingual hiring: it shows up in the large majority of job postings that ask for a second language, across healthcare, education, sales, customer service, and government work in particular. Multiple 2025-2026 labor studies put the average pay bump for bilingual employees at somewhere around 19%, and noticeably higher in some industries.",
        "Online, Spanish is the third most-used language on the internet (behind English and Chinese) and the second most common language for website content worldwide — meaning a huge amount of news, research, entertainment, and conversation is happening in Spanish whether or not you ever leave your house.",
        "And travel is the obvious one: with Spanish, a single language lets you get around comfortably in Mexico, Spain, and nearly every country in Central and South America — one of the largest contiguous well-connected travel regions where one language will consistently serve you.",
      ],
    },
    {
      heading: 'A Language That\'s Very Much Alive Right Now',
      paragraphs: [
        "Spanish isn't a language you'd learn only for a textbook or a museum — it's driving a lot of what's culturally current in 2026. Latin music (reggaetón, Latin pop, and regional Mexican music) regularly tops global streaming charts, not just Spanish-language ones. Spanish-language film and television — from Spain, Mexico, Argentina, and Colombia especially — have become fixtures on major streaming platforms and at international festivals and awards. Spanish-language literature has produced multiple Nobel laureates and one of the most influential literary movements of the last century, magical realism, led by writers like Gabriel García Márquez.",
        "None of this is ancient history — it's happening in your feed right now. Learning Spanish means a huge amount of that culture becomes directly accessible to you, without translation smoothing over the jokes, the rhythm, or the meaning.",
      ],
    },
    {
      heading: 'How This Course Works',
      paragraphs: [
        "From here, this course takes you through 42 units (plus checkpoint reviews along the way), organized by the CEFR levels language schools use worldwide: A1 (absolute basics) through A2 (building fluency), B1 (expressing yourself), B2 (advanced structures), C1 (near-native precision), all the way to C2 (native-level mastery). Each unit teaches one or two grammar points at a time — or, in the later C2 units, the discourse markers, register control, and cultural nuance that actually separate a highly advanced speaker from a native one — explains the rule or pattern directly instead of making you guess it, and follows the explanation with practice exercises that make you produce the answer yourself — not just recognize it. That combination is what the research on language acquisition consistently points to as effective, and it's the same approach every unit after this one follows.",
        "There's no grammar to learn in this unit — just a few questions below to check what you just read. Unit 1 is where the Spanish itself begins.",
      ],
    },
  ],
  vocab: [],
  practice: [
    { type: 'multiple_choice', prompt: 'About how many native Spanish speakers are there worldwide, per the Instituto Cervantes\' 2025 report?', answer: 'About 520 million', options: ['About 50 million', 'About 150 million', 'About 520 million', 'About 1 billion'], difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which language has more native speakers than Spanish?', answer: 'Mandarin Chinese', options: ['English', 'French', 'Mandarin Chinese', 'Portuguese'], difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Roughly how many countries have Spanish as an official or national language?', answer: '20 countries (plus Puerto Rico)', options: ['5 countries', '20 countries (plus Puerto Rico)', '50 countries', '100 countries'], difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which African country has Spanish as an official language?', answer: 'Equatorial Guinea', options: ['Equatorial Guinea', 'Morocco', 'Nigeria', 'Angola'], difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which of these is an official language of the United Nations?', answer: 'Spanish', options: ['Spanish', 'Portuguese', 'Italian', 'German'], difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Where does Spanish rank among languages used on the internet?', answer: 'Third, behind English and Chinese', options: ['First', 'Second', 'Third, behind English and Chinese', 'Tenth'], difficulty: 2 },
    { type: 'multiple_choice', prompt: 'According to recent labor-market studies, what is roughly the average pay premium for bilingual employees?', answer: 'About 19%', options: ['About 2%', 'About 19%', 'About 60%', 'About 100%'], difficulty: 2 },
    { type: 'multiple_choice', prompt: 'What does this course teach in each unit, alongside the grammar rule itself?', answer: 'Practice exercises that make you produce the answer yourself', options: ['Nothing else — just the rule', 'Practice exercises that make you produce the answer yourself', 'A quiz you cannot fail', 'Only listening exercises'], difficulty: 1 },
  ],
};
