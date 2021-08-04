import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${(props) => props.theme.bodyBgColor};
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;
