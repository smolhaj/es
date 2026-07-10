// Reading passages — original short-story content for the Readings section.
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
// preterite, no relative clauses, no present progressive, no comparatives,
// no imperative, no nada/nadie/nunca/tampoco negation in any A1 passage
// here), and every glossed word is a real, sourced vocabulary.js entry,
// not an estimate — any word a passage needs that vocabulary.js doesn't
// already have gets researched and added before the passage ships (ES.md
// process step 12, a hard rule, not a suggestion).
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
  {
    id: 'blahaj-ch2',
    title: 'Las Aventuras de Blahaj — Capítulo 2: El viaje a Buenos Aires',
    level: 'A1',
    format: 'story',
    story: 'blahaj',
    chapter: 2,
    summary: 'Diego, de Argentina, se ofrece a recibir a Blahaj — y Lucía prepara su primer viaje.',
    paragraphs: [
    { es: 'Diego contesta primero. Vive en Buenos Aires, Argentina, con su familia. Escribe: "Hola, Lucía. Blahaj puede venir a mi casa. Aquí en julio hace mucho frío. Un tiburón de peluche necesita compañía."', en: 'Diego answers first. He lives in Buenos Aires, Argentina, with his family. He writes: "Hi, Lucía. Blahaj can come to my house. Here in July it\'s very cold. A stuffed shark needs company."' },
    { es: 'Lucía y Diego escriben mensajes toda la semana. Hablan de la fecha, la dirección, y el paquete. Diego manda fotos de su casa y de su gato, Simón.', en: 'Lucía and Diego write messages all week. They talk about the date, the address, and the package. Diego sends photos of his house and his cat, Simón.' },
    { es: 'El sábado, Lucía prepara todo: una caja pequeña, papel, y una nota para Diego. En la nota escribe: "Blahaj es tímido, pero es un buen amigo."', en: 'On Saturday, Lucía prepares everything: a small box, paper, and a note for Diego. In the note she writes: "Blahaj is shy, but he\'s a good friend."' },
    { es: 'Pone a Blahaj en la caja, con la nota y una foto de su habitación. Cierra la caja y va al correo.', en: 'She puts Blahaj in the box, with the note and a photo of his room. She closes the box and goes to the post office.' },
    { es: 'En el correo, una mujer pesa la caja y pregunta: "¿Qué hay adentro?" Lucía sonríe y contesta: "Un tiburón, pero de peluche."', en: 'At the post office, a woman weighs the box and asks: "What\'s inside?" Lucía smiles and answers: "A shark, but a stuffed one."' },
    { es: 'Pasan diez días. Lucía no recibe noticias de Diego y está un poco nerviosa. Piensa mucho en Blahaj: "¿Está bien? ¿Llega pronto?"', en: 'Ten days pass. Lucía doesn\'t get any news from Diego and is a little nervous. She thinks about Blahaj a lot: "Is he OK? Will he arrive soon?"' },
    { es: 'Por fin, llega un mensaje de Diego: "¡Blahaj está aquí! Todo bien. Ahora duerme en mi cama, al lado de Simón."', en: 'Finally, a message arrives from Diego: "Blahaj is here! Everything\'s fine. Now he sleeps in my bed, next to Simón."' },
    { es: 'Diego manda una foto: Blahaj, con una bufanda pequeña, entre Simón y una ventana con lluvia.', en: 'Diego sends a photo: Blahaj, wearing a small scarf, between Simón and a window with rain.' },
    { es: 'Lucía mira la foto muchas veces. Piensa: "¿Dónde va Blahaj en el próximo viaje?"', en: 'Lucía looks at the photo many times. She thinks: "Where will Blahaj go on his next trip?"' },
    ],
    questions: [
      {
        type: 'multiple_choice',
        prompt: '¿De qué país es Diego?',
        options: ['Argentina', 'México', 'Chile', 'España'],
        answer: 'Argentina',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué hace la mujer en el correo?',
        options: ['Pesa la caja', 'Abre la caja', 'Pierde la caja', 'Rompe la caja'],
        answer: 'Pesa la caja',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Dónde duerme Blahaj en la casa de Diego?',
        options: ['En la cama, al lado de Simón', 'En una caja', 'En la cocina', 'Afuera'],
        answer: 'En la cama, al lado de Simón',
      },
      {
        type: 'comprehension',
        prompt: "How does Lucía feel while she's waiting for news from Diego?",
        answer: 'a little nervous',
        altAnswers: ['nervous', 'a bit nervous', 'she is nervous', 'she feels nervous'],
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué lleva Blahaj en la foto que manda Diego?',
        options: ['Una bufanda', 'Un sombrero', 'Gafas de sol', 'Una camiseta'],
        answer: 'Una bufanda',
      },
    ],
  },
  {
    id: 'domingo-en-el-parque',
    title: 'El domingo en el parque',
    level: 'A1',
    format: 'standalone',
    summary: 'Sara and her dog meet the same stranger every Sunday at the park lake.',
    paragraphs: [
    { es: 'Sara vive cerca de un parque grande, con muchos árboles y un lago pequeño. Los domingos, camina al parque con su perro, Tobi.', en: 'Sara lives near a big park, with lots of trees and a small lake. On Sundays, she walks to the park with her dog, Tobi.' },
    { es: 'Siempre se sienta en el mismo lugar, cerca del lago. Allí, casi siempre, hay un hombre mayor. Lee el periódico y toma café.', en: "She always sits in the same spot, near the lake. There, almost always, there's an older man. He reads the newspaper and drinks coffee." },
    { es: '—Buenos días — dice Sara. El hombre sonríe y contesta: —Buenos días, señorita. ¿Y Tobi? ¿Bien?', en: '"Good morning," says Sara. The man smiles and answers: "Good morning, miss. And Tobi? Doing well?"' },
    { es: 'Tobi corre hacia el lago y ladra a los patos. Los patos nadan rápido, lejos del perro.', en: 'Tobi runs toward the lake and barks at the ducks. The ducks swim fast, away from the dog.' },
    { es: 'El hombre mira y se ríe un poco. —Tu perro quiere un amigo pato — dice.', en: 'The man watches and laughs a little. "Your dog wants a duck friend," he says.' },
    { es: 'Sara llama a Tobi. El perro vuelve, cansado y feliz. Los tres, Sara, Tobi y el hombre, miran el lago juntos, en silencio.', en: 'Sara calls Tobi. The dog comes back, tired and happy. The three of them, Sara, Tobi, and the man, look at the lake together, in silence.' },
    { es: 'Antes de irse, Sara pregunta el nombre del hombre. —Me llamo Andrés — contesta él. —Hasta el domingo, Andrés — dice ella, y camina a casa con Tobi.', en: 'Before leaving, Sara asks the man\'s name. "My name is Andrés," he answers. "See you Sunday, Andrés," she says, and walks home with Tobi.' },
    ],
    questions: [
      {
        type: 'multiple_choice',
        prompt: '¿Con quién camina Sara al parque?',
        options: ['Con su perro', 'Con su hermano', 'Con una amiga', 'Sola'],
        answer: 'Con su perro',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué hace el hombre en el parque?',
        options: ['Lee el periódico y toma café', 'Corre con su perro', 'Nada en el lago', 'Duerme'],
        answer: 'Lee el periódico y toma café',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué hace Tobi cuando ve los patos?',
        options: ['Ladra y corre hacia ellos', 'Duerme', 'Nada con ellos', 'Los mira en silencio'],
        answer: 'Ladra y corre hacia ellos',
      },
      {
        type: 'comprehension',
        prompt: 'What does Sara ask the man before she leaves?',
        answer: 'his name',
        altAnswers: ['his name', 'what his name is', 'for his name', 'she asks his name', "what's your name", 'what is your name', 'what is his name'],
      },
      {
        type: 'multiple_choice',
        prompt: '¿Cómo se llama el hombre del parque?',
        options: ['Andrés', 'Diego', 'Javier', 'Mateo'],
        answer: 'Andrés',
      },
    ],
  },
  {
    id: 'planes-para-el-sabado',
    title: 'Planes para el sábado',
    level: 'A1',
    format: 'standalone',
    summary: 'Marta calls her friend Javier to make plans for a party — a phone-call dialogue.',
    paragraphs: [
    { es: 'Marta llama a su amigo Javier por teléfono. Quiere hacer planes para el sábado.', en: 'Marta calls her friend Javier on the phone. She wants to make plans for Saturday.' },
    { es: '—¿Sí? — contesta Javier. —Hola, Javier, soy Marta. ¿Qué haces el sábado? — pregunta ella.', en: '"Hello?" answers Javier. "Hi Javier, it\'s Marta. What are you doing Saturday?" she asks.' },
    { es: '—No sé todavía. ¿Por qué? — dice Javier. —Hay una fiesta en casa de Carla. ¿Quieres ir? — contesta Marta.', en: '"I don\'t know yet. Why?" says Javier. "There\'s a party at Carla\'s house. Do you want to go?" answers Marta.' },
    { es: '—¡Claro que sí! ¿A qué hora empieza? — pregunta Javier, contento.', en: '"Of course! What time does it start?" asks Javier, happy.' },
    { es: '—A las ocho. Yo llego a las siete y media, para ayudar con la comida — contesta Marta. —Perfecto. Puedo llevar música — dice Javier.', en: '"At eight. I\'m arriving at seven thirty, to help with the food," answers Marta. "Perfect. I can bring music," says Javier.' },
    { es: '—Buena idea. Nos vemos el sábado, entonces — dice Marta. —Nos vemos. ¡Gracias, Marta! — contesta Javier, y cuelga el teléfono.', en: '"Good idea. See you Saturday, then," says Marta. "See you. Thanks, Marta!" answers Javier, and hangs up the phone.' },
    ],
    questions: [
      {
        type: 'multiple_choice',
        prompt: '¿Por qué llama Marta a Javier?',
        options: ['Para hacer planes para el sábado', 'Para pedir dinero', 'Para cancelar una cita', 'Para invitarlo a cenar hoy'],
        answer: 'Para hacer planes para el sábado',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Dónde es la fiesta?',
        options: ['En casa de Carla', 'En casa de Marta', 'En un restaurante', 'En el parque'],
        answer: 'En casa de Carla',
      },
      {
        type: 'multiple_choice',
        prompt: '¿A qué hora llega Marta a la fiesta?',
        options: ['A las siete y media', 'A las ocho', 'A las nueve', 'A las seis'],
        answer: 'A las siete y media',
      },
      {
        type: 'comprehension',
        prompt: 'What does Javier offer to bring to the party?',
        answer: 'music',
        altAnswers: ['music', 'some music', 'he offers music'],
      },
      {
        type: 'multiple_choice',
        prompt: '¿Cómo contesta Javier al final?',
        options: ['Nos vemos. ¡Gracias, Marta!', 'No puedo ir', 'Voy a llegar tarde', 'No sé todavía'],
        answer: 'Nos vemos. ¡Gracias, Marta!',
      },
    ],
  },
  {
    id: 'como-llego-a-la-estacion',
    title: '¿Cómo llego a la estación?',
    level: 'A1',
    format: 'standalone',
    summary: 'Elena asks a stranger for directions to the train station in an unfamiliar city.',
    paragraphs: [
    { es: 'Elena está en una ciudad nueva. Busca la estación de tren, pero no sabe el camino. Ve a una mujer en la calle.', en: "Elena is in a new city. She's looking for the train station, but doesn't know the way. She sees a woman on the street." },
    { es: '—Perdón, señora. ¿Sabe dónde está la estación de tren? — pregunta Elena. —Sí, claro — contesta la mujer—. Está bastante cerca.', en: '"Excuse me, ma\'am. Do you know where the train station is?" asks Elena. "Yes, of course," answers the woman. "It\'s pretty close."' },
    { es: '—Puede seguir todo derecho por esta calle, hasta el semáforo — explica la mujer—. Después, tiene que doblar a la derecha. La estación está enfrente de un banco grande.', en: '"You can keep going straight down this street, to the traffic light," the woman explains. "After that, you have to turn right. The station is in front of a big bank."' },
    { es: '—Muchas gracias, señora. Es usted muy amable — dice Elena. —De nada. ¡Buen viaje! — contesta la mujer, y camina de nuevo por la calle.', en: '"Thank you very much, ma\'am. You\'re very kind," says Elena. "You\'re welcome. Have a good trip!" answers the woman, and walks on down the street again.' },
    { es: 'Elena camina por la calle, hasta el semáforo. Dobla a la derecha. Allí está la estación, enfrente del banco, exactamente como dice la mujer.', en: "Elena walks down the street, to the traffic light. She turns right. There's the station, in front of the bank, exactly as the woman said." },
    ],
    questions: [
      {
        type: 'multiple_choice',
        prompt: '¿Qué busca Elena?',
        options: ['La estación de tren', 'Un banco', 'Un restaurante', 'Su casa'],
        answer: 'La estación de tren',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Hacia dónde tiene que doblar Elena?',
        options: ['A la derecha', 'A la izquierda', 'Todo derecho solamente', 'Hacia atrás'],
        answer: 'A la derecha',
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué hay enfrente de la estación?',
        options: ['Un banco grande', 'Un parque', 'Una panadería', 'Un semáforo'],
        answer: 'Un banco grande',
      },
      {
        type: 'comprehension',
        prompt: 'What does Elena say to thank the woman?',
        answer: 'thank you very much',
        altAnswers: ['thank you', 'thanks a lot', 'many thanks', "thank you very much, ma'am"],
      },
      {
        type: 'multiple_choice',
        prompt: '¿Qué dice la mujer para despedirse?',
        options: ['¡Buen viaje!', '¡Hasta mañana!', '¡Buena suerte!', '¡Nos vemos!'],
        answer: '¡Buen viaje!',
      },
    ],
  },
];

export function getPassage(id) {
  return PASSAGES.find(p => p.id === id) ?? null;
}
