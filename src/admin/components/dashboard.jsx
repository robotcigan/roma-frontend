'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = state => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

