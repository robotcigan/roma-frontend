'use strict';

import apiService from './api.service';

export default {
  login: function(login, password) {
    return apiService.put('/user', {postData: {login, password}});
  }
}
