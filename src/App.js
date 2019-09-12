import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import jobs from "./jobs";
import InfoCard from "./Components/InfoCard";

class App extends Component {
  state = {
    showInfoCard: false,
    characterCardSelected: ""
  };

  showInfoCardHandler = (event, jobName) => {
    this.setState({
      showInfoCard: true,
      characterCardSelected: jobName
    });
    console.log(event.target);
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
            showInfoCard={this.showInfoCardHandler}
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
                jobName={job.name}
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

// When clicking the next arrow on the infoCard .. fire the same event handler once u click on
// any of the CharacterCard components. figure out how to advance it to the next character in the index

export default App;
