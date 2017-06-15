'use strict';

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLogin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/admin/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;