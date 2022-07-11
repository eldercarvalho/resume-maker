import { useState, createContext, useContext, useEffect, ReactNode } from 'react';
import { useAccordion } from '..';

import { Container } from './style';

interface ContextData {
  isOpened: boolean;
  itemKey: string;
}

const Context = createContext<ContextData>({} as ContextData);

export interface AccordionItemProps {
  children: ReactNode;
  itemKey: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, itemKey }) => {
  const { currentItemKey } = useAccordion();
  const [isOpened, setIsOpened] = useState(() => currentItemKey === itemKey);

  useEffect(() => {
    setIsOpened(currentItemKey === itemKey);
  }, [currentItemKey]);

  return (
    <Context.Provider value={{ isOpened, itemKey }}>
      <Container>{children}</Container>
    </Context.Provider>
  );
};

export const useAccordionItem = (): ContextData => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('This component must be used within a <Accordion.Item> component.');
  }

  return context;
};
