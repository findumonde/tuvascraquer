import styled from "styled-components"

import { COLORS, THEMES } from "src/helpers/constants"

interface Props {
  $selected?: boolean
  $color?: string
}

const Button = styled.button<Props>`
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid ${COLORS.black};
  padding: 15px 30px;
  &,
  span {
    transition-duration: 0.2s;
  }
  &:not(:disabled):hover {
    color: ${({ $color, $selected }) => ($selected ? COLORS.white : $color || THEMES.red.color)};
    border-color: ${({ $color, $selected }) => ($selected ? COLORS.white : $color || THEMES.red.color)};
    span {
      border-left-color: ${({ $color }) => $color || THEMES.red.color};
    }
    transform: translateY(2px);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    box-shadow: 0 0 0 5px ${({ $color }) => $color || "#666666"}66;
  }
`

export default Button
