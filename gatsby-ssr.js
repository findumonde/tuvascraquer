/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import render from "src/gatsby/onRenderBody"
import wrapper from "src/gatsby/wrapPageElement"

export const onRenderBody = render
export const wrapPageElement = wrapper
