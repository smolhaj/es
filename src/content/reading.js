// Reading passages — original short-story content for the Reading section.
// Each passage's Spanish paragraphs are rendered through ClickableSpanish
// in vocab-only mode (see src/lib/dictionary.js's segmentSpanish), so every
// word with a real vocabulary.js entry is clickable for a definition —
// no curated glossary, no invented data. English paragraphs are shown
// behind a "show translation" toggle so a learner reads the Spanish cold
// first, the way ES.md's prose-writing process describes.
//
// CEFR discipline for this content follows ES.md's punch-list items on
// prose writing: every grammar structure used is checked against
// concepts.js before a level is claimed (no object pronouns, no
// preterite, no relative clauses in these two A1 passages), and every
// glossed word is a real, sourced vocabulary.js entry, not an estimate.
//
// Each passage's optional `questions` array holds comprehension exercises
// (not grammar drills) rendered via the shared ExerciseCard/Feedback
// components on the passage page — multiple_choice questions in Spanish,
// plus a couple of free-text `comprehension`-type questions with English
// answers, self-graded client-side with no backend persistence.

export const PASSAGES = [
  {
    id: 'pan-de-cada-manana',
    title: 'El pan de cada mañana',
    level: 'A1',
    format: 'standalone',
    summary: 'A baker has no bread ready for his regular customer — a short slice-of-life scene.',
    paragraphs: [
    { es: "Mateo trabaja en una panadería pequeña, en la calle Aurora. Abre la puerta a las seis de la mañana. Afuera hace frío todavía.", en: "Mateo works at a small bakery, on Aurora Street. He opens the door at six in the morning. Outside, it's still cold." },
    { es: "A las siete, siempre llega la misma clienta: la señora Pilar. Vive sola, cerca de la plaza. Compra dos cosas, nunca más: un pan y un café con leche.", en: "At seven, the same customer always arrives: Mrs. Pilar. She lives alone, near the square. She buys two things, never more: a loaf of bread and a coffee with milk." },
    { es: "—Buenos días, Mateo — dice ella, y deja las monedas exactas en el mostrador.", en: "\"Good morning, Mateo,\" she says, leaving the exact coins on the counter." },
    { es: "—Buenos días, señora Pilar — contesta él.", en: "\"Good morning, Mrs. Pilar,\" he answers." },
    { es: "Pero hoy no hay pan todavía. El horno está roto.", en: "But today there's no bread yet. The oven is broken." },
    { es: "La señora Pilar mira el mostrador vacío. Mira a Mateo. No dice nada, solo espera.", en: "Mrs. Pilar looks at the empty counter. She looks at Mateo. She doesn't say anything, she just waits." },
    { es: "Mateo piensa un momento. Saca una magdalena de la vitrina y pone la magdalena en una bolsa.", en: "Mateo thinks for a moment. He takes a muffin out of the display case and puts the muffin in a bag." },
    { es: "—Hoy invita la casa — dice, y da la bolsa a la señora Pilar. Sonríe, un poco nervioso.", en: "\"Today it's on the house,\" he says, and hands Mrs. Pilar the bag. He smiles, a little nervous." },
    { es: "La señora Pilar abre la bolsa. Huele la magdalena. Sonríe también.", en: "Mrs. Pilar opens the bag. She smells the muffin. She smiles too." },
    { es: "—Mañana el pan, entonces — contesta, y se va con su café.", en: "\"Tomorrow the bread, then,\" she answers, and leaves with her coffee." },
    { es: "Mateo mira el horno roto. Después mira la calle, vacía todavía. Y piensa: mañana necesita el pan listo antes de las siete.", en: "Mateo looks at the broken oven. Then he looks at the street, still empty. And he thinks: tomorrow he needs the bread ready before seven." },
    ],
    questions: [
      {
        type: 'multiple_choice',
        prompt: '¿Dónde trabaja Mateo?',
        options: ['En una panadería', 'En un banco', 'En un café', 'En una escuela'],
        answer: 'En una panadería',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué compra siempre la señora Pilar?',
        options: ['Un pan y un café con leche', 'Una magdalena y un té', 'Dos cafés', 'Un pastel'],
        answer: 'Un pan y un café con leche',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué le pasa al horno hoy?',
        options: ['Está roto', 'Está limpio', 'Está nuevo', 'Está abierto'],
        answer: 'Está roto',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué le da Mateo a la señora Pilar en vez de pan?',
        options: ['Una magdalena', 'Un café', 'Un pastel', 'Nada'],
        answer: 'Una magdalena',
      },
      {
        type: 'comprehension',
        prompt: 'How does Mrs. Pilar react when Mateo gives her the muffin instead of bread?',
        answer: 'she smiles',
        altAnswers: ['she smiled', 'smiles', 'smiled', 'she smiles too'],
      },
    ],
  },
  {
    id: 'blahaj-ch1',
    title: 'Las Aventuras de Blahaj — Capítulo 1: El tiburón de peluche',
    level: 'A1',
    format: 'story',
    story: 'blahaj',
    chapter: 1,
    summary: 'Lucía decides to send her stuffed shark, Blahaj, out into the world with a plushie-travel group.',
    paragraphs: [
    { es: "Lucía tiene un tiburón. No es un tiburón de verdad — es de peluche, gris y azul, con una sonrisa un poco tonta. Se llama Blahaj.", en: "Lucía has a shark. Not a real shark — a stuffed one, grey and blue, with a slightly goofy smile. His name is Blahaj." },
    { es: "Blahaj vive en la cama de Lucía, al lado de la almohada. Por la noche, Lucía lee un libro y Blahaj escucha. Por la mañana, Lucía se va a trabajar y Blahaj se queda solo, mirando la ventana.", en: "Blahaj lives on Lucía's bed, next to the pillow. At night, Lucía reads a book and Blahaj listens. In the morning, Lucía goes to work and Blahaj stays behind, looking out the window." },
    { es: "Un sábado, Lucía está en el sofá con su computadora. Busca algo en internet: \"grupos para intercambiar peluches\". Encuentra una página con miles de personas. Todas tienen un peluche parecido a Blahaj. Todas mandan sus peluches por correo a otras casas, a otras ciudades, a otros países.", en: "One Saturday, Lucía is on the couch with her laptop. She searches for something online: \"plushie exchange groups.\" She finds a page with thousands of people. They all have a plush toy like Blahaj. They all mail their plush toys to other houses, other cities, other countries." },
    { es: "Una chica de Chile escribe: \"Mi tiburón viaja mucho. ¡Doce países este año!\" Un chico de México escribe: \"El mío está ahora mismo en Japón.\" Lucía mira las fotos. Un tiburón de peluche en la playa. Otro en un tren. Otro, con gafas de sol, delante de una montaña.", en: "A girl in Chile writes: \"My shark travels a lot. Twelve countries this year!\" A boy in Mexico writes: \"Mine's in Japan right now.\" Lucía looks at the photos. A stuffed shark on the beach. Another on a train. Another, wearing sunglasses, in front of a mountain." },
    { es: "Lucía mira a Blahaj. Blahaj mira a Lucía, con su sonrisa tonta de siempre.", en: "Lucía looks at Blahaj. Blahaj looks at Lucía, with his same goofy smile." },
    { es: "—¿Quieres viajar? — pregunta Lucía.", en: "\"Do you want to travel?\" asks Lucía." },
    { es: "Blahaj no contesta, claro. Pero Lucía ya sabe la respuesta.", en: "Blahaj doesn't answer, obviously. But Lucía already knows the answer." },
    { es: "Esa noche, escribe su primer mensaje en el grupo: \"Hola. Me llamo Lucía. Tengo un tiburón. Se llama Blahaj. Es su primer viaje. ¿Alguien quiere recibir a Blahaj?\"", en: "That night, she writes her first message in the group: \"Hi. My name's Lucía. I have a shark. His name is Blahaj. It's his first trip. Does anyone want to host Blahaj?\"" },
    { es: "Contesta alguien en cinco minutos.", en: "Someone replies in five minutes." },
    ],
    questions: [
      {
        type: 'multiple_choice',
        prompt: '¿Cómo se llama el tiburón de peluche de Lucía?',
        options: ['Blahaj', 'Tiburón', 'Pilar', 'Mateo'],
        answer: 'Blahaj',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué busca Lucía en internet?',
        options: ['Grupos para intercambiar peluches', 'Recetas de pan', 'Un trabajo nuevo', 'Un libro'],
        answer: 'Grupos para intercambiar peluches',
      },
      {
        type: 'multiple_choice',
        prompt: '¿De dónde es la chica que escribe sobre su tiburón viajero?',
        options: ['Chile', 'México', 'Japón', 'España'],
        answer: 'Chile',
      },
      {
        type: 'comprehension',
        prompt: 'What does Blahaj do all day while Lucía is at work?',
        answer: 'looks out the window',
        altAnswers: ['look out the window', 'watches the window', 'looking out the window', 'he looks out the window'],
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué pregunta Lucía a Blahaj?',
        options: ['¿Quieres viajar?', '¿Tienes hambre?', '¿Estás bien?', '¿Quieres dormir?'],
        answer: '¿Quieres viajar?',
      },
    ],
  },
];

export function getPassage(id) {
  return PASSAGES.find(p => p.id === id) ?? null;
}
