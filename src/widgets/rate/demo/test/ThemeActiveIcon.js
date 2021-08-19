import React from 'react';
import styled from 'styled-components';
import Rate from '../../index';
import Theme from '../../../theme';
import Widget from '../../../consts/index';

const Text = styled.span`
  display: inline-block;
  padding: 0 10px;
`;
const Box = styled.div`
  margin-bottom: 10px;
`;
const BoxP = styled.p`
  margin-bottom: 10px;
  color: #000;
`;
export default class ThemeActiveIcon extends React.Component<any, any> {
  render() {
    const configNormalColor = {
      [Widget.Rate]: {
        ActiveIcon: {
          normal: {
            color: 'red',
          },
        },
      },
    };
    const configNormalFont = {
      [Widget.Rate]: {
        ActiveIcon: {
          normal: {
            fontSize: 30,
          },
        },
      },
    };
    const configNormalMargin = {
      [Widget.Rate]: {
        ActiveIcon: {
          normal: {
            margin: {
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            },
          },
        },
      },
    };
    const configOutNormal = {
      [Widget.Rate]: {
        ActiveIcon: {
          normal: {
            padding: {
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            },
          },
        },
      },
    };
    const configDisabled = {
      [Widget.Rate]: {
        ActiveIcon: {
          disabled: {
            color: 'green',
          },
        },
      },
    };
    return (
      <div>
        <BoxP>normal可配置项: [["color"],["margin"], ["fontSize"]]</BoxP>
        <Box>
          <Theme config={configNormalColor}>
            <Text>normal-color</Text>
            <Rate />
          </Theme>
        </Box>
        <Box>
          <Theme config={configNormalFont}>
            <Text>normal-font</Text>
            <Rate />
          </Theme>
        </Box>
        <Box>
          <Theme config={configNormalMargin}>
            <Text>normal-margin</Text>
            <Rate />
          </Theme>
        </Box>
        <BoxP>未在normal配置项的测试</BoxP>
        <Box>
          <Theme config={configOutNormal}>
            <Text>padding</Text>
            <Rate />
          </Theme>
        </Box>
        <Box>
          <Theme config={configDisabled}>
            <p>
              <Text>disabled: 未配置组件disabled属性时</Text>
              <Rate />
            </p>
            <p>
              <Text>disabled: 配置组件disabled属性时</Text>
              <Rate disabled />
            </p>
          </Theme>
        </Box>
      </div>
    );
  }
}
