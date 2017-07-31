import {FILTER_CHANGE, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';
import {LOADING, SUCCESS, FAILURE} from './status';

export default(state = {}, action) => {
    switch (action.type) {
        case FETCH_STARTED:
            {
                return {status: LOADING};
            }
        case FETCH_SUCCESS:
            {
                return {
                    ...state,
                    status: SUCCESS,
                    ...action.payload.data
                };
            }
        case FETCH_FAILURE:
            {
                let error = action.payload.data || action.payload.message;
                return {status: FAILURE, error: error};
            }
        case FILTER_CHANGE:
            {
                return {
                    ...state,
                    filter: action.value
                }
            }
        default:
            return state;
    }
}