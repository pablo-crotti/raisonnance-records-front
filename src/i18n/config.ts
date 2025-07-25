import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationFR from './locales/fr/translation.json'
// import translationEN from './locales/en/translation.json'
// import translationDE from './locales/de/translation.json'

const resources = {
    fr: { translation: translationFR },
    // en: { translation: translationEN },
    // de: { translation: translationDE },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['cookie'],
        },
    })

export default i18n
