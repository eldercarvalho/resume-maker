import { ReactNode } from 'react';
import { useDropdown } from '..';
import { Container } from './styles';

export interface DropdownMenuProps {
  children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const { isDropdownOpened } = useDropdown();

  return (
    <Container isOpened={isDropdownOpened}>
      <div>{children}</div>
    </Container>
  );
};

export default DropdownMenu;
