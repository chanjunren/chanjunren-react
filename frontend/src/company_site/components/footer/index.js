import React from 'react';

import './footer.css';
import {Link as LinkS} from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="footer-wrapper">
        <div id="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Robosolutions</h1>
              <LinkS className="footer-link"
                to="about">About</LinkS>
              <LinkS className="footer-link"
                to="gallery">Gallery</LinkS>
              <LinkS className="footer-link"
                to="applications">Applications</LinkS>
              <LinkS className="footer-link"
                to="contactUs">Contact Us</LinkS>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Temi</h1>
              <a className="footer-link"
                href="https://www.instagram.com/roadtomagician/">Official Website </a>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Social Media</h1>
              <a className="footer-link"
                href="https://facebook.com">Instagram</a>
              <a className="footer-link"
                href="https://facebook.com">Facebook</a>
              <a className="footer-link"
                href="https://facebook.com">Youtube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
