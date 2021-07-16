import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './company_site/pages/index';
import Dashboard from './app_manager/dashboard/index';
import AuthPage from './company_site/pages/auth_page';
import useAuth from './company_site/hooks/auth_hook';
import { AuthContext } from './company_site/components/shared/auth_context';

/**
 * Application's entry point, contains the oruter and routes
 * amongst other things
 * @return {div} The html of the page
 */
function App() {
  const { token, login, logout, loggedInUserId } = useAuth();
  let routes;
  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signIn">
          {/* TO DO */}
          <AuthPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/dashboard" exact>
          {/* TO DO */}
          <Dashboard />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
  // let routes;
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: loggedInUserId,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <main>{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
