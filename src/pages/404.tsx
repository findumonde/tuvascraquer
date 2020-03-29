import React from "react"
import { Link } from "gatsby"

import Layout from "src/layout"

const NotFoundPage: GatsbyPage = () => (
  <Layout>
    <h1>404</h1>
    <p>Cette page n’existe pas</p>
    <Link to="/">Revenir à l’accueil</Link>
  </Layout>
)

export default NotFoundPage
