'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Link, Switch} from 'react-router-dom';

import {setLogin} from '../actions/user';

import PrivateRoute from '../../common/component/private-route';
import Dashboard from '../components/dashboard';
import Login from '../components/login';

class App extends React.Component {
  componentWillMount() {
    if (localStorage.getItem('accessToken') && !this.props.user.isLogin) {
      this.props.setLogin();
    }
  }

  render() {
    const {user} = this.props;
    return (
      <Switch>
        <PrivateRoute isLogin={user.isLogin} exact path="/admin/" component={Dashboard} />
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

const mapDispatchToProps = dispatch => {
  return {
    setLogin: function() {
      dispatch(setLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
