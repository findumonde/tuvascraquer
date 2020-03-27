type Slug = string

type ThemeId = "pink" | "purple" | "green" | "red" | "orange"

interface Theme {
  color: string
  Virus: React.FC<React.SVGProps<SVGSVGElement>>
}

interface Question {
  theme: ThemeId
  label: string
  multiple?: boolean
  answers: Answer[]
  next?: (answer?: Answer) => Slug
}

interface Answer {
  label: string
  next?: Slug
}
