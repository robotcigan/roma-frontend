'use strict';

import React from 'react';

const ProjectItem = ({project}) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src="..." />
        <div className="card-block">
          <h4 href="" className="card-title">{project.title}</h4>
          <p className="card-text">{project.description}</p>
          <a href="#" className="btn btn-primary">Редактировать</a>
        </div>
      </div>
    </div>
  )
};

export default ProjectItem;