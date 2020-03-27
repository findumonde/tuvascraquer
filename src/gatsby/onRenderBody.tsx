import React from "react"

const onRenderBody: GatsbySsr.OnRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="fonts"
      href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Open+Sans&display=swap"
      rel="stylesheet"
    />,
  ])
}

export default onRenderBody
