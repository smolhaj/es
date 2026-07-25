// Unit — Technology & Digital Life (B2)
// Covers: technology_digital_life
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified via WebSearch against the RAE, SpanishDict, and
// established Spanish tech-vocabulary guides before writing — see the audit
// note at the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar), and also a
// vocabulary-volume fix: B2's vocabulary count was noticeably thinner than
// B1's, and this unit closes part of that gap with a domain — everyday
// technology and online life — barely covered elsewhere in the curriculum.
// Reuses grammar already taught (impersonal/passive se, present perfect)
// rather than introducing a new grammar structure.

export default {
  sections: [
    {
      heading: 'Everyday Tech: Devices, Apps, and the Cloud',
      paragraphs: [
        "You already know the basics — descargar (to download), subir (to upload), conectar(se) (to connect) — from earlier units. This section fills in the vocabulary you need to actually talk about your devices and how you use them day to day. Start with the hardware and software: un dispositivo (a device) is the general word covering your phone, laptop, or tablet; una aplicación (an app, often shortened to una app in casual speech) runs on it; and la pantalla (the screen) is what you're looking at right now.",
        "Software needs upkeep, and Spanish has a clean set of verbs for that: instalar (to install) and its opposite desinstalar (to uninstall) — you already met instalar in an earlier unit — plus actualizar (to update), which you'll hear constantly: Tengo que actualizar la aplicación (\"I have to update the app\"). When something goes wrong, borrar (to delete) undoes a mistake — Borré el archivo por error (\"I deleted the file by mistake\") — and guardar, which you already know for \"to keep/save,\" does exactly that job for files too: Guarda el documento antes de cerrarlo (\"Save the document before closing it\").",
        "Two more essentials round out this everyday layer: el archivo (the file) is whatever you're saving, downloading, or sharing, and la nube (the cloud) is where a huge amount of it now lives instead of on the device itself — Tengo todas mis fotos en la nube (\"I have all my photos in the cloud\"). To find things online, el navegador (the browser) is the program you use, and el buscador (the search engine) is specifically the tool — like Google — that searches within it; un enlace (a link) is what you click to jump somewhere else.",
      ],
      examples: [
        { es: 'Necesito comprar un dispositivo nuevo; este ya no funciona bien.', en: 'I need to buy a new device; this one doesn\'t work well anymore.' },
        { es: 'Esta aplicación se actualiza automáticamente.', en: 'This app updates automatically.' },
        { es: 'Se me rompió la pantalla del móvil.', en: 'My phone screen broke.' },
        { es: 'Guardé el archivo en la nube por si acaso.', en: 'I saved the file in the cloud just in case.' },
        { es: 'Haz clic en este enlace para ver el artículo completo.', en: 'Click this link to see the full article.' },
        { es: 'Prefiero ese buscador porque es más rápido.', en: 'I prefer that search engine because it\'s faster.' },
      ],
      commonMistakes: [
        'Don\'t confuse el navegador (the browser, the program) with el buscador (the search engine, like Google, that runs inside it) — you open a navegador and then use a buscador within it.',
        'Actualizar means "to update" (software, information), not "to make current/topical" the way English sometimes stretches "actualize" — for that broader English sense, Spanish would use other verbs entirely.',
        'La nube in a tech context always means "the cloud" (online storage) — context makes this clear, since the same word also means an actual weather cloud, but a native speaker never confuses the two given the sentence around it.',
      ],
    },
    {
      heading: 'Staying Safe Online: Passwords, Privacy, and Hacking',
      paragraphs: [
        "The second half of digital life is protecting it. La contraseña (the password) is the word you'll use constantly: Se me olvidó la contraseña otra vez (\"I forgot my password again\" — notice this reuses the accidental se construction from earlier in the curriculum). El usuario (the username, or more broadly \"the user\" of a system) is what you pair it with to log in.",
        "When things go wrong, un virus (a virus) can infect a device the same way it does in English, and hackear (to hack) describes someone breaking into an account or system without permission — Le hackearon la cuenta de correo (\"Their email account got hacked\"). One note on this word: the RAE's own preferred, fully hispanicized spelling is jaquear, but hackear is overwhelmingly what you'll actually see and hear in real-world Spanish, in both Spain and Latin America — recognize both, and feel free to use hackear yourself. The broader field of protecting yourself online is la ciberseguridad (cybersecurity).",
        "Finally, every action you take online adds to your huella digital (your digital footprint) — the trail of data and activity you leave behind, whether you compartes (share) or publicas (post) something on purpose, or it's simply collected in the background. Proteger tus datos (\"to protect your data\") and no compartir tu contraseña con nadie (\"don't share your password with anyone\") are the two pieces of advice that come up again and again in any conversation about staying safe online.",
      ],
      examples: [
        { es: 'Se me olvidó la contraseña otra vez.', en: 'I forgot my password again.' },
        { es: '¿Cuál es tu nombre de usuario?', en: 'What\'s your username?' },
        { es: 'Le hackearon la cuenta de correo la semana pasada.', en: 'Their email account got hacked last week.' },
        { es: 'La empresa invierte mucho en ciberseguridad.', en: 'The company invests a lot in cybersecurity.' },
        { es: 'Todo lo que publicas queda en tu huella digital.', en: 'Everything you post stays as part of your digital footprint.' },
        { es: 'Nunca compartas tu contraseña con nadie.', en: 'Never share your password with anyone.' },
      ],
      commonMistakes: [
        'Hackear needs no accent and conjugates as a regular -ar verb (hackeo, hackeaste, hackearon) — don\'t try to force it into an irregular pattern just because it looks borrowed.',
        'Huella digital in a tech/privacy context means "digital footprint" (your online trail), not a literal fingerprint — Spanish uses the same phrase for both meanings, so context (talking about online activity vs. unlocking a phone with your thumb) does the disambiguating, just as it does in English with "digital footprint."',
        'Usuario means both "username" and, more broadly, "user" (of an app, a system, a service) — el usuario promedio ("the average user") uses the second sense, not the login-name sense.',
      ],
    },
  ],

  vocab: [
    { es: 'el dispositivo', en: 'the device', example: 'Necesito comprar un dispositivo nuevo.', exampleEn: 'I need to buy a new device.' },
    { es: 'la aplicación', en: 'the app / application', example: 'Descargué una aplicación nueva.', exampleEn: 'I downloaded a new app.' },
    { es: 'la pantalla', en: 'the screen', example: 'Se me rompió la pantalla del móvil.', exampleEn: 'My phone screen broke.' },
    { es: 'actualizar', en: 'to update', example: 'Tengo que actualizar la aplicación.', exampleEn: 'I have to update the app.' },
    { es: 'desinstalar', en: 'to uninstall', example: 'Voy a desinstalar esta aplicación.', exampleEn: "I'm going to uninstall this app." },
    { es: 'borrar', en: 'to delete', example: 'Borré el archivo por error.', exampleEn: 'I deleted the file by mistake.' },
    { es: 'el archivo', en: 'the file', example: 'Guardé el archivo en la nube.', exampleEn: 'I saved the file in the cloud.' },
    { es: 'la nube', en: 'the cloud (online storage)', example: 'Tengo todas mis fotos en la nube.', exampleEn: 'I have all my photos in the cloud.' },
    { es: 'el navegador', en: 'the (web) browser', example: 'Cierra el navegador y vuelve a abrirlo.', exampleEn: 'Close the browser and reopen it.' },
    { es: 'el buscador', en: 'the search engine', example: 'Prefiero ese buscador porque es más rápido.', exampleEn: 'I prefer that search engine because it\'s faster.' },
    { es: 'el enlace', en: 'the link', example: 'Haz clic en este enlace.', exampleEn: 'Click this link.' },
    { es: 'la contraseña', en: 'the password', example: 'Se me olvidó la contraseña otra vez.', exampleEn: 'I forgot my password again.' },
    { es: 'el usuario / la usuaria', en: 'the username / the user', example: '¿Cuál es tu nombre de usuario?', exampleEn: "What's your username?" },
    { es: 'el virus', en: 'the virus', example: 'El dispositivo tiene un virus.', exampleEn: 'The device has a virus.' },
    { es: 'hackear', en: 'to hack', example: 'Le hackearon la cuenta de correo.', exampleEn: 'Their email account got hacked.' },
    { es: 'la ciberseguridad', en: 'cybersecurity', example: 'La empresa invierte mucho en ciberseguridad.', exampleEn: 'The company invests a lot in cybersecurity.' },
    { es: 'la huella digital', en: 'the digital footprint', example: 'Todo lo que publicas queda en tu huella digital.', exampleEn: 'Everything you post stays as part of your digital footprint.' },
    { es: 'proteger', en: 'to protect', example: 'Es importante proteger tus datos personales.', exampleEn: "It's important to protect your personal data." },
    { es: 'la red social', en: 'the social network / social media platform', example: 'Pasa demasiado tiempo en las redes sociales.', exampleEn: 'He spends too much time on social media.' },
    { es: 'el wifi', en: 'wifi', example: '¿Tienen wifi gratis aquí?', exampleEn: 'Do you have free wifi here?' },
  ],

  practice: [
    // ── technology_digital_life block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete: "Tengo que ___ la aplicación." (to update)', word: 'actualizar', english: 'to update', answer: 'actualizar', concept_id: 'technology_digital_life', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which word means "the browser" (the program), not "the search engine"?', word: 'navegador', english: 'browser', answer: 'el navegador', options: ['el navegador', 'el buscador', 'el enlace', 'la nube'], concept_id: 'technology_digital_life', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I forgot my password again.'", english: 'I forgot my password again.', answer: 'Se me olvidó la contraseña otra vez.', word: 'la contraseña', concept_id: 'technology_digital_life', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Todo lo que publicas queda en tu ___ digital." (footprint)', word: 'huella', english: 'footprint', answer: 'huella', concept_id: 'technology_digital_life', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Borré el buscador por error." (should be the file, not the search engine)', word: 'archivo', english: 'file', answer: 'Borré el archivo por error.', concept_id: 'technology_digital_life', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Le hackearon la cuenta de correo la semana pasada."', word: 'hackear', english: 'Their email account got hacked last week.', answer: 'Their email account got hacked last week.', concept_id: 'technology_digital_life', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which pair correctly means "to install" / "to uninstall"?', word: 'instalar / desinstalar', english: 'install / uninstall', answer: 'instalar / desinstalar', options: ['instalar / desinstalar', 'actualizar / borrar', 'descargar / subir', 'conectar / desconectar'], concept_id: 'technology_digital_life', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Tengo todas mis fotos en la ___." (the cloud)', word: 'nube', english: 'cloud', answer: 'nube', concept_id: 'technology_digital_life', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It's important to protect your personal data.'", english: "It's important to protect your personal data.", answer: 'Es importante proteger tus datos personales.', word: 'proteger', concept_id: 'technology_digital_life', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which word covers your phone, laptop, or tablet in general?', word: 'dispositivo', english: 'device', answer: 'el dispositivo', options: ['el dispositivo', 'la pantalla', 'el enlace', 'el usuario'], concept_id: 'technology_digital_life', difficulty: 1 },
    { type: 'translation_to_english', prompt: 'Translate: "La empresa invierte mucho en ciberseguridad."', word: 'ciberseguridad', english: 'The company invests a lot in cybersecurity.', answer: 'The company invests a lot in cybersecurity.', concept_id: 'technology_digital_life', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against the RAE (Real Academia
// Española), SpanishDict, and established Spanish tech-vocabulary sources
// before writing (July 2026):
// - hackear: registered in the RAE's own Diccionario de la lengua española
//   as a transitive computing verb, though the RAE's officially preferred
//   fully hispanicized spelling is jaquear; hackear remains, by the RAE's
//   own acknowledgment, the overwhelmingly more common form in actual use
//   across Spain and Latin America — confirmed via RAE's "¿Es correcto el
//   uso de «hackear»?" duda lingüística page.
// - huella digital: confirmed to genuinely carry two related but distinct
//   senses in real usage — "digital footprint" (the trail of data/activity
//   a person leaves online, whether shared deliberately or collected
//   passively) and, in a narrower technical sense, "device/browser
//   fingerprint" — both senses are standard, and context disambiguates,
//   the same way it does in English (Wikipedia's "Huella digital en
//   Internet" article; Kaspersky and Trend Micro's Spanish-language
//   digital-footprint explainer pages).
// - la nube as the standard, universally understood term for "the cloud"
//   in the online-storage sense, distinct from but homographic with the
//   literal weather-cloud sense (context disambiguates in both languages).
// - el navegador (browser, the program) vs. el buscador (search engine,
//   the tool used within it) as genuinely distinct, commonly confused
//   terms in everyday Spanish tech vocabulary.
// - actualizar (update software/info) vs. the narrower/different scope of
//   English "actualize" — confirmed these are false-friend-adjacent but
//   not identical in the update/software sense actually needed here.
// This content does not duplicate any existing GRAMMAR_CARDS or vocabulary
// entry; the handful of words already taught elsewhere (descargar, subir,
// conectar/desconectar, compartir, publicar, instalar, guardar, buscar) are
// referenced in prose as known background rather than re-taught from
// scratch, consistent with this unit's "reuses existing grammar, adds new
// vocabulary" functional-unit design.
//
// B2 curriculum-volume fix (07-25-2026): built as a new standalone unit
// (rather than folded into an existing one) because everyday technology
// and digital-life vocabulary was a genuinely uncovered domain, not an
// extension of an already-taught topic — unlike this batch's other two
// additions (correlative_comparatives, topic_shift_connectors), which
// extended existing grammar units. B2's vocabulary count was noticeably
// thinner than B1's; this is one of two new vocab-focused units (the
// other being Environment & Sustainability) built to help close that gap.