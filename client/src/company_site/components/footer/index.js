import React from 'react';

import './footer.css';
import { Link as LinkS } from 'react-scroll';
import Button from '@material-ui/core/Button';

const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="footer-wrapper">
        <div id="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Robosolutions</h1>
              <LinkS
                className="footer-link"
                to="about"
                smooth={1}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </LinkS>
              <LinkS className="footer-link" to="products">
                Products
              </LinkS>
              <LinkS className="footer-link" to="gallery">
                Gallery
              </LinkS>
              <LinkS className="footer-link" to="apps">
                Applications
              </LinkS>
              <LinkS className="footer-link" to="press">
                Press
              </LinkS>
              <LinkS className="footer-link" to="contactUs">
                Contact Us
              </LinkS>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">temi</h1>
              <a
                className="footer-link"
                href="https://www.robotemi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
              <a
                className="footer-link"
                href="https://github.com/temistore/usermanual/raw/master/temi_User_Manual.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                User Manual
              </a>
              <a
                className="footer-link"
                href="https://center.robotemi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                temi Center
              </a>
              <a
                className="footer-link"
                href="https://www.robotemi.com/specs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Specifications
              </a>
            </div>
          </div>
        </div>
        <section id="social-media">
          <div id="social-media-wrap">
            <LinkS to="/" id="social-logo">
              Robosolutions
            </LinkS>
            <small id="website-rights">
              Robosolutions © {new Date().getFullYear()} All Rights Reserved
            </small>
            {/* <div id="social-icons">
              <a
                className="social-icon-link"
                href="https://www.facebook.com/Temirobosolutions"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="social-icon-link"
                href="https://www.instagram.com/temi_singapore/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="social-icon-link"
                href="https://www.linkedin.com/in/wenchyi-lim-a228637/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
  </div>*/}
            <nav className="nav-btn">
              <Button href="/signin" variant="outlined" color="secondary">
                Company Portal
              </Button>
              {/* <LinkR className="nav-btn-link" to="/signin">Sign In</LinkR> */}
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
