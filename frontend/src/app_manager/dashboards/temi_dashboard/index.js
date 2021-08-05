import React, { useContext, useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '../../../util/theme';
import TemiCollapsibleTable from './temi_table';
import Button from '@material-ui/core/Button';
import CustomisedSnackBar from '../../../shared/components/snackbar';
import DataContext from '../../shared/data_context';
import CreateTemiModal from './create_temi_modal';

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
  const {
    temiUnits,
    applications,
    fetchTemiUnits,
    isLoading,
    errorEncountered,
    clearError,
  } = useContext(DataContext);

  useEffect(() => {
    fetchTemiUnits();
  }, []);

  // For displaying apps in collapsible table
  const [appIdToNameMap, setAppIdToNameMap] = useState({});
  // For temi unit creation
  const [appNameToIdMap, setAppNameToIdMap] = useState({});
  useEffect(() => {
    let tempIdToNameMap = {};
    let tempNameToIdMap = {};
    for (let i = 0; i < applications.length; i++) {
      tempIdToNameMap[applications[i].id] = applications[i].name;
      tempNameToIdMap[applications[i].name] = applications[i].id;
    }
    setAppIdToNameMap(tempIdToNameMap);
    setAppNameToIdMap(tempNameToIdMap);
  }, [applications]);

  console.log(appIdToNameMap);

  const [openModal, toggleOpenModal] = useState(false);
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
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
      <CreateTemiModal
        openModal={openModal}
        modalHandler={modalHandler}
        appNameToIdMap={appNameToIdMap}
        applications={applications.map((app) => app.name)}
      />
      <div className={classes.tableRoot}>
        <TemiCollapsibleTable
          units={temiUnits}
          applicationsMap={appIdToNameMap}
        />
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          onClick={modalHandler}
        >
          Add Temi Unit
        </Button>
      </div>
    </div>
  );
};

export default withTheme(TemiDashboard);
