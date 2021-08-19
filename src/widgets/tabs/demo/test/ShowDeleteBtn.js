import React from 'react';
import Tabs from '../../index';
import styled from 'styled-components';
const Contain = styled.div`
  float: left;
  width: 50%;
`;
const H1 = styled.h1`
  line-height: 50px;
  font-size: 16px;
`;
const H2 = styled.p`
  line-height: 50px;
  font-size: 14px;
`;
export default class ShowDeleteBtn extends React.Component<any, any> {
  render() {
    const data = [
      {
        title: 'Tab1',
        content: 'content of Tab1',
      },
      {
        title: 'Tab2',
        content: 'content of Tab2',
      },
    ];
    const cardShowDeleteBtn = {
      showDeleteBtn: true,
      tabType: 'card',
    };
    const windowShowDeleteBtn = {
      showDeleteBtn: true,
      tabType: 'window',
    };
    return (
      <div>
        <H2>showDeleteBtn-card</H2>
        <Tabs {...cardShowDeleteBtn} />
        <H2>showDeleteBtn-window</H2>
        <Tabs {...windowShowDeleteBtn} />
      </div>
    );
  }
}
