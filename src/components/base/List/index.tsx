import { ListItem, ListItemProps } from './ListItem';
import { ListItemAction, ListItemActionProps } from './ListItemAction';
import { ListItemContent, ListItemContentProps } from './ListItemContent';
import { Container } from './styles';

interface ListComposition {
  Item: React.FC<ListItemProps>;
  ItemContent: React.FC<ListItemContentProps>;
  ItemAction: React.FC<ListItemActionProps>;
}

interface ListProps {
  mb?: string;
}

const List: React.FC<ListProps> & ListComposition = ({ children, mb }) => (
  <Container mb={mb}>{children}</Container>
);

List.Item = ListItem;
List.ItemContent = ListItemContent;
List.ItemAction = ListItemAction;

export default List;
