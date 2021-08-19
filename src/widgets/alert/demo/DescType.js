import * as React from 'react';
import Alert from '../index';

export default class AlertDemo extends React.Component {
  render() {
    return (
      <div>
        <Alert message="Alert-info" closable description="这是辅助性文字介绍" />
        <br />
        <Alert type="success" message="Alert-success" closable description="这是辅助性文字介绍" />
        <br />
        <Alert
          type="error"
          message="Alert-error"
          closable
          closeText="确定"
          description="这是辅助性文字介绍"
        />
        <br />
        <Alert
          type="warning"
          message="Alert-warning"
          closable
          closeText="ok"
          description="这是辅助性文字介绍"
        />
      </div>
    );
  }
}
