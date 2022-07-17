import styled, { css, keyframes } from 'styled-components';
import { rgba, shade } from 'polished';

interface IContainerProps {
  variant: 'primary' | 'secondary' | 'error';
  isIconOnly?: boolean;
  isDark?: boolean;
  isFull?: boolean;
  isSmall?: boolean;
  isDisabled: boolean;
  isTextOnly?: boolean;
  isLigthed?: boolean;
  isOutlined?: boolean;
  isLoading?: boolean;
  isRounded?: boolean;
  isReduced?: boolean;
}

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export namespace S {
  export const Container = styled.button<IContainerProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ isTextOnly, theme }) => (isTextOnly ? theme.colors.text : '#FFF')};
    transition: all 0.3s;
    border: thin solid transparent;
    border-radius: 3px;
    font-weight: 600;
    padding: 0 3rem;
    font-size: 1.6rem;
    white-space: nowrap;
    text-transform: uppercase;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }

    svg {
      margin-right: 0.4rem;
    }

    ${({ variant, theme }) =>
      variant === 'error' &&
      css`
        background: ${theme.colors.error};
        &:hover {
          background: ${shade(0.2, theme.colors.error)};
        }
      `}

    ${(props) =>
      props.isIconOnly &&
      css`
        width: 4rem;
        padding: 0;

        svg {
          margin-right: 0;
        }
      `}

    ${(props) =>
      props.isFull &&
      css`
        display: block;
        width: 100%;
      `}

  ${(props) =>
      props.isSmall &&
      css`
        height: 3rem;
        font-size: 1.2rem;
        padding: 0 1rem;
      `}

  ${(props) =>
      props.isSmall &&
      props.isIconOnly &&
      css`
        width: 3rem;
      `}

  ${(props) =>
      props.isDisabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
      `}

  ${(props) =>
      props.isTextOnly &&
      css`
        background: transparent;

        &:hover {
          background: transparent;
          opacity: 0.7;
        }
      `} /* @media (min-width: 1024px) {
    &:hover {
      background: #FFF;
    }
  } */

  ${(props) =>
      props.isLigthed &&
      css`
        color: #333;

        :hover {
          color: ${rgba('#333', 0.7)};
        }
      `}

    ${(props) =>
      props.isOutlined &&
      css`
        background: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};

        :hover {
          color: #fff;
        }
      `}

    ${(props) =>
      props.isLoading &&
      css`
        svg {
          animation: ${loadingAnimation} 0.5s linear infinite;
        }
      `}

    ${(props) =>
      props.isRounded &&
      css`
        border-radius: 20px;
      `}

    ${(props) =>
      props.isReduced &&
      css`
        padding-left: 0 !important;
        padding-right: 0 !important;
        width: auto;
        height: auto;
      `}
  `;
}
