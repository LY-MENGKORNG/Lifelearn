import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import km from '@/locales/km.json'

const dateTimeFormats = {
  km: {
    date: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
    datetime: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    },
    short: {
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
    monthYear: {
      year: 'numeric',
      month: 'short',
    },
  },
}

export const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: process.env.VUE_APP_I18N_LOCALE, // Set default locale
  messages: {
    en,
    km,
  },
  dateTimeFormats,
})
