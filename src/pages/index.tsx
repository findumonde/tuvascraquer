import React, { useState, useEffect } from "react"

import Layout from "src/layout"
import Background from "src/components/Background"
import Question from "src/components/Question"
import Result from "src/components/Result"
import { START } from "src/helpers/constants"
import Home from "src/components/Home"
import { Slug, IQuestion, Translation } from "src/types"
import { LangProvider } from "src/components/LangContext"

interface ContentProps {
  data: Record<Slug, IQuestion>
}

const Content: React.FC<ContentProps> = ({ data }) => {
  const [current, setCurrent] = useState<undefined | Slug | "RESULT">()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    window.scroll(0, 0)
  }, [current])

  if (current === "RESULT") {
    return <Result points={total} />
  }

  if (current) {
    const handleNext = (points: number, slug?: Slug) => {
      setTotal(total + points)
      setCurrent(slug || "RESULT")
    }

    const question = data[current]

    return (
      <>
        <Background theme={question.theme} />
        <Question key={current} question={question} next={handleNext} />
      </>
    )
  }

  const handleStart = () => {
    setCurrent(START)
  }

  return <Home start={handleStart} />
}

interface Props {
  data: Record<Slug, IQuestion>
  translation: Translation
}

const IndexPage: GatsbyPage<any, Props> = ({ pageContext: { data, translation } }) => {
  return (
    <Layout>
      <LangProvider value={{ translation }}>
        <Content data={data} />
      </LangProvider>
    </Layout>
  )
}

export default IndexPage
