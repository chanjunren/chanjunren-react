import React, { useContext, useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '../../../util/theme';
import UserTable from './user_table';
import CustomisedSnackBar from '../../../shared/components/snackbar';
import DataContext from '../../shared/data_context';
import DeleteModal from '../shared/delete_modal';

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
  const { users, fetchAppUsers, isLoading, errorEncountered, clearError } =
    useContext(DataContext);

  useEffect(() => {
    fetchAppUsers();
  }, []);

  const [openDeleteModal, toggleDeleteModal] = useState(false);
  const [deleteEndpoint, setDeleteEndpoint] = useState();
  const showDeleteModal = (link) => {
    toggleDeleteModal(true);
    setDeleteEndpoint(link);
  };

  const hideDeleteModal = (event) => {
    toggleDeleteModal(false);
  };

  return (
    <div className={classes.root}>
      <CustomisedSnackBar
        message={errorEncountered}
        success={!!!errorEncountered}
        open={!!errorEncountered}
        clearError={clearError}
      />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <DeleteModal
        openModal={openDeleteModal}
        hideDeleteModal={hideDeleteModal}
        deleteEndpoint={deleteEndpoint}
        deleteMessage="Are you sure you want to delete this user?"
      />
      <div className={classes.tableRoot}>
        <UserTable users={users} showDeleteModal={showDeleteModal}/>
      </div>
    </div>
  );
};

export default withTheme(UserDashboard);
