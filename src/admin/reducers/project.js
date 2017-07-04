'use strict';

import {INIT, INIT_CURRENT} from '../constants/project';

const initialState = {
  body: [],
  count: 0,
  current: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case INIT:
      return {...state, body: payload, count: payload.length};
    case INIT_CURRENT:
      return {...state, current: payload};
    default:
      return state;
  }
}