import {CHANGE_FILTER, TOGGLE_FILTER, Add_FILTER, REMOVE_FILTER} from './actionTypes';
import {actions as dataActions} from '../datas';

export const fieldChange = (id, field, value) => ({type: CHANGE_FILTER, id: id, field: field, value: value});

export const toggleFilter = () => ({type: TOGGLE_FILTER});

export const addFilter = () => ({type: Add_FILTER});

export const removeFilter = (id) => ({type: REMOVE_FILTER, id: id});

export const runFilter = (filter) => (dataActions.setFilter(filter));