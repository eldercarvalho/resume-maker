export * from './dark';
export * from './light';

interface Colors {
  primary: string;
  error: string;
  background: string;
  backgroundVar1: string;
  light: string;
  bodyBg: string;
  sidebarBg: string;
  headerBg: string;
  text: string;
  border: string;
  switchBg: string;
  inputBg: string;
  inputBorder: string;
  inputBorderHover: string;
  inputBorderFocus: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
  }
}
