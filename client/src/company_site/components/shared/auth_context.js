import {createContext} from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  isAdmin: null,
  token: null,
  login: () => {},
  logout: () => {},
});
