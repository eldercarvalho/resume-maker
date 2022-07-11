import { createContext, useEffect, useRef, useContext, useState, useMemo, ReactNode } from 'react';

import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';
import DropdownItem, { DropdownItemProps } from './DropdownItem';
import DropdownToggle, { DropdownToggleProps } from './DropdownToggle';

import { Container } from './styles';

interface DropdownContextData {
  isDropdownOpened: boolean;
  setIsDropdownOpened(value: boolean | ((oldValue: boolean) => boolean)): void;
}

const DropdownContext = createContext<DropdownContextData>({} as DropdownContextData);

interface DropdownComposition {
  Menu: React.FC<DropdownMenuProps>;
  Item: React.FC<DropdownItemProps>;
  Toggle: React.FC<DropdownToggleProps>;
}

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> & DropdownComposition = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const handleOutsideClick = (event: globalThis.MouseEvent) => {
    if (
      containerRef &&
      containerRef.current !== event.target &&
      !containerRef.current?.contains(event.target as Node)
    ) {
      setIsDropdownOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick, setIsDropdownOpened]);

  const memoizedContextData = useMemo(
    () => ({ isDropdownOpened, setIsDropdownOpened }),
    [isDropdownOpened, setIsDropdownOpened],
  );

  return (
    <DropdownContext.Provider value={memoizedContextData}>
      <Container ref={containerRef}>{children}</Container>
    </DropdownContext.Provider>
  );
};

export const useDropdown = (): DropdownContextData => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdown must be used within DropdownProvider');
  }

  return context;
};

Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Toggle = DropdownToggle;

export default Dropdown;
