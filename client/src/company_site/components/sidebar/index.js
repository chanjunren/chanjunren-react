import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from './sidebar_elements.js';

import './sidebar.css';

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SideBar = ({ toggle, isOpen }) => {
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const startFromTop = () => {
    window.scrollTo(0,0);
    toggle=false;
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/#home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarRoute to="/aboutus" onClick={startFromTop}>
            About Us
          </SidebarRoute>
          <SidebarLink to="/#products" onClick={toggle} scroll={scrollWithOffset}>
            Products
          </SidebarLink>
          <SidebarLink to="/#gallery" onClick={toggle} scroll={scrollWithOffset}>
            Gallery
          </SidebarLink>
          <SidebarLink to="/#apps" onClick={toggle} scroll={scrollWithOffset}>
            Apps
          </SidebarLink>
          <SidebarRoute to="/blog" onClick={toggle}>
            Blog
          </SidebarRoute>
          <SidebarLink to="/#contactUs" onClick={toggle} scroll={scrollWithOffset}>
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
