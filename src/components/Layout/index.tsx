import { useLocale } from '@/contexts/Localization';
import { FormattedMessage } from 'react-intl';

import FormSidebar from '../FormSidebar';

import { Container } from './style';

const Layout: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const handleLangSwitch = () => {
    setLocale(locale === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <Container>
      <FormSidebar />

      <div>
        <button type="button" onClick={handleLangSwitch}>
          mudar
        </button>

        <FormattedMessage id="app.header" />
      </div>
    </Container>
  );
};

export default Layout;
