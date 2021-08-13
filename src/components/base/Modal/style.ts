import styled, { keyframes } from 'styled-components';

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
  background: rgba(0, 0, 0, 0.6);
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
  background: ${(props) => props.theme.colors.background};
  border-radius: 3px;
  animation: ${showModalPopupAnimation} 0.3s forwards;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  > div {
    border-radius: 3px;
  }

  > button {
    position: absolute;
    top: 1rem;
    right: 1.2rem;
  }
`;
