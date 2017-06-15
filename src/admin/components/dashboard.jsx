'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProjectList from './project-list';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <ProjectList/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

