// Unit 06 — Everyday Actions (A1)
// Covers: present_ar, present_er_ir, irregular_present_core, modal_verbs_core,
// gustar_basico
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish verb form and grammatical claim below was
// verified against SpanishDict, WordReference-adjacent conjugation sources,
// and established grammar references before writing — see the audit note
// at the bottom of this file for the specific claims checked. Only fully
// regular -ar, -er, and -ir verbs (present indicative) appear here;
// irregular present tense (ir, tener, ser, hacer…) is a separate later
// unit (irregular_present, A2) and is only briefly forward-referenced.

export default {
  sections: [
    {
      heading: 'Meet the Three Verb Families: -AR, -ER, -IR',
      paragraphs: [
        'In Spanish, if you look a verb up in a dictionary, you\'ll always find it in one particular form called the infinitive — the equivalent of English "to speak," "to eat," "to live." Spanish infinitives end in exactly one of three ways: -ar, -er, or -ir, and that ending tells you immediately which "family" of conjugation patterns the verb belongs to. This is one of the most useful facts you\'ll learn as a beginner: unlike English, where irregular verbs (go/went, eat/ate) are common and just have to be memorized one by one, the vast majority of Spanish verbs are perfectly regular within their family. Learn the -ar pattern once, and it works for hundreds of verbs — trabajar, estudiar, cocinar, escuchar, comprar, caminar, cantar, and on and on.',
        'A conjugated form is different from the infinitive: hablar ("to speak") names the action as a whole idea, while hablo chops off -ar and attaches an ending that packs in who\'s doing the speaking — in this case, "I speak." Every regular verb you meet in this unit works the same way: strip the -ar/-er/-ir, attach the ending that matches the subject.',
        'This unit covers only regular verbs. A handful of extremely common ones — ser, estar, ir, tener, hacer, and others — break these patterns in the present tense and get their own dedicated unit later, once these two regular patterns are solid. If you\'ve already noticed a verb that doesn\'t seem to fit, that\'s expected; it\'s simply not covered yet.',
      ],
      examples: [
        { es: 'hablar, comer, vivir', en: 'to speak, to eat, to live — one infinitive from each family' },
        { es: '-ar, -er, -ir', en: 'the three infinitive endings that tell you which pattern to use' },
        { es: 'Hablo. Como. Vivo.', en: 'I speak. I eat. I live. — the same three verbs, conjugated for "yo"' },
        { es: 'trabajar, estudiar, cocinar, escuchar, comprar, caminar, cantar', en: "more -ar verbs following the same pattern you'll learn next" },
        { es: 'Ser, estar, ir y tener son irregulares.', en: 'Ser, estar, ir, and tener are irregular. (covered in a later unit)' },
      ],
      commonMistakes: [
        'English speakers often try to memorize each Spanish verb\'s conjugation individually, the way English handles its irregular verbs (go/went, eat/ate) — but the vast majority of Spanish verbs are perfectly regular within their family, so learning the -ar, -er, and -ir patterns pays off across hundreds of verbs at once.',
        'Don\'t confuse the infinitive (hablar, "to speak") with a conjugated form (habla, "he/she speaks") — the infinitive never changes; it\'s what you look up in a dictionary or verb list.',
        'This unit only covers regular verbs — don\'t try to apply -o/-as/-a or -o/-es/-e endings to verbs like ser, ir, or tener; those follow their own irregular patterns, taught separately.',
      ],
    },
    {
      heading: 'The -AR Family: hablar as Your Model',
      paragraphs: [
        'Every regular -ar verb follows exactly the same recipe as hablar ("to speak"): take the infinitive, remove -ar, and you\'re left with the stem — habl-. Attach one of six endings to that stem depending on who\'s doing the action, and you\'ve conjugated the verb correctly, every time. The six endings are -o, -as, -a, -amos, -áis, -an.',
        'Matched up with the subject pronouns from Unit 1, the full pattern for hablar looks like this: yo hablo, tú hablas, él/ella/usted habla, nosotros/as hablamos, vosotros/as habláis, ellos/ellas/ustedes hablan. Notice that usted still takes the same form as él/ella (habla) and ustedes takes the same form as ellos/ellas (hablan) — exactly the pronoun behavior you already learned applies here too.',
        'Because this pattern is completely regular, it transfers immediately to any other -ar verb: trabajar (to work) → trabajo, trabajas, trabaja…; estudiar (to study) → estudio, estudias, estudia… — the same six endings, every single time. Common regular -ar verbs worth learning early include trabajar, estudiar, cocinar (to cook), escuchar (to listen to), comprar (to buy), caminar (to walk), and cantar (to sing).',
        'One more habit from Unit 1 carries over directly: Spanish usually drops the subject pronoun once the verb ending makes the subject clear. Trabajo en un hospital already means "I work at a hospital" — adding yo is optional, used mainly for emphasis or contrast (Yo trabajo, pero tú descansas — "I work, but you rest").',
      ],
      examples: [
        { es: 'Yo hablo español y un poco de francés.', en: 'I speak Spanish and a little French.' },
        { es: '¿Tú trabajas los sábados?', en: 'Do you work on Saturdays?' },
        { es: 'Ella estudia medicina en la universidad.', en: 'She studies medicine at the university.' },
        { es: 'Nosotros cocinamos juntos los domingos.', en: 'We cook together on Sundays.' },
        { es: '¿Vosotros escucháis música mientras estudiáis?', en: 'Do you all listen to music while you study? (vosotros -áis)' },
        { es: 'Mis padres compran verduras en el mercado.', en: 'My parents buy vegetables at the market.' },
      ],
      commonMistakes: [
        'A very common beginner slip is leaving the verb in its infinitive form instead of conjugating it — "Yo hablar español" is incorrect; it must be "Yo hablo español."',
        'Don\'t drop the accent mark on the vosotros form: habláis, not hablais — the accent marks where the stress falls and is part of correct spelling, not decoration.',
        'It\'s easy to mix up -amos (nosotros) and -an (ellos/ellas/ustedes) since they look similar at a glance — hablamos means "we speak," while hablan means "they/you all (formal) speak."',
      ],
    },
    {
      heading: 'The -ER and -IR Families: comer and vivir',
      paragraphs: [
        'The -er and -ir families share almost the entire set of endings — so close that it\'s easier to learn them together and focus on the one place they differ. Take comer ("to eat") as your -er model and vivir ("to live") as your -ir model: remove the ending, then attach the endings below to the stem (com-, viv-).',
        'Full comparison: comer → como, comes, come, comemos, coméis, comen. Vivir → vivo, vives, vive, vivimos, vivís, viven. Look closely at the yo, tú, él/ella/usted, and ellos/ellas/ustedes forms — como/vivo, comes/vives, come/vive, comen/viven — and you\'ll see the endings (-o, -es, -e, -en) are identical between the two families.',
        'The only place -er and -ir verbs part ways is nosotros and vosotros: -er verbs take -emos/-éis (comemos, coméis), while -ir verbs take -imos/-ís (vivimos, vivís). That\'s the entire difference between the two families — one vowel, in exactly two forms, and everything else is shared.',
        'This pattern is just as regular and transferable as -ar: beber (to drink), leer (to read), aprender (to learn), vender (to sell), and correr (to run) all follow comer\'s pattern; escribir (to write), abrir (to open), recibir (to receive), compartir (to share), and decidir (to decide) all follow vivir\'s.',
      ],
      examples: [
        { es: 'Como fruta por la mañana y bebo café.', en: 'I eat fruit in the morning and drink coffee.' },
        { es: '¿Lees el periódico todos los días?', en: 'Do you read the newspaper every day?' },
        { es: 'Vivimos en un apartamento pequeño.', en: 'We live in a small apartment.' },
        { es: '¿Coméis en casa o coméis fuera?', en: 'Do you all eat at home or eat out? (vosotros -éis)' },
        { es: 'Mis abuelos viven en Argentina; nosotros vivimos en España.', en: 'My grandparents live in Argentina; we live in Spain.' },
        { es: 'Ella escribe correos y yo abro las cartas.', en: 'She writes emails and I open the letters.' },
      ],
      commonMistakes: [
        'The most common mix-up in this family is defaulting to -emos for every "we" form — remember it\'s only -er verbs (comemos) that use -emos; -ir verbs use -imos (vivimos), even though the rest of the pattern is shared.',
        'Don\'t assume every -er or -ir verb follows this pattern — very common ones like tener (to have), hacer (to do/make), and decir (to say) are irregular and need to be learned separately; this unit sticks to fully regular verbs on purpose so the pattern stays clean while it\'s new.',
        'Watch the accent on vosotros: coméis needs the accent on the é; without it, both the stress and the spelling are wrong.',
      ],
    },
    {
      heading: 'Putting It Together: Talking About Your Everyday Life',
      paragraphs: [
        'Put the two patterns together and you already have a real sentence engine: any subject pronoun (yo, tú, él/ella/usted, nosotros/as, vosotros/as, ellos/ellas/ustedes) plus any regular -ar, -er, or -ir verb produces a correct, natural sentence about someone\'s everyday life — no memorization beyond the six endings per family.',
        'A handful of frequency words make these sentences immediately more useful: todos los días ("every day"), siempre ("always"), a veces ("sometimes"), and generalmente ("generally"). Spanish word order with these is more flexible than English, but as a beginner, a safe default is to put siempre and a veces right before the conjugated verb (Siempre trabajo los lunes — "I always work on Mondays") and to let todos los días sit at the start or end of the sentence.',
        'Keep leaning on the pronoun-dropping habit from Unit 1 here too: Vivo en Madrid y trabajo en un banco already communicates "I live in Madrid and I work at a bank" — no yo required unless you\'re contrasting with someone else.',
        'You now have two of the most-used grammar patterns in the entire language, covering a large share of everyday regular verbs. The next step, in a later unit, is the smaller set of very common irregular verbs (ir, tener, ser, hacer, and others) that don\'t follow -o/-as/-a or -o/-es/-e — but with these two patterns solid, that unit will mostly be about memorizing exceptions to a rule you already own.',
      ],
      examples: [
        { es: 'Trabajo en un hospital y estudio inglés por las noches.', en: 'I work at a hospital and study English at night.' },
        { es: 'Mi familia vive en Perú y come mucho arroz.', en: 'My family lives in Peru and eats a lot of rice.' },
        { es: 'Siempre leo antes de dormir.', en: 'I always read before sleeping.' },
        { es: '¿Escribes correos electrónicos todos los días?', en: 'Do you write emails every day?' },
        { es: 'Nosotros compartimos un apartamento pequeño cerca de la universidad.', en: 'We share a small apartment near the university.' },
      ],
      commonMistakes: [
        'When a sentence has two actions joined by "y" (and), both verbs need to be conjugated to match the subject — "Trabajo y estudia" mixes yo and él/ella by mistake; it must be "Trabajo y estudio" if both actions are yours.',
        'English speakers often place frequency words exactly where English would ("I read always") — Spanish rarely does this; as a beginner, put siempre and a veces right before the conjugated verb, and save todos los días for the start or end of the sentence, and you\'ll sound natural.',
      ],
    },
    {
      heading: 'Your First Irregular Verbs: Tener and Ir',
      paragraphs: [
        'Every verb you\'ve conjugated so far has followed a clean, predictable pattern — but two of the most useful verbs in the entire language break the mold from day one, and you need them constantly enough that they can\'t wait for a later unit. Tener ("to have") and ir ("to go") are irregular, meaning their endings don\'t come from stripping -ar/-er/-ir the way hablar or vivir do.',
        'Tener changes in every form except nosotros/vosotros: tengo, tienes, tiene, tenemos, tenéis, tienen. Notice the pattern — an unpredictable yo form (tengo, not "teno"), then e→ie everywhere else except the two "we/you-all" forms. Ir is even more compact and simply has to be memorized outright: voy, vas, va, vamos, vais, van — none of it resembles an -ir verb\'s regular pattern at all.',
        'These two verbs earn their place this early because of how much everyday communication depends on them. Tener + años tells your age (Tengo veinticinco años), and tener alone expresses possession or a relationship (Tengo dos hermanos). Ir + a + place says where you\'re headed (Voy al trabajo) — you\'ll build directly on this construction in a later unit to talk about the near future.',
      ],
      examples: [
        { es: 'Tengo un hermano y una hermana.', en: 'I have one brother and one sister.' },
        { es: '¿Cuántos años tienes?', en: 'How old are you? (lit. how many years do you have)' },
        { es: 'Voy al supermercado los sábados.', en: 'I go to the supermarket on Saturdays.' },
        { es: 'Mis padres tienen una casa grande.', en: 'My parents have a big house.' },
        { es: '¿A dónde vas después del trabajo?', en: 'Where are you going after work?' },
      ],
      commonMistakes: [
        'Don\'t try to conjugate tener as a regular -er verb ("teno") — the yo form is irregular (tengo), and the rest stem-changes e→ie except nosotros/vosotros (tenemos, tenéis).',
        'Ir doesn\'t look like a regular -ir verb at all (voy, not "ivo") — it simply has to be memorized as its own short list of six forms.',
        'Tener + años, not "tener + edad," is how Spanish states age — Tengo veinte años, never a literal "I am twenty years."',
      ],
    },
    {
      heading: 'Saying What You Can and Want to Do: Poder and Querer',
      paragraphs: [
        'Poder ("to be able to / can") and querer ("to want") are two more verbs you\'ll reach for in nearly every conversation, and — like tener and ir — they don\'t follow the regular patterns from earlier in this unit. Both are stem-changing: the vowel in the middle of the stem shifts in every form except nosotros and vosotros.',
        'Poder changes o→ue: puedo, puedes, puede, podemos, podéis, pueden. Querer changes e→ie: quiero, quieres, quiere, queremos, queréis, quieren. In both, notice that nosotros and vosotros keep the original vowel (podemos, not "puedemos"; queremos, not "quieremos") — that\'s the one part of the pattern that stays regular.',
        'Both verbs are almost always followed directly by an infinitive, with no word in between: Puedo hablar español ("I can speak Spanish"), Quiero aprender más ("I want to learn more"). This infinitive-after-conjugated-verb structure is one you\'ll reuse constantly as your Spanish grows.',
      ],
      examples: [
        { es: 'Puedo ayudarte esta tarde.', en: 'I can help you this afternoon.' },
        { es: '¿Puedes venir a la fiesta?', en: 'Can you come to the party?' },
        { es: 'Quiero aprender a cocinar.', en: 'I want to learn to cook.' },
        { es: 'Queremos viajar a España este verano.', en: 'We want to travel to Spain this summer.' },
        { es: 'No podemos salir hoy porque llueve.', en: "We can't go out today because it's raining." },
      ],
      commonMistakes: [
        'Both verbs stem-change everywhere except nosotros/vosotros — puedo but podemos, quiero but queremos; don\'t apply the stem change to those two forms.',
        'Poder and querer are followed directly by an infinitive with no preposition: Quiero comer, not "Quiero a comer" — that\'s an easy English-calque mistake to avoid.',
      ],
    },
    {
      heading: 'Talking About Likes: Gustar',
      paragraphs: [
        'Gustar ("to like") works differently from every verb you\'ve met so far, because Spanish builds the sentence backwards from what English speakers expect. In English, the person does the liking: "I like coffee." In Spanish, the thing liked is actually the grammatical subject, and the verb agrees with it — gustar itself means closer to "to be pleasing to."',
        'The everyday pattern is: me/te/le/nos/os/les + gusta (if one thing is liked) or gustan (if more than one thing is liked). Me gusta el café literally works out to "coffee is pleasing to me," which is why gusta agrees with el café (singular), not with "I." Me gustan las películas uses gustan because películas is plural.',
        'For now, treat me, te, and le as fixed little words that show who\'s doing the liking — you\'ll learn the full grammar behind them later. What matters today is the pattern: pick the right pronoun for the person, then gusta or gustan depending on whether one thing or several things are liked.',
      ],
      examples: [
        { es: 'Me gusta el chocolate.', en: 'I like chocolate.' },
        { es: 'Me gustan los perros.', en: 'I like dogs.' },
        { es: '¿Te gusta la música clásica?', en: 'Do you like classical music?' },
        { es: 'A mi hermano le gusta el fútbol.', en: 'My brother likes soccer.' },
        { es: 'No me gusta el café sin azúcar.', en: "I don't like coffee without sugar." },
      ],
      commonMistakes: [
        'Don\'t treat gustar like a normal verb that agrees with the person — Me gusto el café is wrong; it\'s Me gusta el café, agreeing with el café.',
        'Before an infinitive, always use gusta, never gustan, even with more than one activity: Me gusta bailar y cantar (not gustan), because the "thing liked" is treated as one idea.',
        'Yo gusta and tú gusta are common beginner mistakes — gustar almost never appears with yo/tú as its subject; the person who likes something is expressed with me/te/le, not with the subject pronoun.',
      ],
    },
  ],

  vocab: [
    { es: 'hablar', en: 'to speak', example: 'Hablo español todos los días.', exampleEn: 'I speak Spanish every day.' },
    { es: 'trabajar', en: 'to work', example: 'Trabajo en una oficina.', exampleEn: 'I work in an office.' },
    { es: 'estudiar', en: 'to study', example: 'Estudiamos francés los martes.', exampleEn: 'We study French on Tuesdays.' },
    { es: 'cocinar', en: 'to cook', example: 'Mi madre cocina muy bien.', exampleEn: 'My mother cooks very well.' },
    { es: 'escuchar', en: 'to listen (to)', example: 'Escucho música por la mañana.', exampleEn: 'I listen to music in the morning.' },
    { es: 'comprar', en: 'to buy', example: '¿Compras pan en la panadería?', exampleEn: 'Do you buy bread at the bakery?' },
    { es: 'caminar', en: 'to walk', example: 'Caminamos al parque los fines de semana.', exampleEn: 'We walk to the park on weekends.' },
    { es: 'cantar', en: 'to sing', example: 'Ella canta en la ducha.', exampleEn: 'She sings in the shower.' },
    { es: 'comer', en: 'to eat', example: 'Como fruta todos los días.', exampleEn: 'I eat fruit every day.' },
    { es: 'beber', en: 'to drink', example: 'Bebemos agua después de correr.', exampleEn: 'We drink water after running.' },
    { es: 'leer', en: 'to read', example: 'Leo el periódico por la mañana.', exampleEn: 'I read the newspaper in the morning.' },
    { es: 'aprender', en: 'to learn', example: 'Aprendemos español en clase.', exampleEn: 'We learn Spanish in class.' },
    { es: 'vender', en: 'to sell', example: 'Ellos venden fruta en el mercado.', exampleEn: 'They sell fruit at the market.' },
    { es: 'correr', en: 'to run', example: 'Corro todas las mañanas.', exampleEn: 'I run every morning.' },
    { es: 'vivir', en: 'to live', example: 'Vivo en Madrid.', exampleEn: 'I live in Madrid.' },
    { es: 'escribir', en: 'to write', example: 'Escribo cartas a mis amigos.', exampleEn: 'I write letters to my friends.' },
    { es: 'abrir', en: 'to open', example: 'Abro la ventana cuando hace calor.', exampleEn: "I open the window when it's hot." },
    { es: 'recibir', en: 'to receive', example: 'Recibimos correos electrónicos cada día.', exampleEn: 'We receive emails every day.' },
    { es: 'compartir', en: 'to share', example: 'Compartimos la comida con nuestros amigos.', exampleEn: 'We share food with our friends.' },
    { es: 'decidir', en: 'to decide', example: '¿Decides tú o decido yo?', exampleEn: 'Do you decide or do I?' },
    { es: 'tener', en: 'to have', example: 'Tengo un perro y un gato.', exampleEn: 'I have a dog and a cat.' },
    { es: 'ir', en: 'to go', example: 'Voy a la escuela todos los días.', exampleEn: 'I go to school every day.' },
    { es: 'poder', en: 'to be able to / can', example: 'Puedo nadar muy bien.', exampleEn: 'I can swim very well.' },
    { es: 'querer', en: 'to want', example: 'Quiero un café, por favor.', exampleEn: 'I want a coffee, please.' },
    { es: 'gustar', en: 'to like (lit. to be pleasing to)', example: 'Me gusta leer por las noches.', exampleEn: 'I like reading at night.' },
  ],

  practice: [
    // ── present_ar block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "Nosotros ___ español." (hablar)', word: 'hablar', english: 'to speak', answer: 'hablamos', options: ['hablo', 'hablas', 'hablamos', 'habláis'], concept_id: 'present_ar', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of trabajar: "Yo ___ en una oficina."', word: 'trabajar', english: 'to work', answer: 'trabajo', concept_id: 'present_ar', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "You (informal) study French."', english: 'You (informal) study French.', answer: 'Estudias francés.', word: 'estudiar', concept_id: 'present_ar', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "trabajamos"?', word: 'trabajar', english: 'we work', answer: 'we work', concept_id: 'present_ar', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which subject goes with the verb form "cocina"?', word: 'cocinar', english: 'to cook', answer: 'él/ella/usted', options: ['yo', 'tú', 'él/ella/usted', 'nosotros'], concept_id: 'present_ar', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of escuchar: "Vosotros ___ música todo el día."', word: 'escuchar', english: 'to listen (to)', answer: 'escucháis', concept_id: 'present_ar', difficulty: 2 },

    // ── present_er_ir block (kept separate from present_ar; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "Ellos ___ mucho café." (beber)', word: 'beber', english: 'to drink', answer: 'beben', options: ['bebo', 'bebes', 'beben', 'bebéis'], concept_id: 'present_er_ir', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of vivir: "Yo ___ en Madrid."', word: 'vivir', english: 'to live', answer: 'vivo', concept_id: 'present_er_ir', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "We eat pizza on Fridays."', english: 'We eat pizza on Fridays.', answer: 'Comemos pizza los viernes.', word: 'comer', concept_id: 'present_er_ir', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "escribís"?', word: 'escribir', english: 'you all write', answer: 'you all write', concept_id: 'present_er_ir', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which ending completes the nosotros form of a regular -ir verb like vivir?', word: 'vivir', english: 'to live', answer: '-imos', options: ['-emos', '-imos', '-ís', '-en'], concept_id: 'present_er_ir', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of leer: "Ella ___ un libro nuevo cada mes."', word: 'leer', english: 'to read', answer: 'lee', concept_id: 'present_er_ir', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "They share an apartment."', english: 'They share an apartment.', answer: 'Comparten un apartamento.', altAnswers: ['Comparten un departamento.', 'Comparten un piso.'], word: 'compartir', concept_id: 'present_er_ir', difficulty: 2 },

    // ── irregular_present_core block: tener, ir ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "Yo ___ dos hermanos." (tener)', word: 'tener', english: 'to have', answer: 'tengo', options: ['tengo', 'tenes', 'teno', 'tienes'], concept_id: 'irregular_present_core', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of ir: "Nosotros ___ al parque los domingos."', word: 'ir', english: 'to go', answer: 'vamos', concept_id: 'irregular_present_core', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "She has a big family."', english: 'She has a big family.', answer: 'Ella tiene una familia grande.', word: 'tener', concept_id: 'irregular_present_core', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿A dónde van ustedes?"?', word: 'ir', english: 'Where are you all going?', answer: 'Where are you all going?', concept_id: 'irregular_present_core', difficulty: 2 },

    // ── modal_verbs_core block: poder, querer ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "¿___ ayudarme?" (poder, tú)', word: 'poder', english: 'to be able to / can', answer: 'Puedes', options: ['Podes', 'Puedes', 'Podas', 'Puedas'], concept_id: 'modal_verbs_core', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of querer: "Nosotros ___ viajar a México."', word: 'querer', english: 'to want', answer: 'queremos', concept_id: 'modal_verbs_core', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "I want to learn Spanish."', english: 'I want to learn Spanish.', answer: 'Quiero aprender español.', word: 'querer', concept_id: 'modal_verbs_core', difficulty: 2 },

    // ── gustar_basico block ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "Me ___ los perros." (gustar)', word: 'gustar', english: 'to like', answer: 'gustan', options: ['gusta', 'gustan', 'gusto', 'gustas'], concept_id: 'gustar_basico', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "___ gusta el chocolate." (I like chocolate)', word: 'gustar', english: 'to like', answer: 'Me', concept_id: 'gustar_basico', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "Do you (informal) like classical music?"', english: 'Do you like classical music?', answer: '¿Te gusta la música clásica?', word: 'gustar', concept_id: 'gustar_basico', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict conjugation pages,
// WordReference-adjacent conjugation sources, and established grammar
// references before writing (July 2026):
// - hablar full present paradigm (hablo/hablas/habla/hablamos/habláis/hablan)
//   confirmed regular -ar model.
// - comer vs. vivir full present paradigms confirmed regular, with the only
//   divergence at nosotros/vosotros: -emos/-éis (-er) vs. -imos/-ís (-ir);
//   all other persons share identical endings (-o, -es, -e, -en).
// - Each vocab verb individually checked for present-indicative regularity,
//   not just superficial -ar/-er/-ir shape:
//   -ar: hablar, trabajar, estudiar, cocinar, escuchar, comprar, caminar,
//   cantar — all confirmed fully regular present indicative, no stem
//   changes (deliberately avoided look-alike but irregular verbs such as
//   pensar, jugar, cerrar, contar, empezar).
//   -er: comer, beber, leer, aprender, vender, correr — confirmed regular;
//   leer specifically confirmed regular in the present indicative (its
//   irregularities are spelling changes in the gerund/preterite only, not
//   present tense).
//   -ir: vivir, escribir, abrir, recibir, compartir, decidir — confirmed
//   regular in the present indicative; escribir and abrir specifically
//   confirmed to have irregular past participles only (escrito, abierto),
//   which is irrelevant to present tense and not used in this unit.
//   Deliberately avoided -ir verbs with present-tense stem changes (pedir,
//   servir, dormir, sentir, preferir) and -uir verbs with a present-tense
//   spelling insertion (construir, huir).
// - Frequency-adverb placement (siempre/a veces before the verb; todos los
//   días more flexible) checked against multiple sources; phrased with
//   appropriate hedging since sources describe Spanish adverb placement as
//   flexible rather than governed by one strict rule.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// present_ar and present_er_ir in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough) and does not contradict them.
//
// Curriculum-pacing-lag fix (07-09-2026): added irregular_present_core
// (tener, ir), modal_verbs_core (poder, querer), and gustar_basico
// sections/practice — these 3 concepts were split off from
// irregular_present, modal_verbs, and gustar_type during the CEFR audit
// (all A1, the most basic slice of each family) but had no A1 curriculum
// unit teaching them; folded in here rather than into the A2 units that
// still teach the higher-level rest (venir/hacer/etc., deber,
// encantar/doler/etc.) since teaching an A1 concept in an A2-positioned
// unit wouldn't actually fix the pacing mismatch. Conjugations
// cross-checked against SpanishDict; content agrees with and does not
// contradict the existing GRAMMAR_CARDS entries for these 3 concepts.
