
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MyDraftApp from './MyDraftApp';

import './index.css';

import store from './Store.js';

ReactDOM.render(
  <Provider store={store}>
    <MyDraftApp />
  </Provider>,
  document.getElementById('root')
);
