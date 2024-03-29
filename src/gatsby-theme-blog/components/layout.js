import React from "react"
import { css, Themed } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "../hooks/configOptions"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import Quote from "../../components/quote"

// from https://octicons.github.com/icon/link/
const LinkIcon = props => (
  <svg
    {...props}
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="currentcolor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    />
  </svg>
)

const heading = Tag => props => (
  <Tag
    {...props}
    css={css({
      a: {
        visibility: `hidden`,
      },
      ":hover a": {
        visibility: `visible`,
      },
      pointerEvents: `painted`,
    })}
  >
    <Themed.a
      href={`#${props.id}`}
      css={css({
        ml: `-20px`,
        pr: `4px`,
      })}
      aria-label={props.children}
    >
      <LinkIcon />
    </Themed.a>
    {props.children}
  </Tag>
)

const headings = {
  h1: heading(`h1`),
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`),
}

const themeUIComponents = {
  a: ({ href, children }) => (
    <Themed.a href={href} css={css({ color: `primary` })}>
      {children}
    </Themed.a>
  ),
  blockquote: ({ children }) => {
    return <Quote>{children}</Quote>
  },
  ...headings,
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
