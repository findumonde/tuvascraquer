import React, { useState } from "react"
import styled from "styled-components"

import Answer from "src/components/Answer"
import { THEMES } from "src/helpers/constants"

const Title = styled.h1``

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
`

const Next = styled.button``

const Disclaimer = styled.p``

interface QuestionProps {
  question: Question
  next: (slug: Slug) => void
}

const Question: React.FC<QuestionProps> = ({ question, next }) => {
  const [active, setActive] = useState({})
  const { multiple, label, theme } = question

  const { color, Virus } = THEMES[theme]

  const handleClick = (index: number) => () => {
    const newActive = multiple ? { ...active, [index]: !active[index] } : { [index]: !active[index] }
    setActive(newActive)
  }

  const handleNext = () => {
    const slug = question.next ? question.next() : question.answers[Object.keys(active)[0]].next
    setActive({})
    next(slug)
  }

  return (
    <>
      <Virus width={100} />
      <Title>{label}</Title>
      {multiple && <Disclaimer>Question à choix multiples</Disclaimer>}
      <Answers>
        {question.answers.map((answer, index) => (
          <Answer key={index} answer={answer} color={color} onClick={handleClick(index)} active={active[index]} />
        ))}
      </Answers>
      <Next onClick={handleNext}>Suivant</Next>
    </>
  )
}

export default Question
