/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const fs = require("fs").promises
const glob = require("glob")

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

exports.onPostBuild = async () => {
  const publicPath = path.join(__dirname, "public")
  const hash = process.env.GATSBY_RELEASE

  const jsonFiles = glob.sync(`${publicPath}/page-data/**/page-data.json`)
  console.log("[onPostBuild] Duplicating the following files:")
  for (const file of jsonFiles) {
    console.log(file)
    const newFilename = file.replace(`page-data.json`, `page-data.${hash}.json`)
    await fs.copyFile(file, newFilename)
  }

  const htmlAndJSFiles = glob.sync(`${publicPath}/**/*.{html,js}`)
  htmlAndJSFiles.push(`${publicPath}/_headers`)
  console.log("[onPostBuild] Replacing page-data.json references in the following files:")
  for (const file of htmlAndJSFiles) {
    const stats = await fs.stat(file, "utf8")
    if (!stats.isFile()) continue
    console.log(file)
    const content = await fs.readFile(file, "utf8")
    const result = content.replace(/page-data\.json/g, `page-data.${hash}.json`)
    await fs.writeFile(file, result, "utf8")
  }
}
