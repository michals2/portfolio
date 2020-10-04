import * as React from "react";
import styled from "styled-components";

const StyledFoo = styled.div`
  flex: 1 1 auto;
  border: 1px solid red;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export default () => <StyledFoo>Foo</StyledFoo>;
