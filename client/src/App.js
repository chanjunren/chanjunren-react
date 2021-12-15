import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import useAuth from './company_site/hooks/auth_hook';
import { AuthContext } from './company_site/components/shared/auth_context';
import { makeStyles } from '@material-ui/core/styles';
import DataContext from './app_manager/shared/data_context';
import getData from './app_manager/hooks/data_hook';
import Backdrop from '@material-ui/core/Backdrop';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SplashScreen from './splashscreen';

const AuthPage = React.lazy(() => import('./company_site/pages/auth_page'));
const Home = React.lazy(() => import('./company_site/pages/index'));
const DashboardNav = React.lazy(() =>
  import('./app_manager/dashboard_nav/index'),
);
const AppDashboard = React.lazy(() =>
  import('./app_manager/dashboards/app_dashboard'),
);
const TemiDashboard = React.lazy(() =>
  import('./app_manager/dashboards/temi_dashboard'),
);
const UserDashboard = React.lazy(() =>
  import('./app_manager/dashboards/user_dashboard'),
);

/**
 * Application's entry point, contains the oruter and routes
 * amongst other things
 * @return {div} The html of the page
 */
function App() {
  const { token, login, logout, loggedInUserId } = useAuth();
  const {
    fetchData,
    fetchApplications,
    fetchTemiUnits,
    fetchAppUsers,
    applications,
    applicationsMap,
    temiUnits,
    users,
    sendRequest,
    isLoading,
    errorEncountered,
    clearError,
  } = getData();

  let routes;
  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signIn">
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

  const [isSplashing, setIsSplashing] = useState(true);
  const onSplashScreenEndHandler = () => {
    setIsSplashing(false);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      paddingTop: '56px',
      height: '100vh',
      overflow: 'auto',
    },
    backdrop: {
      color: "#000000"
    }
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
      <DataContext.Provider
        value={{
          fetchData,
          fetchApplications,
          fetchTemiUnits,
          fetchAppUsers,
          applications,
          applicationsMap,
          temiUnits,
          users,
          sendRequest,
          isLoading,
          errorEncountered,
          clearError,
        }}
      >
        <BrowserRouter>
          {isSplashing 
            ? <SplashScreen onSplashScreenEndHandler={onSplashScreenEndHandler}/>
            : <div className={!!token ? classes.root : undefined}>
            <Suspense
              fallback={
                <Backdrop className={classes.backdrop} open={true}>
                  <ScaleLoader color="#ffffff"/>
                </Backdrop>
              }
            >
              {!!token && <DashboardNav />}
              <main className={!!token ? classes.content : undefined}>
                {routes}
              </main>
            </Suspense>
          </div>
          }
          
        </BrowserRouter>
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
