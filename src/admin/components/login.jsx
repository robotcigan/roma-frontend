'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {Input, InputGroup, FormGroup, Button} from 'reactstrap';

import * as userActions from '../actions/user';

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
    // console.log('on submit', this.login);
    this.props.actions.login(this.username.value, this.password.value);
  }

  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.onSend} >
          <FormGroup>
            <label>Username</label>
            <Input getRef={(input => this.username = input)} placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <Input getRef={(input => this.password = input)} placeholder="Password" />
          </FormGroup>
          <Button type="submit" color="success">Send</Button>
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