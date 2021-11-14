import * as React from "react"
import { Link } from "gatsby"
import { css, useColorMode, Themed, Box } from "theme-ui"
import Switch from "./switch"
import Bio from "gatsby-theme-blog/src/components/bio"
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Themed.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Themed.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Themed.a>
      </Themed.h1>
    )
  } else {
    return (
      <Themed.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Themed.a
          as={Link}
          css={css({
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Themed.a>
      </Themed.h3>
    )
  }
}

const iconCss = [{ pointerEvents: `none`, margin: 4 }]

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const Header = ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = () => setColorMode(isDark ? `light` : `dark`)

  return (
    <header>
      <Box
        bg="muted"
        p={3}
        css={css({
          display: "flex",
          "align-content": "center",
          "justify-content": "center",
        })}
      >
        <Box
          css={css({
            maxWidth: 640,
            width: "100%",
          })}
        >
          <div
            css={css({
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
              mb: 3,
            })}
          >
            <Title {...props}>{title}</Title>
            <Switch
              aria-label={`Toggle dark mode ${isDark ? `off` : `on`}`}
              checkedIcon={checkedIcon}
              uncheckedIcon={uncheckedIcon}
              checked={isDark}
              onChange={toggleColorMode}
            />
            {children}
          </div>
          {props.location.pathname === rootPath && <Bio />}
        </Box>
      </Box>
    </header>
  )
}

export default Header
