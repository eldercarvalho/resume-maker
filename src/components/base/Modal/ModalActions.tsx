import { ModalActionsContainer } from './style';

export interface ModalActionsProps {
  align?: 'left' | 'center' | 'right';
}

const ModalActions: React.FC<ModalActionsProps> = ({ children, align = 'left' }) => (
  <ModalActionsContainer align={align}>{children}</ModalActionsContainer>
);

export default ModalActions;
