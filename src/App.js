import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import jobs from "./jobs";
import InfoCard from "./Components/InfoCard";

class App extends Component {
  state = {
    showInfoCard: false
  };

  showInfoCardHandler = () => {
    this.setState({ showInfoCard: true });
  };

  hideInfoCardHandler = () => {
    this.setState({ showInfoCard: false });
  };

  // TO DO
  // TO DO
  // TO DO
  //  Pass the hideInfoCardHandler function to the X button in
  //  the InfoCard component. Use if statement? Ternary may not
  //  allow props to be passed.

  render() {
    let InfoCard = null;

    return (
      <div className="App" style={{ overflow: "hidden", height: "98vh" }}>
        <div
          className="character-cards-container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "98vh"
          }}
        >
          {jobs.map((job, index) => {
            return (
              <CharacterCard
                name={job.name}
                key={job.name}
                showInfoCard={this.showInfoCardHandler}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
