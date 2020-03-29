import { css } from "styled-components"

import { COLORS, FONTS } from "src/helpers/constants"

export default css`
  body {
    text-align: center;
    font-family: ${FONTS.text};
    overflow-x: hidden;
    color: ${COLORS.black};
  }
  h1,
  h2,
  h3 {
    font-family: ${FONTS.title};
    font-weight: normal;
  }
  button {
    cursor: pointer;
    outline: none;
    background-color: ${COLORS.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    border: none;
  }
  a {
    color: ${COLORS.black};
    text-decoration-color: #aaa;
  }
  @media (max-width: 350px) {
    body {
      font-size: 90%;
    }
  }
`
