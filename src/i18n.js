import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Prevent non existence of VUE_APP_I18N_LOCALE
const locale = process.env.VUE_APP_I18N_LOCALE || 'en'

export default new VueI18n({
  locale,
  fallbackLocale: locale,
  messages: {
    [locale]: require(`@/locales/${locale}.json`)
  }
})
