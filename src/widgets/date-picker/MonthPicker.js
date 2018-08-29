//import type { ChangeEventParam } from '@lugia/lugia-web';
import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from './DateInput';
import { MonthChild, MonthChildText } from './styled';

class Month extends Component {
  render() {
    return <DatePicker mode={'month'} {...this.props} />;
  }
}

export default Month;
