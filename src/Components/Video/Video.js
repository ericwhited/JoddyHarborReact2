import React from "react";
import "../Video/Video.css";
import styled from "styled-components";

const VideoBackground = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: -200%;
  z-index: -99;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.45);
  }
`;

const Video = ({ source }) => (
  <div>
    <VideoBackground className="VideoBackground">
      <video key={source} muted autoPlay controls replay="true">
        <source src={source} />
      </video>
    </VideoBackground>
  </div>
);

export default Video;
