import React from "react";
import styled from "styled-components";

const LevelRequirementStyle = styled.div`
  font-size: 30px;
`;

const SkillName = styled.p`
  font-size: 16px;
`;

const LevelRequirement = props => {
  return (
    <LevelRequirementStyle>
      Level{props.level}
      {props.children}
      {console.log(props.skills)}
      {props.skills.map(skill => (
        <SkillName>
          {skill.name} {skill.level_requirements}
        </SkillName>
      ))}
    </LevelRequirementStyle>
  );
};

export default LevelRequirement;
