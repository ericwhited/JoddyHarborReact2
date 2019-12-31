import React from "react";
import styled from "styled-components";

const LevelRequirementStyle = styled.div`
  font-size: 18px;
  color: #ffffff;
  background: #393939;
  font-weight: 600;
  text-transform: uppercase;
  margin: 1rem;
  padding: 10px 20px;
  text-align: left;
  border-radius: 3px;
`;

const SkillName = styled.p`
  font-size: 16px;
  background: none;
`;

const LevelRequirement = props => {
  return (
    <LevelRequirementStyle>
      Level {props.level}
      {props.children}
      {props.skills.map(skill => (
        <SkillName>
          {skill.name} {skill.level_requirements}
        </SkillName>
      ))}
    </LevelRequirementStyle>
  );
};

export default LevelRequirement;
