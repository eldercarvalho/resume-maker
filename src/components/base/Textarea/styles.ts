import styled, { css } from 'styled-components';

interface ContainerProps {
  mt?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}

  label {
    display: inline-block;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
    position: absolute;
    left: 0;
    bottom: calc(100% + 0.3rem);
  }

  textarea {
    width: 100%;
    height: 12rem;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.inputBg};
    border: thin solid ${({ theme }) => theme.colors.border};
    transition: 0.3s;
    outline: 0;
    padding: 1.2rem;

    :hover {
      border-color: ${({ theme }) => theme.colors.inputBorderHover};
    }

    :focus {
      border-color: ${({ theme }) => theme.colors.inputBorderFocus} !important;
    }
  }
`;
