/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import CSSComponent, { css } from '../theme/CSSProvider';
import ThemeHoc from '../theme-provider';
import Widget from '../consts';

const LugiadContainer = CSSComponent({
  tag: 'div',
  className: 'CardOutContainer',
  normal: {
    selectNames: [
      ['width'],
      ['height'],
      ['background'],
      ['boxShadow'],
      ['overflow'],
      ['border'],
      ['borderRadius'],
      ['margin'],
      ['padding'],
      ['opacity'],
    ],
    defaultTheme: {
      background: {
        color: '#e8e8e8',
      },
    },
  },
  hover: {
    selectNames: [['background'], ['border'], ['borderRadius'], ['boxShadow'], ['opacity']],
  },
  clicked: {
    selectNames: [['background'], ['border'], ['borderRadius'], ['boxShadow'], ['opacity']],
  },
  css: css`
    position: relative;
    display: flex;
  `,
  option: { hover: true },
});

class Lugiad extends React.Component<any> {
  componentDidMount() {
    const { fixed = false, zIndex = 100, lugiadWidgetId } = this.props;

    if (fixed && lugiadWidgetId) {
      const parentBox = document.getElementById(`${lugiadWidgetId}_father`);
      if (parentBox) {
        parentBox.style.position = 'sticky';
        parentBox.style.zIndex = zIndex;
        parentBox.style.top = 0;
      }
    }
  }

  render() {
    const { props } = this;
    return (
      <LugiadContainer themeProps={props.getPartOfThemeProps('Container')}>
        {props.content}
      </LugiadContainer>
    );
  }
}
export default ThemeHoc(Lugiad, Widget.Lugiad, { hover: true, active: true });
