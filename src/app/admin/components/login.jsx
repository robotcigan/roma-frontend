'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as userActions from '../../actions/user';


class Login extends Component {
  constructor(props) {
    super(props);

    this.onSend = this.onSend.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      console.log(nextProps);
      if (nextProps.isLogin) {
        this.props.history.push('/admin/');
      }
    }
  }

  onSend(e) {
    e.preventDefault();
    console.log('on submit');
    this.props.actions.login();
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSend} >
          <div className="form-group">
            <label htmlFor="">Login</label>
            <input type="text" className="form-control" ref={(input => this.login = input)} />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="text" className="form-control" ref={(input => this.password = input)} />
          </div>
          <button type="submit" className="btn btn-default">Send</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));