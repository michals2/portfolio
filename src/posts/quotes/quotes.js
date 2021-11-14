import React from "react"
import data from "./quotes.json"
import Quote from "../../components/quote"

const Quotes = () => {
  const [quoteData] = React.useState(data)

  return (
    <>
      {quoteData.map(datum => (
        <Quote author={datum.author}>{datum.text}</Quote>
      ))}
    </>
  )
}

export default Quotes
