import React from 'react';
import {Nav, NavBarContainer, NavLogo} from './navbar_elements';

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLogo href="/">Robosolutions</NavLogo>
        <NavBarContainer/>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
