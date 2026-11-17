const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

// BASE DE DATOS COMPLETA (ARTE, DEPORTE, CIENCIA, HISTORIA, ANIME Y VIDEOJUEGOS)
const CHARACTERS_DB = [
  // ================= ARTE =================
  {
    name: "Leonardo da Vinci",
    aliases: ["da vinci", "leonardo"],
    nickname: "El Genio del Renacimiento",
    years: "1452 – 1519",
    role: "Polímata e Inventor",
    category: "arte",
    image: "img/leonardo.jpg",
    stats: [
      { value: "13,000+", label: "PÁGINAS DE NOTAS" },
      { value: "1503", label: "AÑO DE LA MONA LISA" }
    ],
    bio: "Polímata florentino del Renacimiento italiano. Maestro absoluto de la pintura, anatomía, ingeniería y arquitectura.",
    clues: [
      "Escribía gran parte de sus notas personales de derecha a izquierda usando escritura especular.",
      "Diseñó planos para un tanque blindado, un paracaídas y un tornillo aéreo siglos antes de que existieran.",
      "Fue contratado como ingeniero militar por César Borgia antes de establecerse en Francia.",
      "Pintó 'La Última Cena' en el refectorio de un convento en Milán.",
      "Es el autor del retrato más famoso del mundo: La Mona Lisa."
    ]
  },
  {
    name: "Frida Kahlo",
    aliases: ["frida", "kahlo"],
    nickname: "La Voz de Coyoacán",
    years: "1907 – 1954",
    role: "Pintora Surrealista",
    category: "arte",
    image: "img/frida.jpg",
    stats: [
      { value: "143", label: "PINTURAS" },
      { value: "55", label: "AUTORRETRATOS" }
    ],
    bio: "Pintora mexicana reconocida mundialmente por sus autorretratos cargados de simbolismo y resiliencia.",
    clues: [
      "Su casa natal en Coyoacán es conocida hoy como la 'Casa Azul'.",
      "A los 18 años sufrió un grave accidente de autobús que la obligó a pintar postrada en cama.",
      "Estuvo casada con el famoso muralista Diego Rivera.",
      "Sus obras están profundamente influenciadas por el folclore y el arte popular mexicano.",
      "Es célebre por sus autorretratos y su inconfundible ceja poblada."
    ]
  },
  {
    name: "Vincent van Gogh",
    aliases: ["van gogh", "vincent"],
    nickname: "El Maestro del Color",
    years: "1853 – 1890",
    role: "Pintor Postimpresionista",
    category: "arte",
    image: "img/van_gogh.jpg",
    stats: [
      { value: "900+", label: "CUADROS PINTADOS" },
      { value: "1", label: "VENDIDO EN VIDA" }
    ],
    bio: "Pintor neerlandés, figura clave del postimpresionismo cuya pincelada expresiva influyó en todo el arte del siglo XX.",
    clues: [
      "Antes de dedicarse a la pintura, trabajó como comerciante de arte y predicador en una región minera.",
      "En vida solo logró vender una única pintura titulada 'El viñedo rojo'.",
      "Mantuvo una intensa correspondencia epistolar con su hermano Theo, quien lo financió toda su vida.",
      "Se cortó parte de la oreja izquierda tras una discusión con Paul Gauguin.",
      "Pintó 'La noche estrellada' y su famosa serie de 'Los girasoles'."
    ]
  },

  // ================= DEPORTE =================
  {
    name: "Muhammad Ali",
    aliases: ["cassius clay", "ali"],
    nickname: "The Greatest",
    years: "1942 – 2016",
    role: "Boxeador Peso Pesado",
    category: "deporte",
    image: "img/muhammad.jpg",
    stats: [
      { value: "56", label: "VICTORIAS (37 KO)" },
      { value: "3", label: "TÍTULOS MUNDIALES" }
    ],
    bio: "Boxeador estadounidense considerado el más grande de todos los tiempos en los pesos pesados e ícono mundial.",
    clues: [
      "Ganó la medalla de oro olímpica en Roma 1960 en la categoría de peso semipesado.",
      "Fue despojado de su título mundial y suspendido por negarse a ir a la guerra de Vietnam.",
      "Protagonizó combates históricos conocidos como 'Rumble in the Jungle' y 'Thrilla in Manila'.",
      "Su lema en el ring era 'flotar como una mariposa, picar como una abeja'.",
      "Nació como Cassius Clay y es la máxima leyenda del boxeo mundial."
    ]
  },
  {
    name: "Pelé",
    aliases: ["edson arantes do nascimento", "pele"],
    nickname: "O Rei",
    years: "1940 – 2022",
    role: "Futbolista Histórico",
    category: "deporte",
    image: "img/pele.jpg",
    stats: [
      { value: "1,279", label: "GOLES TOTALES" },
      { value: "3", label: "COPAS DEL MUNDO" }
    ],
    bio: "Futbolista brasileño tricampeón del mundo, proclamado Atleta del Siglo XX por el Comité Olímpico Internacional.",
    clues: [
      "Debutó profesionalmente a los 15 años con el club Santos de Brasil.",
      "En 1969, una guerra civil en Nigeria declaró una tregua de 48 horas solo para verlo jugar un amistoso.",
      "Anotó más de 1,200 goles a lo largo de su carrera deportiva.",
      "Es el único futbolista de la historia en ganar tres Copas del Mundo (1958, 1962 y 1970).",
      "Es el máximo ídolo histórico del fútbol brasileño, apodado 'O Rei'."
    ]
  },

  // ================= CIENCIA =================
  {
    name: "Marie Curie",
    aliases: ["curie", "marie sklodowska"],
    nickname: "Pionera de la Radiactividad",
    years: "1867 – 1934",
    role: "Física y Química",
    category: "ciencia",
    image: "img/marie.jpg",
    stats: [
      { value: "2", label: "PREMIOS NOBEL" },
      { value: "2", label: "ELEMENTOS DESCUBIERTOS" }
    ],
    bio: "Física y química polaca-francesa, pionera en el estudio de la radiactividad y doble ganadora del Premio Nobel.",
    clues: [
      "Sus cuadernos de laboratorio originales siguen siendo tan radiactivos que se guardan en cajas de plomo.",
      "Descubrió dos nuevos elementos químicos: el polonio y el radio.",
      "Durante la Primera Guerra Mundial diseñó unidades móviles de rayos X llamadas 'Petites Curies'.",
      "Fue la primera mujer en impartir clases en la Universidad de París.",
      "Es la única persona en ganar el Premio Nobel en dos ciencias distintas: Física y Química."
    ]
  },
  {
    name: "Nikola Tesla",
    aliases: ["tesla"],
    nickname: "El Mago de la Electricidad",
    years: "1856 – 1943",
    role: "Inventor e Ingeniero",
    category: "ciencia",
    image: "img/nikolas.jpg",
    stats: [
      { value: "300+", label: "PATENTES MUNDIALES" },
      { value: "CA", label: "CORRIENTE ALTERNA" }
    ],
    bio: "Inventor e ingeniero eléctrico de origen serbio cuyas patentes sentaron las bases de la corriente alterna.",
    clues: [
      "Tenía memoria fotográfica y afirmaba visualizar sus inventos completos en su mente antes de dibujarlos.",
      "Construyó una enorme torre experimental en Wardenclyffe para transmitir energía inalámbrica.",
      "Trabajó brevemente para Thomas Edison antes de protagonizar la llamada 'Guerra de las Corrientes'.",
      "La unidad de medida de inducción magnética en el Sistema Internacional lleva su apellido.",
      "Inventó la bobina que lleva su nombre y revolucionó la electricidad con la corriente alterna."
    ]
  },

  // ================= HISTORIA =================
  {
    name: "Cleopatra",
    aliases: ["cleopatra vii"],
    nickname: "Reina del Nilo",
    years: "69 a.C. – 30 a.C.",
    role: "Faraona de Egipto",
    category: "historia",
    image: "img/cleopatra.jpg",
    stats: [
      { value: "9", label: "IDIOMAS HABLADOS" },
      { value: "21", label: "AÑOS DE REINADO" }
    ],
    bio: "Última gobernante activa de la dinastía ptolemaica del Antiguo Egipto, célebre por su astucia diplomática.",
    clues: [
      "A pesar de gobernar Egipto, pertenecía a una dinastía de origen griego macedonio.",
      "Hablaba cerca de nueve idiomas y fue la primera de su familia en aprender el egipcio antiguo.",
      "Mantuvo alianzas políticas y sentimentales con Julio César y posteriormente con Marco Antonio.",
      "Tras la derrota en la batalla de Accio, se quitó la vida para no ser exhibida en Roma.",
      "Es la reina más famosa del Antiguo Egipto."
    ]
  },
  {
    name: "Napoleón Bonaparte",
    aliases: ["napoleon", "bonaparte"],
    nickname: "El Gran Corso",
    years: "1769 – 1821",
    role: "Emperador y Estratega",
    category: "historia",
    image: "img/napoleon.jpg",
    stats: [
      { value: "60+", label: "BATALLAS DIRIGIDAS" },
      { value: "1804", label: "CORONACIÓN IMPERIAL" }
    ],
    bio: "Militar y estadista francés que conquistó gran parte de Europa continental tras la Revolución Francesa.",
    clues: [
      "Nació en la isla de Córcega apenas un año después de que Francia la comprara a Génova.",
      "Durante su campaña en Egipto, sus soldados descubrieron la Piedra de Rosetta.",
      "Fue exiliado primero a la isla de Elba y finalmente a la remota isla de Santa Elena.",
      "Su derrota militar definitiva ocurrió en la batalla de Waterloo en 1815.",
      "Se autocoronó Emperador de Francia en 1804 y es famoso por llevar la mano en el chaleco."
    ]
  },

  // ================= ANIME =================
  {
    name: "Son Goku",
    aliases: ["goku", "kakarotto", "kakaroto"],
    nickname: "El Saiyajin Criado en la Tierra",
    years: "1984 – Presente",
    role: "Guerrero Z (Dragon Ball)",
    category: "anime",
    image: "img/goku.jpg",
    stats: [
      { value: "1984", label: "DEBUT EN MANGA" },
      { value: "UI", label: "DOCTRINA EGOÍSTA" }
    ],
    bio: "Protagonista de Dragon Ball creado por Akira Toriyama. Guerrero saiyajin de corazón puro que protege la Tierra.",
    clues: [
      "Su diseño original estuvo inspirado en Sun Wukong, el Rey Mono de la novela china 'Viaje al Oeste'.",
      "En Japón tiene su propio día oficial celebrado cada 9 de mayo debido al juego de palabras 'Go-Ku'.",
      "Fue enviado desde el planeta Vegeta siendo un bebé y sufrió un golpe en la cabeza que cambió su naturaleza.",
      "Es el maestro de técnicas icónicas como la Genkidama, la Teletransportación y el Kamehameha.",
      "Es el protagonista de Dragon Ball y el primero en alcanzar la transformación de Super Saiyajin."
    ]
  },
  {
    name: "Naruto Uzumaki",
    aliases: ["naruto", "uzumaki"],
    nickname: "El Ninja Hiperactivo",
    years: "1999 – Presente",
    role: "Séptimo Hokage de Konoha",
    category: "anime",
    image: "img/naruto.jpg",
    stats: [
      { value: "7º", label: "HOKAGE DE KONOHA" },
      { value: "9", label: "COLAS DE KURAMA" }
    ],
    bio: "Ninja de la Aldea Oculta de la Hoja creado por Masashi Kishimoto. Superó el rechazo de su infancia para convertirse en Hokage.",
    clues: [
      "Su nombre proviene de un ingrediente espiralado de pasta de pescado que se sirve en el ramen.",
      "Reprobó tres veces el examen de graduación de la Academia Ninja por no poder hacer un clon básico.",
      "Heredó el espíritu indomable y las técnicas de su padre Minato Namikaze y su maestro Jiraiya.",
      "Domina el Rasengan, el Modo Sabio y el Jutsu Multiclones de Sombras.",
      "Su frase característica es '¡De veras!' y su mayor sueño siempre fue convertirse en Hokage."
    ]
  },
  {
    name: "Monkey D. Luffy",
    aliases: ["luffy", "sombrero de paja", "monkey d luffy"],
    nickname: "Sombrero de Paja",
    years: "1997 – Presente",
    role: "Capitán Pirata (One Piece)",
    category: "anime",
    image: "img/luffy.jpg",
    stats: [
      { value: "3,000M", label: "RECOMPENSA (BERRIES)" },
      { value: "GEAR 5", label: "DESPERTAR DE FRUTA" }
    ],
    bio: "Capitán de los Piratas de Sombrero de Paja creado por Eiichiro Oda. Un joven cuyo cuerpo adquirió propiedades de goma.",
    clues: [
      "Tiene una cicatriz debajo del ojo izquierdo que se hizo él mismo de niño para demostrar valentía.",
      "A pesar de ser un pirata que navega por todo el mar, es completamente incapaz de nadar.",
      "Es nieto del héroe de la Marina Monkey D. Garp y hermano adoptivo de Ace y Sabo.",
      "Obtuvo su icónico sombrero de paja de manos de Shanks el Pelirrojo.",
      "Es el protagonista de One Piece y busca encontrar el tesoro legendario para ser el Rey de los Piratas."
    ]
  },
  {
    name: "Lelouch vi Britannia",
    aliases: ["lelouch", "zero", "lelouch lamperouge"],
    nickname: "Zero / El Emperador Demonio",
    years: "2006 – Presente",
    role: "Líder Rebelde (Code Geass)",
    category: "anime",
    image: "img/lelouch.jpg",
    stats: [
      { value: "GEASS", label: "OBEDIENCIA ABSOLUTA" },
      { value: "ZERO", label: "IDENTIDAD ENMASCARADA" }
    ],
    bio: "Protagonista de Code Geass. Príncipe exiliado que obtiene el poder de la obediencia absoluta para destruir el imperio.",
    clues: [
      "Es un prodigio del ajedrez que suele iniciar sus partidas moviendo primero a su pieza del Rey.",
      "Estudió en la Academia Ashford bajo el apellido falso Lamperouge junto a su hermana Nunnally.",
      "Recibió su poder sobrenatural de una misteriosa joven inmortal conocida como C.C.",
      "Lideró la rebelión ocultando su rostro tras una máscara con visera bajo el alias 'Zero'.",
      "Posee el poder del Geass en su ojo izquierdo, capaz de obligar a cualquiera a obedecer órdenes."
    ]
  },
  {
    name: "Light Yagami",
    aliases: ["kira", "light", "yagami"],
    nickname: "Kira",
    years: "2003 – Presente",
    role: "Portador de la Death Note",
    category: "anime",
    image: "img/Light_Yagami.webp",
    stats: [
      { value: "Nº 1", label: "ESTUDIANTE DE JAPÓN" },
      { value: "KIRA", label: "ALIAS MUNDIAL" }
    ],
    bio: "Protagonista de Death Note. Brillante estudiante que encuentra un cuaderno sobrenatural capaz de matar escribiendo nombres.",
    clues: [
      "Obtuvo la calificación más alta en los exámenes nacionales de ingreso universitario de todo Japón.",
      "Su padre, Soichiro Yagami, era el jefe de la policía encargado de capturarlo.",
      "Mantuvo un duelo intelectual mortal contra un excéntrico detective conocido como L.",
      "Estaba acompañado constantemente por Ryuk, un Shinigami amante de las manzanas.",
      "Usó el alias 'Kira' para eliminar criminales y convertirse en el dios de un nuevo mundo."
    ]
  },

  // ================= VIDEOJUEGOS =================
  {
    name: "Kratos",
    aliases: ["fantasma de esparta"],
    nickname: "El Fantasma de Esparta",
    years: "2005 – Presente",
    role: "Dios de la Guerra",
    category: "videojuegos",
    image: "img/kratos.jpg",
    stats: [
      { value: "2", label: "MITOLOGÍAS CONQUISTADAS" },
      { value: "2018", label: "JUEGO DEL AÑO (GOTY)" }
    ],
    bio: "Protagonista de God of War. Antiguo general espartano que desafió a los dioses y buscó redención en tierras nórdicas.",
    clues: [
      "Su piel blanca ceniza se debe a las cenizas de su propia esposa e hija adheridas por una maldición.",
      "Sirvió originalmente a Ares antes de rebelarse y destruir por completo el Monte Olimpo.",
      "Sus armas más icónicas son las Espadas del Caos y el Hacha Leviatán.",
      "En su etapa nórdica viaja acompañado de su hijo Atreus y la cabeza parlante de Mimir.",
      "Es conocido como el 'Fantasma de Esparta' en la franquicia God of War."
    ]
  },
  {
    name: "Mario",
    aliases: ["super mario", "mario bros"],
    nickname: "El Héroe del Reino Champiñón",
    years: "1981 – Presente",
    role: "Ícono de Nintendo",
    category: "videojuegos",
    image: "img/mario.jpg",
    stats: [
      { value: "1981", label: "DEBUT COMO JUMPMAN" },
      { value: "800M+", label: "JUEGOS VENDIDOS" }
    ],
    bio: "Mascota oficial de Nintendo creada por Shigeru Miyamoto. El personaje más reconocible en la historia de los videojuegos.",
    clues: [
      "Debutó originalmente bajo el nombre de 'Jumpman' rescatando a Pauline de un simio gigante.",
      "Su gorra y bigote fueron diseñados por limitaciones gráficas de píxeles en 1981.",
      "Tiene un hermano gemelo más alto vestido de verde llamado Luigi.",
      "Su archienemigo es Bowser, quien secuestra constantemente a la Princesa Peach.",
      "Es el fontanero italiano de gorra roja más famoso de Nintendo."
    ]
  },
  {
    name: "Geralt de Rivia",
    aliases: ["geralt", "el lobo blanco", "carnicero de blaviken"],
    nickname: "El Lobo Blanco",
    years: "1986 – Presente",
    role: "Brujo de la Escuela del Lobo",
    category: "videojuegos",
    image: "img/GeraltdeRivia.webp",
    stats: [
      { value: "2", label: "ESPADAS (ACERO Y PLATA)" },
      { value: "2015", label: "GOTY WILD HUNT" }
    ],
    bio: "Protagonista de The Witcher. Cazador de monstruos mutado genéticamente que recorre el Continente buscando a Ciri.",
    clues: [
      "Soporta mutaciones alquímicas que dejaron su cabello completamente blanco y sus ojos felinos.",
      "Es conocido con el infame apodo de 'El Carnicero de Blaviken'.",
      "Siempre lleva dos espadas a la espalda: una de acero para humanos y otra de plata para monstruos.",
      "Tiene un vínculo de destino con Ciri, Yennefer y su fiel yegua Sardinilla.",
      "Es el brujo protagonista de la trilogía de videojuegos The Witcher."
    ]
  },
  {
    name: "Master Chief",
    aliases: ["jefe maestro", "john-117", "john 117"],
    nickname: "John-117 / El Demonio",
    years: "2001 – Presente",
    role: "Supersoldado Spartan-II",
    category: "videojuegos",
    image: "img/masterchief.jpg",
    stats: [
      { value: "117", label: "NÚMERO DE SERVICIO" },
      { value: "MJOLNIR", label: "ARMADURA DE COMBATE" }
    ],
    bio: "Protagonista de la saga Halo e ícono principal de Xbox. Supersoldado modificado que defendió a la humanidad del Covenant.",
    clues: [
      "Fue reclutado a los seis años por la Dra. Catherine Halsey para el programa secreto Spartan-II.",
      "Nunca ha mostrado su rostro completo dentro de los videojuegos principales de la saga.",
      "Los alienígenas del Covenant lo temen y lo llaman simplemente 'El Demonio'.",
      "Lleva una armadura verde Mjolnir con visor dorado y es acompañado por la IA Cortana.",
      "Su nombre real es John-117 y es el héroe legendario de la franquicia Halo."
    ]
  },
  {
    name: "Lara Croft",
    aliases: ["lara"],
    nickname: "La Saqueadora de Tumbas",
    years: "1996 – Presente",
    role: "Arqueóloga y Aventurera",
    category: "videojuegos",
    image: "img/lara.jpg",
    stats: [
      { value: "1996", label: "PRIMERA EXPEDICIÓN" },
      { value: "GUINNESS", label: "HEROÍNA MÁS EXITOSA" }
    ],
    bio: "Protagonista de Tomb Raider. Arqueóloga británica que recorre ruinas antiguas enfrentando trampas mortales.",
    clues: [
      "En sus bocetos iniciales de 1996 se llamaba Laura Cruz y era de origen sudamericano.",
      "Sobrevivió a un accidente aéreo en el Himalaya a los 21 años, evento que definió su carácter.",
      "Posee el récord Guinness como la heroína humana más exitosa de los videojuegos.",
      "Sus armas clásicas son dos pistolas gemelas y un arco compuesto en su trilogía moderna.",
      "Es la famosa arqueóloga británica protagonista de la saga Tomb Raider."
    ]
  }
];

const POINTS_SCALE = [500, 400, 300, 200, 100];
const rooms = {};

function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return rooms[code] ? generateRoomCode() : code;
}

io.on("connection", (socket) => {
  socket.emit("init_data", {
    names: CHARACTERS_DB.map((c) => c.name)
  });

  socket.on("create_room", ({ playerName, category }) => {
    const roomCode = generateRoomCode();
    let pool = category === "todas"
      ? [...CHARACTERS_DB]
      : CHARACTERS_DB.filter((c) => c.category === category);

    pool.sort(() => Math.random() - 0.5);

    rooms[roomCode] = {
      code: roomCode,
      category,
      players: [
        { id: socket.id, name: playerName || "Jugador 1", score: 0, streak: 0, readyNext: false }
      ],
      rounds: pool.slice(0, Math.min(5, pool.length)),
      currentRoundIndex: 0,
      currentClueIndex: 0,
      roundActive: false,
      timer: null,
      secondsLeft: 14
    };

    socket.join(roomCode);
    socket.emit("room_created", { roomCode });
  });

  socket.on("join_room", ({ roomCode, playerName }) => {
    const code = roomCode.toUpperCase().trim();
    const room = rooms[code];

    if (!room) return socket.emit("error_msg", "La sala no existe. Verifica el código.");
    if (room.players.length >= 2) return socket.emit("error_msg", "Esta sala ya está completa (2/2).");

    room.players.push({
      id: socket.id,
      name: playerName || "Jugador 2",
      score: 0,
      streak: 0,
      readyNext: false
    });

    socket.join(code);
    socket.emit("room_joined", { roomCode: code });
    startRound(code);
  });

  socket.on("submit_guess", ({ roomCode, guess }) => {
    const room = rooms[roomCode];
    if (!room || !room.roundActive) return;

    const playerIndex = room.players.findIndex((p) => p.id === socket.id);
    if (playerIndex === -1) return;

    const currentChar = room.rounds[room.currentRoundIndex];
    const guessNorm = normalizeText(guess);

    const isCorrect =
      normalizeText(currentChar.name) === guessNorm ||
      currentChar.aliases.some((alias) => normalizeText(alias) === guessNorm);

    if (isCorrect) {
      finishRound(roomCode, playerIndex);
    } else {
      socket.emit("guess_wrong", { guess });
      socket.to(roomCode).emit("opponent_wrong", {
        opponentName: room.players[playerIndex].name,
        guess
      });
    }
  });

  socket.on("request_next_clue", ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || !room.roundActive) return;

    if (room.currentClueIndex < 4) {
      room.currentClueIndex++;
      room.secondsLeft = 14;
      const currentChar = room.rounds[room.currentRoundIndex];

      io.to(roomCode).emit("new_clue", {
        clueIndex: room.currentClueIndex,
        clueText: currentChar.clues[room.currentClueIndex],
        pointsAvailable: POINTS_SCALE[room.currentClueIndex]
      });
    }
  });

  socket.on("player_ready_next", ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room) return;

    const player = room.players.find((p) => p.id === socket.id);
    if (player) player.readyNext = true;

    io.to(roomCode).emit("ready_status", {
      readyCount: room.players.filter((p) => p.readyNext).length
    });

    if (room.players.every((p) => p.readyNext)) {
      room.players.forEach((p) => (p.readyNext = false));
      room.currentRoundIndex++;

      if (room.currentRoundIndex < room.rounds.length) {
        startRound(roomCode);
      } else {
        io.to(roomCode).emit("game_over", { players: room.players });
        clearInterval(room.timer);
        delete rooms[roomCode];
      }
    }
  });

  socket.on("disconnect", () => {
    for (const code in rooms) {
      const room = rooms[code];
      const idx = room.players.findIndex((p) => p.id === socket.id);
      if (idx !== -1) {
        clearInterval(room.timer);
        io.to(code).emit("opponent_disconnected");
        delete rooms[code];
      }
    }
  });
});

function startRound(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  clearInterval(room.timer);
  room.roundActive = true;
  room.currentClueIndex = 0;
  room.secondsLeft = 14;

  const currentChar = room.rounds[room.currentRoundIndex];

  io.to(roomCode).emit("round_started", {
    roundNumber: room.currentRoundIndex + 1,
    totalRounds: room.rounds.length,
    category: currentChar.category,
    firstClue: currentChar.clues[0],
    pointsAvailable: POINTS_SCALE[0],
    players: room.players
  });

  room.timer = setInterval(() => {
    if (!room.roundActive) return;
    room.secondsLeft--;
    io.to(roomCode).emit("timer_tick", { secondsLeft: room.secondsLeft });

    if (room.secondsLeft <= 0) {
      if (room.currentClueIndex < 4) {
        room.currentClueIndex++;
        room.secondsLeft = 14;
        io.to(roomCode).emit("new_clue", {
          clueIndex: room.currentClueIndex,
          clueText: currentChar.clues[room.currentClueIndex],
          pointsAvailable: POINTS_SCALE[room.currentClueIndex]
        });
      } else {
        finishRound(roomCode, null);
      }
    }
  }, 1000);
}

function finishRound(roomCode, winnerIndex) {
  const room = rooms[roomCode];
  if (!room) return;

  room.roundActive = false;
  clearInterval(room.timer);

  const currentChar = room.rounds[room.currentRoundIndex];
  const basePoints = POINTS_SCALE[room.currentClueIndex];
  let winnerName = null;
  let earnedPoints = basePoints;

  if (winnerIndex !== null) {
    room.players[winnerIndex].streak++;
    const bonus = room.players[winnerIndex].streak >= 2 ? 50 : 0;
    earnedPoints = basePoints + bonus;
    room.players[winnerIndex].score += earnedPoints;

    const loserIndex = winnerIndex === 0 ? 1 : 0;
    room.players[loserIndex].streak = 0;
    winnerName = room.players[winnerIndex].name;
  } else {
    room.players.forEach((p) => (p.streak = 0));
  }

  io.to(roomCode).emit("round_ended", {
    winnerName,
    winnerId: winnerIndex !== null ? room.players[winnerIndex].id : null,
    earnedPoints,
    clueUsed: room.currentClueIndex + 1,
    character: {
      name: currentChar.name,
      nickname: currentChar.nickname,
      years: currentChar.years,
      role: currentChar.role,
      image: currentChar.image,
      bio: currentChar.bio,
      stats: currentChar.stats
    },
    players: room.players
  });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});