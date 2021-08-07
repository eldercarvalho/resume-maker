import { useDropdown } from '..';
import { Container } from './styles';

const DropdownMenu: React.FC = ({ children }) => {
  const { isDropdownOpened } = useDropdown();

  return (
    <Container isOpened={isDropdownOpened}>
      <div>{children}</div>
    </Container>
  );
};

export default DropdownMenu;
