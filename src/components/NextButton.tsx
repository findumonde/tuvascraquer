import styled from "styled-components"

import BaseButton from "src/components/Button"
import { COLORS, FONTS } from "src/helpers/constants"

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
`

export default NextButton
