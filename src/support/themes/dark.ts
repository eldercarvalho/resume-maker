import { DefaultTheme } from 'styled-components';
import { opacify } from 'polished';

const COLORS = {
  primary: '#DA0037',
  background: '#18191a',
  backgroundVar1: '#242526',
  light: '#EDEDED',
};

export const Dark: DefaultTheme = {
  name: 'dark',
  colors: {
    ...COLORS,
    bodyBg: COLORS.background,
    sidebarBg: COLORS.background,
    text: COLORS.light,
    border: opacify(0.1, 'rgba(255, 255, 255, 0.1)'),
  },
};
