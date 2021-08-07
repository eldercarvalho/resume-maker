import { useTheme } from '@/contexts/Theme';
import FormSidebar from '../FormSidebar';

import { Container } from './style';

const Layout: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  return (
    <Container>
      <FormSidebar />
      <button onClick={() => setThemeName(themeName === 'dark' ? 'light' : 'dark')}>theme</button>
      <div />
    </Container>
  );
};

export default Layout;
