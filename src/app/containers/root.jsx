'use strict';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import appConfig from '../../config';
import App from './app';
import Admin from '../admin/components/admin';

const Root = () => {
  return (
    <Router>
      <div>
        <Route path={appConfig.urlPrefix} component={App} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  )
};

export default Root;