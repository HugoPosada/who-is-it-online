const LOCAL_CHARACTERS_DB = [
  {
    name: "Leonardo da Vinci",
    aliases: ["da vinci", "leonardo"],
    nickname: "El Genio del Renacimiento",
    years: "1452 – 1519",
    role: "Polímata e Inventor",
    category: "arte",
    image: "img/leonardo.jpg",
    stats: [{ value: "13,000+", label: "NOTAS" }, { value: "1503", label: "MONA LISA" }],
    bio: "Polímata florentino del Renacimiento italiano. Maestro absoluto de la pintura, anatomía e ingeniería.",
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
    stats: [{ value: "143", label: "PINTURAS" }, { value: "55", label: "AUTORRETRATOS" }],
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
    stats: [{ value: "900+", label: "CUADROS" }, { value: "1", label: "VENDIDO EN VIDA" }],
    bio: "Pintor neerlandés, figura clave del postimpresionismo cuya obra influyó radicalmente en el arte moderno.",
    clues: [
      "Antes de dedicarse a la pintura, trabajó como comerciante de arte y predicador en una región minera.",
      "En vida solo logró vender una única pintura titulada 'El viñedo rojo'.",
      "Mantuvo una intensa correspondencia epistolar con su hermano Theo.",
      "Se cortó parte de la oreja izquierda tras una discusión con Paul Gauguin.",
      "Pintó 'La noche estrellada' y su famosa serie de 'Los girasoles'."
    ]
  },
  {
    name: "Muhammad Ali",
    aliases: ["cassius clay", "ali"],
    nickname: "The Greatest",
    years: "1942 – 2016",
    role: "Boxeador Peso Pesado",
    category: "deporte",
    image: "img/muhammad.jpg",
    stats: [{ value: "56", label: "VICTORIAS" }, { value: "3", label: "TÍTULOS MUNDIALES" }],
    bio: "Boxeador estadounidense considerado el más grande de todos los tiempos en los pesos pesados.",
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
    stats: [{ value: "1,279", label: "GOLES" }, { value: "3", label: "COPAS DEL MUNDO" }],
    bio: "Futbolista brasileño tricampeón del mundo, proclamado Atleta del Siglo XX.",
    clues: [
      "Debutó profesionalmente a los 15 años con el club Santos de Brasil.",
      "En 1969, una guerra civil en Nigeria declaró una tregua de 48 horas solo para verlo jugar un amistoso.",
      "Anotó más de 1,200 goles a lo largo de su carrera deportiva.",
      "Es el único futbolista de la historia en ganar tres Copas del Mundo (1958, 1962 y 1970).",
      "Es el máximo ídolo histórico del fútbol brasileño, apodado 'O Rei'."
    ]
  },
  {
    name: "Marie Curie",
    aliases: ["curie", "marie sklodowska"],
    nickname: "Pionera de la Radiactividad",
    years: "1867 – 1934",
    role: "Física y Química",
    category: "ciencia",
    image: "img/marie.jpg",
    stats: [{ value: "2", label: "PREMIOS NOBEL" }, { value: "2", label: "ELEMENTOS" }],
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
    stats: [{ value: "300+", label: "PATENTES" }, { value: "CA", label: "CORRIENTE ALTERNA" }],
    bio: "Inventor e ingeniero eléctrico de origen serbio cuyas patentes sentaron las bases de la corriente alterna.",
    clues: [
      "Tenía memoria fotográfica y afirmaba visualizar sus inventos completos en su mente antes de dibujarlos.",
      "Construyó una enorme torre experimental en Wardenclyffe para transmitir energía inalámbrica.",
      "Trabajó brevemente para Thomas Edison antes de protagonizar la 'Guerra de las Corrientes'.",
      "La unidad de medida de inducción magnética en el Sistema Internacional lleva su apellido.",
      "Inventó la bobina que lleva su nombre y revolucionó la electricidad con la corriente alterna."
    ]
  },
  {
    name: "Cleopatra",
    aliases: ["cleopatra vii"],
    nickname: "Reina del Nilo",
    years: "69 a.C. – 30 a.C.",
    role: "Faraona de Egipto",
    category: "historia",
    image: "img/cleopatra.jpg",
    stats: [{ value: "9", label: "IDIOMAS" }, { value: "21", label: "AÑOS REINADO" }],
    bio: "Última gobernante activa de la dinastía ptolemaica del Antiguo Egipto.",
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
    stats: [{ value: "60+", label: "BATALLAS" }, { value: "1804", label: "CORONACIÓN" }],
    bio: "Militar y estadista francés que conquistó gran parte de Europa continental.",
    clues: [
      "Nació en la isla de Córcega apenas un año después de que Francia la comprara a Génova.",
      "Durante su campaña en Egipto, sus soldados descubrieron la Piedra de Rosetta.",
      "Fue exiliado primero a la isla de Elba y finalmente a la remota isla de Santa Elena.",
      "Su derrota militar definitiva ocurrió en la batalla de Waterloo en 1815.",
      "Se autocoronó Emperador de Francia en 1804 y es famoso por llevar la mano en el chaleco."
    ]
  },
  {
    name: "Son Goku",
    aliases: ["goku", "kakarotto", "kakaroto"],
    nickname: "El Saiyajin Criado en la Tierra",
    years: "1984 – Presente",
    role: "Guerrero Z (Dragon Ball)",
    category: "anime",
    image: "img/goku.jpg",
    stats: [{ value: "1984", label: "DEBUT" }, { value: "UI", label: "DOCTRINA EGOÍSTA" }],
    bio: "Protagonista de Dragon Ball creado por Akira Toriyama. Guerrero saiyajin de corazón puro.",
    clues: [
      "Su diseño original estuvo inspirado en Sun Wukong, el Rey Mono de la novela china.",
      "En Japón tiene su propio día oficial celebrado cada 9 de mayo.",
      "Fue enviado desde el planeta Vegeta siendo un bebé y sufrió un golpe en la cabeza.",
      "Es el maestro de técnicas icónicas como la Genkidama y el Kamehameha.",
      "Es el protagonista de Dragon Ball y el primero en alcanzar la fase de Super Saiyajin."
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
    stats: [{ value: "7º", label: "HOKAGE" }, { value: "9", label: "COLAS" }],
    bio: "Ninja de la Aldea Oculta de la Hoja creado por Masashi Kishimoto.",
    clues: [
      "Su nombre proviene de un ingrediente espiralado de pasta de pescado del ramen.",
      "Reprobó tres veces el examen de graduación de la Academia Ninja.",
      "Heredó el espíritu indomable de su padre Minato y su maestro Jiraiya.",
      "Domina el Rasengan, el Modo Sabio y el Jutsu Multiclones de Sombras.",
      "Su frase característica es '¡De veras!' y su sueño era ser Hokage."
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
    stats: [{ value: "3,000M", label: "RECOMPENSA" }, { value: "GEAR 5", label: "DESPERTAR" }],
    bio: "Capitán de los Piratas de Sombrero de Paja creado por Eiichiro Oda. Cuerpo de goma.",
    clues: [
      "Tiene una cicatriz debajo del ojo izquierdo que se hizo él mismo de niño.",
      "A pesar de ser un pirata, es completamente incapaz de nadar.",
      "Es nieto del vicealmirante Garp y hermano adoptivo de Ace y Sabo.",
      "Obtuvo su icónico sombrero de paja de manos de Shanks el Pelirrojo.",
      "Es el protagonista de One Piece y busca convertirse en el Rey de los Piratas."
    ]
  },
  {
    name: "Lelouch vi Britannia",
    aliases: ["lelouch", "zero", "lelouch lamperouge"],
    nickname: "Zero / Emperador Demonio",
    years: "2006 – Presente",
    role: "Líder Rebelde (Code Geass)",
    category: "anime",
    image: "img/lelouch.jpg",
    stats: [{ value: "GEASS", label: "OBEDIENCIA" }, { value: "ZERO", label: "MÁSCARA" }],
    bio: "Protagonista de Code Geass. Príncipe exiliado con el poder de la obediencia absoluta.",
    clues: [
      "Es un prodigio del ajedrez que suele iniciar moviendo primero a su pieza del Rey.",
      "Estudió en la Academia Ashford bajo el apellido falso Lamperouge.",
      "Recibió su poder sobrenatural de una misteriosa joven inmortal llamada C.C.",
      "Lideró la rebelión ocultando su rostro tras una máscara bajo el alias 'Zero'.",
      "Posee el Geass en su ojo izquierdo, capaz de obligar a cualquiera a obedecer."
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
    stats: [{ value: "Nº 1", label: "ESTUDIANTE" }, { value: "KIRA", label: "ALIAS" }],
    bio: "Protagonista de Death Note. Estudiante brillante que encuentra un cuaderno asesino.",
    clues: [
      "Obtuvo la calificación más alta en los exámenes nacionales de Japón.",
      "Su padre, Soichiro Yagami, era el jefe de la policía encargado de capturarlo.",
      "Mantuvo un duelo intelectual mortal contra un excéntrico detective conocido como L.",
      "Estaba acompañado constantemente por Ryuk, un Shinigami amante de las manzanas.",
      "Usó el alias 'Kira' para eliminar criminales y gobernar un nuevo mundo."
    ]
  },
  {
    name: "Kratos",
    aliases: ["fantasma de esparta"],
    nickname: "El Fantasma de Esparta",
    years: "2005 – Presente",
    role: "Dios de la Guerra",
    category: "videojuegos",
    image: "img/kratos.jpg",
    stats: [{ value: "2", label: "MITOLOGÍAS" }, { value: "2018", label: "GOTY" }],
    bio: "Protagonista de God of War. Antiguo general espartano que desafió a los dioses.",
    clues: [
      "Su piel blanca ceniza se debe a las cenizas de su propia esposa e hija.",
      "Sirvió originalmente a Ares antes de rebelarse y destruir el Monte Olimpo.",
      "Sus armas más icónicas son las Espadas del Caos y el Hacha Leviatán.",
      "En su etapa nórdica viaja acompañado de su hijo Atreus y la cabeza de Mimir.",
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
    stats: [{ value: "1981", label: "DEBUT" }, { value: "800M+", label: "VENTAS" }],
    bio: "Mascota oficial de Nintendo creada por Shigeru Miyamoto.",
    clues: [
      "Debutó originalmente bajo el nombre de 'Jumpman' rescatando a Pauline.",
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
    stats: [{ value: "2", label: "ESPADAS" }, { value: "2015", label: "GOTY WILD HUNT" }],
    bio: "Protagonista de The Witcher. Cazador de monstruos mutado genéticamente.",
    clues: [
      "Soporta mutaciones que dejaron su cabello blanco y sus ojos felinos.",
      "Es conocido con el infame apodo de 'El Carnicero de Blaviken'.",
      "Siempre lleva dos espadas: acero para humanos y plata para monstruos.",
      "Tiene un vínculo de destino con Ciri, Yennefer y su yegua Sardinilla.",
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
    stats: [{ value: "117", label: "SERVICIO" }, { value: "MJOLNIR", label: "ARMADURA" }],
    bio: "Protagonista de la saga Halo e ícono de Xbox. Supersoldado modificado.",
    clues: [
      "Fue reclutado a los seis años por la Dra. Catherine Halsey para el programa Spartan-II.",
      "Nunca ha mostrado su rostro completo dentro de los videojuegos principales.",
      "Los alienígenas del Covenant lo temen y lo llaman 'El Demonio'.",
      "Lleva una armadura verde Mjolnir con visor dorado y a la IA Cortana.",
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
    stats: [{ value: "1996", label: "DEBUT" }, { value: "GUINNESS", label: "RÉCORD" }],
    bio: "Protagonista de Tomb Raider. Arqueóloga británica de exploración extrema.",
    clues: [
      "En sus bocetos iniciales de 1996 se llamaba Laura Cruz y era sudamericana.",
      "Sobrevivió a un accidente aéreo en el Himalaya a los 21 años.",
      "Posee el récord Guinness como la heroína humana más exitosa de los videojuegos.",
      "Sus armas clásicas son dos pistolas gemelas y un arco compuesto.",
      "Es la famosa arqueóloga británica protagonista de la saga Tomb Raider."
    ]
  }
];

const POINTS_SCALE = [500, 400, 300, 200, 100];
const socket = typeof io !== "undefined" ? io() : null;

let gameMode = "online";
let myRoomCode = null;
let selectedCategory = "todas";
let autocompleteNames = LOCAL_CHARACTERS_DB.map((c) => c.name);
let isLocked = false;

const botGameState = {
  rounds: [],
  roundIndex: 0,
  clueIndex: 0,
  active: false,
  timer: null,
  botTimeout: null,
  secondsLeft: 14,
  players: [
    { name: "Jugador 1", score: 0, streak: 0 },
    { name: "Rival IA", score: 0, streak: 0 }
  ]
};

const screens = {
  lobby: document.getElementById("screen-lobby"),
  waiting: document.getElementById("screen-waiting"),
  game: document.getElementById("screen-game"),
  end: document.getElementById("screen-end")
};

function switchScreen(name) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

function normalizeText(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function showError(msg) {
  const errEl = document.getElementById("lobby-error");
  errEl.textContent = msg;
  errEl.classList.remove("hidden");
}

document.querySelectorAll(".cat-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.cat;
  });
});

document.getElementById("btn-play-bot").addEventListener("click", () => {
  gameMode = "bot";
  const playerName = document.getElementById("player-name").value.trim() || "Jugador 1";
  let pool = selectedCategory === "todas" ? [...LOCAL_CHARACTERS_DB] : LOCAL_CHARACTERS_DB.filter((c) => c.category === selectedCategory);
  pool.sort(() => Math.random() - 0.5);

  botGameState.rounds = pool.slice(0, Math.min(5, pool.length));
  botGameState.roundIndex = 0;
  botGameState.players = [{ name: playerName, score: 0, streak: 0 }, { name: "Rival IA", score: 0, streak: 0 }];
  startBotRound();
});

function startBotRound() {
  clearInterval(botGameState.timer);
  clearTimeout(botGameState.botTimeout);
  botGameState.active = true;
  botGameState.clueIndex = 0;
  botGameState.secondsLeft = 14;

  const currentChar = botGameState.rounds[botGameState.roundIndex];
  prepareArenaUI({
    roundNumber: botGameState.roundIndex + 1,
    totalRounds: botGameState.rounds.length,
    category: currentChar.category,
    firstClue: currentChar.clues[0],
    pointsAvailable: POINTS_SCALE[0],
    players: botGameState.players
  });

  botGameState.timer = setInterval(() => {
    if (!botGameState.active) return;
    botGameState.secondsLeft--;
    document.getElementById("clue-timer").textContent = botGameState.secondsLeft;
    if (botGameState.secondsLeft <= 0) {
      if (botGameState.clueIndex < 4) advanceBotClue();
      else finishBotRound(null);
    }
  }, 1000);
  scheduleBotAttempt();
}

function advanceBotClue() {
  if (!botGameState.active || botGameState.clueIndex >= 4) return;
  botGameState.clueIndex++;
  botGameState.secondsLeft = 14;
  const currentChar = botGameState.rounds[botGameState.roundIndex];
  appendClue(botGameState.clueIndex + 1, currentChar.clues[botGameState.clueIndex]);
  document.getElementById("current-points").textContent = POINTS_SCALE[botGameState.clueIndex];
  if (botGameState.clueIndex >= 4) document.getElementById("btn-next-clue").disabled = true;
  scheduleBotAttempt();
}

function scheduleBotAttempt() {
  clearTimeout(botGameState.botTimeout);
  const statusEl = document.getElementById("opponent-status-text");
  statusEl.textContent = "El Rival IA está analizando la pista...";
  const accuracyByClue = [0.12, 0.25, 0.45, 0.72, 0.92];
  const thinkTime = 3800 + Math.random() * 4500;

  botGameState.botTimeout = setTimeout(() => {
    if (!botGameState.active || gameMode !== "bot") return;
    if (Math.random() < accuracyByClue[botGameState.clueIndex]) {
      finishBotRound(1);
    } else {
      const randomWrong = LOCAL_CHARACTERS_DB[Math.floor(Math.random() * LOCAL_CHARACTERS_DB.length)].name;
      statusEl.textContent = `⚠️ El Rival IA falló con "${randomWrong}" (penalizado 3s)...`;
    }
  }, thinkTime);
}

function finishBotRound(winnerIndex) {
  botGameState.active = false;
  clearInterval(botGameState.timer);
  clearTimeout(botGameState.botTimeout);

  const currentChar = botGameState.rounds[botGameState.roundIndex];
  const basePoints = POINTS_SCALE[botGameState.clueIndex];
  let earnedPoints = basePoints;
  let winnerName = null;

  if (winnerIndex !== null) {
    botGameState.players[winnerIndex].streak++;
    const bonus = botGameState.players[winnerIndex].streak >= 2 ? 50 : 0;
    earnedPoints = basePoints + bonus;
    botGameState.players[winnerIndex].score += earnedPoints;
    const loserIndex = winnerIndex === 0 ? 1 : 0;
    botGameState.players[loserIndex].streak = 0;
    winnerName = botGameState.players[winnerIndex].name;
  } else {
    botGameState.players.forEach((p) => (p.streak = 0));
  }

  revealCharacterResult({
    winnerName,
    iWon: winnerIndex === 0,
    earnedPoints,
    clueUsed: botGameState.clueIndex + 1,
    character: currentChar,
    players: botGameState.players,
    isBot: true
  });
}

document.getElementById("btn-create-room").addEventListener("click", () => {
  if (!socket || !socket.connected) return showError("⚠️ Inicia el servidor con 'npm start' en tu terminal y abre http://localhost:3000.");
  gameMode = "online";
  const playerName = document.getElementById("player-name").value.trim() || "Jugador 1";
  socket.emit("create_room", { playerName, category: selectedCategory });
});

document.getElementById("btn-join-room").addEventListener("click", () => {
  if (!socket || !socket.connected) return showError("⚠️ Inicia el servidor con 'npm start' y entra a http://localhost:3000.");
  gameMode = "online";
  const playerName = document.getElementById("player-name").value.trim() || "Jugador 2";
  const roomCode = document.getElementById("join-code-input").value.trim();
  if (roomCode.length !== 4) return showError("Ingresa un código válido de 4 caracteres.");
  socket.emit("join_room", { roomCode, playerName });
});

document.getElementById("btn-copy-code").addEventListener("click", () => {
  if (!myRoomCode) return;
  navigator.clipboard.writeText(myRoomCode);
  const btn = document.getElementById("btn-copy-code");
  btn.textContent = "¡Copiado!";
  setTimeout(() => (btn.textContent = "Copiar Código"), 2000);
});

if (socket) {
  socket.on("init_data", ({ names }) => { if (names) autocompleteNames = names; });
  socket.on("error_msg", (msg) => showError(msg));
  socket.on("room_created", ({ roomCode }) => {
    myRoomCode = roomCode;
    document.getElementById("display-room-code").textContent = roomCode;
    document.getElementById("header-room-code").textContent = roomCode;
    document.getElementById("room-pill").classList.remove("hidden");
    switchScreen("waiting");
  });
  socket.on("room_joined", ({ roomCode }) => {
    myRoomCode = roomCode;
    document.getElementById("header-room-code").textContent = roomCode;
    document.getElementById("room-pill").classList.remove("hidden");
  });
  socket.on("round_started", (data) => prepareArenaUI(data));
  socket.on("timer_tick", ({ secondsLeft }) => { document.getElementById("clue-timer").textContent = secondsLeft; });
  socket.on("new_clue", ({ clueIndex, clueText, pointsAvailable }) => {
    appendClue(clueIndex + 1, clueText);
    document.getElementById("current-points").textContent = pointsAvailable;
    if (clueIndex >= 4) document.getElementById("btn-next-clue").disabled = true;
  });
  socket.on("guess_wrong", ({ guess }) => triggerLocalPenalty(guess));
  socket.on("opponent_wrong", ({ opponentName, guess }) => {
    document.getElementById("opponent-status-text").textContent = `⚠️ ${opponentName} falló con "${guess}" (penalizado 3s)...`;
  });
  socket.on("round_ended", (data) => {
    revealCharacterResult({
      winnerName: data.winnerName,
      iWon: data.winnerId === socket.id,
      earnedPoints: data.earnedPoints,
      clueUsed: data.clueUsed,
      character: data.character,
      players: data.players,
      isBot: false
    });
  });
  socket.on("ready_status", ({ readyCount }) => {
    document.getElementById("btn-ready-next").textContent = `SIGUIENTE PERSONAJE (${readyCount}/2 LISTOS)`;
  });
  socket.on("game_over", ({ players }) => showFinalPodium(players));
  socket.on("opponent_disconnected", () => { alert("Tu rival abandonó la sala."); location.reload(); });
}

function prepareArenaUI(data) {
  switchScreen("game");
  isLocked = false;
  document.getElementById("card-face-revealed").classList.add("hidden");
  document.getElementById("card-face-hidden").classList.remove("hidden");
  document.getElementById("next-round-bar").classList.add("hidden");
  document.getElementById("status-banner").classList.remove("hidden");

  const input = document.getElementById("guess-input");
  input.value = "";
  input.disabled = false;
  document.getElementById("box-player").classList.remove("locked");
  document.getElementById("penalty-timer").classList.add("hidden");
  document.getElementById("wrong-guesses").innerHTML = "";
  document.getElementById("clues-list").innerHTML = "";
  document.getElementById("btn-next-clue").disabled = false;
  document.getElementById("opponent-status-text").textContent = gameMode === "bot" ? "El Rival IA está analizando la pista..." : "Tu oponente está leyendo la pista...";

  updatePlayersUI(data.players);
  document.getElementById("round-counter").textContent = `RONDA ${data.roundNumber} / ${data.totalRounds}`;
  document.getElementById("category-badge").textContent = data.category.toUpperCase();
  document.getElementById("current-points").textContent = data.pointsAvailable;
  appendClue(1, data.firstClue);
}

function updatePlayersUI(players) {
  document.getElementById("name-p1").textContent = players[0].name;
  document.getElementById("score-p1").textContent = players[0].score;
  document.getElementById("name-p2").textContent = players[1].name;
  document.getElementById("score-p2").textContent = players[1].score;

  const s1 = document.getElementById("streak-p1");
  const s2 = document.getElementById("streak-p2");
  if (players[0].streak >= 2) { s1.textContent = `🔥 RACHA x${players[0].streak}`; s1.classList.remove("hidden"); } else { s1.classList.add("hidden"); }
  if (players[1].streak >= 2) { s2.textContent = `🔥 RACHA x${players[1].streak}`; s2.classList.remove("hidden"); } else { s2.classList.add("hidden"); }
}

function appendClue(number, text) {
  const list = document.getElementById("clues-list");
  const li = document.createElement("li");
  li.className = "clue-item";
  li.innerHTML = `<span class="clue-badge">PISTA ${number}/5</span><span>${text}</span>`;
  list.appendChild(li);
}

document.getElementById("btn-next-clue").addEventListener("click", () => {
  if (gameMode === "bot") advanceBotClue();
  else if (socket) socket.emit("request_next_clue", { roomCode: myRoomCode });
});

const guessInput = document.getElementById("guess-input");
const suggestionsList = document.getElementById("suggestions-list");

guessInput.addEventListener("input", () => {
  const query = normalizeText(guessInput.value);
  suggestionsList.innerHTML = "";
  if (query.length < 2) return;
  const matches = autocompleteNames.filter((name) => normalizeText(name).includes(query));
  matches.forEach((match) => {
    const li = document.createElement("li");
    li.textContent = match;
    li.addEventListener("click", () => { guessInput.value = match; suggestionsList.innerHTML = ""; guessInput.focus(); });
    suggestionsList.appendChild(li);
  });
});

document.getElementById("guess-form").addEventListener("submit", (e) => {
  e.preventDefault();
  suggestionsList.innerHTML = "";
  if (isLocked) return;
  const guess = guessInput.value.trim();
  if (!guess) return;

  if (gameMode === "bot") {
    if (!botGameState.active) return;
    const currentChar = botGameState.rounds[botGameState.roundIndex];
    const guessNorm = normalizeText(guess);
    const isCorrect = normalizeText(currentChar.name) === guessNorm || currentChar.aliases.some((a) => normalizeText(a) === guessNorm);
    if (isCorrect) finishBotRound(0);
    else triggerLocalPenalty(guess);
  } else if (socket) {
    socket.emit("submit_guess", { roomCode: myRoomCode, guess });
  }
});

function triggerLocalPenalty(guess) {
  isLocked = true;
  const box = document.getElementById("box-player");
  const penaltyEl = document.getElementById("penalty-timer");
  const wrongContainer = document.getElementById("wrong-guesses");

  const chip = document.createElement("span");
  chip.className = "wrong-chip";
  chip.textContent = guess;
  wrongContainer.appendChild(chip);

  guessInput.value = "";
  guessInput.disabled = true;
  box.classList.add("locked");
  penaltyEl.classList.remove("hidden");

  let secs = 3;
  penaltyEl.textContent = `PENALIZACIÓN: ${secs}s`;
  const interval = setInterval(() => {
    secs--;
    if (secs > 0) penaltyEl.textContent = `PENALIZACIÓN: ${secs}s`;
    else {
      clearInterval(interval);
      isLocked = false;
      guessInput.disabled = false;
      box.classList.remove("locked");
      penaltyEl.classList.add("hidden");
      guessInput.focus();
    }
  }, 1000);
}

function revealCharacterResult({ winnerName, iWon, earnedPoints, clueUsed, character, players, isBot }) {
  updatePlayersUI(players);
  guessInput.disabled = true;
  document.getElementById("btn-next-clue").disabled = true;

  document.getElementById("rev-nickname").textContent = character.nickname;
  document.getElementById("rev-nickname-sub").textContent = character.nickname;
  document.getElementById("rev-image").src = character.image;
  document.getElementById("rev-name").textContent = character.name;
  document.getElementById("rev-meta").textContent = `${character.years} • ${character.role}`;
  document.getElementById("rev-bio").textContent = character.bio;

  document.getElementById("rev-stats").innerHTML = character.stats.map((s) => `
    <div class="mini-stat"><strong>${s.value}</strong><span>${s.label}</span></div>
  `).join("");

  document.getElementById("card-face-hidden").classList.add("hidden");
  document.getElementById("card-face-revealed").classList.remove("hidden");

  const resultMsg = document.getElementById("round-result-msg");
  if (winnerName) {
    resultMsg.textContent = iWon ? `🏆 ¡Acertaste en la pista ${clueUsed}! (+${earnedPoints} pts)` : `⚡ ${winnerName} se adelantó (+${earnedPoints} pts)`;
  } else {
    resultMsg.textContent = "⏳ Tiempo agotado — Nadie sumó puntos";
  }

  document.getElementById("status-banner").classList.add("hidden");
  const btnReady = document.getElementById("btn-ready-next");
  btnReady.disabled = false;
  btnReady.textContent = isBot ? "SIGUIENTE PERSONAJE →" : "SIGUIENTE PERSONAJE (0/2 LISTOS)";
  document.getElementById("next-round-bar").classList.remove("hidden");
}

document.getElementById("btn-ready-next").addEventListener("click", (e) => {
  if (gameMode === "bot") {
    botGameState.roundIndex++;
    if (botGameState.roundIndex < botGameState.rounds.length) startBotRound();
    else showFinalPodium(botGameState.players);
  } else if (socket) {
    e.target.disabled = true;
    socket.emit("player_ready_next", { roomCode: myRoomCode });
  }
});

function showFinalPodium(players) {
  switchScreen("end");
  document.getElementById("final-name-p1").textContent = players[0].name;
  document.getElementById("final-score-p1").textContent = players[0].score;
  document.getElementById("final-name-p2").textContent = players[1].name;
  document.getElementById("final-score-p2").textContent = players[1].score;

  const title = document.getElementById("final-winner-title");
  if (players[0].score > players[1].score) title.innerHTML = `VICTORIA DE <span>${players[0].name}</span>`;
  else if (players[1].score > players[0].score) title.innerHTML = `VICTORIA DE <span>${players[1].name}</span>`;
  else title.innerHTML = `EMPATE <span>HISTÓRICO</span>`;
}

document.getElementById("suggest-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  document.getElementById("suggest-thanks").classList.remove("hidden");
});