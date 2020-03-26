import { RouteComponentProps } from "@reach/router"

import React from "react"

import Layout from "src/layout"

const Home: React.FC<RouteComponentProps> = () => (
  <Layout title="Home">
    <h1>TODO</h1>
  </Layout>
)

export default Home
