export * from './dark';
export * from './light';

interface Colors {
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
