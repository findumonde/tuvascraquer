/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
