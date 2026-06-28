// Thematic vocabulary lists A1–B1
// Each entry: { es, en, cefr, domain, example, exampleEn, frequencyRank }
// frequencyRank: approximate rank in Spanish corpus (lower = more common)

export const VOCABULARY = [
  // ── GREETINGS & COURTESY ────────────────────────────────────────────────
  { es: 'hola', en: 'hello', cefr: 'A1', domain: 'greetings', frequencyRank: 50, example: '¡Hola! ¿Cómo estás?', exampleEn: 'Hello! How are you?' },
  { es: 'adiós', en: 'goodbye', cefr: 'A1', domain: 'greetings', frequencyRank: 200, example: 'Adiós, hasta mañana.', exampleEn: 'Goodbye, see you tomorrow.' },
  { es: 'buenos días', en: 'good morning', cefr: 'A1', domain: 'greetings', frequencyRank: 300, example: '—Buenos días. ¿Qué tal?', exampleEn: 'Good morning. How are things?' },
  { es: 'buenas tardes', en: 'good afternoon', cefr: 'A1', domain: 'greetings', frequencyRank: 350, example: 'Buenas tardes, señora García.', exampleEn: 'Good afternoon, Mrs García.' },
  { es: 'buenas noches', en: 'good evening / good night', cefr: 'A1', domain: 'greetings', frequencyRank: 360, example: '—Buenas noches. —Hasta mañana.', exampleEn: 'Good night. — See you tomorrow.' },
  { es: 'hasta luego', en: 'see you later', cefr: 'A1', domain: 'greetings', frequencyRank: 400, example: 'Hasta luego, amigo.', exampleEn: 'See you later, friend.' },
  { es: 'hasta mañana', en: 'see you tomorrow', cefr: 'A1', domain: 'greetings', frequencyRank: 420, example: '—Buenas noches. —Hasta mañana.', exampleEn: 'Good night. — See you tomorrow.' },
  { es: 'por favor', en: 'please', cefr: 'A1', domain: 'greetings', frequencyRank: 80, example: 'Un café, por favor.', exampleEn: 'A coffee, please.' },
  { es: 'gracias', en: 'thank you', cefr: 'A1', domain: 'greetings', frequencyRank: 90, example: '—Gracias. —De nada.', exampleEn: 'Thank you. — You\'re welcome.' },
  { es: 'de nada', en: 'you\'re welcome', cefr: 'A1', domain: 'greetings', frequencyRank: 350, example: '—Gracias. —De nada.', exampleEn: 'Thank you. — You\'re welcome.' },
  { es: 'perdón', en: 'excuse me / sorry', cefr: 'A1', domain: 'greetings', frequencyRank: 450, example: 'Perdón, ¿dónde está el baño?', exampleEn: 'Excuse me, where is the bathroom?' },
  { es: 'lo siento', en: 'I\'m sorry', cefr: 'A1', domain: 'greetings', frequencyRank: 500, example: 'Lo siento, llegué tarde.', exampleEn: 'I\'m sorry, I arrived late.' },

  // ── NUMBERS ──────────────────────────────────────────────────────────────
  { es: 'uno', en: 'one', cefr: 'A1', domain: 'numbers', frequencyRank: 30, example: 'Tengo un hermano.', exampleEn: 'I have one brother.' },
  { es: 'dos', en: 'two', cefr: 'A1', domain: 'numbers', frequencyRank: 35, example: 'Hay dos puertas.', exampleEn: 'There are two doors.' },
  { es: 'tres', en: 'three', cefr: 'A1', domain: 'numbers', frequencyRank: 40, example: 'Compré tres manzanas.', exampleEn: 'I bought three apples.' },
  { es: 'cuatro', en: 'four', cefr: 'A1', domain: 'numbers', frequencyRank: 55, example: 'Son las cuatro en punto.', exampleEn: 'It\'s four o\'clock exactly.' },
  { es: 'cinco', en: 'five', cefr: 'A1', domain: 'numbers', frequencyRank: 60, example: 'Cinco más cinco son diez.', exampleEn: 'Five plus five is ten.' },
  { es: 'diez', en: 'ten', cefr: 'A1', domain: 'numbers', frequencyRank: 70, example: 'Cuesta diez euros.', exampleEn: 'It costs ten euros.' },
  { es: 'veinte', en: 'twenty', cefr: 'A1', domain: 'numbers', frequencyRank: 120, example: 'Tengo veinte años.', exampleEn: 'I am twenty years old.' },
  { es: 'cien', en: 'a hundred', cefr: 'A1', domain: 'numbers', frequencyRank: 150, example: 'Cien personas vinieron.', exampleEn: 'A hundred people came.' },
  { es: 'mil', en: 'a thousand', cefr: 'A1', domain: 'numbers', frequencyRank: 180, example: 'El coche cuesta diez mil euros.', exampleEn: 'The car costs ten thousand euros.' },

  // ── DAYS & TIME ──────────────────────────────────────────────────────────
  { es: 'lunes', en: 'Monday', cefr: 'A1', domain: 'time', frequencyRank: 600, example: 'El lunes tengo clase.', exampleEn: 'On Monday I have class.' },
  { es: 'martes', en: 'Tuesday', cefr: 'A1', domain: 'time', frequencyRank: 620, example: 'El martes hay reunión.', exampleEn: 'On Tuesday there\'s a meeting.' },
  { es: 'miércoles', en: 'Wednesday', cefr: 'A1', domain: 'time', frequencyRank: 640, example: 'Miércoles es el día de la semana.', exampleEn: 'Wednesday is the middle of the week.' },
  { es: 'jueves', en: 'Thursday', cefr: 'A1', domain: 'time', frequencyRank: 660, example: 'El jueves comemos juntos.', exampleEn: 'On Thursday we eat together.' },
  { es: 'viernes', en: 'Friday', cefr: 'A1', domain: 'time', frequencyRank: 680, example: 'El viernes salimos de fiesta.', exampleEn: 'On Friday we go out.' },
  { es: 'sábado', en: 'Saturday', cefr: 'A1', domain: 'time', frequencyRank: 700, example: 'El sábado descanso.', exampleEn: 'On Saturday I rest.' },
  { es: 'domingo', en: 'Sunday', cefr: 'A1', domain: 'time', frequencyRank: 720, example: 'El domingo voy a la iglesia.', exampleEn: 'On Sunday I go to church.' },
  { es: 'hoy', en: 'today', cefr: 'A1', domain: 'time', frequencyRank: 85, example: 'Hoy es lunes.', exampleEn: 'Today is Monday.' },
  { es: 'mañana', en: 'tomorrow / morning', cefr: 'A1', domain: 'time', frequencyRank: 100, example: 'Mañana viene Ana.', exampleEn: 'Tomorrow Ana is coming.' },
  { es: 'ayer', en: 'yesterday', cefr: 'A1', domain: 'time', frequencyRank: 130, example: 'Ayer fui al médico.', exampleEn: 'Yesterday I went to the doctor.' },
  { es: 'ahora', en: 'now', cefr: 'A1', domain: 'time', frequencyRank: 45, example: '¿Puedes venir ahora?', exampleEn: 'Can you come now?' },
  { es: 'siempre', en: 'always', cefr: 'A1', domain: 'time', frequencyRank: 110, example: 'Siempre llega tarde.', exampleEn: 'He always arrives late.' },
  { es: 'nunca', en: 'never', cefr: 'A1', domain: 'time', frequencyRank: 115, example: 'Nunca como carne.', exampleEn: 'I never eat meat.' },

  // ── COLORS ──────────────────────────────────────────────────────────────
  { es: 'rojo', en: 'red', cefr: 'A1', domain: 'colors', frequencyRank: 800, example: 'El semáforo está en rojo.', exampleEn: 'The traffic light is red.' },
  { es: 'azul', en: 'blue', cefr: 'A1', domain: 'colors', frequencyRank: 820, example: 'El cielo es azul.', exampleEn: 'The sky is blue.' },
  { es: 'verde', en: 'green', cefr: 'A1', domain: 'colors', frequencyRank: 840, example: 'La hierba es verde.', exampleEn: 'The grass is green.' },
  { es: 'amarillo', en: 'yellow', cefr: 'A1', domain: 'colors', frequencyRank: 860, example: 'El sol es amarillo.', exampleEn: 'The sun is yellow.' },
  { es: 'blanco', en: 'white', cefr: 'A1', domain: 'colors', frequencyRank: 750, example: 'La nieve es blanca.', exampleEn: 'The snow is white.' },
  { es: 'negro', en: 'black', cefr: 'A1', domain: 'colors', frequencyRank: 760, example: 'Llevo un vestido negro.', exampleEn: 'I\'m wearing a black dress.' },
  { es: 'naranja', en: 'orange', cefr: 'A1', domain: 'colors', frequencyRank: 900, example: 'Le gusta el color naranja.', exampleEn: 'She likes the color orange.' },
  { es: 'morado', en: 'purple', cefr: 'A1', domain: 'colors', frequencyRank: 920, example: 'Las flores son moradas.', exampleEn: 'The flowers are purple.' },
  { es: 'rosa', en: 'pink', cefr: 'A1', domain: 'colors', frequencyRank: 910, example: 'El flamenco es rosa.', exampleEn: 'The flamingo is pink.' },
  { es: 'gris', en: 'grey', cefr: 'A1', domain: 'colors', frequencyRank: 870, example: 'El cielo está gris hoy.', exampleEn: 'The sky is grey today.' },
  { es: 'marrón', en: 'brown', cefr: 'A1', domain: 'colors', frequencyRank: 890, example: 'Tiene los ojos marrones.', exampleEn: 'She has brown eyes.' },

  // ── FAMILY ──────────────────────────────────────────────────────────────
  { es: 'madre', en: 'mother', cefr: 'A1', domain: 'family', frequencyRank: 180, example: 'Mi madre cocina muy bien.', exampleEn: 'My mother cooks very well.' },
  { es: 'padre', en: 'father', cefr: 'A1', domain: 'family', frequencyRank: 190, example: 'Mi padre trabaja en un banco.', exampleEn: 'My father works in a bank.' },
  { es: 'hermano', en: 'brother', cefr: 'A1', domain: 'family', frequencyRank: 210, example: 'Tengo un hermano mayor.', exampleEn: 'I have an older brother.' },
  { es: 'hermana', en: 'sister', cefr: 'A1', domain: 'family', frequencyRank: 215, example: 'Mi hermana vive en Barcelona.', exampleEn: 'My sister lives in Barcelona.' },
  { es: 'hijo', en: 'son', cefr: 'A1', domain: 'family', frequencyRank: 160, example: 'Mi hijo tiene cinco años.', exampleEn: 'My son is five years old.' },
  { es: 'hija', en: 'daughter', cefr: 'A1', domain: 'family', frequencyRank: 165, example: 'Su hija estudia medicina.', exampleEn: 'His daughter studies medicine.' },
  { es: 'abuelo', en: 'grandfather', cefr: 'A1', domain: 'family', frequencyRank: 300, example: 'Mi abuelo tiene ochenta años.', exampleEn: 'My grandfather is eighty years old.' },
  { es: 'abuela', en: 'grandmother', cefr: 'A1', domain: 'family', frequencyRank: 305, example: 'La abuela hace paella los domingos.', exampleEn: 'Grandma makes paella on Sundays.' },
  { es: 'esposo', en: 'husband', cefr: 'A1', domain: 'family', frequencyRank: 350, example: 'Su esposo es médico.', exampleEn: 'Her husband is a doctor.' },
  { es: 'esposa', en: 'wife', cefr: 'A1', domain: 'family', frequencyRank: 355, example: 'Mi esposa habla cuatro idiomas.', exampleEn: 'My wife speaks four languages.' },
  { es: 'amigo', en: 'friend (m)', cefr: 'A1', domain: 'family', frequencyRank: 140, example: 'Es mi mejor amigo.', exampleEn: 'He\'s my best friend.' },
  { es: 'amiga', en: 'friend (f)', cefr: 'A1', domain: 'family', frequencyRank: 145, example: 'Mi amiga vive en Madrid.', exampleEn: 'My friend lives in Madrid.' },

  // ── FOOD & DRINK ────────────────────────────────────────────────────────
  { es: 'agua', en: 'water', cefr: 'A1', domain: 'food', frequencyRank: 170, example: 'Quiero un vaso de agua.', exampleEn: 'I want a glass of water.' },
  { es: 'pan', en: 'bread', cefr: 'A1', domain: 'food', frequencyRank: 380, example: 'Compro pan cada mañana.', exampleEn: 'I buy bread every morning.' },
  { es: 'leche', en: 'milk', cefr: 'A1', domain: 'food', frequencyRank: 420, example: 'El niño bebe leche.', exampleEn: 'The child drinks milk.' },
  { es: 'café', en: 'coffee', cefr: 'A1', domain: 'food', frequencyRank: 440, example: 'Tomo un café con leche.', exampleEn: 'I have a coffee with milk.' },
  { es: 'vino', en: 'wine', cefr: 'A1', domain: 'food', frequencyRank: 500, example: 'Un vaso de vino tinto, por favor.', exampleEn: 'A glass of red wine, please.' },
  { es: 'cerveza', en: 'beer', cefr: 'A1', domain: 'food', frequencyRank: 520, example: 'Dos cervezas, por favor.', exampleEn: 'Two beers, please.' },
  { es: 'pollo', en: 'chicken', cefr: 'A1', domain: 'food', frequencyRank: 560, example: 'El pollo está muy rico.', exampleEn: 'The chicken is very tasty.' },
  { es: 'arroz', en: 'rice', cefr: 'A1', domain: 'food', frequencyRank: 580, example: 'Como arroz todos los días.', exampleEn: 'I eat rice every day.' },
  { es: 'manzana', en: 'apple', cefr: 'A1', domain: 'food', frequencyRank: 600, example: 'Una manzana al día.', exampleEn: 'An apple a day.' },
  { es: 'queso', en: 'cheese', cefr: 'A1', domain: 'food', frequencyRank: 620, example: 'Me gusta el queso manchego.', exampleEn: 'I like manchego cheese.' },
  { es: 'carne', en: 'meat', cefr: 'A1', domain: 'food', frequencyRank: 400, example: '¿Comes carne o eres vegetariano?', exampleEn: 'Do you eat meat or are you vegetarian?' },
  { es: 'pescado', en: 'fish', cefr: 'A1', domain: 'food', frequencyRank: 550, example: 'El pescado es muy sano.', exampleEn: 'Fish is very healthy.' },
  { es: 'verduras', en: 'vegetables', cefr: 'A1', domain: 'food', frequencyRank: 480, example: 'Como muchas verduras.', exampleEn: 'I eat lots of vegetables.' },
  { es: 'fruta', en: 'fruit', cefr: 'A1', domain: 'food', frequencyRank: 490, example: 'La fruta es buena para la salud.', exampleEn: 'Fruit is good for health.' },
  { es: 'ensalada', en: 'salad', cefr: 'A1', domain: 'food', frequencyRank: 640, example: 'Pide una ensalada mixta.', exampleEn: 'Order a mixed salad.' },
  { es: 'sopa', en: 'soup', cefr: 'A1', domain: 'food', frequencyRank: 660, example: 'La sopa está caliente.', exampleEn: 'The soup is hot.' },
  { es: 'huevo', en: 'egg', cefr: 'A1', domain: 'food', frequencyRank: 540, example: 'Me gustan los huevos fritos.', exampleEn: 'I like fried eggs.' },

  // ── PLACES ──────────────────────────────────────────────────────────────
  { es: 'casa', en: 'house / home', cefr: 'A1', domain: 'places', frequencyRank: 90, example: 'Estoy en casa.', exampleEn: 'I\'m at home.' },
  { es: 'escuela', en: 'school', cefr: 'A1', domain: 'places', frequencyRank: 280, example: 'Los niños van a la escuela.', exampleEn: 'The children go to school.' },
  { es: 'trabajo', en: 'work / job', cefr: 'A1', domain: 'places', frequencyRank: 95, example: 'Voy al trabajo en metro.', exampleEn: 'I go to work by metro.' },
  { es: 'restaurante', en: 'restaurant', cefr: 'A1', domain: 'places', frequencyRank: 460, example: 'Cenamos en un restaurante italiano.', exampleEn: 'We dined at an Italian restaurant.' },
  { es: 'tienda', en: 'shop / store', cefr: 'A1', domain: 'places', frequencyRank: 400, example: 'Hay una tienda cerca de aquí.', exampleEn: 'There\'s a shop near here.' },
  { es: 'hospital', en: 'hospital', cefr: 'A1', domain: 'places', frequencyRank: 350, example: 'El médico trabaja en el hospital.', exampleEn: 'The doctor works at the hospital.' },
  { es: 'aeropuerto', en: 'airport', cefr: 'A1', domain: 'places', frequencyRank: 480, example: 'El vuelo sale del aeropuerto.', exampleEn: 'The flight departs from the airport.' },
  { es: 'ciudad', en: 'city', cefr: 'A1', domain: 'places', frequencyRank: 120, example: 'Madrid es una ciudad grande.', exampleEn: 'Madrid is a big city.' },
  { es: 'calle', en: 'street', cefr: 'A1', domain: 'places', frequencyRank: 200, example: 'Vivo en esta calle.', exampleEn: 'I live on this street.' },
  { es: 'banco', en: 'bank', cefr: 'A1', domain: 'places', frequencyRank: 310, example: 'Necesito ir al banco.', exampleEn: 'I need to go to the bank.' },
  { es: 'supermercado', en: 'supermarket', cefr: 'A1', domain: 'places', frequencyRank: 420, example: 'Compro en el supermercado.', exampleEn: 'I shop at the supermarket.' },
  { es: 'parque', en: 'park', cefr: 'A1', domain: 'places', frequencyRank: 430, example: 'Los niños juegan en el parque.', exampleEn: 'The children play in the park.' },
  { es: 'playa', en: 'beach', cefr: 'A1', domain: 'places', frequencyRank: 440, example: 'Vamos a la playa en verano.', exampleEn: 'We go to the beach in summer.' },

  // ── CORE VERBS (A1) ─────────────────────────────────────────────────────
  { es: 'ser', en: 'to be (permanent)', cefr: 'A1', domain: 'verbs', frequencyRank: 2, example: 'Soy estudiante.', exampleEn: 'I am a student.' },
  { es: 'estar', en: 'to be (temporary)', cefr: 'A1', domain: 'verbs', frequencyRank: 5, example: 'Estoy cansado.', exampleEn: 'I am tired.' },
  { es: 'tener', en: 'to have', cefr: 'A1', domain: 'verbs', frequencyRank: 6, example: 'Tengo hambre.', exampleEn: 'I am hungry. (lit. I have hunger.)' },
  { es: 'ir', en: 'to go', cefr: 'A1', domain: 'verbs', frequencyRank: 7, example: 'Voy al mercado.', exampleEn: 'I\'m going to the market.' },
  { es: 'hacer', en: 'to do / to make', cefr: 'A1', domain: 'verbs', frequencyRank: 8, example: '¿Qué haces hoy?', exampleEn: 'What are you doing today?' },
  { es: 'poder', en: 'to be able to / can', cefr: 'A1', domain: 'verbs', frequencyRank: 10, example: '¿Puedes ayudarme?', exampleEn: 'Can you help me?' },
  { es: 'querer', en: 'to want / to love', cefr: 'A1', domain: 'verbs', frequencyRank: 12, example: 'Quiero aprender español.', exampleEn: 'I want to learn Spanish.' },
  { es: 'hablar', en: 'to speak', cefr: 'A1', domain: 'verbs', frequencyRank: 30, example: 'Hablo un poco de español.', exampleEn: 'I speak a little Spanish.' },
  { es: 'comer', en: 'to eat', cefr: 'A1', domain: 'verbs', frequencyRank: 45, example: 'Comemos a las dos.', exampleEn: 'We eat at two o\'clock.' },
  { es: 'vivir', en: 'to live', cefr: 'A1', domain: 'verbs', frequencyRank: 50, example: 'Vivo en Madrid.', exampleEn: 'I live in Madrid.' },
  { es: 'venir', en: 'to come', cefr: 'A1', domain: 'verbs', frequencyRank: 55, example: '¿Vienes a la fiesta?', exampleEn: 'Are you coming to the party?' },
  { es: 'saber', en: 'to know (facts/skills)', cefr: 'A1', domain: 'verbs', frequencyRank: 15, example: '¿Sabes cocinar?', exampleEn: 'Do you know how to cook?' },
  { es: 'llamarse', en: 'to be called', cefr: 'A1', domain: 'verbs', frequencyRank: 180, example: 'Me llamo Carlos.', exampleEn: 'My name is Carlos.' },
  { es: 'trabajar', en: 'to work', cefr: 'A1', domain: 'verbs', frequencyRank: 60, example: 'Trabajo en una empresa.', exampleEn: 'I work at a company.' },
  { es: 'estudiar', en: 'to study', cefr: 'A1', domain: 'verbs', frequencyRank: 65, example: 'Estudio español.', exampleEn: 'I study Spanish.' },
  { es: 'beber', en: 'to drink', cefr: 'A1', domain: 'verbs', frequencyRank: 70, example: 'Bebe mucha agua.', exampleEn: 'She drinks a lot of water.' },
  { es: 'comprar', en: 'to buy', cefr: 'A1', domain: 'verbs', frequencyRank: 75, example: 'Voy a comprar leche.', exampleEn: 'I\'m going to buy milk.' },
  { es: 'dar', en: 'to give', cefr: 'A1', domain: 'verbs', frequencyRank: 18, example: 'Te doy mi número.', exampleEn: 'I\'ll give you my number.' },
  { es: 'ver', en: 'to see / to watch', cefr: 'A1', domain: 'verbs', frequencyRank: 20, example: 'Vemos una película.', exampleEn: 'We\'re watching a movie.' },

  // ── ADJECTIVES (A1) ─────────────────────────────────────────────────────
  { es: 'grande', en: 'big / great', cefr: 'A1', domain: 'adjectives', frequencyRank: 50, example: 'Es una ciudad grande.', exampleEn: 'It\'s a big city.' },
  { es: 'pequeño', en: 'small', cefr: 'A1', domain: 'adjectives', frequencyRank: 55, example: 'Vivo en un apartamento pequeño.', exampleEn: 'I live in a small apartment.' },
  { es: 'bueno', en: 'good', cefr: 'A1', domain: 'adjectives', frequencyRank: 25, example: 'Es una buena idea.', exampleEn: 'It\'s a good idea.' },
  { es: 'malo', en: 'bad', cefr: 'A1', domain: 'adjectives', frequencyRank: 60, example: 'Tengo un día malo.', exampleEn: 'I\'m having a bad day.' },
  { es: 'nuevo', en: 'new', cefr: 'A1', domain: 'adjectives', frequencyRank: 35, example: 'Tengo un trabajo nuevo.', exampleEn: 'I have a new job.' },
  { es: 'viejo', en: 'old', cefr: 'A1', domain: 'adjectives', frequencyRank: 65, example: 'Es un edificio muy viejo.', exampleEn: 'It\'s a very old building.' },
  { es: 'bonito', en: 'pretty / nice', cefr: 'A1', domain: 'adjectives', frequencyRank: 180, example: '¡Qué bonito día!', exampleEn: 'What a nice day!' },
  { es: 'fácil', en: 'easy', cefr: 'A1', domain: 'adjectives', frequencyRank: 200, example: 'El español no es fácil.', exampleEn: 'Spanish is not easy.' },
  { es: 'difícil', en: 'difficult', cefr: 'A1', domain: 'adjectives', frequencyRank: 210, example: 'Este ejercicio es muy difícil.', exampleEn: 'This exercise is very difficult.' },
  { es: 'cansado', en: 'tired', cefr: 'A1', domain: 'adjectives', frequencyRank: 400, example: 'Estoy muy cansado.', exampleEn: 'I\'m very tired.' },
  { es: 'contento', en: 'happy / pleased', cefr: 'A1', domain: 'adjectives', frequencyRank: 350, example: 'Estoy muy contento.', exampleEn: 'I\'m very happy.' },
  { es: 'tranquilo', en: 'calm / quiet', cefr: 'A1', domain: 'adjectives', frequencyRank: 320, example: 'Es una ciudad tranquila.', exampleEn: 'It\'s a quiet city.' },

  // ── A2 WORDS ────────────────────────────────────────────────────────────

  // Months
  { es: 'enero', en: 'January', cefr: 'A2', domain: 'time', frequencyRank: 700, example: 'En enero hace mucho frío.', exampleEn: 'In January it is very cold.' },
  { es: 'febrero', en: 'February', cefr: 'A2', domain: 'time', frequencyRank: 710, example: 'Mi cumpleaños es en febrero.', exampleEn: 'My birthday is in February.' },
  { es: 'marzo', en: 'March', cefr: 'A2', domain: 'time', frequencyRank: 720, example: 'La primavera empieza en marzo.', exampleEn: 'Spring starts in March.' },
  { es: 'abril', en: 'April', cefr: 'A2', domain: 'time', frequencyRank: 730, example: 'En abril, aguas mil.', exampleEn: 'April showers bring May flowers.' },
  { es: 'mayo', en: 'May', cefr: 'A2', domain: 'time', frequencyRank: 740, example: 'Las flores brotan en mayo.', exampleEn: 'Flowers bloom in May.' },
  { es: 'junio', en: 'June', cefr: 'A2', domain: 'time', frequencyRank: 750, example: 'Las vacaciones empiezan en junio.', exampleEn: 'The holidays start in June.' },
  { es: 'julio', en: 'July', cefr: 'A2', domain: 'time', frequencyRank: 760, example: 'Julio es el mes más caluroso.', exampleEn: 'July is the hottest month.' },
  { es: 'agosto', en: 'August', cefr: 'A2', domain: 'time', frequencyRank: 770, example: 'En agosto voy a la playa.', exampleEn: 'In August I go to the beach.' },
  { es: 'septiembre', en: 'September', cefr: 'A2', domain: 'time', frequencyRank: 780, example: 'El colegio empieza en septiembre.', exampleEn: 'School starts in September.' },
  { es: 'octubre', en: 'October', cefr: 'A2', domain: 'time', frequencyRank: 790, example: 'En octubre caen las hojas.', exampleEn: 'In October the leaves fall.' },
  { es: 'noviembre', en: 'November', cefr: 'A2', domain: 'time', frequencyRank: 800, example: 'Noviembre es un mes gris.', exampleEn: 'November is a grey month.' },
  { es: 'diciembre', en: 'December', cefr: 'A2', domain: 'time', frequencyRank: 810, example: 'La Navidad es en diciembre.', exampleEn: 'Christmas is in December.' },

  // Seasons
  { es: 'primavera', en: 'spring', cefr: 'A2', domain: 'time', frequencyRank: 820, example: 'Me encanta la primavera.', exampleEn: 'I love spring.' },
  { es: 'verano', en: 'summer', cefr: 'A2', domain: 'time', frequencyRank: 825, example: 'En verano hace calor.', exampleEn: 'In summer it is hot.' },
  { es: 'otoño', en: 'autumn / fall', cefr: 'A2', domain: 'time', frequencyRank: 830, example: 'En otoño las hojas cambian de color.', exampleEn: 'In autumn the leaves change colour.' },
  { es: 'invierno', en: 'winter', cefr: 'A2', domain: 'time', frequencyRank: 835, example: 'El invierno es muy frío aquí.', exampleEn: 'Winter is very cold here.' },

  // Weather
  { es: 'lluvia', en: 'rain', cefr: 'A2', domain: 'weather', frequencyRank: 380, example: 'Hay mucha lluvia en noviembre.', exampleEn: 'There is a lot of rain in November.' },
  { es: 'sol', en: 'sun / sunshine', cefr: 'A2', domain: 'weather', frequencyRank: 290, example: 'Hoy hay mucho sol.', exampleEn: 'Today there is a lot of sunshine.' },
  { es: 'viento', en: 'wind', cefr: 'A2', domain: 'weather', frequencyRank: 400, example: 'Hace mucho viento hoy.', exampleEn: 'It is very windy today.' },
  { es: 'calor', en: 'heat / warmth', cefr: 'A2', domain: 'weather', frequencyRank: 320, example: '¡Qué calor hace hoy!', exampleEn: 'It\'s so hot today!' },
  { es: 'frío', en: 'cold', cefr: 'A2', domain: 'weather', frequencyRank: 330, example: 'Tengo mucho frío.', exampleEn: 'I\'m very cold.' },
  { es: 'nieve', en: 'snow', cefr: 'A2', domain: 'weather', frequencyRank: 450, example: 'Hay nieve en las montañas.', exampleEn: 'There is snow on the mountains.' },
  { es: 'nublado', en: 'cloudy', cefr: 'A2', domain: 'weather', frequencyRank: 480, example: 'Hoy está nublado.', exampleEn: 'Today it\'s cloudy.' },

  // Body parts
  { es: 'cabeza', en: 'head', cefr: 'A2', domain: 'body', frequencyRank: 140, example: 'Me duele la cabeza.', exampleEn: 'I have a headache.' },
  { es: 'brazo', en: 'arm', cefr: 'A2', domain: 'body', frequencyRank: 230, example: 'Me rompí el brazo.', exampleEn: 'I broke my arm.' },
  { es: 'mano', en: 'hand', cefr: 'A2', domain: 'body', frequencyRank: 110, example: 'Dame la mano.', exampleEn: 'Give me your hand.' },
  { es: 'pierna', en: 'leg', cefr: 'A2', domain: 'body', frequencyRank: 260, example: 'Me duele la pierna.', exampleEn: 'My leg hurts.' },
  { es: 'pie', en: 'foot', cefr: 'A2', domain: 'body', frequencyRank: 280, example: 'Me duele el pie derecho.', exampleEn: 'My right foot hurts.' },
  { es: 'ojo', en: 'eye', cefr: 'A2', domain: 'body', frequencyRank: 160, example: 'Tiene los ojos azules.', exampleEn: 'She has blue eyes.' },
  { es: 'oreja', en: 'ear', cefr: 'A2', domain: 'body', frequencyRank: 350, example: 'Me duele la oreja.', exampleEn: 'My ear hurts.' },
  { es: 'boca', en: 'mouth', cefr: 'A2', domain: 'body', frequencyRank: 220, example: 'Cierra la boca mientras comes.', exampleEn: 'Close your mouth while eating.' },
  { es: 'espalda', en: 'back', cefr: 'A2', domain: 'body', frequencyRank: 240, example: 'Me duele la espalda.', exampleEn: 'My back hurts.' },

  // Key A2 verbs
  { es: 'decir', en: 'to say / to tell', cefr: 'A2', domain: 'verbs', frequencyRank: 9, example: '¿Qué dice?', exampleEn: 'What is he saying?' },
  { es: 'poner', en: 'to put / to place', cefr: 'A2', domain: 'verbs', frequencyRank: 16, example: 'Pon la mesa, por favor.', exampleEn: 'Set the table, please.' },
  { es: 'conocer', en: 'to know (person/place)', cefr: 'A2', domain: 'verbs', frequencyRank: 22, example: '¿Conoces a María?', exampleEn: 'Do you know María?' },
  { es: 'leer', en: 'to read', cefr: 'A2', domain: 'verbs', frequencyRank: 55, example: 'Leo un libro cada semana.', exampleEn: 'I read a book every week.' },
  { es: 'escribir', en: 'to write', cefr: 'A2', domain: 'verbs', frequencyRank: 48, example: 'Escríbeme un correo.', exampleEn: 'Write me an email.' },
  { es: 'dormir', en: 'to sleep', cefr: 'A2', domain: 'verbs', frequencyRank: 90, example: 'Duermo ocho horas.', exampleEn: 'I sleep eight hours.' },
  { es: 'empezar', en: 'to start / to begin', cefr: 'A2', domain: 'verbs', frequencyRank: 35, example: 'La clase empieza a las nueve.', exampleEn: 'The class starts at nine.' },
  { es: 'seguir', en: 'to continue / to follow', cefr: 'A2', domain: 'verbs', frequencyRank: 30, example: 'Sigue todo recto.', exampleEn: 'Keep going straight ahead.' },
  { es: 'volver', en: 'to return / to come back', cefr: 'A2', domain: 'verbs', frequencyRank: 33, example: '¿A qué hora vuelves?', exampleEn: 'What time are you coming back?' },
  { es: 'pasar', en: 'to pass / to happen / to spend (time)', cefr: 'A2', domain: 'verbs', frequencyRank: 24, example: '¿Qué pasa?', exampleEn: 'What\'s happening?' },
  { es: 'quedar', en: 'to arrange to meet / to remain', cefr: 'A2', domain: 'verbs', frequencyRank: 26, example: '¿Quedamos a las seis?', exampleEn: 'Shall we meet at six?' },

  // Key A2 adjectives
  { es: 'diferente', en: 'different', cefr: 'A2', domain: 'adjectives', frequencyRank: 140, example: 'Son muy diferentes.', exampleEn: 'They are very different.' },
  { es: 'importante', en: 'important', cefr: 'A2', domain: 'adjectives', frequencyRank: 60, example: 'Es muy importante estudiar.', exampleEn: 'It\'s very important to study.' },
  { es: 'joven', en: 'young', cefr: 'A2', domain: 'adjectives', frequencyRank: 130, example: 'Es una chica joven.', exampleEn: 'She\'s a young girl.' },
  { es: 'mayor', en: 'older / elderly / bigger', cefr: 'A2', domain: 'adjectives', frequencyRank: 80, example: 'Mi hermano es mayor que yo.', exampleEn: 'My brother is older than me.' },
  { es: 'ocupado', en: 'busy', cefr: 'A2', domain: 'adjectives', frequencyRank: 300, example: 'Estoy muy ocupado esta semana.', exampleEn: 'I\'m very busy this week.' },
  { es: 'simpático', en: 'nice / likeable', cefr: 'A2', domain: 'adjectives', frequencyRank: 350, example: 'El profesor es muy simpático.', exampleEn: 'The teacher is very nice.' },
  { es: 'interesante', en: 'interesting', cefr: 'A2', domain: 'adjectives', frequencyRank: 150, example: 'Es un libro muy interesante.', exampleEn: 'It\'s a very interesting book.' },

  // Travel / daily life nouns (A2)
  { es: 'viaje', en: 'trip / journey', cefr: 'A2', domain: 'nouns', frequencyRank: 160, example: 'Hago un viaje a México.', exampleEn: 'I\'m taking a trip to Mexico.' },
  { es: 'billete', en: 'ticket (Spain) / banknote', cefr: 'A2', domain: 'nouns', frequencyRank: 300, example: 'Compré el billete de tren.', exampleEn: 'I bought the train ticket.' },
  { es: 'maleta', en: 'suitcase', cefr: 'A2', domain: 'nouns', frequencyRank: 400, example: 'Haz la maleta.', exampleEn: 'Pack your suitcase.' },
  { es: 'habitación', en: 'room / bedroom', cefr: 'A2', domain: 'nouns', frequencyRank: 200, example: '¿Tiene una habitación libre?', exampleEn: 'Do you have a room available?' },
  { es: 'dirección', en: 'address / direction', cefr: 'A2', domain: 'nouns', frequencyRank: 170, example: '¿Me das tu dirección?', exampleEn: 'Can you give me your address?' },
  { es: 'semana', en: 'week', cefr: 'A2', domain: 'time', frequencyRank: 105, example: 'La próxima semana tengo examen.', exampleEn: 'Next week I have an exam.' },
  { es: 'mes', en: 'month', cefr: 'A2', domain: 'time', frequencyRank: 88, example: 'Este mes tengo mucho trabajo.', exampleEn: 'This month I have a lot of work.' },
  { es: 'año', en: 'year', cefr: 'A2', domain: 'time', frequencyRank: 30, example: 'El año pasado fui a España.', exampleEn: 'Last year I went to Spain.' },
  { es: 'parte', en: 'part', cefr: 'A2', domain: 'nouns', frequencyRank: 32, example: 'Esta es la mejor parte.', exampleEn: 'This is the best part.' },
  { es: 'cosa', en: 'thing', cefr: 'A2', domain: 'nouns', frequencyRank: 27, example: 'Tengo muchas cosas que hacer.', exampleEn: 'I have many things to do.' },
  { es: 'lugar', en: 'place', cefr: 'A2', domain: 'nouns', frequencyRank: 55, example: 'Es un lugar muy bonito.', exampleEn: 'It\'s a very beautiful place.' },
  { es: 'forma', en: 'way / form / shape', cefr: 'A2', domain: 'nouns', frequencyRank: 45, example: 'Hay muchas formas de aprender.', exampleEn: 'There are many ways to learn.' },

  { es: 'aunque', en: 'although / even though', cefr: 'A2', domain: 'connectors', frequencyRank: 95, example: 'Aunque llueve, salgo.', exampleEn: 'Although it rains, I\'m going out.' },
  { es: 'porque', en: 'because', cefr: 'A2', domain: 'connectors', frequencyRank: 75, example: 'No voy porque estoy enfermo.', exampleEn: 'I\'m not going because I\'m sick.' },
  { es: 'también', en: 'also / too', cefr: 'A2', domain: 'connectors', frequencyRank: 85, example: 'Yo también quiero ir.', exampleEn: 'I also want to go.' },
  { es: 'tampoco', en: 'neither / not either', cefr: 'A2', domain: 'connectors', frequencyRank: 220, example: '—No me gusta. —A mí tampoco.', exampleEn: 'I don\'t like it. — Me neither.' },
  { es: 'todavía', en: 'still / yet', cefr: 'A2', domain: 'connectors', frequencyRank: 200, example: 'Todavía no he comido.', exampleEn: 'I haven\'t eaten yet.' },
  { es: 'ya', en: 'already / now', cefr: 'A2', domain: 'connectors', frequencyRank: 25, example: 'Ya he terminado.', exampleEn: 'I\'ve already finished.' },
  { es: 'bastante', en: 'quite / enough', cefr: 'A2', domain: 'adverbs', frequencyRank: 180, example: 'Es bastante difícil.', exampleEn: 'It\'s quite difficult.' },
  { es: 'demasiado', en: 'too much / too many', cefr: 'A2', domain: 'adverbs', frequencyRank: 200, example: 'Comes demasiado rápido.', exampleEn: 'You eat too fast.' },
  { es: 'un poco', en: 'a little', cefr: 'A2', domain: 'adverbs', frequencyRank: 110, example: 'Habla un poco de inglés.', exampleEn: 'She speaks a little English.' },
  { es: 'quizás', en: 'maybe / perhaps', cefr: 'A2', domain: 'adverbs', frequencyRank: 250, example: 'Quizás llueva mañana.', exampleEn: 'Maybe it will rain tomorrow.' },
  { es: 'sin embargo', en: 'however / nevertheless', cefr: 'A2', domain: 'connectors', frequencyRank: 105, example: 'Es caro; sin embargo, lo compro.', exampleEn: 'It\'s expensive; however, I\'m buying it.' },
  { es: 'además', en: 'besides / furthermore', cefr: 'A2', domain: 'connectors', frequencyRank: 120, example: 'Habla inglés y, además, francés.', exampleEn: 'She speaks English and, besides, French.' },
  { es: 'enfermo', en: 'sick / ill', cefr: 'A2', domain: 'adjectives', frequencyRank: 380, example: 'Está enfermo en cama.', exampleEn: 'He\'s sick in bed.' },
  { es: 'libre', en: 'free / available', cefr: 'A2', domain: 'adjectives', frequencyRank: 200, example: '¿Estás libre esta tarde?', exampleEn: 'Are you free this afternoon?' },
  { es: 'seguro', en: 'sure / safe', cefr: 'A2', domain: 'adjectives', frequencyRank: 170, example: '¿Estás seguro de eso?', exampleEn: 'Are you sure about that?' },
  { es: 'llegar', en: 'to arrive', cefr: 'A2', domain: 'verbs', frequencyRank: 40, example: 'Llegamos a las tres.', exampleEn: 'We arrive at three.' },
  { es: 'salir', en: 'to leave / go out', cefr: 'A2', domain: 'verbs', frequencyRank: 42, example: 'Salgo a las ocho.', exampleEn: 'I leave at eight.' },
  { es: 'pagar', en: 'to pay', cefr: 'A2', domain: 'verbs', frequencyRank: 80, example: '¿Quién paga la cuenta?', exampleEn: 'Who pays the bill?' },
  { es: 'necesitar', en: 'to need', cefr: 'A2', domain: 'verbs', frequencyRank: 85, example: 'Necesito tu ayuda.', exampleEn: 'I need your help.' },
  { es: 'esperar', en: 'to wait / to hope', cefr: 'A2', domain: 'verbs', frequencyRank: 60, example: 'Espera un momento.', exampleEn: 'Wait a moment.' },
  { es: 'pensar', en: 'to think', cefr: 'A2', domain: 'verbs', frequencyRank: 32, example: '¿Qué piensas de esto?', exampleEn: 'What do you think about this?' },
  { es: 'creer', en: 'to believe / to think', cefr: 'A2', domain: 'verbs', frequencyRank: 28, example: 'Creo que sí.', exampleEn: 'I think so.' },
  { es: 'encontrar', en: 'to find / to meet', cefr: 'A2', domain: 'verbs', frequencyRank: 38, example: 'No encuentro mis llaves.', exampleEn: 'I can\'t find my keys.' },
  { es: 'entender', en: 'to understand', cefr: 'A2', domain: 'verbs', frequencyRank: 55, example: '¿Entiendes lo que digo?', exampleEn: 'Do you understand what I\'m saying?' },
  { es: 'preguntar', en: 'to ask', cefr: 'A2', domain: 'verbs', frequencyRank: 65, example: 'Voy a preguntar al médico.', exampleEn: 'I\'m going to ask the doctor.' },
  { es: 'ayudar', en: 'to help', cefr: 'A2', domain: 'verbs', frequencyRank: 70, example: '¿Me puedes ayudar?', exampleEn: 'Can you help me?' },
  { es: 'olvidar', en: 'to forget', cefr: 'A2', domain: 'verbs', frequencyRank: 120, example: 'Olvidé el paraguas.', exampleEn: 'I forgot the umbrella.' },
  { es: 'recordar', en: 'to remember', cefr: 'A2', domain: 'verbs', frequencyRank: 115, example: '¿Recuerdas mi nombre?', exampleEn: 'Do you remember my name?' },
  { es: 'dinero', en: 'money', cefr: 'A2', domain: 'nouns', frequencyRank: 130, example: 'No tengo dinero.', exampleEn: 'I don\'t have money.' },
  { es: 'tiempo', en: 'time / weather', cefr: 'A2', domain: 'nouns', frequencyRank: 20, example: '¿Qué tiempo hace?', exampleEn: 'What\'s the weather like?' },
  { es: 'gente', en: 'people', cefr: 'A2', domain: 'nouns', frequencyRank: 75, example: 'Hay mucha gente aquí.', exampleEn: 'There are many people here.' },
  { es: 'vida', en: 'life', cefr: 'A2', domain: 'nouns', frequencyRank: 22, example: 'La vida es bella.', exampleEn: 'Life is beautiful.' },
  { es: 'vez', en: 'time (occasion)', cefr: 'A2', domain: 'nouns', frequencyRank: 18, example: 'Es la primera vez.', exampleEn: 'It\'s the first time.' },
  { es: 'mundo', en: 'world', cefr: 'A2', domain: 'nouns', frequencyRank: 40, example: 'El mundo es pequeño.', exampleEn: 'It\'s a small world.' },
  { es: 'problema', en: 'problem', cefr: 'A2', domain: 'nouns', frequencyRank: 55, example: '¿Cuál es el problema?', exampleEn: 'What\'s the problem?' },
  { es: 'idea', en: 'idea', cefr: 'A2', domain: 'nouns', frequencyRank: 60, example: 'Es una buena idea.', exampleEn: 'It\'s a good idea.' },

  // ── B1 WORDS ────────────────────────────────────────────────────────────
  { es: 'a pesar de', en: 'in spite of / despite', cefr: 'B1', domain: 'connectors', frequencyRank: 180, example: 'Salió a pesar de la lluvia.', exampleEn: 'He went out despite the rain.' },
  { es: 'de hecho', en: 'in fact / actually', cefr: 'B1', domain: 'connectors', frequencyRank: 160, example: 'De hecho, no estaba de acuerdo.', exampleEn: 'In fact, I didn\'t agree.' },
  { es: 'en cambio', en: 'on the other hand', cefr: 'B1', domain: 'connectors', frequencyRank: 170, example: 'Él es serio; en cambio, ella es divertida.', exampleEn: 'He is serious; she, on the other hand, is fun.' },
  { es: 'por lo tanto', en: 'therefore', cefr: 'B1', domain: 'connectors', frequencyRank: 190, example: 'Llueve; por lo tanto, me quedo en casa.', exampleEn: 'It\'s raining; therefore, I\'m staying home.' },
  { es: 'darse cuenta de', en: 'to realize', cefr: 'B1', domain: 'verbs', frequencyRank: 180, example: 'Me di cuenta de mi error.', exampleEn: 'I realized my mistake.' },
  { es: 'tardar', en: 'to take time / to be late', cefr: 'B1', domain: 'verbs', frequencyRank: 200, example: '¿Cuánto tardas?', exampleEn: 'How long will you take?' },
  { es: 'lograr', en: 'to achieve / to manage to', cefr: 'B1', domain: 'verbs', frequencyRank: 150, example: 'Logré terminar a tiempo.', exampleEn: 'I managed to finish on time.' },
  { es: 'intentar', en: 'to try', cefr: 'B1', domain: 'verbs', frequencyRank: 130, example: 'Intenta no llegar tarde.', exampleEn: 'Try not to arrive late.' },
  { es: 'conseguir', en: 'to get / to manage to', cefr: 'B1', domain: 'verbs', frequencyRank: 120, example: '¿Conseguiste las entradas?', exampleEn: 'Did you get the tickets?' },
  { es: 'depender de', en: 'to depend on', cefr: 'B1', domain: 'verbs', frequencyRank: 210, example: 'Depende de ti.', exampleEn: 'It depends on you.' },
  { es: 'tratar de', en: 'to try to', cefr: 'B1', domain: 'verbs', frequencyRank: 140, example: 'Trato de mejorar mi español.', exampleEn: 'I try to improve my Spanish.' },
  { es: 'exigir', en: 'to demand / to require', cefr: 'B1', domain: 'verbs', frequencyRank: 250, example: 'El jefe exige puntualidad.', exampleEn: 'The boss demands punctuality.' },
  { es: 'compartir', en: 'to share', cefr: 'B1', domain: 'verbs', frequencyRank: 220, example: 'Compartimos el piso.', exampleEn: 'We share the flat.' },
  { es: 'desarrollar', en: 'to develop', cefr: 'B1', domain: 'verbs', frequencyRank: 100, example: 'Desarrollamos una aplicación nueva.', exampleEn: 'We\'re developing a new app.' },
  { es: 'apoyar', en: 'to support', cefr: 'B1', domain: 'verbs', frequencyRank: 160, example: 'Mis padres me apoyan.', exampleEn: 'My parents support me.' },
  { es: 'reconocer', en: 'to recognize / to acknowledge', cefr: 'B1', domain: 'verbs', frequencyRank: 140, example: 'Reconozco mi error.', exampleEn: 'I acknowledge my mistake.' },
  { es: 'ambiente', en: 'atmosphere / environment', cefr: 'B1', domain: 'nouns', frequencyRank: 200, example: 'Hay muy buen ambiente.', exampleEn: 'There\'s a great atmosphere.' },
  { es: 'nivel', en: 'level', cefr: 'B1', domain: 'nouns', frequencyRank: 130, example: 'Mi nivel de español mejora.', exampleEn: 'My Spanish level is improving.' },
  { es: 'plazo', en: 'deadline / period', cefr: 'B1', domain: 'nouns', frequencyRank: 210, example: 'El plazo termina el viernes.', exampleEn: 'The deadline is on Friday.' },
  { es: 'ventaja', en: 'advantage', cefr: 'B1', domain: 'nouns', frequencyRank: 220, example: 'Tiene muchas ventajas.', exampleEn: 'It has many advantages.' },
  { es: 'desventaja', en: 'disadvantage', cefr: 'B1', domain: 'nouns', frequencyRank: 230, example: 'La principal desventaja es el coste.', exampleEn: 'The main disadvantage is the cost.' },
  { es: 'conjunto', en: 'set / group / overall', cefr: 'B1', domain: 'nouns', frequencyRank: 130, example: 'En conjunto, salió bien.', exampleEn: 'Overall, it went well.' },

  // B1 — additional connectors
  { es: 'así que', en: 'so / therefore', cefr: 'B1', domain: 'connectors', frequencyRank: 105, example: 'No hay autobús, así que iremos a pie.', exampleEn: 'There\'s no bus, so we\'ll walk.' },
  { es: 'siempre que', en: 'whenever / as long as', cefr: 'B1', domain: 'connectors', frequencyRank: 195, example: 'Puedes venir siempre que quieras.', exampleEn: 'You can come whenever you want.' },
  { es: 'a menos que', en: 'unless', cefr: 'B1', domain: 'connectors', frequencyRank: 210, example: 'Iré, a menos que llueva.', exampleEn: 'I\'ll go, unless it rains.' },
  { es: 'dado que', en: 'given that / since', cefr: 'B1', domain: 'connectors', frequencyRank: 220, example: 'Dado que es tarde, me voy.', exampleEn: 'Given that it\'s late, I\'m leaving.' },
  { es: 'es decir', en: 'that is / in other words', cefr: 'B1', domain: 'connectors', frequencyRank: 98, example: 'Viene mañana, es decir, el martes.', exampleEn: 'She\'s coming tomorrow, that is, on Tuesday.' },
  { es: 'por otro lado', en: 'on the other hand', cefr: 'B1', domain: 'connectors', frequencyRank: 175, example: 'Por otro lado, tiene sus ventajas.', exampleEn: 'On the other hand, it has its advantages.' },

  // B1 — verbs
  { es: 'mejorar', en: 'to improve', cefr: 'B1', domain: 'verbs', frequencyRank: 125, example: 'Quiero mejorar mi pronunciación.', exampleEn: 'I want to improve my pronunciation.' },
  { es: 'resolver', en: 'to solve / to resolve', cefr: 'B1', domain: 'verbs', frequencyRank: 145, example: 'Hay que resolver este problema.', exampleEn: 'We need to solve this problem.' },
  { es: 'evitar', en: 'to avoid', cefr: 'B1', domain: 'verbs', frequencyRank: 135, example: 'Trata de evitar los errores comunes.', exampleEn: 'Try to avoid common mistakes.' },
  { es: 'superar', en: 'to overcome / to exceed', cefr: 'B1', domain: 'verbs', frequencyRank: 155, example: 'Superó el examen con buena nota.', exampleEn: 'She passed the exam with a good grade.' },
  { es: 'afectar', en: 'to affect', cefr: 'B1', domain: 'verbs', frequencyRank: 165, example: 'El estrés afecta la salud.', exampleEn: 'Stress affects your health.' },
  { es: 'incluir', en: 'to include', cefr: 'B1', domain: 'verbs', frequencyRank: 115, example: 'El precio incluye el desayuno.', exampleEn: 'The price includes breakfast.' },
  { es: 'demostrar', en: 'to show / to demonstrate', cefr: 'B1', domain: 'verbs', frequencyRank: 145, example: 'Demostró su talento en el escenario.', exampleEn: 'She showed her talent on stage.' },
  { es: 'comunicarse', en: 'to communicate', cefr: 'B1', domain: 'verbs', frequencyRank: 195, example: 'Es importante comunicarse bien.', exampleEn: 'It\'s important to communicate well.' },
  { es: 'influir', en: 'to influence', cefr: 'B1', domain: 'verbs', frequencyRank: 175, example: 'La familia influye mucho en nosotros.', exampleEn: 'Family influences us a lot.' },

  // B1 — emotional / personal vocabulary
  { es: 'miedo', en: 'fear', cefr: 'B1', domain: 'nouns', frequencyRank: 185, example: 'Tengo miedo a las alturas.', exampleEn: 'I\'m afraid of heights.' },
  { es: 'alegría', en: 'joy / happiness', cefr: 'B1', domain: 'nouns', frequencyRank: 240, example: '¡Qué alegría verte!', exampleEn: 'How lovely to see you!' },
  { es: 'tristeza', en: 'sadness', cefr: 'B1', domain: 'nouns', frequencyRank: 280, example: 'Sentí mucha tristeza.', exampleEn: 'I felt great sadness.' },
  { es: 'esperanza', en: 'hope', cefr: 'B1', domain: 'nouns', frequencyRank: 200, example: 'No pierdas la esperanza.', exampleEn: 'Don\'t lose hope.' },
  { es: 'orgullo', en: 'pride', cefr: 'B1', domain: 'nouns', frequencyRank: 260, example: 'Siento orgullo por su éxito.', exampleEn: 'I feel pride in her success.' },

  // B1 — work & professional
  { es: 'reunión', en: 'meeting', cefr: 'B1', domain: 'nouns', frequencyRank: 180, example: 'Tengo una reunión a las diez.', exampleEn: 'I have a meeting at ten.' },
  { es: 'empresa', en: 'company / firm', cefr: 'B1', domain: 'nouns', frequencyRank: 110, example: 'Trabajo en una empresa internacional.', exampleEn: 'I work at an international company.' },
  { es: 'sueldo', en: 'salary / wage', cefr: 'B1', domain: 'nouns', frequencyRank: 290, example: 'Negoció un sueldo más alto.', exampleEn: 'She negotiated a higher salary.' },
  { es: 'contrato', en: 'contract', cefr: 'B1', domain: 'nouns', frequencyRank: 230, example: 'Firmó el contrato de trabajo.', exampleEn: 'He signed the work contract.' },

  // B1 — abstract nouns (high frequency)
  { es: 'esfuerzo', en: 'effort', cefr: 'B1', domain: 'nouns', frequencyRank: 195, example: 'Hay que hacer un esfuerzo.', exampleEn: 'You need to make an effort.' },
  { es: 'resultado', en: 'result / outcome', cefr: 'B1', domain: 'nouns', frequencyRank: 125, example: 'Los resultados fueron buenos.', exampleEn: 'The results were good.' },
  { es: 'proceso', en: 'process', cefr: 'B1', domain: 'nouns', frequencyRank: 118, example: 'El proceso lleva tiempo.', exampleEn: 'The process takes time.' },
  { es: 'solución', en: 'solution', cefr: 'B1', domain: 'nouns', frequencyRank: 155, example: 'Hay que encontrar una solución.', exampleEn: 'We need to find a solution.' },
  { es: 'opinión', en: 'opinion', cefr: 'B1', domain: 'nouns', frequencyRank: 170, example: 'En mi opinión, tienes razón.', exampleEn: 'In my opinion, you are right.' },
  { es: 'experiencia', en: 'experience', cefr: 'B1', domain: 'nouns', frequencyRank: 140, example: 'Fue una experiencia increíble.', exampleEn: 'It was an incredible experience.' },

  // ── B2 ──────────────────────────────────────────────────────────────────
  // Connectors & discourse markers
  { es: 'no obstante', en: 'nevertheless / however', cefr: 'B2', domain: 'connectors', frequencyRank: 280, example: 'No obstante, seguimos adelante.', exampleEn: 'Nevertheless, we pressed on.' },
  { es: 'por consiguiente', en: 'consequently / therefore', cefr: 'B2', domain: 'connectors', frequencyRank: 300, example: 'Es tarde; por consiguiente, nos vamos.', exampleEn: "It's late; consequently, we're leaving." },
  { es: 'a diferencia de', en: 'unlike / in contrast to', cefr: 'B2', domain: 'connectors', frequencyRank: 260, example: 'A diferencia de su hermano, estudia mucho.', exampleEn: 'Unlike his brother, he studies a lot.' },
  { es: 'a lo largo de', en: 'throughout / along', cefr: 'B2', domain: 'connectors', frequencyRank: 220, example: 'A lo largo de su carrera ganó varios premios.', exampleEn: 'Throughout his career he won several prizes.' },
  { es: 'en cuanto a', en: 'as for / regarding', cefr: 'B2', domain: 'connectors', frequencyRank: 250, example: 'En cuanto al precio, es razonable.', exampleEn: 'As for the price, it is reasonable.' },
  // Verbs (formal/academic)
  { es: 'destacar', en: 'to stand out / to emphasise', cefr: 'B2', domain: 'verbs', frequencyRank: 110, example: 'Quiero destacar la importancia de esto.', exampleEn: 'I want to emphasise the importance of this.' },
  { es: 'plantear', en: 'to raise / to put forward', cefr: 'B2', domain: 'verbs', frequencyRank: 120, example: 'Planteó una pregunta interesante.', exampleEn: 'He raised an interesting question.' },
  { es: 'suponer', en: 'to suppose / to entail', cefr: 'B2', domain: 'verbs', frequencyRank: 70, example: 'Eso supone un gran esfuerzo.', exampleEn: 'That entails a great effort.' },
  { es: 'abordar', en: 'to tackle / to address', cefr: 'B2', domain: 'verbs', frequencyRank: 160, example: 'Hay que abordar el problema.', exampleEn: 'We need to tackle the problem.' },
  { es: 'prevenir', en: 'to prevent / to warn', cefr: 'B2', domain: 'verbs', frequencyRank: 200, example: 'Más vale prevenir que curar.', exampleEn: 'Prevention is better than cure.' },
  { es: 'cuestionar', en: 'to question / to challenge', cefr: 'B2', domain: 'verbs', frequencyRank: 220, example: 'Nadie cuestiona su autoridad.', exampleEn: "Nobody questions his authority." },
  { es: 'surgir', en: 'to arise / to emerge', cefr: 'B2', domain: 'verbs', frequencyRank: 130, example: 'Surgieron varios problemas.', exampleEn: 'Several problems arose.' },
  { es: 'carecer', en: 'to lack', cefr: 'B2', domain: 'verbs', frequencyRank: 190, example: 'El proyecto carece de financiación.', exampleEn: 'The project lacks funding.' },
  // Nouns (abstract / academic)
  { es: 'ámbito', en: 'sphere / field / scope', cefr: 'B2', domain: 'nouns', frequencyRank: 120, example: 'En el ámbito profesional es muy respetado.', exampleEn: 'In the professional field he is highly respected.' },
  { es: 'matiz', en: 'nuance / shade', cefr: 'B2', domain: 'nouns', frequencyRank: 280, example: 'Hay que entender los matices del idioma.', exampleEn: 'You need to understand the nuances of the language.' },
  { es: 'índole', en: 'nature / kind', cefr: 'B2', domain: 'nouns', frequencyRank: 290, example: 'Es un problema de índole económica.', exampleEn: 'It is an economic problem by nature.' },
  { es: 'contraste', en: 'contrast', cefr: 'B2', domain: 'nouns', frequencyRank: 230, example: 'Hay un fuerte contraste entre los dos estilos.', exampleEn: 'There is a strong contrast between the two styles.' },
  { es: 'inquietud', en: 'concern / unease / curiosity', cefr: 'B2', domain: 'nouns', frequencyRank: 310, example: 'Tengo inquietudes sobre el futuro.', exampleEn: 'I have concerns about the future.' },
  { es: 'logro', en: 'achievement / accomplishment', cefr: 'B2', domain: 'nouns', frequencyRank: 200, example: 'Es su mayor logro profesional.', exampleEn: "It's their greatest professional achievement." },
  { es: 'vínculo', en: 'link / bond / tie', cefr: 'B2', domain: 'nouns', frequencyRank: 210, example: 'Mantiene vínculos con su país de origen.', exampleEn: 'She keeps ties with her home country.' },
  { es: 'entorno', en: 'environment / surroundings', cefr: 'B2', domain: 'nouns', frequencyRank: 140, example: 'Necesita un entorno tranquilo para trabajar.', exampleEn: 'He needs a calm environment to work.' },
  { es: 'repercusión', en: 'impact / repercussion', cefr: 'B2', domain: 'nouns', frequencyRank: 260, example: 'La decisión tuvo grandes repercusiones.', exampleEn: 'The decision had major repercussions.' },
  // Adjectives
  { es: 'imprescindible', en: 'indispensable / essential', cefr: 'B2', domain: 'adjectives', frequencyRank: 220, example: 'El agua es imprescindible para la vida.', exampleEn: 'Water is essential for life.' },
  { es: 'escaso', en: 'scarce / limited', cefr: 'B2', domain: 'adjectives', frequencyRank: 230, example: 'Los recursos son escasos.', exampleEn: 'Resources are scarce.' },
  { es: 'vigente', en: 'current / in force / valid', cefr: 'B2', domain: 'adjectives', frequencyRank: 250, example: 'La ley vigente no lo permite.', exampleEn: 'The current law does not allow it.' },
  { es: 'exhaustivo', en: 'thorough / exhaustive', cefr: 'B2', domain: 'adjectives', frequencyRank: 310, example: 'Hicieron un análisis exhaustivo.', exampleEn: 'They carried out a thorough analysis.' },
  { es: 'eficaz', en: 'effective / efficient', cefr: 'B2', domain: 'adjectives', frequencyRank: 190, example: 'Es el método más eficaz.', exampleEn: 'It is the most effective method.' },
  // Emotions
  { es: 'angustia', en: 'anguish / anxiety / distress', cefr: 'B2', domain: 'nouns', frequencyRank: 300, example: 'Le invadió una profunda angustia.', exampleEn: 'A deep anguish came over him.' },
  { es: 'añoranza', en: 'longing / nostalgia', cefr: 'B2', domain: 'nouns', frequencyRank: 400, example: 'Siente añoranza de su tierra.', exampleEn: 'She feels nostalgia for her homeland.' },
  { es: 'euforia', en: 'euphoria / elation', cefr: 'B2', domain: 'nouns', frequencyRank: 350, example: 'El triunfo provocó una gran euforia.', exampleEn: 'The victory caused great elation.' },

  // ── C1 ─────────────────────────────────────────────────────────────────
  // Discourse connectors
  { es: 'asimismo', en: 'likewise / also / moreover', cefr: 'C1', domain: 'connectors', frequencyRank: 260, example: 'Asimismo, cabe destacar su contribución.', exampleEn: "Likewise, his contribution deserves mention." },
  { es: 'en definitiva', en: 'in short / ultimately', cefr: 'C1', domain: 'connectors', frequencyRank: 290, example: 'En definitiva, el proyecto fue un éxito.', exampleEn: 'In short, the project was a success.' },
  { es: 'a raíz de', en: 'as a result of / following', cefr: 'C1', domain: 'connectors', frequencyRank: 320, example: 'A raíz de los cambios, surgieron nuevas oportunidades.', exampleEn: 'As a result of the changes, new opportunities arose.' },
  // Abstract nouns
  { es: 'arraigo', en: 'rootedness / deep-rooted attachment', cefr: 'C1', domain: 'nouns', frequencyRank: 420, example: 'Tiene un gran arraigo en su comunidad.', exampleEn: 'He has deep roots in his community.' },
  { es: 'desenlace', en: 'outcome / denouement', cefr: 'C1', domain: 'nouns', frequencyRank: 390, example: 'El desenlace de la historia fue inesperado.', exampleEn: 'The outcome of the story was unexpected.' },
  { es: 'conjetura', en: 'conjecture / assumption', cefr: 'C1', domain: 'nouns', frequencyRank: 430, example: 'No son más que conjeturas.', exampleEn: "They're nothing more than conjectures." },
  { es: 'indicio', en: 'sign / clue / indication', cefr: 'C1', domain: 'nouns', frequencyRank: 360, example: 'No hay ningún indicio de problemas.', exampleEn: 'There is no indication of problems.' },
  { es: 'pauta', en: 'guideline / pattern / standard', cefr: 'C1', domain: 'nouns', frequencyRank: 340, example: 'Establecieron nuevas pautas de conducta.', exampleEn: 'They established new behavioural guidelines.' },
  { es: 'trayectoria', en: 'trajectory / career path', cefr: 'C1', domain: 'nouns', frequencyRank: 370, example: 'Tiene una brillante trayectoria profesional.', exampleEn: 'She has a brilliant professional career.' },
  { es: 'sesgo', en: 'bias / slant', cefr: 'C1', domain: 'nouns', frequencyRank: 380, example: 'El estudio tiene un sesgo confirmatorio.', exampleEn: 'The study has a confirmation bias.' },
  // Advanced verbs
  { es: 'dilucidar', en: 'to elucidate / to clarify', cefr: 'C1', domain: 'verbs', frequencyRank: 480, example: 'Hay que dilucidar los hechos.', exampleEn: 'We need to clarify the facts.' },
  { es: 'paliar', en: 'to alleviate / to mitigate', cefr: 'C1', domain: 'verbs', frequencyRank: 450, example: 'Las medidas paliaron el impacto económico.', exampleEn: 'The measures alleviated the economic impact.' },
  { es: 'ceder', en: 'to yield / to give way / to hand over', cefr: 'C1', domain: 'verbs', frequencyRank: 200, example: 'No cedió ante la presión.', exampleEn: 'He did not yield to pressure.' },
  { es: 'aludir', en: 'to allude / to refer to', cefr: 'C1', domain: 'verbs', frequencyRank: 410, example: 'Aludió al problema sin nombrarlo directamente.', exampleEn: 'She alluded to the problem without naming it directly.' },
  { es: 'suscitar', en: 'to provoke / to give rise to', cefr: 'C1', domain: 'verbs', frequencyRank: 395, example: 'La propuesta suscitó un intenso debate.', exampleEn: 'The proposal gave rise to an intense debate.' },
  { es: 'discernir', en: 'to discern / to distinguish', cefr: 'C1', domain: 'verbs', frequencyRank: 460, example: 'Es difícil discernir la verdad.', exampleEn: 'It is difficult to discern the truth.' },
  // Adjectives / register
  { es: 'fehaciente', en: 'conclusive / reliable / authentic', cefr: 'C1', domain: 'adjectives', frequencyRank: 500, example: 'Hay pruebas fehacientes de ello.', exampleEn: 'There is conclusive evidence of this.' },
  { es: 'sucinto', en: 'succinct / concise', cefr: 'C1', domain: 'adjectives', frequencyRank: 470, example: 'Hizo una explicación sucinta del tema.', exampleEn: 'He gave a succinct explanation of the topic.' },
  { es: 'concluyente', en: 'conclusive / decisive', cefr: 'C1', domain: 'adjectives', frequencyRank: 440, example: 'Los resultados son concluyentes.', exampleEn: 'The results are conclusive.' },
  { es: 'subyacente', en: 'underlying', cefr: 'C1', domain: 'adjectives', frequencyRank: 415, example: 'El problema subyacente no se ha resuelto.', exampleEn: 'The underlying problem has not been solved.' },
];

// Group by domain
export function getByDomain(domain) {
  return VOCABULARY.filter(v => v.domain === domain);
}

// Group by CEFR level
export function getByCefr(level) {
  return VOCABULARY.filter(v => v.cefr === level);
}

export const DOMAINS = [...new Set(VOCABULARY.map(v => v.domain))].sort();
export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

// Sorted by frequency (most common first)
export const BY_FREQUENCY = [...VOCABULARY].sort((a, b) => a.frequencyRank - b.frequencyRank);
