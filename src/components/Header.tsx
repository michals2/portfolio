import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const SpaceBetweenFlex = styled.header`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background-color: #111111;
  padding: 0 24px;
`;

const Header = () => {
  return (
    <>
      <Helmet>
        <title>LGM</title>
        <meta name="description" content="Luke Michals" />
        <meta
          name="keywords"
          content="Luke, Lucas, Michals, lukemichals, developer, three, threejs"
        />
        <meta name="author" content="Luke Michals" />
      </Helmet>
      <SpaceBetweenFlex>
        <h1>Luke Michals</h1>
        <SpaceBetweenFlex>
          <Link to="/">Home</Link>
          <a href="https://github.com/michals2">GitHub</a>
          <Link to="/essays">Essays</Link>
          <Link to="/projects">Projects</Link>
        </SpaceBetweenFlex>
      </SpaceBetweenFlex>
    </>
  );
};

export default Header;
