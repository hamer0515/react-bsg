import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as filterReducer} from './filter/';
import {reducer as dataReducer} from './datas/';
import {reducer as constantReducer} from './constant/';

import Perf from 'react-addons-perf';

const win = window;
win.Perf = Perf

const reducer = combineReducers({filter: filterReducer, data: dataReducer, constant: constantReducer});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(applyMiddleware(...middlewares), (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,);

export default createStore(reducer, {
    filter: {
        key: 0,
        open: true,
        data: [{id: 0, field: 'activityTags', type:'contains', value:''}]
    }
}, storeEnhancers);