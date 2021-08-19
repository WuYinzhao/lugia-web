import React from 'react';
import Progress from '../index';

export default class ProgressDemo extends React.Component {
  render() {
    return (
      <div>
        <Progress type="circle" size="small" percent={0} />
        <br />
        <Progress type="circle" size="small" status="error" percent={50} />
        <br />
        <Progress type="circle" size="small" status="success" percent={100} />
      </div>
    );
  }
}
