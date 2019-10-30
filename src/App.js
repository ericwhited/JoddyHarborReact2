import React, { Component } from "react";
import "./App.css";
import CharacterList from "./Containers/CharacterList";
import SecondApp from "./Components/SecondApp";

class App extends Component {
  // state = {
  //   showInfoCard: false,
  //   // characterCardSelected: "",
  //   currentJobInfo: [
  //     { name: "" },
  //     { subclass: "" },
  //     { weapons: "" },
  //     { properties: "" },
  //     { stats: "" }
  //     //   etc
  //   ]
  // };

  // showInfoCardHandler = (event, name, subclass) => {
  //   this.setState({
  //     showInfoCard: true
  //   });
  //   console.log("ShowInfoCardHandler Fired");
  // };

  // hideInfoCardHandler = () => {
  //   this.setState({ showInfoCard: false });
  // };

  // setJobInformationHandler = (
  //   event,
  //   name,
  //   subclass,
  //   weapons,
  //   properties,
  //   stats
  // ) => {
  //   this.setState({
  //     currentJobInfo: [
  //       { name: name },
  //       { subclass: subclass },
  //       { weapons: weapons },
  //       { properties: properties },
  //       { stats: stats }
  //     ]
  //   });
  //   // console.log("SET-jobInformationHandler fired", this.state.currentJobInfo);
  //   // console.log("this is the event" + " " + event);
  // };

  render() {
    // let infocard = null;

    // if (this.state.showInfoCard) {
    //   infocard = (
    //     <div>
    //       <InfoCard
    //         jobName={this.state.currentJobInfo[0].name}
    //         subclass={this.state.currentJobInfo[1].subclass}
    //         weapons={this.state.currentJobInfo[2].weapons}
    //         properties={this.state.currentJobInfo[3].properties}
    //         stats={this.state.currentJobInfo[4].stats}
    //         setJobInformation={event => this.setJobInformationHandler(event)}
    //         hideInfoCard={this.hideInfoCardHandler}
    //         showInfoCard={event => this.showInfoCardHandler(event)}
    //       />
    //     </div>
    //   );
    // }

    return (
      <div className="App" style={{ overflow: "hidden", height: "98vh" }}>
        <div
          className="character-cards-container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "98vh"
            // display: "none"
          }}
        >
          {/*
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
        */}
          <CharacterList
            style={{ border: "3px solid red" }}
            // showInfoCardHandler={this.showInfoCardHandler}
          />
          {/* {infocard} */}
        </div>
        <SecondApp style={{ display: "none" }} />
      </div>
    );
  }
}

// When clicking the next arrow on the infoCard .. fire the same event handler once u click on
// any of the CharacterCard components. figure out how to advance it to the next character in the index

export default App;
