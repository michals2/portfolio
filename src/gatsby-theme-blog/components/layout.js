import React from "react"
import { css, Themed } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import Quote from "../../components/quote"

const themeUIComponents = {
  a: ({ href, children }) => <Themed.a href={href}>{children}</Themed.a>,
  blockquote: ({ children }) => {
    return <Quote>{children}</Quote>
  },
}

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <MDXProvider components={themeUIComponents}>
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
    </MDXProvider>
  )
}

export default Layout
