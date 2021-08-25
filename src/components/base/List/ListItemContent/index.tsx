import { Container } from './styles';

export interface ListItemContentProps {
  align?: 'left' | 'center' | 'right';
}

export const ListItemContent: React.FC<ListItemContentProps> = ({ children, align = 'left' }) => (
  <Container align={align}>{children}</Container>
);
