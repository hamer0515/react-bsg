import {FILTER_CHANGE, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';
import {CALL_API} from 'redux-api-middleware';

import {getDataUrl} from '../constants';

export const filterChange = (value) => ({type: FILTER_CHANGE, value: value});

export const fetchData = (value) => ({
    [CALL_API]: {
        endpoint: getDataUrl,
        method: 'GET',
        credentials:'include',
        types: [
            FETCH_STARTED, {
                type: FETCH_SUCCESS,
                payload: (action, state, res) => {
                    let tableData = [];
                    return res.json().then((json) => {
                        let includedData = json.included;
                        json.data.forEach(item => {
                            let relationships = item.relationships;
                            let type = Object.prototype.hasOwnProperty.call(relationships, 'note') ? 'note' : Object.prototype.hasOwnProperty.call(relationships, 'meeting') ? 'meeting' : Object.prototype.hasOwnProperty.call(relationships, 'call') ? 'call' : '';
                            let data = {
                                createdDate: item.attributes.createdDate,
                                attachedTo: item.attributes.attachedTo,
                                userPermittedToReview: item.attributes.userPermittedToReview,
                                eventDate: item.attributes.eventDate,
                                type: type,
                                author: parseAuther({id: item.relationships.auther.data.id, type: item.relationships.auther.data.type}, includedData),
                                title: parseTitle({id: item.relationships[type].data.id, type: item.relationships[type].data.type}, includedData),
                                description: parseDescription({id: item.relationships[type].data.id, type: item.relationships[type].data.type}, includedData),
                            };
                            console.log(data)
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


const parseAuther = (obj, includedData) => (parseField(obj, includedData, 'name'));
const parseTitle = (obj, includedData) => (parseField(obj, includedData, 'title'));
const parseDescription = (obj, includedData) => (parseField(obj, includedData, 'description'))

const parseField = (obj, includedData, field) => {
    for(let i in includedData){
        let d = includedData[i];
        if(d.id === obj.id && d.type === obj.type){
            return d.attributes[field];
        }
    }
    return '';
}