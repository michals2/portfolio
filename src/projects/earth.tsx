import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Earth from "../components/Earth";
import Header from "../components/Header";
import SolarSystem from "../components/SolarSystem";
import "../styles/global.css";

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 30px auto;
`;

function Index() {
  return (
    <main>
      <Helmet>
        <title>LGM</title>
        <meta name="description" content="Luke Michals" />
        <meta
          name="keywords"
          content="Luke, Lucas, Michals, lukemichals, developer, three, threejs"
        />
        <meta name="author" content="Luke Michals" />
      </Helmet>
      <Grid>
        <Header />
        <SolarSystem />
      </Grid>
    </main>
  );
}

export default Index;
