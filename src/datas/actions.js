import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, SET_FILTER} from './actionTypes.js';
import {actions as constantActions} from '../constant/';

let nextSeqId = 0;

export const fetchDataStarted = () => ({type: FETCH_STARTED});

export const fetchDataSuccess = (result) => ({type: FETCH_SUCCESS, result});

export const fetchDataFailure = (error) => ({type: FETCH_FAILURE, error});

export const fetchData = () => {
    return (dispatch) => {
        const apiUrl = 'http://localhost:3000/products';
        const seqId = ++nextSeqId;
        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                return dispatch(action);
            }
        };

        dispatchIfValid(fetchDataStarted());

        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                dispatchIfValid(fetchDataSuccess(responseJson.data));
                let tags = [];
                responseJson.data.activitys.forEach(item => {
                    tags.push(...item.allTags);
                });
                tags = new Set(tags);
                dispatch(constantActions.setActivityTags([...tags]));
            }).catch((error) => {
                console.log(error);
                dispatchIfValid(fetchDataFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchDataFailure(error));
        });
    };
};

export const deleteData = (url) => {
    return (dispatch) => {
        const apiUrl = 'http://localhost:3000/delete';
        const seqId = ++nextSeqId;
        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                return dispatch(action);
            }
        };

        dispatchIfValid(fetchDataStarted());

        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                dispatchIfValid(fetchDataSuccess(responseJson.data));
            }).catch((error) => {
                console.log(error);
                dispatchIfValid(fetchDataFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchDataFailure(error));
        });
    };
};

export const setFilter = (filter) => ({type: SET_FILTER, filter});