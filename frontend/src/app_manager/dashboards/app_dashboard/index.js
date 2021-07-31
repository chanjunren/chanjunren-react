import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useHttpClient from '../../../company_site/hooks/http_hook';
import { BASE_ADDRESS } from '../../../util/values';
import AppCard from './app_card';
import { withTheme } from '../../../util/theme';
import Button from '@material-ui/core/Button';
import CreateAppModal from './create_app_modal';

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
  let applications;
  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();
  const [loadedApplications, setLoadedApplications] = useState([]);

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    console.log('Hi im getting clicked');
    toggleOpenModal(!openModal);
    console.log('OpenModal: ' + openModal);
  };
  useEffect(() => {
    const getApplications = async () => {
      try {
        let responseData = await sendRequest(`${BASE_ADDRESS}/api/apps`);
        console.log(responseData);
        setLoadedApplications(responseData.applications);
      } catch (err) {
        console.error(err);
        clearError();
      }
    };
    getApplications();
  }, [sendRequest]);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CreateAppModal openModal={openModal} modalHandler={modalHandler} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={modalHandler}
          >
            Add Application
          </Button>
        </Grid>
        {loadedApplications.map((app) => {
          return (
            <Grid key={app.name} item xs={4}>
              <AppCard key={app.name} title={app.name} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withTheme(AppDashboard);
