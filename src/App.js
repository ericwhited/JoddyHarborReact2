import React, { Component } from "react";
import "./App.css";
import CharacterList from "./Containers/CharacterList";
import Logo from "./Components/Logo";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          overflow: "hidden",
          height: "100vh",
          backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom"
        }}
      >
        <Logo size="big" />
        <CharacterList />
      </div>
    );
  }
}

// When clicking the next arrow on the infoCard .. fire the same event handler once u click on
// any of the CharacterCard components. figure out how to advance it to the next character in the index

export default App;
