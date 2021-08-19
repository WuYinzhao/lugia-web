import React from 'react';
import Upload from '../../index';
export default class AutoUpload extends React.Component<any, any> {
  render() {
    const defaultProps = {
      areaType: 'both',
      url: '/upload',
      showFileList: true,
      autoUpload: false,
    };
    return <Upload {...defaultProps} />;
  }
}
