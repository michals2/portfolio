import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Luke Michals</h1>
      <a href="https://github.com/michals2">GitHub</a>
    </StyledHeader>
  );
};

export default Header;
