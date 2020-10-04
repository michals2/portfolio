import * as React from "react";
import "../styles/global.css";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Header from "../components/Header";

const LinkList = styled.ul`
  padding: 16px;
`;

function Essays() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { public: { eq: true } } }
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);
  const blogPosts = data.allMarkdownRemark.nodes;

  return (
    <>
      <Header />
      <main>
        <LinkList>
          {blogPosts.map((blogPost: any) => (
            <li>
              <Link to={blogPost.frontmatter.slug}>
                {blogPost.frontmatter.title}
              </Link>
            </li>
          ))}
        </LinkList>
      </main>
    </>
  );
}

export default Essays;
