import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './company_site/pages/index';
import AuthPage from './company_site/pages/auth_page';
import useAuth from './company_site/hooks/auth_hook';
import { AuthContext } from './company_site/components/shared/auth_context';
import DashboardNav from './app_manager/dashboard_nav/index';
import AppDashboard from './app_manager/dashboards/app_dashboard';
import TemiDashboard from './app_manager/dashboards/temi_dashboard';
import UserDashboard from './app_manager/dashboards/user_dashboard';

import { makeStyles } from '@material-ui/core/styles';

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
        <Route path="/applications" exact>
          {/* TO DO */}
          <AppDashboard />
        </Route>
        <Route path="/temis" exact>
          {/* TO DO */}
          <TemiDashboard />
        </Route>
        <Route path="/users" exact>
          {/* TO DO */}
          <UserDashboard />
        </Route>
        <Redirect to="/applications" />
      </Switch>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
  }));
  const classes = useStyles();

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
        <div className={!!token ? classes.root : undefined}>
          {!!token && <DashboardNav />}
          <main className={!!token ? classes.content: undefined}>{routes}</main>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
