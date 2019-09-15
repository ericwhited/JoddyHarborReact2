import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import jobs from "./jobs";
import InfoCard from "./Components/InfoCard";

class App extends Component {
  state = {
    showInfoCard: false,
    // characterCardSelected: "",
    currentJobInfo: [
      { name: "" },
      { subclass: "" },
      { weapons: "" },
      { properties: "" },
      { stats: "" }
      //   etc
    ]
  };

  showInfoCardHandler = (event, name, subclass) => {
    this.setState({
      showInfoCard: true
    });
    console.log("ShowInfoCardHandler Fired");
  };

  hideInfoCardHandler = () => {
    this.setState({ showInfoCard: false });
  };

  setJobInformationHandler = (event, name, subclass, weapons, properties) => {
    this.setState({
      currentJobInfo: [
        { name: name },
        { subclass: subclass },
        { weapons: weapons },
        { properties: properties }
        // { stats: stats }
      ]
    });
    console.log("SET-jobInformationHandler fired", this.state.currentJobInfo);
  };

  render() {
    let infocard = null;

    if (this.state.showInfoCard) {
      infocard = (
        <div>
          <InfoCard
            jobName={this.state.currentJobInfo[0].name}
            subclass={this.state.currentJobInfo[1].subclass}
            // weapons={this.job.weapons}
            // properties={this.job.properties}
            // stats={this.job.stats}
            hideInfoCard={this.hideInfoCardHandler}
            showInfoCard={event => this.showInfoCardHandler(event)}
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
                showInfoCard={event => this.showInfoCardHandler(event)}
                setJobInformation={event => {
                  this.setJobInformationHandler(
                    event,
                    job.name,
                    job.subclass,
                    job.weapons,
                    job.properties,
                    job.stats
                  );
                }}
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
