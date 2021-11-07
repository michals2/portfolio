import React from "react"
import data from "./quotes.json"
import { Styled, css } from "theme-ui"

const Quotes = () => {
  const [quoteData] = React.useState(data)

  return (
    <>
      {quoteData.map(datum => (
        <Quote {...datum} />
      ))}
    </>
  )
}

const Quote = ({ text, author }) => (
  <>
    <Styled.blockquote
      css={css({
        background: "#f9f9f9",
        "border-left": "10px solid #ccc",
        margin: "1.5em 10px",
        padding: "0.5em 10px",
        color: "black",
        "border-radius": "10px",
      })}
    >
      <p>{text}</p>
    </Styled.blockquote>
    <p>- {author}</p>
    <br></br>
  </>
)

export default Quotes
