/* eslint-disable react-refresh/only-export-components */
// src/contexts/LanguageContext.jsx
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
    // Portfolio default language is English only (language switcher removed)
    const language = 'en';
    const t = translations[language];

    useEffect(() => {
        document.documentElement.lang = 'en';
    }, []);

    const value = useMemo(() => ({ language, t }), [t]);

    return (<LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>);
};

// Custom hook to use in your components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
