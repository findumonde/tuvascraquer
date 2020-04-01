import styled, { keyframes } from "styled-components"
import Worst from "./worst.svg"
import Bad from "./bad.svg"
import Average from "./average.svg"
import Good from "./good.svg"
import Best from "./best.svg"
import { random } from "src/helpers/utils"

export const WorstCharacter = Worst
export const BadCharacter = Bad
export const AverageCharacter = Average
export const GoodCharacter = Good
export const BestCharacter = Best

export const AnimatedCharacters = [Worst, Bad, Average, Good, Best].map(
  (Character) =>
    styled(Character)`
      animation: ${keyframes`
      0% {
        transform: scaleY(1) scaleX(1);
      }
      50% {
        transform: scaleY(1.1) scaleX(1.1);
      }
      100% {
        transform: scaleY(1) scaleX(1);
      }
    `} ${random(5, 3)}s ease-in-out infinite;
    `
)
