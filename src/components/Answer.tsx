import React from "react"
import styled from "styled-components"

import { COLORS } from "src/helpers/constants"

const Button = styled.button<{ active?: boolean; color: string }>`
  flex: 1 0 100%;
  @media (min-width: 460px) {
    flex: 0 1 calc(50% - 60px);
    min-width: 400px;
  }
  margin: 15px 30px;
  cursor: pointer;
  padding: 20px;
  border-radius: 26px;
  min-height: 100px;
  background-color: ${({ active, color }) => (active ? color : COLORS.white)};
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid ${({ active }) => (active ? COLORS.white : COLORS.black)};
  outline: none;
  color: ${({ active }) => (active ? COLORS.white : COLORS.black)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`

interface AnswerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  answer: Answer
  color: string
  active: boolean
}

const Answer: React.FC<AnswerProps> = ({ answer, color, active, ...props }) => (
  <Button color={color} active={active} {...props}>
    {answer.label}
  </Button>
)

export default Answer
