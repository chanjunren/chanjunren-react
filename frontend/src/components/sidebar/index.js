import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './sidebar_elements.js';

const SideBar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/gallery" onClick={toggle}>Gallery</SidebarLink>
          <SidebarLink to="/guides" onClick={toggle}>Guides</SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        {/* <SidebtnWrap>
        </SidebtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
