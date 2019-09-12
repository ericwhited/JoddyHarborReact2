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

  showInfoCardHandler = (event, name) => {
    this.setState({
      showInfoCard: true,
      characterCardSelected: name
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
            // subclass={this.job.subclass}
            // weapons={this.job.weapons}
            // properties={this.job.properties}
            // stats={this.job.stats}
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

// When clicking the next arrow on the infoCard .. fire the same event handler once u click on
// any of the CharacterCard components. figure out how to advance it to the next character in the index

export default App;
