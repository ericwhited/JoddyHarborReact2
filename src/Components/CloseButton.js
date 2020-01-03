import React from "react";
import styled from "styled-components";

const StyledCloseButton = styled.img`
  position: relative;
  right: -50%;
  top: -40px;
  z-index: 10;
`;

const CloseButton = ({ hideInfoCard, style }) => (
  <StyledCloseButton
    src="../assets/CloseIcon.png"
    alt=""
    onClick={hideInfoCard}
  />
);

export default CloseButton;
