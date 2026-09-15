import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { LANG_COOKIE } from "@/lib/lang-constants";

import { dictionaries, LANGS, type Dict, type Lang } from "./translations";

const DEFAULT_LANG: Lang = "en";

export function resolveLang(raw: string | null | undefined): Lang {
  return raw && LANGS.some((l) => l.code === raw) ? (raw as Lang) : DEFAULT_LANG;
}

function dirFor(lang: Lang): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang?: string | null;
}) {
  const [lang, setLangState] = useState<Lang>(resolveLang(initialLang));

  const dir = dirFor(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = (next: Lang) => {
    setLangState(next);
    // 1-year cookie so the server can render the right language on the very
    // next request — avoids the localStorage-only flash of the wrong language
    // between first paint and hydration.
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
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
