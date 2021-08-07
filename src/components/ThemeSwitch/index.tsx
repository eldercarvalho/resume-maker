import { useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '@/contexts';
import Switch from '@/components/base/Switch';

const LanguageSwitch: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  const handleSwitchChange = useCallback((event) => {
    setThemeName(event.target.checked ? 'dark' : 'light');
  }, []);

  return (
    <Switch
      checked={themeName === 'dark'}
      prependIcon={FiMoon}
      appendIcon={FiSun}
      onChange={handleSwitchChange}
    />
  );
};

export default LanguageSwitch;
