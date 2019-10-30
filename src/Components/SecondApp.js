import React from "react";

class SecondApp extends React.Component {
  state = {
    currentUser: 0,
    users: [
      { id: 0, name: "Eric" },
      { id: 1, name: "Zac" },
      { id: 2, name: "Leah" },
      { id: 3, name: "Zenders" },
      { id: 4, name: "D2" }
    ]
  };

  nextHandler = index => {
    this.setState({
      currentUser: this.state.currentUser + 1
    });
    console.log("[nextHandler] Fired!");
    console.log(this.state.currentUser);
    console.log(this.state.users);
    // console.log(this.state.users[currentUser].name);
  };

  prevHandler = () => {
    this.setState({
      currentUser: this.state.currentUser + -1
    });
    console.log("[nextHandler] Fired!");
    console.log(this.state.currentUser);
    console.log(this.state.users);
    // console.log(this.state.users[currentUser].name);
  };

  render() {
    let currentUser = this.state.currentUser;
    return (
      <div>
        <div>
          <button onClick={this.prevHandler}>Prev</button>
          <button onClick={this.nextHandler}>Next</button>
        </div>
        {this.state.users[currentUser].name}
      </div>
    );
  }
}

export default SecondApp;
