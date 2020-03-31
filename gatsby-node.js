/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require("source-map-support").install()
require("ts-node").register() // beware: compile errors are sometimes hidden...

const path = require("path")
const onCreatePage = require("./src/gatsby/onCreatePage").default

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const alias = {
    src: path.resolve(__dirname, "src"),
  }
  if (stage.startsWith("develop")) {
    alias["react-dom"] = "@hot-loader/react-dom"
  }
  actions.setWebpackConfig({
    resolve: {
      alias,
    },
  })
}

exports.onCreatePage = onCreatePage
