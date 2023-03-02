import React, { useContext, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import useForm from '../../../shared/hooks/form_hook';
import { VALIDATOR_REQUIRE } from '../../../util/form_validators';
import DataContext from '../../shared/data_context';
import SelectUnits from '../shared/select_units';
import { AuthContext } from '../../../company_site/components/shared/auth_context';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
  },
  paper: {
    backgroundColor: '#000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

export default function UpdateTemiModal(props) {
  const classes = useStyles();
  const { updateModal, modalHandler, appNameToIdMap, applications, editEndpoint, editOwner, editSerialNumber, editApplications } = props;
  const [formState, formInputHandler] = useForm({
    ownerTextField: {
      value: '',
      isValid: true,
    },
    applications: {
      value: [],
      isValid: true,
    },
  });

  const onOwnerInput = (event) => {
    const ownerValidators = [VALIDATOR_REQUIRE()];
    formInputHandler('ownerTextField', event.target.value, ownerValidators);
  };

  const setSelectedUnits = (selectedUnits) => {
    formInputHandler('applications', selectedUnits, []);
  };

  /*
    when update button is clicked, the useEffect below is called a few times and the modal shows the initial applications picked
    although data are updated correctly, the wrong ui may be misleading
    this boolean param prevents any updates when update button is clicked
    used in updateUnit() method below
  */
  const [isNotUpdated, setNotUpdated] = useState(true);

  // populate form with current setting
  useEffect(() => {
    if (isNotUpdated && editApplications.length !== 0) setSelectedUnits(editApplications);
  }, [editApplications]);

  const dataContext = useContext(DataContext);
  const authContext = useContext(AuthContext);
  const { sendRequest } = dataContext;

  const updateUnit = async () => {
    if (formState.isFormValid) {
      setNotUpdated(false); // prevent update here
      const selectedIds = formState.inputs.applications.value.map((appName) => appNameToIdMap[appName]);

      await sendRequest(
        editEndpoint, 'PATCH',
        JSON.stringify({
          owner: formState.inputs.ownerTextField.value,
          serialNumber: editSerialNumber,
          applications: selectedIds,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + authContext.token,
        },
      );
      modalHandler();

      // To update the page
      dataContext.fetchTemiUnits(authContext.token);
      setNotUpdated(true); // allow update when everything is done
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={updateModal}
      onClose={modalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={updateModal}>
        <form>
          <Grid className={classes.paper} container direction='column' spacing={1}>
            <Grid item>
              <TextField
                error={!formState.inputs.ownerTextField.isValid}
                id="ownerTextField"
                className={classes.textField}
                label="Owner"
                variant="outlined"
                onInput={onOwnerInput}
                color="secondary"
                defaultValue={editOwner}
              />
            </Grid>
            <Grid item>
              <TextField
                id="serialNumberTextField"
                className={classes.textField}
                label="Serial Number"
                variant="outlined"
                color="secondary"
                defaultValue={editSerialNumber}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item>
              <SelectUnits
                availableUnits={applications}
                selectedUnits={formState.inputs.applications.value}
                setSelectedUnits={setSelectedUnits}
                selectApps
              />
            </Grid>

            <Grid item>
              <div>
                <Button onClick={modalHandler}>
                  Cancel
                </Button>
                <Button
                  color="secondary"
                  onClick={updateUnit}
                  disabled={!formState.isFormValid}
                >
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Fade>
    </Modal>
  );
}
