import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

import {LOADING, SUCCESS, FAILURE} from '../status';
import Loading from 'react-loading';
import {ButtonToolbar, Button, FormControl, Form} from 'react-bootstrap';

import './myDraft.css';

import note from './note_c.svg';
import meeting from './meeting_c.svg';
import call from './call_c.svg';
import {dateDataFormat, datetimeDataFormat} from '../../constants.js';

class MyDraft extends Component {

    componentDidMount() {
        this.props.initPageData();
    }

    filterChange = (value) => {
        if (value === 'all') {
            this.refs.table.handleFilterData({});
        } else {
            this.refs.table.handleFilterData({type: value});
        }
    }

    renderCustomSearchPanel = props => (
        <Form inline className='pull-right'>
            <FormControl componentClass="select" onChange={ev => this.filterChange(ev.target.value)}>
                <option value='all' key='all'>Show All Draft Activities</option>
                <option value='note' key='note'>Show Note Draft Activities</option>
                <option value='call' key='call'>Show Call Draft Activities</option>
                <option value='meeting' key='meeting'>Show Meeting Draft Activities</option>
            </FormControl>
        </Form>
    )

    createCustomButtonGroup = props => (
        <ButtonToolbar>
            <Button bsClass="btn send-to-excel-button"></Button>
            <Button bsClass="btn send-to-pdf-button"></Button>
            <Button bsClass="btn send-to-doc-button"></Button>
        </ButtonToolbar>
    )

    setTableNoDataText(status = LOADING, error = 'Loading data failed!') {
        switch (status) {
            case LOADING:
                {
                    const style = {
                        position: 'relative',
                        left: '50%',
                        top: '50%'
                    };
                    return (
                        <div style={style}>
                            <Loading type="spinningBubbles" color="#444"/>
                        </div>
                    )
                }
            case SUCCESS:
                return 'No activity found';
            case FAILURE:
                {
                    return <div>{error}</div>;
                }
            default:
                {
                    throw new Error('unexpected status ' + status);
                }
        }
    }

    render() {
        const {status, error, products} = this.props;
        const options = {
            noDataText: this.setTableNoDataText(status, error),
            searchPanel: this.renderCustomSearchPanel,
            paginationPanel: this.createCustomButtonGroup,
            sortIndicator: false
        };
        const actionDataFormat = (cell, row, enumObject) => (
            <span>
                <Button bsStyle="link">Link</Button>
                |
                <Button bsStyle="link">Edit</Button>
                |
                <Button bsStyle="link">Delete</Button>
                |
                <Button bsStyle="link">History</Button>
            </span>
        );
        const typeDataFormat = (cell, row, enumObject) => (< embed src = {
            cell === 'note' ? note : cell === 'meeting' ? meeting : call
        }
        width = "20" height = "20" type = "image/svg+xml" pluginspage = "http://www.adobe.com/svg/viewer/install/" />);
        const titleAndDescDataFormat = (cell, row, enumObject) => (row.title + '<br/>' + row.description);
        return (
            <BootstrapTable
                ref="table"
                headerStyle={{
                background: '#dfdfdf'
            }}
                data={products}
                options={options}
                striped
                hover
                condensed
                search
                pagination>
                <TableHeaderColumn dataField="createdDate" isKey dataSort={true} dataFormat={dateDataFormat}>Date Added to Backstop</TableHeaderColumn>
                <TableHeaderColumn dataField="eventDate" dataSort={true} dataFormat={datetimeDataFormat}>Modify Date</TableHeaderColumn>
                <TableHeaderColumn
                    dataField="author"
                    dataSort={true}
                    tdStyle={{
                    whiteSpace: 'normal',
                }}>Author</TableHeaderColumn>
                <TableHeaderColumn dataField="type" dataSort={true} dataAlign="center" dataFormat={typeDataFormat}>Type</TableHeaderColumn>
                <TableHeaderColumn
                    dataField="title"
                    dataSort={true}
                    dataFormat={titleAndDescDataFormat}
                    tdStyle={{
                    whiteSpace: 'normal'
                }}>Title and Description</TableHeaderColumn>
                <TableHeaderColumn
                    dataField="attachedTo"
                    dataSort={true}
                    tdStyle={{
                    whiteSpace: 'normal'
                }}>Attached To</TableHeaderColumn>
                <TableHeaderColumn
                    dataField="userPermittedToReview"
                    dataSort={true}
                    tdStyle={{
                    whiteSpace: 'normal'
                }}>User Permitted to Review</TableHeaderColumn>
                <TableHeaderColumn dataFormat={actionDataFormat}>Actions</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    initPageData: () => {
        dispatch(fetchData());
    }
})

const mapStateTopProps = (state) => ({status: state.status, error: state.error, products: state.data})

export default connect(mapStateTopProps, mapDispatchToProps)(MyDraft);