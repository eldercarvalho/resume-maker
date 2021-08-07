import { DefaultTheme } from 'styled-components';
import { opacify } from 'polished';

const COLORS = {
  primary: '#DA0037',
  background: '#171717',
  backgroundVar1: '#444444',
  light: '#EDEDED',
};

export const Dark: DefaultTheme = {
  name: 'dark',
  colors: {
    bodyBg: COLORS.backgroundVar1,
    sidebarBg: COLORS.background,
    text: COLORS.light,
    border: opacify(0.1, 'rgba(255, 255, 255, 0.1)'),
  },
};
