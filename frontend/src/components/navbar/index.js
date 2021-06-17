import React from 'react';
import {FaRobot} from 'react-icons/fa';

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './navbar_elements';

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Robosolutions</NavLogo>
          <MobileIcon>
            <FaRobot/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/guides">Guides</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contactUs">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
