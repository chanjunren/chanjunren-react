import React, { useCallback, useContext } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import RsLogo from '../images/rsLogo.png';

import useForm from '../../shared/hooks/form_hook';
import useHttpClient from '../../shared/hooks/http_hook';
import { AuthContext } from '../components/shared/auth_context';
import CustomisedSnackBar from '../../shared/components/snackbar';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthStyles from './auth_style';
import { withTheme } from '../../util/theme';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const AuthPage = () => {
  const authContext = useContext(AuthContext);
  const formValidators = [];
  const [formState, formInputHandler] = useForm({
    usernameInput: {
      value: '',
      isValid: true,
    },
    passwordInput: {
      value: '',
      isValid: true,
    },
  });

  const pageInputHandler = useCallback((event) => {
    formInputHandler(event.target.id, event.target.value, formValidators);
  }, []);

  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();

  let responseData;
  const onLoginHandler = async (event) => {
    event.preventDefault();
    try {
      responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
        'POST',
        JSON.stringify({
          username: formState.inputs.usernameInput.value,
          password: formState.inputs.passwordInput.value,
        }),
        {
          'Content-Type': 'application/json',
        },
      );

      authContext.login(responseData.token, responseData.username);

      console.log(responseData);
    } catch (err) {
      console.error(err);
    }
  };

  const classes = AuthStyles();

  return (
    <React.Fragment>
      <CustomisedSnackBar
        message={errorEncountered}
        success={!!!errorEncountered}
        open={!!errorEncountered}
        clearError={clearError}
      />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid className={classes.root} container>
        <Grid item className={classes.header} xs={12}>
          <span
            className={classes.logo}
            style={{
              backgroundImage: `url(${RsLogo})`,
            }}
          />
        </Grid>
        <Grid item xs={12} className={classes.body}>
          <form onSubmit={onLoginHandler}>
            <div className={classes.textFieldContainer}>
              <PersonIcon className={classes.icon} />
              <TextField
                error={!formState.inputs.usernameInput.isValid}
                id="usernameInput"
                className={classes.textField}
                label="Username"
                type="text"
                variant="outlined"
                onInput={pageInputHandler}
                color="secondary"
              />
            </div>
            <div className={classes.textFieldContainer}>
              <LockIcon className={classes.icon} />
              <TextField
                error={!formState.inputs.passwordInput.isValid}
                id="passwordInput"
                className={classes.textField}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onInput={pageInputHandler}
                color="secondary"
              />
            </div>

            <div className={classes.controlPanel}>
              <Button
                className={classes.signInButton}
                variant="outlined"
                color="secondary"
                href="/"
              >
                Back To Home
              </Button>
              <Button
                className={classes.signInButton}
                variant="outlined"
                color="secondary"
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withTheme(AuthPage);
