// STAGING FILE — C1 vocabulary batch (existing domains, filling the C1 gap)
// vocabulary.js has only 80 C1 words vs 185-290 at every other level; this batch adds ~113 more.
// Each entry: { es, en, cefr, domain, example, exampleEn, frequencyRank, register }
// register follows the same scale as src/content/idioms.js: colloquial | informal | neutral | formal
// To be merged into src/content/vocabulary.js by the orchestrating session — do not import directly.

export const STAGED_VOCAB = [
  // ── PROFESSIONS ──────────────────────────────────────────────────────────
  { es: 'funcionario', en: 'civil servant / public official', cefr: 'C1', domain: 'professions', frequencyRank: 480, register: 'neutral', example: 'Su padre es funcionario del ayuntamiento desde hace veinte años.', exampleEn: 'Her father has been a civil servant at the town hall for twenty years.' },
  { es: 'gerente', en: 'manager', cefr: 'C1', domain: 'professions', frequencyRank: 420, register: 'neutral', example: 'El gerente aprobó el nuevo horario de la tienda.', exampleEn: 'The manager approved the new store schedule.' },
  { es: 'autónomo', en: 'self-employed (worker) / freelancer (a formal legal status in Spain, with mandatory registration; Latin America more often uses "trabajador independiente" or "freelance" for the same idea)', cefr: 'C1', domain: 'professions', frequencyRank: 450, register: 'neutral', example: 'Dejó su empleo fijo y ahora trabaja como autónomo desde casa.', exampleEn: 'He left his permanent job and now works freelance from home.' },
  { es: 'socio', en: 'business partner / member (of a club or firm)', cefr: 'C1', domain: 'professions', frequencyRank: 400, register: 'neutral', example: 'Fundó la empresa con dos socios de la universidad.', exampleEn: 'He founded the company with two partners from university.' },
  { es: 'artesano', en: 'craftsman / artisan', cefr: 'C1', domain: 'professions', frequencyRank: 520, register: 'neutral', example: 'El artesano tarda semanas en terminar cada mueble a mano.', exampleEn: 'The craftsman takes weeks to finish each piece of furniture by hand.' },
  { es: 'diplomático', en: 'diplomat', cefr: 'C1', domain: 'professions', frequencyRank: 460, register: 'neutral', example: 'Trabajó como diplomático en tres embajadas distintas.', exampleEn: 'He worked as a diplomat at three different embassies.' },
  { es: 'notario', en: 'notary (public)', cefr: 'C1', domain: 'professions', frequencyRank: 500, register: 'formal', example: 'Tuvimos que firmar la escritura ante notario.', exampleEn: 'We had to sign the deed before a notary.' },
  { es: 'burócrata', en: 'bureaucrat', cefr: 'C1', domain: 'professions', frequencyRank: 540, register: 'neutral', example: 'Un burócrata sin nombre fue quien rechazó la solicitud.', exampleEn: 'It was some nameless bureaucrat who rejected the application.' },

  // ── EMOTIONS ─────────────────────────────────────────────────────────────
  { es: 'resentimiento', en: 'resentment', cefr: 'C1', domain: 'emotions', frequencyRank: 430, register: 'neutral', example: 'Todavía guarda cierto resentimiento hacia su antiguo jefe.', exampleEn: 'She still holds a certain resentment towards her former boss.' },
  { es: 'indignación', en: 'indignation / outrage', cefr: 'C1', domain: 'emotions', frequencyRank: 400, register: 'neutral', example: 'La noticia provocó indignación entre los vecinos del barrio.', exampleEn: 'The news provoked outrage among the neighbourhood residents.' },
  { es: 'melancolía', en: 'melancholy', cefr: 'C1', domain: 'emotions', frequencyRank: 450, register: 'neutral', example: 'Una ligera melancolía lo invadió al ver la casa vacía.', exampleEn: 'A slight melancholy came over him as he saw the empty house.' },
  { es: 'apatía', en: 'apathy', cefr: 'C1', domain: 'emotions', frequencyRank: 470, register: 'neutral', example: 'La apatía de los votantes preocupa a los partidos políticos.', exampleEn: "Voter apathy worries the political parties." },
  { es: 'desconfianza', en: 'distrust / mistrust', cefr: 'C1', domain: 'emotions', frequencyRank: 380, register: 'neutral', example: 'Mostró desconfianza ante una oferta que parecía demasiado buena.', exampleEn: 'He showed distrust towards an offer that seemed too good.' },
  { es: 'rencor', en: 'rancour / grudge', cefr: 'C1', domain: 'emotions', frequencyRank: 460, register: 'neutral', example: 'Nunca le guardó rencor, a pesar de todo lo ocurrido.', exampleEn: 'She never held a grudge against him, despite everything that happened.' },
  { es: 'envidia', en: 'envy', cefr: 'C1', domain: 'emotions', frequencyRank: 350, register: 'neutral', example: 'Le costaba disimular la envidia que sentía por el éxito de su hermano.', exampleEn: "It was hard for him to hide the envy he felt over his brother's success." },
  { es: 'gratitud', en: 'gratitude', cefr: 'C1', domain: 'emotions', frequencyRank: 390, register: 'neutral', example: 'Expresó su gratitud a todos los que la ayudaron durante la enfermedad.', exampleEn: 'She expressed her gratitude to everyone who helped her during her illness.' },

  // ── TECHNOLOGY ───────────────────────────────────────────────────────────
  { es: 'dispositivo', en: 'device', cefr: 'C1', domain: 'technology', frequencyRank: 380, register: 'neutral', example: 'Puedes sincronizar la aplicación en varios dispositivos a la vez.', exampleEn: 'You can sync the app across several devices at once.' },
  { es: 'almacenamiento', en: 'storage', cefr: 'C1', domain: 'technology', frequencyRank: 420, register: 'neutral', example: 'El teléfono se quedó sin almacenamiento para más fotos.', exampleEn: 'The phone ran out of storage for more photos.' },
  { es: 'servidor', en: 'server', cefr: 'C1', domain: 'technology', frequencyRank: 440, register: 'neutral', example: 'El servidor se cayó durante unos minutos esta mañana.', exampleEn: 'The server went down for a few minutes this morning.' },
  { es: 'copia de seguridad', en: 'backup (Spain and general/technical Spanish; "respaldo" is more common in everyday Latin American usage)', cefr: 'C1', domain: 'technology', frequencyRank: 460, register: 'neutral', example: 'Haz una copia de seguridad antes de actualizar el sistema.', exampleEn: 'Make a backup before updating the system.' },
  { es: 'ciberseguridad', en: 'cybersecurity', cefr: 'C1', domain: 'technology', frequencyRank: 500, register: 'neutral', example: 'La empresa invirtió mucho en ciberseguridad tras el ataque informático.', exampleEn: 'The company invested heavily in cybersecurity after the cyberattack.' },
  { es: 'geolocalización', en: 'geolocation', cefr: 'C1', domain: 'technology', frequencyRank: 540, register: 'neutral', example: 'La aplicación usa la geolocalización para mostrar restaurantes cercanos.', exampleEn: 'The app uses geolocation to show nearby restaurants.' },

  // ── HEALTH ───────────────────────────────────────────────────────────────
  { es: 'recaída', en: 'relapse', cefr: 'C1', domain: 'health', frequencyRank: 430, register: 'neutral', example: 'Tras la recaída, el médico le recomendó más reposo.', exampleEn: 'After the relapse, the doctor recommended more rest.' },
  { es: 'rehabilitación', en: 'rehabilitation', cefr: 'C1', domain: 'health', frequencyRank: 460, register: 'neutral', example: 'Empezó la rehabilitación de la rodilla un mes después de la operación.', exampleEn: 'She started knee rehabilitation a month after the operation.' },
  { es: 'insomnio', en: 'insomnia', cefr: 'C1', domain: 'health', frequencyRank: 400, register: 'neutral', example: 'El insomnio le impide dormir más de cuatro horas seguidas.', exampleEn: 'Insomnia keeps him from sleeping more than four hours straight.' },
  { es: 'inmunidad', en: 'immunity', cefr: 'C1', domain: 'health', frequencyRank: 420, register: 'neutral', example: 'La vacuna refuerza la inmunidad frente al virus.', exampleEn: 'The vaccine strengthens immunity against the virus.' },
  { es: 'crónico', en: 'chronic', cefr: 'C1', domain: 'health', frequencyRank: 350, register: 'neutral', example: 'Sufre una enfermedad crónica que requiere tratamiento continuo.', exampleEn: 'He suffers from a chronic illness that requires ongoing treatment.' },

  // ── EDUCATION ────────────────────────────────────────────────────────────
  { es: 'formación', en: 'training / education (the general term in Spain; Latin America favours "capacitación" for job-related training)', cefr: 'C1', domain: 'education', frequencyRank: 320, register: 'neutral', example: 'La empresa ofrece formación continua a todos sus empleados.', exampleEn: 'The company offers ongoing training to all its employees.' },
  { es: 'alumnado', en: 'student body', cefr: 'C1', domain: 'education', frequencyRank: 450, register: 'formal', example: 'El nuevo plan busca mejorar el rendimiento del alumnado.', exampleEn: "The new plan seeks to improve the student body's performance." },
  { es: 'rendimiento', en: 'performance (academic, work, or technical)', cefr: 'C1', domain: 'education', frequencyRank: 360, register: 'neutral', example: 'Su rendimiento académico mejoró mucho el último trimestre.', exampleEn: 'His academic performance improved a lot last term.' },
  { es: 'capacitación', en: 'training (job-related; the everyday term in Latin America — Spain generally prefers "formación" in this sense)', cefr: 'C1', domain: 'education', frequencyRank: 470, register: 'neutral', example: 'La fábrica ofrece capacitación a los nuevos operarios durante el primer mes.', exampleEn: 'The factory provides training to new operators during the first month.' },
  { es: 'escolarización', en: 'schooling / school enrolment', cefr: 'C1', domain: 'education', frequencyRank: 520, register: 'formal', example: 'La tasa de escolarización infantil ha aumentado en la última década.', exampleEn: "Children's school enrolment rate has risen over the last decade." },

  // ── NATURE ───────────────────────────────────────────────────────────────
  { es: 'vegetación', en: 'vegetation', cefr: 'C1', domain: 'nature', frequencyRank: 400, register: 'neutral', example: 'La vegetación se volvía más densa a medida que subíamos la montaña.', exampleEn: 'The vegetation grew denser as we climbed the mountain.' },
  { es: 'fauna', en: 'fauna / wildlife', cefr: 'C1', domain: 'nature', frequencyRank: 420, register: 'neutral', example: 'El parque nacional protege una fauna muy variada.', exampleEn: 'The national park protects a very varied wildlife.' },
  { es: 'depredador', en: 'predator', cefr: 'C1', domain: 'nature', frequencyRank: 440, register: 'neutral', example: 'El águila es uno de los principales depredadores de la zona.', exampleEn: 'The eagle is one of the main predators in the area.' },
  { es: 'extinción', en: 'extinction', cefr: 'C1', domain: 'nature', frequencyRank: 380, register: 'neutral', example: 'Varias especies marinas están en peligro de extinción.', exampleEn: 'Several marine species are in danger of extinction.' },
  { es: 'litoral', en: 'coastline / coastal area', cefr: 'C1', domain: 'nature', frequencyRank: 460, register: 'formal', example: 'El temporal causó destrozos en todo el litoral mediterráneo.', exampleEn: 'The storm caused damage all along the Mediterranean coastline.' },

  // ── ADJECTIVES ───────────────────────────────────────────────────────────
  { es: 'meticuloso', en: 'meticulous', cefr: 'C1', domain: 'adjectives', frequencyRank: 420, register: 'neutral', example: 'Es tan meticuloso que revisa cada informe tres veces.', exampleEn: 'He is so meticulous that he checks every report three times.' },
  { es: 'versátil', en: 'versatile', cefr: 'C1', domain: 'adjectives', frequencyRank: 400, register: 'neutral', example: 'Buscan un empleado versátil, capaz de asumir varias tareas.', exampleEn: 'They are looking for a versatile employee, capable of taking on several tasks.' },
  { es: 'escéptico', en: 'sceptical', cefr: 'C1', domain: 'adjectives', frequencyRank: 380, register: 'neutral', example: 'Se mostró escéptico ante las promesas del vendedor.', exampleEn: "He remained sceptical about the salesman's promises." },
  { es: 'pragmático', en: 'pragmatic', cefr: 'C1', domain: 'adjectives', frequencyRank: 410, register: 'neutral', example: 'Prefiere un enfoque pragmático antes que discusiones teóricas.', exampleEn: 'She prefers a pragmatic approach over theoretical discussions.' },
  { es: 'autodidacta', en: 'self-taught', cefr: 'C1', domain: 'adjectives', frequencyRank: 470, register: 'neutral', example: 'Es músico autodidacta; nunca ha tomado una clase de guitarra.', exampleEn: 'He is a self-taught musician; he has never taken a guitar lesson.' },
  { es: 'incisivo', en: 'incisive / sharp (wit, comment)', cefr: 'C1', domain: 'adjectives', frequencyRank: 440, register: 'neutral', example: 'Hizo un comentario incisivo que dejó a todos pensando.', exampleEn: 'She made an incisive comment that left everyone thinking.' },
  { es: 'tenaz', en: 'tenacious', cefr: 'C1', domain: 'adjectives', frequencyRank: 400, register: 'neutral', example: 'Gracias a su carácter tenaz, consiguió terminar la carrera trabajando a la vez.', exampleEn: 'Thanks to his tenacious character, he managed to finish his degree while working at the same time.' },
  { es: 'resiliente', en: 'resilient', cefr: 'C1', domain: 'adjectives', frequencyRank: 490, register: 'neutral', example: 'La comunidad demostró ser muy resiliente tras el terremoto.', exampleEn: 'The community proved to be very resilient after the earthquake.' },
  { es: 'obstinado', en: 'obstinate / stubborn', cefr: 'C1', domain: 'adjectives', frequencyRank: 430, register: 'neutral', example: 'Es tan obstinado que nunca admite que se equivoca.', exampleEn: 'He is so obstinate that he never admits he is wrong.' },
  { es: 'controvertido', en: 'controversial', cefr: 'C1', domain: 'adjectives', frequencyRank: 390, register: 'neutral', example: 'La reforma fiscal resultó ser una medida muy controvertida.', exampleEn: 'The tax reform turned out to be a highly controversial measure.' },

  // ── VERBS ────────────────────────────────────────────────────────────────
  { es: 'padecer', en: 'to suffer from / to endure', cefr: 'C1', domain: 'verbs', frequencyRank: 340, register: 'neutral', example: 'Padece insomnio desde que empezó el nuevo trabajo.', exampleEn: "He has suffered from insomnia since he started the new job." },
  { es: 'abarcar', en: 'to encompass / to cover (a scope)', cefr: 'C1', domain: 'verbs', frequencyRank: 360, register: 'neutral', example: 'El curso abarca desde la gramática básica hasta la redacción avanzada.', exampleEn: 'The course covers everything from basic grammar to advanced writing.' },
  { es: 'plasmar', en: 'to capture / to express (an idea, in writing or art)', cefr: 'C1', domain: 'verbs', frequencyRank: 400, register: 'neutral', example: 'Intentó plasmar en el cuadro toda la tristeza de aquel día.', exampleEn: 'He tried to capture all the sadness of that day in the painting.' },
  { es: 'desempeñar', en: 'to carry out / to perform (a role or duty)', cefr: 'C1', domain: 'verbs', frequencyRank: 300, register: 'neutral', example: 'Desempeñó el cargo de directora durante casi diez años.', exampleEn: 'She held the position of director for almost ten years.' },
  { es: 'subsanar', en: 'to rectify / to fix (an error)', cefr: 'C1', domain: 'verbs', frequencyRank: 420, register: 'formal', example: 'El técnico subsanó el fallo antes de que afectara a más usuarios.', exampleEn: 'The technician fixed the error before it affected more users.' },
  { es: 'desencadenar', en: 'to trigger / to set off', cefr: 'C1', domain: 'verbs', frequencyRank: 370, register: 'neutral', example: 'La subida de precios desencadenó protestas en varias ciudades.', exampleEn: 'The price increase triggered protests in several cities.' },
  { es: 'propiciar', en: 'to foster / to bring about', cefr: 'C1', domain: 'verbs', frequencyRank: 390, register: 'formal', example: 'El acuerdo propició una mejora en las relaciones entre los dos países.', exampleEn: 'The agreement fostered an improvement in relations between the two countries.' },
  { es: 'incidir', en: 'to have an impact (on) / to affect', cefr: 'C1', domain: 'verbs', frequencyRank: 350, register: 'neutral', example: 'El clima incide directamente en la producción agrícola.', exampleEn: 'The weather has a direct impact on agricultural production.' },
  { es: 'matizar', en: 'to qualify / to add a nuance to (a statement)', cefr: 'C1', domain: 'verbs', frequencyRank: 380, register: 'neutral', example: 'Quiso matizar sus declaraciones ante la prensa al día siguiente.', exampleEn: 'He wanted to qualify his statements to the press the next day.' },
  { es: 'entablar', en: 'to strike up / to initiate (a conversation, relationship, negotiation)', cefr: 'C1', domain: 'verbs', frequencyRank: 410, register: 'neutral', example: 'Entablaron una amistad que duraría toda la vida.', exampleEn: 'They struck up a friendship that would last a lifetime.' },

  // ── NOUNS ────────────────────────────────────────────────────────────────
  { es: 'desempeño', en: 'performance (job, task)', cefr: 'C1', domain: 'nouns', frequencyRank: 350, register: 'neutral', example: 'Evalúan el desempeño de cada empleado una vez al año.', exampleEn: "They evaluate each employee's performance once a year." },
  { es: 'envergadura', en: 'scope / magnitude (of a project or issue)', cefr: 'C1', domain: 'nouns', frequencyRank: 430, register: 'formal', example: 'Es un proyecto de gran envergadura que llevará varios años.', exampleEn: 'It is a large-scale project that will take several years.' },
  { es: 'vertiente', en: 'aspect / facet (of an issue); slope', cefr: 'C1', domain: 'nouns', frequencyRank: 440, register: 'neutral', example: 'Hay que analizar cada vertiente del problema antes de decidir.', exampleEn: 'Every aspect of the problem must be analysed before deciding.' },
  { es: 'panorama', en: 'overview / outlook', cefr: 'C1', domain: 'nouns', frequencyRank: 320, register: 'neutral', example: 'El panorama económico no invita al optimismo.', exampleEn: 'The economic outlook does not invite optimism.' },
  { es: 'hito', en: 'milestone', cefr: 'C1', domain: 'nouns', frequencyRank: 400, register: 'neutral', example: 'La primera vacuna supuso un hito en la historia de la medicina.', exampleEn: 'The first vaccine marked a milestone in the history of medicine.' },
  { es: 'índice', en: 'index / rate', cefr: 'C1', domain: 'nouns', frequencyRank: 360, register: 'neutral', example: 'El índice de natalidad ha bajado en los últimos años.', exampleEn: 'The birth rate has fallen in recent years.' },

  // ── ADVERBS ──────────────────────────────────────────────────────────────
  { es: 'notablemente', en: 'notably / markedly', cefr: 'C1', domain: 'adverbs', frequencyRank: 420, register: 'neutral', example: 'Las ventas han mejorado notablemente este trimestre.', exampleEn: 'Sales have improved notably this quarter.' },
  { es: 'considerablemente', en: 'considerably', cefr: 'C1', domain: 'adverbs', frequencyRank: 400, register: 'neutral', example: 'El precio del alquiler ha subido considerablemente en la ciudad.', exampleEn: 'Rent prices have risen considerably in the city.' },
  { es: 'presumiblemente', en: 'presumably', cefr: 'C1', domain: 'adverbs', frequencyRank: 460, register: 'formal', example: 'Presumiblemente, la reunión se retrasará hasta la próxima semana.', exampleEn: 'Presumably, the meeting will be postponed until next week.' },
  { es: 'deliberadamente', en: 'deliberately', cefr: 'C1', domain: 'adverbs', frequencyRank: 380, register: 'neutral', example: 'Evitó deliberadamente el tema durante toda la cena.', exampleEn: 'He deliberately avoided the subject throughout dinner.' },
  { es: 'simultáneamente', en: 'simultaneously', cefr: 'C1', domain: 'adverbs', frequencyRank: 410, register: 'neutral', example: 'Los dos equipos trabajaron simultáneamente en el mismo proyecto.', exampleEn: 'Both teams worked simultaneously on the same project.' },

  // ── CONNECTORS ───────────────────────────────────────────────────────────
  { es: 'por ende', en: 'therefore / hence', cefr: 'C1', domain: 'connectors', frequencyRank: 440, register: 'formal', example: 'No hubo suficiente presupuesto y, por ende, el proyecto se canceló.', exampleEn: 'There was not enough budget and, therefore, the project was cancelled.' },
  { es: 'en última instancia', en: 'ultimately / as a last resort', cefr: 'C1', domain: 'connectors', frequencyRank: 400, register: 'formal', example: 'En última instancia, la decisión depende del director general.', exampleEn: 'Ultimately, the decision rests with the general manager.' },
  { es: 'de ahí que', en: 'hence / that is why', cefr: 'C1', domain: 'connectors', frequencyRank: 430, register: 'formal', example: 'Llovió toda la semana; de ahí que se suspendiera el partido.', exampleEn: 'It rained all week; that is why the match was suspended.' },

  // ── PLACES ───────────────────────────────────────────────────────────────
  { es: 'urbanización', en: 'housing development / residential estate', cefr: 'C1', domain: 'places', frequencyRank: 460, register: 'neutral', example: 'Viven en una urbanización a las afueras de la ciudad.', exampleEn: 'They live in a housing development on the outskirts of the city.' },
  { es: 'casco antiguo', en: 'old town', cefr: 'C1', domain: 'places', frequencyRank: 420, register: 'neutral', example: 'Nos perdimos paseando por el casco antiguo de Toledo.', exampleEn: "We got lost wandering through Toledo's old town." },
  { es: 'emplazamiento', en: 'location / site', cefr: 'C1', domain: 'places', frequencyRank: 480, register: 'formal', example: 'Eligieron ese emplazamiento por su cercanía al puerto.', exampleEn: 'They chose that location because of its proximity to the port.' },
  { es: 'recinto', en: 'venue / enclosed premises', cefr: 'C1', domain: 'places', frequencyRank: 450, register: 'neutral', example: 'La feria se celebra en el recinto ferial de la ciudad.', exampleEn: "The fair is held at the city's exhibition venue." },

  // ── FAMILY ───────────────────────────────────────────────────────────────
  { es: 'unidad familiar', en: 'family unit', cefr: 'C1', domain: 'family', frequencyRank: 470, register: 'formal', example: 'La ayuda se calcula según los ingresos de la unidad familiar.', exampleEn: "The benefit is calculated based on the family unit's income." },
  { es: 'lazo', en: 'tie / bond', cefr: 'C1', domain: 'family', frequencyRank: 400, register: 'neutral', example: 'Mantienen un lazo muy fuerte a pesar de la distancia.', exampleEn: 'They maintain a very strong bond despite the distance.' },
  { es: 'clan', en: 'clan (extended family or close-knit group)', cefr: 'C1', domain: 'family', frequencyRank: 490, register: 'informal', example: 'Se reúne todo el clan familiar cada Navidad.', exampleEn: 'The whole family clan gets together every Christmas.' },

  // ── BODY ─────────────────────────────────────────────────────────────────
  { es: 'extremidades', en: 'limbs', cefr: 'C1', domain: 'body', frequencyRank: 420, register: 'neutral', example: 'El frío le entumecía las extremidades.', exampleEn: 'The cold was numbing his limbs.' },
  { es: 'musculatura', en: 'musculature', cefr: 'C1', domain: 'body', frequencyRank: 460, register: 'neutral', example: 'El fisioterapeuta le recomendó ejercicios para fortalecer la musculatura de la espalda.', exampleEn: 'The physiotherapist recommended exercises to strengthen his back musculature.' },
  { es: 'complexión', en: 'build / physique (NOT skin colour — that would be "tez" or "cutis")', cefr: 'C1', domain: 'body', frequencyRank: 500, register: 'formal', example: 'Es de complexión fuerte, casi atlética.', exampleEn: 'He has a strong, almost athletic build.' },

  // ── TIME ─────────────────────────────────────────────────────────────────
  { es: 'de antemano', en: 'beforehand / in advance', cefr: 'C1', domain: 'time', frequencyRank: 380, register: 'neutral', example: 'Avísanos de antemano si no puedes venir a la reunión.', exampleEn: "Let us know beforehand if you can't come to the meeting." },
  { es: 'a la larga', en: 'in the long run', cefr: 'C1', domain: 'time', frequencyRank: 360, register: 'neutral', example: 'A la larga, ahorrar un poco cada mes marca la diferencia.', exampleEn: 'In the long run, saving a little each month makes a difference.' },

  // ── FOOD ─────────────────────────────────────────────────────────────────
  { es: 'aditivo', en: 'food additive', cefr: 'C1', domain: 'food', frequencyRank: 470, register: 'neutral', example: 'Prefiere comprar productos sin aditivos artificiales.', exampleEn: 'She prefers to buy products without artificial additives.' },
  { es: 'exquisito', en: 'exquisite / delicious', cefr: 'C1', domain: 'food', frequencyRank: 400, register: 'neutral', example: 'El postre estaba exquisito, tanto que repetimos dos veces.', exampleEn: 'The dessert was exquisite — so much so that we had seconds twice.' },
  { es: 'inocuo', en: 'harmless (esp. of food, substances)', cefr: 'C1', domain: 'food', frequencyRank: 490, register: 'formal', example: 'El aditivo es inocuo para la salud en las cantidades permitidas.', exampleEn: 'The additive is harmless to health at the permitted amounts.' },

  // ── CLOTHES ──────────────────────────────────────────────────────────────
  { es: 'indumentaria', en: 'attire / clothing', cefr: 'C1', domain: 'clothes', frequencyRank: 460, register: 'formal', example: 'La indumentaria tradicional varía mucho de una región a otra.', exampleEn: 'Traditional attire varies a great deal from one region to another.' },
  { es: 'pulcro', en: 'neat / tidy (in dress or appearance)', cefr: 'C1', domain: 'clothes', frequencyRank: 440, register: 'neutral', example: 'Siempre va muy pulcro a las entrevistas de trabajo.', exampleEn: 'He always looks very neat for job interviews.' },

  // ── HOUSE ────────────────────────────────────────────────────────────────
  { es: 'inmueble', en: 'property / real estate', cefr: 'C1', domain: 'house', frequencyRank: 400, register: 'formal', example: 'Compraron el inmueble hace diez años y ahora vale el doble.', exampleEn: 'They bought the property ten years ago and now it is worth double.' },
  { es: 'vivienda', en: 'housing / dwelling', cefr: 'C1', domain: 'house', frequencyRank: 300, register: 'neutral', example: 'El precio de la vivienda ha subido mucho en el centro.', exampleEn: 'Housing prices have risen a lot in the city centre.' },

  // ── TRAVEL ───────────────────────────────────────────────────────────────
  { es: 'trayecto', en: 'route / leg (of a journey)', cefr: 'C1', domain: 'travel', frequencyRank: 400, register: 'neutral', example: 'El trayecto en tren dura casi cuatro horas.', exampleEn: 'The train journey takes almost four hours.' },
  { es: 'desplazamiento', en: 'trip / commute / movement', cefr: 'C1', domain: 'travel', frequencyRank: 420, register: 'neutral', example: 'El principal medio de desplazamiento en la ciudad es el autobús.', exampleEn: "The main means of getting around the city is the bus." },
  { es: 'travesía', en: 'crossing / voyage', cefr: 'C1', domain: 'travel', frequencyRank: 460, register: 'neutral', example: 'La travesía en barco hasta la isla dura seis horas.', exampleEn: 'The boat crossing to the island takes six hours.' },

  // ── WEATHER ──────────────────────────────────────────────────────────────
  { es: 'temporal', en: 'storm (as a noun; different from the adjective "temporal" meaning "temporary")', cefr: 'C1', domain: 'weather', frequencyRank: 380, register: 'neutral', example: 'Un fuerte temporal dejó sin luz a varios pueblos de la costa.', exampleEn: 'A severe storm left several coastal towns without power.' },
  { es: 'ola de calor', en: 'heat wave', cefr: 'C1', domain: 'weather', frequencyRank: 400, register: 'neutral', example: 'La ola de calor batió récords de temperatura en todo el país.', exampleEn: 'The heat wave broke temperature records across the country.' },

  // ── COLORS ───────────────────────────────────────────────────────────────
  { es: 'pardo', en: 'brown / dun (esp. of animal fur, eyes)', cefr: 'C1', domain: 'colors', frequencyRank: 480, register: 'neutral', example: 'El oso pardo es una de las especies más emblemáticas de la cordillera.', exampleEn: 'The brown bear is one of the most emblematic species of the mountain range.' },

  // ── NUMBERS ──────────────────────────────────────────────────────────────
  { es: 'proporción', en: 'proportion', cefr: 'C1', domain: 'numbers', frequencyRank: 400, register: 'neutral', example: 'Una gran proporción de los encuestados apoya la medida.', exampleEn: 'A large proportion of those surveyed support the measure.' },

  // ── GREETINGS ────────────────────────────────────────────────────────────
  { es: 'un cordial saludo', en: 'kind regards / best regards (formal letter or email closing)', cefr: 'C1', domain: 'greetings', frequencyRank: 500, register: 'formal', example: 'Quedo a la espera de su respuesta. Un cordial saludo.', exampleEn: 'I look forward to your reply. Kind regards.' },

  // ── BUSINESS (secondary domain; kept small) ────────────────────────────
  { es: 'beneficios', en: 'profits / earnings', cefr: 'C1', domain: 'business', frequencyRank: 380, register: 'neutral', example: 'La empresa duplicó sus beneficios este año.', exampleEn: 'The company doubled its profits this year.' },
  { es: 'reclutamiento', en: 'recruitment', cefr: 'C1', domain: 'business', frequencyRank: 460, register: 'neutral', example: 'El proceso de reclutamiento dura unas tres semanas.', exampleEn: 'The recruitment process takes about three weeks.' },
  { es: 'facturar', en: 'to invoice / to bill', cefr: 'C1', domain: 'business', frequencyRank: 500, register: 'neutral', example: 'La empresa factura a sus clientes a final de mes.', exampleEn: 'The company invoices its clients at the end of the month.' },
  { es: 'viabilidad', en: 'viability / feasibility', cefr: 'C1', domain: 'business', frequencyRank: 480, register: 'formal', example: 'Antes de invertir, estudiaron la viabilidad del proyecto.', exampleEn: 'Before investing, they studied the viability of the project.' },

  // ── ACADEMIC (secondary domain; kept small) ─────────────────────────────
  { es: 'cátedra', en: 'professorship / academic chair', cefr: 'C1', domain: 'academic', frequencyRank: 520, register: 'formal', example: 'Ganó la cátedra de literatura después de años de investigación.', exampleEn: 'He won the professorship in literature after years of research.' },
  { es: 'seminario', en: 'seminar', cefr: 'C1', domain: 'academic', frequencyRank: 440, register: 'neutral', example: 'Se apuntó a un seminario de escritura creativa los sábados.', exampleEn: 'She signed up for a creative writing seminar on Saturdays.' },
  { es: 'ponente', en: 'speaker / presenter (at a conference)', cefr: 'C1', domain: 'academic', frequencyRank: 460, register: 'neutral', example: 'La ponente explicó sus últimos hallazgos ante un público numeroso.', exampleEn: 'The speaker explained her latest findings to a large audience.' },
  { es: 'temario', en: 'syllabus / list of topics', cefr: 'C1', domain: 'academic', frequencyRank: 500, register: 'neutral', example: 'El temario del curso incluye seis unidades.', exampleEn: "The course syllabus includes six units." },

  // ── ABSTRACT CONCEPTS (secondary domain; kept small) ────────────────────
  { es: 'percepción', en: 'perception', cefr: 'C1', domain: 'abstract_concepts', frequencyRank: 400, register: 'neutral', example: 'La campaña cambió la percepción pública de la marca.', exampleEn: "The campaign changed the public's perception of the brand." },
  { es: 'enfoque', en: 'approach / focus', cefr: 'C1', domain: 'abstract_concepts', frequencyRank: 360, register: 'neutral', example: 'Necesitamos un enfoque distinto para resolver este problema.', exampleEn: 'We need a different approach to solve this problem.' },
  { es: 'controversia', en: 'controversy', cefr: 'C1', domain: 'abstract_concepts', frequencyRank: 420, register: 'neutral', example: 'El nombramiento generó bastante controversia dentro del partido.', exampleEn: 'The appointment generated quite a bit of controversy within the party.' },
  { es: 'transversal', en: 'cross-cutting / transversal', cefr: 'C1', domain: 'abstract_concepts', frequencyRank: 540, register: 'formal', example: 'La sostenibilidad se aborda como un eje transversal en todas las asignaturas.', exampleEn: 'Sustainability is addressed as a cross-cutting theme in all subjects.' },

  // ── MEDIA & NEWS (secondary domain; kept small) ──────────────────────────
  { es: 'cobertura', en: 'coverage (media)', cefr: 'C1', domain: 'media_news', frequencyRank: 420, register: 'neutral', example: 'El canal ofreció una cobertura especial de las elecciones.', exampleEn: 'The channel provided special coverage of the elections.' },
  { es: 'desmentir', en: 'to deny / to refute (a claim)', cefr: 'C1', domain: 'media_news', frequencyRank: 440, register: 'neutral', example: 'El ministerio desmintió los rumores sobre la subida de impuestos.', exampleEn: 'The ministry denied the rumours about the tax increase.' },
  { es: 'filtrar', en: 'to leak (information)', cefr: 'C1', domain: 'media_news', frequencyRank: 460, register: 'neutral', example: 'Alguien filtró los documentos a la prensa antes de la rueda de prensa.', exampleEn: 'Someone leaked the documents to the press before the press conference.' },
];
