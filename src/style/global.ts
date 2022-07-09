import styled, { createGlobalStyle, css } from 'styled-components';

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
    background: ${(props) => props.theme.colors.bodyBg};
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    font-family: inherit;
  }

  @media print {
    @page {
      size:  auto;
      margin: 10mm;
    }
  }
`;

export const scrollbarStyles = css`
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

interface GridProps {
  columns: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 0 2rem;
`;
