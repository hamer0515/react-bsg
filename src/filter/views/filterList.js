import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilterItem from './filterItem';

const FilterList = ({filters, data, activityTags, onFieldChange, onFieldRemove}) => {
    return (
        <div>
            {filters.map((item) => (<FilterItem id={item.id} key={item.id} activityTags={activityTags} field={item.field} onFieldChange={onFieldChange} onFieldRemove={onFieldRemove}/>))}
        </div>
    )
}

FilterList.PropTypes = {
    filters: PropTypes.object.isRequired,
    allTags: PropTypes.object.isRequired
};

export default FilterList;