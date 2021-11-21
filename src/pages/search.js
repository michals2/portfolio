import React, { useState } from "react"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"
import useTagMap from "../hooks/useTagMap"

const Search = () => {
  const [searchText, setSearchText] = useQueryParam("searchText", StringParam)
  const tagMap = useTagMap()

  console.log({ searchText, searchText })

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  )
}

export default Search
