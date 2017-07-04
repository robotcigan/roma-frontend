'use strict';

import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const ProjectItem = ( props ) => (
  <div className="col-sm-6">

    <div className="card">
      <img className="card-img-top" src="http://localhost:1337/api/v1/img/1-1497797068951" />
      <div className="card-block">
        <Link to={`/admin/project/${props.project.handle}`}>
          <h4 href="" className="card-title">{props.project.title}</h4>
        </Link>
        <p className="card-text">{props.project.description}</p>
        <a href="#" className="btn btn-primary">Редактировать</a>
        <button
          onClick={props.handleDeleteProject.bind(this, props.project.handle)}
          className="btn btn-danger">Удалить
        </button>
      </div>
    </div>

  </div>
)

export default ProjectItem;