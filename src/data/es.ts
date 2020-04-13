import { IQuestion, Slug } from "src/types"

const questions: Record<Slug, IQuestion> = {
  place: {
    theme: "red",
    label: "¿Qué ves por la ventana?",
    next: "house",
    choices: [
      {
        label: "Edificios, estoy en la ciudad",
        points: -2,
      },
      {
        label: "Ovejas, estoy en el campo",
        points: 4,
      },
      {
        label: "Mar, estoy en la costa",
        points: 4,
      },
      {
        label: "Zombies, estoy en la capital",
        localized: {
          "es-ES": "Zombies, estoy en Madrid",
        },
        points: -3,
      },
      {
        label: "No tengo ventanas",
        points: -5,
      },
    ],
  },
  house: {
    theme: "orange",
    label: "¿En qué tipo de vivienda estás en cuarentena?",
    localized: {
      "es-ES": "¿En qué tipo de vivienda estás confinado?",
    },
    next: "outside1",
    choices: [
      {
        label: "En una casa",
        points: 4,
      },
      {
        label: "En un departamento",
        localized: {
          "es-ES": "En un piso",
        },
        points: 1,
      },
      {
        label: "En una caravana",
        points: 1,
      },
      {
        label: "En un barco… estoy de crucero",
        points: -3,
      },
      {
        label: "En un búnker",
        points: -2,
      },
      {
        label: "En tu culo",
        points: -3,
      },
    ],
  },
  outside1: {
    theme: "pink",
    label: "¿Tienes acceso a espacios abiertos privados?",
    choices: [
      {
        label: "Sí",
        next: "outside2",
      },
      {
        label: "No",
        points: -3,
        next: "appliances",
      },
    ],
  },
  outside2: {
    theme: "pink",
    label: "¡Pequeño suertudo! ¿Qué lugares precisamente?",
    multiple: true,
    next: "appliances",
    choices: [
      {
        label: "Un jardín",
        points: 3,
      },
      {
        label: "Un campo de fútbol",
        points: 4,
      },
      {
        label: "Un balcón",
        points: 1,
      },
      {
        label: "Un huerto",
        points: 6,
      },
      {
        label: "Una piscina… pero no sé nadar",
        points: 1,
      },
      {
        label: "Tu mamá",
        localized: {
          "es-ES": "Tu madre",
        },
        points: -2,
      },
    ],
  },
  appliances: {
    theme: "green",
    label: "Tu vivienda está equipada con…",
    multiple: true,
    next: "before",
    choices: [
      {
        label: "Varias ventanas",
        points: 0,
      },
      {
        label: "Una nevera",
        localized: {
          "es-ES": "Un refrigerador",
        },
        points: 2,
      },
      {
        label: "Una lavadora",
        points: 2,
      },
      {
        label: "Una bicicleta estática",
        points: 1,
      },
      {
        label: "Una conexión a internet",
        points: 3,
      },
      {
        label: "Un vibrador",
        points: 2,
      },
    ],
  },
  before: {
    theme: "purple",
    label: "Antes de la cuarentena…",
    localized: {
      "es-ES": "Antes del confinamiento…",
    },
    multiple: true,
    next: "situation",
    choices: [
      {
        label: "Hacía deporte varias veces a la semana",
        points: -3,
      },
      {
        label: "Tenía una vida sexual",
        points: -1,
      },
      {
        label: "Nunca había cocinado pasta",
        points: -2,
      },
      {
        label: "Me besé con un·a italiano·a que pasó 6 meses en China",
        localized: {
          "es-ES": "Me tiré a un·a italiano·a que pasó 6 meses en China",
        },
        points: -3,
      },
      {
        label: "¿Que cuarentena?",
        localized: {
          "es-ES": "Confina… Qué?",
        },
        points: 3,
      },
      {
        label: "Nada de eso",
        points: 3,
        unique: true,
      },
    ],
  },
  situation: {
    theme: "red",
    label: "¿Cuál es tu situación actual?",
    multiple: true,
    next: "people",
    choices: [
      {
        label: "Estudiante, explico a mis maestros cómo funciona Discord",
        points: 1,
      },
      {
        label: "Cuido a mis hijos, pero tomo mis tranquilizantes",
        points: -3,
      },
      {
        label: "Trabajo desde casa, al menos es lo que mi jefe piensa",
        points: 2,
      },
      {
        label: "Estoy desempleado·a… ¿qué día es hoy?",
        localized: {
          "es-ES": "Estoy en el paro… ¿qué día es hoy?",
        },
        points: -1,
      },
      {
        label: "Mi trabajo es indispensable… vida de mierda",
        points: -2,
      },
      {
        label: "No pienso que haya buenas o malas situaciones…",
        points: 3,
      },
    ],
  },
  people: {
    theme: "orange",
    label: "¿Estás en cuarentena tu solo·a?",
    localized: {
      "es-ES": "¿Estás confinado tu solo·a?",
    },
    choices: [
      {
        label: "Sí",
        next: "alone",
      },
      {
        label: "No",
        next: "peopleYes",
      },
    ],
  },
  alone: {
    theme: "orange",
    label: "¿Eres un super geek?",
    localized: {
      "es-ES": "¿Eres un super friki?",
    },
    next: "days",
    choices: [
      {
        label: "Sí",
        points: 5,
      },
      {
        label: "No",
      },
    ],
  },
  peopleYes: {
    theme: "orange",
    label: "¿Con quién compartes tu techo?",
    multiple: true,
    next: "celebrities",
    choices: [
      {
        label: "Mi pareja",
        points: 2,
      },
      {
        label: "Con uno o varios niños",
        points: -5,
      },
      {
        label: "Mi suegra",
        points: -4,
      },
      {
        label: "Mi suegra… pero me acuesto con ella",
        points: 2,
      },
      {
        label: "Mis padres",
        points: -3,
      },
      {
        label: "Mis compañeros de piso",
        localized: {
          "es-MX": "Mis roomies",
        },
        points: 2,
      },
      {
        label: "Tu hermano",
        points: 2,
      },
      {
        label: "Mi perro o gato (o hamster)",
        points: 2,
      },
      {
        label: "Mi lombriz solitaria",
        points: -2,
      },
    ],
  },
  celebrities: {
    theme: "orange",
    label: "Entre todas esas personas, se encuentra…",
    multiple: true,
    next: "days",
    choices: [
      {
        label: "Un·a cocinero·a",
        points: 3,
      },
      {
        label: "El Zorro",
        points: 4,
      },
      {
        label: "Un infectado de COVID-19",
        localized: {
          "es-MX": "Dr. Hugo López-Gatell",
        },
        points: -4,
      },
      {
        label: "Ninguna de las anteriores",
        unique: true,
      },
    ],
  },
  days: {
    theme: "pink",
    label: "Vayamos al meollo del asunto… ¿Cómo ocupas tus días?",
    multiple: true,
    next: "drink",
    choices: [
      {
        label: "Respondo cuestionarios estúpidos",
        points: 1,
      },
      {
        label: "Perfecciono mi técnica de matatena y mis ataques jugando Risk",
        points: 3,
      },
      {
        label: "Explico a mi padre cómo instalar HouseParty",
        points: 1,
      },
      {
        label: "Cocinar, comer, repeat",
        points: 2,
      },
      {
        label: "Netflix, Pornhub, repeat",
        points: 1,
      },
      {
        label:
          "Estoy aprendiendo japonés, estoy afinando mis posiciones de yoga, estoy pintando otra vez el baño, leo una y otra vez Harry Potter… En resumen, soy un·a aburrido·a.",
        points: 3,
      },
      {
        label: "¿Habías notado cómo el agua de los inodoros van al sentido contrario de las manecillas del reloj?",
        points: -1,
      },
      {
        label: "Me toco viendo a Megan Rapinoe jugando fútbol",
        points: 2,
      },
      {
        label: "Estoy por terminar Tetris",
        points: 2,
      },
      {
        label: "Nada. Absolutamente nada.",
        points: -3,
        unique: true,
      },
    ],
  },
  drink: {
    theme: "green",
    label: "Para el aperitivo bebes…",
    localized: {
      "es-MX": "Para el aperitivo tomas…",
    },
    multiple: true,
    next: "food",
    choices: [
      {
        label: "Agua",
        points: 2,
      },
      {
        label: "Cerveza",
        points: 3,
      },
      {
        label: "Tequila",
        points: -1,
      },
      {
        label: "Gel antibacterial",
        points: -5,
      },
    ],
  },
  food: {
    theme: "purple",
    label: "¿Qué comiste ayer como almuerzo?",
    next: "shower",
    choices: [
      {
        label: "Papel higiénico",
        points: -4,
      },
      {
        label: "Pan viejo y queso vencido",
        points: -3,
      },
      {
        label: "Pasta lista en tres minutos",
        points: -1,
      },
      {
        label: "Una ensalada de primavera, y un estofado de ternera",
        points: 4,
      },
      {
        label: "Me levanto a las 8 pm, los aplausos me despiertan",
        points: -2,
      },
    ],
  },
  shower: {
    theme: "red",
    label: "¿Cuándo fue la última vez que te duchaste?",
    next: "out",
    choices: [
      {
        label: "Hace una hora",
        points: 2,
      },
      {
        label: "Ayer… o antier… ya no sé",
        points: 1,
      },
      {
        label: "La semana pasada",
        points: -1,
      },
      {
        label: "Desde mi última cita de Tinder",
        points: -2,
      },
    ],
  },
  out: {
    theme: "orange",
    label: "Cuando tu quieres salir…",
    next: "after",
    choices: [
      {
        label: "Me disfrazo de Barney",
        localized: {
          "es-ES": "Me disfrazo de perro",
        },
        points: -1,
      },
      {
        label: "Mando a mi hijo a explorar primero",
        points: -2,
      },
      {
        label: "¡QUÉDATE EN TU PUTA CASA!\n#QuédateEnCasa",
        points: 2,
      },
    ],
  },
  after: {
    theme: "pink",
    label: "Después de la cuarentena…",
    localized: {
      "es-ES": "Después del confinamiento…",
    },
    multiple: true,
    next: "end",
    choices: [
      {
        label: "No habrá después",
        points: 1,
      },
      {
        label: "Esta vez se sabrá quién es el papá",
        points: 1,
      },
      {
        label: "Me bebo en un bar todo el dinero que no gasté",
        localized: {
          "es-MX": "Me tomo en un bar todo lo dinero que no gasté",
        },
        points: -1,
      },
      {
        label: "Voy a dar mi voto al partido verde",
        points: 1,
      },
      {
        label: "Me voy quedar unos días tranquilo·a en casa",
        points: 3,
      },
    ],
  },
  end: {
    theme: "green",
    label: "¿Estás seguro de quieres conocer el resultado?",
    choices: [
      {
        label: "Sí",
        points: 1,
      },
      {
        label: "No",
        points: -1,
      },
    ],
  },
}

export default questions
