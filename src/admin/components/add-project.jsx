'use strict';

import React, {Component} from 'react';

import apiService from '../../common/services/api.service.js';

class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: '',
      projectHandle: '',
      projectDescription: '',
      projectActive: false,
      projectOrder: 0,
      projectStatus: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
   }

    handleSubmit() {
      apiService.post('/project', {post: {
        'title': this.state.projectName,
        'handle': this.state.projectHandle,
        'description': this.state.projectDescription,
        'active': this.state.projectActive,
        'order': this.state.projectOrder,
        'status': this.state.projectStatus
      }})
       .then(() => {
         console.log('project saved');
       });
    }
  

  render() {
    return(
      <div className="container">
        <h1>Add project</h1>
        <form>
          <div className="form-group row">
            <label className="col-3 col-form-label">Название проекта</label>
            <div className="col-9">
              <input
                name="projectName"
                className="form-control"
                type="text"
                value={this.state.projectName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">URL проекта</label>
            <div className="col-9">
              <input
                value={this.state.projectHandle}
                onChange={this.handleChange}
                name="projectHandle"
                className="form-control"
                type="text"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Описание</label>
            <div className="col-9">
            <textarea
              value={this.state.projectDescription}
              onChange={this.handleChange}
              name="projectDescription"
              className="form-control">
            </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Активный</label>
            <div className="col-9">
              <input
                value={this.state.projectActive}
                onChange={this.handleChange}
                name="projectActive"
                className="form-control"
                type="checkbox"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Порядок</label>
            <div className="col-9">
              <input
                value={this.state.projectOrder}
                onChange={this.handleChange}
                name="projectOrder"
                className="form-control"
                type="number"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-3 col-form-label">Статус проекта</label>
            <div className="col-9">
              <select
                value={this.state.projectStatus}
                onChange={this.handleChange}
                name="projectStatus"
                className="form-control">
                <option>Выполнен</option>
                <option>Не выполнен</option>
              </select>
            </div>
          </div>
          <div className="offset-sm-3">
            <div onClick={this.handleSubmit} className="btn btn-primary">Сохранить</div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProject;