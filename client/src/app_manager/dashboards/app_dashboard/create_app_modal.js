import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import useForm from '../../../shared/hooks/form_hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../../util/form_validators';
import DataContext from '../../shared/data_context';
import SelectUnits from '../shared/select_units';
import { AuthContext } from '../../../company_site/components/shared/auth_context';
import CustomisedSnackBar from '../../../shared/components/snackbar';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#000',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

export default function CreateAppModal(props) {
  const classes = useStyles();
  const { openModal, modalHandler } = props;
  const [formState, formInputHandler] = useForm({
    nameTextField: {
      value: '',
      isValid: true,
    },
    temiUnits: {
      value: [],
      isValid: true,
    },
  });

  const onNameInput = (event) => {
    const nameValidators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)];
    formInputHandler(event.target.id, event.target.value, nameValidators);
  };

  const setSelectedUnits = (selectedUnits) => {
    formInputHandler('temiUnits', selectedUnits, []);
  };

  const dataContext = useContext(DataContext);
  const authContext = useContext(AuthContext);
  const temiUnits = [];
  const temiUnitsMap = {};

  dataContext.temiUnits.forEach((unit) => {
    temiUnits.push(unit.serialNumber);
    temiUnitsMap[unit.serialNumber] = unit.id;
  });
  const { sendRequest, errorEncountered, clearError } = dataContext;

  const addNewUnit = async () => {
    if (formState.isFormValid) {
      const selectedIds = formState.inputs.temiUnits.value.map(
        (serialNumber) => {
          return temiUnitsMap[serialNumber];
        },
      );
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/api/apps/`,
          'POST',
          JSON.stringify({
            name: formState.inputs.nameTextField.value,
            units: selectedIds,
          }),
          {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authContext.token,
          },
        );
        modalHandler();
      } catch (err) {
        console.error(err);
      } finally {
        // To update the page
        dataContext.fetchApplications(authContext.token);
      }
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
      <React.Fragment>
        <CustomisedSnackBar
          message={errorEncountered}
          success={!!!errorEncountered}
          open={!!errorEncountered}
          clearError={clearError}
        />
        <Fade in={openModal}>
          <form>
            <Grid className={classes.paper}>
              <Grid item>
                <TextField
                  error={!formState.inputs.nameTextField.isValid}
                  id="nameTextField"
                  label="App Name"
                  variant="outlined"
                  color="secondary"
                  onInput={onNameInput}
                />
              </Grid>
              <Grid item>
                <SelectUnits
                  availableUnits={temiUnits}
                  selectedUnits={formState.inputs.temiUnits.value}
                  setSelectedUnits={setSelectedUnits}
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
      </React.Fragment>
    </Modal>
  );
}
