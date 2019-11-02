import React, { Component } from "react";
import CharacterCard from "../Components/CharacterCard";
// import styled from "styled-components";
import jobsInfo from "../jobs";
import InfoCard from "../Components/InfoCard";

class CharacterList extends Component {
  state = {
    showInfoCard: false,
    currentJobId: 0,
    jobs: jobsInfo
  };

  setJobInformationHandler = index => {
    this.setState({
      currentJobId: index
    });
    console.log("this.state.currentJobId");
    console.log(this.state.currentJobId);
    console.log("jobInfoHnalder index");
    console.log(index);

    // console.log("SET-jobInformationHandler fired", this.state.currentJobInfo);
    // console.log("this is the event" + " " + event);
  };

  showInfoCardHandler = index => {
    this.setState({
      showInfoCard: true
      // currentJobId: index
    });
    console.log("ShowInfoCardHandler Fired");
    console.log(this.state.jobs);
    // console.log("this.state.currentJobId");
    // console.log(this.state.currentJobId);
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

  prevJobHandler = () => {
    if (this.state.currentJobId < 1) {
      // set it to the last index / id thing
    } else {
      this.setState({
        currentJobId: this.state.currentJobId - 1
      });
      console.log(this.state.currentJobId);
    }
  };

  renderCharacterCard = props => {
    const jobs = this.state.jobs;

    return jobs.map((job, index) => {
      return (
        <CharacterCard
          id={index}
          key={job.name}
          name={job.name}
          image={`/assets/minis/${job.name.replace(/\s+/g, "")}.png`}
          // image={`/assets/star_1.png`}
          showInfoCard={index => this.showInfoCardHandler(index)}
          // showInfoCard={id => this.showInfoCardHandler(id)}
          setJobInformation={event => {
            this.setJobInformationHandler(index);
          }}
        />
      );
    });
  };

  render() {
    let infocard = null;

    if (this.state.showInfoCard) {
      const currentJobId = this.state.currentJobId;
      infocard = (
        // destructure some of this stuff
        <div>
          <InfoCard
            jobName={this.state.jobs[currentJobId].name}
            // subclass={this.state.currentJobInfo[1].subclass}
            weapons={this.state.jobs[currentJobId].weapons}
            properties={this.state.jobs[currentJobId].properties}
            stats={this.state.jobs[currentJobId].stats}
            setJobInformation={event => this.setJobInformationHandler(event)}
            hideInfoCard={this.hideInfoCardHandler}
            showInfoCard={event => this.showInfoCardHandler(event)}
            nextJob={this.nextJobHandler}
            prevJob={this.prevJobHandler}
            videoSource={`../assets/jobVideos/${this.state.jobs[currentJobId].name}.mp4#t=9`}
            jobimage={`/assets/${this.state.jobs[currentJobId].name.replace(
              /\s+/g,
              ""
            )}.png`}
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
