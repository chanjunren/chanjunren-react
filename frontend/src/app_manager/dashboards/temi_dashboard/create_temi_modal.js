import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import useForm from '../../../shared/hooks/form_hook';
import useHttpClient from '../../../shared/hooks/http_hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../../util/form_validators';
import DataContext from '../../shared/data_context';
import SelectUnits from '../shared/select_units';
import { BASE_ADDRESS } from '../../../util/values';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  const [formState, formInputHandler, formFocusHandler] = useForm({
    ownerTextField: {
      value: '',
      isValid: true,
    },
    serialNumberTextField: {
      value: '',
      isValid: true,
    },
  });

  const onOwnerInput = (event) => {
    const ownerValidators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)];
    formInputHandler(event.target.id, event.target.value, ownerValidators);
  };

  const onSerialNumberInput = (event) => {
    const serialNumberValidators = [
      VALIDATOR_REQUIRE(),
      VALIDATOR_MINLENGTH(5),
    ];
    formInputHandler(
      event.target.id,
      event.target.value,
      serialNumberValidators,
    );
  };

  const dataContext = useContext(DataContext);

  const [selectedUnits, setSelectedUnits] = useState([]);

  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();

  const addNewUnit = async () => {
    if (formState.isValid) {
      const selectedIds = selectedUnits.map((appName) => {
        return appNameToIdMap[appName];
      });

      const responseData = await sendRequest(
        `${BASE_ADDRESS}/api/temis`,
        'POST',
        JSON.stringify({
          owner: formState.inputs.ownerTextField.value,
          serialNumber: formState.inputs.serialNumberTextField.value,
          applications: selectedIds,
        }),
        { 'Content-Type': 'application/json' },
      );
      console.log(responseData);
      modalHandler();

      // To update the page
      dataContext.fetchTemiUnits();
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
          <Grid className={classes.paper}>
            <Grid item>
              <TextField
                error={!formState.inputs.ownerTextField.isValid}
                id="ownerTextField"
                label="Owner"
                variant="outlined"
                onInput={onOwnerInput}
              />
            </Grid>
            <Grid item>
              <TextField
                error={!formState.inputs.serialNumberTextField.isValid}
                id="serialNumberTextField"
                label="Serial Number"
                variant="outlined"
                onInput={onSerialNumberInput}
              />
            </Grid>
            <Grid item>
              <SelectUnits
                availableUnits={applications}
                selectedUnits={selectedUnits}
                setSelectedUnits={setSelectedUnits}
              />
            </Grid>

            <Grid item>
              <div>
                <Button color="secondary" onClick={modalHandler}>
                  Cancel
                </Button>
                <Button color="primary" onClick={addNewUnit}>
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
