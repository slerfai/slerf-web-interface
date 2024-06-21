import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import locales from '@/locales'

export default i18next.use(initReactI18next).init({
  debug: true,
  lng: localStorage.getItem('locales') || 'en_US',
  fallbackLng: 'en_US',
  resources: locales,
})
