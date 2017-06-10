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

  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/admin/" isLogin={this.props.user.isLogin} component={Dashboard} />
        <Route path="/admin/login" component={Login} />
        <Redirect to="/admin/login" />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps, () => ({}))(Admin);