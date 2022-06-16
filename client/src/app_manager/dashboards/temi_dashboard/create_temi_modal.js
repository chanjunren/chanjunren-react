import React, { useContext } from 'react';

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

export default function CreateTemiModal(props) {
  const classes = useStyles();
  const { openModal, modalHandler, appNameToIdMap, applications } = props;
  const [formState, formInputHandler] = useForm({
    ownerTextField: {
      value: '',
      isValid: false,
    },
    serialNumberTextField: {
      value: '',
      isValid: false,
    },
    applications: {
      value: [],
      isValid: true,
    },
  });

  const onOwnerInput = (event) => {
    const ownerValidators = [VALIDATOR_REQUIRE()];
    formInputHandler(event.target.id, event.target.value, ownerValidators);
  };

  const onSerialNumberInput = (event) => {
    const serialNumberValidators = [VALIDATOR_REQUIRE()];
    formInputHandler(
      event.target.id,
      event.target.value,
      serialNumberValidators,
    );
  };

  const setSelectedUnits = (selectedUnits) => {
    formInputHandler('applications', selectedUnits, []);
  };

  const dataContext = useContext(DataContext);
  const authContext = useContext(AuthContext);
  const { sendRequest } = dataContext;

  const addNewUnit = async () => {
    if (formState.isFormValid) {
      const selectedIds = formState.inputs.applications.value.map((appName) => {
        return appNameToIdMap[appName];
      });
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/temis/`,
        'POST',
        JSON.stringify({
          owner: formState.inputs.ownerTextField.value,
          serialNumber: formState.inputs.serialNumberTextField.value,
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
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={modalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
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
              />
            </Grid>
            <Grid item>
              <TextField
                error={!formState.inputs.serialNumberTextField.isValid}
                id="serialNumberTextField"
                className={classes.textField}
                label="Serial Number"
                variant="outlined"
                onInput={onSerialNumberInput}
                color="secondary"
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
                  onClick={addNewUnit}
                  disabled={!formState.isFormValid}
                >
                  Add
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Fade>
    </Modal>
  );
}
