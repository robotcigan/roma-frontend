'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Work from './work.jsx';

class Works extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    apiService.get('/project', {get: {test: 'for', test2: 'bar'}})
    .then(projects => {
      console.log('project');
      console.log(projects);
    })
  }

  render() {
    const {match} = this.props;
    return (
      <div>
        <h1>Works</h1>
        <ul>
          <li>
            <Link to={`${match.url}/1`}>Первая работа</Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>Вторая работа</Link>
          </li>
        </ul>

        <Route path={`${match.url}/:workId`} component={Work} />
      </div>
    )
  }
}

export default Works;
