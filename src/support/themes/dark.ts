import { DefaultTheme } from 'styled-components';
import { opacify } from 'polished';

const COLORS = {
  primary: '#39A2DB',
  background: '#0d1117',
  backgroundVar1: '#161b22',
  light: '#EDEDED',
};

export const Dark: DefaultTheme = {
  name: 'dark',
  colors: {
    ...COLORS,
    bodyBg: COLORS.background,
    sidebarBg: COLORS.background,
    headerBg: COLORS.backgroundVar1,
    text: '#dedede',
    border: opacify(0.1, 'rgba(255, 255, 255, 0.1)'),
    switchBg: '#4b4d4e',

    inputBg: '#262e3a',
    inputBorder: 'transparent',
    inputBorderHover: 'rgba(255, 255, 255, 0.3)',
    inputBorderFocus: 'rgba(255, 255, 255, 0.6)',
  },
};
