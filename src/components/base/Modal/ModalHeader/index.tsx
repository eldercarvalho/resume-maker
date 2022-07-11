import { Container } from './styles';

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => (
  <Container>
    <h2>{children}</h2>
  </Container>
);
