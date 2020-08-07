import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Earth from "../components/earth";
import Header from "../components/header";
import SolarSystem from "../components/solar-system";
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
        <SolarSystem>
          <Earth />
        </SolarSystem>
      </Grid>
    </main>
  );
}

export default Index;
