import React, { Component } from "react";
import CharacterCard from "../Components/CharacterCard";
import jobsInfo from "../jobs";

import InfoCard from "../Components/InfoCard";

class CharacterList extends Component {
  state = {
    showInfoCard: false,
    currentJobId: 0,
    jobs: jobsInfo
  };

  setJobInformationHandler = (
    event,
    index,
    name,
    subclass,
    weapons,
    properties,
    stats,
    id
  ) => {
    this.setState({
      // currentJobInfo: [
      //   { name: name },
      //   { subclass: subclass },
      //   { weapons: weapons },
      //   { properties: properties },
      //   { stats: stats }
      // ],
      currentJobId: index
    });
    console.log("this.state.currentJobId");
    console.log(this.state.currentJobId);

    // console.log("SET-jobInformationHandler fired", this.state.currentJobInfo);
    // console.log("this is the event" + " " + event);
  };

  showInfoCardHandler = index => {
    this.setState({
      showInfoCard: true,
      currentJobId: index
    });
    console.log("ShowInfoCardHandler Fired");
    console.log(this.state.jobs);
    console.log("this.state.currentJobId");
    console.log(this.state.currentJobId);
  };

  hideInfoCardHandler = () => {
    this.setState({ showInfoCard: false });
  };

  nextJobHandler = () => {
    // let currentJobId = this.state.currentJobId;
    this.setState({
      currentJobId: this.state.currentJobId + 1
    });
    console.log(this.state.currentJobId);
  };

  renderCharacterCard = props => {
    // console.log(props);

    //   return jobs.map((job, index) => {
    //     return (
    //       <CharacterCard
    //         id={index}
    //         key={job.name}
    //         name={job.name}
    //         backgroundImage={job.name}
    //         showInfoCard={this.showInfoCardHandler}
    //         setJobInformation={(event, index) => {
    //           this.setJobInformationHandler(
    //             event,
    //             job.name,
    //             job.subclass,
    //             job.weapons,
    //             job.properties,
    //             job.stats,
    //             job.id
    //           );
    //         }}
    //       />
    //     );
    //   });
    // };

    const jobs = this.state.jobs;

    return jobs.map((job, index) => {
      return (
        <CharacterCard
          id={index}
          key={job.name}
          name={job.name}
          backgroundImage={job.name}
          showInfoCard={index => this.showInfoCardHandler(index)}
          // showInfoCard={id => this.showInfoCardHandler(id)}
          setJobInformation={() => {
            this.setJobInformationHandler(
              // event,
              job.name,
              job.subclass,
              job.weapons,
              job.properties,
              job.stats,
              job.id
            );
          }}
        />
      );
    });
  };

  render() {
    let infocard = null;

    if (this.state.showInfoCard) {
      const [name, subclass, weapons, properties, stats] = this.state.jobs;
      const currentJobId = this.state.currentJobId;
      infocard = (
        <div>
          <InfoCard
            // jobName={this.state.jobs[currentJobId].name}
            // subclass={this.state.currentJobInfo[1].subclass}
            // weapons={this.state.currentJobInfo[2].weapons}
            // properties={this.state.currentJobInfo[3].properties}
            // stats={this.state.currentJobInfo[4].stats}
            setJobInformation={event => this.setJobInformationHandler(event)}
            hideInfoCard={this.hideInfoCardHandler}
            showInfoCard={event => this.showInfoCardHandler(event)}
            nextJob={this.nextJobHandler}
          />
        </div>
      );
    }
    return (
      <div>
        {this.renderCharacterCard()}
        {infocard}
      </div>
    );
  }
}

export default CharacterList;
