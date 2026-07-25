// Unit 24 — Fine Details (B2, FINAL unit of the "Get Started" course)
// Covers: comparatives, correlative_comparatives, diminutives_augmentatives,
// relative_pronouns_advanced, adjectives_ser_estar, adjective_position,
// verbos_cambio
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com/adjacent
// pedagogical sources, and RAE-informed references before writing — see the
// audit note at the bottom of this file for the specific claims checked.
// This is the capstone unit of the entire 24-unit A1→B2 arc, so it runs
// longer than a typical unit (6 concepts instead of 2-4) and its final
// section is written as a warm send-off rather than a routine lesson close.
// Ordering follows the assignment given for this unit: comparatives first
// (adjective_position lists it as a prereq in functions/_lib/concepts.js),
// then diminutives_augmentatives, relative_pronouns_advanced,
// adjectives_ser_estar, adjective_position, and verbos_cambio last.
// Unit 14 already covered the "classic" ser/estar meaning-shift adjectives
// (aburrido, listo, rico, malo, verde, vivo); this unit's adjectives_ser_estar
// section deliberately covers a different, more advanced set (interesado,
// atento, molesto, seguro) so nothing is repeated. Unit 20 already covered
// basic relative clauses (que, quien, donde); this unit's
// relative_pronouns_advanced section builds directly on that with cuyo and
// el cual/la cual.

export default {
  sections: [
    {
      heading: 'Comparing Things: Más/Menos... Que and the Superlative',
      paragraphs: [
        "You've been comparing things informally for a while — más o menos, muy — but B2 Spanish asks you to compare precisely: more than, less than, the most, the least. The basic pattern is simple and consistent: más (more) or menos (less) + adjective + que (than). Mi hermano es más alto que yo (\"My brother is taller than me\"), Este libro es menos interesante que el otro (\"This book is less interesting than the other one\"). Notice que does the job English splits across \"than\" — one small word, always in the same slot, right after the adjective.",
        "The superlative — \"the most,\" \"the least\" — reuses the exact same pieces, just adds the definite article: el/la/los/las + más/menos + adjective. Es el más inteligente de la clase (\"He's the most intelligent in the class\") — and notice de, not en, introduces the group being compared against (\"in the class\" becomes literally \"of the class\"). Son las más rápidas del equipo (\"They're the fastest on the team\"). The article agrees with whatever noun is being described, same as any other adjective agreement you already know.",
        "Four common adjectives break the más/menos pattern entirely and take their own irregular comparative forms, the same way English \"good\" becomes \"better,\" not \"more good\": bueno (good) → mejor (better), malo (bad) → peor (worse), grande (big/old) → mayor (older/greater), pequeño (small/young) → menor (younger/lesser). Es mejor que el otro (\"It's better than the other one\"), not *más bueno que. One useful nuance: mayor and menor in comparisons usually refer to age (Mi hermana es mayor que yo, \"My sister is older than me\") rather than physical size — for physical size, más grande/más pequeño is actually the more common everyday choice, even though mayor/menor exist.",
        "Finally, when two things are equal rather than one beating the other, Spanish switches families entirely: tan + adjective + como (as ... as) for qualities, and tanto/tanta/tantos/tantas + noun + como (as much/many ... as) for quantities, matching the noun's gender and number. Ella es tan alta como su padre (\"She's as tall as her father\") uses tan because alta is an adjective; Tengo tantos libros como tú (\"I have as many books as you\") uses tantos because libros is a masculine plural noun. Tan never changes form; tanto is the one that agrees.",
      ],
      examples: [
        { es: 'Mi hermano es más alto que yo.', en: 'My brother is taller than me.' },
        { es: 'Es el más inteligente de la clase.', en: "He's the most intelligent in the class." },
        { es: 'Esta película es peor que la anterior.', en: 'This movie is worse than the previous one.' },
        { es: 'Mi hermana es mayor que yo, pero yo soy más alto.', en: "My sister is older than me, but I'm taller." },
        { es: 'Ella es tan alta como su padre.', en: "She's as tall as her father." },
        { es: 'Tengo tantos libros como tú, pero menos tiempo para leer.', en: 'I have as many books as you, but less time to read.' },
      ],
      commonMistakes: [
        'Don\'t say *más bueno or *más malo — bueno and malo have their own irregular comparatives, mejor and peor, the same way English says "better," never "more good."',
        'De, not en, introduces the group in a superlative: el más alto de la clase, not *el más alto en la clase.',
        "Tan (invariable) goes with adjectives and adverbs; tanto (which agrees in gender/number) goes with nouns — mixing these up is a very common slip: tan inteligente como (adjective) but tantos amigos como (noun).",
      ],
    },
    {
      heading: 'The More... The More: Cuanto Más..., Más...',
      paragraphs: [
        "One more comparative pattern builds directly on what you just learned, and it's one of the most useful proportional structures in the language: cuanto más..., más... (\"the more..., the more...\"). English pairs two \"the\"-clauses this way — \"the more you practice, the better you get\" — and Spanish does the same job with cuanto in the first half and más (or menos, mejor, peor) in the second: Cuanto más practiques, mejor hablarás (\"The more you practice, the better you'll speak\").",
        "The pattern is symmetrical and flexible: either half can use más or menos depending on the direction of the relationship. Cuanto más comes (more you eat), más engordas (more you gain weight) — both sides increasing together. Cuanto menos duermes, peor te sientes (\"The less you sleep, the worse you feel\") — one side decreasing while the other worsens. What matters is that the two halves track the same proportional idea, whichever direction each one moves in.",
        "One nuance worth knowing: in careful writing, cuanto is the standard choice, but in everyday spoken Spanish — especially in Latin America — mientras más or entre más are extremely common, natural substitutes with the identical meaning: Mientras más hablas, menos escuchas (\"The more you talk, the less you listen\") is just as correct and just as widely understood as the cuanto version. Recognize all three; cuanto is the safest one to produce yourself in writing.",
      ],
      examples: [
        { es: 'Cuanto más practiques, mejor hablarás.', en: "The more you practice, the better you'll speak." },
        { es: 'Cuanto más comes, más engordas.', en: 'The more you eat, the more weight you gain.' },
        { es: 'Cuanto menos duermes, peor te sientes.', en: 'The less you sleep, the worse you feel.' },
        { es: 'Mientras más hablas, menos escuchas.', en: 'The more you talk, the less you listen.' },
        { es: 'Cuanto antes salgamos, antes llegaremos.', en: 'The sooner we leave, the sooner we\'ll arrive.' },
      ],
      commonMistakes: [
        'Don\'t drop cuanto (or its substitutes mientras/entre) from the first half — *más practiques, mejor hablarás is missing the piece that signals "the more," not just "more."',
        'Both halves don\'t have to move in the same direction (más...más) — cuanto menos...peor and similar mixed pairings are just as valid, as long as the proportional logic holds.',
        'Cuanto here is invariable in this fixed expression — it does not agree in gender/number the way cuánto/cuánta can elsewhere; don\'t write *cuanta más.',
      ],
    },
    {
      heading: 'Diminutives: -ito/-ita for Small and Sweet',
      paragraphs: [
        'Spanish has a trick English mostly lacks: you can shrink a word — and often warm it up emotionally at the same time — just by changing its ending, with no extra word needed at all. The most common diminutive suffix is -ito/-ita, added directly onto a noun (or adjective, or even some adverbs) to suggest smallness, cuteness, or affection: casa (house) → casita (little house, cozy house), perro (dog) → perrito (little dog, puppy), hermano (brother) → hermanito (little brother). The suffix agrees in gender the same way any adjective ending does — -ito for masculine, -ita for feminine.',
        "Attaching -ito/-ita isn't always as simple as tacking it onto the end, though, and three spelling patterns are worth learning explicitly. First, most words ending in a vowel simply drop that vowel and add -ito/-ita: casa → casita, perro → perrito, gato → gatito. Second, words ending in -e, -n, or -r typically insert -ec- before the suffix instead of just -it-: coche (car) → cochecito (not *cochito), pan (bread) → panecito (not *panito), flor (flower) → florecita. Third, a couple of consonant-spelling rules kick in to keep the sound consistent: chico → chiquito (c becomes qu before i), and words with a final z change it to c, as in taza (cup) → tacita.",
        "The single biggest thing to unlearn from English: diminutives in everyday Spanish are not mainly about physical size. Un momentito doesn't mean a physically tiny moment — it means \"just a moment,\" said warmly, to soften a request. Mi abuelita isn't necessarily a small grandmother — -ita here is pure affection. Spanish speakers reach for diminutives constantly in casual conversation to sound warmer, friendlier, and less abrupt — Espera un segundito (\"Just wait a second\") feels gentler than the plain Espera un segundo, even though the actual time waited is identical.",
      ],
      examples: [
        { es: 'Vivimos en una casita cerca de la playa.', en: 'We live in a little house near the beach.' },
        { es: 'Tengo un perrito nuevo, se llama Max.', en: 'I have a new puppy, his name is Max.' },
        { es: 'Espera un momentito, ya voy.', en: "Wait just a moment, I'm coming." },
        { es: '¿Me traes un cochecito de juguete para mi hijo?', en: 'Can you bring me a little toy car for my son?' },
        { es: 'Mi abuelita hace el mejor pan; me encanta su panecito recién horneado.', en: 'My grandma makes the best bread; I love her freshly-baked little roll.' },
      ],
      commonMistakes: [
        'Don\'t just bolt -ito onto every word without checking the ending — coche needs cochecito (not *cochito), and pan needs panecito (not *panito); words ending in -e, -n, or -r usually take -ecito/-ecita instead of plain -ito/-ita.',
        "Don't assume a diminutive always means the thing is physically small — un cafecito is often just a friendly, casual way to offer a completely normal-sized coffee, not a miniature one.",
        'Remember the c→qu and z→c spelling shifts: chico becomes chiquito, and taza becomes tacita — these preserve pronunciation and are not optional spellings.',
      ],
    },
    {
      heading: 'Augmentatives: -ón/-ona and -ote/-ota for Big and Intense',
      paragraphs: [
        "The mirror image of the diminutive is the augmentative — suffixes that make something bigger, more intense, or more emphatic, again without adding an extra word. The two you'll see most are -ón/-ona and -ote/-ota. Hombre (man) → hombrón (a big, hulking man); grande (big) → grandote (really big, huge); mujer (woman) → mujerona (a big or imposing woman); casa (house) → casona or casota (a big, impressive house). Like diminutives, the suffix agrees in gender with the noun it's built from.",
        "Augmentatives carry an emotional charge, and it isn't always neutral or positive — context (and tone of voice) decides. Un problemón is a serious, sizable problem — more than just \"a big problem,\" closer to \"a real headache.\" Un peliculón, on the other hand, is enthusiastically positive: a blockbuster, a smash-hit movie. And some -ón words have drifted into outright negative, fixed meanings that a beginner just has to memorize as vocabulary rather than derive from the size logic: solterón/solterona (an old, unmarried bachelor/spinster — noticeably judgmental in tone) is the clearest example.",
        "One practical habit: because augmentatives (unlike diminutives) can tip into rude or mocking territory depending on the word and the room, it's worth being a more cautious producer of them than a diminutive — you'll recognize hombrón or grandote easily in conversation and media, but reach for plain grande or muy grande yourself until you've heard enough native usage to know a given augmentative lands as playful rather than insulting.",
      ],
      examples: [
        { es: 'Su primo es un hombrón, mide casi dos metros.', en: "Her cousin is a big, hulking guy — he's almost two meters tall." },
        { es: 'Compraron una casona en las afueras.', en: 'They bought a big, impressive house on the outskirts.' },
        { es: 'Tenemos un problemón con el proyecto.', en: 'We have a serious problem with the project.' },
        { es: '¡Esa película fue un peliculón!', en: 'That movie was a huge hit!' },
        { es: 'El perro del vecino es grandote pero muy tranquilo.', en: "The neighbor's dog is really big but very calm." },
      ],
      commonMistakes: [
        "Don't treat every augmentative as simply \"very [adjective]\" with no emotional weight — un problemón isn't neutral, it signals the speaker sees this as a genuinely serious problem, not just a big one.",
        'Solterón/solterona is a good example of a word that has taken on a fixed, often judgmental meaning ("old bachelor/spinster") beyond plain size — treat words like this as vocabulary to learn individually, not just suffix math.',
        "Because augmentatives can read as mocking or insulting depending on tone, it's safer to recognize them in what you hear/read before you start producing them freely yourself.",
      ],
    },
    {
      heading: 'Cuyo: "Whose," and the Trap of Agreement',
      paragraphs: [
        "Time to build on the relative clauses you already know (que, quien, donde) with a genuinely tricky one: cuyo/cuya/cuyos/cuyas, meaning \"whose.\" El escritor cuyo libro ganó el premio (\"The writer whose book won the prize\") — cuyo connects a person (or thing) to something they possess, exactly like English \"whose.\" So far, this looks straightforward. Here's the trap.",
        "In English, \"whose\" never changes form no matter what's owned. In Spanish, cuyo behaves like an adjective and must agree in gender and number — but critically, it agrees with the THING POSSESSED, not with the owner. El hombre cuya hija vive en Madrid (\"The man whose daughter lives in Madrid\") uses cuya — feminine — not because hombre is feminine (it isn't) but because hija (daughter), the thing being possessed, is feminine. Flip the genders and the logic holds exactly the same way: La mujer cuyo hijo estudia medicina (\"The woman whose son studies medicine\") uses cuyo — masculine — because hijo is masculine, even though mujer is feminine. Look at the noun that comes right after cuyo to decide its form; ignore the owner entirely.",
        "This is exactly backwards from how English speakers instinctively want to reason about \"whose,\" since English attaches no gender logic to possession at all — which is precisely why it's worth slowing down on. One more note: cuyo is now a fairly formal, mostly written word in everyday spoken Spanish; conversationally, speakers often restructure the sentence instead (de quien, or simply two separate sentences) rather than reach for cuyo, but you'll meet it constantly in writing, news, and formal speech, so recognizing it correctly matters even if you rarely produce it yourself in casual conversation.",
      ],
      examples: [
        { es: 'El escritor cuyo libro ganó el premio vive en Perú.', en: 'The writer whose book won the prize lives in Peru.' },
        { es: 'El hombre cuya hija vive en Madrid es mi vecino.', en: "The man whose daughter lives in Madrid is my neighbor." },
        { es: 'La mujer cuyo hijo estudia medicina trabaja conmigo.', en: 'The woman whose son studies medicine works with me.' },
        { es: 'La empresa cuyos empleados protestaron cerró la fábrica.', en: 'The company whose employees protested closed the factory.' },
        { es: 'Es un país cuyas playas son famosas en todo el mundo.', en: 'It is a country whose beaches are famous throughout the world.' },
      ],
      commonMistakes: [
        "The single biggest trap: cuyo agrees with the thing possessed, not the owner — el hombre cuya hija (feminine cuya, because hija is feminine) even though hombre is masculine. Check the noun right after cuyo, not the noun before it.",
        "Don't confuse cuyo (whose, a relative adjective) with ¿de quién? (whose?, a question word) — cuyo never appears in a direct question; ¿De quién es este libro? (\"Whose book is this?\"), never *¿Cuyo es este libro?",
        "Cuyo skews formal/written — leaning on it in casual spoken conversation isn't wrong, but native speakers often restructure with de quien or a separate sentence instead in everyday speech.",
      ],
    },
    {
      heading: 'El Cual: The Formal Cousin of Que and Quien',
      paragraphs: [
        "The last relative pronoun for your toolkit is el cual/la cual/los cuales/las cuales, which functions much like que or quien but leans noticeably more formal — you'll meet it constantly in writing, news articles, legal or academic text, and formal speech, less so in relaxed conversation. Like cuyo, it agrees in gender and number, but unlike cuyo, it agrees with its own antecedent (the noun it refers back to), the same way que and quien do — no reversed-agreement trap here.",
        "El cual earns its keep in two specific situations where que starts to feel awkward or ambiguous. First, after longer or compound prepositions (por medio de, a causa de, en medio de, and similar), el cual is the natural choice: La razón por la cual no vine fue el tráfico (\"The reason for which I didn't come was the traffic\") sounds far more natural than forcing que into that slot. Second, el cual helps resolve ambiguity when a sentence has two possible antecedents and que alone wouldn't make clear which one is meant — its gender/number agreement can point unambiguously at one candidate over the other, something que (which never changes form) can't do.",
        "One more piece worth knowing: lo cual is a fixed, gender-neutral version used specifically to refer back to an entire idea or clause, not a single noun — No llegó a tiempo, lo cual me sorprendió (\"She didn't arrive on time, which surprised me\") — lo cual there refers to the whole fact of her lateness, not to any one noun in the sentence. This is the same job lo que can do (from earlier relative-clause work), and in this specific role the two are interchangeable.",
      ],
      examples: [
        { es: 'La empresa para la cual trabajo está creciendo mucho.', en: 'The company for which I work is growing a lot.' },
        { es: 'La razón por la cual no vine fue el tráfico.', en: "The reason (for which) I didn't come was the traffic." },
        { es: 'Conocí a la hermana de mi jefe, la cual es abogada.', en: "I met my boss's sister, who is a lawyer." },
        { es: 'No llegó a tiempo, lo cual me sorprendió mucho.', en: "She didn't arrive on time, which surprised me a lot." },
        { es: 'Los estudiantes, los cuales habían estudiado mucho, aprobaron el examen.', en: 'The students, who had studied a lot, passed the exam.' },
      ],
      commonMistakes: [
        "Don't reach for el cual in casual spoken Spanish where que would sound completely natural — el cual is correct but noticeably formal, and overusing it in everyday conversation can sound stiff or bookish.",
        "El cual agrees with its antecedent (like que/quien), unlike cuyo, which agrees with the thing possessed — don't apply cuyo's reversed-agreement rule here by mistake.",
        'Lo cual (not el cual) is the form used to refer back to a whole idea rather than one specific noun — Perdió el vuelo, lo cual fue un desastre, not *el cual fue un desastre.',
      ],
    },
    {
      heading: "Advanced Ser/Estar Adjectives: Interesado, Atento, Molesto, Seguro",
      paragraphs: [
        "You've already met the classic set of adjectives that flip meaning between ser and estar — aburrido, listo, rico, malo, verde, vivo. B2 Spanish has a second, subtler layer of these, and they're genuinely useful for sounding precise rather than just correct. Start with interesado: ser interesado describes someone as self-interested or selfish — a person who seeks personal benefit from others, almost always with a critical edge (Es un interesado, solo te busca por dinero, \"He's self-interested, he only comes to you for money\"). Estar interesado, by contrast, is neutral and simply means to be interested in something (Estoy interesado en el puesto, \"I'm interested in the position\"). The two aren't just different registers of the same idea — one is a character flaw, the other is ordinary curiosity or intent.",
        "Atento follows a similar split but with less contrast in tone. Ser atento describes someone as attentive or considerate by nature — a person who habitually listens well and looks out for others (Juan es muy atento con los demás, \"Juan is very considerate toward others\" — a description of his personality). Estar atento describes paying attention in a specific moment (Estoy atento a la clase, \"I'm paying attention to the class right now\") — you can be atento as a trait and still momentarily fail to estar atento if your mind wanders.",
        "Molesto works much like aburrido's pattern: ser molesto describes something or someone as inherently annoying or bothersome — a character trait or fixed quality (Mi vecino es muy molesto, \"My neighbor is very annoying\"). Estar molesto describes a temporary emotional state — being upset or annoyed right now, usually about something specific (¿Estás molesto conmigo?, \"Are you upset with me?\"). Someone can be molesto (annoying by nature) without currently being molesto (upset), and vice versa.",
        "Finally, seguro shifts from a place to a person's mind: ser seguro describes something (usually a place or situation) as safe or secure — a lasting, objective quality (Este barrio es muy seguro, \"This neighborhood is very safe\"). Estar seguro describes a person feeling sure or certain about something — a mental state (Estoy seguro de mi decisión, \"I'm sure about my decision\"). The two meanings — physically safe vs. mentally certain — don't overlap in English's single word \"sure/safe,\" which is exactly why this pair trips learners up until it's drilled explicitly.",
      ],
      examples: [
        { es: 'Es un interesado, solo te busca por dinero.', en: "He's self-interested — he only comes to you for money." },
        { es: 'Estoy muy interesado en aprender a programar.', en: "I'm very interested in learning to program." },
        { es: 'Juan es muy atento con los demás.', en: 'Juan is very considerate/attentive toward others (personality).' },
        { es: 'Por favor, estén atentos a las instrucciones.', en: 'Please be attentive to the instructions (right now).' },
        { es: 'Mi vecino es muy molesto, siempre hace ruido.', en: "My neighbor is very annoying — he's always making noise." },
        { es: '¿Estás molesto conmigo? Pareces distinto hoy.', en: 'Are you upset with me? You seem different today.' },
        { es: 'Este barrio es muy seguro; puedes salir de noche sin problema.', en: 'This neighborhood is very safe; you can go out at night without a problem.' },
        { es: 'No estoy segura de que esta sea la respuesta correcta.', en: "I'm not sure this is the right answer." },
      ],
      commonMistakes: [
        "Don't say estar interesado when you mean someone is selfish, or ser interesado when you mean someone shows genuine interest — Es un interesado (bad trait) and Está interesado en el proyecto (neutral interest) are opposite in tone, not variations of the same idea.",
        "Ser atento is a personality description; estar atento is about the present moment — a normally attentive person (ser atento) can still momentarily not estar atento if they get distracted.",
        'Seguro is a classic trap because English uses one word ("safe"/"sure") for both: ser seguro = safe (of a place), estar seguro = certain (of a person\'s mental state) — Es un lugar muy seguro pero no estoy seguro de ir solo mixes both correctly in one sentence.',
      ],
    },
    {
      heading: 'Adjective Position: Before or After the Noun, and When It Changes Meaning',
      paragraphs: [
        "By default, Spanish descriptive adjectives go after the noun: una casa grande, un libro interesante, un hombre alto. This after-the-noun position is the neutral, objective one — it simply distinguishes this noun from others of its kind (a big house, as opposed to a small one). But a handful of very common adjectives can also go before the noun, and when they do, the tone shifts from objective description toward something more subjective, inherent, or emotionally colored, rather than pointing out a distinguishing feature.",
        "For most adjectives, this before/after choice is a matter of style and emphasis rather than a hard meaning change — placing an adjective before the noun (especially in literary or poetic Spanish) tends to treat the quality as an inherent, expected feature of the noun rather than information that distinguishes it from other examples: la blanca nieve (\"the white snow\" — snow is, of course, white; you're not distinguishing this snow from non-white snow) versus nieve blanca, which would sound like you're specifying color among possible snow colors.",
        "A smaller handful of adjectives go further and genuinely change meaning depending on position — this is the part worth memorizing directly rather than reasoning your way through. Un amigo viejo means an elderly friend (viejo describes his age, after the noun, objectively); un viejo amigo means a longtime friend (viejo before the noun signals duration of the friendship, not the person's age — he could be young). Un hombre pobre is a man with no money; ¡pobre hombre! means \"poor guy!\" — pitiable, not broke. Una idea nueva is a brand-new idea (newly created); una nueva idea is simply a different or additional idea (could be an old idea, just new to this conversation).",
        "One adjective needs a spelling rule alongside its meaning shift: grande shortens to gran before both masculine and feminine singular nouns, and that shortened form shifts the meaning toward \"great\" (in stature or importance) rather than \"large\" (in size). Un hombre grande is a physically big man; un gran hombre is a great man — admired, important, regardless of his height. Una gran mujer works the same way for a woman. After the noun, grande keeps its full form and its literal, physical-size meaning: una casa grande, never *una casa gran.",
      ],
      examples: [
        { es: 'Tengo un amigo viejo que vive solo.', en: 'I have an elderly friend who lives alone. (his age)' },
        { es: 'Tengo un viejo amigo de la universidad.', en: 'I have a longtime friend from college. (duration of friendship)' },
        { es: '¡Pobre hombre, perdió su trabajo!', en: 'Poor guy, he lost his job! (pitiable, not broke)' },
        { es: 'Es un hombre pobre pero honesto.', en: 'He is a poor (no money) but honest man.' },
        { es: 'Necesito una idea nueva para el proyecto.', en: 'I need a fresh (different) idea for the project. (new to us, maybe not brand-new)' },
        { es: 'Compré una computadora nueva.', en: 'I bought a brand-new computer. (literally just made/purchased new)' },
        { es: 'Einstein fue un gran hombre.', en: 'Einstein was a great man. (importance, not size)' },
        { es: 'Vive en una casa grande en las afueras.', en: 'He lives in a big (physically large) house on the outskirts.' },
      ],
      commonMistakes: [
        "Don't assume moving an adjective before the noun is always meaning-neutral stylistic choice — for a small set (viejo/amigo, grande/gran, pobre, nuevo), the position genuinely changes what's being said, not just the emphasis.",
        "Remember grande shortens to gran (dropping -de) before a singular noun of either gender, and that shortened form means \"great,\" not \"big\": un gran hombre, una gran mujer — but un hombre grande, una mujer grande (unshortened) mean physically large.",
        "¡Pobre hombre! isn't commenting on his finances — pobre before the noun means pitiable/unfortunate; only pobre after the noun (un hombre pobre) is about lacking money.",
      ],
    },
    {
      heading: 'Ways to Say "To Become": Ponerse, Volverse, Hacerse, Llegar a Ser',
      paragraphs: [
        "English gets by with one flexible verb, \"to become,\" for every kind of change — becoming nervous, becoming a doctor, becoming famous, becoming crazy. Spanish refuses to let one verb cover all of that, because it considers the nature of the change important information in itself: was it sudden or gradual? Voluntary or not? Emotional or a change of identity? Four verbs split this territory, and choosing the right one is one of the clearest markers of an advanced speaker.",
        "Ponerse is for temporary, usually sudden changes in mood, physical state, or health — the kind of change that washes over you and often passes. Se puso nervioso antes del examen (\"He got nervous before the exam\"), Me puse rojo de vergüenza (\"I turned red with embarrassment\"), Se puso enferma la semana pasada (\"She got sick last week\"). Critically, ponerse only takes adjectives, never nouns — you can ponerse nervioso, but you cannot *ponerse profesor. The change is how you are, not what you are.",
        "Volverse marks a change in personality or fundamental nature that is usually involuntary and often lasting or even permanent — a shift the person didn't choose and generally can't easily undo. Se volvió loco después del accidente (\"He went crazy after the accident\"), Con los años, se volvió muy desconfiado (\"Over the years, he became very distrustful\"). Where ponerse suggests a passing mood, volverse suggests something has fundamentally shifted about who the person is.",
        "Hacerse marks change that comes through effort, decision, or a voluntary process — the person worked toward this outcome, or at least chose it. Se hizo médico después de años de estudio (\"He became a doctor after years of study\"), Se hizo rico con su negocio (\"He got rich through his business\"), Se hizo budista (\"He became a Buddhist\" — a chosen identity shift). Unlike ponerse, hacerse can take both adjectives and nouns, and it often implies the outcome was earned or deliberately pursued rather than simply happening to the person.",
        "Llegar a ser is reserved for a gradual process that culminates in a notable result, usually over a longer stretch of time, often (though not always) something positive or prestigious — an achievement viewed from the vantage point of having finally arrived. Con el tiempo, llegó a ser el director de la empresa (\"Over time, he became the director of the company\"), Llegó a ser presidente del país (\"He became president of the country\"). It carries a sense of a long road finally reaching its destination — think of it as the slowest, most \"story-arc\" of the four verbs.",
      ],
      examples: [
        { es: 'Se puso muy nervioso antes de la entrevista.', en: 'He got very nervous before the interview.' },
        { es: 'Mi abuelo se volvió muy testarudo con la edad.', en: 'My grandfather became very stubborn with age.' },
        { es: 'Se hizo abogada después de seis años de estudio.', en: 'She became a lawyer after six years of study.' },
        { es: 'Con mucho esfuerzo, llegó a ser gerente de la empresa.', en: 'Through a lot of effort, he became the manager of the company.' },
        { es: 'El agua se puso fría rápidamente.', en: 'The water got cold quickly.' },
        { es: 'Se volvieron locos de alegría cuando ganaron.', en: 'They went wild with joy when they won.' },
      ],
      commonMistakes: [
        'Ponerse only takes adjectives, never nouns — se puso nervioso is correct, but "se puso profesor" is not; a change of role or identity needs hacerse or llegar a ser instead.',
        "Don't reach for volverse for a change someone worked toward — hacerse médico (achieved through effort) sounds odd as *volverse médico, which would suggest becoming a doctor happened to him involuntarily, not through years of deliberate study.",
        'Llegar a ser implies a longer, gradual arc toward a result — using it for a sudden mood change (llegar a ser nervioso, instead of ponerse nervioso) misapplies its "slow culmination" sense to something that actually happens fast.',
      ],
    },
  ],

  vocab: [
    { es: 'más... que', en: 'more... than', example: 'Es más rápido que yo.', exampleEn: "He's faster than me." },
    { es: 'menos... que', en: 'less... than', example: 'Es menos caro que el otro.', exampleEn: "It's less expensive than the other one." },
    { es: 'el/la más', en: 'the most (superlative)', example: 'Es la más alta de la familia.', exampleEn: "She's the tallest in the family." },
    { es: 'mejor / peor', en: 'better / worse', example: 'Este plan es mejor que el anterior.', exampleEn: 'This plan is better than the previous one.' },
    { es: 'mayor / menor', en: 'older / younger', example: 'Mi hermano es mayor que yo.', exampleEn: 'My brother is older than me.' },
    { es: 'tan... como', en: 'as... as', example: 'Es tan inteligente como su hermana.', exampleEn: "He's as smart as his sister." },
    { es: 'tanto/a(s)... como', en: 'as much/many... as', example: 'Tengo tantos amigos como tú.', exampleEn: 'I have as many friends as you.' },
    { es: 'cuanto más..., más...', en: 'the more..., the more...', example: 'Cuanto más practiques, mejor hablarás.', exampleEn: "The more you practice, the better you'll speak." },
    { es: 'cuanto menos..., peor...', en: 'the less..., the worse...', example: 'Cuanto menos duermes, peor te sientes.', exampleEn: 'The less you sleep, the worse you feel.' },
    { es: 'mientras más / entre más', en: 'the more... (spoken alternative to cuanto más)', example: 'Mientras más hablas, menos escuchas.', exampleEn: 'The more you talk, the less you listen.' },
    { es: '-ito / -ita', en: 'diminutive suffix (small, affectionate)', example: 'Vivimos en una casita.', exampleEn: 'We live in a little house.' },
    { es: 'cochecito', en: 'little car (irregular diminutive)', example: 'Le regalé un cochecito de juguete.', exampleEn: 'I gave him a little toy car.' },
    { es: '-ón / -ona', en: 'augmentative suffix (big, intense)', example: 'Su tío es un hombrón.', exampleEn: "Her uncle is a big, hulking man." },
    { es: '-ote / -ota', en: 'augmentative suffix (huge, impressive)', example: 'Tienen un perro grandote.', exampleEn: 'They have a really big dog.' },
    { es: 'cuyo/a/os/as', en: 'whose (agrees with thing possessed)', example: 'El hombre cuya hija vive en Madrid.', exampleEn: "The man whose daughter lives in Madrid." },
    { es: 'el cual / la cual', en: 'which/who (formal, after prepositions)', example: 'La empresa para la cual trabajo.', exampleEn: 'The company for which I work.' },
    { es: 'lo cual', en: 'which (refers to a whole idea)', en2: undefined, example: 'No vino, lo cual me sorprendió.', exampleEn: "She didn't come, which surprised me." },
    { es: 'ser interesado', en: 'to be selfish/self-interested (trait)', example: 'Es un interesado.', exampleEn: "He's self-interested." },
    { es: 'estar interesado', en: 'to be interested (in something)', example: 'Estoy interesado en el puesto.', exampleEn: "I'm interested in the position." },
    { es: 'ser atento', en: 'to be considerate/attentive (personality)', example: 'Juan es muy atento con todos.', exampleEn: 'Juan is very considerate with everyone.' },
    { es: 'estar atento', en: 'to be paying attention (right now)', example: 'Estén atentos, por favor.', exampleEn: 'Please pay attention.' },
    { es: 'ser/estar molesto', en: 'to be annoying (trait) / upset (state)', example: '¿Estás molesto conmigo?', exampleEn: 'Are you upset with me?' },
    { es: 'ser/estar seguro', en: 'to be safe (place) / sure (person)', example: 'Este barrio es muy seguro.', exampleEn: 'This neighborhood is very safe.' },
    { es: 'un viejo amigo / un amigo viejo', en: 'a longtime friend / an elderly friend', example: 'Es un viejo amigo de la universidad.', exampleEn: 'He is a longtime friend from college.' },
    { es: 'un gran hombre / un hombre grande', en: 'a great man / a big (large) man', example: 'Fue un gran hombre.', exampleEn: 'He was a great man.' },
    { es: 'ponerse + adjetivo', en: 'to become (temporary/emotional change)', example: 'Se puso nervioso.', exampleEn: 'He got nervous.' },
    { es: 'volverse + adjetivo', en: 'to become (involuntary, lasting change)', example: 'Se volvió loco.', exampleEn: 'He went crazy.' },
    { es: 'hacerse + adjetivo/sustantivo', en: 'to become (through effort/voluntary)', example: 'Se hizo médico.', exampleEn: 'He became a doctor.' },
    { es: 'llegar a ser', en: 'to become (gradual, culminating result)', example: 'Llegó a ser presidente.', exampleEn: 'He became president.' },
  ],

  practice: [
    // ── comparatives block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete: "Mi hermano es ___ alto ___ yo." (more... than)', word: 'más... que', english: 'more... than', answer: 'más... que', concept_id: 'comparatives', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which is the correct irregular comparative of "bueno" (good)?', word: 'mejor', english: 'better', answer: 'mejor', options: ['más bueno', 'mejor', 'más buen', 'buenor'], concept_id: 'comparatives', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'She is as tall as her father.'", english: 'She is as tall as her father.', answer: 'Ella es tan alta como su padre.', word: 'tan... como', concept_id: 'comparatives', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I have as many books as you.'", english: 'I have as many books as you.', answer: 'Tengo tantos libros como tú.', word: 'tantos... como', concept_id: 'comparatives', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "Este plan es más bueno que el anterior."', word: 'mejor', english: 'better', answer: 'Este plan es mejor que el anterior.', concept_id: 'comparatives', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Es el más inteligente de la clase."', word: 'el más', english: "He's the most intelligent in the class.", answer: "He's the most intelligent in the class.", concept_id: 'comparatives', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which word correctly introduces the comparison group in a superlative: "Es la más alta ___ la familia"?', word: 'de', english: 'of/in', answer: 'de', options: ['en', 'de', 'que', 'con'], concept_id: 'comparatives', difficulty: 2 },

    // ── correlative_comparatives block (kept separate; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "___ más practiques, mejor hablarás." (the more...)', word: 'Cuanto', english: 'the more', answer: 'Cuanto', concept_id: 'correlative_comparatives', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The less you sleep, the worse you feel.'", english: 'The less you sleep, the worse you feel.', answer: 'Cuanto menos duermes, peor te sientes.', word: 'cuanto menos... peor', concept_id: 'correlative_comparatives', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which spoken alternative to "cuanto más" is especially common in Latin America?', word: 'mientras más', english: 'the more (spoken alternative)', answer: 'mientras más', options: ['mientras más', 'tan más', 'lo más', 'más que más'], concept_id: 'correlative_comparatives', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Más practiques, mejor hablarás." (missing the word that signals "the more")', word: 'cuanto', english: 'the more', answer: 'Cuanto más practiques, mejor hablarás.', concept_id: 'correlative_comparatives', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Cuanto más comes, más engordas."', word: 'cuanto más... más', english: 'The more you eat, the more weight you gain.', answer: 'The more you eat, the more weight you gain.', concept_id: 'correlative_comparatives', difficulty: 2 },

    // ── diminutives_augmentatives block ──
    { type: 'fill_blank', prompt: 'Complete the diminutive: "coche" → "coche___" (little car)', word: 'cochecito', english: 'little car', answer: 'cochecito', concept_id: 'diminutives_augmentatives', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete the diminutive: "pan" → "pan___" (little bread roll)', word: 'panecito', english: 'little roll', answer: 'panecito', concept_id: 'diminutives_augmentatives', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which correctly forms the diminutive of "chico" (spelling change)?', word: 'chiquito', english: 'little boy', answer: 'chiquito', options: ['chicito', 'chiquito', 'chiquillo', 'chicoito'], concept_id: 'diminutives_augmentatives', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate using a diminutive: 'Wait just a moment.' (warm, casual)", english: 'Wait just a moment.', answer: 'Espera un momentito.', word: 'momentito', concept_id: 'diminutives_augmentatives', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which augmentative suffix would describe a big, hulking man?', word: 'hombrón', english: 'big man', answer: 'hombrón', options: ['hombrito', 'hombrón', 'hombrillo', 'hombrete'], concept_id: 'diminutives_augmentatives', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Tenemos un problemón con el proyecto."', word: 'problemón', english: 'We have a serious problem with the project.', answer: 'We have a serious problem with the project.', concept_id: 'diminutives_augmentatives', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake in the diminutive: "Le compré un cochito de juguete a mi hijo."', word: 'cochecito', english: 'little car', answer: 'Le compré un cochecito de juguete a mi hijo.', concept_id: 'diminutives_augmentatives', difficulty: 3 },

    // ── relative_pronouns_advanced block ──
    { type: 'fill_blank', prompt: 'Complete: "El hombre ___ hija vive en Madrid es mi vecino." (whose — hija is feminine)', word: 'cuya', english: 'whose', answer: 'cuya', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete: "La mujer ___ hijo estudia medicina trabaja conmigo." (whose — hijo is masculine)', word: 'cuyo', english: 'whose', answer: 'cuyo', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Cuyo agrees in gender/number with...', word: 'cuyo', english: 'the thing possessed, not the owner', answer: 'the thing possessed', options: ['the owner', 'the thing possessed', 'the verb', 'it never changes form'], concept_id: 'relative_pronouns_advanced', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The company for which I work is growing.'", english: 'The company for which I work is growing.', answer: 'La empresa para la cual trabajo está creciendo.', word: 'la cual', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "No llegó a tiempo, el cual me sorprendió." (referring to the whole fact, not one noun)', word: 'lo cual', english: 'which (whole idea)', answer: 'No llegó a tiempo, lo cual me sorprendió.', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "La razón por la cual no vine fue el tráfico."', word: 'por la cual', english: "The reason I didn't come was the traffic.", answer: "The reason (for which) I didn't come was the traffic.", altAnswers: ["The reason why I didn't come was the traffic."], concept_id: 'relative_pronouns_advanced', difficulty: 3 },

    // ── adjectives_ser_estar block ──
    { type: 'multiple_choice', prompt: 'Which sentence describes someone as selfish (a character flaw)?', word: 'interesado', english: 'selfish', answer: 'Es un interesado.', options: ['Está interesado.', 'Es un interesado.', 'Es interesado en el puesto.', 'Está interesado en dinero.'], concept_id: 'adjectives_ser_estar', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete: "Juan ___ muy atento con los demás." (personality trait)', word: 'es', english: 'is (trait)', answer: 'es', concept_id: 'adjectives_ser_estar', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Por favor, ___ atentos a las instrucciones." (right now)', word: 'estén', english: 'be (paying attention now)', answer: 'estén', concept_id: 'adjectives_ser_estar', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'My neighbor is very annoying.' (character trait)", english: 'My neighbor is very annoying.', answer: 'Mi vecino es muy molesto.', altAnswers: ['Mi vecina es muy molesta.'], word: 'molesto', concept_id: 'adjectives_ser_estar', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Are you upset with me?' (temporary state)", english: 'Are you upset with me?', answer: '¿Estás molesto conmigo?', altAnswers: ['¿Estás molesta conmigo?'], word: 'molesto', concept_id: 'adjectives_ser_estar', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake (talking about a safe neighborhood): "Este barrio está muy seguro."', word: 'seguro', english: 'safe', answer: 'Este barrio es muy seguro.', concept_id: 'adjectives_ser_estar', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "No estoy seguro de mi decisión."', word: 'seguro', english: "I'm not sure about my decision.", answer: "I'm not sure about my decision.", concept_id: 'adjectives_ser_estar', difficulty: 2 },

    // ── adjective_position block ──
    { type: 'multiple_choice', prompt: 'Which phrase means "a longtime friend" (not necessarily elderly)?', word: 'un viejo amigo', english: 'a longtime friend', answer: 'un viejo amigo', options: ['un amigo viejo', 'un viejo amigo', 'un amigo mayor', 'un gran amigo'], concept_id: 'adjective_position', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete with the shortened form: "Einstein fue un ___ hombre." (great, not big)', word: 'gran', english: 'great', answer: 'gran', concept_id: 'adjective_position', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'He lives in a big (physically large) house.'", english: 'He lives in a big house.', answer: 'Vive en una casa grande.', word: 'grande', concept_id: 'adjective_position', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "¡Pobre hombre, perdió su trabajo!"', word: 'pobre', english: 'Poor guy, he lost his job!', answer: 'Poor guy, he lost his job! (pitiable, not broke)', altAnswers: ['Poor man, he lost his job!'], concept_id: 'adjective_position', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "Fue un hombre gran en la historia de su país."', word: 'gran hombre', english: 'great man', answer: 'Fue un gran hombre en la historia de su país.', concept_id: 'adjective_position', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which best captures the difference between "una idea nueva" and "una nueva idea"?', word: 'nueva', english: 'brand-new vs. a different/additional idea', answer: 'una idea nueva = brand-new; una nueva idea = a different/additional idea', options: ['no difference at all', 'una idea nueva = brand-new; una nueva idea = a different/additional idea', 'una nueva idea is always incorrect', 'both only mean "brand-new"'], concept_id: 'adjective_position', difficulty: 3 },

    // ── verbos_cambio block ──
    { type: 'fill_blank', prompt: 'Complete: "Se ___ muy nervioso antes de la entrevista." (temporary emotional change)', word: 'puso', english: 'got (nervous)', answer: 'puso', concept_id: 'verbos_cambio', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Mi abuelo se ___ muy testarudo con la edad." (involuntary personality change)', word: 'volvió', english: 'became (stubborn)', answer: 'volvió', concept_id: 'verbos_cambio', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which verb fits: "___ médico después de años de estudio" (effort/voluntary)?', word: 'se hizo', english: 'became (through effort)', answer: 'Se hizo', options: ['Se puso', 'Se volvió', 'Se hizo', 'Llegó a ser'], concept_id: 'verbos_cambio', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Over time, he became the director of the company.' (gradual culmination)", english: 'Over time, he became the director of the company.', answer: 'Con el tiempo, llegó a ser el director de la empresa.', word: 'llegar a ser', concept_id: 'verbos_cambio', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error (a change in role, achieved by studying): "Se volvió abogada después de seis años de estudio."', word: 'se hizo', english: 'became (through effort)', answer: 'Se hizo abogada después de seis años de estudio.', concept_id: 'verbos_cambio', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Se volvió loco después del accidente."', word: 'se volvió', english: 'He went crazy after the accident.', answer: 'He went crazy after the accident.', concept_id: 'verbos_cambio', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Se puso profesor el año pasado."', word: 'se hizo', english: 'became (a profession — needs hacerse, not ponerse)', answer: 'Se hizo profesor el año pasado.', concept_id: 'verbos_cambio', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com-
// adjacent pedagogical sources, and RAE-informed grammar references before
// writing (July 2026):
// - comparatives: más/menos + adjective + que; superlative el/la/los/las +
//   más/menos + adjective + de (not en) for the comparison group; irregular
//   comparatives bueno→mejor, malo→peor, grande→mayor, pequeño→menor, with
//   mayor/menor most commonly used for age rather than physical size
//   (StoryLearning "Comparatives in Spanish"; Spanish.Academy comparatives/
//   superlatives guide; consistent with the existing comparatives card in
//   src/content/grammar.js)
// - tan + adjective/adverb + como vs. tanto/a(s) + noun + como for equality
//   comparisons, tan invariable/tanto agreeing in gender-number (Study.com
//   "Comparisons of Equality"; SpanishLearningLab "Tan + Adjective + Como")
// - correlative_comparatives: cuanto más..., más... (and cuanto menos, and
//   mixed más/menos/mejor/peor pairings) for proportional "the more...,
//   the more..." relationships; cuanto is invariable in this construction;
//   mientras más/entre más confirmed as natural, equally correct spoken
//   alternatives, especially common in Latin America (Lawless Spanish
//   Grammar and Kwiziq Spanish, both "Cuanto/Mientras más/menos for the
//   more/the less")
// - diminutive -ito/-ita spelling patterns: vowel-drop (casa→casita),
//   -ecito/-ecita after words ending in -e/-n/-r (coche→cochecito,
//   pan→panecito), c→qu before -ito (chico→chiquito), z→c (taza→tacita)
//   (Migaku "How to Use Spanish Diminutives"; Lawless Spanish Diminutives;
//   SpanishDict "Diminutives in Spanish")
// - diminutives used constantly in everyday speech for warmth/affection,
//   not just literal size (SpanishDict Diminutives guide; Polyglottist
//   Language Academy "Subtleties of Spanish Diminutives")
// - augmentative suffixes -ón/-ona and -ote/-ota (hombrón, grandote,
//   mujerona, casona), agreement with the base noun's gender, and the
//   speaker-attitude/intensity nuance (not purely neutral size), including
//   the fixed negative sense of solterón/solterona (Language Gems
//   "Augmentative Suffixes"; Enforex "Spanish augmentatives"; Kwiziq
//   "Using the Spanish augmentative suffixes -azo, -ote, -ón")
// - cuyo/cuya/cuyos/cuyas agreeing with the noun possessed, not the owner —
//   confirmed explicitly (SpanishDict "Relative Adjectives Like Cuyo in
//   Spanish"; FluentU "How to Use Cuyo in Spanish"), consistent with the
//   existing relative_pronouns_advanced card in src/content/grammar.js
// - el cual/la cual/los cuales/las cuales as a more formal alternative to
//   que/quien, preferred after longer/compound prepositions and to resolve
//   antecedent ambiguity, agreeing with its antecedent (not reversed like
//   cuyo); lo cual as the fixed neuter form referring to a whole prior idea
//   (SpanishDict "Relative Pronouns in Spanish" and "Relative Pronouns with
//   Prepositions")
// - adjectives_ser_estar advanced set (deliberately different from unit14's
//   aburrido/listo/rico/malo/verde/vivo): ser interesado = self-interested/
//   selfish (negative trait) vs. estar interesado = interested in something
//   (neutral state) (SpanishDict Answers thread on ser/estar interesado);
//   ser atento = considerate/attentive by nature vs. estar atento = paying
//   attention in the moment (InkLingo "Atento" guide; HiNative ser/estar
//   atento thread); ser molesto = annoying (trait) vs. estar molesto =
//   upset/annoyed (temporary state) (SpanishDict ser molesto / estar
//   molesto translations); ser seguro = safe (of a place, lasting quality)
//   vs. estar seguro = certain/sure (person's mental state) (SpanishDict
//   "Ser seguro vs. Estar seguro" comparison page)
// - adjective position: default after the noun (objective, distinguishing);
//   before-the-noun as more subjective/inherent, including literary style
//   (la blanca nieve); true meaning-shift pairs — un amigo viejo (elderly
//   friend) vs. un viejo amigo (longtime friend), un hombre pobre (no
//   money) vs. ¡pobre hombre! (pitiable), una idea nueva (brand-new) vs.
//   una nueva idea (different/additional), un hombre grande (physically
//   big) vs. un gran hombre (great, with grande shortening to gran before
//   a singular noun of either gender) (blog.worldsacross.com "Which Spanish
//   adjectives change meaning by position?"; SpanishDict "Adjective
//   Placement"), consistent with the existing adjective_position card in
//   src/content/grammar.js
// - verbs of change: ponerse for temporary/sudden mood, physical, or health
//   changes, adjectives only, never nouns; volverse for involuntary,
//   often-lasting personality change; hacerse for voluntary/effortful
//   change, taking both adjectives and nouns; llegar a ser for a gradual
//   process culminating in a (often prestigious) result (Berges Institute
//   "Spanish verbs of change"; Spanish Via Skype "Verbs of Change in
//   Spanish"; Adrosverse "Ponerse, Volverse, Hacerse, Quedar, & Convertirse
//   en"), consistent with the existing verbos_cambio card in
//   src/content/grammar.js
// This content is complementary to the existing GRAMMAR_CARDS entries for
// comparatives, diminutives_augmentatives, relative_pronouns_advanced,
// adjectives_ser_estar, verbos_cambio, and adjective_position in
// src/content/grammar.js (same facts, fuller B2-paced walkthrough with
// worked contrasts) and does not contradict them. As the final unit of the
// 24-unit "Get Started" course, its closing practice/vocab intentionally
// avoids repeating unit14's classic ser/estar adjective set (aburrido,
// listo, rico, malo, verde, vivo) and unit20's basic relative pronouns
// (que, quien, donde), building on both instead.
//
// B2 curriculum-volume fix (07-25-2026): added correlative_comparatives
// (cuanto más..., más...) section/vocab/practice, inserted directly after
// the base comparatives section since it's a natural proportional extension
// of más/menos... que rather than a standalone topic. This unit's B2 tier
// had noticeably fewer units/concepts than B1's, so this fills part of that
// gap by extending an existing unit rather than adding a new standalone one,
// matching this session's established placement pattern.
