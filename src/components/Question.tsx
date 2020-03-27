import React from "react"
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

const Disclaimer = styled.p``

interface QuestionProps {
  question: Question
  next: (slug: Slug) => void
}

const Question: React.FC<QuestionProps> = ({ question, next }) => {
  const { multiple, label, theme } = question

  const { color, Virus } = THEMES[theme]

  const handleClick = (answer: Answer) => {
    console.log(`Just click on: ${answer.label}`)
  }

  // const handleNext = (answer: Answer) => {
  //   if (multiple) {
  //     typeOf(question.next)(question?.next)
  //   } else {
  //     next(answer?.next)
  //   }
  // }

  return (
    <Container color={color}>
      <Virus width={100} />
      <Title>{label}</Title>
      {multiple && <Disclaimer>Question à choix multiples</Disclaimer>}
      <AnswerContainer>
        {question.answers.map((answer, key) => (
          <Answer key={key} answer={answer} question={question} onClick={handleClick} active={false} />
        ))}
      </AnswerContainer>
    </Container>
  )
}

export default Question
