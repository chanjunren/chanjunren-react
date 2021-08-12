import React, { useCallback, useContext } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import RsLogo from '../images/rsLogo.png';

import useForm from '../../shared/hooks/form_hook';
import useHttpClient from '../../shared/hooks/http_hook';
import { BASE_ADDRESS } from '../../util/values';
import { AuthContext } from '../components/shared/auth_context';
import CustomisedSnackBar from '../../shared/components/snackbar';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AuthStyles from './auth_style';
import { withTheme } from '../../util/theme';

const AuthPage = () => {
  const authContext = useContext(AuthContext);
  const formValidators = [];
  const [formState, formInputHandler, formFocusHandler] = useForm({
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

  const pageFocusHandler = useCallback((event) => {
    formFocusHandler(event.target.id, true);
  }, []);

  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();

  let responseData;
  const onLoginHandler = async (event) => {
    event.preventDefault();
    try {
      responseData = await sendRequest(
        `${BASE_ADDRESS}/api/users/login`,
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
            <div className={classes.controlPanel}>
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
