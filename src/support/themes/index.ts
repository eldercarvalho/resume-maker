export * from './dark';
export * from './light';

interface Colors {
  primary: string;
  background: string;
  backgroundVar1: string;
  light: string;
  bodyBg: string;
  sidebarBg: string;
  text: string;
  border: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
  }
}
