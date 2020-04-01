import React, { useState, useEffect } from "react"

import Layout from "src/layout"
import Background from "src/components/Background"
import Question from "src/components/Question"
import Result from "src/components/Result"
import { START } from "src/helpers/constants"
import Home from "src/components/Home"
import { Slug, IQuestion } from "src/types"

interface Props {
  data: Record<Slug, IQuestion>
  trad: Record<string, string>
}

const IndexPage: GatsbyPage<any, Props> = ({ pageContext: { trad, data } }) => {
  const [current, setCurrent] = useState<undefined | Slug | "RESULT">()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    window.scroll(0, 0)
  }, [current])

  if (current === "RESULT") {
    return (
      <Layout>
        <Result points={total} trad={trad} />
      </Layout>
    )
  }

  if (current) {
    const handleNext = (points: number, slug?: Slug) => {
      setTotal(total + points)
      setCurrent(slug || "RESULT")
    }

    const question = data[current]

    return (
      <Layout>
        <Background theme={question.theme} />
        <Question key={current} question={question} next={handleNext} trad={trad} />
      </Layout>
    )
  }

  const handleStart = () => {
    setCurrent(START)
  }

  return (
    <Layout>
      <Home start={handleStart} trad={trad} />
    </Layout>
  )
}

export default IndexPage
