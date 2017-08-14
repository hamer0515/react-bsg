import DateFormat from 'dateformat-util';

export const DATE_FMT = window.constants.dateFormat;
export const DATETIME_FMT = window.constants.dateFormat + ' hh:mm:ss';
export const getDataUrl = '/backstop/api/draft?include=note,auther';

export const dateDataFormat = (cell, row, enumObject) => (DateFormat.format(new Date(cell), DATE_FMT));

export const datetimeDataFormat = (cell, row, enumObject) => (DateFormat.format(new Date(cell), DATETIME_FMT));