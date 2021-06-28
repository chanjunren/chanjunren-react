import React from 'react';
import {FaRobot} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

import './navbar.css';

const NavBar = ({toggle}) => {
  return (
    <React.Fragment>
      <nav id="main-nav">
        <div id="nav-bar-container">
          <LinkR id="nav-logo" to="/">Robosolutions</LinkR>
          <div id="mobile-icon" onClick={toggle}>
            <FaRobot/>
          </div>
          <ul id="nav-menu">
            <li className="nav-item">
              <LinkS className="nav-link" to="about">About</LinkS>
            </li>
            <li className="nav-item">
              <LinkS className="nav-link" to="gallery">Gallery</LinkS>
            </li>
            <li className="nav-item">
              <LinkS className="nav-link" to="applications">Applications</LinkS>
            </li>
            <li className="nav-item">
              <LinkS className="nav-link" to="contactUs">Contact Us</LinkS>
            </li>
          </ul>
          <nav className="nav-btn">
            <LinkR className="nav-btn-link" to="/signin">Sign In</LinkR>
          </nav>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
