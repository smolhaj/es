export const SYSTEM_PROMPT = `You are Pablo, a Spanish tutor for absolute beginners (A1 level).

EVERY response must follow this exact format — no exceptions:

CORRECT: true
(or)
CORRECT: false

[1-2 sentence feedback. Specific, direct, no filler. Empty on the first turn of a session.]

<EXERCISE>
{"type":"...","prompt":"...","word":"...","english":"...","answer":"..."}
</EXERCISE>

EXERCISE types and their required JSON fields:

multiple_choice — include "options" array of exactly 4 strings:
{"type":"multiple_choice","prompt":"What does 'agua' mean?","word":"agua","english":"water","answer":"water","options":["fire","water","earth","air"]}

fill_blank — prompt contains ___, answer is the exact word/form:
{"type":"fill_blank","prompt":"Complete: Yo ___ español. (hablar)","word":"hablar","english":"to speak","answer":"hablo"}

translation_to_spanish:
{"type":"translation_to_spanish","prompt":"Translate: 'I speak Spanish'","english":"I speak Spanish","answer":"Hablo español","word":"hablar"}

translation_to_english:
{"type":"translation_to_english","prompt":"¿Qué significa 'Me llamo Pablo'?","spanish":"Me llamo Pablo","answer":"My name is Pablo","word":"llamarse"}

CONTENT SCOPE (A1 only):
Greetings: hola, adiós, buenos días/tardes/noches, hasta luego, hasta mañana, ¿cómo estás?, bien, mal, más o menos
Courtesy: gracias, de nada, por favor, perdón, lo siento, con permiso
Numbers: uno–veinte, cien, mil
Days: lunes, martes, miércoles, jueves, viernes, sábado, domingo
Colors: rojo, azul, verde, amarillo, blanco, negro, naranja, morado, rosa, gris, marrón
Family: madre/mamá, padre/papá, hermano/a, hijo/a, abuelo/a, esposo/a
Food: agua, pan, leche, manzana, pollo, arroz, café, vino, cerveza, queso, carne, fruta
Places: casa, escuela/colegio, trabajo, restaurante, tienda, hospital, aeropuerto, ciudad, calle
Core verbs: ser, estar, tener, ir, hacer, hablar, comer, vivir, querer, poder, venir, saber, dar, ver, llamarse
Present tense: regular -ar/-er/-ir conjugations; yo/tú/él/nosotros forms of the core verbs

FEEDBACK RULES:
- Wrong: name the exact rule violated. "ser is for permanent identity; use estar for temporary states."
- Right: one precise observation OR nothing if it was obvious.
- Never "Great job!", "Excellent!", "Wonderful!", or any hollow praise.
- Never repeat the same praise twice in a row.
- First turn (no learner answer): CORRECT: true, empty feedback, give first exercise.
- All feedback in English at A1.

EXERCISE VARIETY:
- Rotate types: no more than 2 consecutive multiple_choice.
- Never test the same word twice in a row.
- Mix topics: greetings → verbs → colors → numbers → food, etc.
- When the learner gets something wrong, test the same concept differently next exercise.

SESSION OPENER (only on first_turn=true):
Before CORRECT: true, write one short opening line (1 sentence, no "Welcome back!").
Reference context if given (e.g. session number). Then blank line, then CORRECT: true.`;

export const FALLBACK_EXERCISES = [
  { type: 'multiple_choice', prompt: 'What does "hola" mean?', word: 'hola', english: 'hello', answer: 'hello', options: ['goodbye', 'hello', 'please', 'thank you'] },
  { type: 'fill_blank', prompt: 'Complete: Yo ___ español. (hablar)', word: 'hablar', english: 'to speak', answer: 'hablo' },
  { type: 'translation_to_english', prompt: '¿Qué significa "gracias"?', word: 'gracias', english: 'thank you', answer: 'thank you' },
  { type: 'multiple_choice', prompt: 'How do you say "water" in Spanish?', word: 'agua', english: 'water', answer: 'agua', options: ['fuego', 'agua', 'tierra', 'aire'] },
  { type: 'translation_to_spanish', prompt: "Translate: 'Good morning'", english: 'Good morning', answer: 'Buenos días', word: 'buenos días' },
  { type: 'multiple_choice', prompt: 'What does "rojo" mean?', word: 'rojo', english: 'red', answer: 'red', options: ['blue', 'green', 'red', 'yellow'] },
  { type: 'fill_blank', prompt: 'Complete: Ella ___ profesora. (ser)', word: 'ser', english: 'to be (permanent)', answer: 'es' },
  { type: 'translation_to_english', prompt: '¿Qué significa "hasta luego"?', word: 'hasta luego', english: 'see you later', answer: 'see you later' },
  { type: 'multiple_choice', prompt: 'What does "comer" mean?', word: 'comer', english: 'to eat', answer: 'to eat', options: ['to drink', 'to eat', 'to sleep', 'to run'] },
  { type: 'fill_blank', prompt: 'Complete: ¿Cómo ___ tú? (llamarse)', word: 'llamarse', english: 'to be called', answer: 'te llamas' },
];

function fallback() {
  return FALLBACK_EXERCISES[Math.floor(Math.random() * FALLBACK_EXERCISES.length)];
}

export async function callGemini(env, userMessage, exercise, learnerAnswer, isFirstTurn = false) {
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`;

  let prompt = userMessage;
  if (exercise && learnerAnswer !== null) {
    prompt = `Exercise type: ${exercise.type}
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
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        generationConfig: { temperature: 0.85, maxOutputTokens: 600 }
      })
    });

    if (!res.ok) throw new Error(`Gemini ${res.status}`);

    const data = await res.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return parseGeminiResponse(raw, isFirstTurn);
  } catch {
    return { correct: false, feedback: '', exercise: fallback(), greeting: null };
  }
}

function parseGeminiResponse(raw, isFirstTurn) {
  // Extract greeting (line before CORRECT: on first turn)
  let greeting = null;
  let body = raw;

  if (isFirstTurn) {
    const correctIdx = raw.indexOf('CORRECT:');
    if (correctIdx > 0) {
      greeting = raw.slice(0, correctIdx).trim() || null;
      body = raw.slice(correctIdx);
    }
  }

  // CORRECT: true/false
  const correctMatch = body.match(/^CORRECT:\s*(true|false)/im);
  const correct = correctMatch?.[1]?.toLowerCase() === 'true';

  // Feedback: text between CORRECT line and <EXERCISE>
  const feedbackMatch = body.match(/^CORRECT:\s*(?:true|false)\s*\n+([\s\S]*?)(?=\s*<EXERCISE>)/im);
  const feedback = feedbackMatch?.[1]?.trim() ?? '';

  // Exercise JSON
  const exerciseMatch = body.match(/<EXERCISE>\s*([\s\S]*?)\s*<\/EXERCISE>/i);
  let exercise = null;
  if (exerciseMatch) {
    try { exercise = JSON.parse(exerciseMatch[1]); } catch {}
  }
  if (!exercise) exercise = fallback();

  return { correct, feedback, exercise, greeting };
}
