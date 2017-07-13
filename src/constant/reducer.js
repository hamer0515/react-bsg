import {CONSTANT_SET_TAGS} from './actionTypes.js';

export default(state = [], action) => {
    switch (action.type) {
        case CONSTANT_SET_TAGS:
            return {
                ...state,
                activityTags: action.activityTags
            }
        default:
            {
                return state;
            }
    }
}