import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import RsAppLogo from '../../images/rsLogo.png';
import './navbar.css';
import { withTheme } from '../../../util/theme';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const navListener = () => {
    // if (window.scrollY >= 80) {
    //   setScrollNav(true);
    // } else {
    //   setScrollNav(false);
    // }
    setScrollNav(true)
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
          <LinkR id="nav-logo" to="/" onClick={scrollToTopListener}>
            <img id="rs-logo" src={RsAppLogo} alt={RsAppLogo} />
          </LinkR>
          <div id="mobile-icon" onClick={toggle}>
            <MenuIcon />
          </div>
          <ul id="nav-menu">
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Products
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Gallery
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="apps"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Apps
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="press"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Press
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="contactUs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact Us
              </LinkS>
            </li>
          </ul>
          <div id="social-icons">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/Temirobosolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/temi_singapore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/company/robosolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="social-icon-link"
              href="https://youtube.com/channel/UCxOq44vEG251lq8A39RXnYw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default withTheme(NavBar);
