import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { dictionaries, LANGS, type Dict, type Lang } from "./translations";

const STORAGE_KEY = "site-lang";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && LANGS.some((l) => l.code === stored)) setLangState(stored);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang], dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export { LANGS };
export type { Lang, Dict };
