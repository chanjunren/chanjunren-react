import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const CustomAppBar = (props) => {
  const {drawerWidth, drawerZIndex, handleDrawerOpen, drawerOpen} = props;

  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: drawerZIndex + 1, // TO BE FIXED
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    }
  }));

  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerOpen,
            })}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            I'm a mini drawer! XD
          </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
