import React from "react";
import styled from "styled-components";

const StyledCloseButton = styled.img`
  position: relative;
  right: -50%;
  top: -40px;
`;

const CloseButton = ({ hideInfoCard }) => (
  <StyledCloseButton
    src="../assets/CloseIcon.png"
    alt=""
    onClick={hideInfoCard}
  />
);

export default CloseButton;
