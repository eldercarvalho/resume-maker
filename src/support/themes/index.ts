export * from './dark';
export * from './light';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    bodyBgColor: string;
  }
}
