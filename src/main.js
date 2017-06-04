'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// import reducers from './app/reducers';
import App from './app/containers/app';

// let store = createStore(
//     combineReducers({
//         ...reducers
//     })
// );
let store = {};


ReactDOM.render(
    <Provider strore={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);