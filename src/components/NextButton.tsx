import styled from "styled-components"

import BaseButton from "src/components/Button"
import { COLORS, FONTS, THEMES } from "src/helpers/constants"

const NextButton = styled(BaseButton)<{ disabled?: boolean; color?: string }>`
  border-radius: 40px;
  margin: 0 auto 20px;
  font-family: ${FONTS.title};
  font-size: 1.6em;
  ${({ color }) => `color: ${color || COLORS.black}; border-color: ${color || COLORS.black}`};
  span {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid ${({ color }) => color || COLORS.black};
    margin-left: 10px;
  }
  :disabled {
    color: ${COLORS.black};
    border-color: ${COLORS.black};
    opacity: 0.5;
    span {
      border-left-color: ${COLORS.black};
    }
  }
  :not(:disabled):hover {
    color: ${({ color }) => color || THEMES.red.color};
    border-color: ${({ color }) => color || THEMES.red.color};
    span {
      border-left-color: ${({ color }) => color || THEMES.red.color};
    }
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
    transform: translateY(2px);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }
`

export default NextButton
