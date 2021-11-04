/**
 *
 * create by guorg
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import Pagination from './index';
import Widget from '../consts';
import Theme from '../theme';
import { getBorder } from '@lugia/theme-utils';
const Title = styled.p`
  margin: 0;
  padding: 20px;
`;

export default class PaginationDemo extends React.Component<any, any> {
  constructor() {
    super();
  }
  state = {
    quickJumperValue: 1,
  };
  onShowSizeChange = (current: number, pageSize: number) => {
    console.log(current, pageSize);
  };
  onChange(pageNumber: number, pageSize: number) {
    console.log('pageNumber: ', pageNumber);
  }
  onQuickJumperInputChange = obj => {
    const { newValue } = obj;
    this.setState({ quickJumperValue: newValue });
  };

  render() {
    return (
      <div>
        <Title> 配置 外观样式 基础分页。</Title>
        <Pagination defaultCurrent={2} total={500} />
        <Title> size="small"配置 外观样式 基础分页。</Title>
        <Pagination
          size="small"
          defaultCurrent={2}
          total={500}
          blockList={['Total', 'Page', 'PageInput', 'PageSize']}
        />
        <Title>size="default" 配置 外观样式 基础分页。</Title>
        <Pagination
          size="default"
          defaultCurrent={2}
          total={500}
          blockList={['Total', 'Page', 'PageInput', 'PageSize']}
        />
        <Title> size="large"配置 外观样式 基础分页。</Title>
        <Pagination
          size="large"
          defaultCurrent={2}
          total={500}
          blockList={['Total', 'Page', 'PageInput', 'PageSize']}
        />
        <Title>基础分页。受限</Title>
        <Pagination current={3} total={500} />
        <Title>更多分页。</Title>
        <Pagination defaultCurrent={6} total={500} />
        <Title>改变每页显示条目数。</Title>
        <Pagination
          showSizeChanger={true}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
        <Title>快速跳转到某一页。</Title>
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          showSizeChanger={true}
          onShowSizeChange={this.onShowSizeChange}
        />
        <Title>总计数据在右边</Title>
        <Pagination
          isShowTotalData
          showQuickJumper
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          showSizeChanger={true}
          onShowSizeChange={this.onShowSizeChange}
        />
        <Title>总计数据在左边</Title>
        <Pagination
          align={'Left'}
          blockList={['Total', 'Page', 'PageInput']}
          isShowTotalData
          showQuickJumper
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
        <Title>分页 设置为右对齐方式</Title>
        <Pagination
          align={'Right'}
          blockList={['Total', 'Page', 'PageInput']}
          isShowTotalData
          showQuickJumper
          showSizeChanger
          defaultCurrent={2}
          total={400}
          onChange={this.onChange}
          onShowSizeChange={this.onShowSizeChange}
        />
        <Title>简单的翻页。</Title>
        <Pagination simple defaultCurrent={2} total={500} />
        <Title>单页 不显示翻页箭头。</Title>
        <Pagination hideOnSinglePage defaultCurrent={2} total={200} />
        <Title> manualQuickJumper true 手动控制分页跳转 由 quickJumperValue 受限控制</Title>
        <Pagination
          total={500}
          blockList={['Total', 'Page', 'PageInput', 'PageSize']}
          manualQuickJumper
          quickJumperValue={this.state.quickJumperValue}
          onQuickJumperInputChange={this.onQuickJumperInputChange}
        />
        <Title> 简洁分页 大数据分页</Title>
        <Pagination defaultCurrent={99999} total={10000000} simple />
        <Title> 总数据很多时 页码可自适应宽度</Title>
        <Pagination defaultCurrent={99999} total={10000000} />
        <Title> 自定义共计数据文本</Title>
        <Pagination
          defaultCurrent={5}
          total={100}
          totalText={'共计100组数据'}
          showTotalData={true}
        />
      </div>
    );
  }
}
