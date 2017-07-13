import {getDateObjectFromFormat} from './utils/DateUtil';

export const users = ['Erin Hannon', 'Family Office'];

export const DATE_FMT = 'm/d/yyyy';

export const getDefaultValueByField = field => {
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

export const getDefaultTypeByField = field => {
    return field === 'inherited' ? 'inherited' : 'contains';
}

export const types = {
    'contains': 'Contains',
    'notContains': 'Does Not Contain',
    'is': 'Is',
    'isNot': 'Is Not',
    'isBefore': 'Is Before',
    'isAfter': 'Is After',
    'inherited': 'Is'
};

export const fields = {
    activityTags: {
        display: 'Activity Tags',
        fields: 'allTags'
    },
    author: {
        display: 'Author',
        values: users,
        fields: 'author'
    },
    dateAdded: {
        display: 'Date Added to Backstop',
        fields: 'createdDate'
    },
    effectiveDate: {
        display: 'Effective Date',
        fields: 'eventDate'
    },
    titleAndDescription: {
        display: 'Title and Description',
        fields: ['title', 'description']
    },
    type: {
        display: 'Type',
        fields: 'type'
    },
    inherited: {
        display: 'Inherited via Relationship',
        values: {
            false: 'Not Inherited',
            true: 'Inherited'
        },
        fields: 'flowThrough'
    }
};

export const filterHandlers = {
    contains: (value, textnode) => {
        return textnode.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    },
    is: (value, textnode) => {

        var date1 = getDateObjectFromFormat(value, DATE_FMT);
        var date2 = getDateObjectFromFormat(textnode, DATE_FMT);

        if (date1 === 0 || date2 === 0) {
            return textnode.trim().toUpperCase() === value.toUpperCase();
        } else {
            return ((textnode.toUpperCase() === value.toUpperCase()) || (date1 === date2));
        }
    },
    isNot: (value, textnode) => {

        return textnode.trim().toUpperCase() !== value.toUpperCase();
    },
    isBefore: (value, textnode) => {
        var date1 = getDateObjectFromFormat(value, DATE_FMT);
        var date2 = getDateObjectFromFormat(textnode, DATE_FMT);
        return date1 >= date2;
    },
    isAfter: (value, textnode) => {

        var date1 = getDateObjectFromFormat(value, DATE_FMT);
        var date2 = getDateObjectFromFormat(textnode, DATE_FMT);

        return date1 <= date2;
    },
    notContains: (value, textnode) => {
        return !(textnode.match(value, 'i'));
    },
    inherited: (value, textnode) => {
        return filterHandlers[value === 'true' ? 'contains' : 'notContains']('true', textnode);
    }
}