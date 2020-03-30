import { GreenVirus, OrangeVirus, PinkVirus, PurpleVirus, RedVirus } from "src/images/virus"
import { WorstCharacter, BadCharacter, AverageCharacter, GoodCharacter, BestCharacter } from "src/images/characters"

export const START_DATE = new Date(2020, 2, 17)

export const COLORS = {
  white: "#ffffff",
  black: "#1B1A1A",
}

export const FONTS = {
  title: "'Boogaloo', cursive",
  text: "'Open Sans', sans-serif",
}

export const START = "place"

export const THEMES: Record<ThemeId, Theme> = {
  red: { color: "#FF534D", Virus: RedVirus },
  orange: { color: "#F2850C", Virus: OrangeVirus },
  pink: { color: "#86025B", Virus: PinkVirus },
  green: { color: "#12B47A", Virus: GreenVirus },
  purple: { color: "#7208C0", Virus: PurpleVirus },
}

export const RESULTS: Result[] = [
  {
    slug: "worst",
    Character: WorstCharacter,
    text:
      "Tu n’es vraiment pas beau/belle à voir, tu commences à te transformer en pangolin. Tes voisins ont plus peur de te croiser que d’attraper le coronavirus.",
    color: THEMES.red.color,
  },
  {
    slug: "bad",
    Character: BadCharacter,
    text: "Tu devrais ralentir sur la chloroquine, aller prendre une douche et surtout libérer tes enfants de la cave.",
    color: THEMES.orange.color,
  },
  {
    slug: "average",
    Character: AverageCharacter,
    text:
      "Passée l’euphorie des premiers apéro-visio, des applaudissements sur le balcon et des chamboule-tout de PQ, tu vas bientôt basculer dans la quatrième dimension.",
    color: THEMES.pink.color,
  },
  {
    slug: "good",
    Character: GoodCharacter,
    text:
      "Glandeur·se dans l’âme, le confinement te va comme un gant, tu es en totale osmose avec ton canapé. On en reparle quand tu auras fait le tour de Netflix…",
    color: THEMES.green.color,
  },
  {
    slug: "best",
    Character: BestCharacter,
    text:
      "Tu es confi-né·e (haha) ! Si tu attrapes le coronavirus, mieux vaut qu’il se mette en quarantaine. Mais malheureusement, toutes les bonnes choses ont une fin…",
    color: THEMES.purple.color,
  },
]
