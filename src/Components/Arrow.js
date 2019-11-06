import React from "react";
import styled from "styled-components";
const StyledArrow = styled.div`
  border: 2px solid white;
  padding: 10px;
  position: relative;
  font-size: 25px;
  ${props => (props.right ? "transform: rotate(180deg);" : null)}
`;

const Arrow = (right, nextJob, prevJob, next) => {
  return (
    <StyledArrow onClick={right ? nextJob : prevJob} right={right}>
      <img src="../assets/arrow.png" alt="arrow" />
      {next}
    </StyledArrow>
  );
};

export default Arrow;
