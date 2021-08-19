import React from 'react';
import { Slider } from '@lugia/lugia-web';
import styled from 'styled-components';
export const DemoItem = styled.div`
  padding: 0 20px 20px 0;
`;
export default class BaseSlider extends React.Component {
  onchange = v => {};
  render() {
    return (
      <DemoItem>
        <div>value</div>
        <Slider value={10} />
      </DemoItem>
    );
  }
}
