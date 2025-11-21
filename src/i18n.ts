import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import en from '../public/locales/en/translation.json'
import fr from '../public/locales/fr/translation.json'

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      }
    },
    fallbackLng: 'en',
    load: 'all',
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
