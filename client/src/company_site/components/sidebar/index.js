import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './sidebar_elements.js';

import './sidebar.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SideBar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="products" onClick={toggle}>
            Products
          </SidebarLink>
          <SidebarLink to="gallery" onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink to="apps" onClick={toggle}>
            Apps
          </SidebarLink>
          <SidebarLink to="press" onClick={toggle}>
            Press
          </SidebarLink>
          <SidebarLink to="contactUs" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <div id="sidebar-social-icons">
          <a
            className="sidebar-social-icon-link"
            href="https://www.facebook.com/Temirobosolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className="sidebar-social-icon-link"
            href="https://www.instagram.com/temi_singapore/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="sidebar-social-icon-link"
            href="https://www.linkedin.com/company/robosolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="sidebar-social-icon-link"
            href="https://youtube.com/channel/UCxOq44vEG251lq8A39RXnYw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
