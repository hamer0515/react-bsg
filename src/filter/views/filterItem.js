import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Glyphicon, Form, FormGroup, FormControl} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

import {types, fields} from '../../constants';

const getFieldControl = () => {
    let fieldItems = [];
    for (let k in fields) {
        fieldItems.push(
            <option value={k} key={k}>{fields[k].display}</option>
        );
    }
    return fieldItems;
}

const getTypeControl = field => {
    if (field === 'effectiveDate' || field === 'dateAdded') {
        return genTypes(['is', 'isNot', 'contains', 'isBefore', 'isAfter']);
    } else if (field === 'author') {
        return genTypes(['contains', 'notContains']);
    } else if (field === 'titleAndDescription') {
        return genTypes(['contains']);
    } else if (field === 'activityTags') {
        return genTypes(['contains', 'notContains', 'is', 'isNot']);
    } else if (field === 'inherited') {
        return genTypes(['inherited']);
    } else {
        return genTypes(['contains', 'notContains']);
    }
}

const genTypes = (items = []) => {
    return items.map((type) => (
        <option value={type} key={type}>{types[type]}</option>
    ))
}

const getValueControl = (id, field, activityTags, onFieldChange) => {
    if (field === 'effectiveDate' || field === 'dateAdded') {
        return <DatePicker onChange={(v, vv) => onFieldChange(id, 'value', vv)}/>
    } else if (field === 'titleAndDescription') {
        return <FormControl type='text' onChange={ev => onFieldChange(id, 'value', ev.target.value)}/>
    }
    return <FormControl componentClass="select" onChange={ev => onFieldChange(id, 'value', ev.target.value)}>
        {genValues(field, activityTags)}
    </FormControl>
}

const genValues = (field, activityTags = []) => {
    let items = ['MeetingBean', 'FundTransactionBean', 'NoteBean', 'Document', 'OpportunityBean'];
    if (fields.hasOwnProperty(field)) {
        items = field === 'activityTags' ? activityTags : fields[field].values || items;
    }
    let valueOptions = [];
    if (Array.isArray(items)) {
        items.forEach(item => valueOptions.push(
            <option value={item} key={item}>{item}</option>
        ))
    } else {
        for (let k in items) {
            valueOptions.push(
                <option value={k} key={k}>{items[k]}</option>
            )
        }
    }
    if (valueOptions.length === 0 && field === 'activityTags') {
        valueOptions.push(
            <option value='' key=''>Choose a tag ..</option>
        )
    }
    return valueOptions;
}

class FilterItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.field !== nextProps.field || this.props.activityTags !== nextProps.activityTags;
    }
    render() {
        let {id, field, activityTags, onFieldChange, onFieldRemove} = this.props;
        const fieldItems = getFieldControl();
        const typeItems = getTypeControl(field);
        const valueControl = getValueControl(id, field, activityTags, onFieldChange);
        const onChangeHandler = ev => onFieldChange(id, 'field', ev.target.value, activityTags && activityTags.length > 0 ? activityTags[0] : '');
        return (
            <Form inline id={id} key={id}>
                <Button bsStyle="link" onClick={ev => onFieldRemove(id)}><Glyphicon glyph="remove"/></Button>
                <FormGroup>
                    <FormControl componentClass="select" onChange={onChangeHandler}>
                        {fieldItems}
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl componentClass="select" onChange={ev => onFieldChange(id, 'type', ev.target.value)}>
                        {typeItems}
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    {valueControl}
                </FormGroup>
            </Form>
        )
    }
}

FilterItem.PropTypes = {
    id: PropTypes.number.isRequired
};

export default FilterItem;