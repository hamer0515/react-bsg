import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, SET_FILTER, DELETE_STARTED, DELETE_SUCCESS, DELETE_FAILURE } from './actionTypes';
import * as Status from './status.js';

export default (state = {status: Status.LOADING}, action) => {
   let error;
  switch(action.type) {
    case FETCH_STARTED:
    case DELETE_STARTED:{
      return {status: Status.LOADING};
    }
    case FETCH_SUCCESS: 
    case DELETE_SUCCESS:{
      return {...state, status: Status.SUCCESS, ...action.payload.result};
    }
    case FETCH_FAILURE: 
    case DELETE_FAILURE:{
    error = action.payload.data || action.payload.message ;
      return {status: Status.FAILURE,error: error};
    }
    case SET_FILTER: {
      return {...state, filter: action.filter};
    }
    default: {
      return state;
    }
  }
};