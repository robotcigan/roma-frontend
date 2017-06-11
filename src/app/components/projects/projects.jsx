'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import apiService from '../../../common/services/api.service.js';

import Project from './project.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    }
  }

  getProjects() {
   return this.state.projects.map(project => {
     return(
       <li key={project.id}>{project.title}</li>
     )
   })
  }

  componentDidMount() {
    apiService.get('/project', {get: {test: 'for', test2: 'bar'}})
    .then(projects => {
      console.log('project');
      console.log(projects);
      this.setState({
        projects: projects
      })
    })
  }

  render() {
    const {match} = this.props;
    const projectList = this.getProjects();
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {projectList}
        </ul>
        <ul>
          <li>
            <Link to={`${match.url}/1`}>Первая работа</Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>Вторая работа</Link>
          </li>
        </ul>

        <Route path={`${match.url}/:projectId`} component={Project} />
      </div>
    )
  }
}

export default Projects;
