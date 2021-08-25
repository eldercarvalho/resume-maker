import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;

  button {
    & + button {
      margin-left: 0.6rem;
    }
  }
`;
