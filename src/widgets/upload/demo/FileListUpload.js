import React from 'react';
import Upload from '../index';

class UploadDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    const buttonProps = {
      inputId: 'buttonUpload',
      showFileList: true,
      url: '/upload',
      fileList: [
        { id: 1, name: '上传完成的图片.jpg', status: 'done' },
        { id: 2, name: '上传失败的文档.doc', status: 'fail' },
      ],
    };
    return (
      <div>
        <Upload {...buttonProps} />
      </div>
    );
  }
}

export default UploadDemo;
