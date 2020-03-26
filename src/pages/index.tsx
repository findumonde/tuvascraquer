import { RouteComponentProps } from "@reach/router"

import React from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"

const Home: React.FC<RouteComponentProps> = () => (
  <Layout title="Home">
    <Question question={data[0]} />
  </Layout>
)

export default Home
