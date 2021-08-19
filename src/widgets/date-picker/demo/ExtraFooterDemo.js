import React from 'react';
import styled from 'styled-components';

import DatePicker from '../index';
const { YearPicker, MonthPicker, WeekPicker, WeeksPicker, RangePicker } = DatePicker;
export const DemoItem = styled.span`
  display: inline-block;
  padding: 0 20px 20px 0;
`;
export default class BaseDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DemoItem>
          <DatePicker extraFooter={{ message: 'extraFooter', style: { color: 'red' } }} />
        </DemoItem>
        <DemoItem>
          <YearPicker
            extraFooter={{ message: 'extraFooter', style: { color: 'red' } }}
            placeholder={'选择年'}
          />
        </DemoItem>
        <DemoItem>
          <MonthPicker
            extraFooter={{ message: 'extraFooter', style: { color: 'red' } }}
            placeholder={'选择月份'}
          />
        </DemoItem>
        <br />
        <DemoItem>
          <WeekPicker
            extraFooter={{ message: 'extraFooter', style: { color: 'red' } }}
            placeholder={'选择周'}
          />
        </DemoItem>
        <DemoItem>
          <WeeksPicker
            extraFooter={{ message: 'extraFooter', style: { color: 'red' } }}
            placeholder={'选择周'}
          />
        </DemoItem>
        <br />
        <DemoItem>
          <RangePicker
            extraFooter={{ message: 'extraFooter', style: { color: 'red' } }}
            placeholder={['开始日期', '结束日期']}
          />
        </DemoItem>
      </React.Fragment>
    );
  }
}
