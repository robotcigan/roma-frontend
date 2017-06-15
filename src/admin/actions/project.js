'use strict';

import {INIT} from '../constants/project';
import projectService from '../utils/project.service';

export const getProjectList = () => {
  return dispatch => {
    projectService.getProjectList()
      .then(projects => {
        dispatch({type: INIT, payload: projects});
      });
  }
};
