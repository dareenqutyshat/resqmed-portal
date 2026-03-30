import { translations } from './translations'; // Both are in the same folder (src)
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    // This part is crucial for Arabic (RTL)
    document.documentElement.dir = translations[lang].direction;
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);