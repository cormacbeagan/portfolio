import { createContext, useContext, useEffect, useState } from 'react';
import { text } from '../static/text';
import { themes } from '../static/themes';
import useStorage from './useStorage';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ThemeProvider({ children }) {
  const [value, setStorageValue] = useStorage('theme', 'light');
  const [theme, setTheme] = useState(themes['light']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    themeSetter(value);
    setMounted(true);
  }, []);

  //* https://www.joshwcomeau.com/react/dark-mode/

  function themeSetter(theme) {
    setStorageValue(theme);
    setTheme(themes[theme]);
  }

  const body = (
    <LocalStateProvider value={{ themeSetter, theme, text, themes }}>
      {children}
    </LocalStateProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }
  return body;
}

function useTheme() {
  const all = useContext(LocalStateContext);
  return all;
}

export { ThemeProvider, useTheme };
