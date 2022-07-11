import { ReactNode, useEffect, useRef, useState } from 'react';
import { useAccordionItem } from '../AccordionItem';

import { Container } from './style';

export interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => {
  const [height, setHeight] = useState('auto');
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef(0);
  const { isOpened } = useAccordionItem();

  useEffect(() => {
    heightRef.current = containerRef.current!.offsetHeight;
  }, []);

  useEffect(() => {
    if (!isOpened) {
      heightRef.current = containerRef.current!.offsetHeight;
      setHeight(`${containerRef.current!.offsetHeight}px`);
    }

    setTimeout(() => {
      if (heightRef.current !== 0) {
        setHeight(isOpened ? `${heightRef.current}px` : '0');
      }
    }, 1);
  }, [isOpened]);

  const handleTransitionEnd = () => {
    if (isOpened) {
      setHeight('auto');
    }
  };

  return (
    <Container
      ref={containerRef}
      style={{ height }}
      className={`${isOpened ? 'isOpen' : ''}`}
      role="region"
      onTransitionEnd={handleTransitionEnd}
    >
      <div>{children}</div>
    </Container>
  );
};
