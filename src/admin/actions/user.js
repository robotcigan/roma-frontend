'use strict';

import {LOGIN, LOGOUT} from '../constants/user';

export const login = () => {
  return {
    type: LOGIN
  }
};
