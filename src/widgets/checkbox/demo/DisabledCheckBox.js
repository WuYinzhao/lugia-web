import React from 'react';
import Checkbox from '../index';

export default class CheckBoxDemo extends React.Component {
  render() {
    return (
      <div>
        <Checkbox disabled>CheckBox</Checkbox>
        <br />
        <Checkbox checked disabled>
          CheckBox
        </Checkbox>
      </div>
    );
  }
}
