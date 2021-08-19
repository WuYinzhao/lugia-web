import React from 'react';
import Anchor from '../index';

const { Link } = Anchor;

export default class AnchorDemo extends React.Component {
  render() {
    return (
      <Anchor slideType="circle" id="anchor-0" useHref={false}>
        <Link title="基本用法" href="#anchor-0" />
        <Link title="指定容器" href="#anchor-1" />
        <Link title="固定状态改变的回调" href="#anchor-2" />
      </Anchor>
    );
  }
}
