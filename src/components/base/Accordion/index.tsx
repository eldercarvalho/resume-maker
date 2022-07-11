import { createContext, useContext, useState } from 'react';

import { Container } from './style';

import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { AccordionHeader, AccordionHeaderProps } from './AccordionHeader';
import { AccordionContent, AccordionContentProps } from './AccordionContent';

interface ContextData {
  currentItemKey: string;
  setCurrentItemKey(itemKey: string): void;
}

const Context = createContext<ContextData>({} as ContextData);

interface AccordionComposition {
  Item: React.FC<AccordionItemProps>;
  Header: React.FC<AccordionHeaderProps>;
  Content: React.FC<AccordionContentProps>;
}

interface AccordionProps {
  children: React.ReactNode;
  defaultItemKey?: string;
}

const Accordion: React.FC<AccordionProps> & AccordionComposition = ({
  children,
  defaultItemKey,
}) => {
  const [current, setCurrent] = useState(() => defaultItemKey || '');

  const setCurrentItemKey = (itemKey: string): void => {
    setCurrent((old) => (itemKey !== old ? itemKey : ''));
  };

  return (
    <Context.Provider value={{ currentItemKey: current, setCurrentItemKey }}>
      <Container>{children}</Container>
    </Context.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export const useAccordion = (): ContextData => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('This component must be used within a <Accordion> component.');
  }

  return context;
};

export default Accordion;
