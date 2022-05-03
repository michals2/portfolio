import * as React from "react"
import { Themed, css } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, tags }) => {
  console.log({ title, slug, date, tags })
  return (
    <article
      css={css({
        marginBottom: "50px",
      })}
    >
      <header>
        <Themed.h2
          css={css({
            marginBottom: "0",
          })}
        >
          <Themed.a as={Link} sx={{ textDecoration: `none` }} to={slug}>
            {title || slug}
          </Themed.a>
        </Themed.h2>
        <small>{date}</small>
      </header>
      <small>
        {tags &&
          tags.map((tag, i) =>
            i === 0 ? (
              <span key={i}>{tag}</span>
            ) : (
              <span key={i}> &bull; {tag}</span>
            )
          )}
      </small>
    </article>
  )
}

export default PostLink
