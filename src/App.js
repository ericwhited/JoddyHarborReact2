import React from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import Arrow from "./Components/Arrow";
import jobs from "./jobs";

function App() {
  return (
    <div className="App">
      <div
        className="character-cards-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          // figure out the correct way to make the character-cards-container
          // 100% height of the screen
          // V V V V
          height: "98vh"
        }}
      >
        {jobs.map((job, index) => {
          return <CharacterCard name={job.name} key={job.name} />;
        })}
      </div>
      {/* 
      <Arrow back="back" />
      <Arrow next="next" />
      */}
    </div>
  );
}

export default App;
