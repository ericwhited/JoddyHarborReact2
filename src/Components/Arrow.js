import React from "react";
import styled from "styled-components";

const StyledArrow = styled.div`
  height: 50px;
  width: 150px;
  border: 2px solid black;
  background: lightgray;
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 25px;
`;

const Arrow = props => {
  return <StyledArrow>{props.next}</StyledArrow>;
};

export default Arrow;
