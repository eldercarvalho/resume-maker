import styled, { css } from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
  isDragOver: boolean;
}

export const Container = styled.li<ContainerProps>`
  display: flex;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};
  padding: 1rem 1.2rem;

  & + li {
    border-top: thin solid ${(props) => props.theme.colors.border};
  }

  /* ${({ isDragging }) =>
    isDragging &&
    css`
      opacity: 0.6;
    `}

  ${({ isDragOver }) =>
    isDragOver &&
    css`
      opacity: 0;
    `} */
`;
