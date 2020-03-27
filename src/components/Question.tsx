import React, { useState } from "react"
import styled from "styled-components"

import Answer from "src/components/Answer"
import { THEMES } from "src/helpers/constants"

const Container = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`
const Title = styled.h1`
  margin-bottom: 100px;
`
const AnswerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  const handleClick = (index: number) => {
    const newActive = multiple ? { ...active, [index]: !active[index] } : { [index]: !active[index] }
    setActive(newActive)
  }

  const handleNext = () => {
    const slug = question.next ? question.next() : question.answers[Object.keys(active)[0]].next
    setActive({})
    next(slug)
  }

  return (
    <Container color={color}>
      <Virus width={100} />
      <Title>{label}</Title>
      {multiple && <Disclaimer>Question à choix multiples</Disclaimer>}
      <AnswerContainer>
        {question.answers.map((answer, key) => (
          <Answer
            key={key}
            answer={answer}
            question={question}
            onClick={handleClick}
            active={active[key]}
            index={key}
          />
        ))}
      </AnswerContainer>
      <Next onClick={handleNext}>Suivant</Next>
    </Container>
  )
}

export default Question
