import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AppMenuItemComponent from './app_menu_item_component';

const AppMenuItem = (props) => {
  const { name, link, Icon } = props;
  const classes = useStyles();

  const onClickHandler = (event) => {
    console.log('Hi Im Clicked');
  };

  const MenuItemRoot = (
    <AppMenuItemComponent
      className={classes.menuItem}
      link={link}
      onClick={onClickHandler}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {/* {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />} */}
    </AppMenuItemComponent>
  );

  // const MenuItemChildren = isExpandable ? (
  //   <Collapse in={open} timeout="auto" unmountOnExit>
  //     <Divider />
  //     <List component="div" disablePadding>
  //       {items.map((item, index) => (
  //         <AppMenuItem {...item} key={index} />
  //       ))}
  //     </List>
  //   </Collapse>
  // ) : null;

  return (
    <React.Fragment>
      {MenuItemRoot}
      {/* {MenuItemChildren} */}
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
);

export default AppMenuItem;
