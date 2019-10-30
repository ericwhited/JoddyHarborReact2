import React from "react";

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
  padding: "0",
  fontSize: "50px"
};

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
  prevJob
}) => {
  return (
    <div style={style}>
      <p>Info Card</p>
      {jobName}, {subclass}, {weapons}, {properties}, {stats}
      <div className="closeButton" onClick={hideInfoCard}>
        X
      </div>
      <div onClick={prevJob}>Previous</div>
      <div onClick={nextJob}>Next</div>
    </div>
  );
};

export default InfoCard;
