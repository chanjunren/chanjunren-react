import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom';

/**
 * Application's entry point, contains the oruter and routes
 * amongst other things
 * @return {div} The html of the page
 */
function App() {
  return (
    <Router>
      <NavBar></NavBar>
    </Router>
  );
}

export default App;
