import React from "react"
import styled from "styled-components"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

const Content = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 30px 80px;
`

const Layout: React.FC = ({ children }) => (
  <>
    <SEO />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)

export default Layout
