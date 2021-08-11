import styled from 'styled-components';
import { scrollbarStyles } from '@/style/global';

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
