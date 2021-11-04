//@flow
import * as React from 'react';
import ThemeProvider from '../theme-provider';
import { deepMerge } from '@lugia/object-utils';
import type { TableProps, TableState } from './tableCss';
import {
  Container,
  LugiaTable,
  CustomBlock,
  Tr,
  Td,
  NoData,
  TBody,
  THead,
  TableContainer,
} from './tableCss';
import Widget from '../consts';

class Table extends React.Component<TableProps, TableState> {
  static defaultProps = {
    tableSize: 'middle',
    tableStyle: 'linear',
  };

  render() {
    const {
      data = [],
      columns = [],
      title,
      footer,
      showHeader = true,
      tableSize,
      scrollY,
    } = this.props;
    const containerTheme = this.props.getPartOfThemeProps('Container', { props: { scrollY } });
    const titleTheme = this.props.getPartOfThemeProps('Title');
    const footerTheme = this.props.getPartOfThemeProps('Footer');
    const tableTheme = this.props.getPartOfThemeProps('TableTheme');
    const emptyDataTheme = this.props.getPartOfThemeProps('EmptyData', { props: { tableSize } });
    return (
      <Container themeProps={containerTheme} tabIndex={10}>
        {title ? <CustomBlock themeProps={titleTheme}>{title}</CustomBlock> : null}
        <TableContainer themeProps={containerTheme}>
          <LugiaTable themeProps={tableTheme}>
            {showHeader && <THead> {this.getColumns(columns)}</THead>}
            <TBody>{this.getData(data)}</TBody>
          </LugiaTable>
          {data.length === 0 && <NoData themeProps={emptyDataTheme}>暂无数据</NoData>}
        </TableContainer>
        {footer ? <CustomBlock themeProps={footerTheme}>{footer}</CustomBlock> : null}
      </Container>
    );
  }

  getColumns = columns => {
    const { tableSize = 'middle', tableStyle = 'linear', scrollY } = this.props;
    const trTheme = this.props.getPartOfThemeProps('Th', {
      props: { tableStyle, isHead: true, scrollY },
    });

    return (
      <Tr themeProps={trTheme}>
        {columns.map((item: Object) => {
          const { title, width, align, ellipsis } = item;
          const tdTheme = this.props.getPartOfThemeProps('Th_Td', {
            props: { align, ellipsis, tableSize, tableStyle },
          });
          return <Td themeProps={this.getTdThemeWithWidth(tdTheme, width)}>{title}</Td>;
        })}
      </Tr>
    );
  };

  getData = data => {
    const { columns = [], tableSize = 'middle', tableStyle = 'linear', scrollY } = this.props;
    const count = data.length;

    return data.map((item, index) => {
      const { isLugiaHead } = item;
      const isHead = isLugiaHead && index === 0;
      const trTheme = this.props.getPartOfThemeProps('Tr', {
        props: { tableStyle, isHead, scrollY },
        selector: { index, count },
      });
      return (
        <Tr themeProps={trTheme}>
          {columns.map(column => {
            const { dataIndex, render, align, ellipsis, width } = column;

            const tdTheme = this.props.getPartOfThemeProps('Td', {
              props: { align, ellipsis, tableSize, tableStyle },
            });
            return (
              <Td themeProps={this.getTdThemeWithWidth(tdTheme, width)}>
                {render ? render(item[dataIndex], item, index) : item[dataIndex]}
              </Td>
            );
          })}
        </Tr>
      );
    });
  };

  getTdThemeWithWidth = (theme: Object, width) => {
    const tdTheme = {
      themeConfig: {
        normal: {
          width,
        },
      },
    };
    return deepMerge(theme, tdTheme);
  };
}

export default ThemeProvider(Table, Widget.Table);
