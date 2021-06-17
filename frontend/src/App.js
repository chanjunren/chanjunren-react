import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

/**
 * Application's entry point, contains the oruter and routes
 * amongst other things
 * @return {div} The html of the page
 */
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
