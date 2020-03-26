import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import normalize from "./normalize"
import style from "./style"
import { ErrorBoundary } from "../helpers/bugsnag"

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${style}
`

const ErrorContainer = styled.div`
  padding: 40px 20px;
  h1 {
    color: #e10f14;
  }
  p {
    margin-top: 40px;
  }
`

// https://github.com/bugsnag/bugsnag-js/blob/next/packages/plugin-react/src/index.js#L9-L12
interface FallbackProps {
  error: Error
  info?: {
    componentStack: string
  }
}

const ErrorComponent: React.FC<FallbackProps> = () => (
  <ErrorContainer>
    <h1>
      <span aria-hidden>🐞</span>
      <br />
      Une erreur est survenue.
    </h1>
    <h2>Essayez de recharger la page.</h2>
  </ErrorContainer>
)

const Container = styled.div``

const Root: React.FC = ({ children }) => (
  <Container>
    <GlobalStyles />
    <ErrorBoundary FallbackComponent={ErrorComponent}>{children}</ErrorBoundary>
  </Container>
)

export default Root
