import React from "react"
import { Link } from "gatsby"

import Layout from "src/layout"

const NotFoundPage: GatsbyPage = () => (
  <Layout>
    <h1>404</h1>
    <p>Page not found</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default NotFoundPage
