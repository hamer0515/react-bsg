import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as filterReducer } from './filter';
import { reducer as dataReducer } from './datas';
import { apiMiddleware } from 'redux-api-middleware';

import Perf from 'react-addons-perf';

const win = window;
win.Perf = Perf

const reducer = combineReducers({ filter: filterReducer, data: dataReducer });

const middlewares = [apiMiddleware, thunk];

const storeEnhancers = compose(applyMiddleware(...middlewares), (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f);

export default createStore(reducer, {
    filter: {
        key: 0,
        open: true,
        data: [{ id: 0, field: 'activityTags', type: 'contains', value: '' }]
    }
}, storeEnhancers);