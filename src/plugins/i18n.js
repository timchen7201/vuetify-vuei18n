import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '../lang'

Vue.use(VueI18n)

//  抓取瀏覽器語言
let locale = navigator.language.split('-')[0]
// zh 不統一所以強制訂為 zhHant
locale = locale == 'zh'?'zhHant':locale

// 預設為 en
export default new VueI18n({
  fallbackLocale: 'en',
  locale,
  messages,
  silentFallbackWarn: true
})