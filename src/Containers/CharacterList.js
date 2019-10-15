import React, { Component } from "react";
import CharacterCard from "../Components/CharacterCard";
import jobs from "../jobs";

class CharacterList extends Component {
  //   state = {
  //     showInfoCard: false,
  //     // characterCardSelected: "",
  //     currentJobInfo: [
  //       { name: "" },
  //       { subclass: "" },
  //       { weapons: "" },
  //       { properties: "" },
  //       { stats: "" }
  //       //   etc
  //     ]
  //   };

  setJobInformationHandler = (
    event,
    name,
    subclass,
    weapons,
    properties,
    stats
  ) => {
    this.setState({
      currentJobInfo: [
        { name: name },
        { subclass: subclass },
        { weapons: weapons },
        { properties: properties },
        { stats: stats }
      ]
    });
    // console.log("SET-jobInformationHandler fired", this.state.currentJobInfo);
    // console.log("this is the event" + " " + event);
  };

  renderCharacterCard = props => {
    return jobs.map(job => {
      return (
        <CharacterCard
          name={job.name}
          key={job.name}
          showInfoCard={props.showInfoCardHandler}
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
    });
  };

  render() {
    return this.renderCharacterCard();
  }
}

export default CharacterList;
