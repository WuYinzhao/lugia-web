import * as React from 'react';
import styled from 'styled-components';
import Button from '../index';

const Empty = styled.span`
  display: inline-block;
  width: 10px;
`;
const Wrap = styled.div`
  & > button {
    margin-bottom: 10px;
  }
`;

export default class ButtonDemo extends React.Component<any, any> {
  render() {
    return (
      <Wrap>
        <Button circle icon="lugia-icon-direction_logout" />
        <Empty />
        <Button type="primary" circle icon="lugia-icon-financial_search" />
        <Empty />
        <Button circle icon="lugia-icon-financial_download" />
      </Wrap>
    );
  }
}
