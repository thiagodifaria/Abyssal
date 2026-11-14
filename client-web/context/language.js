import React from 'react';

const storageKey = '@abyssal:language';
const defaultLanguage = 'pt';

export const LanguageContext = React.createContext(null);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = React.useState(defaultLanguage);

  React.useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    const browserLanguage = window.navigator.language.startsWith('pt')
      ? 'pt'
      : 'en';
    const nextLanguage = storedLanguage || browserLanguage;

    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : 'en';
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguage(currentLanguage => {
      const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
      window.localStorage.setItem(storageKey, nextLanguage);
      document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : 'en';
      return nextLanguage;
    });
  }, []);

  const value = React.useMemo(() => ({ language, toggleLanguage }), [
    language,
    toggleLanguage,
  ]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageContextProvider.');
  }

  return context;
};
