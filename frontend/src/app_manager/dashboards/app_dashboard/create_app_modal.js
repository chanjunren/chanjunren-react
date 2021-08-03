import React from 'react';
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
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
} from '../../../util/form_validators';

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
}));

export default function CreateAppModal(props) {
  const classes = useStyles();
  const { openModal, modalHandler } = props;

  const [formState, formInputHandler, formFocusHandler] = useForm({
    nameTextField: {
      value: '',
      isValid: true,
    },
  });

  console.log(formState);
  const nameValidators = [VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)];

  const onNameInput = (event) => {
    formInputHandler(event.target.id, event.target.value, nameValidators);
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
                error={!formState.inputs.nameTextField.isValid}
                id="nameTextField"
                label="App Name"
                variant="outlined"
                onInput={onNameInput}
              />
            </Grid>

            <Grid item>
              <div>
                <Button color="secondary" onClick={modalHandler}>
                  Cancel
                </Button>
                <Button color="primary" onClick={modalHandler}>
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
