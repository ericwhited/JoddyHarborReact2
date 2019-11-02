import React from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  display: table;
  border-collapse: collapse;
  border: 2px solid blue;
  width: 100%;
`;

const Table = props => <StyledTable>{props.children}</StyledTable>;

export default Table;
