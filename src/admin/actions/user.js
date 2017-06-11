'use strict';

import {LOGIN, LOGOUT} from '../constants/user';
import {LOADING_ON, LOADING_OFF} from '../constants/loading';
import userService from '../../common/services/user.service';

export const login = (username, password) => {
  return dispatch => {
    dispatch({type: LOADING_ON, payload: 'login'});
    userService.login(username, password)
      .then(() => {
        dispatch({type: LOGIN});
        dispatch({type: LOADING_OFF, payload: 'login'});
      });
  }
};

export const setLogin = () => {
  return {
    type: LOGIN
  }
};
