import { Container } from './styles';

export interface ListItemActionProps {}

export const ListItemAction: React.FC<ListItemActionProps> = ({ children }) => (
  <Container>{children}</Container>
);
