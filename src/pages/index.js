import React from "react"
import { graphql } from "gatsby"
import PostLink from "../gatsby-theme-blog/components/post-link"
import Footer from "../gatsby-theme-blog/components/home-footer"
import Layout from "../gatsby-theme-blog/components/layout"

const IndexPage = queryResults => {
  console.log(queryResults.data.allMdx.nodes)

  const Posts = queryResults.data.allMdx.nodes.map(node => {
    const postLinkProps = {
      key: node.id,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: node.frontmatter.tags,
      slug: node.slug,
    }

    return <PostLink {...postLinkProps} />
  })

  return (
    <>
      <Layout location="" title="Luke Michals">
        {/* <Header location="/" /> */}
        <div>{Posts}</div>
        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
        slug
      }
    }
  }
`
