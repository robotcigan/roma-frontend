'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import reducers from './admin/reducers';
import Root from './admin/containers/root';

let store = createStore(
  combineReducers({
    ...reducers
  }),
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
