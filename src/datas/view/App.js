import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import dateformat from 'dateformat-util';
import Loading from 'react-loading';
import { connect } from 'react-redux';
import * as Status from '../status.js';
import PropTypes from 'prop-types';
import { actions as draftActions } from '../';
import { filterHandlers, fields } from '../../constants';


class DraftTable extends Component {

  constructor(props) {
    super(props);
    this.actionsFormatter = this.actionsFormatter.bind(this);
  }

  static propTypes = {
    activitys: PropTypes.array,
    dtDateFormat: PropTypes.string,
    dateFormat: PropTypes.string,
    status: PropTypes.string.isRequired,
    onPageInit: PropTypes.func.isRequired,
    pageLimit: PropTypes.number,
    onDraftDelete: PropTypes.func.isRequired
  }

  popupWindow(url, width = 700, height = 700) {
    window.open(url, '_blank', `height=${height},width=${width},toolbar=0,location=0,menubar=0`);
  }

  deleteDraft(noteId, title) {
    if (window.confirm('Delete the note ' + title)) {
      this.props.onDraftDelete(noteId);
    } else {
      return false;
    };
  }

  dateFormatter(cell, row, extraData = 'dd/MM/yyyy hh:mm:ss') {
    return dateformat.format(cell, extraData);
  }

  typeFormatter(cell, row) {
    return `<span class="glyphicon glyphicon-file" aria-hidden="true"></span>
          <span class="hide">${row.iconName}</span>
          <span class="hide">${row.eventEntityType}</span>`;
  }

  titleAndDescFormatter(cell, row) {
    const {
      draft = true,
      description = '',
      title,
      isImportant,
      linkUrl
    } = row;
    const draftTag = draft ? '<B>(Draft)</B>' : '';
    const importantTag = isImportant ? '<span class="glyphicon glyphicon-exclamation-sign" title="Important (Top of List)"></span>' : '';
    const descTag = description.length > 500 ? description.substring(0, 500) + `...<a href="javascript:window.open('${linkUrl}','_blank', 'height=795,width=700,toolbar=0,location=0,menubar=0');">More</a>` : `<div>${description}</div>`;
    return `${draftTag} ${importantTag} <a href="javascript:window.open('${linkUrl}','_blank', 'height=795,width=700,toolbar=0,location=0,menubar=0');">${title}</a>
            <br/>${descTag}`;
  }

  attachToFormatter(cell, row) {
    const { attachToLink } = row;
    return (
      <a href={attachToLink}>{cell}</a>
    );
  }

  toReviewFormatter(cell) {
    return (
      <div>{cell}</div>
    );
  }

  actionsFormatter(cell, row) {
    const {
      viewLink,
      haveModiifyPermission,
      modifyLink,
      haveDeletePermisssion,
      haveFullPermission,
      title,
      historyLink,
      noteId
    } = row;
    return (
      <div>
        <a href="javascript:void(0);" onClick={this.popupWindow.bind(this, viewLink, 700, 700)}>View
        </a>
        {haveModiifyPermission && <a href="javascript:void(0);" onClick={this.popupWindow.bind(this, modifyLink, 700, 1190)}>| Edit
        </a>}
        {(haveDeletePermisssion && haveFullPermission) && <a href="javascript:void(0);" onClick={this.deleteDraft.bind(this, noteId, title)}>| Delete
        </a>}
        <a href="javascript:void(0);" onClick={this.popupWindow.bind(this, historyLink, 700, 1190)}>| History</a>
      </div>
    );
  }

  getColumns() {
    const columns = [];
    columns.push(
      <TableHeaderColumn key={0} dataField="createdDate" isKey={true} dataSort width="150px">Date Added to Backstop</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={1} dataField="modifiedDate" dataSort width="150px">Modify Date</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={2} dataField="author" dataSort width="150px">Author</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={3} export={false} dataFormat={this.typeFormatter} width="70px">Type</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn
        key={4}
        dataField="inherited"
        hidden
        dataFormat={(cell, row) => {
          return row.flowThrough ? 'inherited' : '';
        }}>Inherited</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={5} export={false} dataFormat={this.titleAndDescFormatter} width="150px">Title and Description</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={6} dataField="attachTo" dataSort dataFormat={this.attachToFormatter} width="150px">Attached To</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={7} dataField="toReview" dataSort dataFormat={this.toReviewFormatter} width="300px">User Permitted to Review</TableHeaderColumn>
    );
    columns.push(
      <TableHeaderColumn key={8} dataFormat={this.actionsFormatter} width="200px">Actions</TableHeaderColumn>
    );
    return columns;
  }

  setTableNoDataText(status = Status.LOADING) {
    switch (status) {
      case Status.LOADING: {
        const style = {
          position: 'relative',
          left: '50%',
          top: '50%'
        };
        return (
          <div style={style}>
            <Loading type="spinningBubbles" color="#444" />
          </div>)
      }
      case Status.SUCCESS:
        return 'No activity found';
      case Status.FAILURE:
        {
          return <div>Loading data failed!</div>;
        }
      default:
        {
          throw new Error('unexpected status ' + status);
        }
    }
  }

  componentDidMount() {
    this.props.onPageInit();
  }

  filterData(filters = [], activitys = []) {
    if (filters.length === 0 || activitys.length === 0) {
      return activitys;
    }
    return activitys.filter(activity => {
      for (let k in filters) {
        let filterConfig = filters[k];
        if (!doFilter(filterConfig, activity)) {
          return false;
        }
      }
      return true;
    });
  }

  render() {
    const {
      status,
      pageLimit = 10,
      filters,
      activitys = []
    } = this.props;
    const options = {
      noDataText: this.setTableNoDataText(status),
      sizePerPage: pageLimit, // which size per page you want to locate as default
      sortIndicator: false
    };

    let filteredActivities = filters ? this.filterData(filters, activitys) : activitys;

    return (
      <BootstrapTable options={options} data={filteredActivities} pagination>
        {this.getColumns()}
      </BootstrapTable>
    );
  }
}

const doFilter = function (filter, activity) {
  let realField = fields[filter.field].fields;
  let fieldHanler = filterHandlers[filter.type];
  if (Array.isArray(realField)) {
    for (let k in realField) {
      let f = realField[k];
      let textNode = activity[f];
      if (doFieldHandler(filter.value, fieldHanler, textNode)) {
        return true;
      }
    }
    return false;
  } else {
    return doFieldHandler(filter.value, fieldHanler, activity[realField]);
  }
}

const doFieldHandler = (value, handler, textNode) => {
  textNode = Array.isArray(textNode) ? textNode.join(' ') : textNode;
  return handler((value + '').trim(), (textNode + '').trim())
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageInit: () => {
      dispatch(draftActions.fetchData());
    },
    onDraftDelete: (noteId) => {
      dispatch(draftActions.deleteData(noteId));
    }
  };
};

const mapStateTopProps = (state) => {
  const draftTable = state.data;
  return {
    status: draftTable.status,
    activitys: draftTable.activitys,
    dtDateFormat: draftTable.dtDateFormat,
    dateFormat: draftTable.dateFormat,
    pageLimit: draftTable.pageLimit,
    filters: draftTable.filter
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(DraftTable);