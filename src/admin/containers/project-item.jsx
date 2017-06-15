'use strict';

import React, {Component} from 'react';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-sm-6">
        <div className="card">
          <img className="card-img-top" src="..." />
          <div className="card-block">
            <h4 href="" className="card-title">{this.props.project.title}</h4>
            <p className="card-text">{this.props.project.description}</p>
            <a href="#" className="btn btn-primary">Редактировать</a>
            <button
              onClick={this.props.handleDeleteProject.bind(this, this.props.project.handle)}
              className="btn btn-danger">Удалить
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem;