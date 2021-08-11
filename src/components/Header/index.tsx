import LanguageDropdown from '@/components/LanguageDropdown';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActionButtons from '@/components/ActionButtons';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <ActionButtons />

    <LanguageDropdown />

    <ThemeSwitch />
  </Container>
);

export default Header;
