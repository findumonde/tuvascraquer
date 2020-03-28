import styled from "styled-components"

import { COLORS } from "src/helpers/constants"

const Button = styled.button`
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid ${COLORS.black};
  padding: 15px 30px;
`

export default Button
