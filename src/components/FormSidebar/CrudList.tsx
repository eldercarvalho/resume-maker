import { Flex } from '@/style/flex';
import { FiEdit, FiPlus, FiTrash } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import Button from '../base/Button';
import List from '../base/List';

interface CrudListProps {
  items: any[];
  propertyToShow: string;
  emptyMessage: string;
  onAdd(): void;
  onEdit(id: string): void;
  onDelete(id: string): void;
  onDrag?(index: number, newIndex: number): void;
}

const CrudList: React.FC<CrudListProps> = ({
  items = [],
  propertyToShow,
  emptyMessage,
  onAdd,
  onEdit,
  onDelete,
  onDrag,
}) => (
  <>
    <List mb="2rem" onDrag={onDrag}>
      {items.map((item) => (
        <List.Item key={item.id}>
          <List.ItemContent>{item[propertyToShow]}</List.ItemContent>

          <List.ItemAction>
            <Button iconOnly textOnly reduced onClick={() => onEdit(item.id)}>
              <FiEdit size={14} />
            </Button>
            <Button iconOnly textOnly reduced onClick={() => onDelete(item.id)}>
              <FiTrash size={14} />
            </Button>
          </List.ItemAction>
        </List.Item>
      ))}

      {items.length === 0 && (
        <List.Item>
          <List.ItemContent align="center">{emptyMessage}</List.ItemContent>
        </List.Item>
      )}
    </List>

    <Flex xAlign="right">
      <Button outline small onClick={() => onAdd()}>
        <FiPlus size={20} />
        <FormattedMessage id="global.add" />
      </Button>
    </Flex>
  </>
);

export default CrudList;
