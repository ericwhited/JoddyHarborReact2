import React from "react";
import styled from "styled-components";

let style = null;

const Logo = props => {
  if (props.size === "small") {
    style = {
      height: "60px",
      margin: "1rem 0 0 0",
      textAlign: "left",
      display: "block"
    };
  } else
    style = {
      margin: "1.5rem 0"
    };
  return <img style={style} src="../assets/logo.png" alt="logo" />;
};

// const Logo = props => <img style={style} src="../assets/logo.png" />;

export default Logo;
