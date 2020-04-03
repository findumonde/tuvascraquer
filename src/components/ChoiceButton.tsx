import React from "react"
import styled from "styled-components"

import { COLORS } from "src/helpers/constants"
import BaseButton from "src/components/Button"
import { Choice } from "src/types"

const Button = styled(BaseButton)<{ selected?: boolean; color: string }>`
  flex: 1 0 100%;
  margin: 15px 30px;
  @media (min-width: 470px) {
    flex: 0 1 calc(50% - 60px);
    min-width: 410px;
  }
  @media (min-width: 1000px) {
    margin: 30px;
    padding: 30px;
  }
  background-color: ${({ selected, color }) => (selected ? color : COLORS.white)};
  border-color: ${({ selected }) => (selected ? COLORS.white : COLORS.black)};
  color: ${({ selected }) => (selected ? COLORS.white : COLORS.black)};
  white-space: pre-line;
`

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color: string
  selected: boolean
}

const ChoiceButton: React.FC<Props> = ({ label, color, selected, ...props }) => (
  <Button color={color} selected={selected} {...props}>
    {label}
  </Button>
)

export default ChoiceButton
