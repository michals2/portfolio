import * as React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Tile = () => {
  return (
    <StyledTile>
      <StyledSVG viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="
            M0,0
            L100,0
            l-20,20
            L20,20
            Z"
          fill="blue"
        />
      </StyledSVG>
    </StyledTile>
  );
};

export default Tile;
