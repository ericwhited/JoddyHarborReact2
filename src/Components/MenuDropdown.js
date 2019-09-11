import React, { Component } from "react";
import MenuDropdownIcon from "../Components/MenuDropdownIcon";

class MenuDropdown extends Component {
  state = {
    activeInfoDisplayMenu: "Details",
    displayMenuOptions: ["Details", "Skills", "Video"]
  };

  activeInfoDisplayMenuHandler = event => {
    console.log("this thing is working");
    console.log(event.target);
    this.setState({
      //   activeInfoDisplayMenu: event.target
    });
  };

  render() {
    return (
      <div
        style={{
          background: "lightGray",
          margin: "0 auto",
          height: "500px"
        }}
      >
        {this.state.activeInfoDisplayMenu}
        {this.state.displayMenuOptions.map((displayMenuOption, index) => {
          return (
            <MenuDropdownIcon
              key={index}
              menuOption={displayMenuOption}
              changeMenu={event => this.activeInfoDisplayMenuHandler(event)}
            />
          );
        })}
        <span>more</span>
      </div>
    );
  }
}

export default MenuDropdown;
