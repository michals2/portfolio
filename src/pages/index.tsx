import * as React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";
import styled from "styled-components";

const RedHeader = styled.h2`
  color: red;
`;

function Index() {
  return (
    <main>
      <Helmet>
        <title>LGM</title>
      </Helmet>
      <h1>Portfolio goes here</h1>
      <RedHeader>Name goes here</RedHeader>
    </main>
  );
};

export default Index;
