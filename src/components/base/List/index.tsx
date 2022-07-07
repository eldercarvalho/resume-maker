import { createContext, useContext, useState } from 'react';
import { ListItem, ListItemProps } from './ListItem';
import { ListItemAction, ListItemActionProps } from './ListItemAction';
import { ListItemContent, ListItemContentProps } from './ListItemContent';
import { Container } from './styles';

interface ListContextData {
  currentIndex: number;
  setCurrentIndex(currentIndex: number): void;
  setNewIndex(newIndex: number): void;
}

const Context = createContext({} as ListContextData);

interface ListComposition {
  Item: React.FC<ListItemProps>;
  ItemContent: React.FC<ListItemContentProps>;
  ItemAction: React.FC<ListItemActionProps>;
}

interface ListProps {
  mb?: string;
  onDrag?(index: number, newIndex: number): void;
}

interface State {
  currentIndex: number;
}

const List: React.FC<ListProps> & ListComposition = ({ children, mb, onDrag }) => {
  const [state, setState] = useState<State>({} as State);

  const setCurrentIndex = (currentIndex: number) => {
    setState({
      ...state,
      currentIndex,
    });
  };

  const setNewIndex = (newIndex: number) => {
    if (onDrag) {
      onDrag(state.currentIndex, newIndex);
    }
  };

  return (
    <Context.Provider value={{ currentIndex: state.currentIndex, setCurrentIndex, setNewIndex }}>
      <Container mb={mb}>{children}</Container>
    </Context.Provider>
  );
};

List.Item = ListItem;
List.ItemContent = ListItemContent;
List.ItemAction = ListItemAction;

export default List;

export const useList = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('This component must be used within a <List> component.');
  }

  return context;
};
