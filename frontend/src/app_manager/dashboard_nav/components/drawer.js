import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import AppMenuItem from './app_menu_item';

const CustomDrawer = (props) => {
  const { window, drawerWidth, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
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

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {appMenuItems.map((item) => (
          <AppMenuItem {...item}/>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default CustomDrawer;
