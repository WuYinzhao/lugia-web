/**
 * Anchor
 * create by guorg
 * @flow
 */
import get from './theme-common-dict';
import CSSComponent, { css } from '@lugia/theme-css-hoc';

export type AnchorLinkProps = {
  title: string | React.ReactNode,
  href: string,
};
export type AnchorLinkState = {};

export const LinkWrap = CSSComponent({
  tag: 'div',
  className: 'LinkWrap',
  normal: {
    selectNames: [['width'], ['height'], ['padding'], ['background']],
    defaultTheme: {
      padding: {
        top: 12,
        left: get('marginToSameElement'),
      },
    },
  },

  css: css`
    line-height: 1;
  `,
  option: { hover: true, active: true },
});
export const LinkTitle = CSSComponent({
  tag: 'a',
  className: 'LinkTitle',
  normal: {
    selectNames: [['fontSize'], ['font'], ['color']],
    defaultTheme: {
      color: get('darkGreyColor'),
    },
  },
  hover: {
    selectNames: [['fontSize'], ['font'], ['color']],
    defaultTheme: {
      color: get('themeColor'),
    },
  },
  focus: {
    selectNames: [['fontSize'], ['font'], ['color']],
    defaultTheme: {},
    getCSS() {
      return 'text-decoration: none;';
    },
  },
  active: {
    selectNames: [['fontSize'], ['font'], ['color']],
    defaultTheme: {
      color: get('themeColor'),
    },
  },

  css: css`
    display: block;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  `,
  option: { hover: true, active: true },
});
