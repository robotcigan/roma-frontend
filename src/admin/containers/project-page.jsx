'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as projectActions from '../actions/project';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    console.log(props.project)
  }

  componentDidMount() {
    console.log('did mount', this.props.match.params.handle);
    this.props.actions.getProject(this.props.match.params.handle);
  }

  render() {
    return (
      <div className="container">
        {this.props.project ? (<h1>{this.props.project.title}</h1>) : (<h1>PRELOADER</h1>)}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    project: state.project.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);

// export default ProjectPage;
