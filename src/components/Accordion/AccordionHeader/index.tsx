import { useAccordion } from '..';
import { useAccordionItem } from '../AccordionItem';

import { Container } from './style';

export interface AccordionHeaderProps {}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  const { setCurrentItemKey } = useAccordion();
  const { isOpened, itemKey } = useAccordionItem();

  return (
    <Container>
      <button onClick={() => setCurrentItemKey(itemKey)} aria-expanded={isOpened}>
        {children}
      </button>
    </Container>
  );
};
