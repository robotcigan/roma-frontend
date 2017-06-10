'use strict';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Main from '../components/main/main.jsx'
import Projects from '../components/projects/projects.jsx';

const App = () => {
  return(
      <div>

        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">До хаты</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/app/main">main</Link>
              </li>
              <li>
                <Link to="/app/projects">works</Link>
              </li>
            </ul>
          </div>
        </nav>

        <hr/>

        <Switch>
          <Route path="/app/main" component={Main} />
          <Route path="/app/projects" component={Projects} />
        </Switch>

      </div>
  )
};

export default App;
