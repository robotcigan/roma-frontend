'use strict';

import axios from 'axios';
import appConfig from '../../config';

export default {
  _token: '',
  instance: axios.create({
    baseURL: `${appConfig.api}/${appConfig.version}`
  }),
  setToken: function(token) {
    this._token = token;
    this.instance.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('accessToken', token);
  },
  getToken: function() {
    return this._token;
  },
  call: function(method, url, params) {
    let requestParam = {
      method,
      url
    };
    if (params) {
      if (params.post) {
        requestParam.data = params.post;
      }
      if (params.get) {
        requestParam.url += '?' + Object.keys(params.get).map(field => `${field}=${params.get[field]}`).join('&')
      }
      if (params.headers) {
        requestParam.headers = params.headers;
      }
    }
    return this.instance(requestParam)
      .then(res => {
        if (res && res.data.success === false) {
          throw res.data;
        }
        if (res && res.data && res.data.data) {
          return res.data.data;
        }
        return res;
      })
      .catch(rej => {
        throw rej.data;
      });
  },
  get: function(url, params) {
    return this.call('GET', url, params);
  },
  post: function(url, params) {
    return this.call('POST', url, params);
  },
  put: function(url, params) {
    return this.call('PUT', url, params);
  },
  delete: function(url, params) {
    return this.call('DELETE', url, params);
  }
};