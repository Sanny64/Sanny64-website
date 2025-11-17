import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import type { ReactNode } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n';
import { LanguageContext } from './LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(
    () => (Cookies.get('language') as Language) || 'en'
  );

  useEffect(() => {
    Cookies.set('language', language, { expires: 365 });
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('language', lang, { expires: 365 });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
