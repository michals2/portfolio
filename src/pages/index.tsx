import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Earth from "../components/earth";
import "../styles/global.css";

const RedHeader = styled.h2`
  color: red;
`;

const Grid = styled.div`
  display: grid;
  height: 100vh;
`;

function Index() {
  return (
    <main>
      <Helmet>
        <title>LGM</title>
      </Helmet>
      <Grid>
        <h1>Portfolio header goes here</h1>
        <RedHeader>Name goes here</RedHeader>
        <Earth />
      </Grid>
    </main>
  );
}

export default Index;
