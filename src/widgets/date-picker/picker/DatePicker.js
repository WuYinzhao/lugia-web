import React, { Component } from 'react';
import Widget from '../../consts/index';
import ThemeProvider from '../../theme-provider';
import DateInput from '../triggerPanel/singlePanelTrigger';

export default ThemeProvider(
  class DatePicker extends Component {
    render() {
      return <DateInput {...this.props} mode={'date'} />;
    }
  },
  Widget.DatePicker,
  { hover: true, active: true }
);
