import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import CustomAppBar from './components/appbar';
import CustomDrawer from './components/drawer';
import { withTheme } from '../../util/theme';

const drawerWidth = 240;

const drawerZIndex = 5;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const DashboardNav = (props) => {
  const classes = useStyles();
  const [drawerOpen, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <CustomAppBar
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={drawerOpen}
        drawerZIndex={drawerZIndex}
        drawerWidth={drawerWidth}
      />
      <CustomDrawer
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        drawerOpen={drawerOpen}
        drawerZIndex={drawerZIndex}
      />
    </div>
  );
}

export default withTheme(DashboardNav);
