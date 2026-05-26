import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./messages/pt.json";
import en from "./messages/en.json";

export type Locale = "pt" | "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export function setLocale(locale: Locale) {
  if (i18n.language !== locale) {
    void i18n.changeLanguage(locale);
  }
}

export default i18n;
