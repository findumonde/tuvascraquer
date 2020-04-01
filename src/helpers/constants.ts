import { GreenVirus, OrangeVirus, PinkVirus, PurpleVirus, RedVirus } from "src/images/virus"
import { WorstCharacter, BadCharacter, AverageCharacter, GoodCharacter, BestCharacter } from "src/images/characters"
import { ThemeId, Theme, Result } from "src/types"

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
    color: THEMES.red.color,
  },
  {
    slug: "bad",
    Character: BadCharacter,
    color: THEMES.orange.color,
  },
  {
    slug: "average",
    Character: AverageCharacter,
    color: THEMES.pink.color,
  },
  {
    slug: "good",
    Character: GoodCharacter,
    color: THEMES.green.color,
  },
  {
    slug: "best",
    Character: BestCharacter,
    color: THEMES.purple.color,
  },
]

export const RANGES = [-50, 0, 15, 35, 50, 78] // min = -64, max = 93
