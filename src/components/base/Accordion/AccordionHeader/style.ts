import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpened: boolean;
}

export const Container = styled.h3<ContainerProps>`
  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    background: none;
    font-size: 1.6rem;
    padding: 1.2rem 2rem;
    text-align: left;
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => (props.theme.name === 'dark' ? '300' : '400')};
    border-bottom: thin solid transparent;
    transition: border 0.3s;

    ${({ isOpened }) =>
      isOpened &&
      css`
        border-color: ${(props) => props.theme.colors.border};
      `}

    svg {
      stroke-width: 1px;
    }
  }
`;
