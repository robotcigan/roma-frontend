'use strict';

import {LOADING_ON, LOADING_OFF} from '../constants/loading';

const initialState = {
  login: false
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOADING_OFF:
      return {...state, [payload]: false};
      break;
    case LOADING_ON:
      return {...state, [payload]: true};
      break;

    default:
      return state;
  }
}