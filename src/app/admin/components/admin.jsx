'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';

import PrivateRoute from '../../utils/component/private-route';

import Login from './login';
import Dashboard from './dashboard';

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  getRoutes() {
    const {isLogin} = this.props.user;
    return (
      <Switch>
        <PrivateRoute exact path="/admin/" isLogin={isLogin} component={Dashboard} />
        <Route path="/admin/login" component={Login} />
        <Redirect to="/admin/login" />
      </Switch>
    )
  }

  render() {
    return (
      this.props.loading.login ?
        (<h1>PRELOADER</h1>) :
        this.getRoutes()
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading
  }
};

export default connect(mapStateToProps, () => ({}))(Admin);