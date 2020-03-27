import React from "react"
import styled from "styled-components"

import { COLORS, THEMES } from "src/helpers/constants"

const Container = styled.div`
  flex: 1;
  min-width: 500px;
`

const Button = styled.div<{ active?: boolean; color: string }>`
  position: relative;
  cursor: pointer;
  margin: 20px;
  background: ${COLORS.white};
  padding: 20px;
  border-radius: 4px;
  min-height: 100px;
  ${({ color }) => `color: ${color};
  border: 1px solid ${color};`}

  ${({ active, color }) =>
    active &&
    `background: ${color};
  color: ${COLORS.white}`}

  &:hover {
    ${({ color }) => `
    text-shadow: -1px -1px 0 ${color};`}
    transition: all 0.2ms linear;
  }

  &:active {
    ${({ color }) => `box-shadow: 0px 0px 0 ${color}, 2px 3px 6px ${color};`}
    top: 2px;
  }
`

interface AnswerProps {
  answer: Answer
  question: Question
  active: boolean
  index: number
  onClick: (index: number) => void
}

const Answer: React.FC<AnswerProps> = ({ answer, question, onClick, active, index }) => {
  const handleOnclick = () => {
    onClick(index)
  }

  return (
    <Container>
      <Button color={THEMES[question.theme].color} active={active} onClick={handleOnclick}>
        <span>{answer.label}</span>
      </Button>
    </Container>
  )
}

export default Answer
