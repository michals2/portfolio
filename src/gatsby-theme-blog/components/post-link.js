/** @jsx jsx */
import { Styled, jsx, css } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, tags }) => (
  <article>
    <header>
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
    </header>
    <section
      css={css({
        fontSize: "8px",
      })}
    >
      {tags.map((tag, i) =>
        i === 0 ? <span>{tag}</span> : <span> &bull; {tag}</span>
      )}
    </section>
  </article>
)

export default PostLink
