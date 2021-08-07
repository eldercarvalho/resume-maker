import { useDropdown } from '..';
import Button, { ButtonProps } from '../../Button';

export type DropdownToggleProps = ButtonProps;

const DropdownToggle: React.FC<DropdownToggleProps> = ({ children, ...rest }) => {
  const { setIsDropdownOpened } = useDropdown();

  return (
    <Button onClick={() => setIsDropdownOpened((oldValue) => !oldValue)} {...rest}>
      {children}
    </Button>
  );
};

export default DropdownToggle;
