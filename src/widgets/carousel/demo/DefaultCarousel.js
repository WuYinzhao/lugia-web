import React from 'react';
import styled from 'styled-components';
import Carousel from '../index';

const getBackground = (props: Object) => {
  const { i } = props;
  const isEven = i % 2 === 0;
  return `background: ${isEven ? '#000033' : '#161651'}`;
};

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  line-height: 200px;
  text-align: center;
  ${getBackground};
  color: #ccc;
`;

export default class DefaultCarousel extends React.Component<any, any> {
  render() {
    return <Carousel>{this.getItemWrap()}</Carousel>;
  }

  getItemWrap = () => {
    const len = 4;
    const items = [];
    for (let i = 0; i < len; i++) {
      const index = i + 1;
      items.push(<ItemWrap i={i}>{'Banner0' + index}</ItemWrap>);
    }
    return items;
  };
}
