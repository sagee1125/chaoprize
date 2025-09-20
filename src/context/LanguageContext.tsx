import React, { createContext, useContext, useEffect, useState } from "react";

export enum Language {
  EN = "en",
  SC = "sc",
  TC = "tc",
}

interface LanguageContextProps {
  lang: Language;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getInitialLang = (): Language => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang") as Language | null;
    const storedLang = localStorage.getItem("lang") as Language | null;

    if (urlLang && Object.values(Language).includes(urlLang)) {
      return urlLang;
    }
    if (storedLang && Object.values(Language).includes(storedLang)) {
      return storedLang;
    }
    return Language.EN; // 預設英語
  };

  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }, [lang]);

  const switchLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
