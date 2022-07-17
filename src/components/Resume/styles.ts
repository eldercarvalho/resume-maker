import styled from 'styled-components';
import { scrollbarStyles } from '@/style/global';
import Button from '@/components/base/Button';

export const Container = styled.div`
  flex: 1;
  padding-top: 2em;
  margin-top: 6rem;
  height: calc(100vh - 6rem);
  overflow-y: auto;

  ${scrollbarStyles}

  @media print {
    width: 100%;
    padding-top: 0;
    margin-top: 0;
    height: auto;
  }
`;

export const ResumeHeader = styled.div`
  max-width: 79.3rem;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.text};
  }

  ${Button.S.Container} {
    text-transform: capitalize;
  }

  > * + * {
    margin-left: 1rem;
  }

  @media print {
    display: none;
  }
`;
