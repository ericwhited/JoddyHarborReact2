import React from "react";
import styled from "styled-components";
import jobs from "../jobs";
import LevelRequirement from "./LevelRequirement";
import H1 from "../Components/H1";
import Logo from "../Components/Logo";

const SkillContainer = styled.div`
  /* height: 100vh; */
  width: 100%;
  background: #252525;
  position: absolute;
  top: 0;
  left: 0;
  overflow: scroll;
`;

const renderLevelRequirement = ([...levels], skills) => {
  return levels.map(level => (
    <LevelRequirement skills={skills}>{level}</LevelRequirement>
  ));
};

const SkillTree = ({ currentJob }) => {
  return (
    <React.Fragment>
      <SkillContainer>
        <Logo size="small" style={{ margin: "20px;" }} />
        <H1>{currentJob.name}</H1>
        {renderLevelRequirement(
          ["10", "20", "30", "40", "50"],
          currentJob.skills
        )}
      </SkillContainer>
    </React.Fragment>
  );
};

export default SkillTree;
