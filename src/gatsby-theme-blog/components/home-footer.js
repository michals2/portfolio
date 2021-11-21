import React, { Fragment } from "react"
import { Themed, css } from "theme-ui"
import resume from "../../assets/Resume_Michals.pdf"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const queryResults = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `)

  const socialLinks = queryResults.site.siteMetadata.social

  return (
    <footer
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      {socialLinks.map((platform, i, arr) => (
        <Fragment key={platform.url}>
          <Themed.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.name}
          </Themed.a>
          {arr.length - 1 !== i && (
            <Fragment>
              {` `}&bull;{` `}
            </Fragment>
          )}
        </Fragment>
      ))}
      {` `}&bull;{` `}
      <Themed.a href={resume} download>
        resume
      </Themed.a>
    </footer>
  )
}

export default Footer
