import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from './filterItem';

const FilterList = ({filters, activityTags, onFieldChange, onFieldRemove}) => {
    return (
        <div>
            {filters.map((item) => (<FilterItem id={item.id} key={item.id} activityTags={activityTags} field={item.field} onFieldChange={onFieldChange} onFieldRemove={onFieldRemove}/>))}
        </div>
    )
}

FilterList.PropTypes = {
    filters: PropTypes.array.isRequired,
    activityTags: PropTypes.array.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onFieldRemove: PropTypes.func.isRequired
};

export default FilterList;