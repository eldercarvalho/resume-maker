import LanguageDropdown from './LanguageDropdown';
import ThemeSwitch from './ThemeSwitch';
import ActionButtons from './ActionButtons';
import { Container } from './styles';
import NewResumeForm from './NewResumeForm';

const Header: React.FC = () => (
  <Container>
    <NewResumeForm />

    <ActionButtons />

    <LanguageDropdown />

    <ThemeSwitch />
  </Container>
);

export default Header;
