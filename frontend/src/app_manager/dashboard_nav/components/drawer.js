import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import AppMenuItem from './app_menu_item';
import { IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const CustomDrawer = (props) => {
  const { drawerWidth, drawerOpen, drawerZIndex, handleDrawerClose } = props;
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: drawerZIndex,
      // whiteSpace: 'nowrap',
      background: theme.palette.background.paper,
      backgroundColor: theme.palette.background.paper,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      background: theme.palette.background.paper,
      backgroundColor: theme.palette.background.paper,
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflow: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      background: theme.palette.background.paper,
      backgroundColor: theme.palette.background.paper,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      background: theme.palette.background.paper,
      // necessary for content to be below app bar ?
      ...theme.mixins.toolbar,
    }
  }));
  const classes = useStyles();

  const appMenuItems = [
    {
      name: 'Applications',
      link: '/applications',
      Icon: CodeRoundedIcon,
    },
    {
      name: 'Temis',
      link: '/temis',
      Icon: AndroidRoundedIcon,
    },
    {
      name: 'Users',
      link: '/users',
      Icon: FaceRoundedIcon,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen
        })
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider/>
      <List>
        {appMenuItems.map((item) => {
          return <AppMenuItem {...item} key={item.name}/>
        })}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
