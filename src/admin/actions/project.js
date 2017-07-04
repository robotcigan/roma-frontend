'use strict';

import {INIT, INIT_CURRENT} from '../constants/project';
import projectService from '../utils/project.service';

export const getProjectList = () => {
  return dispatch => {
    projectService.getProjectList()
      .then(projects => {
        dispatch({type: INIT, payload: projects});
      });
  }
};

export const getProject = (handle) => {
  return dispatch => {
    projectService.getProject(handle)
      .then(project => {
        dispatch({type: INIT_CURRENT, payload: project});
      }
      )
  }
};
