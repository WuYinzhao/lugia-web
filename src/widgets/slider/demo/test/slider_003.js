import React from 'react';
import styled from 'styled-components';
import Slider from '../../index';
export const DemoItem = styled.div`
  padding: 0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  onchange = v => {};
  render() {
    return (
      <DemoItem>
        <div>minValue</div>
        <Slider minValue={60} maxValue={160} tips />
      </DemoItem>
    );
  }
}
