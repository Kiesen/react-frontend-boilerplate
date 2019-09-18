import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enclient from 'i18n/locales/en/client.json';
import declient from 'i18n/locales/de/client.json';

/**
 * Create and export an i18next instance
 * used for translation.
 *
 * @exports i18nextInstance
 */
export default i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        client: enclient,
      },
      de: {
        client: declient,
      },
    },
    debug: process.env.REACT_APP_I18N_DEBUG === 'true' ? true : false,
    interpolation: {
      escapeValue: false,
    },
  });
