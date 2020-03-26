import React from "react"
import { RouteComponentProps } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC<RouteComponentProps> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
