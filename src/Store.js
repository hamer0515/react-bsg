import { apiMiddleware } from 'redux-api-middleware';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Perf from 'react-addons-perf';

import {reducer} from './myDraft';

const win = window;
win.Perf = Perf

const middlewares = [apiMiddleware, thunk];
const storeEnhancers = compose(applyMiddleware(...middlewares), (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f);

export default createStore(reducer, {
    filter: 'all',
}, storeEnhancers);