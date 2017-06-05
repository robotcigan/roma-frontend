'use strict';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import apiService from '../utils/api.service';

import Main from '../components/main/main.jsx'
import Projects from '../components/projects/projects.jsx';

const App = () => {
  return(
    <Router>
      <div>

        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">До хаты</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/main">main</Link>
              </li>
              <li>
                <Link to="/projects">works</Link>
              </li>
            </ul>
          </div>
        </nav>

        <hr/>

        <Route path="/main" component={Main} />
        <Route path="/projects" component={Projects} />

      </div>
    </Router>
  )
}

export default App;
