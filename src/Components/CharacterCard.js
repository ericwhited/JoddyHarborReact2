import React from "react";
import styled, { css } from "styled-components";

// Figure out how to change the background based on props or something so that each character box has the right job photo there.
const Styleddiv = styled.div`
  background-image: url(${props => props.image});
  height: 300px;
  width: 128px;
  border: 2px solid black;
  /* transform: skew(-20deg); */
  display: inline-block;
  font-size: 14px;
  background-size: cover;

  ${props =>
    props.breserker &&
    css`
      background: green;
    `}
`;

const CharacterCard = ({
  name,
  showInfoCard,
  setJobInformation,
  event,
  image,
  onClick
}) => {
  return (
    <Styleddiv image={image} onClick={onClick}>
      CharacterCard - {name}
    </Styleddiv>
  );
};
export default CharacterCard;
