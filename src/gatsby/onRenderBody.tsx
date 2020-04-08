import React from "react"

const onRenderBody: GatsbySsr.OnRenderBody = ({ setHeadComponents }) => {
  const tags = [
    <link
      key="fonts"
      href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Open+Sans:ital,wght@0,400;1,300" // &display=swap
      rel="stylesheet"
    />,
  ]
  if (process.env.GATSBY_PUB) {
    tags.push(
      <script
        key="ads"
        data-ad-client={process.env.GATSBY_PUB}
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    )
  }
  setHeadComponents(tags)
}

export default onRenderBody
