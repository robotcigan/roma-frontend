'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Link, Switch} from 'react-router-dom';

import PrivateRoute from '../../common/component/private-route';
import Dashboard from '../components/dashboard';
import Login from '../components/login';

const App = ({user}) => {
  return (
    <Switch>
      <PrivateRoute isLogin={user.isLogin} exact path="/admin/" component={Dashboard} />
      <Route path="/admin/login" component={Login} />
      <Redirect to="/admin/login" />
    </Switch>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
