'use strict';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './app';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/admin" component={App} />
      </div>
    </Router>
  )
};

export default Root;