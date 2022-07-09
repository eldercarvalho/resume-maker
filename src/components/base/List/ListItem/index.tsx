import { useState, DragEvent, useRef } from 'react';
import { useList } from '..';
import { Container } from './styles';

export interface ListItemProps {}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  const containerRef = useRef<HTMLLIElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const { currentIndex, setCurrentIndex, setNewIndex } = useList();

  const getItemIndex = (): number =>
    Array.from(containerRef.current!.parentElement!.childNodes).findIndex(
      (node) => node === containerRef.current!,
    );

  const handleDragStart = (e: DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
    setCurrentIndex(getItemIndex());
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    if (currentIndex !== getItemIndex()) {
      setNewIndex(getItemIndex());
    }
  };

  return (
    <Container
      ref={containerRef}
      draggable
      isDragging={isDragging}
      isDragOver={isDragOver}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragEnter={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
    >
      {children}
    </Container>
  );
};
