import styled, { css } from 'styled-components';

interface ContainerProps {
  dark: boolean;
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isDate: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;

  & + * {
    margin-top: 2.6rem;
  }

  label {
    display: inline-block;
    padding: 0 0.3rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    bottom: 1.2rem;
    left: 1.3rem;
    transition: 0.3s;
    font-weight: 300;

    ${({ isFocused, isDate }) =>
      (isFocused || isDate) &&
      css`
        font-size: 1.1rem;
        bottom: calc(100% + 2px);
        left: 0;
      `}

    ${({ isFilled }) =>
      isFilled &&
      css`
        font-size: 1.1rem;
        bottom: calc(100% + 2px);
        left: 0;
      `}

      ${({ isErrored }) =>
      isErrored &&
      css`
        color: ${({ theme }) => theme.colors.primary};
      `}
  }

  div {
    display: flex;
    border: thin solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 3px;
    transition: border-color 0.3s;

    :hover {
      border-color: ${({ theme }) => theme.colors.inputBorderHover};
    }

    ${({ isFocused }) =>
      isFocused &&
      css`
        border-color: ${({ theme }) => theme.colors.inputBorderFocus} !important;
      `}

    ${({ dark }) =>
      dark &&
      css`
        border-color: #fff;
      `}

    ${({ isErrored }) =>
      isErrored &&
      css`
        border-color: ${({ theme }) => theme.colors.primary};
      `}

    input {
      width: 100%;
      height: 3.6rem;
      background: ${({ theme }) => theme.colors.inputBg};
      font-size: 1.3rem;
      border-radius: 3px;
      border: none;
      color: ${({ theme }) => theme.colors.text};
      padding: 0 1.6rem;
      transition: 0.3s;
      font-weight: 500;
      outline: 0;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }

      ${({ dark }) =>
        dark &&
        css`
          background: rgba(0, 0, 0, 0.7);
          color: #fff;

          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
        `}
    }

    button {
      border: none;
      background: none;
      padding: 0 0.8rem;
      display: flex;
      align-items: center;
    }
  }
`;

export const Error = styled.span`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
