import { DefaultTheme } from 'styled-components';

const COLORS = {
  primary: '#0F52BA',
  background: '#FFF',
  backgroundVar1: '#dedede',
  light: '#FFF',
  text: '#565',
};

export const Light: DefaultTheme = {
  name: 'light',
  colors: {
    ...COLORS,
    error: '#e83b46',
    bodyBg: COLORS.backgroundVar1,
    sidebarBg: COLORS.light,
    headerBg: COLORS.light,
    text: COLORS.text,
    border: 'rgba(0, 0, 0, 0.2)',
    switchBg: '#555',

    inputBg: '#f1f0f0',
    inputBorder: 'rgba(0, 0, 0, 0.2)',
    inputBorderHover: 'rgba(0, 0, 0, 0.5)',
    inputBorderFocus: 'rgba(0, 0, 0, 0.9)',
  },
};
