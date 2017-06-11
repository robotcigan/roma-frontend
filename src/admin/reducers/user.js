'use strict';

import {LOGIN, LOGOUT} from '../constants/user';

const initialState = {
  isLogin: false
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, isLogin: true};
      break;
    case LOGOUT:
      return {...state, isLogin: false};
      break;

    default:
      return state;
  }
};
