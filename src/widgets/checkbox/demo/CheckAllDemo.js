import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '../index';

const CheckboxGroup = Checkbox.Group;
const data = [
  {
    text: 'Apple',
    value: 'apple',
  },
  {
    text: 'Pear',
    value: 'pear',
  },
  {
    text: 'Orange',
    value: 'orange',
  },
];
const CheckAll = styled.div`
  padding: 6px;
`;
const Items = styled.div`
  padding: 10px 6px;
`;

export default class extends React.Component {
  constructor() {
    super();
    const value = ['pear'];
    this.state = {
      value,
      indeterminate: value.length > 0,
      checked: value.length === data.length,
    };
    this.allValues = [];
    data.forEach(item => {
      this.allValues.push(item.value);
    });
  }
  handleChange = value => {
    console.log('value ->', value);
    const { newValue } = value;
    this.setState({
      value: newValue,
      checked: newValue.length === data.length,
      indeterminate: !!newValue.length && newValue.length < data.length,
    });
  };
  handleCheckAll = () => {
    const { checked } = this.state;
    this.setState({
      value: checked ? [] : this.allValues,
      checked: !checked,
      indeterminate: false,
    });
  };
  render() {
    const { value, indeterminate, checked } = this.state;
    return (
      <div>
        <CheckAll>
          <Checkbox indeterminate={indeterminate} checked={checked} onChange={this.handleCheckAll}>
            Check All
          </Checkbox>
        </CheckAll>
        <Items>
          <CheckboxGroup data={data} value={value} onChange={this.handleChange} />
        </Items>
      </div>
    );
  }
}
