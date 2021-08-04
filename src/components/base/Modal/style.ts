import styled, { css, keyframes } from 'styled-components';

const showModalAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const showModalPopupAnimation = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  animation: ${showModalAnimation} 0.5s forwards;
  padding: 1.6rem;
`;

interface ModalContainerProps {
  width: number;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: relative;
  display: inline-block;
  max-width: ${({ width }) => width}px;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  padding: 1.6rem;
  animation: ${showModalPopupAnimation} 0.3s forwards;

  > div {
    border-radius: 3px;
    padding: 2rem 2rem 0.5rem;
    color: #333;
  }

  > button {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`;

interface ModalActionsContainerProps {
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

export const ModalActionsContainer = styled.div<ModalActionsContainerProps>`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  ${({ align }) => alignments[align]}

  button + button {
    margin-left: 1.6rem;
  }
`;
