import React from "react";
import styled from "styled-components";

const StyledTd = styled.div`
  display: table-cell;
  border: 2px solid black;
  /* background-color: ${props => (props.title ? "red" : null)}; */
  border-radius: 3px;
  background: ${props => (props.title ? "red" : "blue")};
`;

const Td = props => <StyledTd>{props.children}</StyledTd>;

export default Td;
