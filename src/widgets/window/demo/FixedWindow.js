import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Window from '../index';
import Button from '../../button/index';
const Text = styled.p`
  line-height: 200px;
  text-align: center;
`;

export default class FixedWindow extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }
  onClick = () => {
    this.setState({ visible: true });
  };
  onClose = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <Button onClick={this.onClick}>打开窗体</Button>
        <Window
          visible={visible}
          onClose={this.onClose}
          middle
          onFixed={() => {}}
          width={500}
          height={500}
        >
          <Text>点击头部区域按钮</Text>
          <Text>可以实现固定在当前位置</Text>
        </Window>
      </Fragment>
    );
  }
}
