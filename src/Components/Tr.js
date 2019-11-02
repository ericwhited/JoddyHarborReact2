import React from "react";
import styled from "styled-components";

const StyledTr = styled.div`
  display: table-row;
  /* display: flex; */
  /* border: 2px solid green; */
  /* border-collapse: collapse; */
`;

const Tr = props => <StyledTr>{props.children}</StyledTr>;

export default Tr;
