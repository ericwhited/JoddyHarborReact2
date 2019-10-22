import React from "react";

const style = {
  position: "absolute",
  zIndex: "10",
  border: "10px solid blue",
  top: "10vh",
  // height: "500px",
  width: "70%",
  background: "lightGray",
  left: "0",
  right: "0",
  margin: "0 auto",
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
  setJobInformation
}) => {
  return (
    <div style={style}>
      <p>Info Card</p>
      {jobName}, {subclass}, {weapons}, {properties}, {stats}
      <div className="closeButton" onClick={hideInfoCard}>
        X
      </div>
      <div>Previous</div>
      <div onClick={setJobInformation}>Next</div>
    </div>
  );
};

export default InfoCard;
