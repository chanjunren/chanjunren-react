import React, { useReducer } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import loginDisplay from '../images/sign_in_svg.svg';
import avatar from '../images/avatar.png';

import './auth_page.css';
import useForm from '../hooks/form_hook';
// import useHttpClient from '../hooks/http_hook';

const AuthPage = () => {
  const [formState, inputHandler, focusHandler] = useForm({
    usernameInput: {
      value: '',
      isFocused: false,
    },
    passwordInput: {
      value: '',
      isFocused: false,
    },
  });
  
  // const {isLoading, errorEncountered, sendRequest, clearError} =
  //   useHttpClient;
  return (
    <>
      <div className="container">
        <img id="login-display" src={loginDisplay} alt="login-display" />
        <div className="login-content">
          <form>
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
                  onFocus={focusHandler}
                  onInput={inputHandler}
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
                  onFocus={focusHandler}
                  onInput={inputHandler}
                />
              </div>
            </div>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
