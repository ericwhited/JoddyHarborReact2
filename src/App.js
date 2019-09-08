import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import jobs from "./jobs";
import InfoCard from "./Components/InfoCard";

class App extends Component {
  state = {
    showInfoCard: false,
    characterCardSelected: "hello"
  };

  showInfoCardHandler = (event, name) => {
    this.setState({
      showInfoCard: true,
      characterCardSelected: name
    });
    console.log("showInfoCardHandler Worked!");
    console.log(this.state.characterCardSelected);
  };

  hideInfoCardHandler = () => {
    this.setState({ showInfoCard: false });
  };

  showJobNameHandler = () => {
    // find the job
    console.log("showJobNameHandler Worked!");
  };

  render() {
    let infocard = null;

    if (this.state.showInfoCard) {
      infocard = (
        <div>
          <InfoCard
            jobName={this.state.characterCardSelected}
            hideInfoCard={this.hideInfoCardHandler}
          />
        </div>
      );
    }

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
          {jobs.map(job => {
            return (
              <CharacterCard
                name={job.name}
                key={job.name}
                showInfoCard={event =>
                  this.showInfoCardHandler(event, job.name)
                }
              />
            );
          })}
          {infocard}
        </div>
      </div>
    );
  }
}

export default App;
