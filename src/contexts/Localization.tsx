import { useState, createContext, useEffect, useContext } from 'react';
import { IntlProvider } from 'react-intl';

import English from '@/support/lang/en.json';
import Portuguese from '@/support/lang/pt-BR.json';

interface LocaleContextData {
  locale: string;
  setLocale(locale: string): void;
}

const Context = createContext<LocaleContextData>({} as LocaleContextData);

const local = navigator.language;

const defineMessages = (locale: string) => {
  switch (locale) {
    case 'en':
      return English;
    default:
      return Portuguese;
  }
};

const initialMessages = defineMessages(local);

export const Localization: React.FC = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    setMessages(defineMessages(locale));
  }, [locale]);

  return (
    <Context.Provider value={{ locale, setLocale }}>
      <IntlProvider messages={messages} locale={locale} defaultLocale="pt-BR">
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export const useLocale = (): LocaleContextData => {
  const context = useContext(Context);

  return context;
};
