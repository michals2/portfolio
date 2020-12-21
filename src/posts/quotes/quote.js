import React from "react"
import data from "./quotes.json"

const createRandomQuoteIndex = () => Math.floor(Math.random() * data.length)

const Quote = () => {
  const [randomQuote, setQuote] = React.useState(data[createRandomQuoteIndex()])
  const setRandomQuote = () => setQuote(data[createRandomQuoteIndex()])

  return (
    <>
      <blockquote>
        <p>{randomQuote.Quote}</p>
        <p>{randomQuote.Author}</p>
      </blockquote>
      <button onClick={setRandomQuote}>random</button>
    </>
  )
}

export default Quote
