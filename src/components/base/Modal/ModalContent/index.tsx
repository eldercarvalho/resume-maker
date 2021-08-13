import { Container } from './styles';

export interface ModalContentProps {}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => (
  <Container>{children}</Container>
);
