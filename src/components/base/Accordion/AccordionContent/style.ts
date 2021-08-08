import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  transition: height 0.3s;
  background: ${({ theme }) => theme.colors.background};

  > div {
    padding: 1.6rem;
  }
`;
