import Switch from '@/components/base/Switch';
import { useTheme } from '@/contexts';
import { useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Container } from './styles';

const Header: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  const handleSwitchChange = useCallback((event) => {
    setThemeName(event.target.checked ? 'dark' : 'light');
  }, []);

  return (
    <Container>
      <Switch
        checked={themeName === 'dark'}
        prependIcon={FiMoon}
        appendIcon={FiSun}
        onChange={handleSwitchChange}
      />
    </Container>
  );
};

export default Header;
