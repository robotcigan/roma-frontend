'use strict';

import apiService from './api.service';

export default {
  login: function(username, password) {
    return apiService.post('/user', {post: {username, password}})
      .then(user => {
        apiService.setToken(user.base64auth);
        return user;
      });
  },
  logout: function() {
    apiService.setToken('');
    localStorage.removeItem('accessToken');
  }
}
