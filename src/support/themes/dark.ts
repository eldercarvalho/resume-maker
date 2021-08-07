import { DefaultTheme } from 'styled-components';
import { opacify } from 'polished';

export const Dark: DefaultTheme = {
  primary: '#DA0037',
  dark: '#171717',
  darkLight: '#444444',
  light: '#EDEDED',
  text: '#EDEDED',
  border: opacify(0.1, 'rgba(255, 255, 255, 0.1)'),
};
