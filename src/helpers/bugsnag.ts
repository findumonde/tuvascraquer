import React from "react"
import bugsnag from "@bugsnag/js"
import bugsnagReact from "@bugsnag/plugin-react"
import Report from "@bugsnag/browser/dist/types/bugsnag-core/report" // tslint:disable-line

const beforeSend = (report: Report): boolean => {
  if (report.errorClass === "ChunkLoadError") {
    return false
  }
}

const bugsnagClient = bugsnag({
  apiKey: process.env.GATSBY_BUGSNAG,
  releaseStage: process.env.NODE_ENV,
  notifyReleaseStages: ["production"],
  appVersion: process.env.GATSBY_RELEASE,
  metaData: {
    deployUrl: process.env.GATSBY_DEPLOY_URL,
    deployDate: process.env.GATSBY_DEPLOY_DATE,
  },
  collectUserIp: false,
  beforeSend,
})
bugsnagClient.use(bugsnagReact, React)

export const ErrorBoundary = bugsnagClient.getPlugin("react")

export default bugsnagClient
