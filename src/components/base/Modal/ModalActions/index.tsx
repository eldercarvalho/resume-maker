import { Container } from './styles';

export interface ModalActionsProps {
  align?: 'left' | 'center' | 'right';
}

export const ModalActions: React.FC<ModalActionsProps> = ({ children, align = 'right' }) => (
  <Container align={align}>{children}</Container>
);
