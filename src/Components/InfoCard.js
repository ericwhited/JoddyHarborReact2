import React, { useState } from "react";
import StatTable from "../Components/StatTable";
import styled from "styled-components";
import H1 from "../Components/H1";
import Logo from "../Components/Logo";
import Video from "../Components/Video/Video";
import CloseButton from "../Components/CloseButton";
import SkillTree from "../Components/SkillTree";
// TO DO - convert this to styled-component
const style = {
  position: "absolute",
  zIndex: "10",
  top: "0",
  height: "100vh",
  background: "lightGray",
  left: "0",
  right: "0",
  margin: "0",
  padding: "0 2rem",
  overflow: "hidden"
};

const StyledImg = styled.img`
  position: relative;
  height: 600px;
  right: 25%;
  bottom: 30px;
`;

const SkillButton = styled.div`
  height: 40px;
  width: 60px;
  color: white;
  font-size: 25px;
  background: red;
  position: relative;
  top: -23%;
  left: 90%;
`;

const showSkillStree = () => {};

const InfoCard = ({
  currentJob,
  hideInfoCard,
  nextJob,
  prevJob,
  jobimage,
  videoSource,
  showSkillTreeHandler
}) => {
  const [skillTreeShowing, setSkillTreeShowing] = useState(false);
  return (
    <div style={style}>
      <Logo size="small" close={hideInfoCard} />
      <CloseButton hideInfoCard={hideInfoCard} />
      <Video source={videoSource} style={{ fontSize: "50px" }} />
      <H1>{currentJob.name}</H1>
      <StatTable
        weapons={currentJob.weapons}
        properties={currentJob.properties}
        stats={currentJob.stats}
        nextJob={nextJob}
        prevJob={prevJob}
      />
      <StyledImg src={jobimage} alt={currentJob.jobName} />
      <SkillButton onClick={() => setSkillTreeShowing(true)}>
        Skills
      </SkillButton>

      {skillTreeShowing && <SkillTree currentJob={currentJob} />}
    </div>
  );
};

export default InfoCard;
