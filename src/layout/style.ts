import { css } from "styled-components"

import { COLORS, FONTS } from "src/helpers/constants"

export default css`
  body {
    text-align: center;
    font-family: ${FONTS.text};
  }
  h1 {
    font-family: ${FONTS.title};
    font-weight: normal;
  }
  button {
    cursor: pointer;
    border-radius: 25px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    border: 2px solid ${COLORS.black};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
  }
`
