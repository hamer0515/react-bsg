import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, SET_FILTER, DELETE_STARTED, DELETE_SUCCESS, DELETE_FAILURE } from './actionTypes';
import { apiUrl } from '../constants';
import { CALL_API } from 'redux-api-middleware';

export const fetchData = () => {
    return {
        [CALL_API]: {
            endpoint: apiUrl.products,
            method: 'GET',
            types: [
                FETCH_STARTED,
                {
                    type: FETCH_SUCCESS,
                    payload: (action, state, res) => {
                        let tags = [];
                        return res.json().then((json) => {
                            json.data.activitys.forEach(item => {
                                tags.push(...item.allTags);
                            });
                            tags = new Set(tags);
                            json.data.activityTags = [...tags];
                            return { result: json.data };
                        });
                    }
                },
                FETCH_FAILURE
            ]

        }
    }
};

export const deleteData = (noteId) => {
    const deleteUrl = apiUrl.delete + `/${noteId}`;
    return {
            [CALL_API]: {
            endpoint: deleteUrl,
            method: 'GET',
            types: [
                DELETE_STARTED,
                {
                    type: DELETE_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => ({results:json.data}));
                    }
                },
                DELETE_FAILURE
            ]
        }
    }
};

export const setFilter = (filter) => ({ type: SET_FILTER, filter });