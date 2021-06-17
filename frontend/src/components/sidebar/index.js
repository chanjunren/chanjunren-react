import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './sidebar_elements.js';

const SideBar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" >About</SidebarLink>
          <SidebarLink to="/gallery" >Gallery</SidebarLink>
          <SidebarLink to="/guides" >Guides</SidebarLink>
          <SidebarLink to="/contact" >Contact</SidebarLink>
        </SidebarMenu>
        {/* <SidebtnWrap>
        </SidebtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
