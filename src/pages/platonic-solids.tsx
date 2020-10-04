import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import sharedStyled from "../styles/shared";
import PlatonicSolids from "../components/PlatonicSolids";

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
      <Body>
        <PlatonicSolids />
      </Body>
    </Layout>
  );
}

export default Index;
