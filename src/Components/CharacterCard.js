import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  width: 118px;
  height: 120px;
  display: inline-block;
  font-size: 14px;
  margin: 5px 0;
`;

const CharacterCard = ({
  name,
  setJobInformation,
  index,
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
