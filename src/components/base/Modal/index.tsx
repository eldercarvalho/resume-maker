import React, { MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';

import Button from '../Button';
import { ModalActions, ModalActionsProps } from './ModalActions';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';

import { Container, ModalContainer } from './style';

interface ModalComposition {
  Header: React.FC<ModalHeaderProps>;
  Content: React.FC<ModalContentProps>;
  Actions: React.FC<ModalActionsProps>;
}

interface ModalProps {
  show: boolean;
  close?: boolean;
  width?: number;
  children: React.ReactNode;
  onCloseModal?: () => void;
}

const Modal: React.FC<ModalProps> & ModalComposition = ({
  children,
  show,
  close = false,
  width = 500,
  onCloseModal,
}) => {
  const domEl = document.getElementById('modals');

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
            <Button textOnly iconOnly onClick={onCloseModal}>
              <FiX size={24} />
            </Button>
          )}
          <div>{children}</div>
        </ModalContainer>
      </Container>
    ) : null,
    domEl,
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;
