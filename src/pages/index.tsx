import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import "../styles/global.css";
import { useStaticQuery, graphql, Link } from "gatsby";

function Index() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { public: { eq: true } } }) {
        nodes {
          frontmatter {
            slug
            title
            date
          }
        }
      }
    }
  `);
  const blogPosts = data.allMarkdownRemark.nodes;

  return (
    <main>
      <Helmet>
        <title>LGM</title>
        <meta name="description" content="Luke Michals" />
        <meta
          name="keywords"
          content="Luke, Lucas, Michals, lukemichals, developer, three, threejs"
        />
        <meta name="author" content="Luke Michals" />
      </Helmet>
      <Header />
      <div>
        {blogPosts.map((blogPost: any) => (
          <Link to={blogPost.frontmatter.slug}>
            {blogPost.frontmatter.title}
          </Link>
        ))}
      </div>
      <div>Hey</div>
    </main>
  );
}

export default Index;
