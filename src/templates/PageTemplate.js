import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import "../styles/global.css";

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 8px;
  gap: 8px;
  background-color: #111111;
  padding:  48px;
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
