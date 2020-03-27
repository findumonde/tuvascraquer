import { GreenVirus, OrangeVirus, PinkVirus, PurpleVirus, RedVirus } from "src/images/virus"

export const COLORS: Record<Slug, string> = {
  white: "#ffffff",
  black: "#1B1A1A",
}

export const START = "q1"

export const THEMES: Record<ThemeId, Theme> = {
  pink: { color: "#86025B", Virus: PinkVirus },
  purple: { color: "7208C0", Virus: PurpleVirus },
  green: { color: "#12B47A", Virus: GreenVirus },
  red: { color: "#FF534D", Virus: RedVirus },
  orange: { color: "#F2850C", Virus: OrangeVirus },
}
