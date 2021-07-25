import { useLocale } from '@/contexts/Localization';
import { FormattedMessage } from 'react-intl';

const Layout: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const handleLangSwitch = () => {
    setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <main>
      <div>sidebar</div>
      <div>
        <button type="button" onClick={handleLangSwitch}>
          mudar
        </button>
        <FormattedMessage id="app.header" />
      </div>
    </main>
  );
};

export default Layout;
