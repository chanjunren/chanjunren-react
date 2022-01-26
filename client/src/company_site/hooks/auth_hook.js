import { useCallback, useEffect, useState } from 'react';

let logoutTimer;

const useAuth = () => {
  const [token, setToken] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState();
  const [role, setUserRole] = useState();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((token, uid, role, expirationDate) => {
    setToken(token);
    setLoggedInUserId(uid);
    setUserRole(role);

    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 50 * 60);

    setTokenExpirationDate(tokenExpirationDate);

    // To allow for user to stay logged in
    localStorage.setItem(
      'userData',
      JSON.stringify({
        uid: uid,
        token: token,
        role: role,
        tokenExpirationDate: tokenExpirationDate.toISOString(),
      }),
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setLoggedInUserId(null);
    setTokenExpirationDate(null);
    setUserRole(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // Checking if user is already logged in and that token not expired
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.tokenExpirationDate) > new Date()
    ) {
      login(
        storedData.token,
        storedData.uid,
        storedData.role,
        new Date(storedData.tokenExpirationDate),
      );
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return { token, login, logout, loggedInUserId, role };
};

export default useAuth;
