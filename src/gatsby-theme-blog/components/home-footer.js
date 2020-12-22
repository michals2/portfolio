import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import resume from "../../assets/Resume_Michals_V10.pdf"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
    {` `}&bull;{` `}
    <Styled.a
      href={resume}
      download
    >
      resume
    </Styled.a>
  </footer>
)
export default Footer
