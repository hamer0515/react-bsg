import {CONSTANT_SET_TAGS} from './actionTypes';

export const setActivityTags = (activityTags = []) => ({type: CONSTANT_SET_TAGS, activityTags: activityTags});