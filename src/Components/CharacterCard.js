import React from "react";
import styled, { css } from "styled-components";
// import Berserker from "../../public/assets/Berserker.png";
import jobs from "../jobs";

// Figure out how to change the background based on props or something so that each character box has the right job photo there.
const Styleddiv = styled.div`
  /* background: red; */
  /* height: 300px; */
  width: 128px;
  height: 128px;
  border: 2px solid black;
  /* transform: skew(-20deg); */
  display: inline-block;
  font-size: 14px;
  background-image: url(${props => props.backgroundImage});
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
  showInfoCard
}) => {
  return (
    <Styleddiv
      onClick={event => {
        showInfoCard(index);
        setJobInformation(index, index, name);
      }}
    >
      {name} {index}
    </Styleddiv>
  );
};
export default CharacterCard;
