import LanguageDropdown from './LanguageDropdown';
import ThemeSwitch from './ThemeSwitch';
import ActionButtons from './ActionButtons';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <ActionButtons />

    <LanguageDropdown />

    <ThemeSwitch />
  </Container>
);

export default Header;
