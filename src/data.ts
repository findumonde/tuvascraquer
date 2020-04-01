const questions: Record<Slug, Question> = {
  place: {
    theme: "red",
    label: "Que vois-tu par la fenêtre ?",
    next: () => "house",
    choices: [
      {
        label: "Des immeubles, je suis en ville",
        points: -2,
      },
      {
        label: "Des champs, je suis à la campagne",
        points: 4,
      },
      {
        label: "La mer, je suis sur la côte",
        points: 4,
      },
      {
        label: "Un rassemblement religieux, je suis à Mulhouse",
        points: -3,
      },
      {
        label: "Je n’ai pas de fenêtre",
        points: -5,
      },
    ],
  },
  house: {
    theme: "orange",
    label: "Où es-tu confiné·e ?",
    next: () => "outside1",
    choices: [
      {
        label: "Dans une maison",
        points: 4,
      },
      {
        label: "Dans un appartement",
        points: 1,
      },
      {
        label: "Dans une caravane",
        points: 1,
      },
      {
        label: "Dans un bateau… de croisière",
        points: -3,
      },
      {
        label: "Dans un bunker",
        points: -2,
      },
      {
        label: "Dans ton cul",
        points: -3,
      },
    ],
  },
  outside1: {
    theme: "pink",
    label: "As-tu accès à des espaces extérieurs privés ?",
    choices: [
      {
        label: "Oui",
        next: "outside2",
      },
      {
        label: "Non",
        points: -3,
        next: "appliances",
      },
    ],
  },
  outside2: {
    theme: "pink",
    label: "Petit·e veinard·e ! Quels lieux plus précisément ?",
    multiple: true,
    next: () => "appliances",
    choices: [
      {
        label: "Un jardin",
        points: 3,
      },
      {
        label: "Un terrain de pétanque",
        points: 4,
      },
      {
        label: "Un balcon",
        points: 1,
      },
      {
        label: "Un potager",
        points: 6,
      },
      {
        label: "Une piscine, mais je ne sais pas nager",
        points: 1,
      },
      {
        label: "Ta mère",
        points: -2,
      },
    ],
  },
  appliances: {
    theme: "green",
    label: "Ton logement est équipé de…",
    multiple: true,
    next: () => "before",
    choices: [
      {
        label: "Plusieurs fenêtres",
        points: 0,
      },
      {
        label: "Un frigo",
        points: 2,
      },
      {
        label: "Une machine à laver",
        points: 2,
      },
      {
        label: "Un vélo d’appartement",
        points: 1,
      },
      {
        label: "Une imprimante",
        points: 1,
      },
      {
        label: "Une connexion Internet",
        points: 3,
      },
      {
        label: "Un vibro",
        points: 2,
      },
    ],
  },
  before: {
    theme: "purple",
    label: "Avant le confinement…",
    multiple: true,
    next: () => "situation",
    choices: [
      {
        label: "Je faisais du sport plusieurs fois par semaine",
        points: -3,
      },
      {
        label: "J’avais une vie sexuelle",
        points: -1,
      },
      {
        label: "Je n’avais jamais fait cuire de pâtes",
        points: -2,
      },
      {
        label: "J’ai roulé une grosse pelle à un·e italien·ne qui a passé 6 mois en Chine",
        points: -3,
      },
      {
        label: "Quel confinement ?",
        points: 3,
      },
      {
        label: "Rien de tout ça",
        points: 3,
        unique: true,
      },
    ],
  },
  situation: {
    theme: "red",
    label: "Quelle est ta situation actuelle ?",
    multiple: true,
    next: () => "people",
    choices: [
      {
        label: "Etudiant·e, j’explique à mes profs comment marche Discord",
        points: 1,
      },
      {
        label: "Je garde mes enfants, mais je me soigne",
        points: -3,
      },
      {
        label: "En télétravail, du moins c’est ce que pense mon employeur",
        points: 2,
      },
      {
        label: "Enfin au chômage, on est quel jour aujourd’hui ?",
        points: -1,
      },
      {
        label: "Mon travail est utile… Je suis dans la merde",
        points: -2,
      },
      {
        label: "Je ne crois pas qu’il y ait de bonne ou de mauvaise situation",
        points: 3,
      },
    ],
  },
  people: {
    theme: "orange",
    label: "Es-tu confiné·e seul·e ?",
    choices: [
      {
        label: "Oui",
        next: "alone",
      },
      {
        label: "Non",
        next: "peopleYes",
      },
    ],
  },
  alone: {
    theme: "orange",
    label: "Es-tu un gros geek ?",
    next: () => "days",
    choices: [
      {
        label: "Oui",
        points: 5,
      },
      {
        label: "Non",
      },
    ],
  },
  peopleYes: {
    theme: "orange",
    label: "Avec qui partages-tu ton toit ?",
    multiple: true,
    next: (answers) => (answers.some((index) => index < 6) ? "celebrities" : "days"),
    choices: [
      {
        label: "Mon/ma conjoint·e",
        points: 2,
      },
      {
        label: "Un ou plusieurs enfan$%&#$qeorzbyqezpr",
        points: -5,
      },
      {
        label: "Ma belle-mère",
        points: -4,
      },
      {
        label: "Ma belle-mère… mais je couche avec",
        points: 2,
      },
      {
        label: "Mes parents",
        points: -3,
      },
      {
        label: "Mes colocs",
        points: 2,
      },
      {
        label: "Ton frère",
        points: 2,
      },
      {
        label: "Mon chien ou chat (ou cochon d’Inde)",
        points: 2,
      },
      {
        label: "Mon ver solitaire",
        points: -2,
      },
    ],
  },
  celebrities: {
    theme: "orange",
    label: "Parmi ces personnes, y a-t-il…",
    multiple: true,
    next: () => "days",
    choices: [
      {
        label: "Un·e cuisinier·ère",
        points: 3,
      },
      {
        label: "Mike Horn",
        points: 4,
      },
      {
        label: "Le Professeur Didier Raoult",
        points: -2,
      },
      {
        label: "Un·e porteur·se du coronavirus",
        points: -4,
      },
      {
        label: "Rien de tout cela",
        unique: true,
      },
    ],
  },
  days: {
    theme: "pink",
    label: "Rentrons dans le vif du sujet… Comment occupes-tu tes journées ?",
    multiple: true,
    next: () => "drink",
    choices: [
      {
        label: "Je réponds à des questionnaires à la con",
        points: 1,
      },
      {
        label: "Je travaille ma stratégie de belote et mes attaques dans Risk",
        points: 3,
      },
      {
        label: "Je chante sur le karaoké projeté sur l’immeuble d’en face",
        points: 3,
      },
      {
        label: "J’explique à mon père comment installer HouseParty",
        points: 1,
      },
      {
        label: "Cuisiner, manger, repeat",
        points: 2,
      },
      {
        label: "Netflix, Pornhub, repeat",
        points: 1,
      },
      {
        label:
          "J’apprends le japonais, je peaufine mes positions de yoga, je repeins la salle de bain, je relis mes classiques… Bref, je suis chiant·e",
        points: 3,
      },
      {
        label:
          "T’avais remarqué que l’eau des toilettes s’échappe toujours dans le sens inverse des aiguilles d’une montre ?",
        points: -1,
      },
      {
        label: "Je me touche en regardant Megan Rapinoe jouer au foot",
        points: 2,
      },
      {
        label: "Je termine Tetris",
        points: 2,
      },
      {
        label: "Rien. Je ne fais absolument rien.",
        points: -5,
        unique: true,
      },
    ],
  },
  drink: {
    theme: "green",
    label: "A l’apéro tu bois…",
    multiple: true,
    next: () => "food",
    choices: [
      {
        label: "De l’eau",
        points: 2,
      },
      {
        label: "De la bière",
        points: 3,
      },
      {
        label: "De l’absinthe",
        points: -1,
      },
      {
        label: "De la chloroquine",
        points: -5,
      },
    ],
  },
  food: {
    theme: "purple",
    label: "Qu’as-tu mangé hier midi ?",
    next: () => "shower",
    choices: [
      {
        label: "Du PQ",
        points: -4,
      },
      {
        label: "Du pain rassis et de la croûte de fromage",
        points: -3,
      },
      {
        label: "Des pâtes 3 minutes",
        points: -1,
      },
      {
        label: "Une salade printanière, une blanquette de veau et un Saint-Honoré",
        points: 4,
      },
      {
        label: "Je me lève à 20h, les applaudissements me réveillent",
        points: -2,
      },
    ],
  },
  shower: {
    theme: "red",
    label: "De quand date ta dernière douche ?",
    next: () => "out",
    choices: [
      {
        label: "Il y a une heure",
        points: 2,
      },
      {
        label: "Hier… ou avant-hier… je sais plus",
        points: 1,
      },
      {
        label: "La semaine dernière",
        points: -1,
      },
      {
        label: "De mon dernier rendez-vous Tinder",
        points: -2,
      },
    ],
  },
  out: {
    theme: "orange",
    label: "Pour sortir…",
    next: () => "after",
    choices: [
      {
        label: "Je remplis soigneusement mon attestation pour promener mon chien en peluche",
        points: -2,
      },
      {
        label: "Je me déguise en sac poubelle",
        points: -1,
      },
      {
        label: "J’envoie mon gosse en éclaireur",
        points: -2,
      },
      {
        label: "TU RESTES CHEZ TOI BORDEL !\n#RestezChezVous",
        points: 2,
      },
    ],
  },
  after: {
    theme: "pink",
    label: "Après le confinement…",
    multiple: true,
    next: () => "end",
    choices: [
      {
        label: "Il n’y aura pas d’après",
        points: 1,
      },
      {
        label: "Cette fois on sait qui est le père",
        points: 1,
      },
      {
        label: "Je claque au bar tout ce que j’ai pas dépensé",
        points: -1,
      },
      {
        label: "Je vais voter écolo aux municipales",
        points: 1,
      },
      {
        label: "Je vais me faire quelques jours tranquille à la maison",
        points: 3,
      },
    ],
  },
  end: {
    theme: "green",
    label: "Es-tu sûr·e de vouloir connaître le résultat de ce test ?",
    choices: [
      {
        label: "Oui",
        points: 1,
      },
      {
        label: "Non",
        points: -1,
      },
    ],
  },
}

export default questions

export const RANGES = [-50, 0, 15, 35, 50, 78] // min = -67, max = 96
