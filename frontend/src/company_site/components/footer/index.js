import React from 'react';

import './footer.css';
import {Link as LinkS} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
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
        <section id="social-media">
          <div id="social-media-wrap">
            <LinkS to="/" id="social-logo">Robosolutions</LinkS>
            <small id="website-rights">
              Robosolutions © {new Date().getFullYear()}  All Rights Reserved
            </small>
            <div id="social-icons">
              <a className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="Facebook">
                <FaFacebook/>
              </a>
              <a className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="Instagram">
                <FaInstagram/>
              </a>
              <a className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="LinkedIn">
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
