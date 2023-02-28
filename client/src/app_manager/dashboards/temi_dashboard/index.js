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
import UpdateTemiModal from './update_temi_modal';
import DeleteModal from '../shared/delete_modal';
import { AuthContext } from '../../../company_site/components/shared/auth_context';

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
    addTemiButton: {
      marginTop: '20px'
    }
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

  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetchTemiUnits(token);
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

  const [openCreateModal, toggleCreateModal] = useState(false);
  const createModalHandler = (event) => {
    toggleCreateModal(!openCreateModal);
  };

  const [openUpdateModal, toggleUpdateModal] = useState(false);
  const [editId, setEditId] = useState();
  const [editOwner, setEditOwner] = useState();
  const [editSerialNumber, setEditSerialNumber] = useState();
  const [editApplications, setEditApplications] = useState();
  const updateModalHandler = (event) => {
    toggleUpdateModal(!openUpdateModal);
  };

  const showUpdateModal = (id, owner, serialNumber, applications) => {
    setEditId(id);
    setEditOwner(owner);
    setEditSerialNumber(serialNumber);
    setEditApplications(applications);
    toggleUpdateModal(true);
  };

  const [openDeleteModal, toggleDeleteModal] = useState(false);
  const [deleteEndpoint, setDeleteEndpoint] = useState();
  const showDeleteModal = (link) => {
    toggleDeleteModal(true);
    setDeleteEndpoint(link);
  };

  const hideDeleteModal = (event) => {
    toggleDeleteModal(false);
  }

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
        openModal={openCreateModal}
        modalHandler={createModalHandler}
        appNameToIdMap={appNameToIdMap}
        applications={applications.map((app) => app.name)}
      />
      <UpdateTemiModal
        updateModal={openUpdateModal}
        modalHandler={updateModalHandler}
        appNameToIdMap={appNameToIdMap}
        applications={applications.map((app) => app.name)}
        editId={editId}
        editOwner={editOwner}
        editSerialNumber={editSerialNumber}
        editApplications={editApplications}
      />
      <DeleteModal
        openModal={openDeleteModal}
        hideDeleteModal={hideDeleteModal}
        deleteEndpoint={deleteEndpoint}
        deleteMessage="Are you sure you want to delete this unit?"
        deleteTemiUnit
      />
      <div className={classes.tableRoot}>
        <TemiCollapsibleTable
          units={temiUnits}
          applicationsMap={appIdToNameMap}
          showUpdateModal={showUpdateModal}
          showDeleteModal={showDeleteModal}
        />
        <Button
          className={classes.addTemiButton}
          variant="outlined"
          size="medium"
          color="secondary"
          onClick={createModalHandler}
        >
          Add Temi Unit
        </Button>
      </div>
    </div>
  );
};

export default withTheme(TemiDashboard);
