import React from "react"
import { css, Themed } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Themed.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
    </Themed.root>
  )
}

export default Layout
