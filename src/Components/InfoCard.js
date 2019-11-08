import React from "react";
import StatTable from "../Components/StatTable";
import styled from "styled-components";
import H1 from "../Components/H1";
import Logo from "../Components/Logo";
import Video from "../Components/Video/Video";
import CloseButton from "../Components/CloseButton";
// TO DO - convert this to styled-component
const style = {
  position: "absolute",
  zIndex: "10",
  // border: "10px solid blue",
  top: "0",
  height: "100vh",
  // width: "70%",
  background: "lightGray",
  left: "0",
  right: "0",
  margin: "0",
  padding: "0 2rem",
  overflow: "hidden"
  // color: "white"
  // fontSize: "50px"
};

const StyledImg = styled.img`
  position: relative;
  height: 600px;
  right: 25%;
  bottom: 30px;
`;

const InfoCard = ({
  jobName,
  subclass,
  weapons,
  properties,
  stats,
  hideInfoCard,
  showInfoCard,
  setJobInformation,
  nextJob,
  prevJob,
  jobimage,
  videoSource
}) => {
  return (
    <div style={style}>
      <Logo size="small" close={hideInfoCard} />
      <CloseButton hideInfoCard={hideInfoCard} />
      <Video source={videoSource} style={{ fontSize: "50px" }} />
      <H1>{jobName}</H1>
      <StatTable
        weapons={weapons}
        properties={properties}
        stats={stats}
        nextJob={nextJob}
        prevJob={prevJob}
      />
      <StyledImg src={jobimage} alt={jobName} />
    </div>
  );
};

export default InfoCard;
