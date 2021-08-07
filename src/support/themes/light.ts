import { DefaultTheme } from 'styled-components';

const COLORS = {
  primary: '#DA0037',
  secondary: '#171717',
  secondaryLight: '#444444',
  light: '#FFF',
  text: '#565',
};

export const Light: DefaultTheme = {
  name: 'light',
  colors: {
    ...COLORS,
    bodyBg: '#dedede',
    sidebarBg: COLORS.light,
    text: COLORS.text,
    border: 'rgba(0, 0, 0, 0.5)',
  },
};
