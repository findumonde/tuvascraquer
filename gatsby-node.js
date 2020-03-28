/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

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

const RESULTS = ["bad", "good"]

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const component = path.resolve(`src/templates/result.tsx`)

  RESULTS.forEach((result) => {
    createPage({
      path: `/result/${result}/`,
      component,
      context: {
        result,
      },
    })
  })
}
