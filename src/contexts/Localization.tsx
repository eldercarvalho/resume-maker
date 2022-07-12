import { useState, createContext, useEffect, useContext } from 'react';
import { IntlProvider } from 'react-intl';

import English from '@/support/lang/en.json';
import Portuguese from '@/support/lang/pt-BR.json';

const LOCALE_STORAGE_KEY = '@ResumeMaker:locale';

interface LocaleContextData {
  locale: string;
  setLocale(locale: string): void;
}

const Context = createContext<LocaleContextData>({} as LocaleContextData);

const initialLocale = localStorage.getItem(LOCALE_STORAGE_KEY) ?? navigator.language;
localStorage.setItem(LOCALE_STORAGE_KEY, initialLocale);

const defineMessages = (locale: string) => {
  switch (locale) {
    case 'en':
      return English;
    default:
      return Portuguese;
  }
};

const initialMessages = defineMessages(initialLocale);

type LocalizationProps = {
  children: React.ReactNode;
};

export const Localization: React.FC<LocalizationProps> = ({ children }) => {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    setMessages(defineMessages(locale));
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
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
