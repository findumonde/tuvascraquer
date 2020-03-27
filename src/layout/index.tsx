import React from "react"
import styled from "styled-components"

import SEO, { Props as SEOProps } from "./seo"
import Header from "./header"
import Footer from "./footer"

const Content = styled.main`
  max-width: 1000px;
  margin: auto;
  padding: 30px;
`

const Layout: React.FC<SEOProps> = ({ children, ...props }) => (
  <>
    <SEO {...props} />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)

export default Layout
