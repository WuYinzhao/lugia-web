import React from 'react';
import Skeleton from '../index';

export default class AnimationSkeleton extends React.Component {
  render() {
    return (
      <Skeleton
        picture={true}
        pictureWidth={200}
        pictureHeight={100}
        titleWidth={100}
        paragraphWidth={[200, 300, 200]}
        animation={true}
      />
    );
  }
}
