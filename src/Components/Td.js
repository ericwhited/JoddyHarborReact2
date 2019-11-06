import React from "react";
import styled from "styled-components";

const StyledTd = styled.div`
padding: 5px 10px;
  display: table-cell;
  height: 40px;
  border: 2px solid black;
  vertical-align: middle;
  /* align-items: center; */
  /* background-color: ${props => (props.title ? "red" : null)}; */
  border-radius: 3px;
  text-align: left;

  background: ${props =>
    props.heading
      ? "linear-gradient(180deg, #FFE200 0%, #FFB800 100%)"
      : "rgba(255, 255, 255, 0.75);"};
  text-align: ${props => (props.heading ? "center;" : "left;")};
  padding-left: ${props => (props.heading ? "0" : "10px")};
  font-weight: ${props => (props.heading ? "bold" : "0")};
`;

const Td = ({ heading, children }) => (
  <StyledTd heading={heading}>{children}</StyledTd>
);

export default Td;
