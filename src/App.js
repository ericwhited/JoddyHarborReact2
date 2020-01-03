import React, { Component } from "react";
import "./App.css";
import CharacterList from "./Containers/CharacterList";
import Logo from "./Components/Logo";
import styled from "styled-components";

const StyledApp = styled.div`
  height: 100vh;
  background-image: url("/assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const App = () => (
  <StyledApp className="App">
    <Logo size="big" />
    <CharacterList />
  </StyledApp>
);

export default App;
