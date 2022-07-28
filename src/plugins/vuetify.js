// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHant from 'vuetify/lib/locale/zh-Hant'
import en from 'vuetify/lib/locale/en'
import fr from 'vuetify/es5/locale/fr'


Vue.use(Vuetify)

let current = navigator.language.split('-')[0]
// zh 不統一所以強制訂為 zhHants
current = current == 'zh'?'zhHant':current
console.log("current",current)

export default new Vuetify({
    lang: {
        locales: { 
            zhHant, 
            en, 
            fr 
        },
        current: current,
      },
    icons: {
      iconfont: 'mdiSvg'
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#1689E7',
          accent: '#4CBB99',
          secondary: '#7BC6FF',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252'
        },
        light: {
          primary: '#1689E7',
          accent: '#4CBB99',
          secondary: '#7BC6FF',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252'
        }
      }
    }
  })
  