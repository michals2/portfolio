/** @jsx jsx */
import { Themed, jsx, css } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, tags }) => (
  <article>
    <header>
      <Themed.h2
        sx={{
          mb: 1,
        }}
      >
        <Themed.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Themed.a>
      </Themed.h2>
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
