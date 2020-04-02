import React from "react"
import styled from "styled-components"
import Icon from "src/images/flag.svg"

const Link = styled.a`
  position: absolute;
  right: 0;
  top: 0;
`

const Flag: React.FC = () => {
  return (
    <Link href="https://whenwillyoucrack.com/" title="Version UK">
      <Icon width={50} />
    </Link>
  )
}

export default Flag
