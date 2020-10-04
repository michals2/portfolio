import * as React from "react";
import styled from "styled-components";
import sharedStyled from "../styles/shared";

interface ContainerProps {
  split?: string;
}

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
const Foo = () => <StyledFoo>Foo</StyledFoo>;

function Child({ component, split, children }: any) {
  if (component) return <Foo />;
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
          { component: "Foo" },
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
    <Container split={state.split}>
      {state.children.map((child) => (
        <Child {...child} />
      ))}
    </Container>
  );
}

export default Tiles;
