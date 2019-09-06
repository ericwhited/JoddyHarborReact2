import React from "react";

const InfoCard = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "10",
        border: "10px solid blue",
        top: "0",
        height: "500px",
        width: "500px",
        background: "lightGray"
      }}
    >
      this is a box
      <div>X</div>
    </div>
  );
};

export default InfoCard;
