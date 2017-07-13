import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

import FilterList from './filterList';
import {toggleFilter, addFilter, runFilter, fieldChange, removeFilter} from '../actions';

import './style.css';

const preHandleFilters = (filters = [], activityTags = []) => {
    if (filters.length === 0) {
        return [];
    }
    let ret = Object.assign([], filters);
    return ret.map(filter => {
        let val = filter.value;
        return (filter.field === 'activityTags' && val === '' && activityTags.length > 0) ? {
            ...filter,
            value: activityTags[0]
        } : {
            ...filter,
            value: val
        };
    });
};
const Filter = ({
    open,
    data,
    activityTags,
    toggleFilter,
    addFilter,
    runFilter,
    onFieldChange,
    onFieldRemove
}) => {
    let header = <Button onClick={(ev) => {
        ev.preventDefault();
        toggleFilter();
    }}>
        Hider Filter
    </Button>;
    return (
        <div>
            <Panel collapsible expanded={open} header={header}>
                <FilterList filters={data} onFieldChange={onFieldChange} onFieldRemove={onFieldRemove} activityTags={activityTags}/>
                <div style={{
                    'marginTop': '5px'
                }}>
                    <Button
                        onClick={(ev) => {
                        ev.preventDefault();
                        runFilter(preHandleFilters(data, activityTags));
                    }}>
                        Run Filter
                    </Button>{' '}
                    <Button
                        onClick={(ev) => {
                        ev.preventDefault();
                        addFilter();
                    }}>
                        Add Filter
                    </Button>
                </div>
            </Panel>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => ({open: state.filter.open, data: state.filter.data, activityTags: state.constant.activityTags});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleFilter: () => {
        dispatch(toggleFilter());
    },
    addFilter: () => {
        dispatch(addFilter());
    },
    runFilter: (filters) => {
        dispatch(runFilter(filters));
    },
    onFieldChange: (id, field, value, defaultValue) => {
        dispatch(fieldChange(id, field, value, defaultValue));
    },
    onFieldRemove: (id) => {
        dispatch(removeFilter(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);