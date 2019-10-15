import React from "react";
import styled, { css } from "styled-components";
import zerker from "../assets/zerker.png";

// Figure out how to change the background based on props or something so that each character box has the right job photo there.
const Styleddiv = styled.div`
  /* background: red; */
  /* background-image: url(${zerker}); */
  /* height: 300px; */
  width: 128px;
  border: 2px solid black;
  /* transform: skew(-20deg); */
  display: inline-block;
  font-size: 14px;

  ${props =>
    props.breserker &&
    css`
      background: green;
    `}
`;

const CharacterCard = ({ name, showInfoCard, setJobInformation, event }) => {
  return (
    <Styleddiv
      onClick={event => {
        showInfoCard(event);
        setJobInformation(name);
      }}
    >
      CharacterCard - {name}
    </Styleddiv>
  );
};
export default CharacterCard;
