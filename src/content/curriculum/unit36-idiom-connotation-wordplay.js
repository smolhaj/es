// Unit 36 — Idiom, Connotation & Wordplay (C2)
// Covers: connotacion_denotacion, pares_registro_lexico, ironia_doble_sentido
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Unlike most units,
// this one is not a grammar unit — it is a vocabulary/pragmatics unit, so
// the prose leans on "here's how meaning shifts with word choice and tone"
// rather than "here's a rule to apply." Every claim below (especially the
// regional-vocabulary ones) was WebSearch-verified before writing — see the
// audit note at the bottom of this file for sources and specifics. This
// content is written to be consistent with, not contradictory to, the
// existing GRAMMAR_CARDS entries for these three concept ids in
// src/content/grammar.js and the register scale already established in
// src/content/idioms.js (colloquial / informal / neutral / formal).

export default {
  sections: [
    {
      heading: 'Same Word, Different Feeling: Connotation vs. Denotation',
      paragraphs: [
        "Two words can point to the exact same real-world thing — the same body type, the same age, the same event — and still land completely differently on whoever hears them. That gap is the difference between denotation (a word's literal, dictionary meaning) and connotation (the emotional charge, attitude, or judgment a word carries beyond that literal meaning). Getting this wrong doesn't make your Spanish incorrect — it can just make you sound accidentally rude, accidentally too formal, or a little tone-deaf, even in a perfectly grammatical sentence.",
        "Take three words that all describe someone as \"thin\": flaco, delgado, and esbelto. Delgado is the neutral, safe default — polite and purely descriptive, roughly like English \"slim.\" Esbelto goes further in a flattering direction, suggesting an elegant, graceful slenderness — the word you'd reach for if you specifically wanted to compliment someone's figure. Flaco is the one to handle with care: describing a stranger's body as flaco can land as blunt, even a little negative, closer to \"skinny\" than \"slim.\" But there's a genuine regional twist here — in Argentina and Uruguay, flaco/flaca doubles as an everyday, affectionate way to address a friend (che, flaco, ¿todo bien?), with no comment on their actual build at all, much like \"buddy\" or \"man\" in English. Region changes the read as much as the word itself does.",
        "Age works the same way. Viejo is the everyday word for \"old,\" but aimed at a stranger it can come across as blunt or even dismissive — learners sometimes reach for it simply because it's the first translation they learned, without realizing anciano or mayor usually lands better. Anciano is the respectful, more formal choice — the word a news report or a government program uses for elderly citizens, carrying a real sense of dignity. Mayor sits in between: neutral, polite, softened, close to how English uses \"senior\" or \"older adult.\" And viejo has its own warm exception: mis viejos, used affectionately for \"my parents\" (or even old close friends), carries none of the bluntness it can have when describing a stranger — the relationship completely changes the word's emotional weight.",
        "Connotation doesn't only live in separate words — Spanish can also shift it with a suffix on the very same root. Casita (from casa) sounds cozy and appealing, a charming little house; casucha, built from that same root with a different ending, sounds like a run-down dump. Same underlying word, opposite feeling, purely from the suffix. Dictionaries are built to record denotation reliably; they're far less reliable for connotation, which is exactly why the fastest way to actually learn it is from real context — dialogue, articles, native speakers — not from a bilingual word list.",
      ],
      examples: [
        { es: 'Es una persona delgada.', en: 'She is a slim person. (neutral, safe default)' },
        { es: 'Con ese vestido se ve esbelta.', en: 'In that dress she looks slender. (flattering)' },
        { es: 'Ese hombre flaco vive solo.', en: 'That skinny man lives alone. (can sound blunt about a stranger)' },
        { es: 'Che, flaco, ¿todo bien?', en: 'Hey man, everything good? (Argentina/Uruguay — affectionate, not about weight)' },
        { es: 'Mi abuelo es un anciano muy sabio.', en: 'My grandfather is a very wise elderly man. (respectful, formal)' },
        { es: 'Mis viejos vienen a cenar el domingo.', en: 'My parents are coming for dinner on Sunday. (affectionate)' },
        { es: 'Vive en una casita preciosa junto al mar.', en: 'She lives in a charming little house by the sea.' },
      ],
      commonMistakes: [
        'Assuming flaco is always blunt or negative — in Argentina and Uruguay it doubles as a completely neutral, friendly way to address someone, unrelated to their actual build.',
        'Reaching for viejo to describe an elderly stranger out of habit — anciano (formal/respectful) or mayor (neutral/polite) usually lands better outside the affectionate mis viejos context.',
        'Treating a dictionary translation as the whole story — a bilingual glossary will tell you delgado, flaco, and esbelto all mean "thin," but only real context teaches you which one to reach for and when.',
      ],
    },
    {
      heading: 'Same Meaning, Different Register: Choosing the Right Synonym',
      paragraphs: [
        "You've already seen register show up across this site's idiom entries, each tagged colloquial, informal, neutral, or formal — that same four-point scale applies just as much to everyday vocabulary as it does to set phrases. Plenty of concepts have several correct Spanish words for them; the difference between those words isn't right vs. wrong, it's which register and which region you're speaking in. Picking the right one signals that you actually know how Spanish is used, not just what it means.",
        "\"Car\" is the textbook example, and it's genuinely regional, not just stylistic: coche is the standard, everyday word in Spain (and also heard in Argentina); carro is standard across Mexico, Colombia, Venezuela, and Central America; auto is standard in Argentina, Chile, Uruguay, and Paraguay. Here's the trap worth memorizing carefully: in Spain, carro doesn't mean \"car\" at all — it means \"cart\" (a shopping cart, a horse cart). Ask for un carro in a Madrid supermarket and staff will hand you a shopping trolley, not point you toward a car. Vehículo, meanwhile, is the safe, formal, technical option understood everywhere — the word a police report or an insurance form uses, not the word you'd use with friends.",
        "Casa is the default, all-purpose word for \"house\" or \"home,\" the one you'd use in almost any casual conversation. Move up in formality and you get vivienda, the word real-estate listings and government housing policy reach for — un plan de vivienda, precios de la vivienda. Higher still is domicilio, strictly for legal and administrative paperwork: it means \"residence\" or \"home address,\" the word a form, a bank, or a police officer wants when they ask you to indicate it. Using domicilio with a friend to mean \"come over to my place\" would sound stiff and bureaucratic — it belongs on a form, not in a text message.",
        "Trabajo is the neutral, everyday word for \"work\" or \"job\" — it works in essentially any context. Empleo is its more formal sibling, the word you'll see in oferta de empleo (\"job posting\") or contrato de empleo (\"employment contract\"). Curro drops all the way down to colloquial slang — but it's specifically Spain's slang, not pan-Hispanic: estoy hasta arriba de curro only sounds natural in Spain. Say it in Mexico and people will understand the general idea but recognize it as foreign; Mexican Spanish reaches for chamba/chambear in that same colloquial slot, and Argentine Spanish reaches for laburo/laburar. Same register, three different words, three different countries — memorizing just one as \"the\" slang word for work will only get you halfway there.",
      ],
      examples: [
        { es: 'Voy en coche al trabajo.', en: 'I go to work by car. (Spain, everyday register)' },
        { es: '¿Tienes carro o vas en autobús?', en: 'Do you have a car, or do you take the bus? (Mexico, everyday register)' },
        { es: 'Vamos a la costa en auto.', en: 'We are driving to the coast. (Argentina/Chile/Uruguay/Paraguay, everyday register)' },
        { es: 'En España, "un carro" en el súper es un carrito de la compra, no un coche.', en: 'In Spain, asking for "a carro" at the supermarket gets you a shopping cart, not a car.' },
        { es: 'Indique su domicilio en el formulario.', en: 'State your home address on the form. (formal/legal register)' },
        { es: 'Estoy hasta arriba de curro esta semana.', en: 'I am swamped with work this week. (colloquial, Spain only)' },
      ],
      commonMistakes: [
        'Using carro in Spain expecting it to mean "car" — it means "cart," so ask for un coche instead.',
        "Treating curro as universal Spanish slang for \"job\" — it's specifically Spain's; reach for chamba in Mexico or laburo in Argentina instead.",
        "Defaulting to domicilio or vivienda in casual speech just because they sound more \"correct\" — with friends and family, casa is not only fine, it's the expected, natural choice; the formal words can sound cold or bureaucratic out of context.",
      ],
    },
    {
      heading: 'Saying One Thing, Meaning Another: Irony, Sarcasm & Double Meaning',
      paragraphs: [
        "Every language lets a speaker mean something different from — often the opposite of — what their words literally say, and Spanish leans on this constantly. Irony and sarcasm flip a sentence's literal meaning using tone, context, and a shared understanding between speaker and listener; the words themselves often stay perfectly ordinary. That makes this the hardest kind of meaning to teach from a page: in speech, prosody (the rise, fall, and flatness of your voice) carries most of the signal, and in writing, you're relying entirely on context and punctuation to do the same job.",
        "One genuinely useful thing to know before you go further: Spanish sarcasm is often delivered with a straight face and a neutral, even tone — noticeably flatter than the exaggerated vocal \"sarcasm voice\" English speakers often use. That makes it genuinely harder for learners to catch in real time; you can't just wait for an obvious vocal cue that isn't coming. Watching for context — does the literal statement even make sense given what's actually happening? — often matters more than listening for tone alone.",
        "A handful of fixed phrases are used ironically so often that native speakers reach for them almost automatically. ¡Qué bien! (\"great!\") said right after hearing bad news is understood as annoyed, not delighted — the cheerful words and the frustrated reality clash on purpose. Sí, claro (\"yes, of course\") flips into a dismissive \"yeah, right\" when the context makes the literal answer implausible — someone asking if you will finish an impossible task today, for instance. Lo que me faltaba (\"just what I needed\") is essentially always sarcastic, reserved specifically for one more unwelcome thing piling onto an already bad situation.",
        "One more pattern worth knowing: menudo/menuda literally means \"small,\" but used as an ironic intensifier right before a noun, it flips to mean the opposite — big, remarkable, over the top. Menudo lío (\"what a mess\") and menudo experto está hecho (\"what an 'expert' he turned out to be\") both use menudo to intensify, not to shrink. Whether that intensifying use lands as genuine admiration or as sarcastic criticism depends entirely on tone and context — the exact same phrase can be praise for a job well done or a pointed jab at someone overestimating their own skill.",
      ],
      examples: [
        { es: '¡Qué bien, se ha vuelto a estropear el ascensor!', en: 'Great, the elevator broke down again! (said with annoyance, not delight)' },
        { es: '—¿Vas a terminar hoy? —Sí, claro, y mañana vuelo a la luna.', en: '"Are you going to finish today?" "Sure, and tomorrow I will fly to the moon." (dismissive)' },
        { es: 'Se me ha averiado el coche justo antes del viaje. ¡Lo que me faltaba!', en: 'My car broke down right before the trip. Just what I needed! (sarcastic)' },
        { es: 'Menudo lío se armó en la oficina.', en: 'What a mess broke out at the office.' },
        { es: 'Menudo "experto" está hecho.', en: 'What an "expert" he turned out to be. (ironic emphasis)' },
      ],
      commonMistakes: [
        'Taking sí, claro at face value every time — context and tone can flip it into a dismissive "yeah, right," especially when the literal answer would be implausible.',
        "Expecting Spanish sarcasm to sound obviously exaggerated the way it often does in English — it's frequently delivered flat and neutral, so learners can miss it entirely if they're only listening for a \"sarcastic voice.\"",
        "Using heavy irony or sarcasm with strangers, in formal settings, or across cultures — it's a high-context register, and without shared understanding, a sarcastic line risks simply being taken literally.",
      ],
    },
  ],

  vocab: [
    { es: 'flaco / flaca', en: 'skinny, thin (can sound blunt about a stranger; affectionate address term in Argentina/Uruguay)', example: 'Che, flaco, ¿todo bien? — así saluda un amigo en Buenos Aires, sin hablar de tu peso.', exampleEn: 'Hey man, all good? — that is how a friend greets you in Buenos Aires, with no comment on your weight.' },
    { es: 'delgado / delgada', en: 'thin, slim (the neutral, polite default)', example: 'Es una persona delgada, nada más — no suena ni positivo ni negativo, solo describe.', exampleEn: 'She is a slim person, nothing more — it does not sound positive or negative, just descriptive.' },
    { es: 'esbelto / esbelta', en: 'slender, svelte (flattering; elegant slimness)', example: 'Con ese vestido se ve esbelta y elegante.', exampleEn: 'In that dress she looks slender and elegant.' },
    { es: 'viejo / vieja', en: 'old (can sound blunt about a stranger; affectionate for close family — mis viejos = my parents)', example: 'Mis viejos vienen a cenar el domingo.', exampleEn: 'My parents are coming for dinner on Sunday. (affectionate, not literally "old people")' },
    { es: 'anciano / anciana', en: 'elderly person (respectful, formal register)', example: 'El ayuntamiento ofrece transporte gratuito a los ancianos del barrio.', exampleEn: 'The city council offers free transport to the elderly residents of the neighborhood.' },
    { es: 'mayor', en: 'older, senior (neutral, polite — softer than viejo, less formal than anciano)', example: 'Mi vecina ya es mayor, pero sale a caminar todos los días.', exampleEn: 'My neighbor is elderly now, but she goes out walking every day.' },
    { es: 'coche', en: 'car (standard in Spain; also heard in Argentina)', example: 'En Madrid, casi todo el mundo dice que va en coche al trabajo.', exampleEn: 'In Madrid, almost everyone says they go to work by car.' },
    { es: 'carro', en: 'car (standard in Mexico, Colombia, Venezuela, Central America) — but means "cart," not car, in Spain', example: 'En Bogotá, un carro nuevo cuesta mucho más que hace unos años.', exampleEn: 'In Bogotá, a new car costs a lot more than it did a few years ago.' },
    { es: 'auto', en: 'car (standard in Argentina, Chile, Uruguay, Paraguay)', example: 'Vamos a la costa en auto este fin de semana.', exampleEn: 'We are driving to the coast this weekend.' },
    { es: 'vivienda', en: 'housing, dwelling (formal — real-estate listings, government policy)', example: 'El gobierno presentó un nuevo plan de vivienda para jóvenes.', exampleEn: 'The government presented a new housing plan for young people.' },
    { es: 'domicilio', en: 'residence, home address (very formal — legal and administrative paperwork)', example: 'Indique su domicilio completo en el formulario.', exampleEn: 'State your full home address on the form.' },
    { es: 'curro', en: 'job, work (colloquial slang, Spain only; Mexico uses chamba, Argentina uses laburo for the same register)', example: 'Estoy hasta arriba de curro esta semana, no doy más.', exampleEn: 'I am swamped with work this week, I cannot take any more.' },
    { es: 'sí, claro', en: 'yeah, right (dismissive/sarcastic when tone signals disbelief; sincere "yes, of course" otherwise)', example: '—¿Vas a terminar hoy? —Sí, claro, y mañana vuelo a la luna.', exampleEn: '"Are you going to finish today?" "Sure, and tomorrow I will fly to the moon."' },
    { es: 'lo que me faltaba', en: 'just what I needed (sarcastic — said about something unwelcome)', example: 'Se me ha averiado el coche justo antes del viaje. ¡Lo que me faltaba!', exampleEn: 'My car broke down right before the trip. Just what I needed!' },
    { es: 'menudo / menuda', en: 'ironic intensifier — flips "small" into "big/important"; tone decides praise or complaint', example: 'Menudo lío se armó cuando se fue la luz en toda la oficina.', exampleEn: 'What a mess it was when the power went out in the whole office.' },
  ],

  practice: [
    // ── connotacion_denotacion block (blocked practice: drilled alone before mixing with other concepts) ──
    { type: 'multiple_choice', prompt: 'Which word is the most neutral, all-purpose way to describe someone as "thin" in Spanish?', word: 'delgado', english: 'thin, slim (neutral)', answer: 'delgado', options: ['flaco', 'delgado', 'esbelto', 'flacucho'], concept_id: 'connotacion_denotacion', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'In Buenos Aires, a friend greets you with "Che, flaco, ¿todo bien?" What is the best interpretation?', word: 'flaco', english: 'buddy, man (affectionate, regional)', answer: 'It is a friendly, informal way to say "buddy" — it is not a comment on your weight', options: ['He is insulting your weight', 'It is a friendly, informal way to say "buddy" — it is not a comment on your weight', 'He is being unusually formal with you', 'He thinks you look unwell'], concept_id: 'connotacion_denotacion', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the most respectful, formal word for an elderly person, the kind used in a news article about elder care: "El gobierno anunció nuevas ayudas para los ___ del país."', word: 'anciano', english: 'elderly person (respectful, formal)', answer: 'ancianos', concept_id: 'connotacion_denotacion', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: 'Translate: "My grandfather is a very wise elderly man."', english: 'My grandfather is a very wise elderly man.', answer: 'Mi abuelo es un anciano muy sabio.', word: 'anciano', concept_id: 'connotacion_denotacion', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'What does "mis viejos" mean in a sentence like "Mis viejos vienen a cenar el domingo"?', word: 'mis viejos', english: 'my parents (affectionate)', answer: 'my parents, my folks (affectionate, not literally "my old people")', concept_id: 'connotacion_denotacion', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the register: a formal magazine article about elder care reads "Los viejos del barrio se reunieron para hablar con el alcalde." (viejo is too blunt for this formal context)', word: 'mayor', english: 'senior, older adult (neutral/formal)', answer: 'Los mayores del barrio se reunieron para hablar con el alcalde.', concept_id: 'connotacion_denotacion', difficulty: 3 },
    {
      type: 'multiple_choice',
      prompt: 'Según el texto, ¿por qué Marta prefiere el comentario de su amiga en vez del comentario de su tío?',
      word: 'esbelta',
      english: 'slender (flattering)',
      answer: 'Porque "esbelta" suena elegante y positivo, mientras que "flaca" puede sonar a preocupación o crítica',
      options: [
        'Porque "esbelta" suena elegante y positivo, mientras que "flaca" puede sonar a preocupación o crítica',
        'Porque su amiga habla más bajo que su tío',
        'Porque "esbelta" es la única palabra correcta en cualquier contexto',
        'Porque "flaca" es siempre un insulto en todos los países hispanohablantes',
      ],
      concept_id: 'connotacion_denotacion',
      difficulty: 3,
      passage: 'Marta lleva meses entrenando y por fin se siente segura de su cuerpo.\nAmiga: Estás esbelta, se nota que has cambiado tu rutina.\nTío: Uy, qué flaca te has puesto, ¿estás comiendo bien?\nMarta prefiere el comentario de su amiga: las dos personas describen lo mismo, pero la palabra elegida cambia por completo cómo se siente al escucharla.',
      passageEn: 'Marta has been training for months and finally feels good about her body.\nFriend: You look slender, you can tell you have changed your routine.\nUncle: Whoa, you have gotten so skinny, are you eating okay?\nMarta prefers what her friend said: both people are describing the same thing, but the word chosen completely changes how it feels to hear it.',
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate what the uncle says in the passage: "Uy, qué flaca te has puesto, ¿estás comiendo bien?"',
      word: 'flaca',
      english: 'skinny (blunt)',
      answer: 'Whoa, you have gotten so skinny, are you eating okay?',
      concept_id: 'connotacion_denotacion',
      difficulty: 3,
      passage: 'Marta lleva meses entrenando y por fin se siente segura de su cuerpo.\nAmiga: Estás esbelta, se nota que has cambiado tu rutina.\nTío: Uy, qué flaca te has puesto, ¿estás comiendo bien?\nMarta prefiere el comentario de su amiga: las dos personas describen lo mismo, pero la palabra elegida cambia por completo cómo se siente al escucharla.',
      passageEn: 'Marta has been training for months and finally feels good about her body.\nFriend: You look slender, you can tell you have changed your routine.\nUncle: Whoa, you have gotten so skinny, are you eating okay?\nMarta prefers what her friend said: both people are describing the same thing, but the word chosen completely changes how it feels to hear it.',
    },

    // ── pares_registro_lexico block (kept separate from connotacion_denotacion; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'You are filling out a government housing form in Spain and need to give your legal residence. Which word does the form expect?', word: 'domicilio', english: 'residence, home address (very formal)', answer: 'domicilio', options: ['casa', 'domicilio', 'curro', 'chamba'], concept_id: 'pares_registro_lexico', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Traveling in Argentina, you want to ask a friend "Do you have a car?" using the word locals use most naturally there.', word: 'auto', english: 'car (Argentina/Chile/Uruguay/Paraguay)', answer: '¿Tenés auto?', options: ['¿Tenés vivienda?', '¿Tenés domicilio?', '¿Tenés auto?', '¿Tenés curro?'], concept_id: 'pares_registro_lexico', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the regional word choice: a traveler in Madrid says "Voy a comprar un carro nuevo." (carro does not mean "car" in Spain)', word: 'coche', english: 'car (Spain)', answer: 'Voy a comprar un coche nuevo.', concept_id: 'pares_registro_lexico', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete this very informal text between two friends in Spain: "Estoy hasta arriba de ___ esta semana, no doy más." (colloquial Spain slang for "work")', word: 'curro', english: 'work, job (colloquial, Spain)', answer: 'curro', concept_id: 'pares_registro_lexico', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: 'Translate, using formal register: "The company requires proof of employment."', english: 'The company requires proof of employment.', answer: 'La empresa requiere un comprobante de empleo.', word: 'empleo', concept_id: 'pares_registro_lexico', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa esta frase de registro formal: "El gobierno anunció un nuevo plan de vivienda"?', word: 'vivienda', english: 'housing (formal)', answer: 'The government announced a new housing plan.', concept_id: 'pares_registro_lexico', difficulty: 2 },
    {
      type: 'multiple_choice',
      prompt: 'Según el diálogo, si Laura pide "un carro" en un supermercado en España, ¿qué le traen?',
      word: 'carro',
      english: 'cart (in Spain, not "car")',
      answer: 'Un carrito de la compra',
      options: ['Un coche nuevo', 'Un carrito de la compra', 'Un taxi', 'Un mapa de la ciudad'],
      concept_id: 'pares_registro_lexico',
      difficulty: 2,
      passage: 'Diego: ¿Viniste en carro o en metro?\nLaura: En coche, pero casi no encontré dónde aparcar. Oye, aquí ustedes dicen carro para todo, ¿no? En España, si pido un carro en el súper, me traen uno de la compra, no un coche.\nDiego: Ja, acá carro es carro nomás, sin confusión posible. ¿Y en España, cómo le dicen al trabajo de manera informal?\nLaura: Nosotros decimos curro, pero eso es típico de España.\nDiego: Aquí decimos chamba.',
      passageEn: 'Diego: Did you come by car or by metro?\nLaura: By car, but I almost could not find anywhere to park. Hey, do you all say carro for everything here? In Spain, if I ask for a carro at the supermarket, they bring me a shopping cart, not a car.\nDiego: Ha, here carro just means car, no confusion possible. And in Spain, what is the informal word for work?\nLaura: We say curro, but that is typical of Spain.\nDiego: Here we say chamba.',
    },
    {
      type: 'fill_blank',
      prompt: 'Según el diálogo, completa: "Aquí decimos ___." (la palabra informal para "trabajo" en México)',
      word: 'chamba',
      english: 'work, job (colloquial, Mexico)',
      answer: 'chamba',
      concept_id: 'pares_registro_lexico',
      difficulty: 2,
      passage: 'Diego: ¿Viniste en carro o en metro?\nLaura: En coche, pero casi no encontré dónde aparcar. Oye, aquí ustedes dicen carro para todo, ¿no? En España, si pido un carro en el súper, me traen uno de la compra, no un coche.\nDiego: Ja, acá carro es carro nomás, sin confusión posible. ¿Y en España, cómo le dicen al trabajo de manera informal?\nLaura: Nosotros decimos curro, pero eso es típico de España.\nDiego: Aquí decimos chamba.',
      passageEn: 'Diego: Did you come by car or by metro?\nLaura: By car, but I almost could not find anywhere to park. Hey, do you all say carro for everything here? In Spain, if I ask for a carro at the supermarket, they bring me a shopping cart, not a car.\nDiego: Ha, here carro just means car, no confusion possible. And in Spain, what is the informal word for work?\nLaura: We say curro, but that is typical of Spain.\nDiego: Here we say chamba.',
    },

    // ── ironia_doble_sentido block (kept separate; blocked before mixed review; heavy passage use since tone/context drive meaning) ──
    {
      type: 'multiple_choice',
      prompt: 'Según el diálogo, ¿cómo se siente realmente el pasajero cuando dice "¡Qué bien!"?',
      word: 'qué bien',
      english: 'great! (ironic)',
      answer: 'Frustrado y molesto — lo dice con ironía, no con alegría',
      options: ['Contento y aliviado', 'Frustrado y molesto — lo dice con ironía, no con alegría', 'Indiferente ante la noticia', 'Sorprendido de manera positiva'],
      concept_id: 'ironia_doble_sentido',
      difficulty: 2,
      passage: 'Empleada: Buenas noticias: su vuelo se ha retrasado tres horas.\nPasajero: ¡Qué bien! Justo lo que me faltaba después de perder la conexión.\nEmpleada: Lo siento mucho, señor.\nPasajero: No se preocupe, total, tengo todo el día libre para esperar en este aeropuerto.',
      passageEn: 'Employee: Good news: your flight has been delayed three hours.\nPassenger: Great! Just what I needed after missing my connection.\nEmployee: I am very sorry, sir.\nPassenger: Do not worry about it, after all, I have the whole day free to wait around this airport.',
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate the passenger\'s last line from the passage: "No se preocupe, total, tengo todo el día libre para esperar en este aeropuerto."',
      word: 'total',
      english: 'after all (ironic resignation)',
      answer: 'Do not worry about it, after all, I have the whole day free to wait around this airport.',
      concept_id: 'ironia_doble_sentido',
      difficulty: 3,
      passage: 'Empleada: Buenas noticias: su vuelo se ha retrasado tres horas.\nPasajero: ¡Qué bien! Justo lo que me faltaba después de perder la conexión.\nEmpleada: Lo siento mucho, señor.\nPasajero: No se preocupe, total, tengo todo el día libre para esperar en este aeropuerto.',
      passageEn: 'Employee: Good news: your flight has been delayed three hours.\nPassenger: Great! Just what I needed after missing my connection.\nEmployee: I am very sorry, sir.\nPassenger: Do not worry about it, after all, I have the whole day free to wait around this airport.',
    },
    {
      type: 'fill_blank',
      prompt: 'Según el diálogo, completa la reacción irónica del pasajero: "¡Qué ___! Justo lo que me faltaba."',
      word: 'bien',
      english: 'great (said ironically)',
      answer: 'bien',
      concept_id: 'ironia_doble_sentido',
      difficulty: 1,
      passage: 'Empleada: Buenas noticias: su vuelo se ha retrasado tres horas.\nPasajero: ¡Qué bien! Justo lo que me faltaba después de perder la conexión.\nEmpleada: Lo siento mucho, señor.\nPasajero: No se preocupe, total, tengo todo el día libre para esperar en este aeropuerto.',
      passageEn: 'Employee: Good news: your flight has been delayed three hours.\nPassenger: Great! Just what I needed after missing my connection.\nEmployee: I am very sorry, sir.\nPassenger: Do not worry about it, after all, I have the whole day free to wait around this airport.',
    },
    {
      type: 'multiple_choice',
      prompt: 'Cuando Ana responde "Sí, claro, y mañana vuelo a la luna," ¿qué quiere decir en realidad?',
      word: 'sí, claro',
      english: 'yeah, right (dismissive)',
      answer: 'Que es imposible que termine el informe hoy',
      options: ['Que definitivamente terminará el informe hoy', 'Que es imposible que termine el informe hoy', 'Que necesita ayuda con el informe', 'Que ya terminó el informe'],
      concept_id: 'ironia_doble_sentido',
      difficulty: 2,
      passage: 'Jefe: ¿Vas a terminar el informe hoy?\nAna: Sí, claro, y mañana vuelo a la luna.\nJefe: Entonces, ¿lo tendré mañana?\nAna: Ojalá, pero lo dudo mucho.',
      passageEn: 'Boss: Are you going to finish the report today?\nAna: Sure, and tomorrow I will fly to the moon.\nBoss: So, will I have it tomorrow?\nAna: I wish, but I doubt it very much.',
    },
    {
      type: 'translation_to_spanish',
      prompt: 'Translate ironically: "Sure, and tomorrow I will fly to the moon."',
      english: 'Sure, and tomorrow I will fly to the moon.',
      answer: 'Sí, claro, y mañana vuelo a la luna.',
      word: 'sí, claro',
      concept_id: 'ironia_doble_sentido',
      difficulty: 2,
    },
    { type: 'fill_blank', prompt: 'Se te avería el coche el día antes de un viaje largo. Dices, con ironía: "Justo lo que me ___."', word: 'faltaba', english: 'needed (sarcastic)', answer: 'faltaba', concept_id: 'ironia_doble_sentido', difficulty: 1 },
    {
      type: 'multiple_choice',
      prompt: '"Menudo experto está hecho" generalmente se usa para...',
      word: 'menudo',
      english: 'what a... (ironic intensifier)',
      answer: 'Comentar irónicamente sobre la supuesta pericia de alguien, ya sea para elogiar o para criticar',
      options: [
        'Elogiar sinceramente y sin ironía a un verdadero experto',
        'Comentar irónicamente sobre la supuesta pericia de alguien, ya sea para elogiar o para criticar',
        'Preguntar si alguien tiene un título de experto',
        'Pedir un consejo profesional a un experto',
      ],
      concept_id: 'ironia_doble_sentido',
      difficulty: 2,
    },
    { type: 'error_correction', prompt: 'Fix this sentence so it reads as sincere agreement instead of sarcasm: "Sí, claro, y mañana vuelo a la luna." (the speaker actually just means plain, sincere yes)', word: 'sí, claro', english: 'yes, of course (sincere)', answer: 'Sí, claro.', concept_id: 'ironia_doble_sentido', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - connotacion_denotacion: flaco (negative/blunt in most contexts) vs.
//   delgado (neutral default) vs. esbelto (positive, flattering, elegant)
//   — checked against Linguno's "Delgado vs. flaco vs. esbelto" comparison,
//   SpanishStep, and HiNative native-speaker Q&A threads. The Argentina/
//   Uruguay regional exception — flaco/flaca as a neutral, affectionate term
//   of address unrelated to actual build — was separately verified via
//   HiNative and general-usage writeups before being added; this is exactly
//   the kind of regional nuance the site has previously gotten wrong, so it
//   was not assumed from memory. viejo (can be dismissive about a stranger,
//   but affectionate in mis viejos = "my parents") vs. anciano (formal,
//   respectful) vs. mayor (neutral, polite) checked against SpanishDict
//   Answers, Kwiziq, and SpanishStep comparison pages.
// - pares_registro_lexico: coche (Spain, also Argentina) / carro (Mexico,
//   Colombia, Venezuela, Central America) / auto (Argentina, Chile,
//   Uruguay, Paraguay) / vehículo (formal, any region) checked against
//   Discover Discomfort, Woodward Spanish, Linguno, and SpanishDict Answers
//   — this matches (and does not contradict) the existing pares_registro_
//   lexico card already in src/content/grammar.js, including its specific
//   warning that carro means "cart," not "car," in Spain. casa/vivienda/
//   domicilio register tiers and curro as Spain-only colloquial slang for
//   "job" (with chamba/chambear in Mexico and laburo/laburar in Argentina
//   filling the same colloquial slot) were checked against InkLingo,
//   Cambridge Dictionary, learnmexicanslang.com, and Wiktionary — again
//   matching, not contradicting, the existing grammar.js card's own note
//   about curro being Spain-specific.
// - ironia_doble_sentido: sí, claro as a dismissive "yeah, right" when
//   context makes the literal reading implausible, and the observation that
//   Spanish sarcasm is frequently delivered with a flat, neutral tone rather
//   than an exaggerated "sarcasm voice" (making it harder for learners to
//   catch than English sarcasm), were checked against Talkpal's culture and
//   vocabulary pages, Spring Languages, and a WordReference forum thread
//   specifically discussing "sí, claro" as sarcasm. The ironic-intensifier
//   use of menudo/menuda ("small" flipping to mean "big/remarkable," e.g.
//   menudo lío, menudo experto) was checked against Notes in Spanish and
//   Collins/Cambridge dictionary entries for menudo. This card's content is
//   consistent with the existing ironia_doble_sentido card in
//   src/content/grammar.js (same ¡qué bien!, sí claro, lo que me faltaba,
//   and menudo "experto" examples/logic, expanded here with original
//   dialogue passages rather than copied verbatim).
// This content is complementary to the existing GRAMMAR_CARDS entries for
// connotacion_denotacion, pares_registro_lexico, and ironia_doble_sentido in
// src/content/grammar.js (same facts, fuller vocabulary-paced walkthrough
// with original passages) and does not contradict them.
