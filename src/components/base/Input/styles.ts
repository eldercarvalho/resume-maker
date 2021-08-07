import styled, { css } from 'styled-components';

interface ContainerProps {
  dark: boolean;
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;

  label {
    display: inline-block;
    padding: 0 0.3rem;
    font-size: 1.4rem;
    position: absolute;
    top: 22px;
    left: 1.3rem;
    transform: translateY(-50%);
    background: #fff;
    transition: 0.3s;

    ${({ isFocused }) =>
      isFocused &&
      css`
        font-size: 1.2rem;
        top: 0%;
        font-weight: 600;
      `}

    ${({ isFilled }) =>
      isFilled &&
      css`
        font-size: 1.2rem;
        top: 0%;
        font-weight: 600;
      `}

      ${({ isErrored }) =>
      isErrored &&
      css`
        color: ${({ theme }) => theme.colors.primary};
      `}
  }

  div {
    display: flex;
    border: 2px solid #333;
    border-radius: 3px;
    transition: border-color 0.3s;

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
      height: 40px;
      background: #fff;
      font-size: 1.4rem;
      border-radius: 3px;
      border: none;
      color: #333;
      padding: 0 1.6rem;
      transition: 0.3s;
      font-weight: 500;

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
