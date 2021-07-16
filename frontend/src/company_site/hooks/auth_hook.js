import {useCallback, useEffect, useState} from 'react';

let logoutTimer;

const useAuth = () => {
  const [token, setToken] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((token, uid, tokenExpirationDate) => {
    setToken(token);
    setLoggedInUserId(uid);
    setTokenExpirationDate(
      tokenExpirationDate || new Date(new Date().getTime() + 1000 * 50 * 60),
    );

    // To allow for user to stay logged in
    localStorage.setItem('userData', JSON.stringify({
      uid: uid,
      token: token,
      tokenExpirationDate: tokenExpirationDate,
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setLoggedInUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // Checking if user is already logged in and that token not expired
    if (storedData &&
      storedData.token &&
      new Date(storedData.tokenExpirationDate) > new Date()) {
        login(storedData.token, storedData.uid);
    }
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return {token, login, logout, loggedInUserId};
};

export default useAuth;
