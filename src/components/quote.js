import React from "react"
import { Themed, css } from "theme-ui"

const Quote = ({ children, author }) => (
  <>
    <Themed.blockquote
      css={css({
        background: "#f9f9f9",
        "border-left": "10px solid #ccc",
        margin: "1.5em 10px",
        padding: "0.5em 10px",
        color: "black",
        "border-radius": "10px",
      })}
    >
      <p>{children}</p>
    </Themed.blockquote>
    {author ? <p>- {author}</p> : null}
    <br></br>
  </>
)

export default Quote
