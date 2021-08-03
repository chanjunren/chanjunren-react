import React, { useCallback, useContext } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import loginDisplay from '../images/sign_in_svg.svg';
import avatar from '../images/avatar.png';

import './auth_page.css';
import useForm from '../../shared/hooks/form_hook';
import useHttpClient from '../hooks/http_hook';
import { BASE_ADDRESS } from '../../util/values';
import { AuthContext } from '../components/shared/auth_context';
import CustomisedSnackBar from '../../shared/components/snackbar';

const AuthPage = () => {
  const authContext = useContext(AuthContext);
  const formValidators = [];
  const [formState, formInputHandler, formFocusHandler] = useForm({
    usernameInput: {
      value: '',
      isFocused: false,
    },
    passwordInput: {
      value: '',
      isFocused: false,
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
  return (
    <div className="container">
      <img id="login-display" src={loginDisplay} alt="login-display" />
      <CustomisedSnackBar 
        message={errorEncountered}
        success={!!!errorEncountered} 
        open={!!errorEncountered}
        clearError={clearError}/>
      <div className="login-content">
        <form onSubmit={onLoginHandler}>
          <img src={avatar} alt="login-avatar" />
          <h2 className="title">Welcome</h2>
          <div
            className={`input-div one ${
              formState.inputs.usernameInput.isFocused && 'focus'
            }`}
          >
            <div className="icon-holder">
              <FaUserAlt className="fas fa-user" />
            </div>
            <div className="div">
              <h5>Username</h5>
              <input
                id="usernameInput"
                type="text"
                className="input"
                onFocus={pageFocusHandler}
                onInput={pageInputHandler}
              />
            </div>
          </div>
          <div
            className={`input-div pass ${
              formState.inputs.passwordInput.isFocused && 'focus'
            }`}
          >
            <div className="icon-holder">
              <FaLock className="fas fa-lock" />
            </div>
            <div className="div">
              <h5>Password</h5>
              <input
                id="passwordInput"
                type="password"
                className="input"
                onFocus={pageFocusHandler}
                onInput={pageInputHandler}
              />
            </div>
          </div>
          <input type="submit" className="btn" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
