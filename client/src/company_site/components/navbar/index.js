import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkR, NavLink } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import RsAppLogo from '../../images/rsLogo.png';
import './navbar.css';
import { withTheme } from '../../../util/theme';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

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

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const startFromTop = () => window.scrollTo(0,0);

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
              <LinkR
                className="nav-link"
                to="/"
                onClick={scrollToTopListener}
              >
                Home
              </LinkR>
              <LinkS
              className="nav-link-background"
              to="home"
              spy={true}
              exact="true"
              offset={-80}>home</LinkS>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/aboutus"
                onClick={startFromTop}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                scroll={scrollWithOffset}
                to="/#products"
              >
                Products
              </HashLink>
              <LinkS
                className="nav-link-background"
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
              <HashLink
                className='nav-link'
                scroll={scrollWithOffset}
                to="/#gallery"
              >
                Gallery
              </HashLink>
              <LinkS
                className="nav-link-background"
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
              <HashLink
                className='nav-link'
                scroll={scrollWithOffset}
                to="/#apps"
              >
                Apps
              </HashLink>
              <LinkS
                className="nav-link-background"
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
              <NavLink
                className="nav-link"
                to={"/press"}
                onClick={startFromTop}
              >
                Press
              </NavLink>             
            </li>
            <li className="nav-item">
              <HashLink
                className='nav-link'
                scroll={scrollWithOffset}
                to="/#contactUs"
              >
                Contact Us
              </HashLink>
              <LinkS
                className="nav-link-background"
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
            {/* <Button href="/contactus" variant='outlined' color='secondary'>
              Book a demo
            </Button> */}
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
