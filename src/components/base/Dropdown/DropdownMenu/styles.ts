import styled, { css } from 'styled-components';

interface ContainerProps {
  // position: 'top' | 'right' | 'bottom' | 'left';
  isOpened: boolean;
}

// const dropdownPositions = {
//   top: css`
//     bottom: 100%;
//     left: 0;
//   `,
//   right: css`
//     top: 100%;
//     right: 0;
//   `,
//   bottom: css`
//     bottom: 100%;
//     left: 0;
//   `,
//   left: css`
//     top: 100%;
//     left: 0;
//   `
// }

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 100%;
  right: 0;
  transition: 0.3s;
  opacity: 0;
  pointer-events: none;

  ${({ isOpened }) =>
    isOpened &&
    css`
      padding-top: 1.4rem;
      opacity: 1;
      pointer-events: auto;
    `}

  div {
    position: relative;
    background: #fff;
    padding: 1.6rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

    ::before,
    ::after {
      content: '';
      position: absolute;
      bottom: 100%;
      right: 1rem;
      border-right: 1rem solid transparent;
      border-left: 1rem solid transparent;
    }

    ::before {
      bottom: calc(100% + 2px);
      border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
    }

    ::after {
      border-bottom: 1rem solid #fff;
    }
  }
`;
