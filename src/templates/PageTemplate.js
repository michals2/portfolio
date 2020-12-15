import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import "../styles/global.css";
import sharedStyled from "../styles/shared";

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  background-color: black;
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 8px;
  gap: 8px;
`;

function PageTemplate({ children }) {
  return (
    <Layout>
      <Header />
      <Body>{children}</Body>
    </Layout>
  );
}

export default PageTemplate;
