import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppCard from './app_card';
import { withTheme } from '../../../util/theme';
import Button from '@material-ui/core/Button';
import CreateAppModal from './create_app_modal';
import CustomisedSnackBar from '../../../shared/components/snackbar';
import DataContext from '../../shared/data_context';
import DeleteModal from '../shared/delete_modal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const AppDashboard = (props) => {
  const classes = useStyles();
  const {
    applications,
    fetchApplications,
    isLoading,
    errorEncountered,
    clearError,
  } = useContext(DataContext);

  useEffect(() => {
    fetchApplications();
  }, []);

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

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
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CustomisedSnackBar
        message={errorEncountered}
        success={!!!errorEncountered}
        open={!!errorEncountered}
        clearError={clearError}
      />
      <CreateAppModal openModal={openModal} modalHandler={modalHandler} />
      <DeleteModal
        openModal={openDeleteModal}
        hideDeleteModal={hideDeleteModal}
        deleteEndpoint={deleteEndpoint}
        deleteMessage="Are you sure you want to delete this application?"
        
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            size="medium"
            color="secondary"
            onClick={modalHandler}
          >
            Add Application
          </Button>
        </Grid>
        {applications.map((app) => {
          return (
            <Grid key={app.name} item xs={4}>
              <AppCard
                key={app.name}
                title={app.name}
                id={app.id}
                showDeleteModal={showDeleteModal}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withTheme(AppDashboard);
