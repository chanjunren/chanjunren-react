import React, { useEffect, useState } from 'react';
import useHttpClient from '../../../company_site/hooks/http_hook';
import { BASE_ADDRESS } from '../../../util/values';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '../../../util/theme';
import UserTable from './user_table';

const UserDashboard = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 20,
    },
    tableRoot: {
      width: '100%',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
  const classes = useStyles();
  const [loadedUsers, setLoadedUsers] = useState([]);

  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();
  const fetchUsers = async () => {
    try {
      const responseData = await sendRequest(`${BASE_ADDRESS}/api/users`);
      setLoadedUsers(responseData.users);
    } catch (err) {
      console.error(err);
      clearError();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [sendRequest]);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.tableRoot}>
        <UserTable users={loadedUsers}/>
      </div>
    </div>
  );
};

export default withTheme(UserDashboard);
