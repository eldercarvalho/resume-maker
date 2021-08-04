import { useEffect, useRef, useState } from 'react';
import { useAccordionItem } from '../AccordionItem';

import { Container } from './style';

export interface AccordionContentProps {}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  const [height, setHeight] = useState('auto');
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef(0);
  const { isOpened } = useAccordionItem();

  useEffect(() => {
    if (containerRef.current) {
      heightRef.current = containerRef.current.offsetHeight;
    }
  }, []);

  useEffect(() => {
    if (heightRef.current !== 0) {
      setHeight(isOpened ? `${heightRef.current}px` : '0');
    }
  }, [isOpened]);

  return (
    <Container
      ref={containerRef}
      style={{ height }}
      className={`${isOpened ? 'isOpen' : ''}`}
      role="region"
    >
      <div>{children}</div>
    </Container>
  );
};
