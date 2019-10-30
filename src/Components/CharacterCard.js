import React from "react";
import styled, { css } from "styled-components";

// Figure out how to change the background based on props or something so that each character box has the right job photo there.
const Styleddiv = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  width: 118px;
  height: 120px;
  /* border: 2px solid black; */
  /* transform: skew(-20deg); */
  display: inline-block;
  font-size: 14px;
  margin: 5px 0;
  /* background-image: url(${props => props.backgroundImage}); */
`;

// make a shownext info handler in here and change ID
// make a shownext info handler in here and change ID
// make a shownext info handler in here and change ID

const CharacterCard = ({
  name,
  onClick,
  setJobInformation,
  event,
  backgroundImage,
  index,
  consolelog,
  id,
  showInfoCard,
  image
}) => {
  return (
    <Styleddiv
      image={image}
      onClick={event => {
        showInfoCard(index);
        setJobInformation(index, index, name);
      }}
    ></Styleddiv>
  );
};
export default CharacterCard;
