import styled from 'styled-components';

export namespace S {
  export const Container = styled.p`
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  `;
}
