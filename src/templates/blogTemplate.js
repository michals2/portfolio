import React from "react";
import { graphql } from "gatsby";
import PageTemplate from "./PageTemplate";
import styled from "styled-components";

const BlogPostContainer = styled.div`
  width: 435px;
`;

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <PageTemplate>
      <BlogPostContainer className="blog-post-container">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date_published}</h2>
        <br></br>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
