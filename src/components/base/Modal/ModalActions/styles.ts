import styled, { css } from 'styled-components';

interface ContainerProps {
  align: 'left' | 'center' | 'right';
}

const alignments = {
  left: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: flex-end;
  `,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 2rem;

  ${({ align }) => alignments[align]}

  button + button {
    margin-left: 1.6rem;
  }
`;
