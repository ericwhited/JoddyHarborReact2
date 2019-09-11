import React from "react";
import styled from "styled-components";

const MenuIcon = styled.div`
  color: #fff;
  height: 50px;
  width: 50px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffe200 1.06%, #ff9900 100%);
`;

const MenuDropdownIcon = ({ menuOption, changeMenu }) => {
  return <MenuIcon onClick={event => changeMenu(event)}>{menuOption}</MenuIcon>;
};

export default MenuDropdownIcon;
