import {CHANGE_FILTER, TOGGLE_FILTER, Add_FILTER, REMOVE_FILTER} from './actionTypes.js';
import {getDefaultValueByField, getDefaultTypeByField} from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            {
                let chgObj = {
                    [action.field]: action.value
                };
                if (action.field === 'field') {
                    chgObj.value = getDefaultValueByField(action.value);
                    chgObj.type = getDefaultTypeByField(action.value);
                }
                let data = state.data.map((filter) => {
                    if (filter.id === action.id) {
                        return {
                            ...filter,
                            ...chgObj
                        };
                    } else {
                        return filter;
                    }
                });
                return {
                    ...state,
                    key: state.key,
                    data: data
                }
            }
        case TOGGLE_FILTER:
            {
                return Object.assign({}, state, {
                    open: !state.open
                });
            }
        case Add_FILTER:
            {
                let filter = {
                    ...state,
                    key: state.key + 1
                };
                filter.data = [
                    ...filter.data, {
                        id: filter.key,
                        field: 'activityTags',
                        type: 'contains',
                        value: ''
                    }
                ];
                return filter;
            }
        case REMOVE_FILTER:
            {
                let data = state.data.filter((filter) => {
                    return filter.id !== action.id
                })
                return {
                    ...state,
                    data: data
                };
            }
        default:
            return state;
    }
}