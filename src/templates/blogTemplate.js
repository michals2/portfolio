import React from "react";
import { graphql } from "gatsby";
import PageTemplate from "./PageTemplate";
import styled from "styled-components";

const BlogPostContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BlogPostContent = styled.div`
  width: 680px;
  background-color: #333333;
  padding: 12px;
  box-shadow: 10px 10px 5px #555555;
  border-radius: 5px;
`;

export default function Template({ children, pageContext, ...rest }) {
  return (
    <PageTemplate>
      <BlogPostContainer>
        <BlogPostContent>
          <h1>{pageContext.frontmatter.title}</h1>
          <h2>{pageContext.frontmatter["date-published"]}</h2>
          <br></br>
          {children}
        </BlogPostContent>
      </BlogPostContainer>
    </PageTemplate>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date_published(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
