import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { useAccordion } from '..';
import { useAccordionItem } from '../AccordionItem';

import { Container } from './style';

export interface AccordionHeaderProps {}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  const { setCurrentItemKey } = useAccordion();
  const { isOpened, itemKey } = useAccordionItem();

  return (
    <Container isOpened={isOpened}>
      <button onClick={() => setCurrentItemKey(itemKey)} aria-expanded={isOpened}>
        {children}
        {isOpened ? (
          <FiChevronUp size={22} role="img" aria-label="Opened Indicator" />
        ) : (
          <FiChevronDown size={22} role="img" aria-label="Closed Indicator" />
        )}
      </button>
    </Container>
  );
};
