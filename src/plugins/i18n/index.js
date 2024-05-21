import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import vn from './lang/vn.js'
import en from './lang/en.js'

i18n.use(initReactI18next).init({
  lng: "vn",
  fallbackLng: "vn",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    vn: {
      translation: vn,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
