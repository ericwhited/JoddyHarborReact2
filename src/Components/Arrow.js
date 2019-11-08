import React from "react";
import styled from "styled-components";
const StyledArrow = styled.div`
  border: 2px solid white;
  padding: 10px;
  position: relative;
  font-size: 25px;
  display: flex;
`;

const Arrow = ({ right, nextJob, prevJob }) =>
  right ? (
    <StyledArrow style={{ transform: "rotate(180deg)" }} onClick={nextJob}>
      <img src="../assets/arrow.png" alt="arrow" />
    </StyledArrow>
  ) : (
    <StyledArrow onClick={prevJob}>
      <img src="../assets/arrow.png" alt="arrow" />
    </StyledArrow>
  );
export default Arrow;
