import styled, { css } from 'styled-components';

interface ContainerProps {
  mb?: string;
}

export const Container = styled.ul<ContainerProps>`
  border: thin solid ${({ theme }) => theme.colors.border};
  border-radius: 0.3rem;

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `};
`;
