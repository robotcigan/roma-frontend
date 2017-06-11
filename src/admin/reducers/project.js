'use strict';

import {INIT} from '../constants/project';

const initialState = {
  body: [],
  count: 0,
  current: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case INIT:
      return {...state, body: payload, count: payload.length};
    default:
      return state;
  }
}