import React from "react";
import styled from "styled-components";
import jobs from "../jobs";
import LevelRequirement from "./LevelRequirement";

const SkillContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
`;

const renderLevelRequirement = ([...levels], skills) => {
  return levels.map(level => (
    <LevelRequirement skills={skills}>{level}</LevelRequirement>
  ));
};

const SkillTree = ({ currentJob }) => {
  return (
    <SkillContainer>
      <h1>This is the skill tree for {currentJob.name}</h1>
      {/* <LevelRequirement level="10">
        {currentJob.skills.map(skill => {
          console.log("skill");
          console.log(skill);
          return (
            <div>
              {skill.name} - {skill.level_requirements}
            </div>
          );
        })}
      </LevelRequirement> */}

      {/* <LevelRequirement level="10" skills={currentJob.skills}></LevelRequirement> */}
      {renderLevelRequirement(
        ["10", "20", "30", "40", "50"],
        currentJob.skills
      )}
    </SkillContainer>
  );
};

export default SkillTree;
