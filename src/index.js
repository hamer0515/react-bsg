
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {view as DraftView} from './myDraft';

import './index.css';

import store from './Store.js';

ReactDOM.render(
  <Provider store={store}>
    <DraftView />
  </Provider>,
  document.getElementById('root')
);
