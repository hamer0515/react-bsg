import {FILTER_CHANGE, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';
import {CALL_API} from 'redux-api-middleware';

import {GetDataUrl} from '../constants';

export const filterChange = (value) => ({type: FILTER_CHANGE, value: value});

export const fetchData = (value) => ({
    [CALL_API]: {
        endpoint: GetDataUrl,
        method: 'GET',
        credentials:'include',
        types: [
            FETCH_STARTED, {
                type: FETCH_SUCCESS,
                payload: (action, state, res) => {
                    let tableData = [];
                    return res.json().then((json) => {
                        json.data.forEach(item => {
                            let data = {
                                createdDate: item.attributes.createdDate,
                                attachedTo: item.attributes.attachedTo,
                                userPermittedToReview: item.attributes.userPermittedToReview,
                                eventDate: item.attributes.eventDate,
                                type: Object.prototype.hasOwnProperty(item.relationships, 'note') ? 'note' : Object.prototype.hasOwnProperty(item.relationships, 'meeting') ? 'meeting' : Object.prototype.hasOwnProperty(item.relationships, 'call') ? 'call' : ''
                            };
                            tableData.push(data);
                        });
                        return {data: tableData};
                    });
                }
            },
            FETCH_FAILURE
        ]
    }
});