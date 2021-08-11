import styled from 'styled-components';
import { scrollbarStyles } from '@/style/global';

export const Container = styled.aside`
  position: relative;
  width: 36rem;
  height: 100vh;
  background: ${(props) => props.theme.colors.sidebarBg};
  border-right: thin solid ${(props) => props.theme.colors.border};
  overflow-y: auto;

  ${scrollbarStyles}

  @media print {
    display: none;
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
