'use strict';

import userReducer from './user';
import loadingReducer from './loading';
import projectReducer from './project';

export default {
  user: userReducer,
  loading: loadingReducer,
  project: projectReducer
}