import React, { Component } from "react";
import CharacterCard from "../Components/CharacterCard";
import styled from "styled-components";
import jobs from "../jobs";

const StyledCharacterList = styled.div`
  border: 4px solid red;
`;

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

  clicked = () => {
    console.log("clicked the jawn");
  };

  renderCharacterCard = props => {
    console.log("[renderCharacterCardProps]");
    console.log(props);

    return (
      <StyledCharacterList className="characterListContainer">
        {jobs.map(job => {
          const imagename = job.name;
          return (
            <CharacterCard
              name={job.name}
              key={job.name}
              image={`/assets/${imagename}.png`}
              // showInfoCard={props.showInfoCardHandler}
              // showInfoCard={props.showInfoCardHandler}
              onClick={this.clicked}
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
        ;
      </StyledCharacterList>
    );
  };

  // const thisJawn = (props) => {
  //   <p onClick={props.clicked}>
  //     {props.yeah}
  //   </p>
  // }

  render() {
    return this.renderCharacterCard();
  }
}

export default CharacterList;
