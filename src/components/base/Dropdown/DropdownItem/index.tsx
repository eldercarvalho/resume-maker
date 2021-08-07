import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useDropdown } from '..';
import { Container } from './styles';

export type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick, ...rest }) => {
  const { setIsDropdownOpened } = useDropdown();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }

    setIsDropdownOpened(false);
  };

  return (
    <Container onClick={handleClick} {...rest}>
      {children}
    </Container>
  );
};

export default DropdownItem;
