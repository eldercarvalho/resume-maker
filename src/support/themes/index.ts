export * from './dark';
export * from './light';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    dark: string;
    darkLight: string;
    light: string;
    text: string;
  }
}
