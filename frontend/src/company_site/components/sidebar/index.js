import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './sidebar_elements.js';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  signInButton: {
    fontSize: '20px',
    borderRadius: '25px',
    padding: '20px',
  },
  buttonWrapper: {
    paddingTop: '15px',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SideBar = ({ toggle, isOpen }) => {
  const classes = useStyles();
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
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
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.signInButton}
            href="/signin"
            color="secondary"
          >
            Sign In
          </Button>
        </div>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
