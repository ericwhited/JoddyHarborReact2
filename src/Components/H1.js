import React from "react";
import styled from "styled-components";
import "../../src/App.css";

const StyledH1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  /* display: flex; */
  /* align-items: center; */
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
`;

const H1 = props => <StyledH1>{props.children}</StyledH1>;

export default H1;
