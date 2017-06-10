'use strict';

import React, {Component} from 'react';
// import axios from 'axios';
import apiService from '../../utils/api.service.js';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    apiService.post('/project', {post: {'title': 'new project1', 'description': 'new desc', 'handle': 'new-title1'}});
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard;