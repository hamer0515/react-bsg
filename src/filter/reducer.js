import {CHANGE_FILTER, TOGGLE_FILTER, Add_FILTER, REMOVE_FILTER} from './actionTypes.js';
import {activityTags, users} from '../constants';

function getDefaultValueByField(field) {
    if (field === 'effectiveDate' || field === 'dateAdded') {
        return '';
    } else if (field === 'author') {
        return users[0];
    } else if (field === 'titleAndDescription') {
        return '';
    } else if (field === 'activityTags') {
        return '';
    } else if (field === 'inherited') {
        return 'fasle';
    } else {
        return 'MeetingBean';
    }
}

function getDefaultTypeByField(field) {
    return field === 'inherited' ? 'inherited' : 'contains';
}

export default(state = [], action) => {
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