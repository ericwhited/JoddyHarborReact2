import React, { Component } from "react";
import CharacterCard from "../Components/CharacterCard";
// import styled from "styled-components";
import jobsInfo from "../jobs";
import InfoCard from "../Components/InfoCard";
import SkillTree from "../Components/SkillTree";

class CharacterList extends Component {
  state = {
    showInfoCard: false,
    currentJobId: 0,
    jobs: jobsInfo,
    SkillContainerShowing: false
  };

  setJobInformationHandler = index => {
    this.setState({
      currentJobId: index
    });
  };

  showInfoCardHandler = index => {
    this.setState({
      showInfoCard: true
    });
  };

  hideInfoCardHandler = () => {
    this.setState({ showInfoCard: false });
  };

  showSkillTreeHandler = () => {
    console.log("showSkillTreeHandler FIRED");

    this.setState({
      SkillContainerShowing: !this.state.SkillContainerShowing
    });
  };

  nextJobHandler = () => {
    this.setState({
      currentJobId: this.state.currentJobId + 1
    });
  };

  prevJobHandler = () => {
    if (this.state.currentJobId < 1) {
    } else {
      this.setState({
        currentJobId: this.state.currentJobId - 1
      });
    }
  };

  // Renders all the jobs in the characterList
  renderCharacterCard = props => {
    const jobs = this.state.jobs;

    return jobs.map((job, index) => {
      return (
        <CharacterCard
          id={index}
          key={job.name}
          name={job.name}
          image={`/assets/minis/${job.name.replace(/\s+/g, "")}.png`}
          showInfoCard={index => this.showInfoCardHandler(index)}
          setJobInformation={event => {
            this.setJobInformationHandler(index);
          }}
        />
      );
    });
  };

  render() {
    let infocard = null;

    const jobs = this.state.jobs;

    if (this.state.showInfoCard) {
      const currentJobId = this.state.currentJobId;
      infocard = (
        // destructure some of this stuff
        <div>
          <InfoCard
            currentJob={jobs[currentJobId]}
            hideInfoCard={this.hideInfoCardHandler}
            showInfoCard={event => this.showInfoCardHandler(event)}
            nextJob={this.nextJobHandler}
            prevJob={this.prevJobHandler}
            videoSource={`../assets/jobVideos/${jobs[currentJobId].name}.mp4#t=9`}
            jobimage={`/assets/${jobs[currentJobId].name.replace(
              /\s+/g,
              ""
            )}.png`}
          />
        </div>
      );
    }
    return (
      <div className="CharListContainer">
        {this.renderCharacterCard()}
        {infocard}
      </div>
    );
  }
}

export default CharacterList;
