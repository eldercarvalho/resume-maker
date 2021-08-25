import { Container } from './styles';

export interface ListItemProps {}

export const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <Container>{children}</Container>
);
