import LanguageDropdown from '@/components/LanguageDropdown';
import ThemeSwitch from '@/components/ThemeSwitch';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <LanguageDropdown />

    <ThemeSwitch />
  </Container>
);

export default Header;
