import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type: 'success' | 'error' | 'info';
}

const toastTypes = {
  success: css`
    background: ${({ theme }) => theme.colors.success};
  `,
  error: css`
    background: ${({ theme }) => theme.colors.accent};
  `,
  info: css`
    background: ${({ theme }) => theme.colors.info};
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  position: relative;
  display: flex;
  width: 320px;
  padding: 1.6rem;
  border-radius: 3px;

  ${({ type }) => toastTypes[type]}

  & + div {
    margin-top: 1.6rem;
  }

  > svg {
    margin-right: 1.6rem;
    flex-shrink: 0;
  }

  div {
    h3 {
      font-weight: 600;
      margin-block-end: 0.7rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.5;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: none;
    background: transparent;
    color: inherit;
  }
`;
