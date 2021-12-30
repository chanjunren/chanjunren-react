import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import RsAppLogo from '../../images/rsLogo.png';
import './navbar.css';
import { withTheme } from '../../../util/theme';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const NavBar = ({ toggle }) => {
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
                smooth={1}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link"
                to="products"
                smooth={1}
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
                smooth={1}
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
                smooth={1}
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
                smooth={1}
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
                smooth={1}
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
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default withTheme(NavBar);
