import * as React from "react";
import styled from "styled-components";
import sharedStyled from "../styles/shared";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";

interface ContainerProps {
  split?: string;
}

const ItemTypes = {
  TILE: "tile",
  DROP_TILE: "drop-tile",
};

const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 8px;
  align-items: stretch;
  flex-direction: ${(props) =>
    props.split === "horizontal" ? "row" : "column"};
  flex: 1 1 auto;
  padding: 2px;
  ${sharedStyled.border.blue}
`;

const StyledFoo = styled.div`
  flex: 1 1 auto;
  ${sharedStyled.border.red}
`;
const Foo = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TILE },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <StyledFoo
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      ♘
    </StyledFoo>
  );
};
const StyledBar = styled.div`
  flex: 1 1 auto;
  ${sharedStyled.border.red}
`;
const Bar = () => {
  const [{ isDragging }, drag] = useDrop({
    accept: ItemTypes.TILE,
    hover: () => console.log("hover"),
  });

  return (
    <StyledBar
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      Bar
    </StyledBar>
  );
};

function Child({ component, split, children }: any) {
  if (component && component == "Foo") return <Foo />;
  if (component && component == "Bar") return <Bar />;
  else
    return (
      <Container split={split}>
        {children.map((child: any) => (
          <Child {...child} />
        ))}
      </Container>
    );
}

function Tiles() {
  const [state, setState] = React.useState({
    split: "horizontal",
    children: [
      {
        split: "vertical",
        children: [
          { component: "Foo" },
          { component: "Bar" },
          {
            split: "horizontal",
            children: [{ component: "Foo" }, { component: "Foo" }],
          },
        ],
      },
      { component: "Foo" },
      { component: "Foo" },
    ],
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Container split={state.split}>
        {state.children.map((child) => (
          <Child {...child} />
        ))}
      </Container>
    </DndProvider>
  );
}

export default Tiles;
