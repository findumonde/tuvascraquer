import React from "react"
import styled from "styled-components"

const Container = styled.div``
const Title = styled.h1``
const Score = styled.h2``

interface SummaryProps {
  score: number
}

const Summary: React.FC<SummaryProps> = ({ score }) => {
  return (
    <Container>
      <Title>Terminé</Title>
      <Score>T as un score pourri uesh {score}</Score>
    </Container>
  )
}

export default Summary
