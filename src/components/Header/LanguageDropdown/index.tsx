import Dropdown from '@/components/base/Dropdown';
import { useLocale } from '@/contexts';
import { useCallback } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const LanguageDropdown: React.FC = () => {
  const { locale, setLocale } = useLocale();

  const handleClick = useCallback(
    (lang: string) => {
      setLocale(lang);
    },
    [setLocale],
  );

  return (
    <Dropdown>
      <Dropdown.Toggle textOnly reduced>
        {locale.replace(/-\w+$/, '').toUpperCase()}
        <FiChevronDown size={16} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleClick('pt-BR')}>PT - Português</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick('en')}>EN - English</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
