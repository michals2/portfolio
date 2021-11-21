import { useStaticQuery, graphql } from "gatsby"

const colorMap = {
  "3D": " #34495e ",
  Bitcoin: "#e67e22",
  bitcoin: "#e67e22",
  "Data Visualization": " #8e44ad ",
  lightning: " #f1c40f ",
  web: "#2471a3",
  Web: "#2471a3",
}

const useTagMap = () => {
  const {
    allMdx: { distinct: tags },
  } = useStaticQuery(graphql`
    query UseTagMapQuery {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `)

  const tagMap = tags.reduce((map, tag) => {
    const color = colorMap[tag] ? colorMap[tag] : "grey"
    map[tag] = color
    return map
  }, {})

  return tagMap
}

export default useTagMap
