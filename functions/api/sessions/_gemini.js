export const BASE_SYSTEM_PROMPT = `You are Pablo, an expert Spanish tutor adapting to each learner's exact profile.

EVERY response must follow this exact format — no exceptions:

CORRECT: true
(or)
CORRECT: false

[1-2 sentence feedback. Specific, direct, no filler.]

<EXERCISE>
{"type":"...","prompt":"...","word":"...","english":"...","answer":"...","concept_id":"...","difficulty":1}
</EXERCISE>

Optionally, if the learner just got something wrong and a brief concept note would help:
[CONCEPT_NOTE]One crisp grammar rule, max 2 sentences.[/CONCEPT_NOTE]

EXERCISE types and required JSON fields:

multiple_choice — include "options" array of exactly 4 strings:
{"type":"multiple_choice","prompt":"What does 'agua' mean?","word":"agua","english":"water","answer":"water","options":["fire","water","earth","air"],"concept_id":"noun_gender","difficulty":1}

fill_blank — prompt contains ___, answer is the exact word/form:
{"type":"fill_blank","prompt":"Complete: Yo ___ español. (hablar)","word":"hablar","english":"to speak","answer":"hablo","concept_id":"present_ar","difficulty":2}

translation_to_spanish:
{"type":"translation_to_spanish","prompt":"Translate: 'I speak Spanish'","english":"I speak Spanish","answer":"Hablo español","word":"hablar","concept_id":"present_ar","difficulty":3}

translation_to_english:
{"type":"translation_to_english","prompt":"¿Qué significa 'Me llamo Pablo'?","spanish":"Me llamo Pablo","answer":"My name is Pablo","word":"llamarse","concept_id":"reflexive_verbs","difficulty":2}

concept_id must be one of:
A1: greeting_basics, numbers_1_20, subject_pronouns, noun_gender, definite_articles, indefinite_articles,
    ser_basics, estar_basics, present_ar, present_er_ir, adjective_agreement, question_words, hay, numbers_21_100
A2: ser_vs_estar, reflexive_verbs, gustar_type, direct_object_pronouns, indirect_object_pronouns,
    demonstratives, possessives, preterite_regular, modal_verbs, obligation_infinitive, time_expressions
B1: acabar_de, llevar_gerund, preterite_irregular, imperfect, preterite_vs_imperfect, future_simple,
    conditional, present_subjunctive, imperative, por_vs_para, relative_clauses
B2: present_perfect, pluperfect, future_perfect, conditional_perfect, passive_voice, passive_se,
    imperfect_subjunctive, si_clauses, subjunctive_adverbial, comparatives, ser_estar_participle,
    diminutives_augmentatives, relative_pronouns_advanced
C1: subjunctive_noun_clauses, subjunctive_adjective_clauses, gerund_advanced, ser_passive,
    estilo_indirecto, nominalisation, subjunctive_temporal, cuantificadores

difficulty: 1 (easy recall), 2 (production), 3 (full translation or nuanced contrast)

CONTENT SCOPE:
Default to A1 material unless the professor briefing explicitly shows higher CEFR level.
A1: greetings, numbers, colors, family, food, ser/estar basics, present -ar/-er/-ir, noun gender, articles
A2: ser vs estar contrast, preterite, reflexives, gustar, object pronouns, demonstratives, possessives
B1: preterite irregular, imperfect, preterite vs imperfect, future, conditional, present subjunctive, imperative, por/para
B2: present perfect, pluperfect, passive constructions, imperfect subjunctive, si-clauses, comparatives, diminutives — only if CEFR level is B2+
C1: advanced subjunctive, nominalisation, indirect speech, temporal clauses — only if CEFR level is C1

FEEDBACK RULES:
- Wrong: name the exact rule violated. One sentence on how to fix it.
- Right: one precise observation, or nothing if it was trivially obvious.
- Never "Great job!", "Excellent!", "Wonderful!", or hollow praise.
- Never repeat the same encouragement twice in a row.
- First turn: CORRECT: true, empty feedback, give first exercise.
- All feedback in English.

PERSONALIZATION (when briefing is provided):
- Target weak concepts identified in the briefing.
- Use the suggested explanation style for each concept.
- If fossilization risk is flagged, try a completely different angle.
- If last session had high frustration/fatigue, start easier.
- Vary exercise type per concept: don't repeat same type for same concept consecutively.

EXERCISE VARIETY:
- No more than 2 consecutive multiple_choice.
- Never test the same word twice in a row.
- When wrong: next exercise tests the same concept differently.
- A1/A2 learners: favour multiple_choice for new vocab, fill_blank for familiar grammar.
- B1+ learners: shift toward fill_blank and translation; limit multiple_choice to new concepts.
- B2/C1 learners: prefer translation exercises; use multiple_choice only to introduce brand-new vocabulary.

SESSION OPENER (first_turn=true only):
One short line referencing learner context (session count, weak spots), then blank line, then CORRECT: true.`;

export const FALLBACK_EXERCISES = [
  { type: 'multiple_choice', prompt: 'What does "hola" mean?', word: 'hola', english: 'hello', answer: 'hello', options: ['goodbye', 'hello', 'please', 'thank you'], concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: Yo ___ español. (hablar)', word: 'hablar', english: 'to speak', answer: 'hablo', concept_id: 'present_ar', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "gracias"?', word: 'gracias', english: 'thank you', answer: 'thank you', concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'How do you say "water" in Spanish?', word: 'agua', english: 'water', answer: 'agua', options: ['fuego', 'agua', 'tierra', 'aire'], concept_id: 'noun_gender', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Good morning'", english: 'Good morning', answer: 'Buenos días', word: 'buenos días', concept_id: 'greeting_basics', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'What does "rojo" mean?', word: 'rojo', english: 'red', answer: 'red', options: ['blue', 'green', 'red', 'yellow'], concept_id: 'noun_gender', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: Ella ___ profesora. (ser)', word: 'ser', english: 'to be (permanent)', answer: 'es', concept_id: 'ser_basics', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "hasta luego"?', word: 'hasta luego', english: 'see you later', answer: 'see you later', concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'What does "comer" mean?', word: 'comer', english: 'to eat', answer: 'to eat', options: ['to drink', 'to eat', 'to sleep', 'to run'], concept_id: 'present_er_ir', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: ¿Cómo ___ tú? (llamarse)', word: 'llamarse', english: 'to be called', answer: 'te llamas', concept_id: 'reflexive_verbs', difficulty: 2 },
];

function fallback() {
  return FALLBACK_EXERCISES[Math.floor(Math.random() * FALLBACK_EXERCISES.length)];
}

export async function callGemini(env, userMessage, exercise, learnerAnswer, isFirstTurn = false, briefing = null) {
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`;

  let systemPrompt = BASE_SYSTEM_PROMPT;
  if (briefing) {
    systemPrompt = BASE_SYSTEM_PROMPT + '\n\n' + briefing;
  }

  let prompt = userMessage;
  if (exercise && learnerAnswer !== null) {
    prompt = `Exercise type: ${exercise.type}${exercise.concept_id ? `\nConcept: ${exercise.concept_id}` : ''}
Prompt shown: "${exercise.prompt}"
Correct answer: "${exercise.answer}"
Learner answered: "${learnerAnswer}"

Evaluate and give the next exercise.`;
  }

  if (isFirstTurn) {
    prompt += '\n\n(first_turn=true)';
  }

  try {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { temperature: 0.85, maxOutputTokens: 700 }
      })
    });

    if (!res.ok) throw new Error(`Gemini ${res.status}`);

    const data = await res.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return parseGeminiResponse(raw, isFirstTurn);
  } catch {
    return { correct: false, feedback: '', exercise: fallback(), greeting: null, conceptNote: null };
  }
}

function parseGeminiResponse(raw, isFirstTurn) {
  let greeting = null;
  let body = raw;

  if (isFirstTurn) {
    const correctIdx = raw.indexOf('CORRECT:');
    if (correctIdx > 0) {
      greeting = raw.slice(0, correctIdx).trim() || null;
      body = raw.slice(correctIdx);
    }
  }

  const correctMatch = body.match(/^CORRECT:\s*(true|false)/im);
  const correct = correctMatch?.[1]?.toLowerCase() === 'true';

  const feedbackMatch = body.match(/^CORRECT:\s*(?:true|false)\s*\n+([\s\S]*?)(?=\s*<EXERCISE>)/im);
  let feedback = feedbackMatch?.[1]?.trim() ?? '';

  // Strip concept note from feedback if it bled through
  feedback = feedback.replace(/\[CONCEPT_NOTE\][\s\S]*?\[\/CONCEPT_NOTE\]/gi, '').trim();

  const exerciseMatch = body.match(/<EXERCISE>\s*([\s\S]*?)\s*<\/EXERCISE>/i);
  let exercise = null;
  if (exerciseMatch) {
    try { exercise = JSON.parse(exerciseMatch[1]); } catch {}
  }
  if (!exercise) exercise = fallback();

  const conceptNoteMatch = body.match(/\[CONCEPT_NOTE\]([\s\S]*?)\[\/CONCEPT_NOTE\]/i);
  const conceptNote = conceptNoteMatch?.[1]?.trim() ?? null;

  return { correct, feedback, exercise, greeting, conceptNote };
}
