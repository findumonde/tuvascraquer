import { StyledComponent } from "styled-components"

export type Slug = string
export type Locales = string // e.g. "en_GB,en_IE"

export type ThemeId = "pink" | "purple" | "green" | "red" | "orange"

export type Localized = Record<Locales, string>

export interface Theme {
  color: string
  Virus: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface IQuestion {
  theme: ThemeId
  label: string
  localized?: Localized
  multiple?: boolean
  choices: Choice[]
  next?: Slug
}

export interface Choice {
  label: string
  localized?: Localized
  unique?: boolean
  points?: number
  next?: Slug
}

export interface Result {
  slug: "worst" | "bad" | "average" | "good" | "best"
  Character: StyledComponent<any, any>
  color: string
}

export type Translation = Record<string, string | Record<string, string>>
