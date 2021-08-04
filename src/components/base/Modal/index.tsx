import React, { MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';

import Button from '../Button';

import { Container, ModalContainer } from './style';

interface ModalProps {
  show: boolean;
  close?: boolean;
  width?: number;
  closeModal?: () => void;
}

const Modal: React.FC<ModalProps> = React.memo(
  ({ children, show, close = false, width = 500, closeModal }) => {
    const domEl = document.getElementById('modal-root');

    useEffect(() => {
      if (show) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }

      return () => {
        document.body.classList.remove('no-scroll');
      };
    }, [show]);

    if (!domEl) return null;

    return ReactDOM.createPortal(
      show ? (
        <Container onClick={(event: MouseEvent) => event.stopPropagation()}>
          <ModalContainer width={width}>
            {close && (
              <Button iconOnly onClick={closeModal}>
                <FiX size={24} />
              </Button>
            )}
            <div>{children}</div>
          </ModalContainer>
        </Container>
      ) : null,
      domEl,
    );
  },
);

export default Modal;
