const questions: Record<Slug, Question> = {
  place: {
    theme: "red",
    label: "Que vois-tu par la fenêtre ?",
    next: () => "house",
    choices: [
      {
        label: "Des immeubles, j’habite en ville",
        points: 2,
      },
      {
        label: "Des champs, j’habite à la campagne",
        points: 4,
      },
      {
        label: "La mer, j’habite sur le littoral",
        points: 4,
      },
      {
        label: "Un rassemblement religieux, j’habite à Mulhouse",
        points: -1,
      },
      {
        label: "Je n’ai pas de fenêtre",
        points: -2,
      },
    ],
  },
  house: {
    theme: "orange",
    label: "Dans quel type de logement es-tu confiné·e ?",
    next: () => "outside1",
    choices: [
      {
        label: "Une maison",
        points: 4,
      },
      {
        label: "Un appartement",
        points: 2,
      },
      {
        label: "Un studio",
        points: -1,
      },
      {
        label: "Une caravane",
        points: 1,
      },
      {
        label: "Un bateau… de croisière",
        points: -3,
      },
      {
        label: "Un bunker",
        points: -2,
      },
    ],
  },
  outside1: {
    theme: "pink",
    label: "As-tu accès à des espaces extérieurs privés ?",
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
    label: "Petit veinard ! Ques lieux plus précisément ?",
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
        label: "Une terrasse",
        points: 2,
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
        label: "Une piscine",
        points: 5,
      },
      {
        label: "Une piscine, mais je ne sais pas nager",
        points: 1,
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
        points: 2,
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
        label: "Quel confinement ?",
        points: 3,
      },
      {
        label: "Rien de tout ça, je suis normal·e",
        points: 3,
        unique: true,
      },
    ],
  },
  situation: {
    theme: "red",
    label: "Quelle est ta situation actuelle ?",
    next: () => "people",
    choices: [
      {
        label: "Etudiant, j’explique à mes profs comment marche Discord",
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
        label: "Enfin au chômage, on est quel jour aujourd’hui ?",
        points: -1,
      },
      {
        label: "Mon travail est utile… Je suis dans la merde",
        points: -2,
      },
      {
        label: "Je ne crois pas qu’il y ait de bonnes ou de mauvaise situation",
        points: 3,
      },
    ],
  },
  people: {
    theme: "orange",
    label: "Es-tu confiné·e seul·e ?",
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
    label: "Es-tu un gros geek ?",
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
    label: "Avec qui partages-tu ton toit ?",
    multiple: true,
    next: (answers) => (answers.some((index) => index < 6) ? "celebrities" : "days"),
    choices: [
      {
        label: "Mon conjoint / ma conjointe",
        points: 2,
      },
      {
        label: "Un enfant",
        points: -1,
      },
      {
        label: "Plusieurs enfants",
        points: -3,
      },
      {
        label: "Ma belle-mère",
        points: -2,
      },
      {
        label: "Ma belle-mère… mais je couche avec",
        points: 2,
      },
      {
        label: "Mes colocs",
        points: 2,
      },
      {
        label: "Mon chien",
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
        label: "Un cuisinier",
        points: 3,
      },
      {
        label: "Mike Horn",
        points: 4,
      },
      {
        label: "Un professionnel de la santé",
      },
      {
        label: "Un porteur du coronavirus",
        points: -3,
      },
    ],
  },
  days: {
    theme: "pink",
    label: "Rentrons dans le vif du sujet… Comment occupes-tu tes journées ?",
    multiple: true,
    next: () => "drink",
    choices: [
      {
        label: "Je regarde Pandemic sur Netflix",
        points: 1,
      },
      {
        label: "Je surveille mon stock de PQ",
        points: -1,
      },
      {
        label: "J’explique à ma mère comment installer HouseParty",
        points: 2,
      },
      {
        label: "Je me perds dans les méandres de Twitter et réponds à des questionnaire à la con",
        points: 2,
      },
      {
        label: "Je travaille ma stratégie de belotte et mes attaques dans Risk",
        points: 3,
      },
      {
        label: "J’épie mes voisins naturistes par la fenêtre",
        points: 1,
      },
      {
        label: "Je me défoule sur Animal Crossing ou Fornite / Je termine Red Dead Redemption 2 ou Doom Eternal…",
        points: 2,
      },
      {
        label:
          "J’apprends le japonais, je peaufine mes positions de yoga, je repeins la salle de bain, je relis mes classiques… Bref, je suis chiant·e",
        points: 3,
      },
      {
        label: "Rien. Je ne fais absolument rien.",
        points: -2,
        unique: true,
      },
    ],
  },
  drink: {
    theme: "green",
    label: "A l’apéro tu bois…",
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
    label: "Qu’as-tu mangé hier midi ?",
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
        label: "Je me lève à 16h",
        points: -2,
      },
    ],
  },
  shower: {
    theme: "red",
    label: "De quand date ta dernière douche ?",
    next: () => "after",
    choices: [
      {
        label: "Il y a 1 heure",
        points: 2,
      },
      {
        label: "Hier… ou avant-hier",
        points: 1,
      },
      {
        label: "La semaine dernière",
        points: -1,
      },
      {
        label: "Pour mon dernier rendez-vous Tinder",
        points: -2,
      },
    ],
  },
  after: {
    theme: "orange",
    label: "Après le confinement…",
    next: () => "end",
    choices: [
      {
        label: "Il n’y aura pas d’après",
      },
      {
        label: "J’abandonne mes enfants sur une aire d’autoroute",
        points: -1,
      },
      {
        label: "Je claque au bar tout ce que j’ai pas dépensé",
      },
      {
        label: "Je vais voter écolo aux municipales",
        points: 1,
      },
      {
        label: "Je vais oublier toutes les choses inutiles que j’ai apprises",
        points: 2,
      },
      {
        label: "Quel confinement ?",
        points: 3,
      },
    ],
  },
  end: {
    theme: "pink",
    label: "Es-tu sûr·e de vouloir connaître le résultat de ce test ?",
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
