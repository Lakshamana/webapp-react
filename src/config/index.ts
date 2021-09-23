import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translate/english";
import pt from "./translate/ptbr";

const resources = {
  en,
  pt,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
