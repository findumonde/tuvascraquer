interface Question {
  id: number
  label: string
  multiple?: boolean
  answers: Answer[]
  getNextId?: (answer: Answer | undefined) => number
}

interface Answer {
  label: string
  nextId?: number
}
