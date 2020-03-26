import React from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"

const Home: GatsbyPage = () => (
  <Layout>
    <Question question={data[0]} />
  </Layout>
)

export default Home
