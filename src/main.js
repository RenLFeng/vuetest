import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import zh from '@/i18n/langs/zh'
import en from '@/i18n/langs/en'
// import VueDND from 'awe-dnd'

// Vue.use(VueDND)
Vue.use(VueI18n)
Vue.config.productionTip = false
//实例化vue-i18n
const i18n = new VueI18n({

  // 从本地存储中取，如果没有默认为中文，
  // 这样可以解决切换语言后，没记住选择的语言，刷新页面后还是默认的语言
  locale: localStorage.getItem('lang')||'zh',
  
  messages: {
    'zh': zh, // 中文语言包
    'en': en // 英文语言包
  }
})
new Vue({
  i18n,
  render: h => h(App),

}).$mount('#app')
