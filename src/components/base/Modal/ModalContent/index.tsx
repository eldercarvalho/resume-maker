import { Container } from './styles';

export interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => (
  <Container>{children}</Container>
);
