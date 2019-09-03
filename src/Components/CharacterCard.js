import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
  background: red;
  /* height: 300px; */
  width: 460px;
  border: 2px solid black;
  transform: skew(-20deg);
  display: inline-block;
  font-size: 35px;
`;

const CharacterCard = ({ name }) => {
  return <Styleddiv>{name}</Styleddiv>;
};

export default CharacterCard;
