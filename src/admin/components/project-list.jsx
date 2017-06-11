'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card} from 'reactstrap';

import * as projectActions from '../actions/project';

import ProjectItem from '../containers/project-item';

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProjectList();
  }

  getProjectCardView() {
    return this.props.project.body.map((item, key) => (
      <ProjectItem key={key} project={item} />
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.getProjectCardView()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    project: state.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
