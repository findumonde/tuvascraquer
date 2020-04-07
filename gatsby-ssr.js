/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import render from "src/gatsby/onRenderBody"
import root from "src/gatsby/wrapRootElement"
import wrapper from "src/gatsby/wrapPageElement"

export const onRenderBody = render
export const wrapRootElement = root
export const wrapPageElement = wrapper
