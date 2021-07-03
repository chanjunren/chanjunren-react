import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './company_site/pages/index';
import Dashboard from './app_manager/dashboard/index';
import AuthPage from './company_site/pages/auth_page';

/**
 * Application's entry point, contains the oruter and routes
 * amongst other things
 * @return {div} The html of the page
 */
function App() {
  const token = null;
  let routes;
  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/signIn">
          {/* TO DO */}
          <AuthPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>);
  } else {
    routes = (
      <Switch>
        <Route path="/dashboard" exact>
          {/* TO DO */}
          <Dashboard/>
        </Route>
        <Redirect to="/dashboard"/>
      </Switch>
    );
  }
  // let routes;
  return (
    <BrowserRouter>
      <main>
        {routes}
      </main>
    </BrowserRouter>
  );
}

export default App;
