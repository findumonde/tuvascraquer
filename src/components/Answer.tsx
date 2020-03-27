import React, { useState } from "react"
import styled from "styled-components"
import { COLORS } from "src/helpers/constants"

const Container = styled.div`
  flex: 1;
  min-width: 500px;
`

const Button = styled.div<{ active?: boolean; theme: Slug }>`
  position: relative;
  cursor: pointer;
  margin: 20px;
  background: ${COLORS.general.white};
  padding: 20px;
  border-radius: 4px;
  min-height: 100px;
  ${({ theme }) => `color: ${COLORS[theme].button};
  border: 1px solid ${COLORS[theme].button};`}

  ${({ active, theme }) =>
    active &&
    `background: ${COLORS[theme].button};
  color: ${COLORS.general.white}`}

  &:hover {
    ${({ theme }) => `
    text-shadow: -1px -1px 0 ${COLORS[theme].buttonDarker};`}
    transition: all 0.2ms linear;
  }

  &:active {
    ${({ theme }) => `box-shadow: 0px 0px 0 ${COLORS[theme].buttonDarkest}, 2px 3px 6px ${COLORS[theme].buttonDark};`}
    top: 2px;
  }
`

interface AnswerProps {
  answer: Answer
  question: Question
  active: boolean
  onClick: (answer: Answer) => void
}

const Answer: React.FC<AnswerProps> = ({ answer, question, onClick, active }) => {
  const handleOnclick = () => {
    onClick(answer)
  }

  return (
    <Container>
      <Button theme={question.theme} active={active} onClick={handleOnclick}>
        <span>{answer.label}</span>
      </Button>
    </Container>
  )
}

export default Answer
