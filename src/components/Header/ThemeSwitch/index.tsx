import { ChangeEvent, useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '@/contexts/Theme';
import Switch from '@/components/base/Switch';

const LanguageSwitch: React.FC = () => {
  const { themeName, setThemeName } = useTheme();

  const handleSwitchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setThemeName(event.target.checked ? 'dark' : 'light');
    },
    [setThemeName],
  );

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
