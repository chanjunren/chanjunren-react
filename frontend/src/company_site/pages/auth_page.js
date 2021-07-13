import React from 'react';
import {FaUserAlt, FaLock} from 'react-icons/fa';
import loginDisplay from '../images/sign_in_svg.svg';
import avatar from '../images/avatar.png';

import './auth_page.css';
import useAuth from '../hooks/auth_hook';
// import useHttpClient from '../hooks/http_hook';

const AuthPage = () => {
  const [
    userInputFocused,
    passInputFocused,
    focusUserInput,
    focusPassInput,
    unFocusUserInput,
    unFocusPassInput,
  ] = useAuth();

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
            <div className={`input-div one ${userInputFocused && 'focus'}`}>
              <div className="icon-holder">
                <FaUserAlt className="fas fa-user" />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  onFocus={focusUserInput}
                  onFocusOut={unFocusUserInput}
                />
              </div>
            </div>
            <div className={`input-div pass ${passInputFocused && 'focus'}`}>
              <div className="icon-holder">
                <FaLock className="fas fa-lock" />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  onFocus={focusPassInput}
                  onFocusOut={unFocusPassInput}
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
