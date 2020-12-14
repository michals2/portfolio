import * as React from "react";
import "../styles/global.css";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Header from "../components/Header";
import PageTemplate from "../templates/PageTemplate";

const LinkList = styled.ul`
  padding: 16px;
`;

function Essays() {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { public: { eq: true } }
          fileAbsolutePath: { regex: "/projects/" }
        }
        sort: { order: ASC, fields: [frontmatter___date_published] }
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
  const blogPosts = data.allMdx.nodes;

  return (
    <PageTemplate>
      <LinkList>
        {blogPosts.map((blogPost: any) => (
          <li>
            <Link to={blogPost.frontmatter.slug}>
              {blogPost.frontmatter.title}
            </Link>
          </li>
        ))}
      </LinkList>
    </PageTemplate>
  );
}

export default Essays;
