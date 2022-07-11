import { ReactNode } from 'react';
import { Container } from './styles';

export interface ListItemActionProps {
  children: ReactNode;
}

export const ListItemAction: React.FC<ListItemActionProps> = ({ children }) => (
  <Container>{children}</Container>
);
