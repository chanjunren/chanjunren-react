import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Grid from '@material-ui/core/Grid';
import UserItem from './user_item';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const UserList = (props) => {
  let dense = true;
  const {users} = props;
  console.log(users);
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <div className={classes.demo}>
        <List dense={dense}>
          {users.map((user) => {
            return <UserItem/>
          })}
        </List>
      </div>
    </Grid>
  );
};

export default UserList;
