import Vue from 'vue'
import App from './App.vue'
// import VueI18n from 'vue-i18n'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import i18n from './plugins/i18n'

// Vue.use(VueI18n)

// const i18n = new VueI18n({
//     locale: 'tw',
//     messages: {
//       tw:{
//         ok:'好'
//     }},
// });

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
