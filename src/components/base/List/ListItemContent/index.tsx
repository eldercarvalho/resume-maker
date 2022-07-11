import { ReactNode } from 'react';
import { Container } from './styles';

export interface ListItemContentProps {
  align?: 'left' | 'center' | 'right';
  isEmptyState?: boolean;
  children: ReactNode;
}

export const ListItemContent: React.FC<ListItemContentProps> = ({
  children,
  align = 'left',
  isEmptyState,
}) => (
  <Container align={align} isEmpty={isEmptyState}>
    {children}
  </Container>
);
