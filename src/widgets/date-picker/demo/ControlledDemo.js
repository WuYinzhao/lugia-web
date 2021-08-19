import React from 'react';
import styled from 'styled-components';
import DatePicker from '../index';

const { RangePicker } = DatePicker;
export const DemoItem = styled.span`
  display: inline-block;
  padding: 0 20px 20px 0;
`;
export default class BaseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateValue: '2019-01-01', rangeValue: ['2019-01-01', '2019-02-20'] };
  }
  onChange = obj => {
    const { newValue } = obj;
    this.setState({ dateValue: newValue });
  };
  rangeChange = obj => {
    const { newValue } = obj;
    this.setState({ rangeValue: newValue });
  };
  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <DatePicker value={this.state.dateValue} format={'YYYY-MM-DD'} onChange={this.onChange} />
        </DemoItem>
        <br />
        <DemoItem>
          <RangePicker
            value={this.state.rangeValue}
            format={'YYYY-MM-DD'}
            onChange={this.rangeChange}
          />
        </DemoItem>
      </React.Fragment>
    );
  }
}
