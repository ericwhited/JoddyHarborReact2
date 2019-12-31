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

  showSkillTreeHandler = () => {
    console.log("showSkillTreeHandler FIRED");

    this.setState({
      SkillContainerShowing: !this.state.SkillContainerShowing
    });
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

    const jobs = this.state.jobs;

    if (this.state.showInfoCard) {
      const currentJobId = this.state.currentJobId;
      infocard = (
        // destructure some of this stuff
        <div>
          <InfoCard
            currentJob={jobs[currentJobId]}
            // jobName={jobs[currentJobId].name}
            // // subclass={currentJobInfo[1].subclass}
            // weapons={jobs[currentJobId].weapons}
            // properties={jobs[currentJobId].properties}
            // stats={jobs[currentJobId].stats}
            // setJobInformation={event => this.setJobInformationHandler(event)}
            hideInfoCard={this.hideInfoCardHandler}
            showInfoCard={event => this.showInfoCardHandler(event)}
            nextJob={this.nextJobHandler}
            prevJob={this.prevJobHandler}
            // showSkillTreeHandler={this.showSkillTreeHandler}
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
