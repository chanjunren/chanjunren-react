import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AuthContext } from '../../../company_site/components/shared/auth_context';

const CustomAppBar = (props) => {
  const { drawerWidth, drawerZIndex, handleDrawerOpen, drawerOpen } = props;
  const authContext = useContext(AuthContext);
  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: drawerZIndex + 1, // TO BE FIXED
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: '#424242',
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      color: '#fff',
    },
    hide: {
      display: 'none',
    },
    logoutButton: {
      width: '100px',
      marginLeft: '600px',
    },
    appBarHeader: {
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
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
          <MenuIcon />
        </IconButton>
        <Typography className={classes.appBarHeader} variant="h6" noWrap>
          Robosolutions App Manager
        </Typography>
        <Button
          className={classes.logoutButton}
          onClick={authContext.logout}
          variant="outlined"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
