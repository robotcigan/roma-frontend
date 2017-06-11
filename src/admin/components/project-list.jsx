'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Table} from 'reactstrap';

import * as projectActions from '../actions/project';

import ProjectItem from '../containers/project-item';

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProjectList();
  }

  getProjectRowView() {
    return this.props.project.body.map((item, key) => (
      <ProjectItem key={key} project={item} />
    ));
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>handle</th>
              <th>title</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {this.getProjectRowView()}
          </tbody>
        </Table>
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
