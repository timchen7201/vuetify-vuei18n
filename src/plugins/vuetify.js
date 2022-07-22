// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHans from 'vuetify/lib/locale/zh-Hans'
import en from 'vuetify/lib/locale/en'
import fr from 'vuetify/es5/locale/fr'
console.log("en",en)
console.log("zhHans",zhHans)
// const locales = {
//     en: require('vuetify/es5/locale/en'),
//     fr: require('vuetify/es5/locale/fr'),
//     zh: require('vuetify/lib/locale/zh-Hans'),
//   }

Vue.use(Vuetify)



// const lang = localStorage.getItem('language') || 'tw'
// console.log("--",lang)

const current = navigator.language.split('-')[0]


export default new Vuetify({
    lang: {
        locales: { 
            zhHans, 
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
  