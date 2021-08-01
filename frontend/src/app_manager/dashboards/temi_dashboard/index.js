import React, { useEffect, useState } from 'react';
import useHttpClient from '../../../company_site/hooks/http_hook';
import { BASE_ADDRESS } from '../../../util/values';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '../../../util/theme';
import TemiCollapsibleTable from './temi_table';
import Button from '@material-ui/core/Button';
import { getAppDataHook } from '../../hooks/data_hook';
import CustomisedSnackBar from '../../../shared/snackbar';

const TemiDashboard = () => {
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
  const { temiUnits, fetchTemiUnits, isLoading, errorEncountered, clearError } =
    getAppDataHook();

  useEffect(() => {
    fetchTemiUnits();
  }, []);

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
      <div className={classes.tableRoot}>
        <TemiCollapsibleTable units={temiUnits} />
        <Button variant="outlined" size="medium" color="primary">
          Add Temi Unit
        </Button>
      </div>
    </div>
  );
};

export default withTheme(TemiDashboard);
