import styled, { keyframes } from "styled-components"

import Worst from "./worst.svg"
import Bad from "./bad.svg"
import Average from "./average.svg"
import Good from "./good.svg"
import Best from "./best.svg"

import { random } from "src/helpers/utils"

const scale = keyframes`
0% {
  transform: scaleY(1) scaleX(1);
}
50% {
  transform: scaleY(1.1) scaleX(1.1);
}
100% {
  transform: scaleY(1) scaleX(1);
}
`

const Characters = [Worst, Bad, Average, Good, Best].map(
  (Character) =>
    styled(Character)`
      animation: ${scale} ${random(5, 2)}s ease-in-out ${random(0, 1)}s infinite;
    `
)

export default Characters
