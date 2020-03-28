import React from "react"
import styled from "styled-components"

import { COLORS } from "src/helpers/constants"

const Button = styled.button<{ selected?: boolean; color: string }>`
  flex: 1 0 100%;
  margin: 15px 30px;
  min-height: 60px;
  @media (min-width: 470px) {
    flex: 0 1 calc(50% - 60px);
    min-width: 410px;
    min-height: 80px;
  }
  @media (min-width: 1000px) {
    margin: 30px;
  }
  padding: 20px 30px;
  background-color: ${({ selected, color }) => (selected ? color : COLORS.white)};
  border-color: ${({ selected }) => (selected ? COLORS.white : COLORS.black)};
  color: ${({ selected }) => (selected ? COLORS.white : COLORS.black)};
`

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  choice: Choice
  color: string
  selected: boolean
}

const ChoiceButton: React.FC<Props> = ({ choice, color, selected, ...props }) => (
  <Button color={color} selected={selected} {...props}>
    {choice.label}
  </Button>
)

export default ChoiceButton