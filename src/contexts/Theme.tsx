import { useState, createContext, useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Dark, Light } from '@/support/themes';

interface ThemeContextData {
  themeName: string;
  setThemeName(themeName: 'dark' | 'light'): void;
}

const Context = createContext<ThemeContextData>({} as ThemeContextData);

const themes = {
  dark: Dark,
  light: Light,
};

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState(Dark);
  const [themeName, setThemeName] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setTheme(themes[themeName]);
  }, [themeName]);

  return (
    <Context.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(Context);

  return context;
};
