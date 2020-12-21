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

const trapezoidHeight = 20;

const Tile = () => {
  return (
    <StyledTile>
      <StyledSVG viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={`M0,0
            L100,0
            l${-1 * trapezoidHeight},${trapezoidHeight}
            L${trapezoidHeight},${trapezoidHeight}
            Z`}
          fill="blue"
        />
        <path
          d={`M100,0
            L100,100
            l${-1 * trapezoidHeight},${-1 * trapezoidHeight}
            L${100 - trapezoidHeight},${trapezoidHeight}
            Z`}
          fill="red"
        />
        <path
          d={`M100,100
            L0,100
            l${trapezoidHeight},-${trapezoidHeight}
            L${100 - trapezoidHeight},${100 - trapezoidHeight}
            Z`}
          fill="green"
        />
        <path
          d={`M0,100
            L0,0
            l${trapezoidHeight},${trapezoidHeight}
            L${trapezoidHeight},${100 - trapezoidHeight}
            Z`}
          fill="yellow"
        />
      </StyledSVG>
    </StyledTile>
  );
};

export default Tile;
