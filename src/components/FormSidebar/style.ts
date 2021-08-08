import styled from 'styled-components';

export const Container = styled.aside`
  position: relative;
  width: 30rem;
  height: 100vh;
  background: ${(props) => props.theme.colors.sidebarBg};
  border-right: thin solid ${(props) => props.theme.colors.border};
  overflow-y: auto;

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

export const Logo = styled.h1`
  font-size: 2.6rem;
  color: ${(props) => props.theme.colors.text};
  padding: 1.6rem;
  font-weight: 200;

  strong {
    color: ${(props) => props.theme.colors.primary};
  }
`;
