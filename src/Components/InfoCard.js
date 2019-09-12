import React from "react";

const InfoCard = ({
  jobName,
  subclass,
  weapons,
  properties,
  stats,
  hideInfoCard,
  showInfoCard
}) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "10",
        border: "10px solid blue",
        top: "10vh",
        height: "500px",
        width: "500px",
        background: "lightGray",
        left: "0",
        right: "0",
        margin: "0 auto",
        fontSize: "50px"
      }}
    >
      <p>Info Card</p>
      {jobName}
      {subclass}
      {weapons}
      {properties}
      {stats}
      <div className="closeButton" onClick={hideInfoCard}>
        X
      </div>
      <div>Previous</div>
      <div onClick={showInfoCard}>Next</div>
    </div>
  );
};

export default InfoCard;
