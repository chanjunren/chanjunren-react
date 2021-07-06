import React, {useState, useEffect} from 'react';
import {FaRobot} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

import './navbar.css';

const NavBar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const navListener = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navListener);
  }, []);

  const scrollToTopListener = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <nav className={`main-nav ${scrollNav && `main-nav-scrollNav`}`}>
        <div id="nav-bar-container">
          <LinkR id="nav-logo" to="/"
            onClick={scrollToTopListener}>Robosolutions</LinkR>
          <div id="mobile-icon" onClick={toggle}>
            <FaRobot/>
          </div>
          <ul id="nav-menu">
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>About</LinkS>
            </li>
            <li className="nav-item">
              <LinkS className="nav-link"
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Gallery</LinkS>
            </li>
            <li className="nav-item">
              <LinkS className="nav-link"
                to="applications"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Applications</LinkS>
            </li>
            <li className="nav-item">
              <LinkS className="nav-link"
                to="contactUs"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>Contact Us</LinkS>
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
