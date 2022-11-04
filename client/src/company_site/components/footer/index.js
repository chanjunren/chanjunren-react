import React from 'react';

import './footer.css';
import Button from '@material-ui/core/Button';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="footer-wrapper">
        <div id="footer-links-container">
          <div className="footer-links-wrapper">
            <div className='footer-link-items'>
              <h1 className="footer-link-title">About Us</h1>
              <small>
                We provide end-to-end services to deploy and manage fleets of temi(s) - 
                installations, training, custom programming, add-on IoTs, maintenance and repairs.
              </small>
              <h1 className="footer-address">RoboSolutions Pte Ltd</h1>
              <small>
                10 Ubi Crescent #07-50 Ubi TechPark (Lobby C) Singapore 408564
              </small>
              <div>
                <div className='footer-contact'>
                  <MailIcon/>
                  <a className='footer-email' href="mailto:enquiries@robosolutions.sg">
                    enquiries@robosolutions.sg
                  </a>
                </div>
                <div className='footer-contact'>
                  <LocalPhoneIcon/>
                  <small>+(65) 8303 2264</small>
                </div>
              </div>
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
                temi User Manual
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
                href="https://github.com/temistore/usermanual/blob/master/Temi_Center_User_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                temi Center Manual
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
            <small id="website-rights">
              RoboSolutions © {new Date().getFullYear()} All Rights Reserved
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
          </div>
            <nav className="nav-btn">
              <Button href="/signin" variant="outlined" color="secondary">
                Company Portal
              </Button>
              {/* <LinkR className="nav-btn-link" to="/signin">Sign In</LinkR> */}
            </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
