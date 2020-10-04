import * as React from "react";
import styled from "styled-components";
// import Foo from "../components/Foo";
import Header from "../components/Header";
import TriangleBackground from "../components/TriangleBackground";
import "../styles/global.css";
import sharedStyled from "../styles/shared";
import Tiles from "../components/Tiles";

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  ${sharedStyled.border.blue}
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 8px;
  gap: 8px;
`;

function Index() {
  return (
    <Layout>
      <Header />
      <TriangleBackground />
      {/* <Body>
        <Tiles />
      </Body> */}
    </Layout>
  );
}

export default Index;
